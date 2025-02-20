import { defineConfig } from "drizzle-kit";

const DATABASE_URL = process.env.DATABASE_URL;

if (!DATABASE_URL) {
  throw new Error("DATABASE_URL is required");
}

export default defineConfig({
  dialect: "sqlite",
  dbCredentials: {
    url: DATABASE_URL,
  },
  schema: "./src/db/schemas.ts",
  out: "./src/db/migrations",
});
