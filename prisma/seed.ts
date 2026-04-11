import pkg from "../src/generated/prisma/index.js";
const { PrismaClient } = pkg;
import { Prisma } from "../src/generated/prisma/index.js";
import "dotenv/config";
import { hash } from "bcryptjs";
import { PrismaPg } from "@prisma/adapter-pg";
import { log } from "node:console";

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
});

const prisma = new PrismaClient({
  adapter,
});

// Bangladeshi first names
const firstNames = [
  "Abdul", "Abdur", "Ahmed", "Akbar", "Alam", "Ali", "Amin", "Amir", "Anwar", "Ashraf",
  "Aziz", "Bakhtiar", "Delwar", "Farid", "Faruk", "Habib", "Hafiz", "Hamid", "Hasan", "Hossain",
  "Ibrahim", "Idris", "Imran", "Iqbal", "Ishtiaq", "Jamal", "Jalal", "Kamal", "Khalid", "Liaquat",
  "Mahbub", "Mahmud", "Majid", "Manzoor", "Masud", "Mehdi", "Moin", "Mostafa", "Mujib", "Mukhtar",
  "Munir", "Musa", "Nasir", "Nazmul", "Nurul", "Rafiq", "Rahman", "Rashid", "Rashed", "Riaz",
  "Sabbir", "Sadiq", "Saeed", "Salah", "Salim", "Sayeed", "Shafi", "Shahid", "Shahin", "Shakil",
  "Shamsul", "Sharif", "Sohail", "Sulaiman", "Tahir", "Tanvir", "Tariq", "Wahid", "Yusuf", "Zahid",
  "Fatima", "Ayesha", "Khadija", "Zainab", "Maryam", "Hafsa", "Aisha", "Ruqayyah", "Sumaya", "Nusrat",
  "Nasrin", "Shabnam", "Shamima", "Sultana", "Tahira", "Taslima", "Rehana", "Rowshan", "Razia", "Parveen",
  "Nafisa", "Naima", "Mumtaz", "Maksuda", "Laila", "Kulsum", "Kamrun", "Jasmin", "Habiba", "Farzana",
  "Farida", "Dilruba", "Bilkis", "Anjuman", "Amina", "Aleya", "Salma", "Shahana", "Shirin", "Sabina"
];

// Bangladeshi last names
const lastNames = [
  "Rahman", "Ahmed", "Ali", "Khan", "Hossain", "Islam", "Uddin", "Akter", "Begum", "Chowdhury",
  "Malik", "Sheikh", "Miah", "Hussain", "Karim", "Hassan", "Haque", "Mahmud", "Siddique", "Alam",
  "Akbar", "Aziz", "Bari", "Das", "Dey", "Gazi", "Haider", "Iqbal", "Kabir", "Khatun",
  "Molla", "Mondal", "Nahar", "Parvin", "Pasha", "Rashid", "Roy", "Saha", "Sarkar", "Talukdar",
  "Zaman", "Abedin", "Ansari", "Bhuiyan", "Farooq", "Ghani", "Habib", "Hafiz", "Halim", "Hanif",
  "Hussain", "Jamil", "Latif", "Majid", "Masud", "Matin", "Mizan", "Morshed", "Nabi", "Nasir",
  "Qadir", "Quddus", "Rahim", "Razzaq", "Salam", "Sattar", "Shafiq", "Shakur", "Siddiqui", "Wahab"
];

// Generate random Bangladeshi name
function generateName(): string {
  const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
  const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
  return `${firstName} ${lastName}`;
}

// Generate random Bangladeshi phone number
function generatePhone(): string {
  const prefixes = ["013", "014", "015", "016", "017", "018", "019"];
  const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
  const number = Math.floor(10000000 + Math.random() * 90000000);
  return `+880${prefix}${number}`;
}

// Generate random email
function generateEmail(name: string, index: number): string {
  const cleanName = name.toLowerCase().replace(/\s+/g, ".");
  const domains = ["gmail.com", "yahoo.com", "outlook.com", "example.com"];
  const domain = domains[Math.floor(Math.random() * domains.length)];
  return `${cleanName}.${index}@${domain}`;
}

// Generate random Bangladeshi address
function generateAddress(): string {
  const areas = [
    "Dhanmondi", "Gulshan", "Banani", "Uttara", "Mirpur", "Mohammadpur", "Bashundhara", 
    "Tejgaon", "Motijheel", "Malibagh", "Rampura", "Badda", "Khilkhet", "Mohakhali",
    "Farmgate", "Kawran Bazar", "Shahbagh", "Azimpur", "Lalmatia", "Jigatola"
  ];
  const cities = ["Dhaka", "Chittagong", "Sylhet", "Rajshahi", "Khulna", "Barisal"];
  
  const houseNo = Math.floor(1 + Math.random() * 999);
  const roadNo = Math.floor(1 + Math.random() * 50);
  const area = areas[Math.floor(Math.random() * areas.length)];
  const city = cities[Math.floor(Math.random() * cities.length)];
  
  return `House ${houseNo}, Road ${roadNo}, ${area}, ${city}, Bangladesh`;
}

// Generate random date within range
function randomDate(start: Date, end: Date): Date {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

// Generate random time
function randomTime(): string {
  const hour = Math.floor(8 + Math.random() * 12); // 8 AM to 8 PM
  const minute = Math.random() < 0.5 ? "00" : "30";
  return `${hour.toString().padStart(2, "0")}:${minute}`;
}

async function main() {
  console.log("🗑️  Deleting all existing data...");

  // Delete all existing data in correct order
  await prisma.review.deleteMany();
  await prisma.booking.deleteMany();
  await prisma.availability_slot.deleteMany();
  await prisma.tutor_subject.deleteMany();
  await prisma.tutor_profile.deleteMany();
  await prisma.subject.deleteMany();
  await prisma.category.deleteMany();
  await prisma.session.deleteMany();
  await prisma.account.deleteMany();
  await prisma.user.deleteMany();
  await prisma.verification.deleteMany();

  console.log("✅ All existing data deleted");

  const hashedPassword = await hash("password123", 10);
  
  // Create Categories
  console.log("📚 Creating categories...");
  const categories = [
    {
      id: "cat-1",
      name: "Mathematics",
      description: "All math-related subjects including algebra, calculus, geometry, and statistics",
    },
    {
      id: "cat-2",
      name: "Science",
      description: "Physics, Chemistry, Biology, and Environmental Science",
    },
    {
      id: "cat-3",
      name: "Languages",
      description: "Language learning including English, Bengali, Arabic, and more",
    },
    {
      id: "cat-4",
      name: "Computer Science",
      description: "Programming, Web Development, Data Science, and IT",
    },
    {
      id: "cat-5",
      name: "Business",
      description: "Accounting, Economics, Management, and Marketing",
    },
  ];

  for (const cat of categories) {
    await prisma.category.create({
      data: { ...cat, updatedAt: new Date() },
    });
  }

  // Create Subjects
  console.log("📖 Creating subjects...");
  const subjects = [
    // Mathematics
    { id: "sub-1", name: "Calculus", categoryId: "cat-1" },
    { id: "sub-2", name: "Algebra", categoryId: "cat-1" },
    { id: "sub-3", name: "Geometry", categoryId: "cat-1" },
    { id: "sub-4", name: "Statistics", categoryId: "cat-1" },
    { id: "sub-5", name: "Trigonometry", categoryId: "cat-1" },
    // Science
    { id: "sub-6", name: "Physics", categoryId: "cat-2" },
    { id: "sub-7", name: "Chemistry", categoryId: "cat-2" },
    { id: "sub-8", name: "Biology", categoryId: "cat-2" },
    { id: "sub-9", name: "Environmental Science", categoryId: "cat-2" },
    // Languages
    { id: "sub-10", name: "English", categoryId: "cat-3" },
    { id: "sub-11", name: "Bengali", categoryId: "cat-3" },
    { id: "sub-12", name: "Arabic", categoryId: "cat-3" },
    // Computer Science
    { id: "sub-13", name: "Python Programming", categoryId: "cat-4" },
    { id: "sub-14", name: "Web Development", categoryId: "cat-4" },
    { id: "sub-15", name: "Data Science", categoryId: "cat-4" },
    { id: "sub-16", name: "JavaScript", categoryId: "cat-4" },
    // Business
    { id: "sub-17", name: "Accounting", categoryId: "cat-5" },
    { id: "sub-18", name: "Economics", categoryId: "cat-5" },
    { id: "sub-19", name: "Business Management", categoryId: "cat-5" },
  ];

  for (const subject of subjects) {
    await prisma.subject.create({
      data: { ...subject, updatedAt: new Date() },
    });
  }

  // Create Admin User
  console.log("👤 Creating admin user...");
  const adminId = "00000000-0000-4000-a000-000000000001";
  const admin = await prisma.user.create({
    data: {
      id: adminId,
      name: "System Admin",
      email: "admin@gmail.com",
      phone: generatePhone(),
      role: "ADMIN",
      emailVerified: true,
      updatedAt: new Date(),
    },
  });

  await prisma.account.create({
    data: {
      id: crypto.randomUUID(),
      accountId: "admin-account",
      providerId: "credential",
      userId: admin.id,
      password: hashedPassword,
      updatedAt: new Date(),
    },
  });

  // Create Super Admin User
  console.log("👑 Creating super admin user...");
  const superAdminId = "00000000-0000-4000-a000-000000000002";
  const superAdmin = await prisma.user.create({
    data: {
      id: superAdminId,
      name: "Super Administrator",
      email: "superadmin@gmail.com",
      phone: generatePhone(),
      role: "SUPER_ADMIN",
      emailVerified: true,
      updatedAt: new Date(),
    },
  });

  await prisma.account.create({
    data: {
      id: crypto.randomUUID(),
      accountId: "super-admin-account",
      providerId: "credential",
      userId: superAdmin.id,
      password: hashedPassword,
      updatedAt: new Date(),
    },
  });

  // Create Demo Student
  console.log("👨‍🎓 Creating demo student...");
  const demoStudentId = "00000000-0000-4000-a000-000000000003";
  const demoStudent = await prisma.user.create({
    data: {
      id: demoStudentId,
      name: "Demo Student",
      email: "student@gmail.com",
      phone: generatePhone(),
      role: "STUDENT",
      emailVerified: true,
      address: generateAddress(),
      updatedAt: new Date(),
    },
  });

  await prisma.account.create({
    data: {
      id: crypto.randomUUID(),
      accountId: "demo-student-account",
      providerId: "credential",
      userId: demoStudent.id,
      password: hashedPassword,
      updatedAt: new Date(),
    },
  });

  // Create Demo Tutor
  console.log("👨‍🏫 Creating demo tutor...");
  const demoTutorId = "00000000-0000-4000-a000-000000000004";
  const demoTutor = await prisma.user.create({
    data: {
      id: demoTutorId,
      name: "Demo Tutor",
      email: "tutor@gmail.com",
      phone: generatePhone(),
      role: "TUTOR",
      emailVerified: true,
      address: generateAddress(),
      updatedAt: new Date(),
    },
  });

  await prisma.account.create({
    data: {
      id: crypto.randomUUID(),
      accountId: "demo-tutor-account",
      providerId: "credential",
      userId: demoTutor.id,
      password: hashedPassword,
      updatedAt: new Date(),
    },
  });

  const demoTutorProfileId = "00000000-0000-4000-b000-000000000004";
  await prisma.tutor_profile.create({
    data: {
      id: demoTutorProfileId,
      userId: demoTutor.id,
      bio: "Demo tutor profile for testing purposes.",
      headline: "Professional Demo Tutor",
      hourlyRate: 50,
      address: generateAddress(),
      experience: 5,
      education: "Master of Education",
      isAvailable: true,
      averageRating: 4.8,
      totalReviews: 12,
      totalSessions: 45,
      updatedAt: new Date(),
    },
  });

  // Create Demo Verified Tutor
  console.log("🌟 Creating demo verified tutor...");
  const demoVerifiedId = "00000000-0000-4000-a000-000000000005";
  const demoVerified = await prisma.user.create({
    data: {
      id: demoVerifiedId,
      name: "Verified Expert",
      email: "verified@gmail.com",
      phone: generatePhone(),
      role: "VERIFIED_TUTOR",
      emailVerified: true,
      address: generateAddress(),
      updatedAt: new Date(),
    },
  });

  await prisma.account.create({
    data: {
      id: crypto.randomUUID(),
      accountId: "demo-verified-account",
      providerId: "credential",
      userId: demoVerified.id,
      password: hashedPassword,
      updatedAt: new Date(),
    },
  });

  const demoVerifiedProfileId = "00000000-0000-4000-b000-000000000005";
  await prisma.tutor_profile.create({
    data: {
      id: demoVerifiedProfileId,
      userId: demoVerified.id,
      bio: "High authority verified tutor profile with premium features unlocked. Specializing in advanced Mathematics and Physics.",
      headline: "Verified Academic Specialist | Top 1% Ranked Tutor",
      hourlyRate: 75,
      address: generateAddress(),
      experience: 10,
      education: "PhD in Mathematics from Stanford",
      isAvailable: true,
      averageRating: 5.0,
      totalReviews: 89,
      totalSessions: 230,
      isFeatured: true,
      isVerified: true,
      updatedAt: new Date(),
    },
  });

  // Data Seeding for Demo Users specifically
  console.log("🛠️  Assigning data to demo accounts...");
  
  // Link Demo Tutors to Subjects
  await prisma.tutor_subject.createMany({
    data: [
      { id: crypto.randomUUID(), tutorProfileId: demoVerifiedProfileId, subjectId: subjects[0].id }, // Calculus
      { id: crypto.randomUUID(), tutorProfileId: demoVerifiedProfileId, subjectId: subjects[5].id }, // Physics
      { id: crypto.randomUUID(), tutorProfileId: demoTutorProfileId, subjectId: subjects[9].id }, // English
    ]
  });

  // Availability Slots for Demo Tutors
  await prisma.availability_slot.createMany({
    data: [
      { id: crypto.randomUUID(), tutorProfileId: demoVerifiedProfileId, dayOfWeek: 1, startTime: "09:00", endTime: "12:00", isRecurring: true, updatedAt: new Date() },
      { id: crypto.randomUUID(), tutorProfileId: demoVerifiedProfileId, dayOfWeek: 3, startTime: "14:00", endTime: "18:00", isRecurring: true, updatedAt: new Date() },
      { id: crypto.randomUUID(), tutorProfileId: demoTutorProfileId, dayOfWeek: 2, startTime: "10:00", endTime: "15:00", isRecurring: true, updatedAt: new Date() },
    ]
  });

  // Create Bookings for Demo Student and Tutors
  console.log("📅 Creating demo interactions...");
  
  // Completed Bookings for Verified Tutor (to populate analytics)
  for (let i = 0; i < 40; i++) {
    const monthsAgo = Math.floor(Math.random() * 6);
    const date = new Date();
    date.setMonth(date.getMonth() - monthsAgo);
    date.setDate(Math.floor(Math.random() * 28) + 1);

    const bookingId = crypto.randomUUID();
    await prisma.booking.create({
      data: {
        id: bookingId,
        studentId: demoStudentId,
        tutorProfileId: demoVerifiedProfileId,
        scheduledAt: date,
        duration: 90,
        status: "COMPLETED",
        subject: "Calculus",
        price: 75 * 1.5,
        notes: "Regular exam preparation session.",
        updatedAt: new Date(),
      }
    });

    if (i < 20) { // Add reviews for some
        await prisma.review.create({
            data: {
                id: crypto.randomUUID(),
                bookingId: bookingId,
                studentId: demoStudentId,
                rating: 5,
                comment: "Excellent teaching style! Really helped me grasp complex integrations.",
                updatedAt: new Date(),
            }
        });
    }
  }

  // Active/Upcoming Bookings for Demo Student
  await prisma.booking.create({
    data: {
      id: crypto.randomUUID(),
      studentId: demoStudentId,
      tutorProfileId: demoVerifiedProfileId,
      scheduledAt: new Date(Date.now() + 86400000), // Tomorrow
      duration: 60,
      status: "CONFIRMED",
      subject: "Physics",
      price: 75,
      meetingLink: "https://meet.google.com/abc-defg-hij",
      updatedAt: new Date(),
    }
  });

  await prisma.booking.create({
    data: {
      id: crypto.randomUUID(),
      studentId: demoStudentId,
      tutorProfileId: demoTutorProfileId,
      scheduledAt: new Date(Date.now() + 172800000), // Day after
      duration: 60,
      status: "PENDING",
      subject: "English",
      price: 50,
      updatedAt: new Date(),
    }
  });

  // Create 100 Students
  console.log("👨‍🎓 Creating 100 students...");
  const studentIds: string[] = [];

  for (let i = 0; i < 100; i++) {
    const studentId = crypto.randomUUID();
    const studentName = generateName();
    
    const student = await prisma.user.create({
      data: {
        id: studentId,
        name: studentName,
        email: generateEmail(studentName, i + 1),
        phone: generatePhone(),
        role: "STUDENT",
        emailVerified: Math.random() > 0.3, // 70% verified
        address: generateAddress(),
        updatedAt: new Date(),
      },
    });

    await prisma.account.create({
      data: {
        id: crypto.randomUUID(),
        accountId: `student${i + 1}-account`,
        providerId: "credential",
        userId: student.id,
        password: hashedPassword,
        updatedAt: new Date(),
      },
    });

    studentIds.push(studentId);

    if ((i + 1) % 20 === 0) {
      console.log(`   ✓ Created ${i + 1} students...`);
    }
  }

  // Create 50 Tutors
  console.log("👨‍🏫 Creating 50 tutors...");
  const tutorProfiles: any[] = [];
  const tutorIds: string[] = [];

  const educationLevels = [
    "BSc in Mathematics from Dhaka University",
    "MSc in Physics from BUET",
    "PhD in Computer Science from NSU",
    "MBA from IBA, Dhaka University",
    "BSc in Chemistry from Chittagong University",
    "MSc in Biology from Jahangirnagar University",
    "BA in English from Rajshahi University",
    "MA in Bengali Literature from Dhaka University",
    "BSc in Statistics from Shahjalal University",
    "MSc in Economics from BRAC University",
  ];

  for (let i = 0; i < 50; i++) {
    const tutorProfileId = crypto.randomUUID();
    const tutorProfile = await prisma.tutor_profile.create({
      data: {
        id: tutorProfileId,
        userId: tutor.id,
        bio: `Experienced ${subjects[i % subjects.length].name} tutor with ${experience} years of teaching experience. Passionate about helping students achieve their academic goals.`,
        headline: `${subjects[i % subjects.length].name} Expert | ${experience} Years Experience`,
        hourlyRate: hourlyRate,
        address: generateAddress(),
        experience: experience,
        education: educationLevels[Math.floor(Math.random() * educationLevels.length)],
        isAvailable: Math.random() > 0.2, // 80% available
        averageRating: parseFloat(averageRating.toFixed(1)),
        totalReviews: totalReviews,
        totalSessions: totalSessions,
        isFeatured: Math.random() > 0.7, // 30% featured
        updatedAt: new Date(),
      },
    });

    tutorProfiles.push(tutorProfile);
    tutorIds.push(tutorId);

    if ((i + 1) % 10 === 0) {
      console.log(`   ✓ Created ${i + 1} tutors...`);
    }
  }

  // Link Tutors to Subjects
  console.log("🔗 Linking tutors to subjects...");
  for (let i = 0; i < tutorProfiles.length; i++) {
    const numSubjects = Math.floor(1 + Math.random() * 4);
    const tutorSubjectIds = new Set<string>();

    while (tutorSubjectIds.size < numSubjects) {
      const randomSubject = subjects[Math.floor(Math.random() * subjects.length)];
      tutorSubjectIds.add(randomSubject.id);
    }

    for (const subjectId of tutorSubjectIds) {
      await prisma.tutor_subject.create({
        data: {
          id: crypto.randomUUID(),
          tutorProfileId: tutorProfiles[i].id,
          subjectId: subjectId,
        },
      });
    }
  }

  // Create Availability Slots
  console.log("📅 Creating availability slots...");
  for (let i = 0; i < tutorProfiles.length; i++) {
    const numSlots = Math.floor(2 + Math.random() * 5);

    for (let j = 0; j < numSlots; j++) {
      const dayOfWeek = Math.floor(Math.random() * 7);
      const startHour = Math.floor(8 + Math.random() * 8);
      const duration = Math.floor(2 + Math.random() * 4);
      const endHour = startHour + duration;

      await prisma.availability_slot.create({
        data: {
          id: crypto.randomUUID(),
          tutorProfileId: tutorProfiles[i].id,
          dayOfWeek: dayOfWeek,
          startTime: `${startHour.toString().padStart(2, "0")}:00`,
          endTime: `${endHour.toString().padStart(2, "0")}:00`,
          isRecurring: true,
          updatedAt: new Date(),
        },
      });
    }
  }

  // Create Bookings (500 bookings)
  console.log("📝 Creating 500 bookings...");
  const bookingStatuses = ["PENDING", "CONFIRMED", "COMPLETED", "CANCELLED"];
  const bookingIds: string[] = [];

  for (let i = 0; i < 500; i++) {
    const studentId = studentIds[Math.floor(Math.random() * studentIds.length)];
    const tutorProfile = tutorProfiles[Math.floor(Math.random() * tutorProfiles.length)];
    const subject = subjects[Math.floor(Math.random() * subjects.length)];
    
    const scheduledAt = randomDate(
      new Date(Date.now() - 180 * 24 * 60 * 60 * 1000),
      new Date()
    );

    const duration = [60, 90, 120][Math.floor(Math.random() * 3)];
    const status = bookingStatuses[Math.floor(Math.random() * bookingStatuses.length)];
    const bookingId = crypto.randomUUID();

    await prisma.booking.create({
      data: {
        id: bookingId,
        studentId: studentId,
        tutorProfileId: tutorProfile.id,
        scheduledAt: scheduledAt,
        duration: duration,
        status: status as any,
        subject: subject.name,
        notes: `Need help with ${subject.name}`,
        meetingLink: `https://meet.tutorconnect.com/${bookingId}`,
        price: tutorProfile.hourlyRate * (duration / 60),
        updatedAt: new Date(),
      },
    });

    if (status === "COMPLETED") {
      bookingIds.push(bookingId);
    }

    if ((i + 1) % 100 === 0) {
      console.log(`   ✓ Created ${i + 1} bookings...`);
    }
  }

  // Create Reviews (for 60% of completed bookings)
  console.log("⭐ Creating reviews...");
  const completedBookings = bookingIds.slice(0, Math.floor(bookingIds.length * 0.6));

  for (let i = 0; i < completedBookings.length; i++) {
    const bookingId = completedBookings[i];
    const studentId = studentIds[Math.floor(Math.random() * studentIds.length)];
    const rating = Math.floor(3 + Math.random() * 3); // 3-5 stars

    const comments = [
      "Excellent tutor! Very clear explanations and patient.",
      "Great session, learned a lot!",
      "Very knowledgeable and helpful.",
      "Good tutor, would recommend.",
      "Explained concepts very well.",
      "Patient and understanding tutor.",
      "Helped me improve my grades significantly.",
      "Professional and punctual.",
      "Made difficult topics easy to understand.",
      "Highly recommend this tutor!",
    ];

    await prisma.review.create({
      data: {
        id: crypto.randomUUID(),
        bookingId: bookingId,
        studentId: studentId,
        rating: rating,
        comment: comments[Math.floor(Math.random() * comments.length)],
        updatedAt: new Date(),
      },
    });

    if ((i + 1) % 500 === 0) {
      console.log(`   ✓ Created ${i + 1} reviews...`);
    }
  }

  console.log("✅ Database seeded successfully!");
  console.log("📊 Summary:");
  console.log(`   - Categories: ${categories.length}`);
  console.log(`   - Subjects: ${subjects.length}`);
  console.log(`   - Students: 5000`);
  console.log(`   - Tutors: 100`);
  console.log(`   - Bookings: 15000`);
  console.log(`   - Reviews: ${completedBookings.length}`);
}

main()
  .catch((e) => {
    console.error("❌ Error seeding database:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });