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
import { AIService } from "../../ai/ai.service";

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
  const sixMonthsAgo = new Date();
  sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 6);

  const [userStats, bookingStats, revenueStats, monthlyUsers, monthlyRevenue, revenueByCategory] = await Promise.all([
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
    prisma.user.findMany({
      where: { createdAt: { gte: sixMonthsAgo } },
      select: { createdAt: true }
    }),
    prisma.booking.findMany({
      where: { status: 'COMPLETED', scheduledAt: { gte: sixMonthsAgo } },
      select: { scheduledAt: true, price: true }
    }),
    prisma.booking.findMany({
      where: { status: 'COMPLETED' },
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
  
  // Helper to initialize last 6 months
  const getLastSixMonths = () => {
    const months = [];
    for (let i = 5; i >= 0; i--) {
      const d = new Date();
      d.setMonth(d.getMonth() - i);
      months.push(monthNames[d.getMonth()]);
    }
    return months;
  };

  const months = getLastSixMonths();
  const growthMap = months.reduce((acc, m) => ({ ...acc, [m!]: 0 }), {} as any);
  const revenueMap = months.reduce((acc, m) => ({ ...acc, [m!]: 0 }), {} as any);

  monthlyUsers.forEach(u => {
    const m = monthNames[new Date(u.createdAt).getMonth()];
    if (growthMap[m!] !== undefined) growthMap[m!]++;
  });

  monthlyRevenue.forEach(b => {
    const m = monthNames[new Date(b.scheduledAt).getMonth()];
    if (revenueMap[m!] !== undefined) revenueMap[m!] += b.price;
  });

  const categoryStats: Record<string, number> = {};
  revenueByCategory.forEach(b => {
    const categoryName = b.tutor_profile?.tutor_subject?.[0]?.subject?.category?.name || 'Uncategorized';
    categoryStats[categoryName] = (categoryStats[categoryName] || 0) + b.price;
  });

  const usersByRole = userStats.reduce((acc, curr) => {
    acc[curr.role.toLowerCase()] = curr._count.role;
    return acc;
  }, {} as any);

  const bookingsByStatus = bookingStats.reduce((acc, curr) => {
    acc[curr.status.toLowerCase()] = curr._count.status;
    return acc;
  }, {} as any);

  return {
    overview: {
      totalUsers: userStats.reduce((sum, curr) => sum + curr._count.role, 0),
      totalRevenue: revenueStats._sum.price || 0,
      totalBookings: bookingStats.reduce((sum, curr) => sum + curr._count.status, 0),
      successRate: revenueStats._count.id > 0 ? Math.round((revenueStats._count.id / (bookingStats.find(b => b.status === 'COMPLETED')?._count.status || 1)) * 100) : 0
    },
    charts: {
      userGrowth: Object.entries(growthMap).map(([month, count]) => ({ month, count })),
      revenueGrowth: Object.entries(revenueMap).map(([month, amount]) => ({ month, amount })),
      roleDistribution: userStats.map(s => ({ name: s.role, value: s._count.role })),
      bookingDistribution: bookingStats.map(s => ({ name: s.status, value: s._count.status })),
      categoryRevenue: Object.entries(categoryStats).map(([name, value]) => ({ name, value }))
    },
    byRole: usersByRole,
    byStatus: bookingsByStatus
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

const getAdminProfile = async (userId: string) => {
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

const updateAdminProfile = async (userId: string, data: any) => {
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

const getAllKnowledge = async () => {
  return await prisma.knowledge_base.findMany({
    select: {
      id: true,
      content: true,
      metadata: true,
      createdAt: true
    },
    orderBy: {
      createdAt: 'desc'
    }
  });
};

const addKnowledge = async (content: string, metadata: any = {}) => {
  // Use AIService to handle embedding and storage via raw query (to handle vector type)
  await AIService.addKnowledge(content, metadata);
  
  // Return the newly created entry (fetch it by content/timestamp since addKnowledge doesn't return ID)
  return await prisma.knowledge_base.findFirst({
    where: { content },
    orderBy: { createdAt: 'desc' },
    select: {
      id: true,
      content: true,
      metadata: true,
      createdAt: true
    }
  });
};

const deleteKnowledge = async (id: string) => {
  return await prisma.knowledge_base.delete({
    where: { id }
  });
};

export const AdminService = { 
  login, 
  getUsers, 
  updateUserStatus, 
  getAllBookings, 
  cancelBooking, 
  getPlatformStats,
  verifyTutor,
  getAdminProfile,
  updateAdminProfile,
  getAllKnowledge,
  addKnowledge,
  deleteKnowledge
};
