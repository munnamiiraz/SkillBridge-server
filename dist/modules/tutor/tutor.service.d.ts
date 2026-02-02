import { CreateTutorProfileInput, UpdateTutorProfileInput } from "./tutor.validation";
export declare const updateAvailabilitySlots: (userId: string, data: {
    weekStartDate: string;
    slots: Array<{
        date: string;
        startTime: string;
        endTime: string;
    }>;
}) => Promise<{
    weekStartDate: string;
    weekEndDate: string;
    totalSlots: number;
    slots: {
        id: string;
        date: string;
        dayOfWeek: string;
        startTime: string;
        endTime: string;
    }[];
}>;
export declare const TutorService: {
    createProfile: (userId: string, data: CreateTutorProfileInput) => Promise<{
        ratingStats: {
            totalReviews: number;
            averageRating: number;
            distribution: {
                rating: number;
                count: number;
                percentage: number;
            }[];
        } | null;
        recentReviews: ({
            user: {
                name: string;
                id: string;
                image: string | null;
            };
            booking: {
                id: string;
                subject: string | null;
                duration: number;
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
        user: {
            name: string;
            role: import("../../generated/prisma/enums").Role;
            id: string;
            email: string;
            image: string | null;
        };
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
    } | null>;
    updateProfile: (userId: string, data: UpdateTutorProfileInput) => Promise<{
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
    }>;
    getProfile: (userId: string) => Promise<{
        ratingStats: {
            totalReviews: number;
            averageRating: number;
            distribution: {
                rating: number;
                count: number;
                percentage: number;
            }[];
        } | null;
        recentReviews: ({
            user: {
                name: string;
                id: string;
                image: string | null;
            };
            booking: {
                id: string;
                subject: string | null;
                duration: number;
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
        user: {
            name: string;
            role: import("../../generated/prisma/enums").Role;
            id: string;
            email: string;
            image: string | null;
        };
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
    } | null>;
    getAvailabilitySlots: (userId: string, weekStartDate?: string) => Promise<{
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
    updateAvailabilitySlots: (userId: string, data: {
        weekStartDate: string;
        slots: Array<{
            date: string;
            startTime: string;
            endTime: string;
        }>;
    }) => Promise<{
        weekStartDate: string;
        weekEndDate: string;
        totalSlots: number;
        slots: {
            id: string;
            date: string;
            dayOfWeek: string;
            startTime: string;
            endTime: string;
        }[];
    }>;
    getTeachingSessions: (userId: string, options: {
        page: number;
        limit: number;
        status?: string;
    }) => Promise<{
        data: ({
            user: {
                name: string;
                id: string;
                email: string;
                image: string | null;
            };
            review: {
                id: string;
                createdAt: Date;
                rating: number;
                comment: string | null;
            } | null;
        } & {
            status: import("../../generated/prisma/enums").BookingStatus;
            id: string;
            createdAt: Date;
            updatedAt: Date;
            subject: string | null;
            duration: number;
            tutorProfileId: string;
            scheduledAt: Date;
            notes: string | null;
            studentId: string;
            availabilitySlotId: string | null;
            meetingLink: string | null;
            price: number;
        })[];
        meta: {
            total: number;
            page: number;
            limit: number;
            totalPages: number;
        };
    }>;
    getReviews: (userId: string, options: {
        page: number;
        limit: number;
        rating?: number;
    }) => Promise<{
        data: ({
            user: {
                name: string;
                id: string;
                image: string | null;
            };
            booking: {
                id: string;
                subject: string | null;
                duration: number;
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
    getRatingStats: (userId: string) => Promise<{
        totalReviews: number;
        averageRating: number;
        distribution: {
            rating: number;
            count: number;
            percentage: number;
        }[];
    }>;
    updateBookingStatus: (userId: string, bookingId: string, data: {
        status: string;
    }) => Promise<{
        user: {
            name: string;
            id: string;
            email: string;
        };
    } & {
        status: import("../../generated/prisma/enums").BookingStatus;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        subject: string | null;
        duration: number;
        tutorProfileId: string;
        scheduledAt: Date;
        notes: string | null;
        studentId: string;
        availabilitySlotId: string | null;
        meetingLink: string | null;
        price: number;
    }>;
};
//# sourceMappingURL=tutor.service.d.ts.map