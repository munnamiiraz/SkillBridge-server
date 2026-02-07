"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryController = void 0;
const category_service_1 = require("./category.service");
// ============= CATEGORY CONTROLLERS =============
const createCategory = async (req, res, next) => {
    try {
        const result = await category_service_1.CategoryService.createCategory(req.body);
        res.status(201).json({
            success: true,
            message: "Category created successfully",
            data: result
        });
    }
    catch (error) {
        next(error);
    }
};
const updateCategory = async (req, res, next) => {
    try {
        const { categoryId } = req.params;
        const result = await category_service_1.CategoryService.updateCategory(categoryId, req.body);
        res.status(200).json({
            success: true,
            message: "Category updated successfully",
            data: result
        });
    }
    catch (error) {
        next(error);
    }
};
const getCategory = async (req, res, next) => {
    try {
        const { categoryId } = req.params;
        const result = await category_service_1.CategoryService.getCategory(categoryId);
        res.status(200).json({
            success: true,
            message: "Category retrieved successfully",
            data: result
        });
    }
    catch (error) {
        next(error);
    }
};
const getAllCategories = async (req, res, next) => {
    try {
        const { status, search } = req.query;
        const filters = {};
        if (status && typeof status === 'string') {
            filters.status = status;
        }
        if (search && typeof search === 'string') {
            filters.search = search;
        }
        const result = await category_service_1.CategoryService.getAllCategories(filters);
        res.status(200).json({
            success: true,
            message: "Categories retrieved successfully",
            data: result
        });
    }
    catch (error) {
        next(error);
    }
};
const deleteCategory = async (req, res, next) => {
    try {
        const { categoryId } = req.params;
        const result = await category_service_1.CategoryService.deleteCategory(categoryId);
        res.status(200).json({
            success: true,
            message: result.message
        });
    }
    catch (error) {
        next(error);
    }
};
// ============= SUBJECT CONTROLLERS =============
const createSubject = async (req, res, next) => {
    try {
        const result = await category_service_1.CategoryService.createSubject(req.body);
        res.status(201).json({
            success: true,
            message: "Subject created successfully",
            data: result
        });
    }
    catch (error) {
        next(error);
    }
};
const updateSubject = async (req, res, next) => {
    try {
        const { subjectId } = req.params;
        const result = await category_service_1.CategoryService.updateSubject(subjectId, req.body);
        res.status(200).json({
            success: true,
            message: "Subject updated successfully",
            data: result
        });
    }
    catch (error) {
        next(error);
    }
};
const getSubject = async (req, res, next) => {
    try {
        const { subjectId } = req.params;
        const result = await category_service_1.CategoryService.getSubject(subjectId);
        res.status(200).json({
            success: true,
            message: "Subject retrieved successfully",
            data: result
        });
    }
    catch (error) {
        next(error);
    }
};
const getAllSubjects = async (req, res, next) => {
    try {
        const { categoryId, search } = req.query;
        const filters = {};
        if (categoryId && typeof categoryId === 'string') {
            filters.categoryId = categoryId;
        }
        if (search && typeof search === 'string') {
            filters.search = search;
        }
        const result = await category_service_1.CategoryService.getAllSubjects(filters);
        res.status(200).json({
            success: true,
            message: "Subjects retrieved successfully",
            data: result
        });
    }
    catch (error) {
        next(error);
    }
};
const deleteSubject = async (req, res, next) => {
    try {
        const { subjectId } = req.params;
        const result = await category_service_1.CategoryService.deleteSubject(subjectId);
        res.status(200).json({
            success: true,
            message: result.message
        });
    }
    catch (error) {
        next(error);
    }
};
exports.CategoryController = {
    createCategory,
    updateCategory,
    getCategory,
    getAllCategories,
    deleteCategory,
    createSubject,
    updateSubject,
    getSubject,
    getAllSubjects,
    deleteSubject
};
