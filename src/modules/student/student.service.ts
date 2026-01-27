import { prisma } from "../../lib/prisma";
import { updateProfileSchema, UpdateProfileInput } from "./student.validation";

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

export const StudentService = { updateProfile, getProfile };
