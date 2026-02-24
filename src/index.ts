import app from "./app.js";

const PORT = process.env.PORT || 10000;

async function bootstrap() {
  try {
    console.log("Connected to the database successfully.");
    
    app.listen(Number(PORT), "0.0.0.0", () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error("An error occurred during bootstrap:", error);
    process.exit(1);
  }
}

bootstrap();

export default app;
