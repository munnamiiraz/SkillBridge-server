import { Request, Response, NextFunction } from 'express';
import { sessionService } from '../modules/auth/session.service';

// declare global {
//   namespace Express {
//     interface Request {
//       user?: {
//         id: string;
//         email: string;
//         role: string;
//       };
//       sessionId?: string;
//     }
//   }
// }

export const sessionAuth = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const rawToken = req.headers.authorization?.split(" ")[1] || req.cookies["better-auth.session_token"] || req.cookies.sessionId;

    if (!rawToken) {
      return res.status(401).json({ success: false, message: 'No session found' });
    }

    // 1. Check Redis FIRST (DISABLED)
    let sessionData = null;
    /*
    try {
      sessionData = await sessionService.get(rawToken);
    } catch (redisError) {
      console.error("Redis Cache Error:", redisError);
    }
    */

    // 2. Fallback to betterAuth DB
    // if (!sessionData) {
      const { auth: betterAuth } = await import("../lib/auth.js");
      const dbSession = await betterAuth.api.getSession({
        headers: req.headers as any,
      });

      if (!dbSession) {
        res.clearCookie('sessionId', { path: '/' });
        res.clearCookie('better-auth.session_token', { path: '/' });
        return res.status(401).json({ success: false, message: 'Invalid or expired session' });
      }

      // Re-hydrate Redis (DISABLED)
      /*
      try {
        await sessionService.create(
          dbSession.user.id,
          dbSession.user.email,
          dbSession.user.role as string,
          dbSession.user.emailVerified,
          dbSession.user.name,
          {
            userAgent: req.headers["user-agent"] || "unknown",
            ip: req.ip || "unknown"
          },
          rawToken
        );
      } catch (e) {
        console.error("Failed to hydrate Redis:", e);
      }
      */

      // Format sessionData to match what the rest of the app expects from sessionAuth
      sessionData = {
        userId: dbSession.user.id,
        email: dbSession.user.email,
        role: dbSession.user.role as string,
        emailVerified: dbSession.user.emailVerified,
        name: dbSession.user.name,
        sessionId: rawToken,
        metadata: {
           userAgent: req.headers["user-agent"] || "unknown",
           ip: req.ip || "unknown",
           createdAt: new Date().toISOString(),
           lastAccessedAt: new Date().toISOString()
        }
      };
    // }

    // 3. Populate Req object
    req.user = {
      id: sessionData.userId,
      email: sessionData.email,
      role: sessionData.role,
      emailVerified: sessionData.emailVerified,
      name: sessionData.name,
    };
    req.sessionId = rawToken;

    next();
  } catch (error) {
    next(error);
  }
};

export const requireRole = (...roles: string[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    if (!req.user) {
      return res.status(401).json({ success: false, message: 'Unauthorized' });
    }

    if (!roles.includes(req.user.role)) {
      return res.status(403).json({ success: false, message: 'Forbidden' });
    }

    next();
  };
};