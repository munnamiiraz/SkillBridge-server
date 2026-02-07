"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createReviewSchema = exports.updateProfileSchema = void 0;
const zod_1 = require("zod");
exports.updateProfileSchema = zod_1.z.object({
    name: zod_1.z.string().min(1, "Name cannot be empty").max(100, "Name too long").optional(),
    image: zod_1.z.string().url("Invalid image URL").optional(),
    address: zod_1.z.string().min(1, "Address cannot be empty").max(500, "Address too long").optional(),
    phone: zod_1.z.string().min(1, "Phone cannot be empty").max(20, "Phone too long").optional()
}).refine((data) => {
    const fields = Object.values(data).filter(field => field !== undefined);
    return fields.length > 0;
}, {
    message: "At least one field must be provided for update"
});
exports.createReviewSchema = zod_1.z.object({
    bookingId: zod_1.z.string().uuid("Invalid booking ID"),
    rating: zod_1.z.number().int().min(1, "Rating must be at least 1").max(5, "Rating cannot exceed 5"),
    comment: zod_1.z.string().max(1000, "Comment too long").optional()
});
