import { prisma } from "../../lib/prisma";
import { createTutorProfileSchema, updateTutorProfileSchema, CreateTutorProfileInput, UpdateTutorProfileInput, createAvailabilitySlotSchema, updateAvailabilitySlotSchema, CreateAvailabilitySlotInput, UpdateAvailabilitySlotInput } from "./tutor.validation";
import { randomUUID } from "crypto";

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

const createAvailabilitySlot = async (userId: string, data: CreateAvailabilitySlotInput) => {
  const validatedData = createAvailabilitySlotSchema.parse(data);
  
  // Get tutor profile
  const tutorProfile = await prisma.tutor_profile.findUnique({
    where: { userId }
  });
  
  if (!tutorProfile) {
    throw new Error("Tutor profile not found");
  }
  
  // Check for overlapping slots on the same day
  const existingSlot = await prisma.availability_slot.findFirst({
    where: {
      tutorProfileId: tutorProfile.id,
      dayOfWeek: validatedData.dayOfWeek,
      isActive: true,
      OR: [
        {
          AND: [
            { startTime: { lte: validatedData.startTime } },
            { endTime: { gt: validatedData.startTime } }
          ]
        },
        {
          AND: [
            { startTime: { lt: validatedData.endTime } },
            { endTime: { gte: validatedData.endTime } }
          ]
        },
        {
          AND: [
            { startTime: { gte: validatedData.startTime } },
            { endTime: { lte: validatedData.endTime } }
          ]
        }
      ]
    }
  });
  
  if (existingSlot) {
    throw new Error("Time slot overlaps with existing availability");
  }
  
  return await prisma.availability_slot.create({
    data: {
      id: randomUUID(),
      tutorProfileId: tutorProfile.id,
      ...validatedData,
      updatedAt: new Date()
    }
  });
};

const updateAvailabilitySlot = async (userId: string, slotId: string, data: UpdateAvailabilitySlotInput) => {
  const validatedData = updateAvailabilitySlotSchema.parse(data);
  
  // Get tutor profile
  const tutorProfile = await prisma.tutor_profile.findUnique({
    where: { userId }
  });
  
  if (!tutorProfile) {
    throw new Error("Tutor profile not found");
  }
  
  // Check if slot belongs to tutor
  const slot = await prisma.availability_slot.findFirst({
    where: {
      id: slotId,
      tutorProfileId: tutorProfile.id
    }
  });
  
  if (!slot) {
    throw new Error("Availability slot not found");
  }
  
  return await prisma.availability_slot.update({
    where: { id: slotId },
    data: {
      ...validatedData,
      updatedAt: new Date()
    }
  });
};

const getAvailabilitySlots = async (userId: string) => {
  const tutorProfile = await prisma.tutor_profile.findUnique({
    where: { userId }
  });
  
  if (!tutorProfile) {
    throw new Error("Tutor profile not found");
  }
  
  return await prisma.availability_slot.findMany({
    where: {
      tutorProfileId: tutorProfile.id
    },
    orderBy: [
      { dayOfWeek: 'asc' },
      { startTime: 'asc' }
    ]
  });
};

const deleteAvailabilitySlot = async (userId: string, slotId: string) => {
  const tutorProfile = await prisma.tutor_profile.findUnique({
    where: { userId }
  });
  
  if (!tutorProfile) {
    throw new Error("Tutor profile not found");
  }
  
  const slot = await prisma.availability_slot.findFirst({
    where: {
      id: slotId,
      tutorProfileId: tutorProfile.id
    }
  });
  
  if (!slot) {
    throw new Error("Availability slot not found");
  }
  
  return await prisma.availability_slot.delete({
    where: { id: slotId }
  });
};

export const TutorService = { createProfile, updateProfile, getProfile, createAvailabilitySlot, updateAvailabilitySlot, getAvailabilitySlots, deleteAvailabilitySlot };