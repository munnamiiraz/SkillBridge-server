import { prisma } from "../../../lib/prisma";
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
  
  // Use better-auth to sign in the user
  const signInResult = await auth.api.signInEmail({
    body: {
      email: validatedData.email,
      password: validatedData.password
    }
  });
  
  if (!signInResult.user) {
    throw new Error("Invalid credentials");
  }
  
  // Check if user is admin
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

const getUsers = async (options: { page: number; limit: number; role?: string; status?: string }) => {
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

const updateUserStatus = async (userId: string, data: UpdateUserStatusInput) => {
  const validatedData = updateUserStatusSchema.parse(data);
  
  const user = await prisma.user.findUnique({
    where: { id: userId },
    select: { id: true, role: true, status: true }
  });
  
  if (!user) {
    throw new Error("User not found");
  }
  
  if (user.role === "ADMIN") {
    throw new Error("Cannot modify admin user status");
  }
  
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

const getAllBookings = async (options: { page: number; limit: number; status?: string }) => {
  
  const paginationHelper = paginationSortingHelper({
    page: options.page,
    limit: options.limit,
    sortBy: "createdAt",
    sortOrder: "desc"
  });


  const whereClause: any = {};

  if (options.status) {
    whereClause.status = options.status;
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
    // User statistics
    prisma.user.groupBy({
      by: ['role'],
      _count: { role: true }
    }),
    // Booking statistics
    prisma.booking.groupBy({
      by: ['status'],
      _count: { status: true }
    }),
    // Revenue statistics
    prisma.booking.aggregate({
      where: { status: 'COMPLETED' },
      _sum: { price: true },
      _count: { id: true }
    }),
    // Recent activity (last 7 days)
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
  
  return await prisma.$transaction(async (tx) => {
    // Update booking status
    const updatedBooking = await tx.booking.update({
      where: { id: bookingId },
      data: {
        status: 'CANCELLED',
        notes: data.reason ? `Cancelled by admin: ${data.reason}` : 'Cancelled by admin'
      }
    });
    
    // Free up the availability slot
    if (booking.availability_slot) {
      await tx.availability_slot.update({
        where: { id: booking.availability_slot.id },
        data: { isBooked: false }
      });
    }
    
    return updatedBooking;
  });
};




export const AdminService = { login, getUsers, updateUserStatus, getAllBookings, cancelBooking, getPlatformStats };
