import { Request, Response, NextFunction } from "express";
export declare const updateAvailabilitySlots: (req: Request, res: Response, next: NextFunction) => Promise<void>;
export declare const TutorController: {
    createProfile: (req: Request, res: Response, next: NextFunction) => Promise<Response<any, Record<string, any>> | undefined>;
    updateProfile: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    getProfile: (req: Request, res: Response, next: NextFunction) => Promise<Response<any, Record<string, any>> | undefined>;
    getAvailabilitySlots: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    updateAvailabilitySlots: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    getTeachingSessions: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    getReviews: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    getRatingStats: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    updateBookingStatus: (req: Request, res: Response, next: NextFunction) => Promise<void>;
};
//# sourceMappingURL=tutor.controller.d.ts.map