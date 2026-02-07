"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.testEmail = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
const transporter = nodemailer_1.default.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
        user: process.env.APP_USER,
        pass: process.env.APP_PASS,
    },
});
const testEmail = async () => {
    try {
        await transporter.verify();
        console.log('SMTP connection successful');
        const info = await transporter.sendMail({
            from: '"SkillBridge" <munnamiiraz@gmail.com>',
            to: "test@example.com",
            subject: "Test Email",
            text: "This is a test email",
        });
        console.log("Test email sent:", info.messageId);
        return { success: true, messageId: info.messageId };
    }
    catch (error) {
        console.error("Email test failed:", error);
        return { success: false, error: error.message };
    }
};
exports.testEmail = testEmail;
