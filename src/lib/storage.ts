import type { ShortenedLink } from "./types";

const STORAGE_KEY = "@url-shortener/short_links";

export function saveLinks(links: ShortenedLink[]): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(links));
}

export function getLinks(): ShortenedLink[] {
  if (typeof window === "undefined") return [];
  const links = localStorage.getItem(STORAGE_KEY);
  return links ? JSON.parse(links) : [];
}
