import type { InferColumnsDataTypes } from "drizzle-orm";
import { integer, pgTable, varchar ,timestamp} from "drizzle-orm/pg-core";

export const cartsTable = pgTable("carts", {
  id: integer("id").primaryKey().generatedAlwaysAsIdentity(),
  customerId: integer("customer_id").notNull().unique(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});

export type Cart = typeof cartsTable.$inferSelect;