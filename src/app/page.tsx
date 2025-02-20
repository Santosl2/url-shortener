import { Logo } from "@/components/logo";
import {
  HandleShortUrlProps,
  HandleShortUrlResponse,
  ShortArea,
} from "@/components/short-area";
import { urlTable } from "@/db/helpers/urls";

export default function Home() {
  const handleShortUrl = async ({
    originalUrl,
    randomUrl,
  }: HandleShortUrlProps): Promise<HandleShortUrlResponse> => {
    "use server";

    try {
      const shortUrl = process.env.URL + randomUrl;

      const { lastInsertRowid } = urlTable
        .insert({
          shortUrl,
          url: originalUrl,
          slug: randomUrl,
        })
        .run();

      return {
        shortUrl,
        lastInsertRowid: lastInsertRowid as number,
      };
    } catch {
      throw new Error("Failed to insert URL");
    }
  };

  return (
    <>
      <div className="flex flex-col items-center">
        <Logo />
        <h1 className="text-2xl font-semibold text-gray-900 mb-8">
          Short Your Links
        </h1>
      </div>

      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-medium text-gray-900 mb-2">
            Tired of your long, ugly Figma share link?
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Paste it here, make it nice.
          </p>
        </div>

        <ShortArea handleShortUrl={handleShortUrl} />
      </div>
    </>
  );
}
