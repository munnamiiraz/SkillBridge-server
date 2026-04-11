import { Router } from "express";
import { AdminController } from "./admin.controller";
import auth, { UserRole } from "../../../middleware/auth";

const router = Router();

router.post("/login", AdminController.login);

router.get("/users", auth(UserRole.ADMIN, UserRole.SUPER_ADMIN), AdminController.getUsers);
router.patch("/users/:userId/status", auth(UserRole.SUPER_ADMIN), AdminController.updateUserStatus);
router.patch("/users/:userId/ban", auth(UserRole.SUPER_ADMIN), AdminController.banUser);
router.patch("/users/:userId/unban", auth(UserRole.SUPER_ADMIN), AdminController.unbanUser);

router.get("/bookings", auth(UserRole.ADMIN, UserRole.SUPER_ADMIN), AdminController.getAllBookings);
router.patch("/bookings/:bookingId/cancel", auth(UserRole.SUPER_ADMIN), AdminController.cancelBooking);

router.get("/stats", auth(UserRole.ADMIN, UserRole.SUPER_ADMIN), AdminController.getPlatformStats);
router.patch("/verify-tutor/:tutorProfileId", auth(UserRole.SUPER_ADMIN), AdminController.verifyTutor);

router.get("/profile", auth(UserRole.ADMIN, UserRole.SUPER_ADMIN), AdminController.getProfile);
router.patch("/profile", auth(UserRole.ADMIN, UserRole.SUPER_ADMIN), AdminController.updateProfile);

// Knowledge Base Management (Super Admin Only)
router.get("/kb", auth(UserRole.SUPER_ADMIN), AdminController.getAllKnowledge);
router.post("/kb", auth(UserRole.SUPER_ADMIN), AdminController.addKnowledge);
router.delete("/kb/:id", auth(UserRole.SUPER_ADMIN), AdminController.deleteKnowledge);

export const AdminRoutes = router;
