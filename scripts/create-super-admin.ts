import { PrismaClient } from '@prisma/client';
import { hash } from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  const email = 'superadmin@tutorconnect.com';
  const password = 'password123';
  const hashedPassword = await hash(password, 10);

  const existingUser = await prisma.user.findUnique({
    where: { email }
  });

  if (existingUser) {
    console.log('User already exists. Updating role to SUPER_ADMIN...');
    await prisma.user.update({
      where: { email },
      data: { role: 'SUPER_ADMIN' }
    });
  } else {
    console.log('Creating new SUPER_ADMIN user...');
    const user = await prisma.user.create({
      data: {
        id: 'user-super-admin',
        name: 'Super Admin',
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

  console.log('✅ Super Admin account ready!');
  console.log(`Email: ${email}`);
  console.log(`Password: ${password}`);
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
