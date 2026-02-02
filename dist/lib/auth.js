import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { prisma } from "./prisma";
import nodemailer from "nodemailer";
const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // Use true for port 465, false for port 587
    auth: {
        user: process.env.APP_USER,
        pass: process.env.APP_PASS,
    },
});
export const auth = betterAuth({
    emailAndPassword: {
        enabled: true,
        autoSignIn: false,
        requireEmailVerification: true
    },
    emailVerification: {
        sendOnSignUp: true,
        autoSignInAfterVerification: true,
        sendVerificationEmail: async ({ user, url, token }, request) => {
            try {
                const verificationUrl = `${process.env.APP_URL}/verify-email?token=${token}`;
                console.log(`Sending verification email to ${user.email} with URL: ${verificationUrl}`);
                const info = await transporter.sendMail({
                    from: '"SkillBridge" <munnamiiraz@gmail.com>',
                    to: user.email,
                    subject: "Please verify your email",
                    text: `Hello ${user.name},\n\nThanks for joining SkillBridge! Please confirm your email address to activate your account by clicking on the following link: ${verificationUrl}\n\nIf you didn’t create an account, you can safely ignore this email.\n\n—\nSkillBridge Team`, // Plain-text version of the message
                    html: `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8" />
  <title>Email Verification</title>
</head>
<body style="margin:0; padding:0; background:#f6f8fb; font-family: Arial, Helvetica, sans-serif;">

  <table width="100%" cellpadding="0" cellspacing="0">
    <tr>
      <td align="center" style="padding:40px 10px;">

        <table width="100%" max-width="520" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:12px;box-shadow:0 4px 12px rgba(0,0,0,0.08);padding:40px;max-width:520px;">

          <!-- Logo / Title -->
          <tr>
            <td align="center">
              <h1 style="margin:0;color:#2563eb;font-size:28px;">SkillBridge</h1>
            </td>
          </tr>

          <!-- Divider -->
          <tr>
            <td style="padding:20px 0;border-bottom:1px solid #e5e7eb;"></td>
          </tr>

          <!-- Content -->
          <tr>
            <td style="padding-top:30px;color:#111827;font-size:16px;line-height:1.6;">
              <p>Hello ${user.name}👋,</p>

              <p>
                Thanks for joining <strong>SkillBridge</strong>!  
                Please confirm your email address to activate your account.
              </p>

              <!-- Button -->
              <div style="text-align:center;margin:35px 0;">
                <a href="${verificationUrl}"
                  style="
                    background:#2563eb;
                    color:#ffffff;
                    padding:14px 28px;
                    border-radius:8px;
                    text-decoration:none;
                    font-weight:600;
                    display:inline-block;
                  ">
                  Verify Email Address
                </a>
              </div>

              <p>
                If the button doesn’t work, copy and paste this link into your browser:
              </p>

              <p style="word-break:break-all;color:#2563eb;">
                ${verificationUrl}
              </p>

              <p>
                If you didn’t create an account, you can safely ignore this email.
              </p>

              <p style="margin-top:30px;">
                — <br />
                <strong>SkillBridge Team</strong>
              </p>
            </td>
          </tr>

        </table>

        <!-- Footer -->
        <p style="margin-top:20px;font-size:12px;color:#6b7280;">
          © ${new Date().getFullYear()} SkillBridge. All rights reserved.
        </p>

      </td>
    </tr>
  </table>

</body>
</html>
`,
                });
                console.log("Message sent:", info.messageId);
            }
            catch (error) {
                console.log(error);
                throw error;
            }
        },
    },
    socialProviders: {
        google: {
            prompt: "select_account consent",
            accessType: "offline",
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        },
    },
    trustedOrigins: [
        process.env.APP_URL || "http://localhost:3000",
        "http://localhost:9000"
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
//# sourceMappingURL=auth.js.map