import { Router } from "express";
import { AdminController } from "./admin.controller";
import auth, { UserRole } from "../../../middleware/auth";

const router = Router();

router.post("/login", AdminController.login);

router.get("/users", auth(UserRole.ADMIN, UserRole.SUPER_ADMIN), AdminController.getUsers);
router.patch("/users/:userId/status", auth(UserRole.ADMIN, UserRole.SUPER_ADMIN), AdminController.updateUserStatus);
router.patch("/users/:userId/ban", auth(UserRole.ADMIN, UserRole.SUPER_ADMIN), AdminController.banUser);
router.patch("/users/:userId/unban", auth(UserRole.ADMIN, UserRole.SUPER_ADMIN), AdminController.unbanUser);

router.get("/bookings", auth(UserRole.ADMIN), AdminController.getAllBookings);
router.patch("/bookings/:bookingId/cancel", auth(UserRole.ADMIN), AdminController.cancelBooking);

router.get("/stats", auth(UserRole.ADMIN, UserRole.SUPER_ADMIN), AdminController.getPlatformStats);
router.patch("/verify-tutor/:tutorProfileId", auth(UserRole.ADMIN, UserRole.SUPER_ADMIN), AdminController.verifyTutor);

export const AdminRoutes = router;
