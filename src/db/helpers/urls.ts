import { SQLiteInsertValue } from "drizzle-orm/sqlite-core";
import { db } from "..";
import { urls } from "../schemas";
import { eq } from "drizzle-orm";

class UrlTable {
  insert(values: SQLiteInsertValue<typeof urls>) {
    return db.insert(urls).values(values);
  }

  selectByShortUrl(slug: string) {
    return db.select().from(urls).where(eq(urls.slug, slug));
  }
}
export const urlTable = new UrlTable();
