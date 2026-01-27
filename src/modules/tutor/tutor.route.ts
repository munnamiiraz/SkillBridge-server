import { Router } from "express";
import auth, { UserRole } from "../../middleware/auth";
import { TutorController } from "./tutor.controller";

const router = Router();

router.post("/profile", auth(UserRole.TUTOR), TutorController.createProfile);
router.get("/profile", auth(UserRole.TUTOR), TutorController.getProfile);
router.patch("/profile", auth(UserRole.TUTOR), TutorController.updateProfile);

export const TutorRoutes = router;