import { z } from "zod";
export declare const createTutorProfileSchema: z.ZodObject<{
    bio: z.ZodString;
    headline: z.ZodString;
    hourlyRate: z.ZodNumber;
    experience: z.ZodNumber;
    education: z.ZodString;
    subjectIds: z.ZodArray<z.ZodString, "many">;
}, "strip", z.ZodTypeAny, {
    bio: string;
    headline: string;
    hourlyRate: number;
    experience: number;
    education: string;
    subjectIds: string[];
}, {
    bio: string;
    headline: string;
    hourlyRate: number;
    experience: number;
    education: string;
    subjectIds: string[];
}>;
export declare const updateTutorProfileSchema: z.ZodEffects<z.ZodObject<{
    bio: z.ZodOptional<z.ZodPipeline<z.ZodEffects<z.ZodString, string | undefined, string>, z.ZodOptional<z.ZodString>>>;
    headline: z.ZodOptional<z.ZodPipeline<z.ZodEffects<z.ZodString, string | undefined, string>, z.ZodOptional<z.ZodString>>>;
    hourlyRate: z.ZodOptional<z.ZodNumber>;
    experience: z.ZodOptional<z.ZodNumber>;
    education: z.ZodOptional<z.ZodPipeline<z.ZodEffects<z.ZodString, string | undefined, string>, z.ZodOptional<z.ZodString>>>;
    isAvailable: z.ZodOptional<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    bio?: string | undefined;
    headline?: string | undefined;
    hourlyRate?: number | undefined;
    experience?: number | undefined;
    education?: string | undefined;
    isAvailable?: boolean | undefined;
}, {
    bio?: string | undefined;
    headline?: string | undefined;
    hourlyRate?: number | undefined;
    experience?: number | undefined;
    education?: string | undefined;
    isAvailable?: boolean | undefined;
}>, {
    bio?: string | undefined;
    headline?: string | undefined;
    hourlyRate?: number | undefined;
    experience?: number | undefined;
    education?: string | undefined;
    isAvailable?: boolean | undefined;
}, {
    bio?: string | undefined;
    headline?: string | undefined;
    hourlyRate?: number | undefined;
    experience?: number | undefined;
    education?: string | undefined;
    isAvailable?: boolean | undefined;
}>;
export declare const timeSlotSchema: z.ZodEffects<z.ZodObject<{
    date: z.ZodString;
    startTime: z.ZodString;
    endTime: z.ZodString;
}, "strip", z.ZodTypeAny, {
    date: string;
    startTime: string;
    endTime: string;
}, {
    date: string;
    startTime: string;
    endTime: string;
}>, {
    date: string;
    startTime: string;
    endTime: string;
}, {
    date: string;
    startTime: string;
    endTime: string;
}>;
export declare const updateAvailabilitySlotsSchema: z.ZodObject<{
    weekStartDate: z.ZodString;
    slots: z.ZodArray<z.ZodEffects<z.ZodObject<{
        date: z.ZodString;
        startTime: z.ZodString;
        endTime: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        date: string;
        startTime: string;
        endTime: string;
    }, {
        date: string;
        startTime: string;
        endTime: string;
    }>, {
        date: string;
        startTime: string;
        endTime: string;
    }, {
        date: string;
        startTime: string;
        endTime: string;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    weekStartDate: string;
    slots: {
        date: string;
        startTime: string;
        endTime: string;
    }[];
}, {
    weekStartDate: string;
    slots: {
        date: string;
        startTime: string;
        endTime: string;
    }[];
}>;
export type TimeSlotInput = z.infer<typeof timeSlotSchema>;
export type UpdateAvailabilitySlotsInput = z.infer<typeof updateAvailabilitySlotsSchema>;
export type CreateTutorProfileInput = z.infer<typeof createTutorProfileSchema>;
export type UpdateTutorProfileInput = z.infer<typeof updateTutorProfileSchema>;
//# sourceMappingURL=tutor.validation.d.ts.map