import { Router } from "express";
import { PublicController } from "./public.controller";

const router = Router();

router.get("/tutors/search", PublicController.searchTutors);
router.get("/tutors", PublicController.getTutorById);

export const PublicRoutes = router;