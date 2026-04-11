import "dotenv/config";
import { PrismaPg } from '@prisma/adapter-pg'
import pkg from "../src/generated/prisma/index.js";
const { PrismaClient: GeneratedPrismaClient } = pkg;
import { hash } from 'bcryptjs';

const connectionString = `${process.env.DATABASE_URL}`
const adapter = new PrismaPg({connectionString})
const prisma = new GeneratedPrismaClient({ adapter })

async function main() {
  const email = 'admin@admin.com';
  const password = 'password123';
  const hashedPassword = await hash(password, 10);

  console.log(`Resetting password for ${email}...`);
  
  const user = await prisma.user.findUnique({
    where: { email },
    include: { account: true }
  });

  if (!user) {
    console.log('User not found!');
    return;
  }

  const credentialAccount = user.account.find((acc: any) => acc.providerId === 'credential');

  if (credentialAccount) {
    await prisma.account.update({
      where: { id: credentialAccount.id },
      data: { password: hashedPassword }
    });
    console.log('✅ Password reset successfully to: password123');
  } else {
    console.log('Credential account not found for this user!');
  }
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
