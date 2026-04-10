// import { createClient } from 'redis';
// 
// const redisUrl = process.env.REDIS_URL || 'redis://localhost:6379';
// console.log(`📡 [Redis] Attempting to connect to: ${redisUrl.split('@').pop()}`); // Log host without password
// 
// const redisClient = createClient({
//   url: redisUrl,
//   socket: {
//     reconnectStrategy: (retries) => {
//       if (retries > 10) {
//         console.error('❌ [Redis] Max reconnection retries reached. Cache will be disabled.');
//         return false; // Stop retrying
//       }
//       return Math.min(retries * 100, 3000);
//     },
//   },
// });
// 
// redisClient.on('error', (err) => {
//   if (err.code === 'ECONNREFUSED') {
//     console.error('⚠️ [Redis] Connection Refused. Is Redis running? Current URL:', redisUrl);
//   } else {
//     console.error('❌ [Redis] Client Error:', err);
//   }
// });
// redisClient.on('connect', () => console.log('✅ Redis connected'));
// 
// export const connectRedis = async () => {
//   if (!redisClient.isOpen) {
//     await redisClient.connect();
//   }
// };
// 
// export default redisClient;
