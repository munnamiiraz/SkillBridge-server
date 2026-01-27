import { prisma } from "../../lib/prisma";
import { createTutorProfileSchema, updateTutorProfileSchema, CreateTutorProfileInput, UpdateTutorProfileInput } from "./tutor.validation";

const createProfile = async (userId: string, data: CreateTutorProfileInput) => {
  const validatedData = createTutorProfileSchema.parse(data);
  
  return await prisma.tutor_profile.create({
    data: {
      ...validatedData,
      userId,
      id: crypto.randomUUID()
    }
  });
};

const updateProfile = async (userId: string, data: UpdateTutorProfileInput) => {
  const validatedData = updateTutorProfileSchema.parse(data);
  
  return await prisma.tutor_profile.update({
    where: { userId },
    data: validatedData
  });
};

const getProfile = async (userId: string) => {
  return await prisma.tutor_profile.findUnique({
    where: { userId },
    include: {
      user: {
        select: { id: true, name: true, email: true, image: true }
      }
    }
  });
};

export const TutorService = { createProfile, updateProfile, getProfile };