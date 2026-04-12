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
  
  // If no weekStartDate provided, use the current week's Monday in Dhaka timezone
  let startDate: Date;
  if (weekStartDate) {
    // Parse as UTC midnight to match how specificDate is stored in DB
    startDate = new Date(weekStartDate + "T00:00:00.000Z");
  } else {
    const now = new Date();
    const dhakaOffset = 6 * 60; // UTC+6 in minutes
    const nowInDhaka = new Date(now.getTime() + (dhakaOffset + now.getTimezoneOffset()) * 60000);
    const dayOfWeek = nowInDhaka.getDay();
    const diff = dayOfWeek === 0 ? -6 : 1 - dayOfWeek;
    nowInDhaka.setDate(nowInDhaka.getDate() + diff);
    // Convert back to UTC midnight for DB query
    const yyyy = nowInDhaka.getFullYear();
    const mm = String(nowInDhaka.getMonth() + 1).padStart(2, '0');
    const dd = String(nowInDhaka.getDate()).padStart(2, '0');
    startDate = new Date(`${yyyy}-${mm}-${dd}T00:00:00.000Z`);
  }

  // Calculate end date (Sunday) — 6 days after Monday
  const endDate = new Date(startDate);
  endDate.setUTCDate(startDate.getUTCDate() + 6);
  endDate.setUTCHours(23, 59, 59, 999);

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
    if (lastRange && lastRange.endTime === s.startTime && (lastRange as any).isBooked === (s as any).isBooked) {
      lastRange.endTime = s.endTime;
    } else {
      // Otherwise, start a new range
      ranges.push({
        startTime: s.startTime,
        endTime: s.endTime,
        isBooked: (s as any).isBooked
      });
    }
  }
  
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
  const result = await prisma.$transaction(async (tx: any) => {
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
  
  return await prisma.$transaction(async (tx: any) => {
    // 1. Separate user fields from profile fields
    const userUpdateData: any = {};
    const profileUpdateData: any = {};
    
    // User fields
    if (validatedData.name !== undefined) userUpdateData.name = validatedData.name;
    if (validatedData.image !== undefined) userUpdateData.image = validatedData.image;
    if (validatedData.phone !== undefined) userUpdateData.phone = validatedData.phone;
    if (validatedData.address !== undefined) userUpdateData.address = validatedData.address;
    
    // Profile fields
    if (validatedData.bio !== undefined) profileUpdateData.bio = validatedData.bio;
    if (validatedData.headline !== undefined) profileUpdateData.headline = validatedData.headline;
    if (validatedData.hourlyRate !== undefined) profileUpdateData.hourlyRate = validatedData.hourlyRate;
    if (validatedData.experience !== undefined) profileUpdateData.experience = validatedData.experience;
    if (validatedData.education !== undefined) profileUpdateData.education = validatedData.education;
    if (validatedData.isAvailable !== undefined) profileUpdateData.isAvailable = validatedData.isAvailable;
    if (validatedData.address !== undefined) profileUpdateData.address = validatedData.address;
    if (validatedData.banner !== undefined) profileUpdateData.banner = validatedData.banner;
    
    // 2. Update User if needed
    if (Object.keys(userUpdateData).length > 0) {
      await tx.user.update({
        where: { id: userId },
        data: userUpdateData
      });
    }
    
    // 3. Update Tutor Profile if needed
    if (Object.keys(profileUpdateData).length > 0) {
      return await tx.tutor_profile.update({
        where: { userId },
        data: profileUpdateData,
        include: {
          user: {
            select: { id: true, name: true, email: true, image: true, role: true }
          }
        }
      });
    }
    
    // If only user updated, return the latest profile
    return await tx.tutor_profile.findUnique({
      where: { userId },
      include: {
        user: {
          select: { id: true, name: true, email: true, image: true, role: true }
        }
      }
    });
  });
};

const getProfile = async (userId: string) => {
  const today = new Date();
  today.setUTCHours(0, 0, 0, 0);
  const nextWeek = new Date(today);
  nextWeek.setUTCDate(today.getUTCDate() + 7);

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
      // 🚀 PERFORMANCE FIX: Only fetch the next 7 days of slots, not the whole history!
      availability_slot: {
        where: {
          specificDate: {
            gte: today,
            lte: nextWeek
          }
        },
        orderBy: {
          specificDate: 'asc'
        }
      }
    }
  });

  if (!profile) {
    return null;
  }

  // 🚀 REAL-TIME STATS: Calculate actual completed sessions and average rating
  const [sessionCount, ratingAgg] = await Promise.all([
    prisma.booking.count({
      where: { tutorProfileId: profile.id, status: 'COMPLETED' }
    }),
    prisma.review.aggregate({
      where: { booking: { tutorProfileId: profile.id } },
      _avg: { rating: true }
    })
  ]);

  // Fetch reviews and stats safely
  const [stats, reviews] = await Promise.all([
    getRatingStats(profile.userId).catch(() => null),
    getReviews(profile.userId, { page: 1, limit: 10 }).catch(() => null)
  ]);

  return {
    ...profile,
    totalSessions: Math.max(profile.totalSessions, sessionCount), 
    averageRating: Math.max(profile.averageRating, ratingAgg._avg.rating || 0),
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
  const tutorProfile = await prisma.tutor_profile.findUnique({ where: { userId } });
  if (!tutorProfile) throw new Error("Tutor profile not found");

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
    where: { userId },
    select: { id: true, totalReviews: true, averageRating: true }
  });

  if (!tutorProfile) throw new Error("Tutor profile not found");

  const tutorProfileId = tutorProfile.id;

  const [ratingDistribution, totalReviews, averageRating, bookingStats, studentStats] = await Promise.all([
    prisma.review.groupBy({
      by: ['rating'],
      where: {
        booking: {
          tutorProfileId: tutorProfileId
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
          tutorProfileId: tutorProfileId
        }
      }
    }),
    prisma.review.aggregate({
      where: {
        booking: {
          tutorProfileId: tutorProfileId
        }
      },
      _avg: {
        rating: true
      }
    }),
    // 🚀 NEW: Response Rate Calculation
    prisma.booking.findMany({
      where: { tutorProfileId: tutorProfileId },
      select: { status: true, createdAt: true, updatedAt: true }
    }),
    // 🚀 NEW: Retention Rate Calculation
    prisma.booking.groupBy({
      by: ['studentId'],
      where: { tutorProfileId: tutorProfileId },
      _count: { studentId: true }
    })
  ]);

  // Use stored profile stats as baseline/max
  const finalTotalReviews = Math.max(tutorProfile?.totalReviews || 0, totalReviews);
  const finalAverageRating = Math.max(tutorProfile?.averageRating || 0, averageRating._avg.rating || 0);

  // Calculate Response Rate: (Confirmed + Ongoing + Completed + Cancelled) / Total Bookings
  const totalBookings = bookingStats.length;
  const respondedBookings = bookingStats.filter(b => b.status !== 'PENDING').length;
  const responseRate = totalBookings > 0 ? Math.round((respondedBookings / totalBookings) * 100) : 100;

  // Calculate Average Response Time (Dummy logic based on update duration for now)
  const nonPending = bookingStats.filter(b => b.status !== 'PENDING');
  let avgResponseTimeMinutes = 45; // Default/Realistic
  if (nonPending.length > 0) {
    const totalTime = nonPending.reduce((acc, b) => {
      return acc + (b.updatedAt.getTime() - b.createdAt.getTime());
    }, 0);
    avgResponseTimeMinutes = Math.min(Math.round(totalTime / nonPending.length / 60000), 120); 
    if (avgResponseTimeMinutes <= 0) avgResponseTimeMinutes = 12;
  }

  // Calculate Retention Rate: Students with >1 booking / Total Students
  const totalStudents = studentStats.length;
  const repeatStudents = studentStats.filter(s => s._count.studentId > 1).length;
  const retentionRate = totalStudents > 0 ? Math.round((repeatStudents / totalStudents) * 100) : 0;

  // Create rating distribution with all ratings (1-5)
  const distributionArr = [5, 4, 3, 2, 1].map(rating => {
    const found = ratingDistribution.find(r => r.rating === rating);
    return {
      rating,
      count: found ? found._count.rating : 0,
    };
  });

  return {
    total: finalTotalReviews,
    average: Number(finalAverageRating.toFixed(1)),
    responseRate,
    avgResponseTime: `${avgResponseTimeMinutes}m`,
    retentionRate,
    distribution: distributionArr.reduce((acc, curr) => ({ ...acc, [curr.rating]: curr.count }), {})
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
    },
    include: {
      availability_slot: true
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
  
  return await prisma.$transaction(async (tx: any) => {
    // If cancelling, free up the slot
    if (data.status === 'CANCELLED' && booking.availabilitySlotId && (booking as any).availability_slot && !(booking as any).availability_slot.isRecurring) {
      await tx.availability_slot.update({
        where: { id: booking.availabilitySlotId },
        data: { isBooked: false }
      });
    }

    // Generate meeting link if status is CONFIRMED or ONGOING and no link exists
    // Generate meeting link if status is CONFIRMED or ONGOING and no link exists
    let meetingLinkUpdate = {};
    if (['CONFIRMED', 'ONGOING'].includes(data.status) && !booking.meetingLink) {
      // Use a simple static meeting link format since we're dropping Google Calendar API
      const meetCode = randomUUID().split('-').slice(0, 3).join('-');
      meetingLinkUpdate = { meetingLink: `https://meet.google.com/${meetCode}` };
    }

    const updatedBooking = await tx.booking.update({
      where: { id: bookingId },
      data: {
        status: data.status as any,
        ...meetingLinkUpdate,
        updatedAt: new Date()
      },
      include: {
        user: {
          select: { id: true, name: true, email: true }
        }
      }
    });

    // 🚀 FIXED: Increment Tutor Stats if session is COMPLETED
    if (data.status === 'COMPLETED') {
        // Calculate the new average rating by including all historic sessions
        const ratingAgg = await tx.review.aggregate({
            where: { booking: { tutorProfileId: tutorProfile.id } },
            _avg: { rating: true }
        });

        await tx.tutor_profile.update({
            where: { id: tutorProfile.id },
            data: {
                totalSessions: { increment: 1 }, // Atomic increment to preserve historical data
                averageRating: ratingAgg._avg.rating || tutorProfile.averageRating
            }
        });
    }

    return updatedBooking;
  });
};

export const updateAvailabilitySlots = async (
  userId: string,
  data: { weekStartDate: string; slots: Array<{ date: string; startTime: string; endTime: string }> }
) => {


  const tutorProfile = await prisma.tutor_profile.findUnique({ where: { userId } });
  if (!tutorProfile) throw new Error("Tutor profile not found");

  const weekStart = new Date(data.weekStartDate + "T00:00:00.000Z");
  weekStart.setUTCHours(0, 0, 0, 0);
  if (weekStart.getUTCDay() !== 1) throw new Error("Week start date must be a Monday");

  const weekEnd = new Date(weekStart);
  weekEnd.setUTCDate(weekStart.getUTCDate() + 6);
  weekEnd.setUTCHours(23, 59, 59, 999);

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


  function getNowInDhaka() {
    return new Date(new Date().toLocaleString("en-US", { timeZone: "Asia/Dhaka" }));
  }

  const now = getNowInDhaka();
  let hasPastSlots = false;
  for (const chunk of dedupedChunks) {
    const [h, m] = chunk.startTime.split(':').map(Number);
    const [year, month, day] = chunk.date.split('-').map(Number);
    const slotInDhakaContext = new Date(year as number, (month as number) - 1, day, h, m);
    
    if (slotInDhakaContext < now) {
      hasPastSlots = true;
      break;
    }
  }

  if (hasPastSlots) {
    throw new Error("please dont set past dates");
  }

  const createdAndExisting = await prisma.$transaction(async (tx: any) => {
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

  const grouped: Record<string, { startTime: string; endTime: string }[]> = {};
  createdAndExisting.forEach((s: any) => {
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



const requestVerification = async (userId: string) => {
  const tutorProfile = await prisma.tutor_profile.findUnique({
    where: { userId },
    include: {
      user: true
    }
  });

  if (!tutorProfile) {
    throw new Error("Tutor profile not found");
  }

  if (tutorProfile.isVerified || tutorProfile.user.role === 'VERIFIED_TUTOR') {
    throw new Error("Tutor is already verified");
  }

  if (tutorProfile.totalSessions < 10) {
    throw new Error(`Verification requires at least 10 completed sessions. You have ${tutorProfile.totalSessions}.`);
  }

  if (tutorProfile.averageRating < 4.5) {
    throw new Error(`Verification requires a minimum average rating of 4.5. Your current rating is ${tutorProfile.averageRating || 0}.`);
  }

  // Auto-upgrade for now or mark for admin review
  return await prisma.$transaction(async (tx: any) => {
    // 1. Update Profile
    await tx.tutor_profile.update({
      where: { id: tutorProfile.id },
      data: {
        isVerified: true,
        verifiedAt: new Date(),
      }
    });

    // 2. Update User Role
    await tx.user.update({
      where: { id: userId },
      data: {
        role: 'VERIFIED_TUTOR'
      }
    });

    return {
      success: true,
      message: "Congratulations! You are now a Verified Tutor."
    };
  });
};

const getEarningsStats = async (userId: string) => {
  const tutorProfile = await prisma.tutor_profile.findUnique({
    where: { userId }
  });

  if (!tutorProfile) throw new Error("Tutor profile not found");

  const sixMonthsAgo = new Date();
  sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 6);

  const bookings = await prisma.booking.findMany({
    where: {
      tutorProfileId: tutorProfile.id,
      status: 'COMPLETED',
      scheduledAt: { gte: sixMonthsAgo }
    },
    select: {
      price: true,
      scheduledAt: true
    },
    orderBy: { scheduledAt: 'asc' }
  });

  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const statsMap: Record<string, number> = {};

  // Initialize last 6 months
  for (let i = 5; i >= 0; i--) {
    const d = new Date();
    d.setMonth(d.getMonth() - i);
    const monthKey = `${monthNames[d.getMonth()]}`;
    statsMap[monthKey] = 0;
  }

  bookings.forEach(b => {
    const m = new Date(b.scheduledAt).getUTCMonth();
    const monthKey = monthNames[m];
    if (monthKey && statsMap[monthKey] !== undefined) {
      statsMap[monthKey] += b.price;
    }
  });

  return Object.entries(statsMap).map(([month, amount]) => ({
    month,
    earnings: amount
  }));
};

const getTutorAnalytics = async (userId: string) => {
  const tutorProfile = await prisma.tutor_profile.findUnique({
    where: { userId }
  });

  if (!tutorProfile) throw new Error("Tutor profile not found");

  const [sessionStatusDist, subjectDist, studentBookings] = await Promise.all([
    // 1. Session Status Distribution (Pie Chart)
    prisma.booking.groupBy({
      by: ['status'],
      where: { tutorProfileId: tutorProfile.id },
      _count: { status: true }
    }),
    // 2. Subject Distribution (Pie Chart/Bar Chart)
    prisma.booking.groupBy({
      by: ['subject'],
      where: { 
        tutorProfileId: tutorProfile.id,
        status: 'COMPLETED'
      },
      _count: { subject: true },
      _sum: { price: true }
    }),
    // 3. Student Bookings for Retention (Donut Chart)
    prisma.booking.findMany({
      where: { tutorProfileId: tutorProfile.id },
      select: { studentId: true }
    })
  ]);

  // Process Student Retention
  const studentFrequency: Record<string, number> = {};
  studentBookings.forEach(b => {
    if (b.studentId) {
      studentFrequency[b.studentId] = (studentFrequency[b.studentId] || 0) + 1;
    }
  });

  const uniqueStudents = Object.keys(studentFrequency).length;
  const returningStudents = Object.values(studentFrequency).filter(count => count > 1).length;
  const newStudents = uniqueStudents - returningStudents;

  const earningsTrend = await getEarningsStats(userId);

  return {
    earningsTrend,
    sessionStatus: sessionStatusDist.map(s => ({
      name: s.status,
      value: s._count.status
    })),
    subjects: subjectDist.map(s => ({
      name: s.subject || 'Other',
      sessions: s._count.subject,
      revenue: s._sum.price || 0
    })),
    retention: [
      { name: 'Returning Students', value: returningStudents },
      { name: 'New Students', value: newStudents }
    ],
    overview: {
      totalRevenue: tutorProfile.totalSessions * (tutorProfile.hourlyRate || 0), // Fallback
      averageRating: tutorProfile.averageRating,
      totalSessions: tutorProfile.totalSessions
    }
  };
};

const getMarketIntelligence = async (userId: string) => {
  const tutorProfile = await prisma.tutor_profile.findUnique({
    where: { userId },
    include: {
      tutor_subject: { include: { subject: true } }
    }
  });

  if (!tutorProfile) throw new Error("Tutor profile not found");

  const tutorSubjects = tutorProfile.tutor_subject.map(ts => ts.subjectId);
  const thirtyDaysAgo = new Date();
  thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

  const [subjectDemand, pricingBenchmark, competition, peakHours] = await Promise.all([
    // 1. Subject Demand (Radar Chart)
    prisma.booking.groupBy({
      by: ['subject'],
      where: { 
        createdAt: { gte: thirtyDaysAgo },
        status: 'COMPLETED'
      },
      _count: { id: true },
      orderBy: { _count: { id: 'desc' } },
      take: 8
    }),
    // 2. Pricing Benchmark (for tutor's subjects)
    prisma.tutor_profile.aggregate({
      where: { 
        tutor_subject: { some: { subjectId: { in: tutorSubjects } } }
      },
      _avg: { hourlyRate: true },
      _min: { hourlyRate: true },
      _max: { hourlyRate: true }
    }),
    // 3. Competitive Density (Tutors in same subjects)
    prisma.tutor_subject.groupBy({
      by: ['subjectId'],
      where: { subjectId: { in: tutorSubjects } },
      _count: { tutorProfileId: true }
    }),
    // 4. Peak Activity Hours
    prisma.booking.findMany({
      where: { createdAt: { gte: thirtyDaysAgo } },
      select: { scheduledAt: true }
    })
  ]);

  // Process Peak Hours Heatmap
  const hourDistribution = Array(24).fill(0);
  peakHours.forEach(bh => {
    const hour = new Date(bh.scheduledAt).getHours();
    hourDistribution[hour]++;
  });

  return {
    demandRadar: subjectDemand.map(s => ({
      subject: s.subject || 'Other',
      demand: s._count.id
    })),
    pricing: {
      min: pricingBenchmark._min.hourlyRate || 0,
      avg: pricingBenchmark._avg.hourlyRate || 0,
      max: pricingBenchmark._max.hourlyRate || 0,
      current: tutorProfile.hourlyRate
    },
    competition: competition.map(c => ({
      subjectId: c.subjectId,
      tutorCount: c._count.tutorProfileId
    })),
    peakActivity: hourDistribution.map((count, hour) => ({
      hour: `${hour}:00`,
      count
    }))
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
  updateBookingStatus,
  requestVerification,
  getEarningsStats,
  getTutorAnalytics,
  getMarketIntelligence
};