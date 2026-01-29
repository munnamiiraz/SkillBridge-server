const { PrismaClient } = require("@prisma/client");
const { hash } = require("bcryptjs");
require("dotenv/config");

const prisma = new PrismaClient();

async function main() {
  console.log("Seeding database...");

  const email = "tutor@skillbridge.com";
  const password = "password123";
  const hashedPassword = await hash(password, 12); // Standard salt rounds

  // Cleanup existing
  const existingUser = await prisma.user.findUnique({ where: { email } });
  if (existingUser) {
    console.log("Deleting existing user...");
    await prisma.user.delete({ where: { email } });
  }

  // 1. Create User
  const user = await prisma.user.create({
    data: {
      name: "John Tutor",
      email: email,
      phone: "01711111111",
      role: "TUTOR",
      status: "ACTIVE",
      emailVerified: true,
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=John",
      updatedAt: new Date(),
    },
  });

  // 2. Create Account
  await prisma.account.create({
    data: {
      id: `acc_${Date.now()}`,
      accountId: user.id,
      providerId: "credential",
      userId: user.id,
      password: hashedPassword,
      updatedAt: new Date(),
    },
  });

  // 3. Create Tutor Profile
  await prisma.tutor_profile.create({
    data: {
      userId: user.id,
      headline: "Expert Math Tutor",
      bio: "I love teaching math to students of all levels. I have over 5 years of experience.",
      hourlyRate: 50,
      experience: 5,
      education: "M.Sc. Mathematics",
      isAvailable: true,
      totalReviews: 0,
      averageRating: 0,
    },
  });

  console.log("✅ Seeded Tutor:");
  console.log(`Email: ${email}`);
  console.log(`Password: ${password}`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
