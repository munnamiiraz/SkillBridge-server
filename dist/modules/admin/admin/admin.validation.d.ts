import { z } from "zod";
export declare const adminLoginSchema: z.ZodObject<{
    email: z.ZodString;
    password: z.ZodString;
}, "strip", z.ZodTypeAny, {
    email: string;
    password: string;
}, {
    email: string;
    password: string;
}>;
export declare const updateUserStatusSchema: z.ZodEffects<z.ZodObject<{
    status: z.ZodEnum<["ACTIVE", "INACTIVE", "BANNED"]>;
    banReason: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    status: "ACTIVE" | "INACTIVE" | "BANNED";
    banReason?: string | undefined;
}, {
    status: "ACTIVE" | "INACTIVE" | "BANNED";
    banReason?: string | undefined;
}>, {
    status: "ACTIVE" | "INACTIVE" | "BANNED";
    banReason?: string | undefined;
}, {
    status: "ACTIVE" | "INACTIVE" | "BANNED";
    banReason?: string | undefined;
}>;
export declare const banUserSchema: z.ZodObject<{
    banReason: z.ZodString;
}, "strip", z.ZodTypeAny, {
    banReason: string;
}, {
    banReason: string;
}>;
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
export type AdminLoginInput = z.infer<typeof adminLoginSchema>;
export type UpdateUserStatusInput = z.infer<typeof updateUserStatusSchema>;
export type BanUserInput = z.infer<typeof banUserSchema>;
export type CreateCategoryInput = z.infer<typeof createCategorySchema>;
export type UpdateCategoryInput = z.infer<typeof updateCategorySchema>;
export type CreateSubjectInput = z.infer<typeof createSubjectSchema>;
export type UpdateSubjectInput = z.infer<typeof updateSubjectSchema>;
//# sourceMappingURL=admin.validation.d.ts.map