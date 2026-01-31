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

const createReview = async (studentId: string, data: CreateReviewInput): Promise<CreateReviewResponse> => {
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
  
  // Check if session time has passed
  const sessionEndTime = new Date(booking.scheduledAt.getTime() + booking.duration * 60000);
  const now = new Date();

  if (booking.status === "COMPLETED") {
    // Already completed, proceed to review
  } else if (booking.status === "CONFIRMED" && sessionEndTime < now) {
    // Session passed but not marked completed - allow review and auto-complete
    await prisma.booking.update({
      where: { id: booking.id },
      data: { status: "COMPLETED", updatedAt: new Date() }
    });
  } else {
    throw new Error("You can only review completed sessions");
  }

  if (sessionEndTime > now) {
    throw new Error("You can only review after the session has ended");
  }
  
  // Check if review already exists for this booking
  const existingReview = await prisma.review.findUnique({
    where: { bookingId: validatedData.bookingId }
  });
  
  if (existingReview) {
    throw new Error("Review already exists for this booking");
  }
  
  const createData: any = {
    bookingId: validatedData.bookingId,
    studentId: studentId,
    rating: validatedData.rating
  };
  
  if (validatedData.comment !== undefined) {
    createData.comment = validatedData.comment;
  }
  
  return await prisma.review.create({
    data: createData,
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
  }) as CreateReviewResponse;
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
    const dayOfWeek = scheduledDate.getDay() === 0 ? 7 : scheduledDate.getDay();
    const timeString = scheduledDate.toTimeString().substring(0, 5);
    
    const availabilitySlot = await prisma.availability_slot.findFirst({
      where: {
        tutorProfileId: validatedData.tutorProfileId,
        dayOfWeek: dayOfWeek,
        startTime: timeString,
        isBooked: false
      }
    });
    
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
      // Mark the availability slot as booked
      await tx.availability_slot.update({
        where: { id: availabilitySlot.id },
        data: { isBooked: true }
      });
      
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

  // Check if booking is at least 24 hours away
  const hoursUntilBooking = (booking.scheduledAt.getTime() - Date.now()) / (1000 * 60 * 60);
  if (hoursUntilBooking < 24) {
    throw new Error("Bookings can only be cancelled at least 24 hours in advance");
  }

  // Cancel booking and free up the slot in a transaction
  return await prisma.$transaction(async (tx) => {
    // Free up the availability slot if it exists
    if (booking.availabilitySlotId) {
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
                email: true
              }
            }
          }
        }
      }
    });
  }) as BookingWithTutor;
};

export const StudentService = { updateProfile, getProfile, createReview, createBooking, getBookings, getReviewableBookings, cancelBooking };
