import type { APIRoute } from 'astro';
import { PACKS } from '../data/packs';

export const GET: APIRoute = () => {
  const urls = [
    { loc: 'https://blankstate-zeta.vercel.app/', priority: '1.0' },
    { loc: 'https://blankstate-zeta.vercel.app/catalogo', priority: '0.9' },
    ...Object.values(PACKS).map(pack => ({
      loc: `https://blankstate-zeta.vercel.app/packs/${pack.slug}`,
      priority: '0.8',
    })),
  ];

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(u => `  <url>
    <loc>${u.loc}</loc>
    <changefreq>weekly</changefreq>
    <priority>${u.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  return new Response(body, {
    headers: { 'Content-Type': 'application/xml' },
  });
};
