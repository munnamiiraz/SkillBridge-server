import { randomBytes } from 'crypto';
import redisClient from '../../lib/redis';

const SESSION_PREFIX = 'session:';
const USER_SESSIONS_PREFIX = 'user:sessions:';
const SESSION_TTL = 7 * 24 * 60 * 60; // 7 days in seconds

export interface SessionData {
  sessionId: string;
  userId: string;
  email: string;
  role: string;
  emailVerified: boolean;
  name: string;
  metadata: {
    userAgent: string;
    ip: string;
    deviceId?: string;
    createdAt: string;
    lastAccessedAt: string;
  };
}

export const sessionService = {
  async create(userId: string, email: string, role: string, emailVerified: boolean, name: string, metadata: { userAgent: string; ip: string; deviceId?: string }, existingSessionId?: string): Promise<string> {
    const sessionId = existingSessionId || randomBytes(32).toString('hex');
    const sessionKey = `${SESSION_PREFIX}${sessionId}`;
    
    const sessionData: SessionData = {
      sessionId,
      userId,
      email,
      role,
      name,
      emailVerified,
      metadata: {
        ...metadata,
        createdAt: new Date().toISOString(),
        lastAccessedAt: new Date().toISOString(),
      },
    };

    await redisClient.setEx(sessionKey, SESSION_TTL, JSON.stringify(sessionData));
    console.log(`💾 [Redis] Session created: ${sessionKey}`);
    
    // Track user sessions for multi-device management
    const userSessionsKey = `${USER_SESSIONS_PREFIX}${userId}`;
    await redisClient.sAdd(userSessionsKey, sessionId);
    await redisClient.expire(userSessionsKey, SESSION_TTL);

    return sessionId;
  },

  async get(sessionId: string): Promise<SessionData | null> {
    const sessionKey = `${SESSION_PREFIX}${sessionId}`;
    const data = await redisClient.get(sessionKey);
    
    if (!data) {
      console.log(`❌ [Redis] Cache miss for: ${sessionKey}`);
      return null;
    }

    console.log(`✅ [Redis] Cache hit for: ${sessionKey}`);
    const session: SessionData = JSON.parse(data);
    
    // Update last accessed time
    session.metadata.lastAccessedAt = new Date().toISOString();
    await redisClient.setEx(sessionKey, SESSION_TTL, JSON.stringify(session));

    return session;
  },

  async delete(sessionId: string): Promise<void> {
    const sessionKey = `${SESSION_PREFIX}${sessionId}`;
    const data = await redisClient.get(sessionKey);
    
    if (data) {
      const session: SessionData = JSON.parse(data);
      await redisClient.sRem(`${USER_SESSIONS_PREFIX}${session.userId}`, sessionId);
    }
    
    await redisClient.del(sessionKey);
  },

  async deleteAllUserSessions(userId: string): Promise<void> {
    const userSessionsKey = `${USER_SESSIONS_PREFIX}${userId}`;
    const sessionIds = await redisClient.sMembers(userSessionsKey);
    
    const pipeline = redisClient.multi();
    sessionIds.forEach(id => pipeline.del(`${SESSION_PREFIX}${id}`));
    pipeline.del(userSessionsKey);
    await pipeline.exec();
  },

  async getUserSessions(userId: string): Promise<SessionData[]> {
    const userSessionsKey = `${USER_SESSIONS_PREFIX}${userId}`;
    const sessionIds = await redisClient.sMembers(userSessionsKey);
    
    const sessions: SessionData[] = [];
    for (const id of sessionIds) {
      const data = await redisClient.get(`${SESSION_PREFIX}${id}`);
      if (data) sessions.push(JSON.parse(data));
    }
    
    return sessions;
  },

  async deleteOtherSessions(userId: string, currentSessionId: string): Promise<void> {
    const sessions = await this.getUserSessions(userId);
    const otherSessions = sessions.filter(s => s.sessionId !== currentSessionId);
    
    for (const session of otherSessions) {
      await this.delete(session.sessionId);
    }
  },
};
