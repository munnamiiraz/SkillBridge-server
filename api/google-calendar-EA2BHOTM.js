import {
  prisma
} from "./chunk-NYC6WFR6.js";

// src/lib/google-calendar.ts
import { google } from "googleapis";
var oauth2Client = new google.auth.OAuth2(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  `${process.env.BETTER_AUTH_URL || "http://localhost:9000"}/api/auth/callback/google`
);
var createGoogleMeet = async (userId, summary, startTime, durationMinutes) => {
  try {
    const account = await prisma.account.findFirst({
      where: {
        userId,
        providerId: "google"
      }
    });
    if (!account || !account.accessToken) {
      console.warn(`No Google account found for user ${userId}. Falling back to mock link.`);
      return null;
    }
    oauth2Client.setCredentials({
      access_token: account.accessToken,
      refresh_token: account.refreshToken,
      expiry_date: account.accessTokenExpiresAt?.getTime()
    });
    const calendar = google.calendar({ version: "v3", auth: oauth2Client });
    const endTime = new Date(startTime.getTime() + durationMinutes * 6e4);
    const event = {
      summary: `SkillBridge Session: ${summary}`,
      description: "Online tutoring session via SkillBridge",
      start: {
        dateTime: startTime.toISOString(),
        timeZone: "UTC"
      },
      end: {
        dateTime: endTime.toISOString(),
        timeZone: "UTC"
      },
      conferenceData: {
        createRequest: {
          requestId: `sb-${Date.now()}-${userId.slice(0, 5)}`,
          conferenceSolutionKey: { type: "hangoutsMeet" }
        }
      }
    };
    const response = await calendar.events.insert({
      calendarId: "primary",
      requestBody: event,
      conferenceDataVersion: 1
    });
    return response.data.hangoutLink || null;
  } catch (error) {
    console.error("Error creating Google Meet:", error);
    return null;
  }
};
export {
  createGoogleMeet
};
