"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createBookingSchema = void 0;
const zod_1 = require("zod");
const isoDateRegex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d{3})?Z?$/;
exports.createBookingSchema = zod_1.z.object({
    tutorProfileId: zod_1.z.string().uuid({ message: "Invalid Tutor Profile ID" }),
    scheduledAt: zod_1.z.string().refine((val) => !isNaN(Date.parse(val)) && isoDateRegex.test(val), {
        message: "Invalid date format. Expected ISO string."
    }),
    duration: zod_1.z.number().int().min(30, "Minimum duration is 30 minutes").max(180, "Maximum duration is 180 minutes"),
    subject: zod_1.z.string().min(1, "Subject is required"),
    notes: zod_1.z.string().max(500, "Notes cannot exceed 500 characters").optional()
});
