import { z } from "zod";

export const createCategorySchema = z.object({
  name: z.string()
    .min(2, "Category name must be at least 2 characters")
    .max(100, "Category name must not exceed 100 characters")
    .trim(),
  description: z.string()
    .min(10, "Description must be at least 10 characters")
    .max(500, "Description must not exceed 500 characters")
    .trim()
    .optional(),
  status: z.enum(["ACTIVE", "INACTIVE"], {
    errorMap: () => ({ message: "Status must be either ACTIVE or INACTIVE" })
  }).optional().default("ACTIVE")
});

export const updateCategorySchema = z.object({
  name: z.string()
    .min(2, "Category name must be at least 2 characters")
    .max(100, "Category name must not exceed 100 characters")
    .trim()
    .optional(),
  description: z.string()
    .min(10, "Description must be at least 10 characters")
    .max(500, "Description must not exceed 500 characters")
    .trim()
    .optional(),
  status: z.enum(["ACTIVE", "INACTIVE"], {
    errorMap: () => ({ message: "Status must be either ACTIVE or INACTIVE" })
  }).optional()
}).refine((data) => {
  const fields = Object.values(data).filter(field => field !== undefined);
  return fields.length > 0;
}, {
  message: "At least one field must be provided for update"
});

export const createSubjectSchema = z.object({
  name: z.string()
    .min(2, "Subject name must be at least 2 characters")
    .max(100, "Subject name must not exceed 100 characters")
    .trim(),
  categoryId: z.string()
    .uuid("Invalid category ID format")
});

export const updateSubjectSchema = z.object({
  name: z.string()
    .min(2, "Subject name must be at least 2 characters")
    .max(100, "Subject name must not exceed 100 characters")
    .trim()
    .optional(),
  categoryId: z.string()
    .uuid("Invalid category ID format")
    .optional()
}).refine((data) => {
  const fields = Object.values(data).filter(field => field !== undefined);
  return fields.length > 0;
}, {
  message: "At least one field must be provided for update"
});

export type CreateCategoryInput = z.infer<typeof createCategorySchema>;
export type UpdateCategoryInput = z.infer<typeof updateCategorySchema>;
export type CreateSubjectInput = z.infer<typeof createSubjectSchema>;
export type UpdateSubjectInput = z.infer<typeof updateSubjectSchema>;