import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { prisma } from "./prisma.js";


const isProduction = process.env.NODE_ENV === "production" || !!process.env.RENDER;

export const auth = betterAuth({
  secret: process.env.BETTER_AUTH_SECRET,
  baseURL: (process.env.BETTER_AUTH_URL || process.env.NEXT_PUBLIC_API_URL || "http://localhost:9000") + "/api/auth",

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

  // COOKIE / SECURITY CONFIG
  advanced: {
    defaultCookieAttributes: {
      sameSite: isProduction ? "none" : "lax",
      secure: isProduction,
      httpOnly: true,
    },
    trustProxy: true,
    cookies: {
      state: {
        attributes: {
          sameSite: "none",
          secure: true,
        },
      },
    },
  },

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
    "https://skillbridge-server-9.onrender.com",
    "https://skill-bridge-client-iota.vercel.app"
  ],

  database: prismaAdapter(prisma, {
    provider: "postgresql",
  }),
});
