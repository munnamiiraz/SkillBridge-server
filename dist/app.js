"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const node_1 = require("better-auth/node");
const auth_1 = require("./lib/auth");
const cors_1 = __importDefault(require("cors"));
const globalErrorHandler_1 = __importDefault(require("./middleware/globalErrorHandler"));
const notFound_1 = require("./middleware/notFound");
const student_route_1 = require("./modules/student/student.route");
const tutor_route_1 = require("./modules/tutor/tutor.route");
const public_route_1 = require("./modules/public/public.route");
const admin_route_1 = require("./modules/admin/admin/admin.route");
const category_routes_1 = require("./modules/admin/category/category.routes");
const helmet_1 = __importDefault(require("helmet"));
const hpp_1 = __importDefault(require("hpp"));
const express_rate_limit_1 = require("express-rate-limit");
const app = (0, express_1.default)();
app.set("trust proxy", true);
// Security Headers
app.use((0, helmet_1.default)());
// Rate Limiting
const limiter = (0, express_rate_limit_1.rateLimit)({
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
app.use((0, cors_1.default)({
    origin: function (origin, callback) {
        const allowedOrigins = process.env.NODE_ENV === 'production'
            ? [process.env.APP_URL, process.env.CLIENT_URL]
            : ["http://localhost:3000", "http://localhost:3001"];
        // Allow requests with no origin (like mobile apps or curl requests)
        if (!origin)
            return callback(null, true);
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
}));
app.use(express_1.default.json({ limit: '10kb' })); // Protection against large body DoS
app.use((0, hpp_1.default)()); // Protection against HTTP Parameter Pollution
app.all("/api/auth/*splat", (0, node_1.toNodeHandler)(auth_1.auth));
app.get("/get-session", async (req, res) => {
    const session = await auth_1.auth.api.getSession({
        headers: req.headers
    });
    res.json(session);
});
app.use("/api/public", public_route_1.PublicRoutes);
app.use("/api/student", student_route_1.StudentRoutes);
app.use("/api/tutor", tutor_route_1.TutorRoutes);
app.use("/api/admin", admin_route_1.AdminRoutes);
app.use("/api/admin", category_routes_1.CategoryRoutes);
app.get("/", (req, res) => {
    res.send("Hello, World!");
});
app.use(notFound_1.notFound);
app.use(globalErrorHandler_1.default);
exports.default = app;
