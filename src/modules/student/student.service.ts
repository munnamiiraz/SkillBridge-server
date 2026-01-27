import { prisma } from "../../lib/prisma";
import { updateProfileSchema, UpdateProfileInput, createReviewSchema, CreateReviewInput } from "./student.validation";
import { randomUUID } from "crypto";

const updateProfile = async (userId: string, data: UpdateProfileInput) => {
  const validatedData = updateProfileSchema.parse(data);
  
  return await prisma.user.update({
    where: { id: userId },
    data: validatedData
  });
};

const getProfile = async (userId: string) => {
  return await prisma.user.findUnique({
    where: { id: userId }
  });
};

const createReview = async (studentId: string, data: CreateReviewInput) => {
  const validatedData = createReviewSchema.parse(data);
  
  // Check if booking exists and belongs to the student
  const booking = await prisma.booking.findFirst({
    where: {
      id: validatedData.bookingId,
      studentId: studentId
    }
  });
  
  if (!booking) {
    throw new Error("Booking not found or doesn't belong to you");
  }
  
  // Check if review already exists for this booking
  const existingReview = await prisma.review.findUnique({
    where: { bookingId: validatedData.bookingId }
  });
  
  if (existingReview) {
    throw new Error("Review already exists for this booking");
  }
  
  return await prisma.review.create({
    data: {
      id: randomUUID(),
      bookingId: validatedData.bookingId,
      studentId: studentId,
      rating: validatedData.rating,
      comment: validatedData.comment,
      updatedAt: new Date()
    },
    include: {
      booking: {
        include: {
          tutor_profile: {
            include: {
              user: {
                select: {
                  id: true,
                  name: true
                }
              }
            }
          }
        }
      }
    }
  });
};

export const StudentService = { updateProfile, getProfile, createReview };
