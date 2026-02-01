import { Router } from "express";
import { PublicController } from "./public.controller";

const router = Router();
 
router.use((req, res, next) => {
  console.log('Public Route Hit:', req.method, req.url);
  next();
});

router.get("/tutors/search", PublicController.searchTutors);
router.get("/tutors/featured", PublicController.getFeaturedTutors);
router.get("/tutors/:id", PublicController.getTutorById);
router.get("/tutors/:id/availability", PublicController.getTutorAvailability);
router.get("/reviews", PublicController.getTutorReviews);
router.get("/categories", PublicController.getCategories);

export const PublicRoutes = router;