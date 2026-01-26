import express from 'express';
import cors from 'cors';
// import authRoutes from './modules/auth/auth.routes';
import { toNodeHandler } from "better-auth/node";
import { auth } from './lib/auth';

const app = express();
app.all('/api/auth/*splat', toNodeHandler(auth));

app.use(cors({ origin: process.env.FRONTEND_URL || 'http://localhost:5173' }));
app.use(express.json({ limit: '10mb' }));

// const limiter = rateLimit({
//   windowMs: 15 * 60 * 1000,
//   max: 100000,
//   message: 'Too many requests',
// });
// app.use('/api/', limiter);

// app.use('/api/auth', authRoutes);

app.get('/health', (_, res) => res.json({ status: 'ok' }));

export default app;