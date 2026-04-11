import "dotenv/config";
import { PrismaPg } from '@prisma/adapter-pg'
import pkg from "../src/generated/prisma/index.js";
const { PrismaClient: GeneratedPrismaClient } = pkg;

const connectionString = `${process.env.DATABASE_URL}`
const adapter = new PrismaPg({connectionString})
const prisma = new GeneratedPrismaClient({ adapter })

async function main() {
  const userEmail = 'admin@admin.com';
  
  const user = await prisma.user.findUnique({
    where: { email: userEmail },
    include: {
      account: true
    }
  });

  if (!user) {
    console.log(`User with email ${userEmail} not found!`);
  } else {
    console.log('User found:', {
        id: user.id,
        email: user.email,
        role: user.role,
        status: user.status
    });
    console.log('Linked Accounts:', user.account.map((acc: any) => ({
        id: acc.id,
        providerId: acc.providerId,
        accountId: acc.accountId,
        hasPassword: !!acc.password
    })));
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
