import { getCollection } from "astro:content";
export async function GET() {
  const posts = await getCollection("pielegnacja");
  const origin = "https://www.holacare.pl";
  const tutorialPaths = ["/tutoriale/no-makeup-lisa-eldridge/","/tutoriale/naturalny-makijaz-codzienny/","/tutoriale/podklad-bez-maski/","/tutoriale/candlelight-skin/","/tutoriale/trik-z-pudrem/","/tutoriale/podstawy-makijazu/"];
  const urls = ["/skladniki/", "/w-skladzie/", "/", "/pielegnacja/", "/tutoriale/", "/o-nas/", "/kontakt/", "/polityka-prywatnosci/", ...tutorialPaths, ...posts.map((p) => `/pielegnacja/${p.slug}/`)];
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls
    .map((u) => `  <url><loc>${origin}${u}</loc></url>`)
    .join("\n")}\n</urlset>`;
  return new Response(body, { headers: { "Content-Type": "application/xml; charset=utf-8" } });
}
