import { z } from "zod";

export const createBookingSchema = z.object({
  tutorProfileId: z.string(),
  scheduledAt: z.string(),
  duration: z.number().int().min(30).max(180),
  subject: z.string().min(1),
  notes: z.string().optional()
});

export type CreateBookingInput = z.infer<typeof createBookingSchema>;