// src/modules/auth/session.service.ts
import { randomBytes } from "crypto";

// src/lib/redis.ts
import { createClient } from "redis";
var redisClient = createClient({
  url: process.env.REDIS_URL || "redis://localhost:6379",
  socket: {
    reconnectStrategy: (retries) => Math.min(retries * 50, 500)
  }
});
redisClient.on("error", (err) => console.error("Redis Client Error:", err));
redisClient.on("connect", () => console.log("\u2705 Redis connected"));
var connectRedis = async () => {
  if (!redisClient.isOpen) {
    await redisClient.connect();
  }
};
var redis_default = redisClient;

// src/modules/auth/session.service.ts
var SESSION_PREFIX = "session:";
var USER_SESSIONS_PREFIX = "user:sessions:";
var SESSION_TTL = 7 * 24 * 60 * 60;
var sessionService = {
  async create(userId, email, role, emailVerified, name, metadata, existingSessionId) {
    const sessionId = existingSessionId || randomBytes(32).toString("hex");
    const sessionKey = `${SESSION_PREFIX}${sessionId}`;
    const sessionData = {
      sessionId,
      userId,
      email,
      role,
      name,
      emailVerified,
      metadata: {
        ...metadata,
        createdAt: (/* @__PURE__ */ new Date()).toISOString(),
        lastAccessedAt: (/* @__PURE__ */ new Date()).toISOString()
      }
    };
    await redis_default.setEx(sessionKey, SESSION_TTL, JSON.stringify(sessionData));
    console.log(`\u{1F4BE} [Redis] Session created: ${sessionKey}`);
    const userSessionsKey = `${USER_SESSIONS_PREFIX}${userId}`;
    await redis_default.sAdd(userSessionsKey, sessionId);
    await redis_default.expire(userSessionsKey, SESSION_TTL);
    return sessionId;
  },
  async get(sessionId) {
    const sessionKey = `${SESSION_PREFIX}${sessionId}`;
    const data = await redis_default.get(sessionKey);
    if (!data) {
      console.log(`\u274C [Redis] Cache miss for: ${sessionKey}`);
      return null;
    }
    console.log(`\u2705 [Redis] Cache hit for: ${sessionKey}`);
    const session = JSON.parse(data);
    session.metadata.lastAccessedAt = (/* @__PURE__ */ new Date()).toISOString();
    await redis_default.setEx(sessionKey, SESSION_TTL, JSON.stringify(session));
    return session;
  },
  async delete(sessionId) {
    const sessionKey = `${SESSION_PREFIX}${sessionId}`;
    const data = await redis_default.get(sessionKey);
    if (data) {
      const session = JSON.parse(data);
      await redis_default.sRem(`${USER_SESSIONS_PREFIX}${session.userId}`, sessionId);
    }
    await redis_default.del(sessionKey);
  },
  async deleteAllUserSessions(userId) {
    const userSessionsKey = `${USER_SESSIONS_PREFIX}${userId}`;
    const sessionIds = await redis_default.sMembers(userSessionsKey);
    const pipeline = redis_default.multi();
    sessionIds.forEach((id) => pipeline.del(`${SESSION_PREFIX}${id}`));
    pipeline.del(userSessionsKey);
    await pipeline.exec();
  },
  async getUserSessions(userId) {
    const userSessionsKey = `${USER_SESSIONS_PREFIX}${userId}`;
    const sessionIds = await redis_default.sMembers(userSessionsKey);
    const sessions = [];
    for (const id of sessionIds) {
      const data = await redis_default.get(`${SESSION_PREFIX}${id}`);
      if (data) sessions.push(JSON.parse(data));
    }
    return sessions;
  },
  async deleteOtherSessions(userId, currentSessionId) {
    const sessions = await this.getUserSessions(userId);
    const otherSessions = sessions.filter((s) => s.sessionId !== currentSessionId);
    for (const session of otherSessions) {
      await this.delete(session.sessionId);
    }
  }
};

export {
  connectRedis,
  redis_default,
  sessionService
};
