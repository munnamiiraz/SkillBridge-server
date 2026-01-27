import { z } from "zod";

export const updateProfileSchema = z.object({
  name: z.string().min(1, "Name cannot be empty").max(100, "Name too long").optional(),
  image: z.string().url("Invalid image URL").optional(),
  address: z.string().min(1, "Address cannot be empty").max(500, "Address too long").optional()
}).refine((data) => {
  const fields = Object.values(data).filter(field => field !== undefined);
  return fields.length > 0;
}, {
  message: "At least one field must be provided for update"
});

export type UpdateProfileInput = z.infer<typeof updateProfileSchema>;