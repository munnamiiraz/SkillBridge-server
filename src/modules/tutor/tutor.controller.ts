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

export const TutorController = { createProfile, updateProfile, getProfile };