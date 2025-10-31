import { PrismaClient } from "@prisma/client";

// Evita criar múltiplas instâncias no desenvolvimento
const globalForPrisma = global as unknown as { prisma: PrismaClient };

export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    log: ["query"], // opcional: loga todas queries no console
  });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
