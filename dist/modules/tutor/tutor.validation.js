"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateAvailabilitySlotsSchema = exports.timeSlotSchema = exports.updateTutorProfileSchema = exports.createTutorProfileSchema = void 0;
// tutor.validation.ts
const zod_1 = require("zod");
exports.createTutorProfileSchema = zod_1.z.object({
    bio: zod_1.z.string().min(10, "Bio must be at least 10 characters").max(1000, "Bio too long"),
    headline: zod_1.z.string().min(5, "Headline must be at least 5 characters").max(200, "Headline too long"),
    hourlyRate: zod_1.z.number().min(1, "Hourly rate must be at least $1").max(1000, "Hourly rate too high"),
    experience: zod_1.z.number().min(0, "Experience cannot be negative").max(50, "Experience too high"),
    education: zod_1.z.string().min(5, "Education must be at least 5 characters").max(500, "Education too long"),
    subjectIds: zod_1.z.array(zod_1.z.string()).min(1, "At least one subject must be selected")
});
exports.updateTutorProfileSchema = zod_1.z.object({
    bio: zod_1.z.string().transform(val => val?.trim() || undefined).pipe(zod_1.z.string().min(10, "Bio must be at least 10 characters").max(1000, "Bio too long").optional()).optional(),
    headline: zod_1.z.string().transform(val => val?.trim() || undefined).pipe(zod_1.z.string().min(5, "Headline must be at least 5 characters").max(200, "Headline too long").optional()).optional(),
    hourlyRate: zod_1.z.number().min(1, "Hourly rate must be at least $1").max(1000, "Hourly rate too high").optional(),
    experience: zod_1.z.number().min(0, "Experience cannot be negative").max(50, "Experience too high").optional(),
    education: zod_1.z.string().transform(val => val?.trim() || undefined).pipe(zod_1.z.string().min(5, "Education must be at least 5 characters").max(500, "Education too long").optional()).optional(),
    isAvailable: zod_1.z.boolean().optional()
}).refine((data) => {
    const fields = Object.values(data).filter(field => field !== undefined);
    return fields.length > 0;
}, {
    message: "At least one field must be provided for update"
});
// Schema for a single time slot
exports.timeSlotSchema = zod_1.z.object({
    date: zod_1.z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "Invalid date format (YYYY-MM-DD)"),
    startTime: zod_1.z.string().regex(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/, "Invalid time format (HH:MM)"),
    endTime: zod_1.z.string().regex(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/, "Invalid time format (HH:MM)")
}).refine((data) => {
    const start = data.startTime.split(':').map(Number);
    const end = data.endTime.split(':').map(Number);
    const startMinutes = start[0] * 60 + start[1];
    const endMinutes = end[0] * 60 + end[1];
    return endMinutes > startMinutes;
}, {
    message: "End time must be after start time"
});
// Schema for updating availability slots
exports.updateAvailabilitySlotsSchema = zod_1.z.object({
    weekStartDate: zod_1.z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "Invalid date format (YYYY-MM-DD)"),
    slots: zod_1.z.array(exports.timeSlotSchema).min(1, "At least one slot is required")
});
