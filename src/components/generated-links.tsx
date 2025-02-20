import type { ShortenedLink } from "@/lib/types";

interface GeneratedLinksProps {
  links: ShortenedLink[];
}

export function GeneratedLinks({ links }: GeneratedLinksProps) {
  if (links.length === 0) {
    return null;
  }

  return (
    <div className="mt-8">
      <h3 className="text-xl font-semibold mb-4">Your shortened links:</h3>
      <ul className="space-y-4">
        {links.map((link) => (
          <li key={link.id} className="bg-gray-50 p-4 rounded-lg">
            <p className="text-sm text-gray-500 mb-1">
              Original: {link.originalUrl}
            </p>
            <p className="text-lg font-medium">
              Short:{" "}
              <a
                href={link.shortUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                {link.shortUrl}
              </a>
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
