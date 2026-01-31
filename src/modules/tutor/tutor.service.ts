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

const dayOfWeekMap: Record<string, number> = {
  "MONDAY": 1,
  "TUESDAY": 2,
  "WEDNESDAY": 3,
  "THURSDAY": 4,
  "FRIDAY": 5,
  "SATURDAY": 6,
  "SUNDAY": 7
};

const reverseDayOfWeekMap: Record<number, string> = {
  1: "MONDAY",
  2: "TUESDAY",
  3: "WEDNESDAY",
  4: "THURSDAY",
  5: "FRIDAY",
  6: "SATURDAY",
  7: "SUNDAY"
};

/**
 * Convert time string (HH:MM) to minutes since midnight
 */
const timeToMinutes = (time: string): number => {
  const [hours, minutes] = time.split(':').map(Number);
  return (hours || 0) * 60 + (minutes || 0);
};

/**
 * Convert minutes since midnight to time string (HH:MM)
 */
const minutesToTime = (minutes: number): string => {
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  return `${hours.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}`;
};

/**
 * Split a time range into 1-hour slots
 * For example: 09:00-12:00 becomes [09:00-10:00, 10:00-11:00, 11:00-12:00]
 */
const splitIntoHourSlots = (startTime: string, endTime: string): { startTime: string; endTime: string }[] => {
  const startMinutes = timeToMinutes(startTime);
  const endMinutes = timeToMinutes(endTime);
  const slots: { startTime: string; endTime: string }[] = [];
  
  // Create 1-hour slots
  for (let currentMinutes = startMinutes; currentMinutes < endMinutes; currentMinutes += 60) {
    const slotEnd = Math.min(currentMinutes + 60, endMinutes);
    
    // Only add slots that are exactly 1 hour
    if (slotEnd - currentMinutes === 60) {
      slots.push({
        startTime: minutesToTime(currentMinutes),
        endTime: minutesToTime(slotEnd)
      });
    }
  }
  
  return slots;
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
    console.log(`[TutorService] Profile not found for userId: ${userId}. Checking user role...`);
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: { id: true, name: true, email: true, image: true, role: true }
    });

    console.log(`[TutorService] User found: ${user ? 'Yes' : 'No'}, Role: ${user?.role}`);

    if (user && user.role === 'TUTOR') {
      console.log(`[TutorService] User is TUTOR. Auto-creating profile...`);
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
        console.log(`[TutorService] Auto-created profile successfully: ${newProfile.id}`);
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

/**
 * Get tutor's availability slots
 * Returns them grouped by day and time range for easier frontend display
 */
const getAvailabilitySlots = async (userId: string) => {
  const tutorProfile = await prisma.tutor_profile.findUnique({
    where: { userId }
  });
  
  if (!tutorProfile) {
    throw new Error("Tutor profile not found");
  }
  
  const slots = await prisma.availability_slot.findMany({
    where: {
      tutorProfileId: tutorProfile.id
    },
    orderBy: [
      { dayOfWeek: 'asc' },
      { startTime: 'asc' }
    ]
  });

  // Group consecutive slots into ranges for display
  const groupedSlots: Record<number, { startTime: string; endTime: string }[]> = {};
  
  slots.forEach(slot => {
    if (!groupedSlots[slot.dayOfWeek]) {
      groupedSlots[slot.dayOfWeek] = [];
    }
    
    const ranges = groupedSlots[slot.dayOfWeek];
    if (!ranges) return;
    
    const lastRange = ranges[ranges.length - 1];
    
    // If this slot is consecutive with the last one, extend the range
    if (lastRange && lastRange.endTime === slot.startTime) {
      lastRange.endTime = slot.endTime;
    } else {
      // Otherwise, start a new range
      ranges.push({
        startTime: slot.startTime,
        endTime: slot.endTime
      });
    }
  });
  
  // Convert to frontend format
  const result = [];
  for (const [dayOfWeekInt, ranges] of Object.entries(groupedSlots)) {
    for (const range of ranges) {
      result.push({
        id: `${dayOfWeekInt}-${range.startTime}-${range.endTime}`,
        dayOfWeek: reverseDayOfWeekMap[parseInt(dayOfWeekInt)] || "UNKNOWN",
        startTime: range.startTime,
        endTime: range.endTime
      });
    }
  }
  
  return result;
};

/**
 * Update tutor's availability slots
 * This replaces ALL existing slots with new ones
 */
const updateAvailabilitySlots = async (userId: string, data: UpdateAvailabilitySlotsInput) => {
  const validatedData = updateAvailabilitySlotsSchema.parse(data);
  
  const tutorProfile = await prisma.tutor_profile.findUnique({
    where: { userId }
  });
  
  if (!tutorProfile) {
    throw new Error("Tutor profile not found");
  }
  
  // Validate all time slots and split into 1-hour slots
  const oneHourSlots: Array<{
    dayOfWeek: number;
    startTime: string;
    endTime: string;
  }> = [];
  
  for (const slot of validatedData.slots) {
    const startMinutes = timeToMinutes(slot.startTime);
    const endMinutes = timeToMinutes(slot.endTime);
    
    // Validate that end time is after start time
    if (endMinutes <= startMinutes) {
      throw new Error(`Invalid time range for ${slot.dayOfWeek}: end time must be after start time`);
    }
    
    // Validate that the range is at least 1 hour
    if (endMinutes - startMinutes < 60) {
      throw new Error(`Invalid time range for ${slot.dayOfWeek}: minimum duration is 1 hour`);
    }
    
    // Get the day of week number
    const dayOfWeekNum = dayOfWeekMap[slot.dayOfWeek];
    if (dayOfWeekNum === undefined) {
      throw new Error(`Invalid day of week: ${slot.dayOfWeek}`);
    }
    
    // Split into 1-hour slots
    const hourSlots = splitIntoHourSlots(slot.startTime, slot.endTime);
    
    for (const hourSlot of hourSlots) {
      oneHourSlots.push({
        dayOfWeek: dayOfWeekNum,
        startTime: hourSlot.startTime,
        endTime: hourSlot.endTime
      });
    }
  }
  
  // Check for overlapping slots
  for (let i = 0; i < oneHourSlots.length; i++) {
    for (let j = i + 1; j < oneHourSlots.length; j++) {
      const slot1 = oneHourSlots[i];
      const slot2 = oneHourSlots[j];
      
      // Type guards
      if (!slot1 || !slot2) continue;
      
      // Only check slots on the same day
      if (slot1.dayOfWeek === slot2.dayOfWeek) {
        const start1 = timeToMinutes(slot1.startTime);
        const end1 = timeToMinutes(slot1.endTime);
        const start2 = timeToMinutes(slot2.startTime);
        const end2 = timeToMinutes(slot2.endTime);
        
        // Check for overlap
        if (start1 < end2 && start2 < end1) {
          const dayName = reverseDayOfWeekMap[slot1.dayOfWeek];
          throw new Error(`Overlapping time slots on ${dayName}`);
        }
      }
    }
  }
  
  // Use transaction to replace all slots atomically
  const result = await prisma.$transaction(async (tx) => {
    // Delete all existing slots for this tutor
    await tx.availability_slot.deleteMany({
      where: {
        tutorProfileId: tutorProfile.id
      }
    });
    
    // Create new slots (only if there are slots to create)
    if (oneHourSlots.length > 0) {
      await tx.availability_slot.createMany({
        data: oneHourSlots.map(slot => ({
          id: randomUUID(),
          tutorProfileId: tutorProfile.id,
          dayOfWeek: slot.dayOfWeek,
          startTime: slot.startTime,
          endTime: slot.endTime,
          isRecurring: true
        }))
      });
    }
    
    // Return the newly created slots
    return await tx.availability_slot.findMany({
      where: {
        tutorProfileId: tutorProfile.id
      },
      orderBy: [
        { dayOfWeek: 'asc' },
        { startTime: 'asc' }
      ]
    });
  });
  
  // Group slots into ranges for response (same logic as getAvailabilitySlots)
  const groupedSlots: Record<number, { startTime: string; endTime: string }[]> = {};
  
  result.forEach(slot => {
    if (!groupedSlots[slot.dayOfWeek]) {
      groupedSlots[slot.dayOfWeek] = [];
    }
    
    const ranges = groupedSlots[slot.dayOfWeek];
    if (!ranges) return;
    
    const lastRange = ranges[ranges.length - 1];
    
    if (lastRange && lastRange.endTime === slot.startTime) {
      lastRange.endTime = slot.endTime;
    } else {
      ranges.push({
        startTime: slot.startTime,
        endTime: slot.endTime
      });
    }
  });
  
  const formattedResult = [];
  for (const [dayOfWeekInt, ranges] of Object.entries(groupedSlots)) {
    for (const range of ranges) {
      formattedResult.push({
        id: `${dayOfWeekInt}-${range.startTime}-${range.endTime}`,
        dayOfWeek: reverseDayOfWeekMap[parseInt(dayOfWeekInt)] || "UNKNOWN",
        startTime: range.startTime,
        endTime: range.endTime
      });
    }
  }
  
  return formattedResult;
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