import type { Config } from "drizzle-kit";

// Remove these two lines:
// import * as dotenv from "dotenv";
// dotenv.config({ path: ".env.local" });

export default {
  schema: "./lib/db/schema.ts",
  out: "./lib/db/migrations",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.POSTGRES_URL!, // Change to 'url' here
  },
} satisfies Config;
