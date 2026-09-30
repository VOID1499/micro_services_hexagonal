import { defineConfig } from 'drizzle-kit';
import { DB_URL} from "./src/config/index.js";

export default defineConfig({
  out: './src/db/drizzle',
  schema: './src/db/schema.ts',
  dialect: 'postgresql',
  dbCredentials: {
    url: DB_URL as string,
  },
});
