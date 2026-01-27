import express, { Application } from "express";
import { toNodeHandler } from "better-auth/node";
import { auth } from "./lib/auth";
import cors from 'cors';
import errorHandler from "./middleware/globalErrorHandler";
import { notFound } from "./middleware/notFound";
import { StudentRoutes } from "./modules/student/student.route";
import { TutorRoutes } from "./modules/tutor/tutor.route";

const app: Application = express();

app.use(cors({
    origin: process.env.APP_URL || "http://localhost:3000", // client side url
    credentials: true
}))

app.use(express.json());

app.all("/api/auth/*splat", toNodeHandler(auth));

app.use("/api/student", StudentRoutes);
app.use("/api/tutor", TutorRoutes);

app.get("/", (req, res) => {
    res.send("Hello, World!");
});
app.use(notFound)
app.use(errorHandler)

export default app;