import "dotenv/config";
import { PrismaPg } from '@prisma/adapter-pg'
import pkg from "../src/generated/prisma/index.js";
const { PrismaClient: GeneratedPrismaClient } = pkg;

const connectionString = `${process.env.DATABASE_URL}`
const adapter = new PrismaPg({connectionString})
const prisma = new GeneratedPrismaClient({ adapter })

async function main() {
  const users = await prisma.user.findMany({
    where: {
      role: { in: ['ADMIN', 'SUPER_ADMIN'] }
    },
    include: {
      account: true
    }
  });

  users.forEach(u => {
    console.log(`User: ${u.email} | Role: ${u.role}`);
    u.account.forEach((acc: any) => {
        console.log(`  - Account: ${acc.providerId} | hasPassword: ${!!acc.password}`);
    });
  });
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
