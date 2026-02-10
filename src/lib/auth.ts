import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { prisma } from "./prisma.js";


const isProduction = process.env.NODE_ENV === "production";

export const auth = betterAuth({
  secret: process.env.BETTER_AUTH_SECRET,
  baseURL: process.env.BETTER_AUTH_URL,

  // ✅ SESSION CONFIG (version-safe)
  session: {
    cookieCache: {
      enabled: true,
      maxAge: 60 * 60 * 24 * 7, // 7 days
    },
  },
  user: {
    additionalFields: {
      role: {
        type: "string",
        default: "STUDENT",
      },
      phone: {
        type: "string",
        default: null,
      },
      status: {
        type: "string",
        default: "ACTIVE",
      },
    }
  },
  // ✅ SESSION CALLBACK — THIS IS THE KEY PART
  callbacks: {
    session: async ({ session, user }: any) => {
      if (user && session.user) {
        session.user.role = user.role;
        session.user.phone = user.phone;
        session.user.status = user.status;
      }
      return session;
    },
  },

  // ✅ COOKIE / SECURITY CONFIG (NO INVALID PROPS)
  advanced: {
    defaultCookieAttributes: {
      sameSite: isProduction ? "none" : "lax",
      secure: isProduction,
      httpOnly: true,
      path: "/",
    },
  },

  // ✅ HANDLE DEFAULT VALUES PROPERLY
  databaseHooks: {
    user: {
      create: {
        before: async (user) => ({
          data: {
            ...user,
            role: user.role ?? "STUDENT",
            status: user.status ?? "ACTIVE",
            emailVerified: true,
          },
        }),
      },
    },
  },

  emailAndPassword: {
    enabled: true,
    autoSignIn: true,
    requireEmailVerification: false,
  },

  trustedOrigins: [
    process.env.APP_URL || "http://localhost:3000",
    "http://localhost:3000",
    "http://localhost:3001",
    "http://localhost:9000",
    "http://localhost",
  ],

  database: prismaAdapter(prisma, {
    provider: "postgresql",
  }),
});
