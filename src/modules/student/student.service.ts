import { prisma } from "../../lib/prisma";
import { updateProfileSchema, UpdateProfileInput, createReviewSchema, CreateReviewInput } from "./student.validation";
import { createBookingSchema, CreateBookingInput } from "./booking.validation";
import { randomUUID } from "crypto";
import paginationSortingHelper from "../../helpers/paginationSortingHelper";
import {
  UserProfile,
  CreateReviewResponse,
  BookingWithTutor,
  PaginatedResponse,
  BookingPaginationOptions,
  PaginationOptions
} from "./student.interface";

const updateProfile = async (userId: string, data: UpdateProfileInput): Promise<UserProfile> => {
  const validatedData = updateProfileSchema.parse(data);
  
  const updateData: any = {};
  
  if (validatedData.name !== undefined) {
    updateData.name = validatedData.name;
  }
  if (validatedData.image !== undefined) {
    updateData.image = validatedData.image;
  }
  if (validatedData.address !== undefined) {
    updateData.address = validatedData.address;
  }
  if (validatedData.phone !== undefined) {
    updateData.phone = validatedData.phone;
  }
  
  return await prisma.user.update({
    where: { id: userId },
    data: updateData
  }) as UserProfile;
};

const getProfile = async (userId: string): Promise<UserProfile | null> => {
  return await prisma.user.findUnique({
    where: { id: userId }
  }) as UserProfile | null;
};

const createReview = async (
  studentId: string,
  data: CreateReviewInput
): Promise<CreateReviewResponse> => {
  // Validate input
  
  const validatedData = createReviewSchema.parse(data);
  
  // Find the booking for this student
  const booking = await prisma.booking.findFirst({
    where: {
      id: validatedData.bookingId,
      studentId: studentId,
    },
  });

  if (!booking) {
    throw new Error("Booking not found or doesn't belong to you");
  }

  // Convert scheduledAt to local Date object
  const scheduledDate = new Date(booking.scheduledAt); // assumed already local
  const sessionEndTime = new Date(scheduledDate.getTime() + booking.duration * 60 * 1000); // use actual booking duration
  const now = new Date(); // local time

  // Check if session is completed
  
  if (booking.status === "COMPLETED") {
    // Already completed, proceed
  } else if (booking.status === "CONFIRMED" && sessionEndTime <= now) {
    // Session passed, auto-complete
    await prisma.booking.update({
      where: { id: booking.id },
      data: { status: "COMPLETED", updatedAt: new Date() },
    });
  } else if (sessionEndTime > now) {
    throw new Error("You can only review after the session has ended");
  } else {
    throw new Error("You can only review completed sessions");
  }

  // Check if review already exists
  const existingReview = await prisma.review.findUnique({
    where: { bookingId: validatedData.bookingId },
  });
  
  
  if (existingReview) {
    throw new Error("Review already exists for this booking");
  }
  
  // Prepare create data
  const createData: any = {
    id: randomUUID(),
    bookingId: validatedData.bookingId,
    studentId: studentId,
    rating: validatedData.rating,
  };


  if (validatedData.comment) {
    createData.comment = validatedData.comment;
  }

  // Create review and update tutor stats in a transaction
  const result = await prisma.$transaction(async (tx) => {
    // Create the review
    const review = await tx.review.create({
      data: createData,
      include: {
        booking: {
          include: {
            tutor_profile: {
              include: {
                user: {
                  select: { id: true, name: true },
                },
              },
            },
          },
        },
      },
    });

    // Update tutor profile stats
    const tutorProfileId = booking.tutorProfileId;
    
    // Get all reviews for this tutor to calculate new stats
    const allReviews = await tx.review.findMany({
      where: {
        booking: {
          tutorProfileId: tutorProfileId
        }
      },
      select: {
        rating: true
      }
    });

    const totalReviews = allReviews.length;
    const averageRating = totalReviews > 0
      ? allReviews.reduce((sum, r) => sum + r.rating, 0) / totalReviews
      : 0;

    // Update tutor profile with new stats
    await tx.tutor_profile.update({
      where: { id: tutorProfileId },
      data: {
        totalReviews: totalReviews,
        averageRating: Math.round(averageRating * 10) / 10, // Round to 1 decimal
        updatedAt: new Date()
      }
    });

    return review;
  });

  return result;
};


const createBooking = async (studentId: string, data: CreateBookingInput): Promise<BookingWithTutor> => {
  try {
    
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
    
    // Check for existing bookings at the same time
    const existingBooking = await prisma.booking.findFirst({
      where: {
        tutorProfileId: validatedData.tutorProfileId,
        scheduledAt: scheduledDate,
        status: {
          not: 'CANCELLED'
        }
      }
    });
    
    if (existingBooking) {
      throw new Error("This time slot is already booked");
    }
    
    // Find the availability slot for this booking
    const scheduledDateOnly = new Date(scheduledDate);
    scheduledDateOnly.setUTCHours(0, 0, 0, 0);
    
    const hours = scheduledDate.getUTCHours();
    const minutes = scheduledDate.getUTCMinutes();
    const timeString = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
    

    // console.log("Tutor profile: ", validatedData.tutorProfileId)
    // console.log("Date: ", scheduledDateOnly)
    // console.log("Time: ", timeString)
    const availabilitySlot = await prisma.availability_slot.findFirst({
      where: {
        tutorProfileId: validatedData.tutorProfileId,
        specificDate: scheduledDateOnly,
        startTime: timeString,
        isBooked: false
      }
    });
    
    // console.log("Is bookes: ", timeString)

    
    if (!availabilitySlot) {
      throw new Error("This time slot is not available");
    }
    
    // Calculate price based on duration and hourly rate
    const price = (validatedData.duration / 60) * tutorProfile.hourlyRate;
    
    const createBookingData: any = {
      id: randomUUID(),
      studentId: studentId,
      tutorProfileId: validatedData.tutorProfileId,
      availabilitySlotId: availabilitySlot.id,
      scheduledAt: scheduledDate,
      duration: validatedData.duration,
      subject: validatedData.subject,
      price: price,
      status: "PENDING",
      createdAt: new Date(),
      updatedAt: new Date()
    };
    
    if (validatedData.notes !== undefined) {
      createBookingData.notes = validatedData.notes;
    }
    
    
    // Create booking and mark slot as booked in a transaction
    const result = await prisma.$transaction(async (tx) => {
      // Mark the availability slot as booked ONLY if it is NOT recurring
      if (availabilitySlot && !availabilitySlot.isRecurring) {
        await tx.availability_slot.update({
          where: { id: availabilitySlot.id },
          data: { isBooked: true }
        });
      }
      
      // Create the booking
      return await tx.booking.create({
        data: createBookingData,
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
    });
    
    return result as BookingWithTutor;
  } catch (error) {
    console.error('Error in createBooking service:', error);
    throw error;
  }
};

const getBookings = async (studentId: string, options: BookingPaginationOptions): Promise<PaginatedResponse<BookingWithTutor>> => {
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
    data: bookings as BookingWithTutor[],
    meta: {
      total,
      page: paginationHelper.page,
      limit: paginationHelper.limit,
      totalPages
    }
  };
};

const getReviewableBookings = async (studentId: string, options: PaginationOptions): Promise<PaginatedResponse<BookingWithTutor>> => {
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
    data: bookings as BookingWithTutor[],
    meta: {
      total,
      page: paginationHelper.page,
      limit: paginationHelper.limit,
      totalPages
    }
  };
};

const cancelBooking = async (studentId: string, bookingId: string): Promise<BookingWithTutor> => {
  const booking = await prisma.booking.findFirst({
    where: {
      id: bookingId,
      studentId: studentId
    },
    include: {
      availability_slot: true
    }
  });

  if (!booking) {
    throw new Error("Booking not found");
  }

  if (booking.status === "COMPLETED" || booking.status === "CANCELLED") {
    throw new Error("Cannot cancel this booking");
  }

  // Check if booking is in the future
  if (booking.scheduledAt.getTime() < Date.now()) {
    throw new Error("Cannot cancel a session that has already started or passed");
  }

  // Cancel booking and free up the slot in a transaction
  return await prisma.$transaction(async (tx) => {
    // Free up the availability slot if it exists and is NOT recurring
    if (booking.availabilitySlotId && booking.availability_slot && !booking.availability_slot.isRecurring) {
      await tx.availability_slot.update({
        where: { id: booking.availabilitySlotId },
        data: { isBooked: false }
      });
    }
    
    // Update booking status
    return await tx.booking.update({
      where: { id: bookingId },
      data: {
        status: "CANCELLED",
        updatedAt: new Date()
      },
      include: {
        tutor_profile: {
          include: {
            user: {
              select: {
                id: true,
                name: true,
                email: true,
                image: true
              }
            }
          }
        }
      }
    });
  }) as any;
};

const getReviews = async (studentId: string, options: PaginationOptions): Promise<PaginatedResponse<any>> => {
  const paginationHelper = paginationSortingHelper({
    page: options.page,
    limit: options.limit,
    sortBy: "createdAt",
    sortOrder: "desc"
  });

  const [reviews, total] = await Promise.all([
    prisma.review.findMany({
      where: {
        studentId: studentId
      },
      include: {
        booking: {
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
          }
        }
      },
      skip: paginationHelper.skip,
      take: paginationHelper.limit,
      orderBy: {
        createdAt: paginationHelper.sortOrder as "asc" | "desc"
      }
    }),
    prisma.review.count({ where: { studentId: studentId } })
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

export const StudentService = { updateProfile, getProfile, createReview, createBooking, getBookings, getReviewableBookings, cancelBooking, getReviews };
