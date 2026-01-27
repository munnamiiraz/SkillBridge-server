import { prisma } from "../../lib/prisma";
import { updateProfileSchema, UpdateProfileInput, createReviewSchema, CreateReviewInput } from "./student.validation";
import { createBookingSchema, CreateBookingInput } from "./booking.validation";
import { randomUUID } from "crypto";

import paginationSortingHelper from "../../helpers/paginationSortingHelper";

const updateProfile = async (userId: string, data: UpdateProfileInput) => {
  const validatedData = updateProfileSchema.parse(data);
  
  return await prisma.user.update({
    where: { id: userId },
    data: validatedData
  });
};

const getProfile = async (userId: string) => {
  return await prisma.user.findUnique({
    where: { id: userId }
  });
};

const createReview = async (studentId: string, data: CreateReviewInput) => {
  const validatedData = createReviewSchema.parse(data);
  
  // Check if booking exists and belongs to the student
  const booking = await prisma.booking.findFirst({
    where: {
      id: validatedData.bookingId,
      studentId: studentId
    }
  });
  
  if (!booking) {
    throw new Error("Booking not found or doesn't belong to you");
  }
  
  // Check if booking is completed
  if (booking.status !== "COMPLETED") {
    throw new Error("You can only review completed sessions");
  }
  
  // Check if session time has passed
  const sessionEndTime = new Date(booking.scheduledAt.getTime() + booking.duration * 60000);
  if (sessionEndTime > new Date()) {
    throw new Error("You can only review after the session has ended");
  }
  
  // Check if review already exists for this booking
  const existingReview = await prisma.review.findUnique({
    where: { bookingId: validatedData.bookingId }
  });
  
  if (existingReview) {
    throw new Error("Review already exists for this booking");
  }
  
  return await prisma.review.create({
    data: {
      id: randomUUID(),
      bookingId: validatedData.bookingId,
      studentId: studentId,
      rating: validatedData.rating,
      comment: validatedData.comment,
      updatedAt: new Date()
    },
    include: {
      booking: {
        include: {
          tutor_profile: {
            include: {
              user: {
                select: {
                  id: true,
                  name: true
                }
              }
            }
          }
        }
      }
    }
  });
};

const createBooking = async (studentId: string, data: CreateBookingInput) => {
  const validatedData = createBookingSchema.parse(data);
  
  // Check if tutor profile exists and is available
  const tutorProfile = await prisma.tutor_profile.findUnique({
    where: { id: validatedData.tutorProfileId },
    include: {
      user: {
        select: {
          status: true
        }
      }
    }
  });
  
  if (!tutorProfile || !tutorProfile.isAvailable || tutorProfile.user.status !== "ACTIVE") {
    throw new Error("Tutor is not available for booking");
  }
  
  // Check if the scheduled time is in the future
  const scheduledDate = new Date(validatedData.scheduledAt);
  if (scheduledDate <= new Date()) {
    throw new Error("Booking time must be in the future");
  }
  
  // Calculate price based on duration and hourly rate
  const price = (validatedData.duration / 60) * tutorProfile.hourlyRate;
  
  return await prisma.booking.create({
    data: {
      id: randomUUID(),
      studentId: studentId,
      tutorProfileId: validatedData.tutorProfileId,
      scheduledAt: scheduledDate,
      duration: validatedData.duration,
      subject: validatedData.subject,
      notes: validatedData.notes,
      price: price,
      status: "PENDING",
      updatedAt: new Date()
    },
    include: {
      tutor_profile: {
        include: {
          user: {
            select: {
              id: true,
              name: true,
              email: true
            }
          }
        }
      }
    }
  });
};

const getBookings = async (studentId: string, options: { page: number; limit: number; status?: string }) => {
  const paginationHelper = paginationSortingHelper({
    page: options.page,
    limit: options.limit,
    sortBy: "scheduledAt",
    sortOrder: "desc"
  });

  const whereClause: any = {
    studentId: studentId
  };

  if (options.status) {
    whereClause.status = options.status;
  }

  const [bookings, total] = await Promise.all([
    prisma.booking.findMany({
      where: whereClause,
      include: {
        tutor_profile: {
          include: {
            user: {
              select: {
                id: true,
                name: true,
                image: true
              }
            }
          }
        },
        review: true
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
    data: bookings,
    meta: {
      total,
      page: paginationHelper.page,
      limit: paginationHelper.limit,
      totalPages
    }
  };
};

const getReviewableBookings = async (studentId: string, options: { page: number; limit: number }) => {
  const paginationHelper = paginationSortingHelper({
    page: options.page,
    limit: options.limit,
    sortBy: "scheduledAt",
    sortOrder: "desc"
  });

  const currentTime = new Date();
  
  const [bookings, total] = await Promise.all([
    prisma.booking.findMany({
      where: {
        studentId: studentId,
        status: "COMPLETED",
        scheduledAt: {
          lt: new Date(currentTime.getTime() - 60 * 60000) // At least 1 hour ago
        },
        review: null // No review exists
      },
      include: {
        tutor_profile: {
          include: {
            user: {
              select: {
                id: true,
                name: true,
                image: true
              }
            }
          }
        }
      },
      skip: paginationHelper.skip,
      take: paginationHelper.limit,
      orderBy: {
        scheduledAt: paginationHelper.sortOrder as "asc" | "desc"
      }
    }),
    prisma.booking.count({
      where: {
        studentId: studentId,
        status: "COMPLETED",
        scheduledAt: {
          lt: new Date(currentTime.getTime() - 60 * 60000)
        },
        review: null
      }
    })
  ]);

  const totalPages = Math.ceil(total / paginationHelper.limit);

  return {
    data: bookings,
    meta: {
      total,
      page: paginationHelper.page,
      limit: paginationHelper.limit,
      totalPages
    }
  };
};

export const StudentService = { updateProfile, getProfile, createReview, createBooking, getBookings, getReviewableBookings };
