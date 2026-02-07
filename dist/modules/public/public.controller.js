"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PublicController = void 0;
const public_service_1 = require("./public.service");
const paginationSortingHelper_1 = __importDefault(require("../../helpers/paginationSortingHelper"));
class PublicController {
    static async searchTutors(req, res) {
        try {
            const { page = 1, limit = 10, subject, category, minRating, maxRating, minPrice, maxPrice, minTotalReviews, sortBy = "averageRating", sortOrder = "desc" } = req.query;
            const paginationHelper = (0, paginationSortingHelper_1.default)({
                page: Number(page),
                limit: Number(limit),
                sortBy: sortBy,
                sortOrder: sortOrder
            });
            const paginationOptions = {
                skip: paginationHelper.skip,
                take: paginationHelper.limit,
                orderBy: {
                    [paginationHelper.sortBy]: paginationHelper.sortOrder
                }
            };
            const filters = {
                ...(subject && { subject: subject }),
                ...(category && { category: category }),
                ...(minRating && { minRating: Number(minRating) }),
                ...(maxRating && { maxRating: Number(maxRating) }),
                ...(minPrice && { minPrice: Number(minPrice) }),
                ...(maxPrice && { maxPrice: Number(maxPrice) }),
                ...(minTotalReviews && { minTotalReviews: Number(minTotalReviews) }),
                ...(req.query.searchTerm && { searchTerm: req.query.searchTerm }),
            };
            const result = await public_service_1.PublicService.searchTutors(filters, paginationOptions);
            res.json({
                success: true,
                message: "Tutors retrieved successfully",
                data: result.data,
                meta: result.meta
            });
        }
        catch (error) {
            console.error("Error in searchTutors:", error);
            res.status(500).json({
                success: false,
                message: "Failed to search tutors",
                error: error instanceof Error ? error.message : "Unknown error"
            });
        }
    }
    static async getTutorById(req, res) {
        try {
            const { id } = req.params;
            const queryId = req.query.id;
            const tutorId = id || queryId;
            if (!tutorId) {
                return res.status(400).json({
                    success: false,
                    message: "Tutor ID is required"
                });
            }
            const tutor = await public_service_1.PublicService.getTutorById(tutorId);
            if (!tutor) {
                return res.status(404).json({
                    success: false,
                    message: "Tutor not found"
                });
            }
            res.json({
                success: true,
                message: "Tutor retrieved successfully",
                data: tutor
            });
        }
        catch (error) {
            res.status(500).json({
                success: false,
                message: "Failed to get tutor",
                error: error instanceof Error ? error.message : "Unknown error"
            });
        }
    }
    static async getTutorReviews(req, res) {
        try {
            const { tutorProfileId, page = 1, limit = 10 } = req.query;
            if (!tutorProfileId) {
                return res.status(400).json({
                    success: false,
                    message: "Tutor Profile ID is required"
                });
            }
            const paginationHelper = (0, paginationSortingHelper_1.default)({
                page: Number(page),
                limit: Number(limit),
                sortBy: "createdAt",
                sortOrder: "desc"
            });
            const paginationOptions = {
                skip: paginationHelper.skip,
                take: paginationHelper.limit,
                orderBy: {
                    [paginationHelper.sortBy]: paginationHelper.sortOrder
                }
            };
            const result = await public_service_1.PublicService.getTutorReviews(tutorProfileId, paginationOptions);
            res.json({
                success: true,
                message: "Reviews retrieved successfully",
                data: result.data,
                meta: result.meta
            });
        }
        catch (error) {
            res.status(500).json({
                success: false,
                message: "Failed to get reviews",
                error: error instanceof Error ? error.message : "Unknown error"
            });
        }
    }
    static async getFeaturedTutors(req, res) {
        try {
            const { page = 1, limit = 12 } = req.query;
            const paginationHelper = (0, paginationSortingHelper_1.default)({
                page: Number(page),
                limit: Number(limit),
                sortBy: "averageRating",
                sortOrder: "desc"
            });
            const paginationOptions = {
                skip: paginationHelper.skip,
                take: paginationHelper.limit,
                orderBy: {
                    [paginationHelper.sortBy]: paginationHelper.sortOrder
                }
            };
            const result = await public_service_1.PublicService.getFeaturedTutors(paginationOptions);
            res.json({
                success: true,
                message: "Featured tutors retrieved successfully",
                data: result.data,
                meta: result.meta
            });
        }
        catch (error) {
            res.status(500).json({
                success: false,
                message: "Failed to get featured tutors",
                error: error instanceof Error ? error.message : "Unknown error"
            });
        }
    }
    static async getCategories(req, res) {
        try {
            const result = await public_service_1.PublicService.getAllCategories();
            res.json({
                success: true,
                message: "Categories retrieved successfully",
                data: result
            });
        }
        catch (error) {
            res.status(500).json({
                success: false,
                message: "Failed to get categories",
                error: error instanceof Error ? error.message : "Unknown error"
            });
        }
    }
    static async getTutorAvailability(req, res) {
        try {
            const { id } = req.params;
            const { weekStartDate } = req.query;
            const result = await public_service_1.PublicService.getTutorAvailability(id, weekStartDate);
            res.json({
                success: true,
                message: "Tutor availability retrieved successfully",
                data: result
            });
        }
        catch (error) {
            res.status(500).json({
                success: false,
                message: "Failed to get tutor availability",
                error: error instanceof Error ? error.message : "Unknown error"
            });
        }
    }
    static async getTutorRatingStats(req, res) {
        try {
            const { id } = req.params;
            if (!id) {
                return res.status(400).json({
                    success: false,
                    message: "Tutor ID is required"
                });
            }
            const result = await public_service_1.PublicService.getTutorRatingStats(id);
            res.json({
                success: true,
                message: "Rating statistics retrieved successfully",
                data: result
            });
        }
        catch (error) {
            res.status(500).json({
                success: false,
                message: "Failed to get rating statistics",
                error: error instanceof Error ? error.message : "Unknown error"
            });
        }
    }
}
exports.PublicController = PublicController;
