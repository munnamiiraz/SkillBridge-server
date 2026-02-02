// category.routes.ts
import { Router } from "express";
import auth, { UserRole } from "../../../middleware/auth";
import { CategoryController } from "./category.controller";
const router = Router();
// ============= CATEGORY ROUTES =============
router.post("/categories", auth(UserRole.ADMIN), CategoryController.createCategory);
router.get("/categories", CategoryController.getAllCategories); // Public route
router.get("/categories/:categoryId", CategoryController.getCategory); // Public route
router.patch("/categories/:categoryId", auth(UserRole.ADMIN), CategoryController.updateCategory);
router.delete("/categories/:categoryId", auth(UserRole.ADMIN), CategoryController.deleteCategory);
// ============= SUBJECT ROUTES =============
router.post("/subjects", auth(UserRole.ADMIN), CategoryController.createSubject);
router.get("/subjects", CategoryController.getAllSubjects); // Public route
router.get("/subjects/:subjectId", CategoryController.getSubject); // Public route
router.patch("/subjects/:subjectId", auth(UserRole.ADMIN), CategoryController.updateSubject);
router.delete("/subjects/:subjectId", auth(UserRole.ADMIN), CategoryController.deleteSubject);
export const CategoryRoutes = router;
//# sourceMappingURL=category.routes.js.map