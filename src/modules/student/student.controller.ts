import { Request, Response, NextFunction } from "express";
import { StudentService } from "./student.service";

const updateProfile = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { name, image, address } = req.body;
    const result = await StudentService.updateProfile(req.user!.id, { name, image, address });
    
    res.status(200).json({
      success: true,
      message: "Profile updated successfully",
      data: result
    });
  } catch (error) {
    next(error);
  }
};

const getProfile = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await StudentService.getProfile(req.user!.id);
    
    res.status(200).json({
      success: true,
      message: "Profile retrieved successfully",
      data: result
    });
  } catch (error) {
    next(error);
  }
};

const createReview = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { bookingId, rating, comment } = req.body;
    const result = await StudentService.createReview(req.user!.id, { bookingId, rating, comment });
    
    res.status(201).json({
      success: true,
      message: "Review created successfully",
      data: result
    });
  } catch (error) {
    next(error);
  }
};

export const StudentController = { updateProfile, getProfile, createReview };
