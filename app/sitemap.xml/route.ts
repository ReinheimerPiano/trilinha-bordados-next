import { SITE } from "@/src/lib/site";

export const dynamic = "force-static";

export async function GET() {
  const now = new Date().toISOString();
  const urls = [
    { path: "/", priority: "1.0", changefreq: "weekly" },
    {
      path: "/bordado-computadorizado/",
      priority: "0.9",
      changefreq: "weekly",
    },
    { path: "/patches-bordados/", priority: "0.9", changefreq: "weekly" },
    { path: "/bordado-afetivo/", priority: "0.8", changefreq: "monthly" },
    { path: "/contato/", priority: "0.8", changefreq: "monthly" },
    { path: "/links/", priority: "0.7", changefreq: "monthly" },
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    ({ path, priority, changefreq }) =>
      `<url><loc>${SITE.url}${path}</loc><lastmod>${now}</lastmod><changefreq>${changefreq}</changefreq><priority>${priority}</priority></url>`
  )
  .join("\n")}
</urlset>`;

  return new Response(xml, {
    headers: { "Content-Type": "application/xml" },
  });
}
