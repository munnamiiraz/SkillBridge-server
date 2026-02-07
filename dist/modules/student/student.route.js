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
exports.StudentRoutes = void 0;
const express_1 = require("express");
const auth_1 = __importStar(require("../../middleware/auth"));
const student_controller_1 = require("./student.controller");
const router = (0, express_1.Router)();
router.get("/profile", (0, auth_1.default)(auth_1.UserRole.STUDENT), student_controller_1.StudentController.getProfile);
router.patch("/profile", (0, auth_1.default)(auth_1.UserRole.STUDENT), student_controller_1.StudentController.updateProfile);
router.post("/reviews", (0, auth_1.default)(auth_1.UserRole.STUDENT), student_controller_1.StudentController.createReview);
router.get("/reviews", (0, auth_1.default)(auth_1.UserRole.STUDENT), student_controller_1.StudentController.getReviews);
router.post("/bookings", (0, auth_1.default)(auth_1.UserRole.STUDENT), student_controller_1.StudentController.createBooking);
router.get("/bookings", (0, auth_1.default)(auth_1.UserRole.STUDENT), student_controller_1.StudentController.getBookings);
router.patch("/bookings/:bookingId/cancel", (0, auth_1.default)(auth_1.UserRole.STUDENT), student_controller_1.StudentController.cancelBooking);
router.get("/reviewable-bookings", (0, auth_1.default)(auth_1.UserRole.STUDENT), student_controller_1.StudentController.getReviewableBookings);
// Test route to check authentication
router.get("/test-auth", (0, auth_1.default)(auth_1.UserRole.STUDENT), (req, res) => {
    res.json({ success: true, user: req.user, message: "Authentication working!" });
});
exports.StudentRoutes = router;
