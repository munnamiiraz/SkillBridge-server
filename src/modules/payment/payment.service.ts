import { stripe } from "../../lib/stripe";
import { prisma } from "../../lib/prisma";
import { randomUUID } from "crypto";

export class PaymentService {
  static async createCheckoutSession(userId: string, bookingData: {
    tutorProfileId: string;
    scheduledAt: string;
    duration: number;
    subject: string;
    notes?: string;
  }) {
    // 1. Validate Tutor
    const tutorProfile = await prisma.tutor_profile.findUnique({
      where: { id: bookingData.tutorProfileId },
      include: { user: true }
    });

    if (!tutorProfile || !tutorProfile.isAvailable || tutorProfile.user.status !== "ACTIVE") {
      throw new Error("Tutor is not available");
    }

    const scheduledDate = new Date(bookingData.scheduledAt);
    if (scheduledDate <= new Date()) {
      throw new Error("Booking time must be in the future");
    }

    // 2. Find Availability Slot
    const scheduledDateOnly = new Date(scheduledDate);
    scheduledDateOnly.setUTCHours(0, 0, 0, 0);
    
    const hours = scheduledDate.getUTCHours();
    const minutes = scheduledDate.getUTCMinutes();
    const timeString = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;

    const availabilitySlot = await prisma.availability_slot.findFirst({
      where: {
        tutorProfileId: bookingData.tutorProfileId,
        specificDate: scheduledDateOnly,
        startTime: timeString,
        isBooked: false
      }
    });

    if (!availabilitySlot) {
      throw new Error("This time slot is not available in the tutor's schedule");
    }

    // 3. Calculate Price
    const price = (bookingData.duration / 60) * tutorProfile.hourlyRate;
    const amountInCents = Math.round(price * 100);

    // 4. Create PENDING booking record
    const booking = await prisma.booking.create({
      data: {
        id: randomUUID(),
        studentId: userId,
        tutorProfileId: bookingData.tutorProfileId,
        availabilitySlotId: availabilitySlot.id,
        scheduledAt: scheduledDate,
        duration: bookingData.duration,
        subject: bookingData.subject,
        notes: bookingData.notes || null,
        price: price,
        status: "PENDING"
      }
    });

    const successUrl = process.env.STRIPE_SUCCESS_URL || 'http://localhost:3000/booking/success';
    const cancelUrl = process.env.STRIPE_CANCEL_URL || 'http://localhost:3000/booking/cancel';

    // 5. Create Stripe Session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: `Session with ${tutorProfile.user.name}`,
              description: `${bookingData.subject} on ${scheduledDate.toLocaleDateString()}`,
            },
            unit_amount: amountInCents,
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${successUrl}?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: cancelUrl,
      metadata: {
        bookingId: booking.id,
        userId: userId
      }
    });

    return {
      sessionId: session.id,
      checkoutUrl: session.url,
      bookingId: booking.id
    };
  }

  static async handleWebhook(payload: any, signature: string) {
    let event;

    try {
      event = stripe.webhooks.constructEvent(
        payload,
        signature,
        process.env.STRIPE_WEBHOOK_SECRET!
      );
    } catch (err: any) {
      throw new Error(`Webhook Error: ${err.message}`);
    }

    if (event.type === 'checkout.session.completed') {
      const session = event.data.object as any;
      const bookingId = session.metadata.bookingId;

      await prisma.$transaction(async (tx) => {
        const booking = await tx.booking.update({
          where: { id: bookingId },
          data: { status: "CONFIRMED" }
        });

        if (booking.availabilitySlotId) {
          await tx.availability_slot.update({
            where: { id: booking.availabilitySlotId },
            data: { isBooked: true }
          });
        }
      });
    }

    return { received: true };
  }

  static async getSessionDetails(sessionId: string) {
    const session = await stripe.checkout.sessions.retrieve(sessionId);
    const bookingId = session.metadata?.bookingId;
    
    if (!bookingId) {
      return { session };
    }

    const booking = await prisma.booking.findUnique({
      where: { id: bookingId },
      include: {
        tutor_profile: {
          include: {
            user: {
              select: { name: true, image: true }
            }
          }
        }
      }
    });

    return { session, booking };
  }
}
