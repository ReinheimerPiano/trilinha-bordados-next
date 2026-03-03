import { SITE } from "@/src/lib/site";

export const dynamic = "force-static";

export async function GET() {
  const txt = `User-agent: *
Allow: /
Disallow: /tmp/
Host: ${SITE.url}

Sitemap: ${SITE.url}/sitemap.xml
`;

  return new Response(txt, {
    headers: { "Content-Type": "text/plain" },
  });
}
