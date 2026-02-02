import { z } from "zod";
export declare const updateProfileSchema: z.ZodEffects<z.ZodObject<{
    name: z.ZodOptional<z.ZodString>;
    image: z.ZodOptional<z.ZodString>;
    address: z.ZodOptional<z.ZodString>;
    phone: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    name?: string | undefined;
    phone?: string | undefined;
    image?: string | undefined;
    address?: string | undefined;
}, {
    name?: string | undefined;
    phone?: string | undefined;
    image?: string | undefined;
    address?: string | undefined;
}>, {
    name?: string | undefined;
    phone?: string | undefined;
    image?: string | undefined;
    address?: string | undefined;
}, {
    name?: string | undefined;
    phone?: string | undefined;
    image?: string | undefined;
    address?: string | undefined;
}>;
export declare const createReviewSchema: z.ZodObject<{
    bookingId: z.ZodString;
    rating: z.ZodNumber;
    comment: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    bookingId: string;
    rating: number;
    comment?: string | undefined;
}, {
    bookingId: string;
    rating: number;
    comment?: string | undefined;
}>;
export type UpdateProfileInput = z.infer<typeof updateProfileSchema>;
export type CreateReviewInput = z.infer<typeof createReviewSchema>;
//# sourceMappingURL=student.validation.d.ts.map