const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  try {
    const result = await prisma.tutor_profile.updateMany({
      data: {
        totalSessions: 41,
        totalReviews: 21,
        averageRating: 4.2
      }
    });
    console.log(`Successfully restored stats for ${result.count} profiles.`);
  } catch (e) {
    console.error(e);
  } finally {
    await prisma.$disconnect();
  }
}

main();
