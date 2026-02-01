// tutor.routes.ts
import { Router } from "express";
import auth, { UserRole } from "../../middleware/auth";
import { TutorController } from "./tutor.controller";

const router = Router();

router.post("/profile", auth(), TutorController.createProfile);
router.get("/profile", auth(), TutorController.getProfile);
router.patch("/profile", auth(UserRole.TUTOR), TutorController.updateProfile);

// Availability slots routes - simplified to GET and PUT only
router.get("/availability-slots", auth(UserRole.TUTOR), TutorController.getAvailabilitySlots);

router.put(
  "/availability-slots",
  auth(UserRole.TUTOR),
  // validateRequest(updateAvailabilitySlotsSchema),
  TutorController.updateAvailabilitySlots
);

// Teaching sessions routes
router.get("/sessions", auth(UserRole.TUTOR), TutorController.getTeachingSessions);
router.patch("/sessions/:bookingId/status", auth(UserRole.TUTOR), TutorController.updateBookingStatus);

// Reviews and ratings routes
router.get("/reviews", auth(UserRole.TUTOR), TutorController.getReviews);
router.get("/rating-stats", auth(UserRole.TUTOR), TutorController.getRatingStats);


export const TutorRoutes = router;