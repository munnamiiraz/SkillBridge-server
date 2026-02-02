import { UpdateProfileInput, CreateReviewInput } from "./student.validation";
import { CreateBookingInput } from "./booking.validation";
import { UserProfile, CreateReviewResponse, BookingWithTutor, PaginatedResponse, BookingPaginationOptions, PaginationOptions } from "./student.interface";
export declare const StudentService: {
    updateProfile: (userId: string, data: UpdateProfileInput) => Promise<UserProfile>;
    getProfile: (userId: string) => Promise<UserProfile | null>;
    createReview: (studentId: string, data: CreateReviewInput) => Promise<CreateReviewResponse>;
    createBooking: (studentId: string, data: CreateBookingInput) => Promise<BookingWithTutor>;
    getBookings: (studentId: string, options: BookingPaginationOptions) => Promise<PaginatedResponse<BookingWithTutor>>;
    getReviewableBookings: (studentId: string, options: PaginationOptions) => Promise<PaginatedResponse<BookingWithTutor>>;
    cancelBooking: (studentId: string, bookingId: string) => Promise<BookingWithTutor>;
    getReviews: (studentId: string, options: PaginationOptions) => Promise<PaginatedResponse<any>>;
};
//# sourceMappingURL=student.service.d.ts.map