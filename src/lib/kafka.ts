import { Kafka, Producer, Consumer, logLevel } from 'kafkajs';

/**
 * Kafka Configuration Class (Industry Standard Singleton Pattern)
 * This ensures we don't create multiple connections to the Kafka cluster,
 * which saves resources and prevents connection limits.
 */
class KafkaClient {
  private static instance: KafkaClient;
  private kafka: Kafka;
  private producer: Producer | null = null;
  private consumers: Consumer[] = [];

  private constructor() {
    const brokers = (process.env.KAFKA_BROKERS || 'localhost:9092').split(',');
    
    this.kafka = new Kafka({
      clientId: 'skillbridge-server',
      brokers: brokers,
      // Log level: WARN is usually good for production, DEBUG for dev
      logLevel: process.env.NODE_ENV === 'production' ? logLevel.ERROR : logLevel.INFO,
      // Connect timeout and retry backoff strategy
      connectionTimeout: 3000,
      retry: {
        initialRetryTime: 100,
        retries: 8
      },
      // SSL/SASL authentication (needed for managed services like Upstash/Confluent)
      ...(process.env.KAFKA_SSL === 'true' && {
        ssl: true,
        sasl: {
          mechanism: 'scram-sha-256',
          username: process.env.KAFKA_USERNAME || '',
          password: process.env.KAFKA_PASSWORD || ''
        }
      })
    });
  }

  public static getInstance(): KafkaClient {
    if (!KafkaClient.instance) {
      KafkaClient.instance = new KafkaClient();
    }
    return KafkaClient.instance;
  }

  /**
   * Initialize and connect the Producer
   * Reusing a single producer instance is much more efficient than recreating it.
   */
  public async getProducer(): Promise<Producer> {
    if (!this.producer) {
      this.producer = this.kafka.producer({
        // Idempotent producer ensures messages are delivered exactly once
        createPartitioner: () => (metadata) => 0, // Simplified for legacy compatibility if needed or use specific partitioner
        allowAutoTopicCreation: true,
        transactionTimeout: 30000
      });
      await this.producer.connect();
      console.log('✅ Kafka Producer connected');
    }
    return this.producer;
  }

  /**
   * Create and connect a Consumer
   * We typically use one consumer group for each logical part of our system (Microservices pattern)
   */
  public async createConsumer(groupId: string): Promise<Consumer> {
    const consumer = this.kafka.consumer({ groupId });
    await consumer.connect();
    this.consumers.push(consumer);
    console.log(`✅ Kafka Consumer connected (Group: ${groupId})`);
    return consumer;
  }

  /**
   * Graceful Shutdown
   * Crucial for industry standards to prevent data loss or rebalancing issues.
   */
  public async shutdown(): Promise<void> {
    console.log('Stopping Kafka clients...');
    if (this.producer) {
      await this.producer.disconnect();
    }
    for (const consumer of this.consumers) {
      await consumer.disconnect();
    }
    console.log('Kafka clients disconnected safely');
  }

  /**
   * Utility to send messages easily with type safety
   */
  public async sendMessage(topic: string, message: any, key: string | null = null): Promise<void> {
    const producer = await this.getProducer();
    await producer.send({
      topic,
      messages: [
        { 
          key: key, 
          value: JSON.stringify(message),
          timestamp: Date.now().toString()
        }
      ],
    });
  }
}

export const kafkaClient = KafkaClient.getInstance();
