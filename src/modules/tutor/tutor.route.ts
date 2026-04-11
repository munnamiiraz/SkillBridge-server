import { Router } from "express";
import auth, { UserRole } from "../../middleware/auth";
import { TutorController } from "./tutor.controller";

const router = Router();

router.post("/profile", auth(UserRole.STUDENT), TutorController.createProfile);
router.get("/profile", auth(UserRole.TUTOR, UserRole.VERIFIED_TUTOR), TutorController.getProfile);
router.patch("/profile", auth(UserRole.TUTOR, UserRole.VERIFIED_TUTOR), TutorController.updateProfile);

router.get("/availability-slots", auth(UserRole.TUTOR, UserRole.VERIFIED_TUTOR), TutorController.getAvailabilitySlots);

router.put(
  "/availability-slots",
  auth(UserRole.TUTOR, UserRole.VERIFIED_TUTOR),
  TutorController.updateAvailabilitySlots
);

router.get("/sessions", auth(UserRole.TUTOR, UserRole.VERIFIED_TUTOR), TutorController.getTeachingSessions);
router.patch("/sessions/:bookingId/status", auth(UserRole.TUTOR, UserRole.VERIFIED_TUTOR), TutorController.updateBookingStatus);

router.get("/reviews", auth(UserRole.TUTOR, UserRole.VERIFIED_TUTOR), TutorController.getReviews);
router.get("/rating-stats", auth(UserRole.TUTOR, UserRole.VERIFIED_TUTOR), TutorController.getRatingStats);
router.get("/earnings-stats", auth(UserRole.TUTOR, UserRole.VERIFIED_TUTOR), TutorController.getEarningsStats);
router.post("/request-verification", auth(UserRole.TUTOR, UserRole.VERIFIED_TUTOR), TutorController.requestVerification);
router.get("/analytics", auth(UserRole.VERIFIED_TUTOR), TutorController.getTutorAnalytics);
router.get("/market-intelligence", auth(UserRole.VERIFIED_TUTOR), TutorController.getMarketIntelligence);

export const TutorRoutes = router;