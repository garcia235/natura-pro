import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactMessageSchema } from "@shared/schema";
import { ZodError } from "zod";
import { fromZodError } from "zod-validation-error";
import { insertUserSchema, insertCategorySchema, insertProductSchema } from "@shared/schema";

import { Pool } from "pg";

export async function registerRoutes(app: Express): Promise<Server> {

  const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: process.env.NODE_ENV === "production" ? { rejectUnauthorized: false } : false,
  });  

  app.post("/api/contact", async (req: Request, res: Response) => {
    try {
      const validatedData = insertContactMessageSchema.parse(req.body);
      const result = await storage.createContactMessage(validatedData);
      
      return res.status(201).json({
        message: "Thank you for your message! We'll get back to you soon.",
        data: result
      });
    } catch (error) {
      if (error instanceof ZodError) {
        const validationError = fromZodError(error);
        return res.status(400).json({ 
          message: "Validation error", 
          errors: validationError.details
        });
      }
      
      return res.status(500).json({ 
        message: "An error occurred while submitting your message."
      });
    }
  });

  app.post("/api/users", async (req: Request, res: Response) => {
    try {
      const validated = insertUserSchema.parse(req.body);
      const user = await storage.createUser(validated);
      return res.status(201).json({ message: "User created", user });
    } catch (error) {
      if (error instanceof ZodError) {
        const validationError = fromZodError(error);
        return res.status(400).json({ message: "Validation error", errors: validationError.details });
      }
      return res.status(500).json({ message: "Something went wrong." });
    }
  });

  app.post("/api/products", async (req: Request, res: Response) => {
    try {
      const validated = insertProductSchema.parse(req.body);
      const product = await storage.createProduct(validated);
      return res.status(201).json({ message: "Product created", product });
    } catch (error) {
      if (error instanceof ZodError) {
        const validationError = fromZodError(error);
        return res.status(400).json({ message: "Validation error", errors: validationError.details });
      }
      return res.status(500).json({ message: "Something went wrong." });
    }
  });
  app.post("/api/categories", async (req: Request, res: Response) => {
    try {
      const validated = insertCategorySchema.parse(req.body);
      const category = await storage.createCategory(validated);
      return res.status(201).json({ message: "Category created", category });
    } catch (error) {
      if (error instanceof ZodError) {
        const validationError = fromZodError(error);
        return res.status(400).json({ message: "Validation error", errors: validationError.details });
      }
      return res.status(500).json({ message: "Something went wrong." });
    }
  });
  app.get("/api/products", async (req: Request, res: Response) => {
    try {
      const products = await storage.getProducts();
      return res.status(200).json({ message: "Products fetched", products });
    } catch (error) {
      return res.status(500).json({ message: "Something went wrong." });
    }
  });
  app.get("/api/categories", async (req: Request, res: Response) => {
    try {
      const categories = await storage.getCategories();
      return res.status(200).json({ message: "Categories fetched", categories });
    } catch (error) {
      return res.status(500).json({ message: "Something went wrong." });
    }
  });

  app.get("/api/health", async (_req, res) => {
    try {
      const result = await pool.query("SELECT NOW()");
      res.status(200).json({ status: "ok", time: result.rows[0] });
    } catch (error) {
      console.error(error);
      res.status(500).json({ status: "error", message: error});
    }
  });
  

  const httpServer = createServer(app);
  return httpServer;
}
