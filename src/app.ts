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
app.set("trust proxy", 1);

// Simple CORS configuration for development
app.use(cors({
    origin: true, // Allow all origins in development
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'Cookie', 'X-Requested-With'],
    exposedHeaders: ['Set-Cookie']
}));

// Handle preflight requests - use {*path} syntax for Express 5+ compatibility
app.options('{*path}', cors());

const limiter = rateLimit({
	windowMs: 1 * 60 * 1000, // 1 minutes
	limit: 1000, // Limit each IP to 1000 requests per `window` (here, per 15 minutes).
	standardHeaders: 'draft-7', // draft-6: `RateLimit-*` headers; draft-7: combined `RateLimit` header
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers.
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

app.all("/api/auth/*splat", (req, res, next) => {
    console.log('Auth request:', req.method, req.url, 'Origin:', req.headers.origin);
    next();
}, toNodeHandler(auth));

app.get("/get-session", async (req, res) => {
    try {
        const session = await auth.api.getSession({
            headers: req.headers as any
        });
        
        console.log("=== SESSION DEBUG ===");
        console.log("Full session:", JSON.stringify(session, null, 2));
        
        // Also fetch user directly from database to compare
        let dbUser = null;
        if (session?.user?.id) {
            dbUser = await prisma.user.findUnique({
                where: { id: session.user.id },
                select: { id: true, email: true, name: true, role: true, status: true, phone: true }
            });
            console.log("DB User:", JSON.stringify(dbUser, null, 2));
            
        }
        if(session?.user && dbUser){
            session.user = {
                ...session.user,
                role: dbUser.role,
                status: dbUser.status,
                phone: dbUser.phone
            }
        }
        res.json(session);
    } catch (error) {
        console.error("Session error:", error);
        res.status(500).json({ error: "Failed to get session" });
    }
});

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