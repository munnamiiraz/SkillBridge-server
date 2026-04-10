import express, { Application } from "express";
import { toNodeHandler } from "better-auth/node";
import { auth } from "./lib/auth.js";
import { prisma } from "./lib/prisma.js";
import cors from 'cors';
import errorHandler from "./middleware/globalErrorHandler.js";
import { notFound } from "./middleware/notFound.js";
import { StudentRoutes } from "./modules/student/student.route.js";
import { TutorRoutes } from "./modules/tutor/tutor.route.js";
import { PublicRoutes } from "./modules/public/public.route.js";
import { AdminRoutes } from "./modules/admin/admin/admin.route.js";
import { CategoryRoutes } from "./modules/admin/category/category.routes.js";
import UploadRoutes from "./modules/upload/upload.route.js";
import helmet from "helmet";
import hpp from "hpp";
import { rateLimit } from "express-rate-limit";
import cookieParser from 'cookie-parser';
// import { connectRedis } from './lib/redis';
import {authRoutes} from "./modules/auth/auth.routes.js"
import { sessionAuth } from "./middleware/sessionAuth.js";
import { kafkaClient } from "./lib/kafka.js";
import client from 'prom-client';

// Collect default metrics (CPU, Memory, etc.)
client.collectDefaultMetrics();


import { PaymentRoutes } from "./modules/payment/payment.route.js";
import { PaymentController } from "./modules/payment/payment.controller.js";

const app: Application = express();
app.set("trust proxy", true);

app.use(cors({
    origin: [
        process.env.APP_URL as string,
        "http://localhost:3000",
        "https://skill-bridge-client-iota.vercel.app"
    ],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
    credentials: true,
}));

const limiter     = rateLimit({
	windowMs: 1 * 60 * 1000, 
	limit: 1000, 
	standardHeaders: 'draft-7', 
	legacyHeaders: false, 
    message: {
        success: false,
        message: "Too many requests from this IP, please try again after 15 minutes"
    }
});

if (process.env.NODE_ENV === 'production') {
    app.use(limiter);
}

app.use(cookieParser());

// Special route for Stripe Webhook (needs raw body)
app.post("/api/payment/webhook", express.raw({ type: 'application/json' }), PaymentController.handleWebhook);

app.use(express.json({ limit: '10kb' })); 
app.use(hpp()); 

// Payment routes (session creation etc)
app.use("/api/payment", PaymentRoutes);

// Express 5 (path-to-regexp v6) requires wildcard segments to be named.
app.all("/api/auth", toNodeHandler(auth));
app.all("/api/auth/*rest", toNodeHandler(auth));


app.use("/api/upload", UploadRoutes);
app.use("/api/public", PublicRoutes);
app.use("/api/student", StudentRoutes);
app.use("/api/tutor", TutorRoutes);
app.use("/api/admin", AdminRoutes);
app.use("/api/admin", CategoryRoutes);

// app.get("/api/test-kafka", async (req, res) => {
//     try {
//         await kafkaClient.sendMessage(process.env.KAFKA_TOPIC_NOTIFICATIONS || "notifications", {
//             type: "TEST_EVENT",
//             message: "Hello from Kafka! Industry Standard implementation is working.",
//             timestamp: Date.now()
//         });
//         res.status(200).json({ status: "success", message: "Event published to Kafka" });
//     } catch (error: any) {
//         res.status(500).json({ status: "error", message: error.message });
//     }
// });

app.get("/", (req, res) => {
    res.status(200).json({ status: "ok", message: "Server is healthy" });
});

app.get("/metrics", async (req, res) => {
    res.set('Content-Type', client.register.contentType);
    res.send(await client.register.metrics());
});


app.use('/api/session-auth', authRoutes);


export const initializeAppServices = async () => {
    // await connectRedis();
};



app.use(notFound)
app.use(errorHandler)

export default app;
