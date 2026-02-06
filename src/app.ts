import express, { Application } from "express";
import { toNodeHandler } from "better-auth/node";
import { auth } from "./lib/auth";
import cors from 'cors';
import errorHandler from "./middleware/globalErrorHandler";
import { notFound } from "./middleware/notFound";
import { StudentRoutes } from "./modules/student/student.route";
import { TutorRoutes } from "./modules/tutor/tutor.route";
import { PublicRoutes } from "./modules/public/public.route";
import { AdminRoutes } from "./modules/admin/admin/admin.route";
import { CategoryRoutes } from "./modules/admin/category/category.routes";
import helmet from "helmet";
import morgan from "morgan";
import hpp from "hpp";
import { rateLimit } from "express-rate-limit";

const app: Application = express();

// Security Headers
app.use(helmet());

// Logging
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
} else {
    app.use(morgan('combined'));
}

// Rate Limiting
const limiter = rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutes
	limit: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes).
	standardHeaders: 'draft-7', // draft-6: `RateLimit-*` headers; draft-7: combined `RateLimit` header
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers.
    message: {
        success: false,
        message: "Too many requests from this IP, please try again after 15 minutes"
    }
});

// Apply rate limiter to all routes for production, or just auth/sensitive routes
if (process.env.NODE_ENV === 'production') {
    app.use(limiter);
}

app.use(cors({
    origin: function (origin, callback) {
        const allowedOrigins = process.env.NODE_ENV === 'production' 
            ? [process.env.APP_URL, process.env.CLIENT_URL] 
            : ["http://localhost:3000", "http://localhost:3001"];
        
        // Allow requests with no origin (like mobile apps or curl requests)
        if (!origin) return callback(null, true);
        
        if (allowedOrigins.includes(origin)) {
            return callback(null, true);
        }
        
        const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
        return callback(new Error(msg), false);
    },
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'Cookie'],
    exposedHeaders: ['Set-Cookie']
}))

app.use(express.json({ limit: '10kb' })); // Protection against large body DoS
app.use(hpp()); // Protection against HTTP Parameter Pollution

app.all("/api/auth/*splat", toNodeHandler(auth));

app.get("/get-session", async (req, res) => {
    const session = await auth.api.getSession({
        headers: req.headers as any
    });
    res.json(session);
});

app.use("/api/public", PublicRoutes);
app.use("/api/student", StudentRoutes);
app.use("/api/tutor", TutorRoutes);
app.use("/api/admin", AdminRoutes);
app.use("/api/admin", CategoryRoutes);

app.get("/", (req, res) => {
    res.send("Hello, World!");
});
app.use(notFound)
app.use(errorHandler)

export default app;