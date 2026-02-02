import { Request, Response } from "express";
export declare class PublicController {
    static searchTutors(req: Request, res: Response): Promise<void>;
    static getTutorById(req: Request, res: Response): Promise<Response<any, Record<string, any>> | undefined>;
    static getTutorReviews(req: Request, res: Response): Promise<Response<any, Record<string, any>> | undefined>;
    static getFeaturedTutors(req: Request, res: Response): Promise<void>;
    static getCategories(req: Request, res: Response): Promise<void>;
    static getTutorAvailability(req: Request, res: Response): Promise<void>;
    static getTutorRatingStats(req: Request, res: Response): Promise<Response<any, Record<string, any>> | undefined>;
}
//# sourceMappingURL=public.controller.d.ts.map