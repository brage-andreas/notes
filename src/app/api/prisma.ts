// From: https://github.com/prisma/prisma-examples/blob/latest/typescript/rest-nextjs-api-routes/src/lib/prisma.ts

import { PrismaClient } from "@prisma/client";
import "dotenv/config";

const globalForPrisma = global as unknown as { prisma: PrismaClient };

// eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
export const prisma = globalForPrisma.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") {
	globalForPrisma.prisma = prisma;
}

export default prisma;
