"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PublicRoutes = void 0;
const express_1 = require("express");
const public_controller_1 = require("./public.controller");
const router = (0, express_1.Router)();
router.use((req, res, next) => {
    console.log('Public Route Hit:', req.method, req.url);
    next();
});
router.get("/tutors/search", public_controller_1.PublicController.searchTutors);
router.get("/tutors/featured", public_controller_1.PublicController.getFeaturedTutors);
router.get("/tutors/:id", public_controller_1.PublicController.getTutorById);
router.get("/tutors/:id/availability", public_controller_1.PublicController.getTutorAvailability);
router.get("/tutors/:id/rating-stats", public_controller_1.PublicController.getTutorRatingStats);
router.get("/reviews", public_controller_1.PublicController.getTutorReviews);
router.get("/categories", public_controller_1.PublicController.getCategories);
exports.PublicRoutes = router;
