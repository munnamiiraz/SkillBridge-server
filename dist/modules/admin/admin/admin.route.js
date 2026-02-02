import { Router } from "express";
import { AdminController } from "./admin.controller";
import auth, { UserRole } from "../../../middleware/auth";
const router = Router();
router.post("/login", AdminController.login);
// User management
router.get("/users", auth(UserRole.ADMIN), AdminController.getUsers);
router.patch("/users/:userId/status", auth(UserRole.ADMIN), AdminController.updateUserStatus);
router.patch("/users/:userId/ban", auth(UserRole.ADMIN), AdminController.banUser);
router.patch("/users/:userId/unban", auth(UserRole.ADMIN), AdminController.unbanUser);
// Booking management
router.get("/bookings", AdminController.getAllBookings);
router.patch("/bookings/:bookingId/cancel", auth(UserRole.ADMIN), AdminController.cancelBooking);
// Platform statistics
router.get("/stats", auth(UserRole.ADMIN), AdminController.getPlatformStats);
export const AdminRoutes = router;
//# sourceMappingURL=admin.route.js.map