import { urlTable } from "@/db/helpers/urls";
import { redirect } from "next/navigation";

export default async function Home({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const getData = await urlTable.selectByShortUrl(slug);

  if (getData.length === 0) {
    throw new Error("URL not found");
  }

  const { url } = getData[0];

  redirect(url);

  return <>fdsfs</>;
}
