import app from "./app";
import { prisma } from "./lib/prisma";

const PORT = process.env.PORT || 9000;

async function bootstrap() {
  try {
    // In serverless environments, we don't always need to call $connect() 
    // explicitly as Prisma handles it on the first query, but it's okay for verifying connectivity.
    // However, for Vercel, we only want to start the listener if we're running locally.
    
    if (process.env.NODE_ENV !== 'production' && !process.env.VERCEL) {
      await prisma.$connect();
      console.log("Connected to the database successfully.");
      
      app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
      });
    }
  } catch (error) {
    console.error("An error occurred during bootstrap:", error);
    await prisma.$disconnect();
    process.exit(1);
  }
}

bootstrap();

export default app;
