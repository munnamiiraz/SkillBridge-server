import { z } from "zod";

export const adminLoginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters")
});

export const updateUserStatusSchema = z.object({
  status: z.enum(["ACTIVE", "INACTIVE", "BANNED"]),
  banReason: z.string().optional()
}).refine((data) => {
  if (data.status === "BANNED" && !data.banReason) {
    return false;
  }
  return true;
}, {
  message: "Ban reason is required when banning a user",
  path: ["banReason"]
});

export const banUserSchema = z.object({
  banReason: z.string().min(1, "Ban reason is required").max(500, "Ban reason must be less than 500 characters")
});

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

export type AdminLoginInput = z.infer<typeof adminLoginSchema>;
export type UpdateUserStatusInput = z.infer<typeof updateUserStatusSchema>;
export type BanUserInput = z.infer<typeof banUserSchema>;
export type CreateCategoryInput = z.infer<typeof createCategorySchema>;
export type UpdateCategoryInput = z.infer<typeof updateCategorySchema>;
export type CreateSubjectInput = z.infer<typeof createSubjectSchema>;
export type UpdateSubjectInput = z.infer<typeof updateSubjectSchema>;
