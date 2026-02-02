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
export declare class PublicService {
    static searchTutors(filters: SearchFilters, paginationOptions: PaginationOptions): Promise<{
        data: ({
            user: {
                name: string;
                id: string;
                image: string | null;
            };
            tutor_subject: ({
                subject: {
                    category: {
                        name: string;
                        status: import("../../generated/prisma/enums").CategoryStatus;
                        id: string;
                        createdAt: Date;
                        updatedAt: Date;
                        description: string | null;
                    };
                } & {
                    name: string;
                    id: string;
                    createdAt: Date;
                    updatedAt: Date;
                    categoryId: string;
                };
            } & {
                id: string;
                tutorProfileId: string;
                subjectId: string;
            })[];
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            userId: string;
            address: string | null;
            bio: string | null;
            headline: string | null;
            hourlyRate: number;
            experience: number;
            education: string | null;
            isAvailable: boolean;
            averageRating: number;
            totalReviews: number;
            totalSessions: number;
            isFeatured: boolean;
        })[];
        meta: {
            total: number;
            page: number;
            limit: number;
            totalPages: number;
        };
    }>;
    static getTutorById(id: string): Promise<({
        user: {
            name: string;
            id: string;
            email: string;
            image: string | null;
        };
        booking: {
            status: import("../../generated/prisma/enums").BookingStatus;
            scheduledAt: Date;
        }[];
        availability_slot: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            tutorProfileId: string;
            dayOfWeek: number;
            startTime: string;
            endTime: string;
            isRecurring: boolean;
            specificDate: Date | null;
            isBooked: boolean;
        }[];
        tutor_subject: ({
            subject: {
                category: {
                    name: string;
                    status: import("../../generated/prisma/enums").CategoryStatus;
                    id: string;
                    createdAt: Date;
                    updatedAt: Date;
                    description: string | null;
                };
            } & {
                name: string;
                id: string;
                createdAt: Date;
                updatedAt: Date;
                categoryId: string;
            };
        } & {
            id: string;
            tutorProfileId: string;
            subjectId: string;
        })[];
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        address: string | null;
        bio: string | null;
        headline: string | null;
        hourlyRate: number;
        experience: number;
        education: string | null;
        isAvailable: boolean;
        averageRating: number;
        totalReviews: number;
        totalSessions: number;
        isFeatured: boolean;
    }) | null>;
    static getTutorReviews(tutorProfileId: string, paginationOptions: PaginationOptions): Promise<{
        data: ({
            user: {
                name: string;
                id: string;
                image: string | null;
            };
            booking: {
                id: string;
                subject: string | null;
                scheduledAt: Date;
            };
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            bookingId: string;
            rating: number;
            comment: string | null;
            studentId: string;
        })[];
        meta: {
            total: number;
            page: number;
            limit: number;
            totalPages: number;
        };
    }>;
    static getFeaturedTutors(paginationOptions: PaginationOptions): Promise<{
        data: ({
            user: {
                name: string;
                id: string;
                image: string | null;
            };
            tutor_subject: ({
                subject: {
                    category: {
                        name: string;
                        status: import("../../generated/prisma/enums").CategoryStatus;
                        id: string;
                        createdAt: Date;
                        updatedAt: Date;
                        description: string | null;
                    };
                } & {
                    name: string;
                    id: string;
                    createdAt: Date;
                    updatedAt: Date;
                    categoryId: string;
                };
            } & {
                id: string;
                tutorProfileId: string;
                subjectId: string;
            })[];
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            userId: string;
            address: string | null;
            bio: string | null;
            headline: string | null;
            hourlyRate: number;
            experience: number;
            education: string | null;
            isAvailable: boolean;
            averageRating: number;
            totalReviews: number;
            totalSessions: number;
            isFeatured: boolean;
        })[];
        meta: {
            total: number;
            page: number;
            limit: number;
            totalPages: number;
        };
    }>;
    static getAllCategories(): Promise<({
        subject: {
            name: string;
            id: string;
            createdAt: Date;
            updatedAt: Date;
            categoryId: string;
        }[];
        _count: {
            subject: number;
        };
    } & {
        name: string;
        status: import("../../generated/prisma/enums").CategoryStatus;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        description: string | null;
    })[]>;
    static getTutorAvailability(tutorId: string, weekStartDate?: string): Promise<{
        weekStartDate: string | undefined;
        weekEndDate: string | undefined;
        slots: {
            id: string;
            date: string;
            dayOfWeek: string;
            startTime: string;
            endTime: string;
            isBooked: boolean;
        }[];
    }>;
    static getTutorRatingStats(tutorId: string): Promise<{
        totalReviews: number;
        averageRating: number;
        distribution: {
            rating: number;
            count: number;
            percentage: number;
        }[];
    }>;
}
export {};
//# sourceMappingURL=public.service.d.ts.map