import { Router } from "express";
import auth, { UserRole } from "../../middleware/auth";
import { StudentController } from "./student.controller";

const router = Router();

router.get("/profile", auth(UserRole.STUDENT), StudentController.getProfile);
router.patch("/profile", auth(UserRole.STUDENT), StudentController.updateProfile);
router.post("/reviews", auth(UserRole.STUDENT), StudentController.createReview);

// Test route to check authentication
router.get("/test-auth", auth(UserRole.STUDENT), (req, res) => {
  res.json({ success: true, user: req.user, message: "Authentication working!" });
});

export const StudentRoutes = router;
