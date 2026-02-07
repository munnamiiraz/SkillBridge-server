import { Router } from "express";
import auth, { UserRole } from "../../middleware/auth.js";
import { StudentController } from "./student.controller.js";

const router = Router();

router.get("/profile", auth(UserRole.STUDENT), StudentController.getProfile);
router.patch("/profile", auth(UserRole.STUDENT), StudentController.updateProfile);
router.post("/reviews", auth(UserRole.STUDENT), StudentController.createReview);
router.get("/reviews", auth(UserRole.STUDENT), StudentController.getReviews);
router.post("/bookings", auth(UserRole.STUDENT), StudentController.createBooking);
router.get("/bookings", auth(UserRole.STUDENT), StudentController.getBookings);
router.patch("/bookings/:bookingId/cancel", auth(UserRole.STUDENT), StudentController.cancelBooking);
router.get("/reviewable-bookings", auth(UserRole.STUDENT), StudentController.getReviewableBookings);

// Test route to check authentication
router.get("/test-auth", auth(UserRole.STUDENT), (req, res) => {
  res.json({ success: true, user: req.user, message: "Authentication working!" });
});

export const StudentRoutes = router;
