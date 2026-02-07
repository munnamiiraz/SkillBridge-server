"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateSubjectSchema = exports.createSubjectSchema = exports.updateCategorySchema = exports.createCategorySchema = void 0;
// category.validation.ts
const zod_1 = require("zod");
exports.createCategorySchema = zod_1.z.object({
    name: zod_1.z.string()
        .min(2, "Category name must be at least 2 characters")
        .max(100, "Category name must not exceed 100 characters")
        .trim(),
    description: zod_1.z.string()
        .min(10, "Description must be at least 10 characters")
        .max(500, "Description must not exceed 500 characters")
        .trim()
        .optional(),
    status: zod_1.z.enum(["ACTIVE", "INACTIVE"], {
        errorMap: () => ({ message: "Status must be either ACTIVE or INACTIVE" })
    }).optional().default("ACTIVE")
});
exports.updateCategorySchema = zod_1.z.object({
    name: zod_1.z.string()
        .min(2, "Category name must be at least 2 characters")
        .max(100, "Category name must not exceed 100 characters")
        .trim()
        .optional(),
    description: zod_1.z.string()
        .min(10, "Description must be at least 10 characters")
        .max(500, "Description must not exceed 500 characters")
        .trim()
        .optional(),
    status: zod_1.z.enum(["ACTIVE", "INACTIVE"], {
        errorMap: () => ({ message: "Status must be either ACTIVE or INACTIVE" })
    }).optional()
}).refine((data) => {
    const fields = Object.values(data).filter(field => field !== undefined);
    return fields.length > 0;
}, {
    message: "At least one field must be provided for update"
});
exports.createSubjectSchema = zod_1.z.object({
    name: zod_1.z.string()
        .min(2, "Subject name must be at least 2 characters")
        .max(100, "Subject name must not exceed 100 characters")
        .trim(),
    categoryId: zod_1.z.string()
        .uuid("Invalid category ID format")
});
exports.updateSubjectSchema = zod_1.z.object({
    name: zod_1.z.string()
        .min(2, "Subject name must be at least 2 characters")
        .max(100, "Subject name must not exceed 100 characters")
        .trim()
        .optional(),
    categoryId: zod_1.z.string()
        .uuid("Invalid category ID format")
        .optional()
}).refine((data) => {
    const fields = Object.values(data).filter(field => field !== undefined);
    return fields.length > 0;
}, {
    message: "At least one field must be provided for update"
});
