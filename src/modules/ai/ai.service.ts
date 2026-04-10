import { prisma } from '../../lib/prisma.js';

export const AIService = {
  getEmbedding: async (text: string) => {
    const apiKey = process.env.OPENROUTER_API_KEY;
    if (!apiKey) throw new Error("OPENROUTER_API_KEY not found");

    const response = await fetch("https://openrouter.ai/api/v1/embeddings", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "openai/text-embedding-3-small",
        input: text
      })
    });

    const data = await response.json();
    if (data.error) throw new Error(data.error.message);
    return data.data[0].embedding;
  },

  retrieveContext: async (embedding: number[]) => {
    try {
      const vectorStr = JSON.stringify(embedding);

      // Search Platform Knowledge
      const kbResults: any[] = await prisma.$queryRaw`
        SELECT content FROM knowledge_base
        ORDER BY embedding <=> ${vectorStr}::vector
        LIMIT 3
      `;

      // Search Tutor Profiles (Matching by bio and headline)
      const tutorResults: any[] = await prisma.$queryRaw`
        SELECT 
          tp.id,
          u.name, 
          tp.headline, 
          tp.bio,
          tp."hourlyRate"
        FROM tutor_profile tp
        JOIN "user" u ON tp."userId" = u.id
        WHERE tp.embedding IS NOT NULL
        ORDER BY tp.embedding <=> ${vectorStr}::vector
        LIMIT 3
      `;
      
      const kbContext = kbResults.map(r => r.content).join("\n\n");
      const tutorContext = tutorResults.map(r => 
        `Tutor ID: ${r.id} | Name: ${r.name} | Headline: ${r.headline} | Rate: $${r.hourlyRate}/hr | Bio: ${r.bio}`
      ).join("\n\n");

      return `
        PLATFORM INFO:
        ${kbContext}

        RELEVANT TUTORS:
        ${tutorContext}
      `.trim();
    } catch (error) {
      console.error("Context Retrieval Error:", error);
      return "";
    }
  },

  addKnowledge: async (content: string, metadata: any = {}) => {
    const embedding = await AIService.getEmbedding(content);
    
    // We use queryRaw for insertion to handle the vector type correctly
    await prisma.$queryRaw`
      INSERT INTO knowledge_base (id, content, embedding, metadata, "updatedAt")
      VALUES (
        gen_random_uuid(), 
        ${content}, 
        ${JSON.stringify(embedding)}::vector, 
        ${JSON.stringify(metadata)}::json,
        NOW()
      )
    `;
  },

  getTutorContext: async (tutorId: string) => {
    try {
      const tutor = await prisma.tutor_profile.findUnique({
        where: { id: tutorId },
        include: {
          user: { select: { name: true } },
          tutor_subject: { include: { subject: true } }
        }
      });

      if (!tutor) return "Tutor information not found.";

      return `
        Tutor Name: ${tutor.user.name}
        Headline: ${tutor.headline}
        Bio: ${tutor.bio}
        Expertise: ${tutor.tutor_subject.map(ts => ts.subject.name).join(", ")}
      `.trim();
    } catch (error) {
      console.error("Tutor Context Error:", error);
      return "Error fetching tutor information.";
    }
  }
};