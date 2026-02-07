// prisma.config.ts
import "dotenv/config";
import { defineConfig } from "prisma/config";
import index from "./src/config/index";

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  datasource: {
    // url: process.env["DATABASE_URL"],
    url: index.database_url,
  },
});
