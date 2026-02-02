import { Request, Response, NextFunction } from "express";
export declare const StudentController: {
    updateProfile: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    getProfile: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    createReview: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    createBooking: (req: Request, res: Response, next: NextFunction) => Promise<Response<any, Record<string, any>> | undefined>;
    getBookings: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    getReviewableBookings: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    cancelBooking: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    getReviews: (req: Request, res: Response, next: NextFunction) => Promise<void>;
};
//# sourceMappingURL=student.controller.d.ts.map