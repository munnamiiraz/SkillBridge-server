import { z } from "zod";
const isoDateRegex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d{3})?Z?$/;
export const createBookingSchema = z.object({
    tutorProfileId: z.string().uuid({ message: "Invalid Tutor Profile ID" }),
    scheduledAt: z.string().refine((val) => !isNaN(Date.parse(val)) && isoDateRegex.test(val), {
        message: "Invalid date format. Expected ISO string."
    }),
    duration: z.number().int().min(30, "Minimum duration is 30 minutes").max(180, "Maximum duration is 180 minutes"),
    subject: z.string().min(1, "Subject is required"),
    notes: z.string().max(500, "Notes cannot exceed 500 characters").optional()
});
//# sourceMappingURL=booking.validation.js.map