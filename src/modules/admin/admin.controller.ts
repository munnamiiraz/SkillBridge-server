import { Request, Response, NextFunction } from "express";
import { AdminService } from "./admin.service";

const login = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await AdminService.login(req.body);
    
    res.status(200).json({
      success: true,
      message: "Admin logged in successfully",
      data: result
    });
  } catch (error) {
    next(error);
  }
};

const getUsers = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { page = 1, limit = 10, role, status } = req.query;
    const result = await AdminService.getUsers({
      page: Number(page),
      limit: Number(limit),
      role: role as string,
      status: status as string
    });
    
    res.status(200).json({
      success: true,
      message: "Users retrieved successfully",
      data: result.data,
      meta: result.meta
    });
  } catch (error) {
    next(error);
  }
};

const updateUserStatus = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { userId } = req.params;
    const result = await AdminService.updateUserStatus(userId, req.body);
    
    res.status(200).json({
      success: true,
      message: "User status updated successfully",
      data: result
    });
  } catch (error) {
    next(error);
  }
};

const banUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { userId } = req.params;
    const { banReason } = req.body;
    
    if (!banReason || banReason.trim().length === 0) {
      return res.status(400).json({
        success: false,
        message: "Ban reason is required"
      });
    }
    
    const result = await AdminService.updateUserStatus(userId, {
      status: "BANNED",
      banReason: banReason.trim()
    });
    
    res.status(200).json({
      success: true,
      message: "User banned successfully",
      data: result
    });
  } catch (error) {
    next(error);
  }
};

const unbanUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { userId } = req.params;
    
    const result = await AdminService.updateUserStatus(userId, {
      status: "ACTIVE"
    });
    
    res.status(200).json({
      success: true,
      message: "User unbanned successfully",
      data: result
    });
  } catch (error) {
    next(error);
  }
};

const getAllBookings = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { page = 1, limit = 10, status } = req.query;
    const result = await AdminService.getAllBookings({
      page: Number(page),
      limit: Number(limit),
      status: status as string
    });
    
    res.status(200).json({
      success: true,
      message: "Bookings retrieved successfully",
      data: result.data,
      meta: result.meta
    });
  } catch (error) {
    next(error);
  }
};

const getPlatformStats = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await AdminService.getPlatformStats();
    
    res.status(200).json({
      success: true,
      message: "Platform statistics retrieved successfully",
      data: result
    });
  } catch (error) {
    next(error);
  }
};

export const AdminController = { login, getUsers, updateUserStatus, banUser, unbanUser, getAllBookings, getPlatformStats };
