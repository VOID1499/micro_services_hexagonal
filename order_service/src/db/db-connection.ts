import "dotenv/config";
import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import { DB_URL } from "../config/index.js";

const pool = new Pool({
  connectionString: DB_URL,
});

export const DB = drizzle({
  client: pool,
});