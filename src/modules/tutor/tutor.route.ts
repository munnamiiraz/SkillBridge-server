import { Router } from "express";
import auth, { UserRole } from "../../middleware/auth";
import { TutorController } from "./tutor.controller";

const router = Router();

router.post("/profile", auth(UserRole.STUDENT), TutorController.createProfile);
router.get("/profile", auth(UserRole.TUTOR), TutorController.getProfile);
router.patch("/profile", auth(UserRole.TUTOR), TutorController.updateProfile);

router.get("/availability-slots", auth(UserRole.TUTOR), TutorController.getAvailabilitySlots);

router.put(
  "/availability-slots",
  auth(UserRole.TUTOR),
  TutorController.updateAvailabilitySlots
);

router.get("/sessions", auth(UserRole.TUTOR), TutorController.getTeachingSessions);
router.patch("/sessions/:bookingId/status", auth(UserRole.TUTOR), TutorController.updateBookingStatus);

router.get("/reviews", auth(UserRole.TUTOR), TutorController.getReviews);
router.get("/rating-stats", auth(UserRole.TUTOR), TutorController.getRatingStats);
router.get("/earnings-stats", auth(UserRole.TUTOR), TutorController.getEarningsStats);
router.post("/request-verification", auth(UserRole.TUTOR), TutorController.requestVerification);

export const TutorRoutes = router;