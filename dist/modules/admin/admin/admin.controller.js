"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminController = void 0;
const admin_service_1 = require("./admin.service");
const prisma_1 = require("../../../lib/prisma");
const login = async (req, res, next) => {
    try {
        const result = await admin_service_1.AdminService.login(req.body);
        res.status(200).json({
            success: true,
            message: "Admin logged in successfully",
            data: result
        });
    }
    catch (error) {
        next(error);
    }
};
const getUsers = async (req, res, next) => {
    try {
        const { page = 1, limit = 10, role, status } = req.query;
        const result = await admin_service_1.AdminService.getUsers({
            page: Number(page),
            limit: Number(limit),
            role: role,
            status: status
        });
        res.status(200).json({
            success: true,
            message: "Users retrieved successfully",
            data: result.data,
            meta: result.meta
        });
    }
    catch (error) {
        next(error);
    }
};
const updateUserStatus = async (req, res, next) => {
    try {
        const { userId } = req.params;
        const result = await admin_service_1.AdminService.updateUserStatus(userId, req.body);
        res.status(200).json({
            success: true,
            message: "User status updated successfully",
            data: result
        });
    }
    catch (error) {
        next(error);
    }
};
const banUser = async (req, res, next) => {
    try {
        const { userId } = req.params;
        const { banReason } = req.body;
        if (!banReason || banReason.trim().length === 0) {
            return res.status(400).json({
                success: false,
                message: "Ban reason is required"
            });
        }
        const result = await admin_service_1.AdminService.updateUserStatus(userId, {
            status: "BANNED",
            banReason: banReason.trim()
        });
        res.status(200).json({
            success: true,
            message: "User banned successfully",
            data: result
        });
    }
    catch (error) {
        next(error);
    }
};
const unbanUser = async (req, res, next) => {
    try {
        const { userId } = req.params;
        const result = await admin_service_1.AdminService.updateUserStatus(userId, {
            status: "ACTIVE"
        });
        res.status(200).json({
            success: true,
            message: "User unbanned successfully",
            data: result
        });
    }
    catch (error) {
        next(error);
    }
};
const getAllBookings = async (req, res, next) => {
    try {
        // First, let's check if there are any bookings at all
        const totalBookings = await prisma_1.prisma.booking.count();
        if (totalBookings === 0) {
            return res.status(200).json({
                success: true,
                message: "No bookings found in database",
                data: [],
                meta: {
                    total: 0,
                    page: 1,
                    limit: 10,
                    totalPages: 0
                }
            });
        }
        const { page = 1, limit = 10, status } = req.query;
        const result = await admin_service_1.AdminService.getAllBookings({
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
        console.error('Error in getAllBookings controller:', error);
        next(error);
    }
};
const getPlatformStats = async (req, res, next) => {
    try {
        const result = await admin_service_1.AdminService.getPlatformStats();
        res.status(200).json({
            success: true,
            message: "Platform statistics retrieved successfully",
            data: result
        });
    }
    catch (error) {
        next(error);
    }
};
const cancelBooking = async (req, res, next) => {
    try {
        const { bookingId } = req.params;
        const { reason, refundAmount } = req.body;
        const result = await admin_service_1.AdminService.cancelBooking(bookingId, {
            reason,
            refundAmount
        });
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
exports.AdminController = { login, getUsers, updateUserStatus, banUser, unbanUser, getAllBookings, cancelBooking, getPlatformStats };
