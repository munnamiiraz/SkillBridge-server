import { Request, Response, NextFunction } from "express";
import { PaymentService } from "./payment.service";

export class PaymentController {
  static async createCheckoutSession(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await PaymentService.createCheckoutSession(req.user!.id, req.body);
      
      res.status(200).json({
        success: true,
        message: "Checkout session created",
        data: result
      });
    } catch (error) {
      next(error);
    }
  }

  static async handleWebhook(req: Request, res: Response, next: NextFunction) {
    try {
      const sig = req.headers['stripe-signature'] as string;
      const result = await PaymentService.handleWebhook(req.body, sig);
      
      res.status(200).json(result);
    } catch (error: any) {
      console.error('Webhook Error:', error.message);
      res.status(400).send(`Webhook Error: ${error.message}`);
    }
  }
}
