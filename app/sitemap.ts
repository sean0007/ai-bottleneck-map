import { bottlenecks } from "@/lib/bottlenecks";
import { getSiteUrl } from "@/lib/site";

export default function sitemap() {
  const base = getSiteUrl();
  const now = new Date();
  return [
    { url: base, lastModified: now },
    { url: `${base}/quiz`, lastModified: now },
    { url: `${base}/digest`, lastModified: now },
    { url: `${base}/legal/disclaimer`, lastModified: now },
    ...bottlenecks.map((item) => ({
      url: `${base}/b/${item.slug}`,
      lastModified: now,
    })),
  ];
}
