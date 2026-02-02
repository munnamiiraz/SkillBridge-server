import { prisma } from "../lib/prisma";
import bcrypt from "bcryptjs";
import { randomUUID } from "crypto";
async function seedAdmin() {
    try {
        const adminEmail = "admin@gmail.com";
        const adminPassword = "admin123";
        const existingAdmin = await prisma.user.findUnique({
            where: { email: adminEmail }
        });
        if (existingAdmin) {
            console.log("Admin user already exists");
            return;
        }
        const hashedPassword = await bcrypt.hash(adminPassword, 12);
        const userId = randomUUID();
        const accountId = randomUUID();
        await prisma.user.create({
            data: {
                id: userId,
                name: "Admin",
                email: adminEmail,
                role: "ADMIN",
                emailVerified: true,
                phone: "N/A",
                account: {
                    create: {
                        id: accountId,
                        accountId: accountId,
                        providerId: "credential",
                        password: hashedPassword,
                        updatedAt: new Date()
                    }
                }
            }
        });
        console.log("Admin user created successfully");
        console.log("Email:", adminEmail);
        console.log("Password:", adminPassword);
    }
    catch (error) {
        console.error("Error seeding admin:", error);
    }
    finally {
        await prisma.$disconnect();
    }
}
seedAdmin();
//# sourceMappingURL=seedAdmin.js.map