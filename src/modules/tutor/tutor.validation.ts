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

export const createAvailabilitySlotSchema = z.object({
  dayOfWeek: z.enum(["MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY"], {
    errorMap: () => ({ message: "Invalid day of week" })
  }),
  startTime: z.string().regex(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/, "Invalid time format (HH:MM)"),
  endTime: z.string().regex(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/, "Invalid time format (HH:MM)"),
  isActive: z.boolean().default(true)
}).refine((data) => {
  const start = data.startTime.split(':').map(Number);
  const end = data.endTime.split(':').map(Number);
  const startMinutes = start[0]! * 60 + start[1]!;
  const endMinutes = end[0]! * 60 + end[1]!;
  return endMinutes > startMinutes;
}, {
  message: "End time must be after start time"
});

export const updateAvailabilitySlotSchema = z.object({
  startTime: z.string().regex(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/, "Invalid time format (HH:MM)").optional(),
  endTime: z.string().regex(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/, "Invalid time format (HH:MM)").optional(),
  isActive: z.boolean().optional()
}).refine((data) => {
  if (data.startTime && data.endTime) {
    const start = data.startTime.split(':').map(Number);
    const end = data.endTime.split(':').map(Number);
    const startMinutes = start[0]! * 60 + start[1]!;
    const endMinutes = end[0]! * 60 + end[1]!;
    return endMinutes > startMinutes;
  }
  return true;
}, {
  message: "End time must be after start time"
});

export type CreateAvailabilitySlotInput = z.infer<typeof createAvailabilitySlotSchema>;
export type UpdateAvailabilitySlotInput = z.infer<typeof updateAvailabilitySlotSchema>;

export type CreateTutorProfileInput = z.infer<typeof createTutorProfileSchema>;
export type UpdateTutorProfileInput = z.infer<typeof updateTutorProfileSchema>;