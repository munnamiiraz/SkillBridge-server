import { prisma } from "../../lib/prisma";
import { createTutorProfileSchema, updateTutorProfileSchema, CreateTutorProfileInput, UpdateTutorProfileInput, createAvailabilitySlotSchema, updateAvailabilitySlotSchema, CreateAvailabilitySlotInput, UpdateAvailabilitySlotInput } from "./tutor.validation";
import { randomUUID } from "crypto";
import paginationSortingHelper from "../../helpers/paginationSortingHelper";

const createProfile = async (userId: string, data: CreateTutorProfileInput) => {
  const validatedData = createTutorProfileSchema.parse(data);
  
  return await prisma.tutor_profile.create({
    data: {
      ...validatedData,
      userId,
      id: crypto.randomUUID()
    }
  });
};

const updateProfile = async (userId: string, data: UpdateTutorProfileInput) => {
  const validatedData = updateTutorProfileSchema.parse(data);
  
  return await prisma.tutor_profile.update({
    where: { userId },
    data: validatedData
  });
};

const getProfile = async (userId: string) => {
  return await prisma.tutor_profile.findUnique({
    where: { userId },
    include: {
      user: {
        select: { id: true, name: true, email: true, image: true }
      }
    }
  });
};

const createAvailabilitySlot = async (userId: string, data: CreateAvailabilitySlotInput) => {
  const validatedData = createAvailabilitySlotSchema.parse(data);
  
  // Get tutor profile
  const tutorProfile = await prisma.tutor_profile.findUnique({
    where: { userId }
  });
  
  if (!tutorProfile) {
    throw new Error("Tutor profile not found");
  }
  
  // Check for overlapping slots on the same day
  const existingSlot = await prisma.availability_slot.findFirst({
    where: {
      tutorProfileId: tutorProfile.id,
      dayOfWeek: validatedData.dayOfWeek,
      isActive: true,
      OR: [
        {
          AND: [
            { startTime: { lte: validatedData.startTime } },
            { endTime: { gt: validatedData.startTime } }
          ]
        },
        {
          AND: [
            { startTime: { lt: validatedData.endTime } },
            { endTime: { gte: validatedData.endTime } }
          ]
        },
        {
          AND: [
            { startTime: { gte: validatedData.startTime } },
            { endTime: { lte: validatedData.endTime } }
          ]
        }
      ]
    }
  });
  
  if (existingSlot) {
    throw new Error("Time slot overlaps with existing availability");
  }
  
  return await prisma.availability_slot.create({
    data: {
      id: randomUUID(),
      tutorProfileId: tutorProfile.id,
      ...validatedData,
      updatedAt: new Date()
    }
  });
};

const updateAvailabilitySlot = async (userId: string, slotId: string, data: UpdateAvailabilitySlotInput) => {
  const validatedData = updateAvailabilitySlotSchema.parse(data);
  
  // Get tutor profile
  const tutorProfile = await prisma.tutor_profile.findUnique({
    where: { userId }
  });
  
  if (!tutorProfile) {
    throw new Error("Tutor profile not found");
  }
  
  // Check if slot belongs to tutor
  const slot = await prisma.availability_slot.findFirst({
    where: {
      id: slotId,
      tutorProfileId: tutorProfile.id
    }
  });
  
  if (!slot) {
    throw new Error("Availability slot not found");
  }
  
  return await prisma.availability_slot.update({
    where: { id: slotId },
    data: {
      ...validatedData,
      updatedAt: new Date()
    }
  });
};

const getAvailabilitySlots = async (userId: string) => {
  const tutorProfile = await prisma.tutor_profile.findUnique({
    where: { userId }
  });
  
  if (!tutorProfile) {
    throw new Error("Tutor profile not found");
  }
  
  return await prisma.availability_slot.findMany({
    where: {
      tutorProfileId: tutorProfile.id
    },
    orderBy: [
      { dayOfWeek: 'asc' },
      { startTime: 'asc' }
    ]
  });
};

const deleteAvailabilitySlot = async (userId: string, slotId: string) => {
  const tutorProfile = await prisma.tutor_profile.findUnique({
    where: { userId }
  });
  
  if (!tutorProfile) {
    throw new Error("Tutor profile not found");
  }
  
  const slot = await prisma.availability_slot.findFirst({
    where: {
      id: slotId,
      tutorProfileId: tutorProfile.id
    }
  });
  
  if (!slot) {
    throw new Error("Availability slot not found");
  }
  
  return await prisma.availability_slot.delete({
    where: { id: slotId }
  });
};

const getTeachingSessions = async (userId: string, options: { page: number; limit: number; status?: string }) => {
  const tutorProfile = await prisma.tutor_profile.findUnique({
    where: { userId }
  });
  
  if (!tutorProfile) {
    throw new Error("Tutor profile not found");
  }
  
  const paginationHelper = paginationSortingHelper({
    page: options.page,
    limit: options.limit,
    sortBy: "scheduledAt",
    sortOrder: "desc"
  });

  const whereClause: any = {
    tutorProfileId: tutorProfile.id
  };

  if (options.status) {
    whereClause.status = options.status;
  }

  const [sessions, total] = await Promise.all([
    prisma.booking.findMany({
      where: whereClause,
      include: {
        student: {
          select: {
            id: true,
            name: true,
            image: true,
            email: true
          }
        },
        review: {
          select: {
            id: true,
            rating: true,
            comment: true,
            createdAt: true
          }
        }
      },
      skip: paginationHelper.skip,
      take: paginationHelper.limit,
      orderBy: {
        scheduledAt: paginationHelper.sortOrder as "asc" | "desc"
      }
    }),
    prisma.booking.count({ where: whereClause })
  ]);

  const totalPages = Math.ceil(total / paginationHelper.limit);

  return {
    data: sessions,
    meta: {
      total,
      page: paginationHelper.page,
      limit: paginationHelper.limit,
      totalPages
    }
  };
};

const getReviews = async (userId: string, options: { page: number; limit: number; rating?: number }) => {
  const tutorProfile = await prisma.tutor_profile.findUnique({
    where: { userId }
  });
  
  if (!tutorProfile) {
    throw new Error("Tutor profile not found");
  }
  
  const paginationHelper = paginationSortingHelper({
    page: options.page,
    limit: options.limit,
    sortBy: "createdAt",
    sortOrder: "desc"
  });

  const whereClause: any = {
    booking: {
      tutorProfileId: tutorProfile.id
    }
  };

  if (options.rating) {
    whereClause.rating = options.rating;
  }

  const [reviews, total] = await Promise.all([
    prisma.review.findMany({
      where: whereClause,
      include: {
        student: {
          select: {
            id: true,
            name: true,
            image: true
          }
        },
        booking: {
          select: {
            id: true,
            scheduledAt: true,
            subject: true,
            duration: true
          }
        }
      },
      skip: paginationHelper.skip,
      take: paginationHelper.limit,
      orderBy: {
        createdAt: paginationHelper.sortOrder as "asc" | "desc"
      }
    }),
    prisma.review.count({ where: whereClause })
  ]);

  const totalPages = Math.ceil(total / paginationHelper.limit);

  return {
    data: reviews,
    meta: {
      total,
      page: paginationHelper.page,
      limit: paginationHelper.limit,
      totalPages
    }
  };
};

const getRatingStats = async (userId: string) => {
  const tutorProfile = await prisma.tutor_profile.findUnique({
    where: { userId }
  });
  
  if (!tutorProfile) {
    throw new Error("Tutor profile not found");
  }

  const [ratingDistribution, totalReviews, averageRating] = await Promise.all([
    prisma.review.groupBy({
      by: ['rating'],
      where: {
        booking: {
          tutorProfileId: tutorProfile.id
        }
      },
      _count: {
        rating: true
      },
      orderBy: {
        rating: 'desc'
      }
    }),
    prisma.review.count({
      where: {
        booking: {
          tutorProfileId: tutorProfile.id
        }
      }
    }),
    prisma.review.aggregate({
      where: {
        booking: {
          tutorProfileId: tutorProfile.id
        }
      },
      _avg: {
        rating: true
      }
    })
  ]);

  // Create rating distribution with all ratings (1-5)
  const distribution = [5, 4, 3, 2, 1].map(rating => {
    const found = ratingDistribution.find(r => r.rating === rating);
    return {
      rating,
      count: found ? found._count.rating : 0,
      percentage: totalReviews > 0 ? Math.round((found ? found._count.rating : 0) / totalReviews * 100) : 0
    };
  });

  return {
    totalReviews,
    averageRating: averageRating._avg.rating ? Number(averageRating._avg.rating.toFixed(1)) : 0,
    distribution
  };
};

const updateBookingStatus = async (userId: string, bookingId: string, data: { status: string }) => {
  const tutorProfile = await prisma.tutor_profile.findUnique({
    where: { userId }
  });
  
  if (!tutorProfile) {
    throw new Error("Tutor profile not found");
  }

  const booking = await prisma.booking.findFirst({
    where: {
      id: bookingId,
      tutorProfileId: tutorProfile.id
    }
  });

  if (!booking) {
    throw new Error("Booking not found");
  }

  if (!['CONFIRMED', 'COMPLETED', 'CANCELLED'].includes(data.status)) {
    throw new Error("Invalid status");
  }

  if (booking.status === "CANCELLED") {
    throw new Error("Cannot update cancelled booking");
  }

  return await prisma.booking.update({
    where: { id: bookingId },
    data: {
      status: data.status as any,
      updatedAt: new Date()
    },
    include: {
      student: {
        select: {
          id: true,
          name: true,
          email: true
        }
      }
    }
  });
};

export const TutorService = { createProfile, updateProfile, getProfile, createAvailabilitySlot, updateAvailabilitySlot, getAvailabilitySlots, deleteAvailabilitySlot, getTeachingSessions, getReviews, getRatingStats, updateBookingStatus };