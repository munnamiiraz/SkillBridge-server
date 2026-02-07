"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.TutorRoutes = void 0;
// tutor.routes.ts
const express_1 = require("express");
const auth_1 = __importStar(require("../../middleware/auth"));
const tutor_controller_1 = require("./tutor.controller");
const router = (0, express_1.Router)();
router.post("/profile", (0, auth_1.default)(), tutor_controller_1.TutorController.createProfile);
router.get("/profile", (0, auth_1.default)(), tutor_controller_1.TutorController.getProfile);
router.patch("/profile", (0, auth_1.default)(auth_1.UserRole.TUTOR), tutor_controller_1.TutorController.updateProfile);
// Availability slots routes - simplified to GET and PUT only
router.get("/availability-slots", (0, auth_1.default)(auth_1.UserRole.TUTOR), tutor_controller_1.TutorController.getAvailabilitySlots);
router.put("/availability-slots", (0, auth_1.default)(auth_1.UserRole.TUTOR), 
// validateRequest(updateAvailabilitySlotsSchema),
tutor_controller_1.TutorController.updateAvailabilitySlots);
// Teaching sessions routes
router.get("/sessions", (0, auth_1.default)(auth_1.UserRole.TUTOR), tutor_controller_1.TutorController.getTeachingSessions);
router.patch("/sessions/:bookingId/status", (0, auth_1.default)(auth_1.UserRole.TUTOR), tutor_controller_1.TutorController.updateBookingStatus);
// Reviews and ratings routes
router.get("/reviews", (0, auth_1.default)(auth_1.UserRole.TUTOR), tutor_controller_1.TutorController.getReviews);
router.get("/rating-stats", (0, auth_1.default)(auth_1.UserRole.TUTOR), tutor_controller_1.TutorController.getRatingStats);
exports.TutorRoutes = router;
