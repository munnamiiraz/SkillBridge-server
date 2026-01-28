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

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  phone: string;
  address?: string;
  image?: string;
  role: string;
  status: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface TutorUser {
  id: string;
  name: string;
  email?: string;
  image?: string;
}

export interface TutorProfileInfo {
  id: string;
  hourlyRate: number;
  user: TutorUser;
}

export interface BookingWithTutor {
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
  tutor_profile: TutorProfileInfo;
  review?: ReviewInfo;
}

export interface ReviewInfo {
  id: string;
  rating: number;
  comment?: string;
  createdAt: Date;
}

export interface CreateReviewResponse {
  id: string;
  bookingId: string;
  studentId: string;
  rating: number;
  comment?: string;
  createdAt: Date;
  updatedAt: Date;
  booking: {
    tutor_profile: {
      user: {
        id: string;
        name: string;
      };
    };
  };
}