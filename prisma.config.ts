// prisma.config.ts
import "dotenv/config";
import { defineConfig } from "prisma/config";

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
    seed: "tsx prisma/seed.ts", // ✅ THIS IS THE KEY
  },
  datasource: {
    url: process.env.DATABASE_URL,
  },
});
