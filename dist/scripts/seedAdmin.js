"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_1 = require("../lib/prisma");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const crypto_1 = require("crypto");
async function seedAdmin() {
    try {
        const adminEmail = "admin@gmail.com";
        const adminPassword = "admin123";
        const existingAdmin = await prisma_1.prisma.user.findUnique({
            where: { email: adminEmail }
        });
        if (existingAdmin) {
            console.log("Admin user already exists");
            return;
        }
        const hashedPassword = await bcryptjs_1.default.hash(adminPassword, 12);
        const userId = (0, crypto_1.randomUUID)();
        const accountId = (0, crypto_1.randomUUID)();
        await prisma_1.prisma.user.create({
            data: {
                id: userId,
                name: "Admin",
                email: adminEmail,
                role: "ADMIN",
                emailVerified: true,
                phone: "N/A",
                updatedAt: new Date(),
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
        await prisma_1.prisma.$disconnect();
    }
}
seedAdmin();
