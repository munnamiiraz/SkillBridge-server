import { Request, Response, NextFunction } from "express";
export declare const AdminController: {
    login: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    getUsers: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    updateUserStatus: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    banUser: (req: Request, res: Response, next: NextFunction) => Promise<Response<any, Record<string, any>> | undefined>;
    unbanUser: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    getAllBookings: (req: Request, res: Response, next: NextFunction) => Promise<Response<any, Record<string, any>> | undefined>;
    cancelBooking: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    getPlatformStats: (req: Request, res: Response, next: NextFunction) => Promise<void>;
};
//# sourceMappingURL=admin.controller.d.ts.map