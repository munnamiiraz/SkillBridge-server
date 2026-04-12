
import { AIService } from '../modules/ai/ai.service.js';
import dotenv from 'dotenv';
import { prisma } from '../lib/prisma.js';

dotenv.config();

const PLATFORM_KNOWLEDGE = [
  {
    content: "SkillBridge is an elite educational marketplace connecting students with top-tier tutors. Our mission is to provide personalized, high-fidelity learning experiences powered by AI matching and professional roadmaps.",
    metadata: { category: "general", topic: "mission" }
  },
  {
    content: "To earn money on SkillBridge, users can apply to become a Tutor. To do this: 1. Go to Your Dashboard, 2. Click 'Apply as Tutor', 3. Fill out your professional headline, bio, and hourly rate. 4. Once your profile is created, you can set your availability and start receiving bookings from students.",
    metadata: { category: "tutor", topic: "monetization" }
  },
  {
    content: "The verification process for tutors involves a manual review of their credentials. Verified Tutors receive a 'SkillBridge Verified' badge on their profile, which significantly increases student trust and booking rates. Verification also unlocks advanced analytics on the tutor dashboard.",
    metadata: { category: "tutor", topic: "verification" }
  },
  {
    content: "Payments on SkillBridge are handled securely via Stripe. When a student books a session, the payment is processed immediately. Tutors see their earnings in their dashboard after a session is marked as completed.",
    metadata: { category: "payments", topic: "stripe" }
  },
  {
    content: "A typical learning session follows this lifecycle: 1. Student finds a tutor and books a slot. 2. Tutor confirms the booking. 3. A meeting link is provided. 4. After the session, the tutor clicks 'Mark as Done' in their dashboard to finalize the session and unlock student reviews.",
    metadata: { category: "sessions", topic: "lifecycle" }
  },
  {
    content: "The Smart Matching AI helps students find tutors by analyzing their goals and matching them with tutors' headlines, bios, and subjects of expertise. Students can also request an AI-generated 4-week learning roadmap from their tutor to stay on track.",
    metadata: { category: "ai", topic: "matching" }
  },
  {
    content: "SkillBridge offers learning paths in high-demand areas like Web Development, Data Science, AI Engineering, and Digital Marketing. Tutors in these categories are highly vetted and offer competitive hourly rates.",
    metadata: { category: "subjects", topic: "offerings" }
  },
  {
    content: "If you have issues with a booking or a tutor, you can contact SkillBridge support via the platform's help center or email us at support@skillbridge.edu. We offer a satisfaction guarantee on your first booking.",
    metadata: { category: "support", topic: "contact" }
  }
];

async function seed() {
  console.log("🚀 Starting Knowledge Base Seeding...");
  
  try {
    // Clear existing platform knowledge to avoid duplicates (optional, but good for re-running)
    // await prisma.knowledge_base.deleteMany({
    //   where: { metadata: { path: ['category'], not: null } }
    // });

    for (const item of PLATFORM_KNOWLEDGE) {
      console.log(`Infecting: ${item.metadata.topic}...`);
      await AIService.addKnowledge(item.content, item.metadata);
    }
    
    console.log("✅ Knowledge Base Seeding Completed Successfully.");
  } catch (error) {
    console.error("❌ Seeding Failed:", error);
  } finally {
    process.exit(0);
  }
}

seed();
