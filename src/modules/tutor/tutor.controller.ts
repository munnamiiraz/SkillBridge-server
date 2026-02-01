// tutor.controller.ts
import { Request, Response, NextFunction } from "express";
import { TutorService } from "./tutor.service";
import { updateAvailabilitySlotsSchema } from "./tutor.validation";

const createProfile = async (req: Request, res: Response, next: NextFunction) => {
  try {
    
    if (!req.user) {
      return res.status(401).json({
        success: false,
        message: "User not authenticated"
      });
    }
    
    // Direct check without triggering auto-creation
    const { prisma } = await import("../../lib/prisma");
    const existingProfile = await prisma.tutor_profile.findUnique({
      where: { userId: req.user.id }
    });
    
    if (existingProfile) {
      // Profile exists, return it instead of error
      const fullProfile = await TutorService.getProfile(req.user.id);
      return res.status(200).json({
        success: true,
        message: "Tutor profile already exists",
        data: fullProfile
      });
    }
    
    const result = await TutorService.createProfile(req.user.id, req.body);
    
    res.status(201).json({
      success: true,
      message: "Tutor profile created successfully",
      data: result
    });
  } catch (error) {
    console.error('Error creating profile:', error);
    next(error);
  }
};

const updateProfile = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await TutorService.updateProfile(req.user!.id, req.body);
    
    res.status(200).json({
      success: true,
      message: "Tutor profile updated successfully",
      data: result
    });
  } catch (error) {
    next(error);
  }
};

const getProfile = async (req: Request, res: Response, next: NextFunction) => {
  try {
    if (!req.user) {
      return res.status(401).json({
        success: false,
        message: "User not authenticated"
      });
    }
    
    const result = await TutorService.getProfile(req.user.id);
    
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
  } catch (error) {
    console.error('Error in getProfile:', error);
    next(error);
  }
};

const getAvailabilitySlots = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { weekStartDate } = req.query;
    const result = await TutorService.getAvailabilitySlots(
      req.user!.id,
      weekStartDate as string | undefined
    );
    
    res.status(200).json({
      success: true,
      message: "Availability slots retrieved successfully",
      data: result
    });
  } catch (error) {
    next(error);
  }
};

export const updateAvailabilitySlots = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // Validate the request body
    const validatedSlots = updateAvailabilitySlotsSchema.parse(req.body);
    
    // Update the availability slots
    const result = await TutorService.updateAvailabilitySlots(
      req.user!.id,
      validatedSlots
    );

    res.status(200).json({
      success: true,
      message: "Availability slots updated successfully",
      data: result
    });
  } catch (error) {
    next(error);
  }
};


const getTeachingSessions = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { page = 1, limit = 10, status } = req.query;
    const result = await TutorService.getTeachingSessions(req.user!.id, {
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
  } catch (error) {
    next(error);
  }
};

const getReviews = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { page, limit, rating } = req.query;

    const pageNumber = Number(page) > 0 ? Number(page) : 1;
    const limitNumber = Number(limit) > 0 ? Number(limit) : 10;
    
    // Parse rating safely - if invalid number, treat as undefined
    let ratingNumber: number | undefined = undefined;
    if (rating) {
      const parsed = Number(rating);
      if (!isNaN(parsed) && parsed >= 1 && parsed <= 5) {
        ratingNumber = parsed;
      }
    }

    const result = await TutorService.getReviews(req.user!.id, {
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
  } catch (error) {
    console.error("Error in getReviews controller:", error);
    next(error);
  }
};

const getRatingStats = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await TutorService.getRatingStats(req.user!.id);
    
    res.status(200).json({
      success: true,
      message: "Rating statistics retrieved successfully",
      data: result
    });
  } catch (error) {
    next(error);
  }
};

const updateBookingStatus = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { bookingId } = req.params;
    const result = await TutorService.updateBookingStatus(req.user!.id, bookingId as string, req.body);
    
    res.status(200).json({
      success: true,
      message: "Booking status updated successfully",
      data: result
    });
  } catch (error) {
    next(error);
  }
};

export const TutorController = { 
  createProfile, 
  updateProfile, 
  getProfile, 
  getAvailabilitySlots, 
  updateAvailabilitySlots,
  getTeachingSessions, 
  getReviews, 
  getRatingStats, 
  updateBookingStatus 
};