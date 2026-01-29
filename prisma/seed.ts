import { PrismaClient, Prisma } from "../src/generated/prisma/client";
import "dotenv/config";
import { hash } from "bcryptjs";
import {PrismaPg} from "@prisma/adapter-pg";

const adapter = new PrismaPg({ 
  connectionString: process.env.DATABASE_URL,
})

const prisma = new PrismaClient({ 
  adapter,
})

async function main() {
  console.log("🚀 Starting Large Scale Seeding...");

  try {
    const timestamp = new Date();

    // 1. Cleanup
    console.log("🧹 Cleaning up existing data...");
    await prisma.review.deleteMany();
    await prisma.booking.deleteMany();
    await prisma.tutor_subject.deleteMany();
    await prisma.subject.deleteMany();
    await prisma.category.deleteMany();
    await prisma.availability_slot.deleteMany();
    await prisma.tutor_profile.deleteMany();
    await prisma.account.deleteMany();
    await prisma.session.deleteMany();
    await prisma.user.deleteMany();

    // Data Helpers - Bengali Names
    const bengaliFirstNames = [
      "Arjun", "Priya", "Rahul", "Ananya", "Amit", "Shreya", "Rajesh", "Kavya", "Suresh", "Meera",
      "Vikram", "Riya", "Anil", "Pooja", "Kiran", "Neha", "Deepak", "Sita", "Manoj", "Asha",
      "Ravi", "Sunita", "Ajay", "Rekha", "Sanjay", "Geeta", "Ramesh", "Lata", "Vinod", "Usha",
      "Ashok", "Kamala", "Prakash", "Radha", "Mukesh", "Shanti", "Naresh", "Parvati", "Yogesh", "Saraswati",
      "Abhishek", "Lakshmi", "Rohit", "Durga", "Sachin", "Kali", "Nitin", "Ganga", "Akash", "Tara",
      "Sourav", "Ruma", "Debashis", "Sharmila", "Tapan", "Mousumi", "Subrata", "Kakoli", "Partha", "Swapna",
      "Biplob", "Jayanti", "Sandip", "Manjula", "Pradip", "Champa", "Gautam", "Malati", "Samir", "Pushpa"
    ];
    
    const bengaliLastNames = [
      "Sharma", "Das", "Roy", "Gupta", "Singh", "Chakraborty", "Banerjee", "Mukherjee", "Ghosh", "Dutta",
      "Sen", "Bose", "Mitra", "Pal", "Saha", "Mondal", "Biswas", "Chowdhury", "Sarkar", "Bhattacharya",
      "Majumdar", "Ganguly", "Chatterjee", "Sengupta", "Bhowmik", "Karmakar", "Haldar", "Naskar", "Halder", "Kundu",
      "Adhikari", "Pramanik", "Samanta", "Mandal", "Bag", "Maity", "Jana", "Giri", "Mahato", "Banik",
      "Dey", "Nandi", "Paul", "Basak", "Hazra", "Khan", "Sheikh", "Molla", "Sardar", "Laskar"
    ];
    
    const categoriesData = [
      { name: "Mathematics", subjects: ["Advanced Calculus", "Linear Algebra", "Differential Geometry", "Applied Statistics", "Complex Analysis", "Number Theory", "Discrete Mathematics"] },
      { name: "Science", subjects: ["Quantum Physics", "Organic Chemistry", "Molecular Biology", "Astrophysics", "Environmental Science", "Biochemistry", "Microbiology"] },
      { name: "Languages", subjects: ["Bengali Literature", "English Grammar", "Hindi Conversation", "Sanskrit", "Urdu Poetry", "French Basics", "German Language"] },
      { name: "Computer Science", subjects: ["Python Programming", "Java Development", "React.js", "Machine Learning", "Artificial Intelligence", "Database Design", "Cybersecurity"] },
      { name: "Business", subjects: ["Digital Marketing", "Financial Analysis", "Strategic Management", "Microeconomics", "Startup Consulting", "Investment Banking", "E-commerce"] },
      { name: "Arts", subjects: ["Classical Music", "Digital Art", "UI/UX Design", "Portrait Photography", "Art History", "Sculpture", "Calligraphy"] },
      { name: "Humanities", subjects: ["Ancient History", "Modern Philosophy", "Clinical Psychology", "Cultural Sociology", "International Relations", "Anthropology", "Literature"] },
      { name: "Music", subjects: ["Classical Piano", "Acoustic Guitar", "Indian Classical Violin", "Vocal Training", "Music Composition", "Tabla", "Harmonium"] },
      { name: "Health & Fitness", subjects: ["Sports Nutrition", "Hatha Yoga", "Strength Training", "Emergency Medicine", "Mental Wellness", "Physiotherapy", "Meditation"] },
      { name: "Test Preparation", subjects: ["SAT Math", "GRE Verbal", "IELTS Speaking", "TOEFL Writing", "GMAT Prep", "JEE Advanced", "NEET Biology"] },
      { name: "Engineering", subjects: ["Mechanical Engineering", "Electrical Circuits", "Civil Engineering", "Software Engineering", "Chemical Processes", "Robotics", "AutoCAD"] },
      { name: "Creative Writing", subjects: ["Poetry Writing", "Short Stories", "Screenplay Writing", "Blog Writing", "Technical Writing", "Content Creation", "Journalism"] }
    ];

    const getRandom = (arr: any[]) => arr[Math.floor(Math.random() * arr.length)];

    // 2. Create Categories and Subjects
    console.log("📚 Seeding Categories and Subjects...");
    const subjectsList: any[] = [];
    for (const cat of categoriesData) {
      const category = await prisma.category.create({
        data: {
          id: `cat_${cat.name.toLowerCase().replace(/\s/g, '_')}`,
          name: cat.name,
          description: `Master ${cat.name} with experts.`,
          updatedAt: timestamp,
        }
      });
      for (const subName of cat.subjects) {
        const sub = await prisma.subject.create({
          data: {
            id: `sub_${subName.toLowerCase().replace(/\s/g, '_')}_${category.id}`,
            name: subName,
            categoryId: category.id,
            updatedAt: timestamp,
          }
        });
        subjectsList.push(sub);
      }
    }

    // 3. Create Users (Batching)
    console.log("👥 Seeding Users (8,000 total)...");
    const tutorCount = 3000;
    const studentCount = 5000;
    const hashedPassword = await hash("password123", 12);
    
    const tutorsArr: any[] = [];
    const studentsArr: any[] = [];

    // Helper to create users in chunks
    async function createUsers(count: number, role: "TUTOR" | "STUDENT") {
      const users: any[] = [];
      for (let i = 1; i <= count; i++) {
        const fName = getRandom(bengaliFirstNames);
        const lName = getRandom(bengaliLastNames);
        const email = `${role.toLowerCase()}${i}_${Date.now()}@skillbridge.com`;
        const id = `user_${role.toLowerCase()}_${i}`;
        
        users.push({
          id,
          name: `${fName} ${lName}`,
          email,
          role,
          status: "ACTIVE",
          emailVerified: true,
          updatedAt: timestamp,
        });
      }
      
      // Bulk create users
      await prisma.user.createMany({ data: users });
      
      // Bulk create accounts
      const accounts = users.map(u => ({
        id: `acc_${u.id}`,
        userId: u.id,
        accountId: u.id,
        providerId: "credential",
        password: hashedPassword,
        updatedAt: timestamp,
      }));
      await prisma.account.createMany({ data: accounts });
      
      return users;
    }

    const createdTutors = await createUsers(tutorCount, "TUTOR");
    const createdStudents = await createUsers(studentCount, "STUDENT");

    // 4. Create Tutor Profiles & Subject Links
    console.log("🎨 Seeding Tutor Profiles and Subject Links...");
    const tutorProfilesArr: any[] = [];
    const tutorSubLinks: any[] = [];

    for (let i = 0; i < createdTutors.length; i++) {
      const tutor = createdTutors[i];
      const profileId = `tp_${tutor.id}`;
      
      const specializations = [
        "Expert Mathematics Tutor", "Science Research Specialist", "Language Learning Expert", 
        "Programming Mentor", "Business Strategy Consultant", "Creative Arts Instructor",
        "Academic Writing Coach", "Test Prep Specialist", "Engineering Problem Solver",
        "Music Theory Expert", "Health & Wellness Guide", "Literature Analysis Expert"
      ];
      
      const educationBg = [
        "IIT Graduate", "Jadavpur University Alumni", "Calcutta University PhD", 
        "Presidency College Graduate", "ISI Kolkata Alumni", "BITS Pilani Graduate",
        "Delhi University Masters", "JNU Research Scholar", "IIM Graduate",
        "NIT Alumni", "Rabindra Bharati University", "West Bengal University"
      ];
      
      const bios = [
        "Passionate educator with innovative teaching methods and proven results.",
        "Experienced professional bringing real-world expertise to academic learning.",
        "Dedicated mentor focused on building strong foundational knowledge.",
        "Creative instructor who makes complex topics easy to understand.",
        "Results-driven tutor with personalized approach for each student.",
        "Industry expert sharing practical knowledge and academic excellence."
      ];
      
      tutorProfilesArr.push({
        id: profileId,
        userId: tutor.id,
        headline: getRandom(specializations),
        bio: getRandom(bios),
        hourlyRate: Math.floor(Math.random() * 120) + 30,
        experience: Math.floor(Math.random() * 20) + 1,
        education: getRandom(educationBg),
        isAvailable: Math.random() > 0.1,
        averageRating: 0,
        totalReviews: 0,
        updatedAt: timestamp,
      });

      // Assign 2-4 random subjects to each tutor
      const numSubjects = Math.floor(Math.random() * 3) + 2; // 2-4 subjects
      const assignedSubjects = new Set();
      
      for (let j = 0; j < numSubjects; j++) {
        let subject = getRandom(subjectsList);
        let attempts = 0;
        while (assignedSubjects.has(subject.id) && attempts < 10) {
          subject = getRandom(subjectsList);
          attempts++;
        }
        if (!assignedSubjects.has(subject.id)) {
          assignedSubjects.add(subject.id);
          tutorSubLinks.push({ 
            id: `ts_${tutor.id}_${j + 1}`, 
            tutorProfileId: profileId, 
            subjectId: subject.id 
          });
        }
      }
    }

    await prisma.tutor_profile.createMany({ data: tutorProfilesArr });
    await prisma.tutor_subject.createMany({ data: tutorSubLinks });

    // 5. Create Bookings (15,000 records)
    console.log("📅 Seeding Bookings (15,000 records)...");
    const bookingCount = 15000;
    const bookingsBatch: any[] = [];
    
    const sessionTopics = [
      "Advanced Problem Solving", "Concept Clarification", "Exam Preparation", "Project Guidance",
      "Research Methodology", "Assignment Help", "Career Counseling", "Skill Development",
      "Interview Preparation", "Portfolio Review", "Mock Test Session", "Doubt Clearing",
      "Practical Application", "Case Study Analysis", "Literature Review", "Lab Work Guidance",
      "Presentation Skills", "Writing Workshop", "Code Review Session", "Design Critique"
    ];
    
    for (let i = 1; i <= bookingCount; i++) {
        const student = getRandom(createdStudents);
        const tp = getRandom(tutorProfilesArr);
        const statusWeights = ["PENDING", "CONFIRMED", "COMPLETED", "COMPLETED", "COMPLETED", "CANCELLED"];
        const status = getRandom(statusWeights); // More completed sessions
        
        // Generate dates across past 6 months and future 2 months
        const dateRange = Math.random() * 240 * 24 * 60 * 60 * 1000; // 8 months
        const scheduledDate = new Date(Date.now() - (180 * 24 * 60 * 60 * 1000) + dateRange);
        
        bookingsBatch.push({
            id: `book_${i}`,
            studentId: student.id,
            tutorProfileId: tp.id,
            scheduledAt: scheduledDate,
            price: tp.hourlyRate + Math.floor(Math.random() * 20) - 10, // Price variation
            status: status,
            subject: getRandom(sessionTopics),
            updatedAt: timestamp,
        });
    }
    await prisma.booking.createMany({ data: bookingsBatch });

    // 6. Create Reviews for COMPLETED bookings
    console.log("⭐ Seeding Reviews...");
    const completedBookings = bookingsBatch.filter(b => b.status === "COMPLETED");
    const reviewComments = [
      "Outstanding explanation! Made complex topics very clear.",
      "Excellent teaching style, very patient and knowledgeable.",
      "Great session! Helped me understand the concepts thoroughly.",
      "Very professional and well-prepared. Highly recommended!",
      "Amazing tutor! Explains everything step by step.",
      "Fantastic session! Got all my doubts cleared.",
      "Very helpful and encouraging. Great learning experience.",
      "Excellent knowledge and teaching methodology.",
      "Perfect session! Exactly what I needed for my exam prep.",
      "Wonderful tutor! Makes learning enjoyable and effective.",
      "Great insights and practical examples. Very satisfied!",
      "Exceptional guidance! Helped improve my understanding significantly."
    ];
    
    // Create reviews for 70% of completed bookings
    const reviewableBookings = completedBookings.slice(0, Math.floor(completedBookings.length * 0.7));
    const reviewsArr = reviewableBookings.map((b, idx) => {
      const rating = Math.random() < 0.8 ? (Math.floor(Math.random() * 2) + 4) : Math.floor(Math.random() * 3) + 3; // 80% get 4-5 stars
      return {
        id: `rev_${idx}`,
        bookingId: b.id,
        studentId: b.studentId,
        rating: rating,
        comment: getRandom(reviewComments),
        updatedAt: timestamp,
      };
    });

    await prisma.review.createMany({ data: reviewsArr });

    console.log("✅ SEEDING COMPLETE!");
    // 7. Create Availability Slots for Tutors
    console.log("🕐 Seeding Availability Slots...");
    const availabilitySlots: any[] = [];
    const timeSlots = ["09:00", "10:00", "11:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00"];
    const daysOfWeek = ["MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY"];
    
    tutorProfilesArr.forEach((tp, idx) => {
      // Each tutor gets 3-6 random availability slots
      const numSlots = Math.floor(Math.random() * 4) + 3;
      const usedSlots = new Set();
      
      for (let i = 0; i < numSlots; i++) {
        const day = getRandom(daysOfWeek);
        const time = getRandom(timeSlots);
        const slotKey = `${day}_${time}`;
        
        if (!usedSlots.has(slotKey)) {
          usedSlots.add(slotKey);
          availabilitySlots.push({
            id: `avail_${tp.id}_${i}`,
            tutorProfileId: tp.id,
            dayOfWeek: day,
            startTime: time,
            endTime: `${parseInt(time.split(':')[0]) + 1}:00`,
            isAvailable: Math.random() > 0.2, // 80% available
            updatedAt: timestamp,
          });
        }
      }
    });
    
    await prisma.availability_slot.createMany({ data: availabilitySlots });
    
    console.log(`✅ SEEDING COMPLETE!`);
    console.log(`Total Records Created:`);
    console.log(`- Categories: ${categoriesData.length}`);
    console.log(`- Subjects: ${subjectsList.length}`);
    console.log(`- Users: ${tutorCount + studentCount}`);
    console.log(`- Tutor Profiles: ${tutorProfilesArr.length}`);
    console.log(`- Subject Links: ${tutorSubLinks.length}`);
    console.log(`- Bookings: ${bookingCount}`);
    console.log(`- Reviews: ${reviewsArr.length}`);
    console.log(`- Availability Slots: ${availabilitySlots.length}`);

  } catch (error) {
    console.error("❌ Seeding failed:", error);
    throw error;
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
