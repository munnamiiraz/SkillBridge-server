import { Router } from "express";
import { AdminController } from "./admin.controller";
import auth, { UserRole } from "../../middleware/auth";

const router = Router();

router.post("/login", AdminController.login);

// User management
router.get("/users", auth(UserRole.ADMIN), AdminController.getUsers);
router.patch("/users/:userId/status", auth(UserRole.ADMIN), AdminController.updateUserStatus);
router.patch("/users/:userId/ban", auth(UserRole.ADMIN), AdminController.banUser);
router.patch("/users/:userId/unban", auth(UserRole.ADMIN), AdminController.unbanUser);

// Booking management
router.get("/bookings", auth(UserRole.ADMIN), AdminController.getAllBookings);

// Platform statistics
router.get("/stats", auth(UserRole.ADMIN), AdminController.getPlatformStats);

// Category management
router.get("/categories", auth(UserRole.ADMIN), AdminController.getCategories);
router.post("/categories", auth(UserRole.ADMIN), AdminController.createCategory);
router.patch("/categories/:categoryId", auth(UserRole.ADMIN), AdminController.updateCategory);
router.delete("/categories/:categoryId", auth(UserRole.ADMIN), AdminController.deleteCategory);

export const AdminRoutes = router;
