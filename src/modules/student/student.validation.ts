import { z } from "zod";

export const updateProfileSchema = z.object({
  name: z.string().min(1, "Name cannot be empty").max(100, "Name too long").optional(),
  image: z.string().url("Invalid image URL").nullable().optional(),
  address: z.string().min(1, "Address cannot be empty").max(500, "Address too long").nullable().optional(),
  phone: z.string().min(1, "Phone cannot be empty").max(20, "Phone too long").optional()
}).refine((data) => {
  const fields = Object.values(data).filter(field => field !== undefined);
  return fields.length > 0;
}, {
  message: "At least one field must be provided for update"
});

export const createReviewSchema = z.object({
  bookingId: z.string().uuid("Invalid booking ID"),
  rating: z.number().int().min(1, "Rating must be at least 1").max(5, "Rating cannot exceed 5"),
  comment: z.string().max(1000, "Comment too long").optional()
});

export type UpdateProfileInput = z.infer<typeof updateProfileSchema>;
export type CreateReviewInput = z.infer<typeof createReviewSchema>;