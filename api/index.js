import {
  auth
} from "./chunk-24BNTKWN.js";
import {
  __toESM,
  prisma,
  require_prisma
} from "./chunk-NYC6WFR6.js";

// src/app.ts
import express from "express";
import { toNodeHandler } from "better-auth/node";
import cors from "cors";

// src/middleware/globalErrorHandler.ts
var import_prisma = __toESM(require_prisma(), 1);
var { Prisma } = import_prisma.default;
function errorHandler(err, req, res, next) {
  let statusCode = 500;
  let errorMessage = "Internal Server Error";
  let errorDetails = err;
  if (err && typeof err === "object" && err.message) {
    statusCode = err.status || err.statusCode || 400;
    errorMessage = err.message;
  } else if (err instanceof Prisma.PrismaClientValidationError) {
    statusCode = 400;
    errorMessage = "Validation Error: " + err.message.split("\n").filter((line) => line.trim()).pop() || err.message;
  } else if (err instanceof Prisma.PrismaClientKnownRequestError) {
    statusCode = 400;
    if (err.code === "P2025") {
      errorMessage = "Record not found.";
    } else if (err.code === "P2002") {
      errorMessage = "A record with this value already exists.";
    } else if (err.code === "P2003") {
      errorMessage = "Foreign key constraint failed.";
    } else {
      errorMessage = err.message;
    }
  } else if (err instanceof Prisma.PrismaClientUnknownRequestError) {
    statusCode = 500;
    errorMessage = "Database query failed.";
  } else if (err instanceof Prisma.PrismaClientInitializationError) {
    statusCode = 500;
    errorMessage = "Database connection failed.";
  } else if (err.name === "ZodError" || err instanceof Error && "issues" in err) {
    statusCode = 400;
    errorMessage = "Validation Error";
    const issues = err.issues || [];
    errorDetails = issues.map((issue) => ({
      path: issue.path.join("."),
      message: issue.message
    }));
  } else if (err instanceof Error) {
    statusCode = 400;
    errorMessage = err.message;
  }
  console.error(`[Error] ${statusCode} - ${errorMessage}`);
  if (statusCode === 500) {
    console.error(err);
  }
  res.status(statusCode).json({
    success: false,
    message: errorMessage,
    ...errorDetails && errorDetails !== err ? { details: errorDetails } : {},
    error: process.env.NODE_ENV === "development" ? err : void 0
  });
}
var globalErrorHandler_default = errorHandler;

// src/middleware/notFound.ts
function notFound(req, res) {
  res.status(404).json({
    message: "Route not found!",
    path: req.originalUrl,
    date: Date()
  });
}

// src/modules/student/student.route.ts
import { Router } from "express";

// src/middleware/auth.ts
var auth2 = (...roles) => {
  return async (req, res, next) => {
    try {
      const rawToken = req.headers.authorization?.split(" ")[1] || req.cookies?.["better-auth.session_token"] || req.cookies?.sessionId;
      let session;
      session = await auth.api.getSession({
        headers: req.headers
      });
      if (!session) {
        return res.status(401).json({
          success: false,
          message: "You are not authorized!"
        });
      }
      if (!session.user.emailVerified) {
        return res.status(403).json({
          success: false,
          message: "Email verification required. Please verfiy your email!"
        });
      }
      req.user = {
        id: session.user.id || session.user.userId,
        email: session.user.email,
        name: session.user.name,
        role: session.user.role,
        emailVerified: session.user.emailVerified
      };
      if (roles.length && !roles.includes(req.user.role) && req.user.role !== "SUPER_ADMIN" /* SUPER_ADMIN */) {
        return res.status(403).json({
          success: false,
          message: "Forbidden! You don't have permission to access this resources!"
        });
      }
      next();
    } catch (err) {
      next(err);
    }
  };
};
var auth_default = auth2;

// src/modules/student/student.validation.ts
import { z } from "zod";
var updateProfileSchema = z.object({
  name: z.string().min(1, "Name cannot be empty").max(100, "Name too long").optional(),
  image: z.string().url("Invalid image URL").or(z.literal("")).nullable().optional(),
  address: z.string().max(500, "Address too long").nullable().optional(),
  phone: z.string().min(1, "Phone cannot be empty").max(20, "Phone too long").optional()
}).refine((data) => {
  const fields = Object.values(data).filter((field) => field !== void 0);
  return fields.length > 0;
}, {
  message: "At least one field must be provided for update"
});
var createReviewSchema = z.object({
  bookingId: z.string().uuid("Invalid booking ID"),
  rating: z.number().int().min(1, "Rating must be at least 1").max(5, "Rating cannot exceed 5"),
  comment: z.string().max(1e3, "Comment too long").optional()
});

// src/modules/student/booking.validation.ts
import { z as z2 } from "zod";
var isoDateRegex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d{3})?Z?$/;
var createBookingSchema = z2.object({
  tutorProfileId: z2.string().uuid({ message: "Invalid Tutor Profile ID" }),
  scheduledAt: z2.string().refine((val) => !isNaN(Date.parse(val)) && isoDateRegex.test(val), {
    message: "Invalid date format. Expected ISO string."
  }),
  duration: z2.number().int().min(30, "Minimum duration is 30 minutes").max(180, "Maximum duration is 180 minutes"),
  subject: z2.string().min(1, "Subject is required"),
  notes: z2.string().max(500, "Notes cannot exceed 500 characters").optional()
});

// src/modules/student/student.service.ts
import { randomUUID } from "crypto";

// src/helpers/paginationSortingHelper.ts
var paginationSortingHelper = (options) => {
  const page = Number(options.page) || 1;
  const limit = Number(options.limit) || 10;
  const skip = (page - 1) * limit;
  const sortBy = options.sortBy || "createdAt";
  const sortOrder = options.sortOrder || "desc";
  return {
    page,
    limit,
    skip,
    sortBy,
    sortOrder
  };
};
var paginationSortingHelper_default = paginationSortingHelper;

// src/modules/student/student.service.ts
var updateProfile = async (userId, data) => {
  const validatedData = updateProfileSchema.parse(data);
  const updateData = {};
  if (validatedData.name !== void 0) {
    updateData.name = validatedData.name;
  }
  if (validatedData.image !== void 0) {
    updateData.image = validatedData.image;
  }
  if (validatedData.address !== void 0) {
    updateData.address = validatedData.address;
  }
  if (validatedData.phone !== void 0) {
    updateData.phone = validatedData.phone;
  }
  return await prisma.user.update({
    where: { id: userId },
    data: updateData
  });
};
var getProfile = async (userId) => {
  return await prisma.user.findUnique({
    where: { id: userId }
  });
};
var createReview = async (studentId, data) => {
  const validatedData = createReviewSchema.parse(data);
  const booking = await prisma.booking.findFirst({
    where: {
      id: validatedData.bookingId,
      studentId
    }
  });
  if (!booking) {
    throw new Error("Booking not found or doesn't belong to you");
  }
  const scheduledDate = new Date(booking.scheduledAt);
  const sessionEndTime = new Date(scheduledDate.getTime() + booking.duration * 60 * 1e3);
  const now = /* @__PURE__ */ new Date();
  if (booking.status === "COMPLETED") {
  } else if (booking.status === "CONFIRMED" && sessionEndTime <= now) {
    await prisma.booking.update({
      where: { id: booking.id },
      data: { status: "COMPLETED", updatedAt: /* @__PURE__ */ new Date() }
    });
  } else if (sessionEndTime > now) {
    throw new Error("You can only review after the session has ended");
  } else {
    throw new Error("You can only review completed sessions");
  }
  const existingReview = await prisma.review.findUnique({
    where: { bookingId: validatedData.bookingId }
  });
  if (existingReview) {
    throw new Error("Review already exists for this booking");
  }
  const createData = {
    id: randomUUID(),
    bookingId: validatedData.bookingId,
    studentId,
    rating: validatedData.rating
  };
  if (validatedData.comment) {
    createData.comment = validatedData.comment;
  }
  const result = await prisma.$transaction(async (tx) => {
    const review = await tx.review.create({
      data: createData,
      include: {
        booking: {
          include: {
            tutor_profile: {
              include: {
                user: {
                  select: { id: true, name: true }
                }
              }
            }
          }
        }
      }
    });
    const tutorProfileId = booking.tutorProfileId;
    const allReviews = await tx.review.findMany({
      where: {
        booking: {
          tutorProfileId
        }
      },
      select: {
        rating: true
      }
    });
    const totalReviews = allReviews.length;
    const averageRating = totalReviews > 0 ? allReviews.reduce((sum, r) => sum + r.rating, 0) / totalReviews : 0;
    await tx.tutor_profile.update({
      where: { id: tutorProfileId },
      data: {
        totalReviews,
        averageRating: Math.round(averageRating * 10) / 10,
        // Round to 1 decimal
        updatedAt: /* @__PURE__ */ new Date()
      }
    });
    return review;
  });
  return result;
};
var createBooking = async (studentId, data) => {
  try {
    const validatedData = createBookingSchema.parse(data);
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
    const scheduledDate = new Date(validatedData.scheduledAt);
    if (scheduledDate <= /* @__PURE__ */ new Date()) {
      throw new Error("Booking time must be in the future");
    }
    const existingBooking = await prisma.booking.findFirst({
      where: {
        tutorProfileId: validatedData.tutorProfileId,
        scheduledAt: scheduledDate,
        status: {
          not: "CANCELLED"
        }
      }
    });
    if (existingBooking) {
      throw new Error("This time slot is already booked");
    }
    const scheduledDateOnly = new Date(scheduledDate);
    scheduledDateOnly.setUTCHours(0, 0, 0, 0);
    const hours = scheduledDate.getUTCHours();
    const minutes = scheduledDate.getUTCMinutes();
    const timeString = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`;
    const availabilitySlot = await prisma.availability_slot.findFirst({
      where: {
        tutorProfileId: validatedData.tutorProfileId,
        specificDate: scheduledDateOnly,
        startTime: timeString,
        isBooked: false
      }
    });
    if (!availabilitySlot) {
      throw new Error("This time slot is not available");
    }
    const price = validatedData.duration / 60 * tutorProfile.hourlyRate;
    const createBookingData = {
      id: randomUUID(),
      studentId,
      tutorProfileId: validatedData.tutorProfileId,
      availabilitySlotId: availabilitySlot.id,
      scheduledAt: scheduledDate,
      duration: validatedData.duration,
      subject: validatedData.subject,
      price,
      status: "PENDING",
      createdAt: /* @__PURE__ */ new Date(),
      updatedAt: /* @__PURE__ */ new Date()
    };
    if (validatedData.notes !== void 0) {
      createBookingData.notes = validatedData.notes;
    }
    const result = await prisma.$transaction(async (tx) => {
      if (availabilitySlot && !availabilitySlot.isRecurring) {
        await tx.availability_slot.update({
          where: { id: availabilitySlot.id },
          data: { isBooked: true }
        });
      }
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
    return result;
  } catch (error) {
    console.error("Error in createBooking service:", error);
    throw error;
  }
};
var getBookings = async (studentId, options) => {
  const paginationHelper = paginationSortingHelper_default({
    page: options.page,
    limit: options.limit,
    sortBy: "scheduledAt",
    sortOrder: "desc"
  });
  const whereClause = {
    studentId
  };
  if (options.status) {
    if (options.status === "ONGOING") {
      const now = /* @__PURE__ */ new Date();
      whereClause.OR = [
        { status: "ONGOING" },
        {
          AND: [
            { status: "CONFIRMED" },
            { scheduledAt: { lte: now } },
            { scheduledAt: { gte: new Date(now.getTime() - 60 * 6e4) } }
            // Within last hour
          ]
        }
      ];
    } else {
      whereClause.status = options.status;
    }
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
        scheduledAt: paginationHelper.sortOrder
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
var getReviewableBookings = async (studentId, options) => {
  const paginationHelper = paginationSortingHelper_default({
    page: options.page,
    limit: options.limit,
    sortBy: "scheduledAt",
    sortOrder: "desc"
  });
  const currentTime = /* @__PURE__ */ new Date();
  const [bookings, total] = await Promise.all([
    prisma.booking.findMany({
      where: {
        studentId,
        status: "COMPLETED",
        scheduledAt: {
          lt: new Date(currentTime.getTime() - 60 * 6e4)
          // At least 1 hour ago
        },
        review: null
        // No review exists
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
        scheduledAt: paginationHelper.sortOrder
      }
    }),
    prisma.booking.count({
      where: {
        studentId,
        status: "COMPLETED",
        scheduledAt: {
          lt: new Date(currentTime.getTime() - 60 * 6e4)
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
var cancelBooking = async (studentId, bookingId) => {
  const booking = await prisma.booking.findFirst({
    where: {
      id: bookingId,
      studentId
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
  if (booking.scheduledAt.getTime() < Date.now()) {
    throw new Error("Cannot cancel a session that has already started or passed");
  }
  return await prisma.$transaction(async (tx) => {
    const bookingAny = booking;
    if (bookingAny.availabilitySlotId && bookingAny.availability_slot && !bookingAny.availability_slot.isRecurring) {
      await tx.availability_slot.update({
        where: { id: bookingAny.availabilitySlotId },
        data: { isBooked: false }
      });
    }
    return await tx.booking.update({
      where: { id: bookingId },
      data: {
        status: "CANCELLED",
        updatedAt: /* @__PURE__ */ new Date()
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
  });
};
var getReviews = async (studentId, options) => {
  const paginationHelper = paginationSortingHelper_default({
    page: options.page,
    limit: options.limit,
    sortBy: "createdAt",
    sortOrder: "desc"
  });
  const [reviews, total] = await Promise.all([
    prisma.review.findMany({
      where: {
        studentId
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
        createdAt: paginationHelper.sortOrder
      }
    }),
    prisma.review.count({ where: { studentId } })
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
var getStats = async (studentId) => {
  const [
    totalBookings,
    completedSessions,
    upcomingSessions,
    totalSpentData,
    reviews
  ] = await Promise.all([
    prisma.booking.count({ where: { studentId } }),
    prisma.booking.count({ where: { studentId, status: "COMPLETED" } }),
    prisma.booking.count({
      where: {
        studentId,
        status: { in: ["PENDING", "CONFIRMED", "ONGOING"] }
      }
    }),
    prisma.booking.aggregate({
      where: {
        studentId,
        status: { not: "CANCELLED" }
      },
      _sum: { price: true }
    }),
    prisma.review.findMany({
      where: { studentId },
      select: { rating: true }
    })
  ]);
  const averageRating = reviews.length > 0 ? (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(1) : "0.0";
  return {
    totalBookings,
    completedSessions,
    upcomingSessions,
    totalSpent: totalSpentData._sum.price || 0,
    averageRating
  };
};
var StudentService = { updateProfile, getProfile, createReview, createBooking, getBookings, getReviewableBookings, cancelBooking, getReviews, getStats };

// src/modules/student/student.controller.ts
var updateProfile2 = async (req, res, next) => {
  try {
    const result = await StudentService.updateProfile(req.user.id, req.body);
    res.status(200).json({
      success: true,
      message: "Profile updated successfully",
      data: result
    });
  } catch (error) {
    next(error);
  }
};
var getProfile2 = async (req, res, next) => {
  try {
    const result = await StudentService.getProfile(req.user.id);
    res.status(200).json({
      success: true,
      message: "Profile retrieved successfully",
      data: result
    });
  } catch (error) {
    next(error);
  }
};
var createReview2 = async (req, res, next) => {
  try {
    const { bookingId, rating, comment } = req.body;
    const result = await StudentService.createReview(req.user.id, { bookingId, rating, comment });
    res.status(201).json({
      success: true,
      message: "Review created successfully",
      data: result
    });
  } catch (error) {
    next(error);
  }
};
var createBooking2 = async (req, res, next) => {
  try {
    const { tutorProfileId, scheduledAt, duration, subject, notes } = req.body;
    if (!req.user) {
      return res.status(401).json({
        success: false,
        message: "User not authenticated"
      });
    }
    const result = await StudentService.createBooking(req.user.id, { tutorProfileId, scheduledAt, duration, subject, notes });
    res.status(201).json({
      success: true,
      message: "Booking created successfully",
      data: result
    });
  } catch (error) {
    console.error("Booking creation error:", error);
    if (error.name === "ZodError") {
      return res.status(400).json({
        success: false,
        message: "Validation error",
        errors: error.errors
      });
    }
    if (error.message) {
      return res.status(400).json({
        success: false,
        message: error.message
      });
    }
    next(error);
  }
};
var getBookings2 = async (req, res, next) => {
  try {
    const { page = 1, limit = 10, status } = req.query;
    const result = await StudentService.getBookings(req.user.id, {
      page: Number(page),
      limit: Number(limit),
      status
    });
    res.status(200).json({
      success: true,
      message: "Bookings retrieved successfully",
      data: result.data,
      meta: result.meta
    });
  } catch (error) {
    next(error);
  }
};
var getReviewableBookings2 = async (req, res, next) => {
  try {
    const { page = 1, limit = 10 } = req.query;
    const result = await StudentService.getReviewableBookings(req.user.id, {
      page: Number(page),
      limit: Number(limit)
    });
    res.status(200).json({
      success: true,
      message: "Reviewable bookings retrieved successfully",
      data: result.data,
      meta: result.meta
    });
  } catch (error) {
    next(error);
  }
};
var cancelBooking2 = async (req, res, next) => {
  try {
    const { bookingId } = req.params;
    const result = await StudentService.cancelBooking(req.user.id, bookingId);
    res.status(200).json({
      success: true,
      message: "Booking cancelled successfully",
      data: result
    });
  } catch (error) {
    next(error);
  }
};
var getReviews2 = async (req, res, next) => {
  try {
    const { page = 1, limit = 10 } = req.query;
    const result = await StudentService.getReviews(req.user.id, {
      page: Number(page),
      limit: Number(limit)
    });
    res.status(200).json({
      success: true,
      message: "Reviews retrieved successfully",
      data: result.data,
      meta: result.meta
    });
  } catch (error) {
    next(error);
  }
};
var getStats2 = async (req, res, next) => {
  try {
    const result = await StudentService.getStats(req.user.id);
    res.status(200).json({
      success: true,
      message: "Statistics retrieved successfully",
      data: result
    });
  } catch (error) {
    next(error);
  }
};
var StudentController = { updateProfile: updateProfile2, getProfile: getProfile2, createReview: createReview2, createBooking: createBooking2, getBookings: getBookings2, getReviewableBookings: getReviewableBookings2, cancelBooking: cancelBooking2, getReviews: getReviews2, getStats: getStats2 };

// src/modules/student/student.route.ts
var router = Router();
router.get("/profile", auth_default("STUDENT" /* STUDENT */), StudentController.getProfile);
router.patch("/profile", auth_default("STUDENT" /* STUDENT */), StudentController.updateProfile);
router.post("/reviews", auth_default("STUDENT" /* STUDENT */), StudentController.createReview);
router.get("/reviews", auth_default("STUDENT" /* STUDENT */), StudentController.getReviews);
router.post("/bookings", auth_default("STUDENT" /* STUDENT */), StudentController.createBooking);
router.get("/bookings", auth_default("STUDENT" /* STUDENT */), StudentController.getBookings);
router.get("/stats", auth_default("STUDENT" /* STUDENT */), StudentController.getStats);
router.patch("/bookings/:bookingId/cancel", auth_default("STUDENT" /* STUDENT */), StudentController.cancelBooking);
router.get("/reviewable-bookings", auth_default("STUDENT" /* STUDENT */), StudentController.getReviewableBookings);
router.get("/test-auth", auth_default("STUDENT" /* STUDENT */), (req, res) => {
  res.json({ success: true, user: req.user, message: "Authentication working!" });
});
var StudentRoutes = router;

// src/modules/tutor/tutor.route.ts
import { Router as Router2 } from "express";

// src/modules/tutor/tutor.validation.ts
import { z as z3 } from "zod";
var createTutorProfileSchema = z3.object({
  bio: z3.string().min(10, "Bio must be at least 10 characters").max(1e3, "Bio too long"),
  headline: z3.string().min(5, "Headline must be at least 5 characters").max(200, "Headline too long"),
  hourlyRate: z3.number().min(1, "Hourly rate must be at least $1").max(1e3, "Hourly rate too high"),
  experience: z3.number().min(0, "Experience cannot be negative").max(50, "Experience too high"),
  education: z3.string().min(5, "Education must be at least 5 characters").max(500, "Education too long"),
  subjectIds: z3.array(z3.string()).min(1, "At least one subject must be selected")
});
var updateTutorProfileSchema = z3.object({
  name: z3.string().min(1, "Name cannot be empty").max(100, "Name too long").optional(),
  image: z3.string().url("Invalid image URL").or(z3.literal("")).nullable().optional(),
  phone: z3.string().max(20, "Phone too long").nullable().optional(),
  address: z3.string().max(500, "Address too long").nullable().optional(),
  bio: z3.string().min(10, "Bio must be at least 10 characters").max(1e3, "Bio too long").nullable().optional(),
  headline: z3.string().min(5, "Headline must be at least 5 characters").max(200, "Headline too long").nullable().optional(),
  hourlyRate: z3.number().min(1, "Hourly rate must be at least $1").max(1e3, "Hourly rate too high").optional(),
  experience: z3.number().min(0, "Experience cannot be negative").max(50, "Experience too high").optional(),
  education: z3.string().min(5, "Education must be at least 5 characters").max(500, "Education too long").nullable().optional(),
  isAvailable: z3.boolean().optional(),
  banner: z3.string().url("Invalid banner URL").or(z3.literal("")).nullable().optional()
}).refine((data) => {
  const fields = Object.values(data).filter((field) => field !== void 0);
  return fields.length > 0;
}, {
  message: "At least one field must be provided for update"
});
var timeSlotSchema = z3.object({
  date: z3.string().regex(/^\d{4}-\d{2}-\d{2}$/, "Invalid date format (YYYY-MM-DD)"),
  startTime: z3.string().regex(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/, "Invalid time format (HH:MM)"),
  endTime: z3.string().regex(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/, "Invalid time format (HH:MM)")
}).refine((data) => {
  const start = data.startTime.split(":").map(Number);
  const end = data.endTime.split(":").map(Number);
  const startMinutes = start[0] * 60 + start[1];
  const endMinutes = end[0] * 60 + end[1];
  return endMinutes > startMinutes;
}, {
  message: "End time must be after start time"
});
var updateAvailabilitySlotsSchema = z3.object({
  weekStartDate: z3.string().regex(/^\d{4}-\d{2}-\d{2}$/, "Invalid date format (YYYY-MM-DD)"),
  slots: z3.array(timeSlotSchema)
});

// src/modules/tutor/tutor.service.ts
import { randomUUID as randomUUID2 } from "crypto";
var reverseDayOfWeekMap = {
  0: "SUNDAY",
  1: "MONDAY",
  2: "TUESDAY",
  3: "WEDNESDAY",
  4: "THURSDAY",
  5: "FRIDAY",
  6: "SATURDAY"
};
var timeToMinutes = (time) => {
  const parts = time.split(":");
  const h = parseInt(parts[0] || "0", 10);
  const m = parseInt(parts[1] || "0", 10);
  return (isNaN(h) ? 0 : h) * 60 + (isNaN(m) ? 0 : m);
};
var minutesToTime = (minutes) => {
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  return `${h.toString().padStart(2, "0")}:${m.toString().padStart(2, "0")}`;
};
var getDayOfWeek = (dateString) => (/* @__PURE__ */ new Date(dateString + "T00:00:00.000Z")).getUTCDay();
var getAvailabilitySlots = async (userId, weekStartDate) => {
  const tutorProfile = await prisma.tutor_profile.findUnique({
    where: { userId }
  });
  if (!tutorProfile) {
    throw new Error("Tutor profile not found");
  }
  let startDate;
  if (weekStartDate) {
    startDate = /* @__PURE__ */ new Date(weekStartDate + "T00:00:00.000Z");
  } else {
    const now = /* @__PURE__ */ new Date();
    const dhakaOffset = 6 * 60;
    const nowInDhaka = new Date(now.getTime() + (dhakaOffset + now.getTimezoneOffset()) * 6e4);
    const dayOfWeek = nowInDhaka.getDay();
    const diff = dayOfWeek === 0 ? -6 : 1 - dayOfWeek;
    nowInDhaka.setDate(nowInDhaka.getDate() + diff);
    const yyyy = nowInDhaka.getFullYear();
    const mm = String(nowInDhaka.getMonth() + 1).padStart(2, "0");
    const dd = String(nowInDhaka.getDate()).padStart(2, "0");
    startDate = /* @__PURE__ */ new Date(`${yyyy}-${mm}-${dd}T00:00:00.000Z`);
  }
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
      { specificDate: "asc" },
      { startTime: "asc" }
    ]
  });
  const grouped = {};
  for (const s of slots) {
    if (!s.specificDate) continue;
    const dateKey = s.specificDate.toISOString().split("T")[0];
    if (!grouped[dateKey]) {
      grouped[dateKey] = [];
    }
    const ranges = grouped[dateKey];
    const lastRange = ranges[ranges.length - 1];
    if (lastRange && lastRange.endTime === s.startTime && lastRange.isBooked === s.isBooked) {
      lastRange.endTime = s.endTime;
    } else {
      ranges.push({
        startTime: s.startTime,
        endTime: s.endTime,
        isBooked: s.isBooked
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
    weekStartDate: startDate.toISOString().split("T")[0],
    weekEndDate: endDate.toISOString().split("T")[0],
    slots: resultSlots
  };
};
var createProfile = async (userId, data) => {
  const validatedData = createTutorProfileSchema.parse(data);
  const result = await prisma.$transaction(async (tx) => {
    const profile = await tx.tutor_profile.create({
      data: {
        id: randomUUID2(),
        userId,
        bio: validatedData.bio,
        headline: validatedData.headline,
        hourlyRate: validatedData.hourlyRate,
        experience: validatedData.experience,
        education: validatedData.education,
        isAvailable: true
        // Default to available
      }
    });
    const tutorSubjects = validatedData.subjectIds.map((subjectId) => ({
      id: randomUUID2(),
      tutorProfileId: profile.id,
      subjectId
    }));
    await tx.tutor_subject.createMany({
      data: tutorSubjects
    });
    await tx.user.update({
      where: { id: userId },
      data: { role: "TUTOR" }
    });
    return profile;
  });
  return await getProfile3(userId);
};
var updateProfile3 = async (userId, data) => {
  const validatedData = updateTutorProfileSchema.parse(data);
  return await prisma.$transaction(async (tx) => {
    const userUpdateData = {};
    const profileUpdateData = {};
    if (validatedData.name !== void 0) userUpdateData.name = validatedData.name;
    if (validatedData.image !== void 0) userUpdateData.image = validatedData.image;
    if (validatedData.phone !== void 0) userUpdateData.phone = validatedData.phone;
    if (validatedData.address !== void 0) userUpdateData.address = validatedData.address;
    if (validatedData.bio !== void 0) profileUpdateData.bio = validatedData.bio;
    if (validatedData.headline !== void 0) profileUpdateData.headline = validatedData.headline;
    if (validatedData.hourlyRate !== void 0) profileUpdateData.hourlyRate = validatedData.hourlyRate;
    if (validatedData.experience !== void 0) profileUpdateData.experience = validatedData.experience;
    if (validatedData.education !== void 0) profileUpdateData.education = validatedData.education;
    if (validatedData.isAvailable !== void 0) profileUpdateData.isAvailable = validatedData.isAvailable;
    if (validatedData.address !== void 0) profileUpdateData.address = validatedData.address;
    if (validatedData.banner !== void 0) profileUpdateData.banner = validatedData.banner;
    if (Object.keys(userUpdateData).length > 0) {
      await tx.user.update({
        where: { id: userId },
        data: userUpdateData
      });
    }
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
var getProfile3 = async (userId) => {
  const today = /* @__PURE__ */ new Date();
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
          specificDate: "asc"
        }
      }
    }
  });
  if (!profile) {
    return null;
  }
  const [sessionCount, ratingAgg] = await Promise.all([
    prisma.booking.count({
      where: { tutorProfileId: profile.id, status: "COMPLETED" }
    }),
    prisma.review.aggregate({
      where: { booking: { tutorProfileId: profile.id } },
      _avg: { rating: true }
    })
  ]);
  const [stats, reviews] = await Promise.all([
    getRatingStats(profile.id).catch(() => null),
    getReviews3(profile.id, { page: 1, limit: 10 }).catch(() => null)
  ]);
  return {
    ...profile,
    totalSessions: sessionCount,
    // Override with real count
    averageRating: ratingAgg._avg.rating || 0,
    // Override with real average
    ratingStats: stats,
    recentReviews: reviews ? reviews.data : []
  };
};
var getTeachingSessions = async (userId, options) => {
  const tutorProfile = await prisma.tutor_profile.findUnique({
    where: { userId }
  });
  if (!tutorProfile) {
    throw new Error("Tutor profile not found");
  }
  const paginationHelper = paginationSortingHelper_default({
    page: options.page,
    limit: options.limit,
    sortBy: "scheduledAt",
    sortOrder: "desc"
  });
  const whereClause = {
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
        scheduledAt: paginationHelper.sortOrder
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
var getReviews3 = async (tutorProfileId, options) => {
  const paginationHelper = paginationSortingHelper_default({
    page: options.page,
    limit: options.limit,
    sortBy: "createdAt",
    sortOrder: "desc"
  });
  const whereClause = {
    booking: {
      tutorProfileId
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
        createdAt: paginationHelper.sortOrder
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
var getRatingStats = async (tutorProfileId) => {
  const [ratingDistribution, totalReviews, averageRating, bookingStats, studentStats] = await Promise.all([
    prisma.review.groupBy({
      by: ["rating"],
      where: {
        booking: {
          tutorProfileId
        }
      },
      _count: {
        rating: true
      },
      orderBy: {
        rating: "desc"
      }
    }),
    prisma.review.count({
      where: {
        booking: {
          tutorProfileId
        }
      }
    }),
    prisma.review.aggregate({
      where: {
        booking: {
          tutorProfileId
        }
      },
      _avg: {
        rating: true
      }
    }),
    // 🚀 NEW: Response Rate Calculation
    prisma.booking.findMany({
      where: { tutorProfileId },
      select: { status: true, createdAt: true, updatedAt: true }
    }),
    // 🚀 NEW: Retention Rate Calculation
    prisma.booking.groupBy({
      by: ["studentId"],
      where: { tutorProfileId },
      _count: { studentId: true }
    })
  ]);
  const totalBookings = bookingStats.length;
  const respondedBookings = bookingStats.filter((b) => b.status !== "PENDING").length;
  const responseRate = totalBookings > 0 ? Math.round(respondedBookings / totalBookings * 100) : 100;
  const nonPending = bookingStats.filter((b) => b.status !== "PENDING");
  let avgResponseTimeMinutes = 45;
  if (nonPending.length > 0) {
    const totalTime = nonPending.reduce((acc, b) => {
      return acc + (b.updatedAt.getTime() - b.createdAt.getTime());
    }, 0);
    avgResponseTimeMinutes = Math.min(Math.round(totalTime / nonPending.length / 6e4), 120);
    if (avgResponseTimeMinutes <= 0) avgResponseTimeMinutes = 12;
  }
  const totalStudents = studentStats.length;
  const repeatStudents = studentStats.filter((s) => s._count.studentId > 1).length;
  const retentionRate = totalStudents > 0 ? Math.round(repeatStudents / totalStudents * 100) : 0;
  const distribution = [5, 4, 3, 2, 1].map((rating) => {
    const found = ratingDistribution.find((r) => r.rating === rating);
    return {
      rating,
      count: found ? found._count.rating : 0,
      percentage: totalReviews > 0 ? Math.round((found ? found._count.rating : 0) / totalReviews * 100) : 0
    };
  });
  return {
    totalReviews,
    averageRating: averageRating._avg.rating ? Number(averageRating._avg.rating.toFixed(1)) : 0,
    responseRate,
    avgResponseTime: `${avgResponseTimeMinutes}m`,
    retentionRate,
    distribution
  };
};
var updateBookingStatus = async (userId, bookingId, data) => {
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
  if (!["CONFIRMED", "ONGOING", "COMPLETED", "CANCELLED"].includes(data.status)) {
    throw new Error("Invalid status");
  }
  if (booking.status === "CANCELLED") {
    throw new Error("Cannot update cancelled booking");
  }
  return await prisma.$transaction(async (tx) => {
    if (data.status === "CANCELLED" && booking.availabilitySlotId && booking.availability_slot && !booking.availability_slot.isRecurring) {
      await tx.availability_slot.update({
        where: { id: booking.availabilitySlotId },
        data: { isBooked: false }
      });
    }
    let meetingLinkUpdate = {};
    if (["CONFIRMED", "ONGOING"].includes(data.status) && !booking.meetingLink) {
      const { createGoogleMeet } = await import("./google-calendar-F4RLGZPR.js");
      const realMeetLink = await createGoogleMeet(
        userId,
        booking.subject || "Tutoring Session",
        booking.scheduledAt,
        booking.duration
      );
      if (realMeetLink) {
        meetingLinkUpdate = { meetingLink: realMeetLink };
      } else {
        const meetCode = randomUUID2().split("-").slice(0, 3).join("-");
        meetingLinkUpdate = { meetingLink: `https://meet.google.com/${meetCode}` };
      }
    }
    const updatedBooking = await tx.booking.update({
      where: { id: bookingId },
      data: {
        status: data.status,
        ...meetingLinkUpdate,
        updatedAt: /* @__PURE__ */ new Date()
      },
      include: {
        user: {
          select: { id: true, name: true, email: true }
        }
      }
    });
    if (data.status === "COMPLETED") {
      const completedSessions = await tx.booking.count({
        where: { tutorProfileId: tutorProfile.id, status: "COMPLETED" }
      });
      const ratingAgg = await tx.review.aggregate({
        where: { booking: { tutorProfileId: tutorProfile.id } },
        _avg: { rating: true }
      });
      await tx.tutor_profile.update({
        where: { id: tutorProfile.id },
        data: {
          totalSessions: completedSessions,
          averageRating: ratingAgg._avg.rating || 0
        }
      });
    }
    return updatedBooking;
  });
};
var updateAvailabilitySlots = async (userId, data) => {
  const tutorProfile = await prisma.tutor_profile.findUnique({ where: { userId } });
  if (!tutorProfile) throw new Error("Tutor profile not found");
  const weekStart = /* @__PURE__ */ new Date(data.weekStartDate + "T00:00:00.000Z");
  weekStart.setUTCHours(0, 0, 0, 0);
  if (weekStart.getUTCDay() !== 1) throw new Error("Week start date must be a Monday");
  const weekEnd = new Date(weekStart);
  weekEnd.setUTCDate(weekStart.getUTCDate() + 6);
  weekEnd.setUTCHours(23, 59, 59, 999);
  const oneHourChunks = [];
  for (const slot of data.slots) {
    const slotDate = /* @__PURE__ */ new Date(slot.date + "T00:00:00.000Z");
    slotDate.setUTCHours(0, 0, 0, 0);
    if (slotDate < weekStart || slotDate > weekEnd) {
      throw new Error(`Slot date ${slot.date} is outside the week ${weekStart.toISOString().slice(0, 10)} - ${weekEnd.toISOString().slice(0, 10)}`);
    }
    const startMin = timeToMinutes(slot.startTime);
    const endMin = timeToMinutes(slot.endTime);
    if (isNaN(startMin) || isNaN(endMin)) throw new Error(`Invalid time format for ${slot.date}`);
    if (endMin <= startMin) throw new Error(`Invalid time range for ${slot.date}: end must be after start`);
    if (endMin - startMin < 60) throw new Error(`Minimum duration is 1 hour for ${slot.date}`);
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
  const seen = /* @__PURE__ */ new Set();
  const dedupedChunks = oneHourChunks.sort((a, b) => a.date === b.date ? a.startMin - b.startMin : a.date.localeCompare(b.date)).filter((chunk) => {
    const key = `${chunk.date}|${chunk.startMin}-${chunk.endMin}`;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
  console.log("One-hour chunks to insert:", dedupedChunks);
  function getNowInDhaka() {
    return new Date((/* @__PURE__ */ new Date()).toLocaleString("en-US", { timeZone: "Asia/Dhaka" }));
  }
  const now = getNowInDhaka();
  let hasPastSlots = false;
  for (const chunk of dedupedChunks) {
    const [h, m] = chunk.startTime.split(":").map(Number);
    const [year, month, day] = chunk.date.split("-").map(Number);
    const slotInDhakaContext = new Date(year, month - 1, day, h, m);
    if (slotInDhakaContext < now) {
      hasPastSlots = true;
      break;
    }
  }
  if (hasPastSlots) {
    throw new Error("please dont set past dates");
  }
  const createdAndExisting = await prisma.$transaction(async (tx) => {
    await tx.availability_slot.deleteMany({
      where: {
        tutorProfileId: tutorProfile.id,
        isBooked: false,
        specificDate: { gte: weekStart, lte: weekEnd }
      }
    });
    if (dedupedChunks.length > 0) {
      const createPayload = dedupedChunks.map((c) => ({
        id: randomUUID2(),
        tutorProfileId: tutorProfile.id,
        dayOfWeek: c.dayOfWeek,
        startTime: c.startTime,
        endTime: c.endTime,
        specificDate: /* @__PURE__ */ new Date(c.date + "T00:00:00.000Z"),
        isRecurring: false,
        isBooked: false
      }));
      console.log("createPayload (first 10):", createPayload.slice(0, 10));
      await tx.availability_slot.createMany({ data: createPayload, skipDuplicates: true });
      console.log(`Inserted ${createPayload.length} one-hour slots`);
    } else {
      console.log("No one-hour chunks to insert");
    }
    return tx.availability_slot.findMany({
      where: {
        tutorProfileId: tutorProfile.id,
        specificDate: { gte: weekStart, lte: weekEnd }
      },
      orderBy: [{ specificDate: "asc" }, { startTime: "asc" }]
    });
  });
  const grouped = {};
  createdAndExisting.forEach((s) => {
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
  const formattedSlots = [];
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
var requestVerification = async (userId) => {
  const tutorProfile = await prisma.tutor_profile.findUnique({
    where: { userId },
    include: {
      user: true
    }
  });
  if (!tutorProfile) {
    throw new Error("Tutor profile not found");
  }
  if (tutorProfile.isVerified || tutorProfile.user.role === "VERIFIED_TUTOR") {
    throw new Error("Tutor is already verified");
  }
  if (tutorProfile.totalSessions < 10) {
    throw new Error(`Verification requires at least 10 completed sessions. You have ${tutorProfile.totalSessions}.`);
  }
  if (tutorProfile.averageRating < 4.5) {
    throw new Error(`Verification requires a minimum average rating of 4.5. Your current rating is ${tutorProfile.averageRating || 0}.`);
  }
  return await prisma.$transaction(async (tx) => {
    await tx.tutor_profile.update({
      where: { id: tutorProfile.id },
      data: {
        isVerified: true,
        verifiedAt: /* @__PURE__ */ new Date()
      }
    });
    await tx.user.update({
      where: { id: userId },
      data: {
        role: "VERIFIED_TUTOR"
      }
    });
    return {
      success: true,
      message: "Congratulations! You are now a Verified Tutor."
    };
  });
};
var getEarningsStats = async (userId) => {
  const tutorProfile = await prisma.tutor_profile.findUnique({
    where: { userId }
  });
  if (!tutorProfile) throw new Error("Tutor profile not found");
  const sixMonthsAgo = /* @__PURE__ */ new Date();
  sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 6);
  const bookings = await prisma.booking.findMany({
    where: {
      tutorProfileId: tutorProfile.id,
      status: "COMPLETED",
      scheduledAt: { gte: sixMonthsAgo }
    },
    select: {
      price: true,
      scheduledAt: true
    },
    orderBy: { scheduledAt: "asc" }
  });
  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const statsMap = {};
  for (let i = 5; i >= 0; i--) {
    const d = /* @__PURE__ */ new Date();
    d.setMonth(d.getMonth() - i);
    const monthKey = `${monthNames[d.getMonth()]}`;
    statsMap[monthKey] = 0;
  }
  bookings.forEach((b) => {
    const m = new Date(b.scheduledAt).getUTCMonth();
    const monthKey = monthNames[m];
    if (monthKey && statsMap[monthKey] !== void 0) {
      statsMap[monthKey] += b.price;
    }
  });
  return Object.entries(statsMap).map(([month, amount]) => ({
    month,
    earnings: amount
  }));
};
var getTutorAnalytics = async (userId) => {
  const tutorProfile = await prisma.tutor_profile.findUnique({
    where: { userId }
  });
  if (!tutorProfile) throw new Error("Tutor profile not found");
  const [sessionStatusDist, subjectDist, studentBookings] = await Promise.all([
    // 1. Session Status Distribution (Pie Chart)
    prisma.booking.groupBy({
      by: ["status"],
      where: { tutorProfileId: tutorProfile.id },
      _count: { status: true }
    }),
    // 2. Subject Distribution (Pie Chart/Bar Chart)
    prisma.booking.groupBy({
      by: ["subject"],
      where: {
        tutorProfileId: tutorProfile.id,
        status: "COMPLETED"
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
  const studentFrequency = {};
  studentBookings.forEach((b) => {
    if (b.studentId) {
      studentFrequency[b.studentId] = (studentFrequency[b.studentId] || 0) + 1;
    }
  });
  const uniqueStudents = Object.keys(studentFrequency).length;
  const returningStudents = Object.values(studentFrequency).filter((count) => count > 1).length;
  const newStudents = uniqueStudents - returningStudents;
  const earningsTrend = await getEarningsStats(userId);
  return {
    earningsTrend,
    sessionStatus: sessionStatusDist.map((s) => ({
      name: s.status,
      value: s._count.status
    })),
    subjects: subjectDist.map((s) => ({
      name: s.subject || "Other",
      sessions: s._count.subject,
      revenue: s._sum.price || 0
    })),
    retention: [
      { name: "Returning Students", value: returningStudents },
      { name: "New Students", value: newStudents }
    ],
    overview: {
      totalRevenue: tutorProfile.totalSessions * (tutorProfile.hourlyRate || 0),
      // Fallback
      averageRating: tutorProfile.averageRating,
      totalSessions: tutorProfile.totalSessions
    }
  };
};
var getMarketIntelligence = async (userId) => {
  const tutorProfile = await prisma.tutor_profile.findUnique({
    where: { userId },
    include: {
      tutor_subject: { include: { subject: true } }
    }
  });
  if (!tutorProfile) throw new Error("Tutor profile not found");
  const tutorSubjects = tutorProfile.tutor_subject.map((ts) => ts.subjectId);
  const thirtyDaysAgo = /* @__PURE__ */ new Date();
  thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
  const [subjectDemand, pricingBenchmark, competition, peakHours] = await Promise.all([
    // 1. Subject Demand (Radar Chart)
    prisma.booking.groupBy({
      by: ["subject"],
      where: {
        createdAt: { gte: thirtyDaysAgo },
        status: "COMPLETED"
      },
      _count: { id: true },
      orderBy: { _count: { id: "desc" } },
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
      by: ["subjectId"],
      where: { subjectId: { in: tutorSubjects } },
      _count: { tutorProfileId: true }
    }),
    // 4. Peak Activity Hours
    prisma.booking.findMany({
      where: { createdAt: { gte: thirtyDaysAgo } },
      select: { scheduledAt: true }
    })
  ]);
  const hourDistribution = Array(24).fill(0);
  peakHours.forEach((bh) => {
    const hour = new Date(bh.scheduledAt).getHours();
    hourDistribution[hour]++;
  });
  return {
    demandRadar: subjectDemand.map((s) => ({
      subject: s.subject || "Other",
      demand: s._count.id
    })),
    pricing: {
      min: pricingBenchmark._min.hourlyRate || 0,
      avg: pricingBenchmark._avg.hourlyRate || 0,
      max: pricingBenchmark._max.hourlyRate || 0,
      current: tutorProfile.hourlyRate
    },
    competition: competition.map((c) => ({
      subjectId: c.subjectId,
      tutorCount: c._count.tutorProfileId
    })),
    peakActivity: hourDistribution.map((count, hour) => ({
      hour: `${hour}:00`,
      count
    }))
  };
};
var TutorService = {
  createProfile,
  updateProfile: updateProfile3,
  getProfile: getProfile3,
  getAvailabilitySlots,
  updateAvailabilitySlots,
  getTeachingSessions,
  getReviews: getReviews3,
  getRatingStats,
  updateBookingStatus,
  requestVerification,
  getEarningsStats,
  getTutorAnalytics,
  getMarketIntelligence
};

// src/modules/tutor/tutor.controller.ts
var createProfile2 = async (req, res, next) => {
  try {
    if (!req.user) {
      return res.status(401).json({
        success: false,
        message: "User not authenticated"
      });
    }
    const { prisma: prisma2 } = await import("./prisma-HLG5Q63O.js");
    const existingProfile = await prisma2.tutor_profile.findUnique({
      where: { userId: req.user.id }
    });
    if (existingProfile) {
      const fullProfile = await TutorService.getProfile(req.user.id);
      return res.status(200).json({
        success: true,
        message: "Tutor profile already exists",
        data: fullProfile
      });
    }
    const result = await TutorService.createProfile(req.user.id, req.body);
    res.status(201).json({
      success: true,
      message: "Tutor profile created successfully",
      data: result
    });
  } catch (error) {
    console.error("Error creating profile:", error);
    next(error);
  }
};
var updateProfile4 = async (req, res, next) => {
  try {
    const result = await TutorService.updateProfile(req.user.id, req.body);
    res.status(200).json({
      success: true,
      message: "Tutor profile updated successfully",
      data: result
    });
  } catch (error) {
    next(error);
  }
};
var getProfile4 = async (req, res, next) => {
  try {
    if (!req.user) {
      return res.status(401).json({
        success: false,
        message: "User not authenticated"
      });
    }
    const result = await TutorService.getProfile(req.user.id);
    if (!result) {
      return res.status(404).json({
        success: false,
        message: "Tutor profile not found. Please create a profile first.",
        data: null
      });
    }
    res.status(200).json({
      success: true,
      message: "Tutor profile retrieved successfully",
      data: result
    });
  } catch (error) {
    console.error("Error in getProfile:", error);
    next(error);
  }
};
var getAvailabilitySlots2 = async (req, res, next) => {
  try {
    const { weekStartDate } = req.query;
    const result = await TutorService.getAvailabilitySlots(
      req.user.id,
      weekStartDate
    );
    res.status(200).json({
      success: true,
      message: "Availability slots retrieved successfully",
      data: result
    });
  } catch (error) {
    next(error);
  }
};
var updateAvailabilitySlots2 = async (req, res, next) => {
  try {
    const validatedSlots = updateAvailabilitySlotsSchema.parse(req.body);
    const result = await TutorService.updateAvailabilitySlots(
      req.user.id,
      validatedSlots
    );
    res.status(200).json({
      success: true,
      message: "Availability slots updated successfully",
      data: result
    });
  } catch (error) {
    next(error);
  }
};
var getTeachingSessions2 = async (req, res, next) => {
  try {
    const { page = 1, limit = 10, status } = req.query;
    const result = await TutorService.getTeachingSessions(req.user.id, {
      page: Number(page),
      limit: Number(limit),
      ...status && typeof status === "string" && { status }
    });
    res.status(200).json({
      success: true,
      message: "Teaching sessions retrieved successfully",
      data: result.data,
      meta: result.meta
    });
  } catch (error) {
    next(error);
  }
};
var getReviews4 = async (req, res, next) => {
  try {
    const { page, limit, rating } = req.query;
    const pageNumber = Number(page) > 0 ? Number(page) : 1;
    const limitNumber = Number(limit) > 0 ? Number(limit) : 10;
    let ratingNumber = void 0;
    if (rating) {
      const parsed = Number(rating);
      if (!isNaN(parsed) && parsed >= 1 && parsed <= 5) {
        ratingNumber = parsed;
      }
    }
    const result = await TutorService.getReviews(req.user.id, {
      page: pageNumber,
      limit: limitNumber,
      ...ratingNumber !== void 0 && { rating: ratingNumber }
    });
    res.status(200).json({
      success: true,
      message: "Reviews retrieved successfully",
      data: result.data,
      meta: result.meta
    });
  } catch (error) {
    console.error("Error in getReviews controller:", error);
    next(error);
  }
};
var getRatingStats2 = async (req, res, next) => {
  try {
    const result = await TutorService.getRatingStats(req.user.id);
    res.status(200).json({
      success: true,
      message: "Rating statistics retrieved successfully",
      data: result
    });
  } catch (error) {
    next(error);
  }
};
var updateBookingStatus2 = async (req, res, next) => {
  try {
    const { bookingId } = req.params;
    const result = await TutorService.updateBookingStatus(req.user.id, bookingId, req.body);
    res.status(200).json({
      success: true,
      message: "Booking status updated successfully",
      data: result
    });
  } catch (error) {
    next(error);
  }
};
var requestVerification2 = async (req, res, next) => {
  try {
    const result = await TutorService.requestVerification(req.user.id);
    res.status(200).json({
      success: true,
      message: result.message,
      data: result
    });
  } catch (error) {
    next(error);
  }
};
var getEarningsStats2 = async (req, res, next) => {
  try {
    const result = await TutorService.getEarningsStats(req.user.id);
    res.status(200).json({
      success: true,
      message: "Earnings statistics retrieved successfully",
      data: result
    });
  } catch (error) {
    next(error);
  }
};
var getTutorAnalytics2 = async (req, res, next) => {
  try {
    const result = await TutorService.getTutorAnalytics(req.user.id);
    res.status(200).json({
      success: true,
      message: "Tutor analytics retrieved successfully",
      data: result
    });
  } catch (error) {
    next(error);
  }
};
var getMarketIntelligence2 = async (req, res, next) => {
  try {
    const result = await TutorService.getMarketIntelligence(req.user.id);
    res.status(200).json({
      success: true,
      message: "Market intelligence retrieved successfully",
      data: result
    });
  } catch (error) {
    next(error);
  }
};
var TutorController = {
  createProfile: createProfile2,
  updateProfile: updateProfile4,
  getProfile: getProfile4,
  getAvailabilitySlots: getAvailabilitySlots2,
  updateAvailabilitySlots: updateAvailabilitySlots2,
  getTeachingSessions: getTeachingSessions2,
  getReviews: getReviews4,
  getRatingStats: getRatingStats2,
  updateBookingStatus: updateBookingStatus2,
  requestVerification: requestVerification2,
  getEarningsStats: getEarningsStats2,
  getTutorAnalytics: getTutorAnalytics2,
  getMarketIntelligence: getMarketIntelligence2
};

// src/modules/tutor/tutor.route.ts
var router2 = Router2();
router2.post("/profile", auth_default("STUDENT" /* STUDENT */), TutorController.createProfile);
router2.get("/profile", auth_default("TUTOR" /* TUTOR */, "VERIFIED_TUTOR" /* VERIFIED_TUTOR */), TutorController.getProfile);
router2.patch("/profile", auth_default("TUTOR" /* TUTOR */, "VERIFIED_TUTOR" /* VERIFIED_TUTOR */), TutorController.updateProfile);
router2.get("/availability-slots", auth_default("TUTOR" /* TUTOR */, "VERIFIED_TUTOR" /* VERIFIED_TUTOR */), TutorController.getAvailabilitySlots);
router2.put(
  "/availability-slots",
  auth_default("TUTOR" /* TUTOR */, "VERIFIED_TUTOR" /* VERIFIED_TUTOR */),
  TutorController.updateAvailabilitySlots
);
router2.get("/sessions", auth_default("TUTOR" /* TUTOR */, "VERIFIED_TUTOR" /* VERIFIED_TUTOR */), TutorController.getTeachingSessions);
router2.patch("/sessions/:bookingId/status", auth_default("TUTOR" /* TUTOR */, "VERIFIED_TUTOR" /* VERIFIED_TUTOR */), TutorController.updateBookingStatus);
router2.get("/reviews", auth_default("TUTOR" /* TUTOR */, "VERIFIED_TUTOR" /* VERIFIED_TUTOR */), TutorController.getReviews);
router2.get("/rating-stats", auth_default("TUTOR" /* TUTOR */, "VERIFIED_TUTOR" /* VERIFIED_TUTOR */), TutorController.getRatingStats);
router2.get("/earnings-stats", auth_default("TUTOR" /* TUTOR */, "VERIFIED_TUTOR" /* VERIFIED_TUTOR */), TutorController.getEarningsStats);
router2.post("/request-verification", auth_default("TUTOR" /* TUTOR */, "VERIFIED_TUTOR" /* VERIFIED_TUTOR */), TutorController.requestVerification);
router2.get("/analytics", auth_default("VERIFIED_TUTOR" /* VERIFIED_TUTOR */), TutorController.getTutorAnalytics);
router2.get("/market-intelligence", auth_default("VERIFIED_TUTOR" /* VERIFIED_TUTOR */), TutorController.getMarketIntelligence);
var TutorRoutes = router2;

// src/modules/public/public.route.ts
import { Router as Router3 } from "express";

// src/modules/public/public.service.ts
import { createHash } from "crypto";
import { performance } from "perf_hooks";
var PublicService = class {
  static async searchTutors(filters, paginationOptions) {
    const debugPerf = process.env.DEBUG_PUBLIC_TUTOR_SEARCH === "true";
    const t0 = debugPerf ? performance.now() : 0;
    const orderBy = paginationOptions?.orderBy;
    const sortBy = Array.isArray(orderBy) ? JSON.stringify(orderBy) : orderBy && Object.keys(orderBy)[0] || "averageRating";
    const sortOrder = Array.isArray(orderBy) ? "complex" : orderBy?.[sortBy] || "desc";
    const cacheTtlSeconds = Number(process.env.PUBLIC_TUTOR_SEARCH_CACHE_TTL_SECONDS ?? 30);
    const cacheKeyPayload = {
      subject: filters.subject ?? "",
      category: filters.category ?? "",
      minRating: filters.minRating ?? null,
      maxRating: filters.maxRating ?? null,
      minPrice: filters.minPrice ?? null,
      maxPrice: filters.maxPrice ?? null,
      minTotalReviews: filters.minTotalReviews ?? null,
      searchTerm: filters.searchTerm ?? "",
      skip: paginationOptions.skip,
      take: paginationOptions.take,
      sortBy,
      sortOrder
    };
    const cacheKeyHash = createHash("sha256").update(JSON.stringify(cacheKeyPayload)).digest("hex");
    const cacheKey = `public:tutors:search:v1:${cacheKeyHash}`;
    const whereClause = {
      isAvailable: true,
      user: {
        status: "ACTIVE"
      }
    };
    if (filters.subject) {
      whereClause.tutor_subject = {
        some: {
          subject: {
            name: {
              contains: filters.subject,
              mode: "insensitive"
            }
          }
        }
      };
    }
    if (filters.category) {
      whereClause.tutor_subject = {
        some: {
          subject: {
            category: {
              name: {
                contains: filters.category,
                mode: "insensitive"
              }
            }
          }
        }
      };
    }
    if (filters.minRating !== void 0) {
      whereClause.averageRating = {
        ...whereClause.averageRating,
        gte: filters.minRating
      };
    }
    if (filters.maxRating !== void 0) {
      whereClause.averageRating = {
        ...whereClause.averageRating,
        lte: filters.maxRating
      };
    }
    if (filters.minPrice !== void 0) {
      whereClause.hourlyRate = {
        ...whereClause.hourlyRate,
        gte: filters.minPrice
      };
    }
    if (filters.maxPrice !== void 0) {
      whereClause.hourlyRate = {
        ...whereClause.hourlyRate,
        lte: filters.maxPrice
      };
    }
    if (filters.minTotalReviews !== void 0) {
      whereClause.totalReviews = {
        gte: filters.minTotalReviews
      };
    }
    if (filters.searchTerm) {
      whereClause.OR = [
        {
          user: {
            name: {
              contains: filters.searchTerm,
              mode: "insensitive"
            }
          }
        },
        {
          tutor_subject: {
            some: {
              subject: {
                name: {
                  contains: filters.searchTerm,
                  mode: "insensitive"
                }
              }
            }
          }
        },
        {
          bio: {
            contains: filters.searchTerm,
            mode: "insensitive"
          }
        }
      ];
    }
    try {
      const [tutors, total] = await Promise.all([
        prisma.tutor_profile.findMany({
          where: {
            AND: [
              whereClause,
              {
                user: {
                  status: "ACTIVE"
                }
              }
            ]
          },
          include: {
            user: {
              select: {
                name: true,
                image: true,
                emailVerified: true
              }
            },
            tutor_subject: {
              include: {
                subject: {
                  select: { name: true }
                }
              }
            }
          },
          ...paginationOptions
        }),
        prisma.tutor_profile.count({ where: whereClause })
      ]);
      const totalPages = Math.ceil(total / paginationOptions.take);
      const currentPage = Math.floor(paginationOptions.skip / paginationOptions.take) + 1;
      return {
        data: tutors,
        meta: {
          total,
          page: currentPage,
          limit: paginationOptions.take,
          totalPages
        }
      };
      return response;
    } catch (error) {
      console.error("[PublicService] Error in searchTutors query:", error);
      throw error;
    }
  }
  static async getTutorById(id) {
    const tutor = await prisma.tutor_profile.findFirst({
      where: {
        AND: [
          {
            OR: [
              { id },
              { userId: id }
            ]
          },
          {
            user: {
              status: "ACTIVE"
            }
          }
        ]
      },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            image: true,
            email: true,
            emailVerified: true
          }
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
        availability_slot: true,
        booking: {
          where: {
            status: {
              not: "CANCELLED"
            }
          },
          select: {
            scheduledAt: true,
            status: true
          }
        }
      }
    });
    if (!tutor) {
      const availableTutors = await prisma.tutor_profile.findMany({
        select: { id: true, userId: true },
        take: 5
      });
    }
    return tutor;
  }
  static async getTutorReviews(tutorProfileId, paginationOptions) {
    const [reviews, total] = await Promise.all([
      prisma.review.findMany({
        where: {
          booking: {
            tutorProfileId
          }
        },
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
              subject: true
            }
          }
        },
        ...paginationOptions
      }),
      prisma.review.count({
        where: {
          booking: {
            tutorProfileId
          }
        }
      })
    ]);
    const totalPages = Math.ceil(total / paginationOptions.take);
    const currentPage = Math.floor(paginationOptions.skip / paginationOptions.take) + 1;
    return {
      data: reviews,
      meta: {
        total,
        page: currentPage,
        limit: paginationOptions.take,
        totalPages
      }
    };
  }
  static async getFeaturedTutors(paginationOptions) {
    const [tutors, total] = await Promise.all([
      prisma.tutor_profile.findMany({
        where: {
          isFeatured: true,
          isAvailable: true,
          user: {
            status: "ACTIVE"
          }
        },
        include: {
          user: {
            select: {
              id: true,
              name: true,
              image: true,
              emailVerified: true
            }
          },
          tutor_subject: {
            include: {
              subject: {
                include: {
                  category: true
                }
              }
            }
          }
        },
        ...paginationOptions
      }),
      prisma.tutor_profile.count({
        where: {
          isFeatured: true,
          isAvailable: true,
          user: {
            status: "ACTIVE"
          }
        }
      })
    ]);
    const totalPages = Math.ceil(total / paginationOptions.take);
    const currentPage = Math.floor(paginationOptions.skip / paginationOptions.take) + 1;
    return {
      data: tutors,
      meta: {
        total,
        page: currentPage,
        limit: paginationOptions.take,
        totalPages
      }
    };
  }
  static async getAllCategories() {
    return await prisma.category.findMany({
      where: {
        status: "ACTIVE"
      },
      include: {
        subject: {
          orderBy: {
            name: "asc"
          }
        },
        _count: {
          select: {
            subject: true
          }
        }
      },
      orderBy: {
        name: "asc"
      }
    });
  }
  static async getTutorAvailability(tutorId, weekStartDate) {
    const tutorProfile = await prisma.tutor_profile.findFirst({
      where: {
        OR: [
          { id: tutorId },
          { userId: tutorId }
        ]
      }
    });
    if (!tutorProfile) {
      throw new Error("Tutor profile not found");
    }
    let startDate;
    if (weekStartDate) {
      startDate = /* @__PURE__ */ new Date(weekStartDate + "T00:00:00.000Z");
    } else {
      const nowInDhaka2 = new Date((/* @__PURE__ */ new Date()).toLocaleString("en-US", { timeZone: "Asia/Dhaka" }));
      const dayOfWeek = nowInDhaka2.getDay();
      const diff = dayOfWeek === 0 ? -6 : 1 - dayOfWeek;
      nowInDhaka2.setDate(nowInDhaka2.getDate() + diff);
      const yyyy = nowInDhaka2.getFullYear();
      const mm = String(nowInDhaka2.getMonth() + 1).padStart(2, "0");
      const dd = String(nowInDhaka2.getDate()).padStart(2, "0");
      startDate = /* @__PURE__ */ new Date(`${yyyy}-${mm}-${dd}T00:00:00.000Z`);
    }
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
        { specificDate: "asc" },
        { startTime: "asc" }
      ]
    });
    const reverseDayOfWeekMap2 = {
      0: "SUNDAY",
      1: "MONDAY",
      2: "TUESDAY",
      3: "WEDNESDAY",
      4: "THURSDAY",
      5: "FRIDAY",
      6: "SATURDAY"
    };
    const nowInDhaka = new Date((/* @__PURE__ */ new Date()).toLocaleString("en-US", { timeZone: "Asia/Dhaka" }));
    const resultSlots = slots.filter((s) => {
      if (!s.specificDate) return false;
      const dateStr = s.specificDate.toISOString().split("T")[0];
      if (!dateStr) return false;
      const timeParts = s.startTime.split(":");
      const h = parseInt(timeParts[0] || "0", 10);
      const m = parseInt(timeParts[1] || "0", 10);
      const dateParts = dateStr.split("-");
      const year = parseInt(dateParts[0] || "0", 10);
      const month = parseInt(dateParts[1] || "0", 10);
      const day = parseInt(dateParts[2] || "0", 10);
      const slotInDhaka = new Date(year, month - 1, day, h, m);
      return !s.isBooked && slotInDhaka >= nowInDhaka;
    }).map((s) => {
      const dateKey = s.specificDate.toISOString().split("T")[0];
      return {
        id: `${dateKey}-${s.startTime}-${s.endTime}`,
        date: dateKey,
        dayOfWeek: reverseDayOfWeekMap2[(/* @__PURE__ */ new Date(dateKey + "T00:00:00.000Z")).getUTCDay()] || "UNKNOWN",
        startTime: s.startTime,
        endTime: s.endTime,
        isBooked: s.isBooked ?? false
      };
    });
    return {
      weekStartDate: startDate.toISOString().split("T")[0],
      weekEndDate: endDate.toISOString().split("T")[0],
      slots: resultSlots
    };
  }
  static async getTutorRatingStats(tutorId) {
    const tutorProfile = await prisma.tutor_profile.findFirst({
      where: {
        OR: [
          { id: tutorId },
          { userId: tutorId }
        ]
      }
    });
    if (!tutorProfile) {
      throw new Error("Tutor profile not found");
    }
    const reviews = await prisma.review.findMany({
      where: {
        booking: {
          tutorProfileId: tutorProfile.id
        }
      },
      select: {
        rating: true
      }
    });
    const totalReviews = reviews.length;
    const averageRating = totalReviews > 0 ? reviews.reduce((sum, r) => sum + r.rating, 0) / totalReviews : 0;
    const distribution = [5, 4, 3, 2, 1].map((rating) => {
      const count = reviews.filter((r) => r.rating === rating).length;
      const percentage = totalReviews > 0 ? Math.round(count / totalReviews * 100) : 0;
      return {
        rating,
        count,
        percentage
      };
    });
    return {
      totalReviews,
      averageRating: Math.round(averageRating * 10) / 10,
      // Round to 1 decimal
      distribution
    };
  }
  static async getPlatformStats() {
    const [totalTutors, totalStudents, totalSessions] = await Promise.all([
      prisma.tutor_profile.count({ where: { user: { status: "ACTIVE" } } }),
      prisma.user.count({ where: { role: "STUDENT", status: "ACTIVE" } }),
      prisma.booking.count({ where: { status: "COMPLETED" } })
    ]);
    const sixMonthsAgo = /* @__PURE__ */ new Date();
    sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 6);
    const monthlySessions = await prisma.booking.findMany({
      where: {
        status: "COMPLETED",
        scheduledAt: { gte: sixMonthsAgo }
      },
      select: { scheduledAt: true }
    });
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const growthMap = {};
    for (let i = 5; i >= 0; i--) {
      const d = /* @__PURE__ */ new Date();
      d.setMonth(d.getMonth() - i);
      growthMap[monthNames[d.getMonth()]] = 0;
    }
    monthlySessions.forEach((s) => {
      const monthKey = monthNames[new Date(s.scheduledAt).getMonth()];
      if (growthMap[monthKey] !== void 0) {
        growthMap[monthKey]++;
      }
    });
    const growth = Object.entries(growthMap).map(([month, count]) => ({
      month,
      count
    }));
    return {
      totalTutors,
      totalStudents,
      totalSessions,
      growth
    };
  }
};

// src/modules/public/public.controller.ts
var PublicController = class {
  static async searchTutors(req, res) {
    try {
      const { page = 1, limit = 10, subject, category, minRating, maxRating, minPrice, maxPrice, minTotalReviews, sortBy = "averageRating", sortOrder = "desc" } = req.query;
      const paginationHelper = paginationSortingHelper_default({
        page: Number(page),
        limit: Number(limit),
        sortBy,
        sortOrder
      });
      const paginationOptions = {
        skip: paginationHelper.skip,
        take: paginationHelper.limit,
        orderBy: [
          { isVerified: "desc" },
          { [paginationHelper.sortBy]: paginationHelper.sortOrder }
        ]
      };
      const filters = {
        ...subject && { subject },
        ...category && { category },
        ...minRating && { minRating: Number(minRating) },
        ...maxRating && { maxRating: Number(maxRating) },
        ...minPrice && { minPrice: Number(minPrice) },
        ...maxPrice && { maxPrice: Number(maxPrice) },
        ...minTotalReviews && { minTotalReviews: Number(minTotalReviews) },
        ...req.query.searchTerm && { searchTerm: req.query.searchTerm }
      };
      const result = await PublicService.searchTutors(filters, paginationOptions);
      res.json({
        success: true,
        message: "Tutors retrieved successfully",
        data: result.data,
        meta: result.meta
      });
    } catch (error) {
      console.error("Error in searchTutors:", error);
      res.status(500).json({
        success: false,
        message: "Failed to search tutors",
        error: error instanceof Error ? error.message : "Unknown error"
      });
    }
  }
  static async getTutorById(req, res) {
    try {
      const { id } = req.params;
      const queryId = req.query.id;
      const tutorId = id || queryId;
      if (!tutorId) {
        return res.status(400).json({
          success: false,
          message: "Tutor ID is required"
        });
      }
      const tutor = await PublicService.getTutorById(tutorId);
      if (!tutor) {
        return res.status(404).json({
          success: false,
          message: "Tutor not found"
        });
      }
      res.json({
        success: true,
        message: "Tutor retrieved successfully",
        data: tutor
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Failed to get tutor",
        error: error instanceof Error ? error.message : "Unknown error"
      });
    }
  }
  static async getTutorReviews(req, res) {
    try {
      const { tutorProfileId, page = 1, limit = 10 } = req.query;
      if (!tutorProfileId) {
        return res.status(400).json({
          success: false,
          message: "Tutor Profile ID is required"
        });
      }
      const paginationHelper = paginationSortingHelper_default({
        page: Number(page),
        limit: Number(limit),
        sortBy: "createdAt",
        sortOrder: "desc"
      });
      const paginationOptions = {
        skip: paginationHelper.skip,
        take: paginationHelper.limit,
        orderBy: {
          [paginationHelper.sortBy]: paginationHelper.sortOrder
        }
      };
      const result = await PublicService.getTutorReviews(tutorProfileId, paginationOptions);
      res.json({
        success: true,
        message: "Reviews retrieved successfully",
        data: result.data,
        meta: result.meta
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Failed to get reviews",
        error: error instanceof Error ? error.message : "Unknown error"
      });
    }
  }
  static async getFeaturedTutors(req, res) {
    try {
      const { page = 1, limit = 12 } = req.query;
      const paginationHelper = paginationSortingHelper_default({
        page: Number(page),
        limit: Number(limit),
        sortBy: "averageRating",
        sortOrder: "desc"
      });
      const paginationOptions = {
        skip: paginationHelper.skip,
        take: paginationHelper.limit,
        orderBy: [
          { isVerified: "desc" },
          { [paginationHelper.sortBy]: paginationHelper.sortOrder }
        ]
      };
      const result = await PublicService.getFeaturedTutors(paginationOptions);
      res.json({
        success: true,
        message: "Featured tutors retrieved successfully",
        data: result.data,
        meta: result.meta
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Failed to get featured tutors",
        error: error instanceof Error ? error.message : "Unknown error"
      });
    }
  }
  static async getCategories(req, res) {
    try {
      const result = await PublicService.getAllCategories();
      res.json({
        success: true,
        message: "Categories retrieved successfully",
        data: result
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Failed to get categories",
        error: error instanceof Error ? error.message : "Unknown error"
      });
    }
  }
  static async getTutorAvailability(req, res) {
    try {
      const { id } = req.params;
      const { weekStartDate } = req.query;
      const result = await PublicService.getTutorAvailability(
        id,
        weekStartDate
      );
      res.json({
        success: true,
        message: "Tutor availability retrieved successfully",
        data: result
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Failed to get tutor availability",
        error: error instanceof Error ? error.message : "Unknown error"
      });
    }
  }
  static async getTutorRatingStats(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({
          success: false,
          message: "Tutor ID is required"
        });
      }
      const result = await PublicService.getTutorRatingStats(id);
      res.json({
        success: true,
        message: "Rating statistics retrieved successfully",
        data: result
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Failed to get rating statistics",
        error: error instanceof Error ? error.message : "Unknown error"
      });
    }
  }
  static async getPlatformStats(req, res) {
    try {
      const result = await PublicService.getPlatformStats();
      res.json({
        success: true,
        message: "Platform statistics retrieved successfully",
        data: result
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Failed to get platform statistics",
        error: error instanceof Error ? error.message : "Unknown error"
      });
    }
  }
};

// src/modules/public/public.route.ts
var router3 = Router3();
router3.use((req, res, next) => {
  console.log("Public Route Hit:", req.method, req.url);
  next();
});
router3.get("/tutors/search", PublicController.searchTutors);
router3.get("/tutors/featured", PublicController.getFeaturedTutors);
router3.get("/tutors/:id", PublicController.getTutorById);
router3.get("/tutors/:id/availability", PublicController.getTutorAvailability);
router3.get("/tutors/:id/rating-stats", PublicController.getTutorRatingStats);
router3.get("/reviews", PublicController.getTutorReviews);
router3.get("/categories", PublicController.getCategories);
router3.get("/platform-stats", PublicController.getPlatformStats);
var PublicRoutes = router3;

// src/modules/admin/admin/admin.route.ts
import { Router as Router4 } from "express";

// src/modules/admin/admin/admin.validation.ts
import { z as z4 } from "zod";
var adminLoginSchema = z4.object({
  email: z4.string().email("Invalid email address"),
  password: z4.string().min(6, "Password must be at least 6 characters")
});
var updateUserStatusSchema = z4.object({
  status: z4.enum(["ACTIVE", "INACTIVE", "BANNED"]),
  banReason: z4.string().optional()
}).refine((data) => {
  if (data.status === "BANNED" && !data.banReason) {
    return false;
  }
  return true;
}, {
  message: "Ban reason is required when banning a user",
  path: ["banReason"]
});
var banUserSchema = z4.object({
  banReason: z4.string().min(1, "Ban reason is required").max(500, "Ban reason must be less than 500 characters")
});
var createCategorySchema = z4.object({
  name: z4.string().min(2, "Category name must be at least 2 characters").max(100, "Category name must not exceed 100 characters").trim(),
  description: z4.string().min(10, "Description must be at least 10 characters").max(500, "Description must not exceed 500 characters").trim().optional(),
  status: z4.enum(["ACTIVE", "INACTIVE"], {
    errorMap: () => ({ message: "Status must be either ACTIVE or INACTIVE" })
  }).optional().default("ACTIVE")
});
var updateCategorySchema = z4.object({
  name: z4.string().min(2, "Category name must be at least 2 characters").max(100, "Category name must not exceed 100 characters").trim().optional(),
  description: z4.string().min(10, "Description must be at least 10 characters").max(500, "Description must not exceed 500 characters").trim().optional(),
  status: z4.enum(["ACTIVE", "INACTIVE"], {
    errorMap: () => ({ message: "Status must be either ACTIVE or INACTIVE" })
  }).optional()
}).refine((data) => {
  const fields = Object.values(data).filter((field) => field !== void 0);
  return fields.length > 0;
}, {
  message: "At least one field must be provided for update"
});
var createSubjectSchema = z4.object({
  name: z4.string().min(2, "Subject name must be at least 2 characters").max(100, "Subject name must not exceed 100 characters").trim(),
  categoryId: z4.string().uuid("Invalid category ID format")
});
var updateSubjectSchema = z4.object({
  name: z4.string().min(2, "Subject name must be at least 2 characters").max(100, "Subject name must not exceed 100 characters").trim().optional(),
  categoryId: z4.string().uuid("Invalid category ID format").optional()
}).refine((data) => {
  const fields = Object.values(data).filter((field) => field !== void 0);
  return fields.length > 0;
}, {
  message: "At least one field must be provided for update"
});

// src/modules/ai/ai.service.ts
var AIService = {
  getEmbedding: async (text) => {
    const apiKey = process.env.OPENROUTER_API_KEY;
    if (!apiKey) throw new Error("OPENROUTER_API_KEY not found");
    const response2 = await fetch("https://openrouter.ai/api/v1/embeddings", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "openai/text-embedding-3-small",
        input: text
      })
    });
    const data = await response2.json();
    if (data.error) throw new Error(data.error.message);
    return data.data[0].embedding;
  },
  retrieveContext: async (embedding) => {
    try {
      const vectorStr = JSON.stringify(embedding);
      const kbResults = await prisma.$queryRaw`
        SELECT content FROM knowledge_base
        ORDER BY embedding <=> ${vectorStr}::vector
        LIMIT 3
      `;
      const tutorResults = await prisma.$queryRaw`
        SELECT 
          tp.id,
          u.name, 
          tp.headline, 
          tp.bio,
          tp."hourlyRate"
        FROM tutor_profile tp
        JOIN "user" u ON tp."userId" = u.id
        WHERE tp.embedding IS NOT NULL
        ORDER BY tp.embedding <=> ${vectorStr}::vector
        LIMIT 3
      `;
      const kbContext = kbResults.map((r) => r.content).join("\n\n");
      const tutorContext = tutorResults.map(
        (r) => `Tutor ID: ${r.id} | Name: ${r.name} | Headline: ${r.headline} | Rate: $${r.hourlyRate}/hr | Bio: ${r.bio}`
      ).join("\n\n");
      return `
        PLATFORM INFO:
        ${kbContext}

        RELEVANT TUTORS:
        ${tutorContext}
      `.trim();
    } catch (error) {
      console.error("Context Retrieval Error:", error);
      return "";
    }
  },
  addKnowledge: async (content, metadata = {}) => {
    const embedding = await AIService.getEmbedding(content);
    await prisma.$queryRaw`
      INSERT INTO knowledge_base (id, content, embedding, metadata, "updatedAt")
      VALUES (
        gen_random_uuid(), 
        ${content}, 
        ${JSON.stringify(embedding)}::vector, 
        ${JSON.stringify(metadata)}::json,
        NOW()
      )
    `;
  },
  getTutorContext: async (tutorId) => {
    try {
      const tutor = await prisma.tutor_profile.findUnique({
        where: { id: tutorId },
        include: {
          user: { select: { name: true } },
          tutor_subject: { include: { subject: true } }
        }
      });
      if (!tutor) return "Tutor information not found.";
      return `
        Tutor Name: ${tutor.user.name}
        Headline: ${tutor.headline}
        Bio: ${tutor.bio}
        Expertise: ${tutor.tutor_subject.map((ts) => ts.subject.name).join(", ")}
      `.trim();
    } catch (error) {
      console.error("Tutor Context Error:", error);
      return "Error fetching tutor information.";
    }
  }
};

// src/modules/admin/admin/admin.service.ts
var login = async (data) => {
  const validatedData = adminLoginSchema.parse(data);
  const signInResult = await auth.api.signInEmail({
    body: {
      email: validatedData.email,
      password: validatedData.password
    }
  });
  if (!signInResult.user) {
    throw new Error("Invalid credentials");
  }
  if (signInResult.user.role !== "ADMIN" && signInResult.user.role !== "SUPER_ADMIN") {
    throw new Error("Access denied. Administrative role required.");
  }
  return {
    user: {
      id: signInResult.user.id,
      name: signInResult.user.name,
      email: signInResult.user.email,
      role: signInResult.user.role
    },
    token: signInResult.token
  };
};
var getUsers = async (options) => {
  const paginationHelper = paginationSortingHelper_default({
    page: options.page,
    limit: options.limit,
    sortBy: "createdAt",
    sortOrder: "desc"
  });
  const whereClause = {};
  if (options.role) {
    whereClause.role = options.role;
  }
  if (options.status) {
    whereClause.status = options.status;
  }
  if (options.search) {
    whereClause.OR = [
      { name: { contains: options.search, mode: "insensitive" } },
      { email: { contains: options.search, mode: "insensitive" } }
    ];
  }
  const [users, total] = await Promise.all([
    prisma.user.findMany({
      where: whereClause,
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        status: true,
        banReason: true,
        image: true,
        createdAt: true,
        tutor_profile: {
          select: {
            id: true,
            hourlyRate: true,
            averageRating: true,
            totalReviews: true
          }
        }
      },
      skip: paginationHelper.skip,
      take: paginationHelper.limit,
      orderBy: {
        createdAt: paginationHelper.sortOrder
      }
    }),
    prisma.user.count({ where: whereClause })
  ]);
  const totalPages = Math.ceil(total / paginationHelper.limit);
  return {
    data: users,
    meta: {
      total,
      page: paginationHelper.page,
      limit: paginationHelper.limit,
      totalPages
    }
  };
};
var updateUserStatus = async (userId, data, requesterRole) => {
  const validatedData = updateUserStatusSchema.parse(data);
  const targetUser = await prisma.user.findUnique({
    where: { id: userId },
    select: { id: true, role: true, status: true }
  });
  if (!targetUser) {
    throw new Error("User not found");
  }
  if (targetUser.role === "SUPER_ADMIN") {
    throw new Error("Cannot modify status of a Super Admin");
  }
  if (targetUser.role === "ADMIN" && requesterRole !== "SUPER_ADMIN") {
    throw new Error("Only a Super Admin can ban/modify another Admin");
  }
  const updateData = {
    status: validatedData.status
  };
  if (validatedData.status === "BANNED") {
    updateData.banReason = validatedData.banReason;
  } else {
    updateData.banReason = null;
  }
  return await prisma.user.update({
    where: { id: userId },
    data: updateData,
    select: {
      id: true,
      name: true,
      email: true,
      role: true,
      status: true,
      banReason: true,
      updatedAt: true
    }
  });
};
var getAllBookings = async (options) => {
  const paginationHelper = paginationSortingHelper_default({
    page: options.page,
    limit: options.limit,
    sortBy: "createdAt",
    sortOrder: "desc"
  });
  const whereClause = {};
  if (options.status && options.status !== "ALL") {
    if (options.status === "UPCOMING") {
      whereClause.status = { in: ["PENDING", "CONFIRMED"] };
    } else if (["PENDING", "CONFIRMED", "ONGOING", "COMPLETED", "CANCELLED"].includes(options.status)) {
      whereClause.status = options.status;
    }
  }
  if (options.search) {
    whereClause.OR = [
      { subject: { contains: options.search, mode: "insensitive" } },
      { id: { contains: options.search, mode: "insensitive" } },
      {
        user: {
          name: { contains: options.search, mode: "insensitive" }
        }
      },
      {
        tutor_profile: {
          user: {
            name: { contains: options.search, mode: "insensitive" }
          }
        }
      }
    ];
  }
  try {
    const [bookings, total] = await Promise.all([
      prisma.booking.findMany({
        where: whereClause,
        include: {
          user: {
            select: {
              id: true,
              name: true,
              email: true,
              image: true
            }
          },
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
          },
          review: true
        },
        skip: paginationHelper.skip,
        take: paginationHelper.limit,
        orderBy: {
          createdAt: paginationHelper.sortOrder
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
  } catch (error) {
    console.error("Error in getAllBookings:", error);
    throw error;
  }
};
var getPlatformStats = async () => {
  const sixMonthsAgo = /* @__PURE__ */ new Date();
  sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 6);
  const [userStats, bookingStats, revenueStats, monthlyUsers, monthlyRevenue, revenueByCategory] = await Promise.all([
    prisma.user.groupBy({
      by: ["role"],
      _count: { role: true }
    }),
    prisma.booking.groupBy({
      by: ["status"],
      _count: { status: true }
    }),
    prisma.booking.aggregate({
      where: { status: "COMPLETED" },
      _sum: { price: true },
      _count: { id: true }
    }),
    prisma.user.findMany({
      where: { createdAt: { gte: sixMonthsAgo } },
      select: { createdAt: true }
    }),
    prisma.booking.findMany({
      where: { status: "COMPLETED", scheduledAt: { gte: sixMonthsAgo } },
      select: { scheduledAt: true, price: true }
    }),
    prisma.booking.findMany({
      where: { status: "COMPLETED" },
      include: {
        tutor_profile: {
          include: {
            tutor_subject: {
              include: {
                subject: {
                  include: { category: true }
                }
              }
            }
          }
        }
      }
    })
  ]);
  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const getLastSixMonths = () => {
    const months2 = [];
    for (let i = 5; i >= 0; i--) {
      const d = /* @__PURE__ */ new Date();
      d.setMonth(d.getMonth() - i);
      months2.push(monthNames[d.getMonth()]);
    }
    return months2;
  };
  const months = getLastSixMonths();
  const growthMap = months.reduce((acc, m) => ({ ...acc, [m]: 0 }), {});
  const revenueMap = months.reduce((acc, m) => ({ ...acc, [m]: 0 }), {});
  monthlyUsers.forEach((u) => {
    const m = monthNames[new Date(u.createdAt).getMonth()];
    if (growthMap[m] !== void 0) growthMap[m]++;
  });
  monthlyRevenue.forEach((b) => {
    const m = monthNames[new Date(b.scheduledAt).getMonth()];
    if (revenueMap[m] !== void 0) revenueMap[m] += b.price;
  });
  const categoryStats = {};
  revenueByCategory.forEach((b) => {
    const categoryName = b.tutor_profile?.tutor_subject?.[0]?.subject?.category?.name || "Uncategorized";
    categoryStats[categoryName] = (categoryStats[categoryName] || 0) + b.price;
  });
  const usersByRole = userStats.reduce((acc, curr) => {
    acc[curr.role.toLowerCase()] = curr._count.role;
    return acc;
  }, {});
  const bookingsByStatus = bookingStats.reduce((acc, curr) => {
    acc[curr.status.toLowerCase()] = curr._count.status;
    return acc;
  }, {});
  return {
    overview: {
      totalUsers: userStats.reduce((sum, curr) => sum + curr._count.role, 0),
      totalRevenue: revenueStats._sum.price || 0,
      totalBookings: bookingStats.reduce((sum, curr) => sum + curr._count.status, 0),
      successRate: revenueStats._count.id > 0 ? Math.round(revenueStats._count.id / (bookingStats.find((b) => b.status === "COMPLETED")?._count.status || 1) * 100) : 0
    },
    charts: {
      userGrowth: Object.entries(growthMap).map(([month, count]) => ({ month, count })),
      revenueGrowth: Object.entries(revenueMap).map(([month, amount]) => ({ month, amount })),
      roleDistribution: userStats.map((s) => ({ name: s.role, value: s._count.role })),
      bookingDistribution: bookingStats.map((s) => ({ name: s.status, value: s._count.status })),
      categoryRevenue: Object.entries(categoryStats).map(([name, value]) => ({ name, value }))
    },
    byRole: usersByRole,
    byStatus: bookingsByStatus
  };
};
var cancelBooking3 = async (bookingId, data) => {
  const booking = await prisma.booking.findUnique({
    where: { id: bookingId },
    include: {
      availability_slot: true
    }
  });
  if (!booking) {
    throw new Error("Booking not found");
  }
  if (booking.status === "CANCELLED") {
    throw new Error("Booking is already cancelled");
  }
  return await prisma.$transaction(async (tx) => {
    const updatedBooking = await tx.booking.update({
      where: { id: bookingId },
      data: {
        status: "CANCELLED",
        notes: data.reason ? `Cancelled by admin: ${data.reason}` : "Cancelled by admin"
      }
    });
    const bookingAny = booking;
    if (bookingAny.availability_slot) {
      await tx.availability_slot.update({
        where: { id: bookingAny.availability_slot.id },
        data: { isBooked: false }
      });
    }
    return updatedBooking;
  });
};
var verifyTutor = async (tutorProfileId) => {
  const tutorProfile = await prisma.tutor_profile.findUnique({
    where: { id: tutorProfileId },
    include: {
      user: true
    }
  });
  if (!tutorProfile) {
    throw new Error("Tutor profile not found");
  }
  if (tutorProfile.isVerified && tutorProfile.user.role === "VERIFIED_TUTOR") {
    return {
      success: true,
      message: "Tutor is already verified",
      data: tutorProfile
    };
  }
  return await prisma.$transaction(async (tx) => {
    const updatedProfile = await tx.tutor_profile.update({
      where: { id: tutorProfileId },
      data: {
        isVerified: true,
        verifiedAt: /* @__PURE__ */ new Date()
      }
    });
    await tx.user.update({
      where: { id: tutorProfile.userId },
      data: {
        role: "VERIFIED_TUTOR"
      }
    });
    return updatedProfile;
  });
};
var getAdminProfile = async (userId) => {
  return await prisma.user.findUnique({
    where: { id: userId },
    select: {
      id: true,
      name: true,
      email: true,
      role: true,
      image: true,
      phone: true,
      address: true,
      status: true,
      createdAt: true
    }
  });
};
var updateAdminProfile = async (userId, data) => {
  return await prisma.user.update({
    where: { id: userId },
    data: {
      name: data.name,
      image: data.image,
      phone: data.phone,
      address: data.address
    },
    select: {
      id: true,
      name: true,
      email: true,
      role: true,
      image: true,
      phone: true,
      address: true
    }
  });
};
var getAllKnowledge = async () => {
  return await prisma.knowledge_base.findMany({
    select: {
      id: true,
      content: true,
      metadata: true,
      createdAt: true
    },
    orderBy: {
      createdAt: "desc"
    }
  });
};
var addKnowledge = async (content, metadata = {}) => {
  await AIService.addKnowledge(content, metadata);
  return await prisma.knowledge_base.findFirst({
    where: { content },
    orderBy: { createdAt: "desc" },
    select: {
      id: true,
      content: true,
      metadata: true,
      createdAt: true
    }
  });
};
var deleteKnowledge = async (id) => {
  return await prisma.knowledge_base.delete({
    where: { id }
  });
};
var AdminService = {
  login,
  getUsers,
  updateUserStatus,
  getAllBookings,
  cancelBooking: cancelBooking3,
  getPlatformStats,
  verifyTutor,
  getAdminProfile,
  updateAdminProfile,
  getAllKnowledge,
  addKnowledge,
  deleteKnowledge
};

// src/modules/admin/admin/admin.controller.ts
var login2 = async (req, res, next) => {
  try {
    const result = await AdminService.login(req.body);
    res.status(200).json({
      success: true,
      message: "Admin logged in successfully",
      data: result
    });
  } catch (error) {
    next(error);
  }
};
var getUsers2 = async (req, res, next) => {
  try {
    const { page = 1, limit = 10, role, status, search } = req.query;
    const result = await AdminService.getUsers({
      page: Number(page),
      limit: Number(limit),
      role,
      status,
      search
    });
    res.status(200).json({
      success: true,
      message: "Users retrieved successfully",
      data: result.data,
      meta: result.meta
    });
  } catch (error) {
    next(error);
  }
};
var updateUserStatus2 = async (req, res, next) => {
  try {
    const { userId } = req.params;
    const result = await AdminService.updateUserStatus(userId, req.body, req.user.role);
    res.status(200).json({
      success: true,
      message: "User status updated successfully",
      data: result
    });
  } catch (error) {
    next(error);
  }
};
var banUser = async (req, res, next) => {
  try {
    const { userId } = req.params;
    const { banReason } = req.body;
    if (!banReason || banReason.trim().length === 0) {
      return res.status(400).json({
        success: false,
        message: "Ban reason is required"
      });
    }
    const result = await AdminService.updateUserStatus(userId, {
      status: "BANNED",
      banReason: banReason.trim()
    }, req.user.role);
    res.status(200).json({
      success: true,
      message: "User banned successfully",
      data: result
    });
  } catch (error) {
    next(error);
  }
};
var unbanUser = async (req, res, next) => {
  try {
    const { userId } = req.params;
    const result = await AdminService.updateUserStatus(userId, {
      status: "ACTIVE"
    }, req.user.role);
    res.status(200).json({
      success: true,
      message: "User unbanned successfully",
      data: result
    });
  } catch (error) {
    next(error);
  }
};
var getAllBookings2 = async (req, res, next) => {
  try {
    const totalBookings = await prisma.booking.count();
    if (totalBookings === 0) {
      return res.status(200).json({
        success: true,
        message: "No bookings found in database",
        data: [],
        meta: {
          total: 0,
          page: 1,
          limit: 10,
          totalPages: 0
        }
      });
    }
    const { page = 1, limit = 10, status, search } = req.query;
    const result = await AdminService.getAllBookings({
      page: Number(page),
      limit: Number(limit),
      status,
      search
    });
    res.status(200).json({
      success: true,
      message: "Bookings retrieved successfully",
      data: result.data,
      meta: result.meta
    });
  } catch (error) {
    console.error("Error in getAllBookings controller:", error);
    next(error);
  }
};
var getPlatformStats2 = async (req, res, next) => {
  try {
    const result = await AdminService.getPlatformStats();
    res.status(200).json({
      success: true,
      message: "Platform statistics retrieved successfully",
      data: result
    });
  } catch (error) {
    next(error);
  }
};
var cancelBooking4 = async (req, res, next) => {
  try {
    const { bookingId } = req.params;
    const { reason, refundAmount } = req.body;
    const result = await AdminService.cancelBooking(bookingId, {
      reason,
      refundAmount
    });
    res.status(200).json({
      success: true,
      message: "Booking cancelled successfully",
      data: result
    });
  } catch (error) {
    next(error);
  }
};
var verifyTutor2 = async (req, res, next) => {
  try {
    const { tutorProfileId } = req.params;
    const result = await AdminService.verifyTutor(tutorProfileId);
    res.status(200).json({
      success: true,
      message: "Tutor verified successfully",
      data: result
    });
  } catch (error) {
    next(error);
  }
};
var getProfile5 = async (req, res, next) => {
  try {
    const result = await AdminService.getAdminProfile(req.user.id);
    res.status(200).json({
      success: true,
      message: "Admin profile retrieved successfully",
      data: result
    });
  } catch (error) {
    next(error);
  }
};
var updateProfile5 = async (req, res, next) => {
  try {
    const result = await AdminService.updateAdminProfile(req.user.id, req.body);
    res.status(200).json({
      success: true,
      message: "Admin profile updated successfully",
      data: result
    });
  } catch (error) {
    next(error);
  }
};
var getAllKnowledge2 = async (req, res, next) => {
  try {
    const result = await AdminService.getAllKnowledge();
    res.status(200).json({
      success: true,
      data: result
    });
  } catch (error) {
    next(error);
  }
};
var addKnowledge2 = async (req, res, next) => {
  try {
    const { content, metadata } = req.body;
    const result = await AdminService.addKnowledge(content, metadata);
    res.status(201).json({
      success: true,
      message: "Knowledge added consistently across the platform intelligence network",
      data: result
    });
  } catch (error) {
    next(error);
  }
};
var deleteKnowledge2 = async (req, res, next) => {
  try {
    const { id } = req.params;
    await AdminService.deleteKnowledge(id);
    res.status(200).json({
      success: true,
      message: "Knowledge entry purged from platform memory"
    });
  } catch (error) {
    next(error);
  }
};
var AdminController = {
  login: login2,
  getUsers: getUsers2,
  updateUserStatus: updateUserStatus2,
  banUser,
  unbanUser,
  getAllBookings: getAllBookings2,
  cancelBooking: cancelBooking4,
  getPlatformStats: getPlatformStats2,
  verifyTutor: verifyTutor2,
  getProfile: getProfile5,
  updateProfile: updateProfile5,
  getAllKnowledge: getAllKnowledge2,
  addKnowledge: addKnowledge2,
  deleteKnowledge: deleteKnowledge2
};

// src/modules/admin/admin/admin.route.ts
var router4 = Router4();
router4.post("/login", AdminController.login);
router4.get("/users", auth_default("ADMIN" /* ADMIN */, "SUPER_ADMIN" /* SUPER_ADMIN */), AdminController.getUsers);
router4.patch("/users/:userId/status", auth_default("SUPER_ADMIN" /* SUPER_ADMIN */), AdminController.updateUserStatus);
router4.patch("/users/:userId/ban", auth_default("SUPER_ADMIN" /* SUPER_ADMIN */), AdminController.banUser);
router4.patch("/users/:userId/unban", auth_default("SUPER_ADMIN" /* SUPER_ADMIN */), AdminController.unbanUser);
router4.get("/bookings", auth_default("ADMIN" /* ADMIN */, "SUPER_ADMIN" /* SUPER_ADMIN */), AdminController.getAllBookings);
router4.patch("/bookings/:bookingId/cancel", auth_default("SUPER_ADMIN" /* SUPER_ADMIN */), AdminController.cancelBooking);
router4.get("/stats", auth_default("ADMIN" /* ADMIN */, "SUPER_ADMIN" /* SUPER_ADMIN */), AdminController.getPlatformStats);
router4.patch("/verify-tutor/:tutorProfileId", auth_default("SUPER_ADMIN" /* SUPER_ADMIN */), AdminController.verifyTutor);
router4.get("/profile", auth_default("ADMIN" /* ADMIN */, "SUPER_ADMIN" /* SUPER_ADMIN */), AdminController.getProfile);
router4.patch("/profile", auth_default("ADMIN" /* ADMIN */, "SUPER_ADMIN" /* SUPER_ADMIN */), AdminController.updateProfile);
router4.get("/kb", auth_default("SUPER_ADMIN" /* SUPER_ADMIN */), AdminController.getAllKnowledge);
router4.post("/kb", auth_default("SUPER_ADMIN" /* SUPER_ADMIN */), AdminController.addKnowledge);
router4.delete("/kb/:id", auth_default("SUPER_ADMIN" /* SUPER_ADMIN */), AdminController.deleteKnowledge);
var AdminRoutes = router4;

// src/modules/admin/category/category.routes.ts
import { Router as Router5 } from "express";

// src/modules/admin/category/category.vaidation.ts
import { z as z5 } from "zod";
var createCategorySchema3 = z5.object({
  name: z5.string().min(2, "Category name must be at least 2 characters").max(100, "Category name must not exceed 100 characters").trim(),
  description: z5.string().min(10, "Description must be at least 10 characters").max(500, "Description must not exceed 500 characters").trim().optional(),
  status: z5.enum(["ACTIVE", "INACTIVE"], {
    errorMap: () => ({ message: "Status must be either ACTIVE or INACTIVE" })
  }).optional().default("ACTIVE")
});
var updateCategorySchema3 = z5.object({
  name: z5.string().min(2, "Category name must be at least 2 characters").max(100, "Category name must not exceed 100 characters").trim().optional(),
  description: z5.string().min(10, "Description must be at least 10 characters").max(500, "Description must not exceed 500 characters").trim().optional(),
  status: z5.enum(["ACTIVE", "INACTIVE"], {
    errorMap: () => ({ message: "Status must be either ACTIVE or INACTIVE" })
  }).optional()
}).refine((data) => {
  const fields = Object.values(data).filter((field) => field !== void 0);
  return fields.length > 0;
}, {
  message: "At least one field must be provided for update"
});
var createSubjectSchema2 = z5.object({
  name: z5.string().min(2, "Subject name must be at least 2 characters").max(100, "Subject name must not exceed 100 characters").trim(),
  categoryId: z5.string().uuid("Invalid category ID format")
});
var updateSubjectSchema2 = z5.object({
  name: z5.string().min(2, "Subject name must be at least 2 characters").max(100, "Subject name must not exceed 100 characters").trim().optional(),
  categoryId: z5.string().uuid("Invalid category ID format").optional()
}).refine((data) => {
  const fields = Object.values(data).filter((field) => field !== void 0);
  return fields.length > 0;
}, {
  message: "At least one field must be provided for update"
});

// src/modules/admin/category/category.service.ts
import { randomUUID as randomUUID3 } from "crypto";
var createCategory = async (data) => {
  const validatedData = createCategorySchema3.parse(data);
  const existingCategory = await prisma.category.findUnique({
    where: { name: validatedData.name }
  });
  if (existingCategory) {
    throw new Error("Category with this name already exists");
  }
  const category = await prisma.category.create({
    data: {
      id: randomUUID3(),
      name: validatedData.name,
      description: validatedData.description ?? null,
      status: validatedData.status || "ACTIVE"
    },
    include: {
      subject: true,
      _count: {
        select: {
          subject: true
        }
      }
    }
  });
  return category;
};
var updateCategory = async (categoryId, data) => {
  const validatedData = updateCategorySchema3.parse(data);
  const existingCategory = await prisma.category.findUnique({
    where: { id: categoryId }
  });
  if (!existingCategory) {
    throw new Error("Category not found");
  }
  if (validatedData.name && validatedData.name !== existingCategory.name) {
    const duplicateCategory = await prisma.category.findUnique({
      where: { name: validatedData.name }
    });
    if (duplicateCategory) {
      throw new Error("Category with this name already exists");
    }
  }
  const updateData = {};
  if (validatedData.name !== void 0) {
    updateData.name = validatedData.name;
  }
  if (validatedData.description !== void 0) {
    updateData.description = validatedData.description;
  }
  if (validatedData.status !== void 0) {
    updateData.status = validatedData.status;
  }
  const category = await prisma.category.update({
    where: { id: categoryId },
    data: updateData,
    include: {
      subject: true,
      _count: {
        select: {
          subject: true
        }
      }
    }
  });
  return category;
};
var getCategory = async (categoryId) => {
  const category = await prisma.category.findUnique({
    where: { id: categoryId },
    include: {
      subject: {
        include: {
          _count: {
            select: {
              tutor_subject: true
            }
          }
        },
        orderBy: {
          name: "asc"
        }
      },
      _count: {
        select: {
          subject: true
        }
      }
    }
  });
  if (!category) {
    throw new Error("Category not found");
  }
  return category;
};
var getAllCategories = async (filters) => {
  const whereClause = {};
  if (filters?.status) {
    whereClause.status = filters.status;
  }
  if (filters?.search) {
    whereClause.OR = [
      { name: { contains: filters.search, mode: "insensitive" } },
      { description: { contains: filters.search, mode: "insensitive" } }
    ];
  }
  const categories = await prisma.category.findMany({
    where: whereClause,
    include: {
      subject: {
        include: {
          _count: {
            select: {
              tutor_subject: true
            }
          }
        }
      },
      _count: {
        select: {
          subject: true
        }
      }
    },
    orderBy: {
      name: "asc"
    }
  });
  return categories;
};
var deleteCategory = async (categoryId) => {
  const category = await prisma.category.findUnique({
    where: { id: categoryId },
    include: {
      _count: {
        select: {
          subject: true
        }
      }
    }
  });
  if (!category) {
    throw new Error("Category not found");
  }
  if (category._count.subject > 0) {
    throw new Error("Cannot delete category with existing subjects. Please delete all subjects first.");
  }
  await prisma.category.delete({
    where: { id: categoryId }
  });
  return { message: "Category deleted successfully" };
};
var createSubject = async (data) => {
  const validatedData = createSubjectSchema2.parse(data);
  const category = await prisma.category.findUnique({
    where: { id: validatedData.categoryId }
  });
  if (!category) {
    throw new Error("Category not found");
  }
  const existingSubject = await prisma.subject.findFirst({
    where: {
      name: validatedData.name,
      categoryId: validatedData.categoryId
    }
  });
  if (existingSubject) {
    throw new Error("Subject with this name already exists in this category");
  }
  const subject = await prisma.subject.create({
    data: {
      id: randomUUID3(),
      name: validatedData.name,
      categoryId: validatedData.categoryId
    },
    include: {
      category: true,
      _count: {
        select: {
          tutor_subject: true
        }
      }
    }
  });
  return subject;
};
var updateSubject = async (subjectId, data) => {
  const validatedData = updateSubjectSchema2.parse(data);
  const existingSubject = await prisma.subject.findUnique({
    where: { id: subjectId }
  });
  if (!existingSubject) {
    throw new Error("Subject not found");
  }
  if (validatedData.categoryId) {
    const category = await prisma.category.findUnique({
      where: { id: validatedData.categoryId }
    });
    if (!category) {
      throw new Error("Category not found");
    }
  }
  if (validatedData.name || validatedData.categoryId) {
    const targetCategoryId = validatedData.categoryId || existingSubject.categoryId;
    const targetName = validatedData.name || existingSubject.name;
    const duplicateSubject = await prisma.subject.findFirst({
      where: {
        name: targetName,
        categoryId: targetCategoryId,
        NOT: {
          id: subjectId
        }
      }
    });
    if (duplicateSubject) {
      throw new Error("Subject with this name already exists in this category");
    }
  }
  const updateData = {};
  if (validatedData.name !== void 0) {
    updateData.name = validatedData.name;
  }
  if (validatedData.categoryId !== void 0) {
    updateData.categoryId = validatedData.categoryId;
  }
  const subject = await prisma.subject.update({
    where: { id: subjectId },
    data: updateData,
    include: {
      category: true,
      _count: {
        select: {
          tutor_subject: true
        }
      }
    }
  });
  return subject;
};
var getSubject = async (subjectId) => {
  const subject = await prisma.subject.findUnique({
    where: { id: subjectId },
    include: {
      category: true,
      tutor_subject: {
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
      },
      _count: {
        select: {
          tutor_subject: true
        }
      }
    }
  });
  if (!subject) {
    throw new Error("Subject not found");
  }
  return subject;
};
var getAllSubjects = async (filters) => {
  const whereClause = {};
  if (filters?.categoryId) {
    whereClause.categoryId = filters.categoryId;
  }
  if (filters?.search) {
    whereClause.name = { contains: filters.search, mode: "insensitive" };
  }
  const subjects = await prisma.subject.findMany({
    where: whereClause,
    include: {
      category: true,
      _count: {
        select: {
          tutor_subject: true
        }
      }
    },
    orderBy: {
      name: "asc"
    }
  });
  return subjects;
};
var deleteSubject = async (subjectId) => {
  const subject = await prisma.subject.findUnique({
    where: { id: subjectId },
    include: {
      _count: {
        select: {
          tutor_subject: true
        }
      }
    }
  });
  if (!subject) {
    throw new Error("Subject not found");
  }
  if (subject._count.tutor_subject > 0) {
    throw new Error("Cannot delete subject with assigned tutors. Please remove all tutor assignments first.");
  }
  await prisma.subject.delete({
    where: { id: subjectId }
  });
  return { message: "Subject deleted successfully" };
};
var CategoryService = {
  createCategory,
  updateCategory,
  getCategory,
  getAllCategories,
  deleteCategory,
  createSubject,
  updateSubject,
  getSubject,
  getAllSubjects,
  deleteSubject
};

// src/modules/admin/category/category.controller.ts
var createCategory2 = async (req, res, next) => {
  try {
    const result = await CategoryService.createCategory(req.body);
    res.status(201).json({
      success: true,
      message: "Category created successfully",
      data: result
    });
  } catch (error) {
    next(error);
  }
};
var updateCategory2 = async (req, res, next) => {
  try {
    const { categoryId } = req.params;
    const result = await CategoryService.updateCategory(categoryId, req.body);
    res.status(200).json({
      success: true,
      message: "Category updated successfully",
      data: result
    });
  } catch (error) {
    next(error);
  }
};
var getCategory2 = async (req, res, next) => {
  try {
    const { categoryId } = req.params;
    const result = await CategoryService.getCategory(categoryId);
    res.status(200).json({
      success: true,
      message: "Category retrieved successfully",
      data: result
    });
  } catch (error) {
    next(error);
  }
};
var getAllCategories2 = async (req, res, next) => {
  try {
    const { status, search } = req.query;
    const filters = {};
    if (status && typeof status === "string") {
      filters.status = status;
    }
    if (search && typeof search === "string") {
      filters.search = search;
    }
    const result = await CategoryService.getAllCategories(filters);
    res.status(200).json({
      success: true,
      message: "Categories retrieved successfully",
      data: result
    });
  } catch (error) {
    next(error);
  }
};
var deleteCategory2 = async (req, res, next) => {
  try {
    const { categoryId } = req.params;
    const result = await CategoryService.deleteCategory(categoryId);
    res.status(200).json({
      success: true,
      message: result.message
    });
  } catch (error) {
    next(error);
  }
};
var createSubject2 = async (req, res, next) => {
  try {
    const result = await CategoryService.createSubject(req.body);
    res.status(201).json({
      success: true,
      message: "Subject created successfully",
      data: result
    });
  } catch (error) {
    next(error);
  }
};
var updateSubject2 = async (req, res, next) => {
  try {
    const { subjectId } = req.params;
    const result = await CategoryService.updateSubject(subjectId, req.body);
    res.status(200).json({
      success: true,
      message: "Subject updated successfully",
      data: result
    });
  } catch (error) {
    next(error);
  }
};
var getSubject2 = async (req, res, next) => {
  try {
    const { subjectId } = req.params;
    const result = await CategoryService.getSubject(subjectId);
    res.status(200).json({
      success: true,
      message: "Subject retrieved successfully",
      data: result
    });
  } catch (error) {
    next(error);
  }
};
var getAllSubjects2 = async (req, res, next) => {
  try {
    const { categoryId, search } = req.query;
    const filters = {};
    if (categoryId && typeof categoryId === "string") {
      filters.categoryId = categoryId;
    }
    if (search && typeof search === "string") {
      filters.search = search;
    }
    const result = await CategoryService.getAllSubjects(filters);
    res.status(200).json({
      success: true,
      message: "Subjects retrieved successfully",
      data: result
    });
  } catch (error) {
    next(error);
  }
};
var deleteSubject2 = async (req, res, next) => {
  try {
    const { subjectId } = req.params;
    const result = await CategoryService.deleteSubject(subjectId);
    res.status(200).json({
      success: true,
      message: result.message
    });
  } catch (error) {
    next(error);
  }
};
var CategoryController = {
  createCategory: createCategory2,
  updateCategory: updateCategory2,
  getCategory: getCategory2,
  getAllCategories: getAllCategories2,
  deleteCategory: deleteCategory2,
  createSubject: createSubject2,
  updateSubject: updateSubject2,
  getSubject: getSubject2,
  getAllSubjects: getAllSubjects2,
  deleteSubject: deleteSubject2
};

// src/modules/admin/category/category.routes.ts
var router5 = Router5();
router5.post("/categories", auth_default("ADMIN" /* ADMIN */), CategoryController.createCategory);
router5.get("/categories", CategoryController.getAllCategories);
router5.get("/categories/:categoryId", CategoryController.getCategory);
router5.patch("/categories/:categoryId", auth_default("ADMIN" /* ADMIN */), CategoryController.updateCategory);
router5.delete("/categories/:categoryId", auth_default("ADMIN" /* ADMIN */), CategoryController.deleteCategory);
router5.post("/subjects", auth_default("ADMIN" /* ADMIN */), CategoryController.createSubject);
router5.get("/subjects", CategoryController.getAllSubjects);
router5.get("/subjects/:subjectId", CategoryController.getSubject);
router5.patch("/subjects/:subjectId", auth_default("ADMIN" /* ADMIN */), CategoryController.updateSubject);
router5.delete("/subjects/:subjectId", auth_default("ADMIN" /* ADMIN */), CategoryController.deleteSubject);
var CategoryRoutes = router5;

// src/modules/ai/ai.route.ts
import { Router as Router6 } from "express";

// src/modules/ai/ai.controller.ts
var AIController = {
  chat: async (req, res) => {
    try {
      const { messages } = req.body;
      const apiKey = process.env.OPENROUTER_API_KEY;
      if (!apiKey) {
        return res.status(500).json({
          success: false,
          message: "OpenRouter API Key not configured"
        });
      }
      const lastUserMessage = messages[messages.length - 1]?.content;
      let context = "";
      if (lastUserMessage) {
        try {
          const queryEmbedding = await AIService.getEmbedding(lastUserMessage);
          context = await AIService.retrieveContext(queryEmbedding);
        } catch (e) {
          console.warn("RAG Context Retrieval Failed, proceeding without context:", e);
        }
      }
      const response2 = await fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${apiKey}`,
          "HTTP-Referer": process.env.APP_URL || "http://localhost:3000",
          "X-Title": "SkillBridge Learning Assistant",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          model: "google/gemini-2.0-flash-001",
          messages: [
            {
              role: "system",
              content: `
        You are the "SkillBridge Smart Matching AI". Your primary mission is to help students find their "Perfect Match" tutor.
        
        RULES:
        1. Contextual Intelligence: Use the Real Tutor Profiles provided in the context below.
        2. No Placeholders: Never use [Tutor Name] or similar brackets.
        3. Link Format: For each tutor, display their profile URL on a new line at the end of their section.
           URL Format: ${process.env.APP_URL || "http://localhost:3000"}/tutors/{ID}
        4. No Repetition: Do not include the link inside the recommendation note text.
        5. Empty Context Handling: If the "Current Context" below says "No tutors found", explain kindly that we couldn't find exact matches for their specific criteria. Suggest they try browsing the full marketplace or adjusting their search. Use a helpful, encouraging tone.

        Structure your response as follows:
        - A brief intro.
        - 1. **Tutor Name** (Price/hr) - The recommendation note.
        - ${process.env.APP_URL || "http://localhost:3000"}/tutors/{ID}
        - (Repeat for top 3 tutors)

        Current Context from Database:
        ${context ? context : "No tutors found."}`
            },
            ...messages
          ]
        })
      });
      const data = await response2.json();
      if (data.error) {
        throw new Error(data.error.message || "OpenRouter API Error");
      }
      res.status(200).json({
        success: true,
        data: data.choices[0].message
      });
    } catch (error) {
      console.error("AI Chat Error:", error);
      res.status(500).json({
        success: false,
        message: error.message || "Failed to process AI request"
      });
    }
  },
  generateRoadmap: async (req, res) => {
    try {
      const { goal, level, tutorId } = req.body;
      const apiKey = process.env.OPENROUTER_API_KEY;
      if (!apiKey) {
        return res.status(500).json({ success: false, message: "OpenRouter API Key not configured" });
      }
      let tutorContext = "";
      if (tutorId) {
        tutorContext = await AIService.getTutorContext(tutorId);
      }
      const response2 = await fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${apiKey}`,
          "HTTP-Referer": process.env.APP_URL || "http://localhost:3000",
          "X-Title": "SkillBridge Roadmap Generator",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          model: "google/gemini-2.0-flash-001",
          response_format: { type: "json_object" },
          messages: [
            {
              role: "system",
              content: `
              You are the "SkillBridge Roadmap Genius". 
              Your job is to create a highly professional, 4-week learning roadmap.
              
              Input:
              - Student Goal: ${goal}
              - Experience Level: ${level}
              - Tutor Context: ${tutorContext || "Generic roadmap needed"}

              Output MUST be a JSON object with the following structure:
              {
                "title": "A catchy title for the roadmap",
                "overview": "A brief summary of what will be achieved",
                "phases": [
                  {
                    "week": 1,
                    "title": "Phase Title",
                    "objectives": ["Obj 1", "Obj 2"],
                    "tutorSessions": "What to focus on during sessions with the tutor"
                  },
                  ... (continue for 4 weeks)
                ],
                "milestoneProject": "A specific project description",
                "recommendedResources": ["Resource Name - Brief Description"]
              }
              `
            },
            {
              role: "user",
              content: `Plan for: ${goal}`
            }
          ]
        })
      });
      const data = await response2.json();
      const roadmap = JSON.parse(data.choices[0].message.content);
      res.status(200).json({
        success: true,
        data: roadmap
      });
    } catch (error) {
      console.error("Roadmap Generation Error:", error);
      res.status(500).json({
        success: false,
        message: error.message || "Failed to generate roadmap"
      });
    }
  }
};

// src/modules/ai/ai.route.ts
var router6 = Router6();
router6.post("/chat", AIController.chat);
router6.post("/roadmap", AIController.generateRoadmap);
var AIRoutes = router6;

// src/modules/upload/upload.route.ts
import { Router as Router7 } from "express";

// src/lib/cloudinary.ts
import { v2 as cloudinary } from "cloudinary";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import multer from "multer";
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});
var storage = new CloudinaryStorage({
  cloudinary,
  params: {
    // @ts-ignore
    folder: "skillbridge_profiles",
    allowed_formats: ["jpg", "png", "jpeg", "webp"],
    transformation: [{ width: 500, height: 500, crop: "limit" }]
  }
});
var upload = multer({ storage });

// src/modules/upload/upload.controller.ts
var UploadController = class {
  static async uploadImage(req, res) {
    try {
      if (!req.file) {
        return res.status(400).json({
          success: false,
          message: "No file uploaded"
        });
      }
      const file = req.file;
      res.status(200).json({
        success: true,
        message: "Image uploaded successfully",
        data: {
          url: file.path,
          // This is the Cloudinary URL
          public_id: file.filename
        }
      });
    } catch (error) {
      console.error("Upload error:", error);
      res.status(500).json({
        success: false,
        message: "Failed to upload image",
        error: error.message
      });
    }
  }
};

// src/modules/upload/upload.route.ts
import { fromNodeHeaders } from "better-auth/node";
var router7 = Router7();
var checkAuth = async (req, res, next) => {
  const session = await auth.api.getSession({
    headers: fromNodeHeaders(req.headers)
  });
  if (!session) {
    return res.status(401).json({ success: false, message: "Unauthorized" });
  }
  req.user = session.user;
  next();
};
router7.post("/image", checkAuth, upload.single("image"), UploadController.uploadImage);
var upload_route_default = router7;

// src/app.ts
import hpp from "hpp";
import { rateLimit } from "express-rate-limit";
import cookieParser from "cookie-parser";

// src/modules/auth/auth.routes.ts
import { Router as Router8 } from "express";

// src/modules/auth/session.service.ts
import { randomBytes } from "crypto";
var SESSION_TTL = 7 * 24 * 60 * 60;
var sessionService = {
  async create(userId, email, role, emailVerified, name, metadata, existingSessionId) {
    const sessionId = existingSessionId || randomBytes(32).toString("hex");
    return sessionId;
  },
  async get(sessionId) {
    return null;
  },
  async delete(sessionId) {
  },
  async deleteAllUserSessions(userId) {
  },
  async getUserSessions(userId) {
    return [];
  },
  async deleteOtherSessions(userId, currentSessionId) {
  }
};

// src/modules/auth/auth.controller.ts
var COOKIE_NAME = "sessionId";
var COOKIE_OPTIONS = {
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
  sameSite: "strict",
  maxAge: 7 * 24 * 60 * 60 * 1e3,
  // 7 days
  path: "/"
};
var login3 = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      return res.status(401).json({ success: false, message: "Invalid credentials" });
    }
    const sessionId = await sessionService.create(
      user.id,
      user.email,
      user.role,
      user.emailVerified,
      user.name,
      {
        userAgent: req.headers["user-agent"] || "unknown",
        ip: req.ip || req.socket.remoteAddress || "unknown",
        deviceId: req.body.deviceId
      }
    );
    res.cookie(COOKIE_NAME, sessionId, COOKIE_OPTIONS);
    res.json({
      success: true,
      message: "Login successful",
      data: { userId: user.id, email: user.email, role: user.role }
    });
  } catch (error) {
    next(error);
  }
};
var logout = async (req, res, next) => {
  try {
    const sessionId = req.cookies[COOKIE_NAME] || req.cookies["better-auth.session_token"];
    if (sessionId) {
      await sessionService.delete(sessionId);
      try {
        const { auth: betterAuth } = await import("./auth-NOG2KVN7.js");
        await betterAuth.api.signOut({
          headers: req.headers
        });
      } catch (authError) {
        console.error("Better-Auth Signout Error:", authError);
      }
    }
    res.clearCookie(COOKIE_NAME, { path: "/" });
    res.clearCookie("better-auth.session_token", { path: "/" });
    res.json({ success: true, message: "Logout successful" });
  } catch (error) {
    next(error);
  }
};
var logoutAll = async (req, res, next) => {
  try {
    const userId = req.user?.id;
    if (!userId) {
      return res.status(401).json({ success: false, message: "Unauthorized" });
    }
    await sessionService.deleteAllUserSessions(userId);
    res.clearCookie(COOKIE_NAME, { path: "/" });
    res.json({ success: true, message: "All sessions terminated" });
  } catch (error) {
    next(error);
  }
};
var getSessions = async (req, res, next) => {
  try {
    const userId = req.user?.id;
    if (!userId) {
      return res.status(401).json({ success: false, message: "Unauthorized" });
    }
    const sessions = await sessionService.getUserSessions(userId);
    res.json({ success: true, data: sessions });
  } catch (error) {
    next(error);
  }
};

// src/middleware/sessionAuth.ts
var sessionAuth = async (req, res, next) => {
  try {
    const rawToken = req.headers.authorization?.split(" ")[1] || req.cookies["better-auth.session_token"] || req.cookies.sessionId;
    if (!rawToken) {
      return res.status(401).json({ success: false, message: "No session found" });
    }
    let sessionData = null;
    const { auth: betterAuth } = await import("./auth-NOG2KVN7.js");
    const dbSession = await betterAuth.api.getSession({
      headers: req.headers
    });
    if (!dbSession) {
      res.clearCookie("sessionId", { path: "/" });
      res.clearCookie("better-auth.session_token", { path: "/" });
      return res.status(401).json({ success: false, message: "Invalid or expired session" });
    }
    sessionData = {
      userId: dbSession.user.id,
      email: dbSession.user.email,
      role: dbSession.user.role,
      emailVerified: dbSession.user.emailVerified,
      name: dbSession.user.name,
      sessionId: rawToken,
      metadata: {
        userAgent: req.headers["user-agent"] || "unknown",
        ip: req.ip || "unknown",
        createdAt: (/* @__PURE__ */ new Date()).toISOString(),
        lastAccessedAt: (/* @__PURE__ */ new Date()).toISOString()
      }
    };
    req.user = {
      id: sessionData.userId,
      email: sessionData.email,
      role: sessionData.role,
      emailVerified: sessionData.emailVerified,
      name: sessionData.name
    };
    req.sessionId = rawToken;
    next();
  } catch (error) {
    next(error);
  }
};

// src/modules/auth/auth.routes.ts
var router8 = Router8();
router8.post("/login", login3);
router8.post("/logout", logout);
router8.post("/logout-all", sessionAuth, logoutAll);
router8.get("/sessions", sessionAuth, getSessions);
var authRoutes = router8;

// src/app.ts
import client from "prom-client";

// src/modules/payment/payment.route.ts
import { Router as Router9 } from "express";

// src/lib/stripe.ts
import Stripe from "stripe";
if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error("STRIPE_SECRET_KEY is not defined in environment variables");
}
var stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2025-02-24.acacia"
  // Use the latest API version or a stable one
});

// src/modules/payment/payment.service.ts
import { randomUUID as randomUUID4 } from "crypto";
var PaymentService = class {
  static async createCheckoutSession(userId, bookingData) {
    const tutorProfile = await prisma.tutor_profile.findUnique({
      where: { id: bookingData.tutorProfileId },
      include: { user: true }
    });
    if (!tutorProfile || !tutorProfile.isAvailable || tutorProfile.user.status !== "ACTIVE") {
      throw new Error("Tutor is not available");
    }
    const scheduledDate = new Date(bookingData.scheduledAt);
    if (scheduledDate <= /* @__PURE__ */ new Date()) {
      throw new Error("Booking time must be in the future");
    }
    const scheduledDateOnly = new Date(scheduledDate);
    scheduledDateOnly.setUTCHours(0, 0, 0, 0);
    const hours = scheduledDate.getUTCHours();
    const minutes = scheduledDate.getUTCMinutes();
    const timeString = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`;
    const availabilitySlot = await prisma.availability_slot.findFirst({
      where: {
        tutorProfileId: bookingData.tutorProfileId,
        specificDate: scheduledDateOnly,
        startTime: timeString,
        isBooked: false
      }
    });
    if (!availabilitySlot) {
      throw new Error("This time slot is not available in the tutor's schedule");
    }
    const price = bookingData.duration / 60 * tutorProfile.hourlyRate;
    const amountInCents = Math.round(price * 100);
    const booking = await prisma.booking.create({
      data: {
        id: randomUUID4(),
        studentId: userId,
        tutorProfileId: bookingData.tutorProfileId,
        availabilitySlotId: availabilitySlot.id,
        scheduledAt: scheduledDate,
        duration: bookingData.duration,
        subject: bookingData.subject,
        notes: bookingData.notes,
        price,
        status: "PENDING"
      }
    });
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: `Session with ${tutorProfile.user.name}`,
              description: `${bookingData.subject} on ${scheduledDate.toLocaleDateString()}`
            },
            unit_amount: amountInCents
          },
          quantity: 1
        }
      ],
      mode: "payment",
      success_url: `${process.env.STRIPE_SUCCESS_URL}?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: process.env.STRIPE_CANCEL_URL,
      metadata: {
        bookingId: booking.id,
        userId
      }
    });
    return {
      sessionId: session.id,
      checkoutUrl: session.url,
      bookingId: booking.id
    };
  }
  static async handleWebhook(payload, signature) {
    let event;
    try {
      event = stripe.webhooks.constructEvent(
        payload,
        signature,
        process.env.STRIPE_WEBHOOK_SECRET
      );
    } catch (err) {
      throw new Error(`Webhook Error: ${err.message}`);
    }
    if (event.type === "checkout.session.completed") {
      const session = event.data.object;
      const bookingId = session.metadata.bookingId;
      await prisma.$transaction(async (tx) => {
        const booking = await tx.booking.update({
          where: { id: bookingId },
          data: { status: "CONFIRMED" }
        });
        if (booking.availabilitySlotId) {
          await tx.availability_slot.update({
            where: { id: booking.availabilitySlotId },
            data: { isBooked: true }
          });
        }
      });
    }
    return { received: true };
  }
};

// src/modules/payment/payment.controller.ts
var PaymentController = class {
  static async createCheckoutSession(req, res, next) {
    try {
      const result = await PaymentService.createCheckoutSession(req.user.id, req.body);
      res.status(200).json({
        success: true,
        message: "Checkout session created",
        data: result
      });
    } catch (error) {
      next(error);
    }
  }
  static async handleWebhook(req, res, next) {
    try {
      const sig = req.headers["stripe-signature"];
      const result = await PaymentService.handleWebhook(req.body, sig);
      res.status(200).json(result);
    } catch (error) {
      console.error("Webhook Error:", error.message);
      res.status(400).send(`Webhook Error: ${error.message}`);
    }
  }
};

// src/modules/payment/payment.route.ts
var router9 = Router9();
router9.post(
  "/create-checkout-session",
  auth_default("STUDENT" /* STUDENT */),
  PaymentController.createCheckoutSession
);
var PaymentRoutes = router9;

// src/app.ts
client.collectDefaultMetrics();
var app = express();
app.set("trust proxy", true);
app.use(cors({
  origin: [
    process.env.APP_URL,
    "http://localhost:3000",
    "https://skill-bridge-client-iota.vercel.app"
  ],
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
  credentials: true
}));
var limiter = rateLimit({
  windowMs: 1 * 60 * 1e3,
  limit: 1e3,
  standardHeaders: "draft-7",
  legacyHeaders: false,
  message: {
    success: false,
    message: "Too many requests from this IP, please try again after 15 minutes"
  }
});
if (process.env.NODE_ENV === "production") {
  app.use(limiter);
}
app.use(cookieParser());
app.post("/api/payment/webhook", express.raw({ type: "application/json" }), PaymentController.handleWebhook);
app.use(express.json({ limit: "10kb" }));
app.use(hpp());
app.use("/api/payment", PaymentRoutes);
app.all("/api/auth", toNodeHandler(auth));
app.all("/api/auth/*rest", toNodeHandler(auth));
app.use("/api/upload", upload_route_default);
app.use("/api/public", PublicRoutes);
app.use("/api/student", StudentRoutes);
app.use("/api/tutor", TutorRoutes);
app.use("/api/admin", AdminRoutes);
app.use("/api/admin", CategoryRoutes);
app.use("/api/ai", AIRoutes);
app.get("/", (req, res) => {
  res.status(200).json({ status: "ok", message: "Server is healthy" });
});
app.get("/metrics", async (req, res) => {
  res.set("Content-Type", client.register.contentType);
  res.send(await client.register.metrics());
});
app.use("/api/session-auth", authRoutes);
var initializeAppServices = async () => {
};
app.use(notFound);
app.use(globalErrorHandler_default);
var app_default = app;

// src/index.ts
var PORT = process.env.PORT || 1e4;
async function bootstrap() {
  try {
    await initializeAppServices();
    console.log("\u2705 Services initialized (Kafka, Redis).");
    console.log("Connected to the database successfully.");
    const server = app_default.listen(PORT, () => {
      console.log(`\u{1F680} Server is running on port ${PORT}`);
    });
    const shutdown = async (signal) => {
      console.log(`
Received ${signal}. Starting graceful shutdown...`);
      server.close(async () => {
        console.log("HTTP server closed.");
        try {
          process.exit(0);
        } catch (err) {
          console.error("Error during Kafka shutdown:", err);
          process.exit(1);
        }
      });
    };
    process.on("SIGTERM", () => shutdown("SIGTERM"));
    process.on("SIGINT", () => shutdown("SIGINT"));
  } catch (error) {
    console.error("\u274C An error occurred during bootstrap:", error);
    process.exit(1);
  }
}
bootstrap();
var index_default = app_default;
export {
  index_default as default
};
