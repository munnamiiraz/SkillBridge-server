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
import helmet from "helmet";
import hpp from "hpp";
import { rateLimit } from "express-rate-limit";

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

const limiter = rateLimit({
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

app.use(express.json({ limit: '10kb' })); 
app.use(hpp()); 

app.all("/api/auth/{*any}", toNodeHandler(auth));


app.use("/api/public", PublicRoutes);
app.use("/api/student", StudentRoutes);
app.use("/api/tutor", TutorRoutes);
app.use("/api/admin", AdminRoutes);
app.use("/api/admin", CategoryRoutes);

app.get("/", (req, res) => {
    res.send("Hello, World!");
});

app.get("/health", (req, res) => {
    res.status(200).json({ status: "ok", message: "Server is healthy" });
});

app.use(notFound)
app.use(errorHandler)

export default app;