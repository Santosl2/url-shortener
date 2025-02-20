import type { ShortenedLink } from "./types";

const STORAGE_KEY = "figma_short_links";

export function saveLinks(links: ShortenedLink[]): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(links));
}

export function getLinks(): ShortenedLink[] {
  const links = localStorage.getItem(STORAGE_KEY);
  return links ? JSON.parse(links) : [];
}
