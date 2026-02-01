import { Request, Response } from "express";
import { PublicService } from "./public.service";
import paginationSortingHelper from "../../helpers/paginationSortingHelper";

export class PublicController {
  static async searchTutors(req: Request, res: Response) {
    try {
      const { page = 1, limit = 10, subject, category, minRating, maxRating, minPrice, maxPrice, minTotalReviews, sortBy = "averageRating", sortOrder = "desc" } = req.query;

      const paginationHelper = paginationSortingHelper({
        page: Number(page),
        limit: Number(limit),
        sortBy: sortBy as string,
        sortOrder: sortOrder as "asc" | "desc"
      });

      const paginationOptions = {
        skip: paginationHelper.skip,
        take: paginationHelper.limit,
        orderBy: {
          [paginationHelper.sortBy]: paginationHelper.sortOrder as "asc" | "desc"
        }
      };

      const filters = {
        ...(subject && { subject: subject as string }),
        ...(category && { category: category as string }),
        ...(minRating && { minRating: Number(minRating) }),
        ...(maxRating && { maxRating: Number(maxRating) }),
        ...(minPrice && { minPrice: Number(minPrice) }),
        ...(maxPrice && { maxPrice: Number(maxPrice) }),
        ...(minTotalReviews && { minTotalReviews: Number(minTotalReviews) }),
        ...(req.query.searchTerm && { searchTerm: req.query.searchTerm as string }),
      };

      const result = await PublicService.searchTutors(filters, paginationOptions);

      res.json({
        success: true,
        message: "Tutors retrieved successfully",
        data: result.data,
        meta: result.meta
      });
    } catch (error) {
      console.error("Error in searchTutors:", error);
      res.status(500).json({
        success: false,
        message: "Failed to search tutors",
        error: error instanceof Error ? error.message : "Unknown error"
      });
    }
  }

  static async getTutorById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const queryId = req.query.id as string;
      const tutorId = id || queryId;
      
      if (!tutorId) {
        return res.status(400).json({
          success: false,
          message: "Tutor ID is required"
        });
      }

      const tutor = await PublicService.getTutorById(tutorId as string);

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
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Failed to get tutor",
        error: error instanceof Error ? error.message : "Unknown error"
      });
    }
  }

  static async getTutorReviews(req: Request, res: Response) {
    try {
      const { tutorProfileId, page = 1, limit = 10 } = req.query;
      
      if (!tutorProfileId) {
        return res.status(400).json({
          success: false,
          message: "Tutor Profile ID is required"
        });
      }

      const paginationHelper = paginationSortingHelper({
        page: Number(page),
        limit: Number(limit),
        sortBy: "createdAt",
        sortOrder: "desc"
      });

      const paginationOptions = {
        skip: paginationHelper.skip,
        take: paginationHelper.limit,
        orderBy: {
          [paginationHelper.sortBy]: paginationHelper.sortOrder as "asc" | "desc"
        }
      };

      const result = await PublicService.getTutorReviews(tutorProfileId as string, paginationOptions);

      res.json({
        success: true,
        message: "Reviews retrieved successfully",
        data: result.data,
        meta: result.meta
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Failed to get reviews",
        error: error instanceof Error ? error.message : "Unknown error"
      });
    }
  }

  static async getFeaturedTutors(req: Request, res: Response) {
    try {
      const { page = 1, limit = 12 } = req.query;

      const paginationHelper = paginationSortingHelper({
        page: Number(page),
        limit: Number(limit),
        sortBy: "averageRating",
        sortOrder: "desc"
      });

      const paginationOptions = {
        skip: paginationHelper.skip,
        take: paginationHelper.limit,
        orderBy: {
          [paginationHelper.sortBy]: paginationHelper.sortOrder as "asc" | "desc"
        }
      };

      const result = await PublicService.getFeaturedTutors(paginationOptions);

      res.json({
        success: true,
        message: "Featured tutors retrieved successfully",
        data: result.data,
        meta: result.meta
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Failed to get featured tutors",
        error: error instanceof Error ? error.message : "Unknown error"
      });
    }
  }

  static async getCategories(req: Request, res: Response) {
    try {
      const result = await PublicService.getAllCategories();
      res.json({
        success: true,
        message: "Categories retrieved successfully",
        data: result
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Failed to get categories",
        error: error instanceof Error ? error.message : "Unknown error"
      });
    }
  }

  static async getTutorAvailability(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { weekStartDate } = req.query;
      
      const result = await PublicService.getTutorAvailability(
        id as string, 
        weekStartDate as string | undefined
      );

      res.json({
        success: true,
        message: "Tutor availability retrieved successfully",
        data: result
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Failed to get tutor availability",
        error: error instanceof Error ? error.message : "Unknown error"
      });
    }
  }
}