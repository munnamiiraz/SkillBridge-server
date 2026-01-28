import { Request, Response, NextFunction } from "express";
import { TutorService } from "./tutor.service";

const createProfile = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await TutorService.createProfile(req.user!.id, req.body);
    
    res.status(201).json({
      success: true,
      message: "Tutor profile created successfully",
      data: result
    });
  } catch (error) {
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
    const result = await TutorService.getProfile(req.user!.id);
    
    res.status(200).json({
      success: true,
      message: "Tutor profile retrieved successfully",
      data: result
    });
  } catch (error) {
    next(error);
  }
};

const createAvailabilitySlot = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await TutorService.createAvailabilitySlot(req.user!.id, req.body);
    
    res.status(201).json({
      success: true,
      message: "Availability slot created successfully",
      data: result
    });
  } catch (error) {
    next(error);
  }
};

const updateAvailabilitySlot = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const slotId = req.params.slotId as string;
    const result = await TutorService.updateAvailabilitySlot(req.user!.id, slotId, req.body);
    
    res.status(200).json({
      success: true,
      message: "Availability slot updated successfully",
      data: result
    });
  } catch (error) {
    next(error);
  }
};

const getAvailabilitySlots = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await TutorService.getAvailabilitySlots(req.user!.id);
    
    res.status(200).json({
      success: true,
      message: "Availability slots retrieved successfully",
      data: result
    });
  } catch (error) {
    next(error);
  }
};

const deleteAvailabilitySlot = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const slotId = req.params.slotId as string;
    await TutorService.deleteAvailabilitySlot(req.user!.id, slotId);
    
    res.status(200).json({
      success: true,
      message: "Availability slot deleted successfully"
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
    const { page = 1, limit = 10, rating } = req.query;
    const result = await TutorService.getReviews(req.user!.id, {
      page: Number(page),
      limit: Number(limit),
      ...(rating && { rating: Number(rating) })
    });
    
    res.status(200).json({
      success: true,
      message: "Reviews retrieved successfully",
      data: result.data,
      meta: result.meta
    });
  } catch (error) {
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

export const TutorController = { createProfile, updateProfile, getProfile, createAvailabilitySlot, updateAvailabilitySlot, getAvailabilitySlots, deleteAvailabilitySlot, getTeachingSessions, getReviews, getRatingStats, updateBookingStatus };