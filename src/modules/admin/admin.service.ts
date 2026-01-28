import { prisma } from "../../lib/prisma";
import { adminLoginSchema, AdminLoginInput, updateUserStatusSchema, UpdateUserStatusInput } from "./admin.validation";
import { auth } from "../../lib/auth";
import paginationSortingHelper from "../../helpers/paginationSortingHelper";

const login = async (data: AdminLoginInput) => {
  const validatedData = adminLoginSchema.parse(data);
  
  const user = await prisma.user.findUnique({
    where: { email: validatedData.email }
  });
  
  if (!user || user.role !== "ADMIN") {
    throw new Error("Invalid credentials");
  }
  
  const account = await prisma.account.findFirst({
    where: { 
      userId: user.id,
      providerId: "credential"
    }
  });
  
  if (!account || !account.password) {
    throw new Error("Invalid credentials");
  }
  
  const isValidPassword = await auth.api.verifyPassword({
    body: {
      password: validatedData.password,
      hash: account.password
    }
  });
  
  if (!isValidPassword) {
    throw new Error("Invalid credentials");
  }
  
  const session = await auth.api.createSession({
    body: {
      userId: user.id
    }
  });
  
  return {
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role
    },
    session
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
    sortBy: "scheduledAt",
    sortOrder: "desc"
  });

  const whereClause: any = {};

  if (options.status) {
    whereClause.status = options.status;
  }

  const [bookings, total] = await Promise.all([
    prisma.booking.findMany({
      where: whereClause,
      include: {
        student: {
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
        scheduledAt: paginationHelper.sortOrder as "asc" | "desc"
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

export const AdminService = { login, getUsers, updateUserStatus, getAllBookings, getPlatformStats };
