import { kafkaClient } from './kafka.js';

/**
 * Kafka Service
 * Central place to register all message consumers.
 * This makes it easy to see all event-driven flows in one place for teaching.
 */
class KafkaService {
  /**
   * Register all consumers here
   */
  public async boot(): Promise<void> {
    try {
      // Connect producer on boot (cached for future use)
      await kafkaClient.getProducer();

      // Example: Notification Consumer
      // In a real app, you might have many of these
      await this.initNotificationConsumer();
      
      console.log('🚀 Kafka Service Initialized');
    } catch (error) {
      console.error('❌ Kafka Service Boot Error:', error);
    }
  }

  private async initNotificationConsumer() {
    const consumer = await kafkaClient.createConsumer('notification-group');
    
    await consumer.subscribe({ 
      topic: process.env.KAFKA_TOPIC_NOTIFICATIONS || 'notifications', 
      fromBeginning: false 
    });

    await consumer.run({
      // We use eachMessage for standard robust processing
      eachMessage: async ({ topic, partition, message }) => {
        const value = message.value?.toString();
        const payload = value ? JSON.parse(value) : null;
        
        console.log(`[Kafka Consumer] Received on ${topic}:`, payload);
        
        /**
         * Teaching Moment:
         * This is where you would call your business logic / service.
         * For example: await NotificationService.send(payload);
         */
      },
    });
  }
}

export const kafkaService = new KafkaService();
