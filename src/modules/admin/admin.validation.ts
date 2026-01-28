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

export type AdminLoginInput = z.infer<typeof adminLoginSchema>;
export type UpdateUserStatusInput = z.infer<typeof updateUserStatusSchema>;
export type BanUserInput = z.infer<typeof banUserSchema>;
