import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.resolve(__dirname, "../public");
const sitemapPath = path.join(publicDir, "sitemap.xml");

// Automatically set to today's date in YYYY-MM-DD ISO format
const currentDate = new Date().toISOString().split("T")[0];

const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://mudasir.tech/</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
`;

fs.writeFileSync(sitemapPath, sitemapContent, "utf8");
console.log(`[sitemap] Automatically updated sitemap.xml with lastmod: ${currentDate}`);
