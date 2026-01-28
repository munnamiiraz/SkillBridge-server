export interface PaginationOptions {
  page: number;
  limit: number;
}

export interface UserPaginationOptions extends PaginationOptions {
  role?: string;
  status?: string;
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

export interface AdminLoginResponse {
  user: {
    id: string;
    name: string;
    email: string;
    role: string;
  };
  session: any;
}

export interface UserWithProfile {
  id: string;
  name: string;
  email: string;
  role: string;
  status: string;
  banReason?: string;
  image?: string;
  createdAt: Date;
  tutor_profile?: {
    id: string;
    hourlyRate: number;
    averageRating: number;
    totalReviews: number;
  };
}

export interface UpdatedUser {
  id: string;
  name: string;
  email: string;
  role: string;
  status: string;
  banReason?: string;
  updatedAt: Date;
}

export interface BookingWithDetails {
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
  student: {
    id: string;
    name: string;
    email: string;
    image?: string;
  };
  tutor_profile: {
    user: {
      id: string;
      name: string;
      email: string;
      image?: string;
    };
  };
  review?: any;
}

export interface PlatformStats {
  users: {
    total: number;
    byRole: Record<string, number>;
    newThisWeek: number;
  };
  bookings: {
    total: number;
    byStatus: Record<string, number>;
    newThisWeek: number;
  };
  revenue: {
    total: number;
    completedBookings: number;
  };
}

export interface CategoryWithSubjects {
  id: string;
  name: string;
  description?: string;
  image?: string;
  createdAt: Date;
  updatedAt: Date;
  subject: {
    id: string;
    name: string;
  }[];
  _count: {
    subject: number;
  };
}

export interface CategoryResponse {
  id: string;
  name: string;
  description?: string;
  image?: string;
  createdAt: Date;
  updatedAt: Date;
  _count: {
    subject: number;
  };
}