import { AdminLoginInput, UpdateUserStatusInput } from "./admin.validation";
export declare const AdminService: {
    login: (data: AdminLoginInput) => Promise<{
        user: {
            id: string;
            name: string;
            email: string;
            role: string;
        };
        token: string;
    }>;
    getUsers: (options: {
        page: number;
        limit: number;
        role?: string;
        status?: string;
    }) => Promise<{
        data: {
            name: string;
            role: import("../../../generated/prisma/enums").Role;
            status: import("../../../generated/prisma/enums").UserStatus;
            id: string;
            createdAt: Date;
            email: string;
            image: string | null;
            banReason: string | null;
            tutor_profile: {
                id: string;
                hourlyRate: number;
                averageRating: number;
                totalReviews: number;
            } | null;
        }[];
        meta: {
            total: number;
            page: number;
            limit: number;
            totalPages: number;
        };
    }>;
    updateUserStatus: (userId: string, data: UpdateUserStatusInput) => Promise<{
        name: string;
        role: import("../../../generated/prisma/enums").Role;
        status: import("../../../generated/prisma/enums").UserStatus;
        id: string;
        updatedAt: Date;
        email: string;
        banReason: string | null;
    }>;
    getAllBookings: (options: {
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
                updatedAt: Date;
                bookingId: string;
                rating: number;
                comment: string | null;
                studentId: string;
            } | null;
            tutor_profile: {
                user: {
                    name: string;
                    id: string;
                    email: string;
                    image: string | null;
                };
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
            };
        } & {
            status: import("../../../generated/prisma/enums").BookingStatus;
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
    cancelBooking: (bookingId: string, data: {
        reason?: string;
        refundAmount?: number;
    }) => Promise<{
        status: import("../../../generated/prisma/enums").BookingStatus;
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
    getPlatformStats: () => Promise<{
        users: {
            total: number;
            byRole: any;
            newThisWeek: number;
        };
        bookings: {
            total: number;
            byStatus: any;
            newThisWeek: number;
        };
        revenue: {
            total: number;
            completedBookings: number;
        };
    }>;
};
//# sourceMappingURL=admin.service.d.ts.map