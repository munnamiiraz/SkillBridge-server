import { prisma } from "../../../lib/prisma";
import { z } from "zod";
import { adminLoginSchema, AdminLoginInput, updateUserStatusSchema, UpdateUserStatusInput, createCategorySchema, CreateCategoryInput, updateCategorySchema, UpdateCategoryInput } from "./admin.validation";
import { auth } from "../../../lib/auth";
import paginationSortingHelper from "../../../helpers/paginationSortingHelper";
import { randomUUID } from "crypto";
import {
  AdminLoginResponse,
  UserWithProfile,
  UpdatedUser,
  BookingWithDetails,
  PlatformStats,
  CategoryWithSubjects,
  CategoryResponse,
  PaginatedResponse,
  UserPaginationOptions,
  BookingPaginationOptions,
  PaginationOptions
} from "./admin.interface";

const login = async (data: AdminLoginInput) => {
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
  
  if (signInResult.user.role !== "ADMIN") {
    throw new Error("Access denied. Admin role required.");
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

const getUsers = async (options: { page: number; limit: number; role?: string; status?: string; search?: string }) => {
  const paginationHelper = paginationSortingHelper({
    page: options.page,
    limit: options.limit,
    sortBy: "createdAt",
    sortOrder: "desc"
  });

  const whereClause: any = {};

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
        createdAt: paginationHelper.sortOrder as "asc" | "desc"
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

const updateUserStatus = async (userId: string, data: UpdateUserStatusInput, requesterRole: string) => {
  const validatedData = updateUserStatusSchema.parse(data);
  
  const targetUser = await prisma.user.findUnique({
    where: { id: userId },
    select: { id: true, role: true, status: true }
  });
  
  if (!targetUser) {
    throw new Error("User not found");
  }
  
  // 1. Hierarchy Check
  if (targetUser.role === "SUPER_ADMIN") {
    throw new Error("Cannot modify status of a Super Admin");
  }

  if (targetUser.role === "ADMIN" && requesterRole !== "SUPER_ADMIN") {
    throw new Error("Only a Super Admin can ban/modify another Admin");
  }

  // Prevent self-banning (optional but standard)
  // if (userId === requesterId) { throw new Error("Self-banning is not allowed"); }
  
  const updateData: any = {
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

const getAllBookings = async (options: { page: number; limit: number; status?: string; search?: string }) => {
  
  const paginationHelper = paginationSortingHelper({
    page: options.page,
    limit: options.limit,
    sortBy: "createdAt",
    sortOrder: "desc"
  });


  const whereClause: any = {};

  if (options.status && options.status !== 'ALL') {
    if (options.status === 'UPCOMING') {
      whereClause.status = { in: ['PENDING', 'CONFIRMED'] };
    } else if (['PENDING', 'CONFIRMED', 'ONGOING', 'COMPLETED', 'CANCELLED'].includes(options.status)) {
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
          createdAt: paginationHelper.sortOrder as "asc" | "desc"
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
    console.error('Error in getAllBookings:', error);
    throw error;
  }
};

const getPlatformStats = async () => {
  const [userStats, bookingStats, revenueStats, recentActivity] = await Promise.all([
    prisma.user.groupBy({
      by: ['role'],
      _count: { role: true }
    }),
    prisma.booking.groupBy({
      by: ['status'],
      _count: { status: true }
    }),
    prisma.booking.aggregate({
      where: { status: 'COMPLETED' },
      _sum: { price: true },
      _count: { id: true }
    }),
    Promise.all([
      prisma.user.count({
        where: {
          createdAt: {
            gte: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)
          }
        }
      }),
      prisma.booking.count({
        where: {
          createdAt: {
            gte: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)
          }
        }
      })
    ])
  ]);

  const usersByRole = userStats.reduce((acc, curr) => {
    acc[curr.role.toLowerCase()] = curr._count.role;
    return acc;
  }, {} as any);

  const bookingsByStatus = bookingStats.reduce((acc, curr) => {
    acc[curr.status.toLowerCase()] = curr._count.status;
    return acc;
  }, {} as any);

  return {
    users: {
      total: userStats.reduce((sum, curr) => sum + curr._count.role, 0),
      byRole: usersByRole,
      newThisWeek: recentActivity[0]
    },
    bookings: {
      total: bookingStats.reduce((sum, curr) => sum + curr._count.status, 0),
      byStatus: bookingsByStatus,
      newThisWeek: recentActivity[1]
    },
    revenue: {
      total: revenueStats._sum.price || 0,
      completedBookings: revenueStats._count.id
    }
  };
};



const cancelBooking = async (bookingId: string, data: { reason?: string; refundAmount?: number }) => {
  const booking = await prisma.booking.findUnique({
    where: { id: bookingId },
    include: {
      availability_slot: true
    }
  });
  
  if (!booking) {
    throw new Error("Booking not found");
  }
  
  if (booking.status === 'CANCELLED') {
    throw new Error("Booking is already cancelled");
  }
  
  return await prisma.$transaction(async (tx: any) => {
    const updatedBooking = await tx.booking.update({
      where: { id: bookingId },
      data: {
        status: 'CANCELLED',
        notes: data.reason ? `Cancelled by admin: ${data.reason}` : 'Cancelled by admin'
      }
    });
    
    const bookingAny = booking as any;
    if (bookingAny.availability_slot) {
      await tx.availability_slot.update({
        where: { id: bookingAny.availability_slot.id },
        data: { isBooked: false }
      });
    }
    
    return updatedBooking;
  });
};




const verifyTutor = async (tutorProfileId: string) => {
  const tutorProfile = await prisma.tutor_profile.findUnique({
    where: { id: tutorProfileId },
    include: {
      user: true
    }
  });

  if (!tutorProfile) {
    throw new Error("Tutor profile not found");
  }

  // Check if already verified
  if (tutorProfile.isVerified && tutorProfile.user.role === 'VERIFIED_TUTOR') {
    return {
      success: true,
      message: "Tutor is already verified",
      data: tutorProfile
    };
  }

  return await prisma.$transaction(async (tx: any) => {
    // 1. Update Tutor Profile
    const updatedProfile = await tx.tutor_profile.update({
      where: { id: tutorProfileId },
      data: {
        isVerified: true,
        verifiedAt: new Date()
      }
    });

    // 2. Update User Role
    await tx.user.update({
      where: { id: tutorProfile.userId },
      data: {
        role: 'VERIFIED_TUTOR'
      }
    });

    return updatedProfile;
  });
};

export const AdminService = { 
  login, 
  getUsers, 
  updateUserStatus, 
  getAllBookings, 
  cancelBooking, 
  getPlatformStats,
  verifyTutor
};
