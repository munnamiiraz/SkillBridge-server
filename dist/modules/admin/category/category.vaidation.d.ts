import { z } from "zod";
export declare const createCategorySchema: z.ZodObject<{
    name: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
    status: z.ZodDefault<z.ZodOptional<z.ZodEnum<["ACTIVE", "INACTIVE"]>>>;
}, "strip", z.ZodTypeAny, {
    name: string;
    status: "ACTIVE" | "INACTIVE";
    description?: string | undefined;
}, {
    name: string;
    status?: "ACTIVE" | "INACTIVE" | undefined;
    description?: string | undefined;
}>;
export declare const updateCategorySchema: z.ZodEffects<z.ZodObject<{
    name: z.ZodOptional<z.ZodString>;
    description: z.ZodOptional<z.ZodString>;
    status: z.ZodOptional<z.ZodEnum<["ACTIVE", "INACTIVE"]>>;
}, "strip", z.ZodTypeAny, {
    name?: string | undefined;
    status?: "ACTIVE" | "INACTIVE" | undefined;
    description?: string | undefined;
}, {
    name?: string | undefined;
    status?: "ACTIVE" | "INACTIVE" | undefined;
    description?: string | undefined;
}>, {
    name?: string | undefined;
    status?: "ACTIVE" | "INACTIVE" | undefined;
    description?: string | undefined;
}, {
    name?: string | undefined;
    status?: "ACTIVE" | "INACTIVE" | undefined;
    description?: string | undefined;
}>;
export declare const createSubjectSchema: z.ZodObject<{
    name: z.ZodString;
    categoryId: z.ZodString;
}, "strip", z.ZodTypeAny, {
    name: string;
    categoryId: string;
}, {
    name: string;
    categoryId: string;
}>;
export declare const updateSubjectSchema: z.ZodEffects<z.ZodObject<{
    name: z.ZodOptional<z.ZodString>;
    categoryId: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    name?: string | undefined;
    categoryId?: string | undefined;
}, {
    name?: string | undefined;
    categoryId?: string | undefined;
}>, {
    name?: string | undefined;
    categoryId?: string | undefined;
}, {
    name?: string | undefined;
    categoryId?: string | undefined;
}>;
export type CreateCategoryInput = z.infer<typeof createCategorySchema>;
export type UpdateCategoryInput = z.infer<typeof updateCategorySchema>;
export type CreateSubjectInput = z.infer<typeof createSubjectSchema>;
export type UpdateSubjectInput = z.infer<typeof updateSubjectSchema>;
//# sourceMappingURL=category.vaidation.d.ts.map