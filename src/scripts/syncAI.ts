import { prisma } from '../lib/prisma.js';
import { AIService } from '../modules/ai/ai.service.js';

async function syncKnowledge() {
  console.log('🚀 Starting SkillBridge AI Knowledge Sync...');

  try {
    // 0. Ensure pgvector extension is enabled
    console.log('🛠️ Ensuring pgvector extension is enabled in Database...');
    await prisma.$executeRawUnsafe('CREATE EXTENSION IF NOT EXISTS vector');
    
    // 1. Sync Tutors to embeddings
    console.log('📦 Fetching tutor profiles...');
    const tutors = await prisma.tutor_profile.findMany({
      include: {
        user: true,
        tutor_subject: {
          include: {
            subject: true
          }
        }
      }
    });

    console.log(`✨ Found ${tutors.length} tutors. Generating embeddings...`);

    for (const tutor of tutors) {
      const subjectNames = tutor.tutor_subject.map(ts => ts.subject.name).join(', ');
      const content = `
        Tutor Name: ${tutor.user.name}
        Headline: ${tutor.headline || 'Expert Tutor'}
        Bio: ${tutor.bio || ''}
        Subjects: ${subjectNames}
        Rating: ${tutor.averageRating} (${tutor.totalReviews} reviews)
        Experience: ${tutor.experience} years
        Hourly Rate: $${tutor.hourlyRate}
      `.trim();

      console.log(`  - Processing ${tutor.user.name}...`);
      const embedding = await AIService.getEmbedding(content);

      await prisma.$queryRaw`
        UPDATE tutor_profile 
        SET embedding = ${JSON.stringify(embedding)}::vector 
        WHERE id = ${tutor.id}
      `;
    }

    // 2. Add some general platform knowledge
    console.log('\n📚 Adding massive platform knowledge base...');
    const platformKnowledge = [
      "SkillBridge is a premium 1-on-1 tutoring platform connecting global students with expert teachers across 50+ subject areas.",
      "The platform features a 'Perfect Match' discovery system that helps students find tutors based on natural language goals.",
      "Tutors on SkillBridge can set their own hourly rates and manage their own availability calendars.",
      "The 'Quality Shield' is our guarantee that every tutor is personally interviewed and verified by our academy team.",
      "Verified Tutors carry a blue badge on their profile, indicating they have completed our rigorous vetting process.",
      "Students can browse teachers, book sessions, and track their learning progress through a dedicated personal dashboard.",
      "How it Works - Step 1: Browse Teachers. Explore our curated community of experts.",
      "How it Works - Step 2: Book a Session. Choose a time and book a personalized 1-on-1 session.",
      "How it Works - Step 3: Learn & Grow. Connect with your teacher and learn at your own pace.",
      "How it Works - Step 4: Track Progress. Monitor your journey and celebrate achievements.",
      "Role: STUDENT. Students can book sessions, view learning paths, and manage their study schedule.",
      "Role: TUTOR. Tutors can set availability, manage bookings, and earn money sharing their expertise.",
      "Role: VERIFIED_TUTOR. Elite tutors with proven experience and verified credentials.",
      "Role: ADMIN. Platform administrators who manage users, categories, and tutor verifications.",
      "Booking Process: Sessions are booked in 60-minute blocks by default, but tutors can customize durations.",
      "Booking Status: PENDING - Awaiting tutor confirmation. CONFIRMED - Scheduled and ready. COMPLETED - Post-session phase.",
      "Privacy Policy: We collect account information to provide and improve our services and maintain secure learning environments.",
      "Data Security: We use industry-standard measures to protect user data from unauthorized access or theft.",
      "Subjects: We offer detailed learning paths in Programming (React, Python, Node.js), Music (Piano, Guitar, Vocal), Mathematics, and Languages.",
      "Earning: Tutors can use our Earning Calculator to estimate potential monthly income based on their hourly rate and weekly hours.",
      "The SkillBridge Dashboard provides real-time analytics for earnings, session count, and student retention for tutors.",
      "Students can access 'Success Stories' to see how others have achieved their professional goals through our platform.",
      "Our 'Trending Disciplines' highlight the most in-demand skills in the current job market to help students choose what to learn next.",
      "SkillBridge is built with a glassmorphic design system that reflects a modern, high-authority educational marketplace.",
      "Premium Design: We use Indigo and Purple gradients, high-authority typography, and smooth micro-animations for an elite experience.",
      "Support: Students and tutors can get in touch with our team via the support module available in their dashboards.",
      "Legal: All users must adhere to our Terms of Service which ensure a respectful and productive learning environment."
    ];

    for (const info of platformKnowledge) {
      console.log(`  - Storing: ${info.substring(0, 40)}...`);
      await AIService.addKnowledge(info, { source: 'platform_manual_seed' });
    }

    console.log('\n✅ AI Sync completed successfully! The chatbot is now officially "Smart".');
  } catch (error) {
    console.error('❌ Sync Failed:', error);
  } finally {
    process.exit(0);
  }
}

syncKnowledge();
