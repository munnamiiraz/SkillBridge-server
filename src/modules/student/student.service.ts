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
  
  const createBookingData: any = {
    studentId: studentId,
    tutorProfileId: validatedData.tutorProfileId,
    scheduledAt: scheduledDate,
    duration: validatedData.duration,
    subject: validatedData.subject,
    price: price,
    status: "PENDING"
  };
  
  if (validatedData.notes !== undefined) {
    createBookingData.notes = validatedData.notes;
  }
  
  return await prisma.booking.create({
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
  }) as BookingWithTutor;
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

  return await prisma.booking.update({
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
  }) as BookingWithTutor;
};

export const StudentService = { updateProfile, getProfile, createReview, createBooking, getBookings, getReviewableBookings, cancelBooking };
