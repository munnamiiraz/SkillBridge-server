// category.service.ts
import { prisma } from "../../../lib/prisma";
import { createCategorySchema, updateCategorySchema, createSubjectSchema, updateSubjectSchema } from "./category.vaidation";
import { randomUUID } from "crypto";
// ============= CATEGORY SERVICES =============
const createCategory = async (data) => {
    const validatedData = createCategorySchema.parse(data);
    // Check if category with same name already exists
    const existingCategory = await prisma.category.findUnique({
        where: { name: validatedData.name }
    });
    if (existingCategory) {
        throw new Error("Category with this name already exists");
    }
    const category = await prisma.category.create({
        data: {
            id: randomUUID(),
            name: validatedData.name,
            description: validatedData.description ?? null,
            status: validatedData.status || "ACTIVE"
        },
        include: {
            subject: true,
            _count: {
                select: {
                    subject: true
                }
            }
        }
    });
    return category;
};
const updateCategory = async (categoryId, data) => {
    const validatedData = updateCategorySchema.parse(data);
    // Check if category exists
    const existingCategory = await prisma.category.findUnique({
        where: { id: categoryId }
    });
    if (!existingCategory) {
        throw new Error("Category not found");
    }
    // If updating name, check for duplicates
    if (validatedData.name && validatedData.name !== existingCategory.name) {
        const duplicateCategory = await prisma.category.findUnique({
            where: { name: validatedData.name }
        });
        if (duplicateCategory) {
            throw new Error("Category with this name already exists");
        }
    }
    const updateData = {};
    if (validatedData.name !== undefined) {
        updateData.name = validatedData.name;
    }
    if (validatedData.description !== undefined) {
        updateData.description = validatedData.description;
    }
    if (validatedData.status !== undefined) {
        updateData.status = validatedData.status;
    }
    const category = await prisma.category.update({
        where: { id: categoryId },
        data: updateData,
        include: {
            subject: true,
            _count: {
                select: {
                    subject: true
                }
            }
        }
    });
    return category;
};
const getCategory = async (categoryId) => {
    const category = await prisma.category.findUnique({
        where: { id: categoryId },
        include: {
            subject: {
                include: {
                    _count: {
                        select: {
                            tutor_subject: true
                        }
                    }
                },
                orderBy: {
                    name: 'asc'
                }
            },
            _count: {
                select: {
                    subject: true
                }
            }
        }
    });
    if (!category) {
        throw new Error("Category not found");
    }
    return category;
};
const getAllCategories = async (filters) => {
    const whereClause = {};
    if (filters?.status) {
        whereClause.status = filters.status;
    }
    if (filters?.search) {
        whereClause.OR = [
            { name: { contains: filters.search, mode: 'insensitive' } },
            { description: { contains: filters.search, mode: 'insensitive' } }
        ];
    }
    const categories = await prisma.category.findMany({
        where: whereClause,
        include: {
            subject: {
                include: {
                    _count: {
                        select: {
                            tutor_subject: true
                        }
                    }
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
    return categories;
};
const deleteCategory = async (categoryId) => {
    const category = await prisma.category.findUnique({
        where: { id: categoryId },
        include: {
            _count: {
                select: {
                    subject: true
                }
            }
        }
    });
    if (!category) {
        throw new Error("Category not found");
    }
    // Check if category has subjects
    if (category._count.subject > 0) {
        throw new Error("Cannot delete category with existing subjects. Please delete all subjects first.");
    }
    await prisma.category.delete({
        where: { id: categoryId }
    });
    return { message: "Category deleted successfully" };
};
// ============= SUBJECT SERVICES =============
const createSubject = async (data) => {
    const validatedData = createSubjectSchema.parse(data);
    // Check if category exists
    const category = await prisma.category.findUnique({
        where: { id: validatedData.categoryId }
    });
    if (!category) {
        throw new Error("Category not found");
    }
    // Check if subject with same name already exists in this category
    const existingSubject = await prisma.subject.findFirst({
        where: {
            name: validatedData.name,
            categoryId: validatedData.categoryId
        }
    });
    if (existingSubject) {
        throw new Error("Subject with this name already exists in this category");
    }
    const subject = await prisma.subject.create({
        data: {
            id: randomUUID(),
            name: validatedData.name,
            categoryId: validatedData.categoryId
        },
        include: {
            category: true,
            _count: {
                select: {
                    tutor_subject: true
                }
            }
        }
    });
    return subject;
};
const updateSubject = async (subjectId, data) => {
    const validatedData = updateSubjectSchema.parse(data);
    // Check if subject exists
    const existingSubject = await prisma.subject.findUnique({
        where: { id: subjectId }
    });
    if (!existingSubject) {
        throw new Error("Subject not found");
    }
    // If updating category, check if it exists
    if (validatedData.categoryId) {
        const category = await prisma.category.findUnique({
            where: { id: validatedData.categoryId }
        });
        if (!category) {
            throw new Error("Category not found");
        }
    }
    // Check for duplicate name in the target category
    if (validatedData.name || validatedData.categoryId) {
        const targetCategoryId = validatedData.categoryId || existingSubject.categoryId;
        const targetName = validatedData.name || existingSubject.name;
        const duplicateSubject = await prisma.subject.findFirst({
            where: {
                name: targetName,
                categoryId: targetCategoryId,
                NOT: {
                    id: subjectId
                }
            }
        });
        if (duplicateSubject) {
            throw new Error("Subject with this name already exists in this category");
        }
    }
    const updateData = {};
    if (validatedData.name !== undefined) {
        updateData.name = validatedData.name;
    }
    if (validatedData.categoryId !== undefined) {
        updateData.categoryId = validatedData.categoryId;
    }
    const subject = await prisma.subject.update({
        where: { id: subjectId },
        data: updateData,
        include: {
            category: true,
            _count: {
                select: {
                    tutor_subject: true
                }
            }
        }
    });
    return subject;
};
const getSubject = async (subjectId) => {
    const subject = await prisma.subject.findUnique({
        where: { id: subjectId },
        include: {
            category: true,
            tutor_subject: {
                include: {
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
                    }
                }
            },
            _count: {
                select: {
                    tutor_subject: true
                }
            }
        }
    });
    if (!subject) {
        throw new Error("Subject not found");
    }
    return subject;
};
const getAllSubjects = async (filters) => {
    const whereClause = {};
    if (filters?.categoryId) {
        whereClause.categoryId = filters.categoryId;
    }
    if (filters?.search) {
        whereClause.name = { contains: filters.search, mode: 'insensitive' };
    }
    const subjects = await prisma.subject.findMany({
        where: whereClause,
        include: {
            category: true,
            _count: {
                select: {
                    tutor_subject: true
                }
            }
        },
        orderBy: {
            name: 'asc'
        }
    });
    return subjects;
};
const deleteSubject = async (subjectId) => {
    const subject = await prisma.subject.findUnique({
        where: { id: subjectId },
        include: {
            _count: {
                select: {
                    tutor_subject: true
                }
            }
        }
    });
    if (!subject) {
        throw new Error("Subject not found");
    }
    // Check if subject has tutors
    if (subject._count.tutor_subject > 0) {
        throw new Error("Cannot delete subject with assigned tutors. Please remove all tutor assignments first.");
    }
    await prisma.subject.delete({
        where: { id: subjectId }
    });
    return { message: "Subject deleted successfully" };
};
export const CategoryService = {
    createCategory,
    updateCategory,
    getCategory,
    getAllCategories,
    deleteCategory,
    createSubject,
    updateSubject,
    getSubject,
    getAllSubjects,
    deleteSubject
};
//# sourceMappingURL=category.service.js.map