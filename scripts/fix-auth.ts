import "dotenv/config";
import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import pkg from "../src/generated/prisma/index.js";
const { PrismaClient: GeneratedPrismaClient } = pkg;
import { hash } from 'bcryptjs';

const connectionString = `${process.env.DATABASE_URL}`;
const adapter = new PrismaPg({ connectionString });
const prisma = new GeneratedPrismaClient({ adapter });

async function main() {
  const email = 'superadmin@tutorconnect.com';
  const password = 'password123';
  const hashedPassword = await hash(password, 10);

  console.log('Checking for Super Admin user...');
  const existingUser = await prisma.user.findUnique({
    where: { email }
  });

  if (existingUser) {
    console.log('User already exists. Ensuring role is SUPER_ADMIN...');
    await prisma.user.update({
      where: { email },
      data: { role: 'SUPER_ADMIN' }
    });
  } else {
    console.log('Creating new SUPER_ADMIN user...');
    const user = await prisma.user.create({
      data: {
        id: 'user-super-admin',
        name: 'Super Administrator',
        email,
        role: 'SUPER_ADMIN',
        emailVerified: true,
      }
    });

    await prisma.account.create({
      data: {
        id: 'acc-super-admin',
        accountId: 'super-admin-account',
        providerId: 'credential',
        userId: user.id,
        password: hashedPassword,
      }
    });
  }

  console.log('✅ Super Admin account is now ready!');
  console.log(`Email: ${email}`);
  console.log(`Password: ${password}`);
}

main()
  .catch(e => {
    console.error('❌ Script failed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
