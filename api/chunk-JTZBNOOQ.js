import {
  prisma
} from "./chunk-A4ARPKVD.js";

// src/lib/auth.ts
import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
var isProduction = process.env.NODE_ENV === "production" || !!process.env.RENDER;
var auth = betterAuth({
  secret: process.env.BETTER_AUTH_SECRET,
  baseURL: (process.env.BETTER_AUTH_URL || process.env.NEXT_PUBLIC_API_URL || "http://localhost:9000") + "/api/auth",
  session: {
    cookieCache: {
      enabled: true,
      maxAge: 60 * 60 * 24 * 7
      // 7 days
    }
  },
  user: {
    additionalFields: {
      role: {
        type: "string",
        default: "STUDENT"
      },
      phone: {
        type: "string",
        default: null
      },
      status: {
        type: "string",
        default: "ACTIVE"
      }
    }
  },
  callbacks: {
    session: async ({ session, user }) => {
      if (user && session.user) {
        session.user.name = user.name;
        session.user.email = user.email;
        session.user.role = user.role;
        session.user.phone = user.phone;
        session.user.status = user.status;
        session.user.image = user.image;
      }
      return session;
    }
  },
  // COOKIE / SECURITY CONFIG
  advanced: {
    defaultCookieAttributes: {
      sameSite: isProduction ? "none" : "lax",
      secure: isProduction,
      httpOnly: true
    },
    trustProxy: true,
    cookies: {
      state: {
        attributes: {
          sameSite: "none",
          secure: true
        }
      }
    }
  },
  databaseHooks: {
    user: {
      create: {
        before: async (user) => ({
          data: {
            ...user,
            role: user.role ?? "STUDENT",
            status: user.status ?? "ACTIVE",
            emailVerified: true
          }
        })
      }
    }
  },
  emailAndPassword: {
    enabled: true,
    autoSignIn: true,
    requireEmailVerification: false,
    password: {
      hash: async (password) => {
        const { hash } = await import("bcryptjs");
        return await hash(password, 10);
      },
      verify: async ({ hash, password }) => {
        const { compare } = await import("bcryptjs");
        return await compare(password, hash);
      }
    }
  },
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      scope: [
        "https://www.googleapis.com/auth/userinfo.profile",
        "https://www.googleapis.com/auth/userinfo.email",
        "https://www.googleapis.com/auth/calendar.events"
      ],
      accessType: "offline"
    }
  },
  trustedOrigins: [
    process.env.APP_URL || "http://localhost:3000",
    "https://skillbridge-server-9.onrender.com",
    "https://skill-bridge-client-iota.vercel.app"
  ],
  database: prismaAdapter(prisma, {
    provider: "postgresql"
  })
});

export {
  auth
};
