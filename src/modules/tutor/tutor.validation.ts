import { z } from "zod";

export const createTutorProfileSchema = z.object({
  bio: z.string().min(10, "Bio must be at least 10 characters").max(1000, "Bio too long").optional(),
  headline: z.string().min(5, "Headline must be at least 5 characters").max(200, "Headline too long").optional(),
  hourlyRate: z.number().min(1, "Hourly rate must be at least $1").max(1000, "Hourly rate too high"),
  experience: z.number().min(0, "Experience cannot be negative").max(50, "Experience too high").optional(),
  education: z.string().min(5, "Education must be at least 5 characters").max(500, "Education too long").optional()
});

export const updateTutorProfileSchema = z.object({
  bio: z.string().min(10, "Bio must be at least 10 characters").max(1000, "Bio too long").optional(),
  headline: z.string().min(5, "Headline must be at least 5 characters").max(200, "Headline too long").optional(),
  hourlyRate: z.number().min(1, "Hourly rate must be at least $1").max(1000, "Hourly rate too high").optional(),
  experience: z.number().min(0, "Experience cannot be negative").max(50, "Experience too high").optional(),
  education: z.string().min(5, "Education must be at least 5 characters").max(500, "Education too long").optional(),
  isAvailable: z.boolean().optional()
}).refine((data) => {
  const fields = Object.values(data).filter(field => field !== undefined);
  return fields.length > 0;
}, {
  message: "At least one field must be provided for update"
});

export type CreateTutorProfileInput = z.infer<typeof createTutorProfileSchema>;
export type UpdateTutorProfileInput = z.infer<typeof updateTutorProfileSchema>;