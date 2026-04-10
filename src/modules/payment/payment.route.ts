import { Router } from "express";
import { PaymentController } from "./payment.controller";
import auth, { UserRole } from "../../middleware/auth";
import express from "express";

const router = Router();

// Note: Webhook is handled directly in app.ts before express.json()
// to ensure raw body accessibility for signature verification.

router.post(
  "/create-checkout-session", 
  auth(UserRole.STUDENT), 
  PaymentController.createCheckoutSession
);

export const PaymentRoutes = router;
