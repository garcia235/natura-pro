import { VercelRequest, VercelResponse } from "@vercel/node";
import { storage } from "../storage";
import { insertContactMessageSchema } from "@shared/schema";
import { ZodError } from "zod";
import { fromZodError } from "zod-validation-error";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  try {
    const validatedData = insertContactMessageSchema.parse(req.body);
    const result = await storage.createContactMessage(validatedData);

    return res.status(201).json({
      message: "Thank you for your message! We'll get back to you soon.",
      data: result,
    });
  } catch (error) {
    if (error instanceof ZodError) {
      const validationError = fromZodError(error);
      return res.status(400).json({
        message: "Validation error",
        errors: validationError.details,
      });
    }

    return res.status(500).json({
      message: "An error occurred while submitting your message.",
    });
  }
}
