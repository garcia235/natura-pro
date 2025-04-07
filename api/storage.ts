import { PrismaClient } from "@prisma/client";
import {
  type User,
  type InsertUser,
  type ContactMessage,
  type InsertContactMessage,
  type InsertProduct,
  type InsertCategory,
  type Product,
  type Category,
} from "../shared/schema.js";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createContactMessage(message: InsertContactMessage): Promise<ContactMessage>;
  createProduct(product: InsertProduct): Promise<Product>;
  createCategory(category: InsertCategory): Promise<Category>;
}

const prisma = new PrismaClient();

export class PrismaStorage implements IStorage {
  async getUser(id: number): Promise<User | undefined> {
    const user = await prisma.user.findUnique({ where: { id } });
    return user ?? undefined;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const user = await prisma.user.findUnique({ where: { username } });
    return user ?? undefined;
  }

  async createUser(user: InsertUser): Promise<User> {
    return prisma.user.create({ data: user });
  }

  async createContactMessage(message: InsertContactMessage): Promise<ContactMessage> {
    return prisma.contactMessage.create({ data: message });
  }

  async createProduct(product: InsertProduct): Promise<Product> {
    return prisma.product.create({ data: product });
  }
  async createCategory(category: InsertCategory): Promise<Category> {
    return prisma.category.create({ data: category });
  }
  async getProducts(): Promise<Product[]> {
    return prisma.product.findMany();
  }
  async getCategories(): Promise<Category[]> {
    return prisma.category.findMany();
  }
  async getCategoryById(id: number): Promise<Category | null> {
    return prisma.category.findUnique({ where: { id } });
  }
  async getProductById(id: number): Promise<Product | null> {
    return prisma.product.findUnique({ where: { id } });
  }
}

export const storage = new PrismaStorage();
