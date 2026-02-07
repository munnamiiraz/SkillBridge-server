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
exports.CategoryRoutes = void 0;
// category.routes.ts
const express_1 = require("express");
const auth_1 = __importStar(require("../../../middleware/auth"));
const category_controller_1 = require("./category.controller");
const router = (0, express_1.Router)();
// ============= CATEGORY ROUTES =============
router.post("/categories", (0, auth_1.default)(auth_1.UserRole.ADMIN), category_controller_1.CategoryController.createCategory);
router.get("/categories", category_controller_1.CategoryController.getAllCategories); // Public route
router.get("/categories/:categoryId", category_controller_1.CategoryController.getCategory); // Public route
router.patch("/categories/:categoryId", (0, auth_1.default)(auth_1.UserRole.ADMIN), category_controller_1.CategoryController.updateCategory);
router.delete("/categories/:categoryId", (0, auth_1.default)(auth_1.UserRole.ADMIN), category_controller_1.CategoryController.deleteCategory);
// ============= SUBJECT ROUTES =============
router.post("/subjects", (0, auth_1.default)(auth_1.UserRole.ADMIN), category_controller_1.CategoryController.createSubject);
router.get("/subjects", category_controller_1.CategoryController.getAllSubjects); // Public route
router.get("/subjects/:subjectId", category_controller_1.CategoryController.getSubject); // Public route
router.patch("/subjects/:subjectId", (0, auth_1.default)(auth_1.UserRole.ADMIN), category_controller_1.CategoryController.updateSubject);
router.delete("/subjects/:subjectId", (0, auth_1.default)(auth_1.UserRole.ADMIN), category_controller_1.CategoryController.deleteSubject);
exports.CategoryRoutes = router;
