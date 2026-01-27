import { z } from "zod";

export const createBookingSchema = z.object({
  tutorProfileId: z.string().uuid("Invalid tutor profile ID"),
  scheduledAt: z.string().datetime("Invalid date format"),
  duration: z.number().int().min(30, "Minimum duration is 30 minutes").max(180, "Maximum duration is 180 minutes"),
  subject: z.string().min(1, "Subject is required").max(100, "Subject too long"),
  notes: z.string().max(500, "Notes too long").optional()
});

export type CreateBookingInput = z.infer<typeof createBookingSchema>;