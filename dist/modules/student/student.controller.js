import { StudentService } from "./student.service";
const updateProfile = async (req, res, next) => {
    try {
        const { name, image, address, phone } = req.body;
        const result = await StudentService.updateProfile(req.user.id, { name, image, address, phone });
        res.status(200).json({
            success: true,
            message: "Profile updated successfully",
            data: result
        });
    }
    catch (error) {
        next(error);
    }
};
const getProfile = async (req, res, next) => {
    try {
        const result = await StudentService.getProfile(req.user.id);
        res.status(200).json({
            success: true,
            message: "Profile retrieved successfully",
            data: result
        });
    }
    catch (error) {
        next(error);
    }
};
const createReview = async (req, res, next) => {
    try {
        const { bookingId, rating, comment } = req.body;
        const result = await StudentService.createReview(req.user.id, { bookingId, rating, comment });
        res.status(201).json({
            success: true,
            message: "Review created successfully",
            data: result
        });
    }
    catch (error) {
        next(error);
    }
};
const createBooking = async (req, res, next) => {
    try {
        const { tutorProfileId, scheduledAt, duration, subject, notes } = req.body;
        if (!req.user) {
            return res.status(401).json({
                success: false,
                message: "User not authenticated"
            });
        }
        const result = await StudentService.createBooking(req.user.id, { tutorProfileId, scheduledAt, duration, subject, notes });
        res.status(201).json({
            success: true,
            message: "Booking created successfully",
            data: result
        });
    }
    catch (error) {
        console.error('Booking creation error:', error);
        // Handle validation errors
        if (error.name === 'ZodError') {
            return res.status(400).json({
                success: false,
                message: "Validation error",
                errors: error.errors
            });
        }
        // Handle custom errors
        if (error.message) {
            return res.status(400).json({
                success: false,
                message: error.message
            });
        }
        next(error);
    }
};
const getBookings = async (req, res, next) => {
    try {
        const { page = 1, limit = 10, status } = req.query;
        const result = await StudentService.getBookings(req.user.id, {
            page: Number(page),
            limit: Number(limit),
            status: status
        });
        res.status(200).json({
            success: true,
            message: "Bookings retrieved successfully",
            data: result.data,
            meta: result.meta
        });
    }
    catch (error) {
        next(error);
    }
};
const getReviewableBookings = async (req, res, next) => {
    try {
        const { page = 1, limit = 10 } = req.query;
        const result = await StudentService.getReviewableBookings(req.user.id, {
            page: Number(page),
            limit: Number(limit)
        });
        res.status(200).json({
            success: true,
            message: "Reviewable bookings retrieved successfully",
            data: result.data,
            meta: result.meta
        });
    }
    catch (error) {
        next(error);
    }
};
const cancelBooking = async (req, res, next) => {
    try {
        const { bookingId } = req.params;
        const result = await StudentService.cancelBooking(req.user.id, bookingId);
        res.status(200).json({
            success: true,
            message: "Booking cancelled successfully",
            data: result
        });
    }
    catch (error) {
        next(error);
    }
};
const getReviews = async (req, res, next) => {
    try {
        const { page = 1, limit = 10 } = req.query;
        const result = await StudentService.getReviews(req.user.id, {
            page: Number(page),
            limit: Number(limit)
        });
        res.status(200).json({
            success: true,
            message: "Reviews retrieved successfully",
            data: result.data,
            meta: result.meta
        });
    }
    catch (error) {
        next(error);
    }
};
export const StudentController = { updateProfile, getProfile, createReview, createBooking, getBookings, getReviewableBookings, cancelBooking, getReviews };
//# sourceMappingURL=student.controller.js.map