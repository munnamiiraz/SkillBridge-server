import { z } from "zod";
export declare const createBookingSchema: z.ZodObject<{
    tutorProfileId: z.ZodString;
    scheduledAt: z.ZodEffects<z.ZodString, string, string>;
    duration: z.ZodNumber;
    subject: z.ZodString;
    notes: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    subject: string;
    duration: number;
    tutorProfileId: string;
    scheduledAt: string;
    notes?: string | undefined;
}, {
    subject: string;
    duration: number;
    tutorProfileId: string;
    scheduledAt: string;
    notes?: string | undefined;
}>;
export type CreateBookingInput = z.infer<typeof createBookingSchema>;
//# sourceMappingURL=booking.validation.d.ts.map