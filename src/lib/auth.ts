import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { prisma } from "./prisma.js";
import nodemailer from "nodemailer";

const isProduction = process.env.NODE_ENV === "production";



export const auth = betterAuth({
  secret: process.env.BETTER_AUTH_SECRET,
  baseURL: process.env.BETTER_AUTH_URL,
  session: {
    cookieCache: {
      enabled: true,
      maxAge: 60 * 60 * 24 * 7 // 7 days
    }
  },
  advanced: {
    defaultCookieAttributes: {
      sameSite: isProduction ? "none" : "lax",
      secure: isProduction, // secure in production
      httpOnly: true,
      path: "/",
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
        before: async (user) => {
          return {
            data: {
              ...user,
              emailVerified: true,
            },
          };
        },
      },
    },
  },
  emailAndPassword: { 
    enabled: true,
    autoSignIn: true,
    requireEmailVerification: false
  },
  trustedOrigins: [
    process.env.APP_URL || "http://localhost:3000",
    "http://localhost:9000",
    "https://skillbridge-server-2.onrender.com"
  ],
  user: {
    additionalFields: {
      role: {
        type: "string",
        default: "STUDENT",
        required: true
      },
      phone: {
        type: "string",
        required: true,
      },
      status: {
        type: "string",
        default: "ACTIVE",
        required: false
      }
    }

  },
  database: prismaAdapter(prisma, {
    provider: "postgresql",
  }),
});