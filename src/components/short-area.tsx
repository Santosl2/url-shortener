"use client";
import { useState } from "react";
import { ShortURLDisplay } from "./short-url-display";
import { URLFormData, URLInput } from "./url-input";
import { generateRandomURL } from "@/lib/url";
import { notify } from "@/lib/toast";
import { GeneratedLinks } from "./generated-links";
import { getLinks, saveLinks } from "@/lib/storage";

export type HandleShortUrlProps = {
  randomUrl: string;
  originalUrl: string;
};

export interface HandleShortUrlResponse {
  shortUrl: string;
  lastInsertRowid: number;
}

export function ShortArea({
  handleShortUrl,
}: {
  handleShortUrl: (
    data: HandleShortUrlProps
  ) => Promise<HandleShortUrlResponse>;
}) {
  const [shortUrl, setShortUrl] = useState("");

  const handleSubmit = async (data: URLFormData) => {
    try {
      const randomUrl = generateRandomURL();
      const insertData = {
        randomUrl,
        originalUrl: data.url,
      };
      const { lastInsertRowid, shortUrl } = await handleShortUrl(insertData);
      setShortUrl(shortUrl);
      saveLinks([
        ...getLinks(),
        { id: lastInsertRowid, originalUrl: data.url, shortUrl },
      ]);
    } catch {
      notify.error("Failed to shorten URL");
    }
  };

  return (
    <>
      <URLInput onSubmit={handleSubmit} />

      {shortUrl && <ShortURLDisplay url={shortUrl} />}

      <GeneratedLinks links={getLinks()} />
    </>
  );
}
