import { AIService } from '../modules/ai/ai.service.js';
import { prisma } from '../lib/prisma.js';
import "dotenv/config";

async function syncEmbeddings() {
  console.log("🔍 Finding tutors missing embeddings...");

  // We use queryRaw because 'embedding' is Unsupported and cannot be filtered in findMany
  const tutors: any[] = await prisma.$queryRaw`
    SELECT tp.id, tp.headline, tp.bio, tp."hourlyRate", tp.experience, tp.education, u.name
    FROM tutor_profile tp
    JOIN "user" u ON tp."userId" = u.id
    WHERE tp.embedding IS NULL
  `;

  console.log(`🏗️ Found ${tutors.length} tutors to process.`);

  for (let i = 0; i < tutors.length; i++) {
    const tutor = tutors[i];
    const textToEmbed = `
      Name: ${tutor.name}
      Headline: ${tutor.headline || ''}
      Bio: ${tutor.bio || ''}
      Hourly Rate: $${tutor.hourlyRate}
      Experience: ${tutor.experience} years
      Education: ${tutor.education || ''}
    `.trim();

    try {
      console.log(`🧠 Generating embedding for ${tutor.name} (${i + 1}/${tutors.length})...`);
      const embedding = await AIService.getEmbedding(textToEmbed);
      
      // Update using queryRaw because vector type is Unsupported by default Prisma methods
      await prisma.$queryRaw`
        UPDATE tutor_profile
        SET embedding = ${JSON.stringify(embedding)}::vector,
            "updatedAt" = NOW()
        WHERE id = ${tutor.id}
      `;
      
      console.log(`✅ Synced ${tutor.name}`);
    } catch (error) {
      console.error(`❌ Failed to sync ${tutor.name}:`, error);
    }
  }

  console.log("✨ All tutor embeddings synced successfully!");
}

syncEmbeddings()
  .catch(err => {
    console.error("FATAL ERROR:", err);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
