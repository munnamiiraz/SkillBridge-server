import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.APP_USER,
    pass: process.env.APP_PASS,
  },
});

export const testEmail = async () => {
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
  } catch (error) {
    console.error("Email test failed:", error);
    return { success: false, error: (error as Error).message };
  }
};