import { sqliteTable, integer, text } from "drizzle-orm/sqlite-core";

export const urls = sqliteTable("urls", {
  id: integer().primaryKey(),
  url: text().notNull(),
  shortUrl: text().notNull(),
  slug: text().notNull(),
});
