"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.TutorController = exports.updateAvailabilitySlots = void 0;
const tutor_service_1 = require("./tutor.service");
const tutor_validation_1 = require("./tutor.validation");
const createProfile = async (req, res, next) => {
    try {
        if (!req.user) {
            return res.status(401).json({
                success: false,
                message: "User not authenticated"
            });
        }
        // Direct check without triggering auto-creation
        const { prisma } = await Promise.resolve().then(() => __importStar(require("../../lib/prisma")));
        const existingProfile = await prisma.tutor_profile.findUnique({
            where: { userId: req.user.id }
        });
        if (existingProfile) {
            // Profile exists, return it instead of error
            const fullProfile = await tutor_service_1.TutorService.getProfile(req.user.id);
            return res.status(200).json({
                success: true,
                message: "Tutor profile already exists",
                data: fullProfile
            });
        }
        const result = await tutor_service_1.TutorService.createProfile(req.user.id, req.body);
        res.status(201).json({
            success: true,
            message: "Tutor profile created successfully",
            data: result
        });
    }
    catch (error) {
        console.error('Error creating profile:', error);
        next(error);
    }
};
const updateProfile = async (req, res, next) => {
    try {
        const result = await tutor_service_1.TutorService.updateProfile(req.user.id, req.body);
        res.status(200).json({
            success: true,
            message: "Tutor profile updated successfully",
            data: result
        });
    }
    catch (error) {
        next(error);
    }
};
const getProfile = async (req, res, next) => {
    try {
        if (!req.user) {
            return res.status(401).json({
                success: false,
                message: "User not authenticated"
            });
        }
        const result = await tutor_service_1.TutorService.getProfile(req.user.id);
        if (!result) {
            return res.status(404).json({
                success: false,
                message: "Tutor profile not found. Please create a profile first.",
                data: null
            });
        }
        res.status(200).json({
            success: true,
            message: "Tutor profile retrieved successfully",
            data: result
        });
    }
    catch (error) {
        console.error('Error in getProfile:', error);
        next(error);
    }
};
const getAvailabilitySlots = async (req, res, next) => {
    try {
        const { weekStartDate } = req.query;
        const result = await tutor_service_1.TutorService.getAvailabilitySlots(req.user.id, weekStartDate);
        res.status(200).json({
            success: true,
            message: "Availability slots retrieved successfully",
            data: result
        });
    }
    catch (error) {
        next(error);
    }
};
const updateAvailabilitySlots = async (req, res, next) => {
    try {
        // Validate the request body
        const validatedSlots = tutor_validation_1.updateAvailabilitySlotsSchema.parse(req.body);
        // Update the availability slots
        const result = await tutor_service_1.TutorService.updateAvailabilitySlots(req.user.id, validatedSlots);
        res.status(200).json({
            success: true,
            message: "Availability slots updated successfully",
            data: result
        });
    }
    catch (error) {
        next(error);
    }
};
exports.updateAvailabilitySlots = updateAvailabilitySlots;
const getTeachingSessions = async (req, res, next) => {
    try {
        const { page = 1, limit = 10, status } = req.query;
        const result = await tutor_service_1.TutorService.getTeachingSessions(req.user.id, {
            page: Number(page),
            limit: Number(limit),
            ...(status && typeof status === 'string' && { status })
        });
        res.status(200).json({
            success: true,
            message: "Teaching sessions retrieved successfully",
            data: result.data,
            meta: result.meta
        });
    }
    catch (error) {
        next(error);
    }
};
const getReviews = async (req, res, next) => {
    try {
        const { page, limit, rating } = req.query;
        const pageNumber = Number(page) > 0 ? Number(page) : 1;
        const limitNumber = Number(limit) > 0 ? Number(limit) : 10;
        // Parse rating safely - if invalid number, treat as undefined
        let ratingNumber = undefined;
        if (rating) {
            const parsed = Number(rating);
            if (!isNaN(parsed) && parsed >= 1 && parsed <= 5) {
                ratingNumber = parsed;
            }
        }
        const result = await tutor_service_1.TutorService.getReviews(req.user.id, {
            page: pageNumber,
            limit: limitNumber,
            ...(ratingNumber !== undefined && { rating: ratingNumber })
        });
        res.status(200).json({
            success: true,
            message: "Reviews retrieved successfully",
            data: result.data,
            meta: result.meta
        });
    }
    catch (error) {
        console.error("Error in getReviews controller:", error);
        next(error);
    }
};
const getRatingStats = async (req, res, next) => {
    try {
        const result = await tutor_service_1.TutorService.getRatingStats(req.user.id);
        res.status(200).json({
            success: true,
            message: "Rating statistics retrieved successfully",
            data: result
        });
    }
    catch (error) {
        next(error);
    }
};
const updateBookingStatus = async (req, res, next) => {
    try {
        const { bookingId } = req.params;
        const result = await tutor_service_1.TutorService.updateBookingStatus(req.user.id, bookingId, req.body);
        res.status(200).json({
            success: true,
            message: "Booking status updated successfully",
            data: result
        });
    }
    catch (error) {
        next(error);
    }
};
exports.TutorController = {
    createProfile,
    updateProfile,
    getProfile,
    getAvailabilitySlots,
    updateAvailabilitySlots: exports.updateAvailabilitySlots,
    getTeachingSessions,
    getReviews,
    getRatingStats,
    updateBookingStatus
};
