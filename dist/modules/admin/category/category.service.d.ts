import { CreateCategoryInput, UpdateCategoryInput, CreateSubjectInput, UpdateSubjectInput } from "./category.vaidation";
export declare const CategoryService: {
    createCategory: (data: CreateCategoryInput) => Promise<{
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
        status: import("../../../generated/prisma/enums").CategoryStatus;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        description: string | null;
    }>;
    updateCategory: (categoryId: string, data: UpdateCategoryInput) => Promise<{
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
        status: import("../../../generated/prisma/enums").CategoryStatus;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        description: string | null;
    }>;
    getCategory: (categoryId: string) => Promise<{
        subject: ({
            _count: {
                tutor_subject: number;
            };
        } & {
            name: string;
            id: string;
            createdAt: Date;
            updatedAt: Date;
            categoryId: string;
        })[];
        _count: {
            subject: number;
        };
    } & {
        name: string;
        status: import("../../../generated/prisma/enums").CategoryStatus;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        description: string | null;
    }>;
    getAllCategories: (filters?: {
        status?: string;
        search?: string;
    }) => Promise<({
        subject: ({
            _count: {
                tutor_subject: number;
            };
        } & {
            name: string;
            id: string;
            createdAt: Date;
            updatedAt: Date;
            categoryId: string;
        })[];
        _count: {
            subject: number;
        };
    } & {
        name: string;
        status: import("../../../generated/prisma/enums").CategoryStatus;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        description: string | null;
    })[]>;
    deleteCategory: (categoryId: string) => Promise<{
        message: string;
    }>;
    createSubject: (data: CreateSubjectInput) => Promise<{
        _count: {
            tutor_subject: number;
        };
        category: {
            name: string;
            status: import("../../../generated/prisma/enums").CategoryStatus;
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
    }>;
    updateSubject: (subjectId: string, data: UpdateSubjectInput) => Promise<{
        _count: {
            tutor_subject: number;
        };
        category: {
            name: string;
            status: import("../../../generated/prisma/enums").CategoryStatus;
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
    }>;
    getSubject: (subjectId: string) => Promise<{
        _count: {
            tutor_subject: number;
        };
        category: {
            name: string;
            status: import("../../../generated/prisma/enums").CategoryStatus;
            id: string;
            createdAt: Date;
            updatedAt: Date;
            description: string | null;
        };
        tutor_subject: ({
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
            id: string;
            tutorProfileId: string;
            subjectId: string;
        })[];
    } & {
        name: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        categoryId: string;
    }>;
    getAllSubjects: (filters?: {
        categoryId?: string;
        search?: string;
    }) => Promise<({
        _count: {
            tutor_subject: number;
        };
        category: {
            name: string;
            status: import("../../../generated/prisma/enums").CategoryStatus;
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
    })[]>;
    deleteSubject: (subjectId: string) => Promise<{
        message: string;
    }>;
};
//# sourceMappingURL=category.service.d.ts.map