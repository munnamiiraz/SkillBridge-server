import { Router } from "express";
import auth, { UserRole } from "../../middleware/auth";
import { TutorController } from "./tutor.controller";

const router = Router();

router.post("/profile", auth(UserRole.TUTOR), TutorController.createProfile);
router.get("/profile", auth(UserRole.TUTOR), TutorController.getProfile);
router.patch("/profile", auth(UserRole.TUTOR), TutorController.updateProfile);

// Availability slots routes
router.post("/availability-slots", auth(UserRole.TUTOR), TutorController.createAvailabilitySlot);
router.get("/availability-slots", auth(UserRole.TUTOR), TutorController.getAvailabilitySlots);
router.patch("/availability-slots/:slotId", auth(UserRole.TUTOR), TutorController.updateAvailabilitySlot);
router.delete("/availability-slots/:slotId", auth(UserRole.TUTOR), TutorController.deleteAvailabilitySlot);

// Teaching sessions routes
router.get("/sessions", auth(UserRole.TUTOR), TutorController.getTeachingSessions);

// Reviews and ratings routes
router.get("/reviews", auth(UserRole.TUTOR), TutorController.getReviews);
router.get("/rating-stats", auth(UserRole.TUTOR), TutorController.getRatingStats);

export const TutorRoutes = router;