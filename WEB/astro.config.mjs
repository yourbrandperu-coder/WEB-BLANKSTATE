import { defineConfig } from 'astro/config';
import { createReadStream, existsSync } from 'fs';
import { fileURLToPath } from 'url';
import { join, dirname, extname } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));

const MIME_TYPES = {
  '.webp': 'image/webp',
  '.png':  'image/png',
  '.jpg':  'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg':  'image/svg+xml',
  '.gif':  'image/gif',
};

function serveStaticAssets() {
  return {
    name: 'serve-static-assets',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const url = (req.url || '').split('?')[0];
        if (!url.startsWith('/PRODUCTOS/') && !url.startsWith('/BRANDING/')) return next();
        const filePath = join(__dirname, '..', decodeURIComponent(url));
        if (!existsSync(filePath)) return next();
        const mime = MIME_TYPES[extname(filePath).toLowerCase()] || 'application/octet-stream';
        res.setHeader('Content-Type', mime);
        res.setHeader('Cache-Control', 'public, max-age=3600');
        createReadStream(filePath).pipe(res);
      });
    }
  };
}

export default defineConfig({
  output: 'static',
  vite: {
    plugins: [serveStaticAssets()]
  }
});
