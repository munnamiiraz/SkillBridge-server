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
    select: {
      id: true,
      email: true,
      role: true,
      status: true
    }
  });
  console.log(JSON.stringify(users, null, 2));
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
