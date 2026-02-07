import { prisma } from "../../lib/prisma";

interface SearchFilters {
  subject?: string;
  category?: string;
  minRating?: number;
  maxRating?: number;
  minPrice?: number;
  maxPrice?: number;
  minTotalReviews?: number;
  searchTerm?: string;
}

interface PaginationOptions {
  skip: number;
  take: number;
  orderBy: any;
}

export class PublicService {
  static async searchTutors(filters: SearchFilters, paginationOptions: PaginationOptions) {
    const whereClause: any = {
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

    if (filters.minRating !== undefined) {
      whereClause.averageRating = {
        ...whereClause.averageRating,
        gte: filters.minRating
      };
    }

    if (filters.maxRating !== undefined) {
      whereClause.averageRating = {
        ...whereClause.averageRating,
        lte: filters.maxRating
      };
    }

    if (filters.minPrice !== undefined) {
      whereClause.hourlyRate = {
        ...whereClause.hourlyRate,
        gte: filters.minPrice
      };
    }

    if (filters.maxPrice !== undefined) {
      whereClause.hourlyRate = {
        ...whereClause.hourlyRate,
        lte: filters.maxPrice
      };
    }
    
    if (filters.minTotalReviews !== undefined) {
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
                id: true,
                name: true,
                image: true
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
    } catch (error) {
      console.error('[PublicService] Error in searchTutors query:', error);
      throw error;
    }
  }

  static async getTutorById(id: string) {
    const tutor = await prisma.tutor_profile.findFirst({
      where: {
        AND: [
          {
            OR: [
              { id: id },
              { userId: id }
            ],
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
            email: true
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
              not: 'CANCELLED'
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

  static async getTutorReviews(tutorProfileId: string, paginationOptions: PaginationOptions) {
    const [reviews, total] = await Promise.all([
      prisma.review.findMany({
        where: {
          booking: {
            tutorProfileId: tutorProfileId
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
            tutorProfileId: tutorProfileId
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

  static async getFeaturedTutors(paginationOptions: PaginationOptions) {
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
              image: true
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
      where: {},
      include: {
        subject: {
          orderBy: {
            name: 'asc'
          }
        },
        _count: {
          select: {
            subject: true
          }
        }
      },
      orderBy: {
        name: 'asc'
      }
    });
  }

  static async getTutorAvailability(tutorId: string, weekStartDate?: string) {
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

    const reverseDayOfWeekMap: Record<number, string> = {
      0: "SUNDAY",
      1: "MONDAY",
      2: "TUESDAY",
      3: "WEDNESDAY",
      4: "THURSDAY",
      5: "FRIDAY",
      6: "SATURDAY"
    };

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
    
    // Convert to frontend format
    const resultSlots = [];
    for (const dateKey of Object.keys(grouped)) {
      const ranges = grouped[dateKey];
      if (!ranges) continue;
      
      for (const range of ranges) {
        resultSlots.push({
          id: `${dateKey}-${range.startTime}-${range.endTime}`,
          date: dateKey,
          dayOfWeek: reverseDayOfWeekMap[new Date(dateKey + "T00:00:00.000Z").getUTCDay()] || "UNKNOWN",
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
  }

  static async getTutorRatingStats(tutorId: string) {
    // Find tutor profile
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

    // Get all reviews for this tutor
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
    const averageRating = totalReviews > 0
      ? reviews.reduce((sum, r) => sum + r.rating, 0) / totalReviews
      : 0;

    // Calculate distribution
    const distribution = [5, 4, 3, 2, 1].map(rating => {
      const count = reviews.filter(r => r.rating === rating).length;
      const percentage = totalReviews > 0 ? Math.round((count / totalReviews) * 100) : 0;
      
      return {
        rating,
        count,
        percentage
      };
    });

    return {
      totalReviews,
      averageRating: Math.round(averageRating * 10) / 10, // Round to 1 decimal
      distribution
    };
  }
}