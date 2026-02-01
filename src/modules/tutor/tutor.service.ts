// tutor.service.ts
import { prisma } from "../../lib/prisma";
import { 
  createTutorProfileSchema, 
  updateTutorProfileSchema, 
  CreateTutorProfileInput, 
  UpdateTutorProfileInput,
  updateAvailabilitySlotsSchema,
  UpdateAvailabilitySlotsInput
} from "./tutor.validation";
import { randomUUID } from "crypto";
import paginationSortingHelper from "../../helpers/paginationSortingHelper";
import { ZodError } from "zod";
const dayOfWeekMap: Record<string, number> = {
  "MONDAY": 1,
  "TUESDAY": 2,
  "WEDNESDAY": 3,
  "THURSDAY": 4,
  "FRIDAY": 5,
  "SATURDAY": 6,
  "SUNDAY": 7
};


/**
 * Get tutor's availability slots for a specific week
 * Returns them grouped by date and time range for easier frontend display
 */

const getAvailabilitySlots = async (userId: string, weekStartDate?: string) => {
  const tutorProfile = await prisma.tutor_profile.findUnique({
    where: { userId }
  });
  
  if (!tutorProfile) {
    throw new Error("Tutor profile not found");
  }
  
  // If no weekStartDate provided, use the current week's Monday
  let startDate: Date;
  if (weekStartDate) {
    startDate = new Date(weekStartDate);
  } else {
    const today = new Date();
    const dayOfWeek = today.getDay();
    const diff = dayOfWeek === 0 ? -6 : 1 - dayOfWeek; // Adjust to get Monday
    startDate = new Date(today);
    startDate.setDate(today.getDate() + diff);
  }
  startDate.setHours(0, 0, 0, 0);

  // Calculate end date (Sunday)
  const endDate = new Date(startDate);
  endDate.setDate(startDate.getDate() + 6);
  endDate.setHours(23, 59, 59, 999);

  const slots = await prisma.availability_slot.findMany({
    where: {
      tutorProfileId: tutorProfile.id,
      specificDate: {
        gte: startDate,
        lte: endDate
      }
    },
    orderBy: [
      { specificDate: 'asc' },
      { startTime: 'asc' }
    ]
  });

  // Group consecutive slots into ranges for display, but separate by isBooked status
  const grouped: Record<string, { startTime: string; endTime: string; isBooked: boolean }[]> = {};
  
  for (const s of slots) {
    if (!s.specificDate) continue;
    
    const dateKey: string = s.specificDate!.toISOString().split('T')[0]!; // YYYY-MM-DD
    
    if (!grouped[dateKey]) {
      grouped[dateKey] = [];
    }
    
    const ranges = grouped[dateKey]!;
    const lastRange = ranges[ranges.length - 1];
    
    // If this slot is consecutive with the last one AND has the same isBooked status, extend the range
    if (lastRange && lastRange.endTime === s.startTime && lastRange.isBooked === s.isBooked) {
      lastRange.endTime = s.endTime;
    } else {
      // Otherwise, start a new range
      ranges.push({
        startTime: s.startTime,
        endTime: s.endTime,
        isBooked: s.isBooked
      });
    }
  }
  
  // Convert to frontend format
  const resultSlots = [];
  for (const dateKey of Object.keys(grouped)) {
    const ranges = grouped[dateKey];
    if (!ranges) continue;
    
    for (const range of ranges) {
      resultSlots.push({
        id: `${dateKey}-${range.startTime}-${range.endTime}`,
        date: dateKey,
        dayOfWeek: reverseDayOfWeekMap[getDayOfWeek(dateKey)] || "UNKNOWN",
        startTime: range.startTime,
        endTime: range.endTime,
        isBooked: range.isBooked
      });
    }
  }
  
  return {
    weekStartDate: startDate.toISOString().split('T')[0],
    weekEndDate: endDate.toISOString().split('T')[0],
    slots: resultSlots
  };
};

const createProfile = async (userId: string, data: CreateTutorProfileInput) => {
  const validatedData = createTutorProfileSchema.parse(data);
  
  const createData: any = {
    userId,
    hourlyRate: validatedData.hourlyRate
  };
  
  if (validatedData.bio !== undefined) {
    createData.bio = validatedData.bio;
  }
  if (validatedData.headline !== undefined) {
    createData.headline = validatedData.headline;
  }
  if (validatedData.experience !== undefined) {
    createData.experience = validatedData.experience;
  }
  if (validatedData.education !== undefined) {
    createData.education = validatedData.education;
  }
  
  const profile = await prisma.tutor_profile.create({
    data: createData,
    include: {
      user: {
        select: { id: true, name: true, email: true, image: true }
      }
    }
  });
  
  return profile;
};

const updateProfile = async (userId: string, data: UpdateTutorProfileInput) => {
  const validatedData = updateTutorProfileSchema.parse(data);
  
  const updateData: any = {};
  
  if (validatedData.bio !== undefined) {
    updateData.bio = validatedData.bio;
  }
  if (validatedData.headline !== undefined) {
    updateData.headline = validatedData.headline;
  }
  if (validatedData.hourlyRate !== undefined) {
    updateData.hourlyRate = validatedData.hourlyRate;
  }
  if (validatedData.experience !== undefined) {
    updateData.experience = validatedData.experience;
  }
  if (validatedData.education !== undefined) {
    updateData.education = validatedData.education;
  }
  if (validatedData.isAvailable !== undefined) {
    updateData.isAvailable = validatedData.isAvailable;
  }
  
  return await prisma.tutor_profile.update({
    where: { userId },
    data: updateData
  });
};

const getProfile = async (userId: string) => {
  const profile = await prisma.tutor_profile.findUnique({
    where: { userId },
    include: {
      user: {
        select: { id: true, name: true, email: true, image: true, role: true }
      },
      tutor_subject: {
        include: {
          subject: {
            include: {
              category: true
            }
          }
        }
      },
      availability_slot: true
    }
  });

  if (!profile) {
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: { id: true, name: true, email: true, image: true, role: true }
    });


    if (user && user.role === 'TUTOR') {
      try {
        const newProfile = await prisma.tutor_profile.create({
          data: {
            id: randomUUID(),
            userId,
            hourlyRate: 25,
            bio: "Welcome to my profile! I am a passionate tutor ready to help you learn.",
            headline: "SkillBridge Tutor",
            experience: 0,
            education: "",
            isAvailable: true
          },
          include: {
            user: {
              select: { id: true, name: true, email: true, image: true, role: true }
            },
            tutor_subject: {
              include: {
                subject: {
                  include: {
                    category: true
                  }
                }
              }
            },
            availability_slot: true
          }
        });
        return newProfile;
      } catch (err) {
        console.error(`[TutorService] Failed to auto-create profile:`, err);
        return null; 
      }
    } else {
      console.log(`[TutorService] User is not TUTOR or not found. Skipping auto-creation.`);
    }
  }

  return profile;
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
        user: {
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

  if (!['CONFIRMED', 'ONGOING', 'COMPLETED', 'CANCELLED'].includes(data.status)) {
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
      user: {
        select: {
          id: true,
          name: true,
          email: true
        }
      }
    }
  });
};

// tutor.service.ts (updateAvailabilitySlots method helpers)


// Helper function to convert time string to minutes
const timeToMinutes = (time: string): number => {
  const [hours, minutes] = time.split(':').map(Number);
  return (hours ?? 0) * 60 + (minutes ?? 0);
};

// Helper function to get day of week number (0 = Sunday, 1 = Monday, etc.)
const getDayOfWeek = (dateString: string): number => {
  return new Date(dateString + "T00:00:00.000Z").getUTCDay();
};

// Day of week reverse map
const reverseDayOfWeekMap: Record<number, string> = {
  0: "SUNDAY",
  1: "MONDAY",
  2: "TUESDAY",
  3: "WEDNESDAY",
  4: "THURSDAY",
  5: "FRIDAY",
  6: "SATURDAY"
};

export const updateAvailabilitySlots = async (
  userId: string,
  slots: UpdateAvailabilitySlotsInput
) => {
  console.log("Updating slots for user:", userId);
  console.log("Slots received:", JSON.stringify(slots, null, 2));

  // Get tutor profile
  const tutorProfile = await prisma.tutor_profile.findUnique({
    where: { userId }
  });
  console.log("Slots: ", slots);
  
  if (!tutorProfile) {
    throw new Error("Tutor profile not found");
  }

  // Get the week range from the first slot's date
  const firstDate = new Date(slots[0]!.date + "T00:00:00.000Z");
  const day = firstDate.getUTCDay();
  const diff = day === 0 ? -6 : 1 - day; // Calculate difference to get to Monday

  const weekStart = new Date(firstDate);
  weekStart.setUTCDate(firstDate.getUTCDate() + diff);
  weekStart.setUTCHours(0, 0, 0, 0);

  const weekEnd = new Date(weekStart);
  weekEnd.setUTCDate(weekStart.getUTCDate() + 6);
  weekEnd.setUTCHours(23, 59, 59, 999);

  console.log("Week range:", {
    weekStart: weekStart.toISOString().slice(0, 10),
    weekEnd: weekEnd.toISOString().slice(0, 10)
  });

  // Validate all slots are within the same week
  for (const slot of slots) {
    const slotDate = new Date(slot.date + "T00:00:00.000Z");
    if (slotDate < weekStart || slotDate > weekEnd) {
      throw new Error(
        `All slots must be within the same week (${weekStart.toISOString().slice(0, 10)} to ${weekEnd.toISOString().slice(0, 10)})`
      );
    }
  }

  // Process slots and check for overlaps on the same date
  const slotsToCreate: Array<{
    date: string;
    dayOfWeek: number;
    startTime: string;
    endTime: string;
  }> = [];

  for (const slot of slots) {
    const dow = getDayOfWeek(slot.date);
    slotsToCreate.push({
      date: slot.date,
      dayOfWeek: dow,
      startTime: slot.startTime,
      endTime: slot.endTime
    });
  }

  // Check for overlapping slots on the same date
  for (let i = 0; i < slotsToCreate.length; i++) {
    for (let j = i + 1; j < slotsToCreate.length; j++) {
      const slotA = slotsToCreate[i]!;
      const slotB = slotsToCreate[j]!;

      if (slotA.date !== slotB.date) continue;

      const startA = timeToMinutes(slotA.startTime);
      const endA = timeToMinutes(slotA.endTime);
      const startB = timeToMinutes(slotB.startTime);
      const endB = timeToMinutes(slotB.endTime);

      // Check for overlap
      if (startA < endB && startB < endA) {
        throw new Error(
          `Overlapping slots on ${slotA.date}: ${slotA.startTime}-${slotA.endTime} and ${slotB.startTime}-${slotB.endTime}`
        );
      }
    }
  }

  // Transaction: delete all non-booked slots in the week and insert new ones
  const result = await prisma.$transaction(async (tx) => {
    // Delete all existing non-booked slots for this week
    const deletedCount = await tx.availability_slot.deleteMany({
      where: {
        tutorProfileId: tutorProfile.id,
        isBooked: false,
        specificDate: {
          gte: weekStart,
          lte: weekEnd
        }
      }
    });

    console.log(`Deleted ${deletedCount.count} existing slots`);

    // Create new slots
    if (slotsToCreate.length > 0) {
      const createData = slotsToCreate.map(slot => ({
        id: randomUUID(),
        tutorProfileId: tutorProfile.id,
        dayOfWeek: slot.dayOfWeek,
        startTime: slot.startTime,
        endTime: slot.endTime,
        specificDate: new Date(slot.date + "T00:00:00.000Z"),
        isRecurring: false,
        isBooked: false
      }));

      await tx.availability_slot.createMany({
        data: createData
      });

      console.log(`Created ${createData.length} new slots`);
    }

    // Return all slots for this week (including any booked ones that weren't deleted)
    return await tx.availability_slot.findMany({
      where: {
        tutorProfileId: tutorProfile.id,
        specificDate: {
          gte: weekStart,
          lte: weekEnd
        }
      },
      orderBy: [
        { specificDate: "asc" },
        { startTime: "asc" }
      ]
    });
  });

  // Format the response
  const formattedSlots = result.map(slot => ({
    id: slot.id,
    date: slot.specificDate?.toISOString().slice(0, 10) ?? "",
    dayOfWeek: reverseDayOfWeekMap[slot.dayOfWeek] ?? "UNKNOWN",
    startTime: slot.startTime,
    endTime: slot.endTime,
    isBooked: slot.isBooked
  }));

  return {
    weekStartDate: weekStart.toISOString().slice(0, 10),
    weekEndDate: weekEnd.toISOString().slice(0, 10),
    totalSlots: formattedSlots.length,
    slots: formattedSlots
  };
};

export const TutorService = { 
  createProfile, 
  updateProfile, 
  getProfile, 
  getAvailabilitySlots, 
  updateAvailabilitySlots,
  getTeachingSessions, 
  getReviews, 
  getRatingStats, 
  updateBookingStatus 
};