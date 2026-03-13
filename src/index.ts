import app, { initializeAppServices } from "./app.js";
import { kafkaService } from "./lib/kafka.service.js";
import { kafkaClient } from "./lib/kafka.js";

const PORT = process.env.PORT || 10000;

async function bootstrap() {
  try {
    // 1. Initialize Kafka and other services before starting the server
    // await kafkaService.boot();
    await initializeAppServices();
    
    console.log("✅ Services initialized (Kafka, Redis).");
    console.log("Connected to the database successfully.");
    
    const server = app.listen(PORT, () => {
      console.log(`🚀 Server is running on port ${PORT}`);
    });

    /**
     * Graceful Shutdown Handler
     * Industry Standard: Listen for termination signals to close connections cleanly.
     * This prevents message processing being cut halfway and helps in stable rebalancing.
     */
    const shutdown = async (signal: string) => {
      console.log(`\nReceived ${signal}. Starting graceful shutdown...`);
      
      server.close(async () => {
        console.log('HTTP server closed.');
        try {
          // await kafkaClient.shutdown();
          process.exit(0);
        } catch (err) {
          console.error('Error during Kafka shutdown:', err);
          process.exit(1);
        }
      });
    };

    process.on('SIGTERM', () => shutdown('SIGTERM'));
    process.on('SIGINT', () => shutdown('SIGINT'));

  } catch (error) {
    console.error("❌ An error occurred during bootstrap:", error);
    process.exit(1);
  }
}

bootstrap();

export default app;
