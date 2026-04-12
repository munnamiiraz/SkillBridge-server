import { google } from 'googleapis';
import { prisma } from './prisma';

const oauth2Client = new google.auth.OAuth2(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  `${process.env.BETTER_AUTH_URL || "http://localhost:9000"}/api/auth/callback/google`
);

export const createGoogleMeet = async (userId: string, summary: string, startTime: Date, durationMinutes: number) => {
  try {
    // 1. Get the account with tokens for this user
    const account = await prisma.account.findFirst({
      where: {
        userId,
        providerId: 'google'
      }
    });

    if (!account || !account.accessToken) {
      console.warn(`No Google account found for user ${userId}. Falling back to mock link.`);
      return null;
    }

    // 2. Set credentials
    oauth2Client.setCredentials({
      access_token: account.accessToken,
      refresh_token: account.refreshToken,
      expiry_date: account.accessTokenExpiresAt ? account.accessTokenExpiresAt.getTime() : null
    });

    const calendar = google.calendar({ version: 'v3', auth: oauth2Client });

    const endTime = new Date(startTime.getTime() + durationMinutes * 60000);

    // 3. Create Calendar Event with Meet
    const event = {
      summary: `SkillBridge Session: ${summary}`,
      description: 'Online tutoring session via SkillBridge',
      start: {
        dateTime: startTime.toISOString(),
        timeZone: 'UTC',
      },
      end: {
        dateTime: endTime.toISOString(),
        timeZone: 'UTC',
      },
      conferenceData: {
        createRequest: {
          requestId: `sb-${Date.now()}-${userId.slice(0, 5)}`,
          conferenceSolutionKey: { type: 'hangoutsMeet' },
        },
      },
    };

    const response = await calendar.events.insert({
      calendarId: 'primary',
      requestBody: event,
      conferenceDataVersion: 1,
    });

    return response.data.hangoutLink || null;
  } catch (error) {
    console.error('Error creating Google Meet:', error);
    return null;
  }
};
