import { NextFunction, Request, Response } from "express";
import { auth as betterAuth } from "../lib/auth";

export enum UserRole {
  STUDENT = "STUDENT",
  TUTOR = "TUTOR",
  VERIFIED_TUTOR = "VERIFIED_TUTOR",
  ADMIN = "ADMIN",
  SUPER_ADMIN = "SUPER_ADMIN"
}

declare global {
  namespace Express {
    interface Request {
      user?: {
        id: string;
        email: string;
        name: string;
        role: string;
        emailVerified: boolean;
      };
      sessionId?: string;
    }
  }
}

const auth = (...roles: UserRole[]) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      // 1. Get the session token from cookies or Headers
      // Better-Auth usually stores the session in a cookie called "better-auth.session_token"
      // or it might be passed as a Bearer token.
      const rawToken = req.headers.authorization?.split(" ")[1] || req.cookies?.["better-auth.session_token"] || req.cookies?.sessionId;

      let session;
      /*
      let sessionData = null;

      // 2. ONLY IF we have a token, check Redis FIRST (Super Fast! 🚀)
      if (rawToken) {
        try {
          // You need to import sessionService at the top of the file!
          const { sessionService } = await import("../modules/auth/session.service.js");
          sessionData = await sessionService.get(rawToken);
        } catch (redisError) {
          console.error("Redis Cache Error:", redisError);
          // Don't fail the request gracefully fallback to DB
        }
      }

      // 3. CACHE MISS: If not in Redis, check Database (Slow Fallback 🐢)
      if (sessionData) {
        // We got it from Redis! Reconstruct the session object expected by your code
        session = { user: sessionData };
      } else {
      */
        // Query Database
        session = await betterAuth.api.getSession({
          headers: req.headers as any,
        });

        // 4. RE-HYDRATE CACHE: Found in DB? Save it back to Redis!
        /*
        if (session && rawToken) {
           try {
              const { sessionService } = await import("../modules/auth/session.service.js");
              await sessionService.create(
                session.user.id,
                session.user.email,
                session.user.role as string,
                session.user.emailVerified,
                session.user.name,
                {
                  userAgent: req.headers["user-agent"] || "unknown",
                  ip: req.ip || "unknown"
                },
                rawToken
              );
           } catch (e) {
             console.error("Failed to hydrate Redis:", e);
           }
        }
        */
      // }

      if (!session) {
        return res.status(401).json({
          success: false,
          message: "You are not authorized!",
        });
      }

      if (!session.user.emailVerified) {
        return res.status(403).json({
          success: false,
          message: "Email verification required. Please verfiy your email!",
        });
      }

      req.user = {
        id: (session.user as any).id || (session.user as any).userId,
        email: session.user.email,
        name: session.user.name,
        role: session.user.role as string,
        emailVerified: session.user.emailVerified,
      };

      if (roles.length && !roles.includes(req.user.role as UserRole)) {
        return res.status(403).json({
          success: false,
          message:
            "Forbidden! You don't have permission to access this resources!",
        });
      }

      next();
    } catch (err) {
      next(err);
    }
  };
};

export default auth;