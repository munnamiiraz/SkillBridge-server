import { Request, Response, NextFunction } from 'express';
import { sessionService } from "./session.service";
import { prisma } from '../../lib/prisma';
import bcrypt from 'bcryptjs';

const COOKIE_NAME = 'sessionId';
const COOKIE_OPTIONS = {
  httpOnly: true,
  secure: process.env.NODE_ENV === 'production',
  sameSite: 'strict' as const,
  maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
  path: '/',
};

export const login = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email, password } = req.body;

    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      return res.status(401).json({ success: false, message: 'Invalid credentials' });
    }

    // Verify password (adjust based on your auth system)
    // const isValid = await bcrypt.compare(password, user.password);
    // if (!isValid) {
    //   return res.status(401).json({ success: false, message: 'Invalid credentials' });
    // }

    const sessionId = await sessionService.create(
      user.id,
      user.email,
      user.role,
      user.emailVerified,
      user.name,
      {
        userAgent: req.headers['user-agent'] || 'unknown',
        ip: req.ip || req.socket.remoteAddress || 'unknown',
        deviceId: req.body.deviceId,
      }
    );

    res.cookie(COOKIE_NAME, sessionId, COOKIE_OPTIONS);

    res.json({
      success: true,
      message: 'Login successful',
      data: { userId: user.id, email: user.email, role: user.role },
    });
  } catch (error) {
    next(error);
  }
};

export const logout = async (req: Request, res: Response, next: NextFunction) => {
  try {
    // Check for all possible token names
    const sessionId = req.cookies[COOKIE_NAME] || req.cookies['better-auth.session_token'];

    if (sessionId) {
      // 1. Delete from Redis (Fast)
      await sessionService.delete(sessionId);
      
      // 2. Clear from Better-Auth (DB)
      try {
        const { auth: betterAuth } = await import("../../lib/auth.js");
        await betterAuth.api.signOut({
          headers: req.headers as any,
        });
      } catch (authError) {
        console.error("Better-Auth Signout Error:", authError);
      }
    }

    res.clearCookie(COOKIE_NAME, { path: '/' });
    res.clearCookie('better-auth.session_token', { path: '/' });
    res.json({ success: true, message: 'Logout successful' });
  } catch (error) {
    next(error);
  }
};

export const logoutAll = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const userId = req.user?.id;
    if (!userId) {
      return res.status(401).json({ success: false, message: 'Unauthorized' });
    }

    await sessionService.deleteAllUserSessions(userId);
    res.clearCookie(COOKIE_NAME, { path: '/' });
    res.json({ success: true, message: 'All sessions terminated' });
  } catch (error) {
    next(error);
  }
};

export const getSessions = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const userId = req.user?.id;
    if (!userId) {
      return res.status(401).json({ success: false, message: 'Unauthorized' });
    }

    const sessions = await sessionService.getUserSessions(userId);
    res.json({ success: true, data: sessions });
  } catch (error) {
    next(error);
  }
};
