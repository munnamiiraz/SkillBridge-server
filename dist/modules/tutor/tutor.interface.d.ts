export interface PaginationOptions {
    page: number;
    limit: number;
}
export interface BookingPaginationOptions extends PaginationOptions {
    status?: string;
}
export interface PaginationMeta {
    total: number;
    page: number;
    limit: number;
    totalPages: number;
}
export interface PaginatedResponse<T> {
    data: T[];
    meta: PaginationMeta;
}
export interface TutorProfile {
    id: string;
    userId: string;
    bio?: string;
    headline?: string;
    hourlyRate: number;
    address?: string;
    experience: number;
    education?: string;
    isAvailable: boolean;
    averageRating: number;
    totalReviews: number;
    totalSessions: number;
    isFeatured: boolean;
    createdAt: Date;
    updatedAt: Date;
}
export interface AvailabilitySlot {
    id: string;
    tutorProfileId: string;
    dayOfWeek: number;
    startTime: string;
    endTime: string;
    isRecurring: boolean;
    specificDate?: Date;
    createdAt: Date;
    updatedAt: Date;
}
export interface BookingWithStudent {
    id: string;
    studentId: string;
    tutorProfileId: string;
    scheduledAt: Date;
    duration: number;
    status: string;
    subject?: string;
    notes?: string;
    price: number;
    createdAt: Date;
    updatedAt: Date;
    user: {
        id: string;
        name: string;
        email: string;
        image?: string;
    };
    review?: ReviewInfo;
}
export interface ReviewInfo {
    id: string;
    rating: number;
    comment?: string;
    createdAt: Date;
    user: {
        id: string;
        name: string;
        image?: string;
    };
}
export interface RatingStats {
    averageRating: number;
    totalReviews: number;
    ratingDistribution: {
        1: number;
        2: number;
        3: number;
        4: number;
        5: number;
    };
}
export interface Subject {
    id: string;
    name: string;
}
export interface TutorSubject {
    id: string;
    tutorProfileId: string;
    subjectId: string;
    subject: Subject;
}
//# sourceMappingURL=tutor.interface.d.ts.map