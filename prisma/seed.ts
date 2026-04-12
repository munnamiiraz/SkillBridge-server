import pkg from "../src/generated/prisma/index.js";
const { PrismaClient } = pkg;
import { Prisma } from "../src/generated/prisma/index.js";
import "dotenv/config";
import { hash } from "bcryptjs";
import { PrismaPg } from "@prisma/adapter-pg";
import pkg_pg from 'pg';
const { Pool } = pkg_pg;

const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);

const prisma = new PrismaClient({
  adapter,
});

// Seed Configuration
const NUM_STUDENTS = 50;
const NUM_TUTORS = 50;
const NUM_BOOKINGS_PER_TUTOR = 5;

// Data Sets
const firstNames = ["Abdul", "Abdur", "Ahmed", "Akbar", "Alam", "Ali", "Amin", "Amir", "Anwar", "Ashraf", "Fatima", "Ayesha", "Khadija", "Zainab", "Maryam"];
const lastNames = ["Rahman", "Ahmed", "Ali", "Khan", "Hossain", "Islam", "Uddin", "Akter", "Begum", "Chowdhury"];
const educationLevels = [
  "BSc in Mathematics from Dhaka University",
  "MSc in Physics from BUET",
  "PhD in Computer Science from NSU",
  "MBA from IBA, Dhaka University",
  "BSc in Chemistry from Chittagong University"
];
const areas = ["Dhanmondi", "Gulshan", "Banani", "Uttara", "Mirpur", "Mohammadpur", "Bashundhara"];

// Helpers
const generateName = () => `${firstNames[Math.floor(Math.random() * firstNames.length)]} ${lastNames[Math.floor(Math.random() * lastNames.length)]}`;
const generatePhone = () => `+8801${Math.floor(3 + Math.random() * 7)}${Math.floor(10000000 + Math.random() * 90000000)}`;
const generateAddress = () => `House ${Math.floor(1 + Math.random() * 100)}, Road ${Math.floor(1 + Math.random() * 20)}, ${areas[Math.floor(Math.random() * areas.length)]}, Dhaka`;
const randomDate = (start: Date, end: Date) => new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));

async function main() {
  console.log("🚀 Starting Database Seed...");

  // 1. Clean dynamic data (Preserve Users/Accounts for the 5 core users)
  console.log("🧹 Cleaning reviews, bookings, and slots...");
  await prisma.review.deleteMany();
  await prisma.booking.deleteMany();
  await prisma.availability_slot.deleteMany();
  await prisma.tutor_subject.deleteMany();
  await prisma.subject.deleteMany();
  await prisma.category.deleteMany();
  
  // Delete all users EXCEPT the 5 core demo users
  const coreUserIds = [
    "00000000-0000-4000-a000-000000000001", // admin
    "00000000-0000-4000-a000-000000000002", // superadmin
    "00000000-0000-4000-a000-000000000003", // student
    "00000000-0000-4000-a000-000000000004", // tutor
    "00000000-0000-4000-a000-000000000005"  // verified tutor
  ];

  await prisma.tutor_profile.deleteMany({
    where: { NOT: { id: { in: ["00000000-0000-4000-b000-000000000004", "00000000-0000-4000-b000-000000000005"] } } }
  });
  
  await prisma.user.deleteMany({
    where: { NOT: { id: { in: coreUserIds } } }
  });

  const hashedPassword = await hash("password123", 10);

  // 2. Categories & Subjects
  console.log("📚 Upserting Categories & Subjects...");
  const categoriesData = [
    { id: "cat-1", name: "Mathematics", subjects: ["Calculus", "Algebra", "Geometry", "Statistics"] },
    { id: "cat-2", name: "Science", subjects: ["Physics", "Chemistry", "Biology"] },
    { id: "cat-3", name: "Programming", subjects: ["Python", "JavaScript", "Web Development"] },
    { id: "cat-4", name: "Business", subjects: ["Accounting", "Economics"] }
  ];

  for (const cat of categoriesData) {
    await prisma.category.upsert({
      where: { id: cat.id },
      update: { name: cat.name },
      create: { id: cat.id, name: cat.name, updatedAt: new Date() }
    });

    for (let i = 0; i < cat.subjects.length; i++) {
        const subName = cat.subjects[i];
        await prisma.subject.upsert({
            where: { name_categoryId: { name: subName, categoryId: cat.id } },
            update: {},
            create: { id: `sub-${cat.id}-${i}`, name: subName, categoryId: cat.id, updatedAt: new Date() }
        });
    }
  }

  const allSubjects = await prisma.subject.findMany();

  // 3. Upsert Core 5 Users
  console.log("👤 Ensuring Core Demo Users...");
  const coreUsers = [
    { id: "00000000-0000-4000-a000-000000000001", email: "admin@gmail.com", name: "System Admin", role: "ADMIN" },
    { id: "00000000-0000-4000-a000-000000000002", email: "superadmin@gmail.com", name: "Super Admin", role: "SUPER_ADMIN" },
    { id: "00000000-0000-4000-a000-000000000003", email: "student@gmail.com", name: "Demo Student", role: "STUDENT" },
    { id: "00000000-0000-4000-a000-000000000004", email: "tutor@gmail.com", name: "Demo Tutor", role: "TUTOR" },
    { id: "00000000-0000-4000-a000-000000000005", email: "verified@gmail.com", name: "Verified Expert", role: "VERIFIED_TUTOR" }
  ];

  for (const u of coreUsers) {
    await prisma.user.upsert({
      where: { id: u.id },
      update: { name: u.name, role: u.role as any, status: "ACTIVE" },
      create: { 
        id: u.id, 
        email: u.email, 
        name: u.name, 
        role: u.role as any, 
        status: "ACTIVE", 
        emailVerified: true, 
        phone: generatePhone(),
        updatedAt: new Date()
      }
    });

    await prisma.account.upsert({
      where: { id: `acc-${u.id}` },
      update: { password: hashedPassword },
      create: {
        id: `acc-${u.id}`,
        userId: u.id,
        accountId: u.email,
        providerId: "credential",
        password: hashedPassword,
        updatedAt: new Date()
      }
    });
  }

  // Ensure Tutor Profiles for Demo Tutors
  await prisma.tutor_profile.upsert({
    where: { id: "00000000-0000-4000-b000-000000000004" },
    update: { isAvailable: true },
    create: {
        id: "00000000-0000-4000-b000-000000000004",
        userId: "00000000-0000-4000-a000-000000000004",
        headline: "Experienced General Tutor",
        bio: "I help students with various subjects.",
        hourlyRate: 40,
        experience: 4,
        education: "BSc in Education",
        isAvailable: true,
        updatedAt: new Date()
    }
  });

  await prisma.tutor_profile.upsert({
    where: { id: "00000000-0000-4000-b000-000000000005" },
    update: { isAvailable: true, isVerified: true },
    create: {
        id: "00000000-0000-4000-b000-000000000005",
        userId: "00000000-0000-4000-a000-000000000005",
        headline: "Verified Academic Expert | PhD",
        bio: "Specializing in advanced science and math.",
        hourlyRate: 80,
        experience: 12,
        education: "PhD in Physics",
        isAvailable: true,
        isVerified: true,
        isFeatured: true,
        updatedAt: new Date()
    }
  });

  // 4. Create many Dynamic Students
  console.log(`👨‍🎓 Creating ${NUM_STUDENTS} more students...`);
  const studentIds = ["00000000-0000-4000-a000-000000000003"];
  for (let i = 0; i < NUM_STUDENTS; i++) {
    const id = crypto.randomUUID();
    const name = generateName();
    const email = `student.${i}@example.com`;
    await prisma.user.create({
      data: {
        id, email, name, role: "STUDENT", phone: generatePhone(), address: generateAddress(), emailVerified: true, updatedAt: new Date()
      }
    });
    studentIds.push(id);
  }

  // 5. Create many Dynamic Tutors
  console.log(`👨‍🏫 Creating ${NUM_TUTORS} more tutors...`);
  const tutorProfileIds = ["00000000-0000-4000-b000-000000000004", "00000000-0000-4000-b000-000000000005"];
  for (let i = 0; i < NUM_TUTORS; i++) {
    const userId = crypto.randomUUID();
    const profileId = crypto.randomUUID();
    const name = generateName();
    const email = `tutor.${i}@example.com`;
    
    await prisma.user.create({
      data: {
        id: userId, email, name, role: i % 3 === 0 ? "VERIFIED_TUTOR" : "TUTOR", phone: generatePhone(), address: generateAddress(), emailVerified: true, updatedAt: new Date()
      }
    });

    await prisma.tutor_profile.create({
      data: {
        id: profileId,
        userId: userId,
        headline: `${allSubjects[i % allSubjects.length].name} Professional`,
        bio: `I have been teaching ${allSubjects[i % allSubjects.length].name} for several years.`,
        hourlyRate: 30 + Math.floor(Math.random() * 50),
        experience: 2 + Math.floor(Math.random() * 10),
        education: educationLevels[i % educationLevels.length],
        isAvailable: true,
        isVerified: i % 3 === 0,
        isFeatured: i % 5 === 0,
        updatedAt: new Date()
      }
    });
    tutorProfileIds.push(profileId);

    // Link subjects
    const numSub = 1 + Math.floor(Math.random() * 3);
    for (let j = 0; j < numSub; j++) {
        await prisma.tutor_subject.create({
            data: { id: crypto.randomUUID(), tutorProfileId: profileId, subjectId: allSubjects[(i + j) % allSubjects.length].id }
        });
    }

    // Availability Slots
    for (let day = 0; day < 7; day++) {
        if (Math.random() > 0.4) {
            await prisma.availability_slot.create({
                data: {
                    id: crypto.randomUUID(),
                    tutorProfileId: profileId,
                    dayOfWeek: day,
                    startTime: "09:00",
                    endTime: "12:00",
                    isRecurring: true,
                    updatedAt: new Date()
                }
            });
            await prisma.availability_slot.create({
                data: {
                    id: crypto.randomUUID(),
                    tutorProfileId: profileId,
                    dayOfWeek: day,
                    startTime: "15:00",
                    endTime: "18:00",
                    isRecurring: true,
                    updatedAt: new Date()
                }
            });
        }
    }
  }

  // 6. Seed some activity (Bookings & Reviews)
  console.log("📝 Seeding interactions...");
  for (const tProfileId of tutorProfileIds) {
    for (let k = 0; k < NUM_BOOKINGS_PER_TUTOR; k++) {
        const studentId = studentIds[Math.floor(Math.random() * studentIds.length)];
        const bookingId = crypto.randomUUID();
        const date = randomDate(new Date(2025, 0, 1), new Date());
        
        await prisma.booking.create({
            data: {
                id: bookingId,
                studentId,
                tutorProfileId: tProfileId,
                scheduledAt: date,
                duration: 60,
                status: "COMPLETED",
                subject: allSubjects[Math.floor(Math.random() * allSubjects.length)].name,
                price: 50,
                updatedAt: new Date()
            }
        });

        await prisma.review.create({
            data: {
                id: crypto.randomUUID(),
                bookingId,
                studentId,
                rating: 4 + Math.floor(Math.random() * 2), // 4 or 5
                comment: "Great session, very helpful!",
                updatedAt: new Date()
            }
        });
    }
  }

  console.log("✅ Seed complete! Now update stats...");
  // Note: Actual stats are usually updated by a separate service or trigger, 
  // but for a seed we can leave them at 0 or run the update script after.
}

main()
  .catch((e) => {
    console.error("❌ Error seeding database:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
    await pool.end();
  });