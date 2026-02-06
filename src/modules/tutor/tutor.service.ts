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
import { boolean } from "better-auth";
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
  0: "SUNDAY",
  1: "MONDAY",
  2: "TUESDAY",
  3: "WEDNESDAY",
  4: "THURSDAY",
  5: "FRIDAY",
  6: "SATURDAY"
};

const timeToMinutes = (time: string): number => {
  const parts = time.split(":");
  const h = parseInt(parts[0] || "0", 10);
  const m = parseInt(parts[1] || "0", 10);
  return (isNaN(h) ? 0 : h) * 60 + (isNaN(m) ? 0 : m);
};

const minutesToTime = (minutes: number): string => {
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  return `${h.toString().padStart(2, "0")}:${m.toString().padStart(2, "0")}`;
};

const getDayOfWeek = (dateString: string): number =>
  new Date(dateString + "T00:00:00.000Z").getUTCDay();


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
  
  // Use transaction to ensure everything is created correctly
  const result = await prisma.$transaction(async (tx) => {
    // 1. Create the tutor profile
    const profile = await tx.tutor_profile.create({
      data: {
        id: randomUUID(),
        userId,
        bio: validatedData.bio,
        headline: validatedData.headline,
        hourlyRate: validatedData.hourlyRate,
        experience: validatedData.experience,
        education: validatedData.education,
        isAvailable: true // Default to available
      }
    });

    // 2. Link subjects (categories)
    const tutorSubjects = validatedData.subjectIds.map(subjectId => ({
      id: randomUUID(),
      tutorProfileId: profile.id,
      subjectId
    }));

    await tx.tutor_subject.createMany({
      data: tutorSubjects
    });

    // 3. Update user role to TUTOR
    await tx.user.update({
      where: { id: userId },
      data: { role: 'TUTOR' }
    });

    return profile;
  });
  
  // Return the profile with associated details
  return await getProfile(userId);
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
    return null;
  }

  // Fetch reviews and stats safely
  const [stats, reviews] = await Promise.all([
    getRatingStats(userId).catch(() => null),
    getReviews(userId, { page: 1, limit: 10 }).catch(() => null)
  ]);

  return {
    ...profile,
    ratingStats: stats,
    recentReviews: reviews ? reviews.data : []
  };
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
        user: {
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
export const updateAvailabilitySlots = async (
  userId: string,
  data: { weekStartDate: string; slots: Array<{ date: string; startTime: string; endTime: string }> }
) => {
  // ---------- helpers ----------
  // used global helpers: timeToMinutes, minutesToTime, getDayOfWeek, reverseDayOfWeekMap


  // ---------- tutor profile ----------
  const tutorProfile = await prisma.tutor_profile.findUnique({ where: { userId } });
  if (!tutorProfile) throw new Error("Tutor profile not found");

  // ---------- week bounds ----------
  const weekStart = new Date(data.weekStartDate + "T00:00:00.000Z");
  weekStart.setUTCHours(0, 0, 0, 0);
  if (weekStart.getUTCDay() !== 1) throw new Error("Week start date must be a Monday");

  const weekEnd = new Date(weekStart);
  weekEnd.setUTCDate(weekStart.getUTCDate() + 6);
  weekEnd.setUTCHours(23, 59, 59, 999);

  // ---------- build exact 1-hour chunks from input (do NOT use original ranges) ----------
  const oneHourChunks: {
    date: string;
    dayOfWeek: number;
    startTime: string;
    endTime: string;
    startMin: number;
    endMin: number;
  }[] = [];

  for (const slot of data.slots) {
    const slotDate = new Date(slot.date + "T00:00:00.000Z");
    slotDate.setUTCHours(0, 0, 0, 0);
    if (slotDate < weekStart || slotDate > weekEnd) {
      throw new Error(`Slot date ${slot.date} is outside the week ${weekStart.toISOString().slice(0, 10)} - ${weekEnd.toISOString().slice(0, 10)}`);
    }

    const startMin = timeToMinutes(slot.startTime);
    const endMin = timeToMinutes(slot.endTime);

    if (isNaN(startMin) || isNaN(endMin)) throw new Error(`Invalid time format for ${slot.date}`);
    if (endMin <= startMin) throw new Error(`Invalid time range for ${slot.date}: end must be after start`);
    if (endMin - startMin < 60) throw new Error(`Minimum duration is 1 hour for ${slot.date}`);

    // Create 1-hour chunks: [start, start+60), [start+60, start+120) ... up to end
    let cur = startMin;
    while (cur + 60 <= endMin) {
      const next = cur + 60;
      oneHourChunks.push({
        date: slot.date,
        dayOfWeek: getDayOfWeek(slot.date),
        startTime: minutesToTime(cur),
        endTime: minutesToTime(next),
        startMin: cur,
        endMin: next
      });
      cur = next;
    }
  }

  // ---------- dedupe chunks so same 1-hour slot from multiple inputs doesn't replicate ----------
  const seen = new Set<string>();
  const dedupedChunks = oneHourChunks
    .sort((a, b) => (a.date === b.date ? a.startMin - b.startMin : a.date.localeCompare(b.date)))
    .filter(chunk => {
      const key = `${chunk.date}|${chunk.startMin}-${chunk.endMin}`;
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    });

  console.log("One-hour chunks to insert:", dedupedChunks);

  //check if any of the time slot is not in past

  function nowInBangladesh() {
    return new Date(
      new Date().toLocaleString("en-US", { timeZone: "Asia/Dhaka" })
    );
  }

  const now = nowInBangladesh();
  let isEverythingInFutureInLocalDateAndTime = true;
  for (const chunk of dedupedChunks) {
    const slotDate = new Date(chunk.date + "T" + chunk.startTime + ":00.000Z");
    
    if (slotDate < now) {
      isEverythingInFutureInLocalDateAndTime = false;
      break;
    }
  }

  if (!isEverythingInFutureInLocalDateAndTime) {
    throw new Error("All time slots must be in the future");
  }

  // ---------- transaction: delete non-booked, then insert these exact 1-hour chunks ----------
  const createdAndExisting = await prisma.$transaction(async (tx) => {
    // remove all non-booked slots in the week for this tutor
    await tx.availability_slot.deleteMany({
      where: {
        tutorProfileId: tutorProfile.id,
        isBooked: false,
        specificDate: { gte: weekStart, lte: weekEnd }
      }
    });

    // prepare create payload (each chunk becomes one DB row)
    if (dedupedChunks.length > 0) {
      const createPayload = dedupedChunks.map(c => ({
        id: randomUUID(),
        tutorProfileId: tutorProfile.id,
        dayOfWeek: c.dayOfWeek,
        startTime: c.startTime,
        endTime: c.endTime,
        specificDate: new Date(c.date + "T00:00:00.000Z"),
        isRecurring: false,
        isBooked: false
      }));

      // debug - if this still inserts wrong values you will see the payload in logs
      console.log("createPayload (first 10):", createPayload.slice(0, 10));

      // insert all 1-hour rows
      // createMany is used for performance; skipDuplicates avoids unique constraint errors if any
      await tx.availability_slot.createMany({ data: createPayload, skipDuplicates: true });
      console.log(`Inserted ${createPayload.length} one-hour slots`);
    } else {
      console.log("No one-hour chunks to insert");
    }

    // return all slots for week (booked + newly inserted)
    return tx.availability_slot.findMany({
      where: {
        tutorProfileId: tutorProfile.id,
        specificDate: { gte: weekStart, lte: weekEnd }
      },
      orderBy: [{ specificDate: "asc" }, { startTime: "asc" }]
    });
  });

  // ---------- group consecutive DB rows for response (this does NOT affect DB) ----------
  const grouped: Record<string, { startTime: string; endTime: string }[]> = {};
  createdAndExisting.forEach(s => {
    if (!s.specificDate) return;
    const dateKey = s.specificDate.toISOString().slice(0, 10);
    grouped[dateKey] ??= [];
    const last = grouped[dateKey][grouped[dateKey].length - 1];
    if (last && last.endTime === s.startTime) {
      last.endTime = s.endTime;
    } else {
      grouped[dateKey].push({ startTime: s.startTime, endTime: s.endTime });
    }
  });

  const formattedSlots: Array<{ id: string; date: string; dayOfWeek: string; startTime: string; endTime: string }> = [];
  for (const [date, ranges] of Object.entries(grouped)) {
    for (const r of ranges) {
      formattedSlots.push({
        id: `${date}-${r.startTime}-${r.endTime}`,
        date,
        dayOfWeek: reverseDayOfWeekMap[getDayOfWeek(date)] ?? "UNKNOWN",
        startTime: r.startTime,
        endTime: r.endTime
      });
    }
  }

  return {
    weekStartDate: weekStart.toISOString().slice(0, 10),
    weekEndDate: weekEnd.toISOString().slice(0, 10),
    totalSlots: createdAndExisting.length,
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