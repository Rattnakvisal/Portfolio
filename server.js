import { createReadStream, existsSync } from 'node:fs';
import { stat } from 'node:fs/promises';
import http from 'node:http';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.join(__dirname, 'dist');
const indexPath = path.join(distDir, 'index.html');
const port = Number(process.env.PORT) || 3000;

const mimeTypes = {
    '.css': 'text/css; charset=utf-8',
    '.html': 'text/html; charset=utf-8',
    '.ico': 'image/x-icon',
    '.jpg': 'image/jpeg',
    '.js': 'text/javascript; charset=utf-8',
    '.json': 'application/json; charset=utf-8',
    '.pdf': 'application/pdf',
    '.png': 'image/png',
    '.svg': 'image/svg+xml',
    '.txt': 'text/plain; charset=utf-8',
    '.webp': 'image/webp',
};

function sendFile(filePath, res) {
    const extension = path.extname(filePath).toLowerCase();
    const contentType = mimeTypes[extension] || 'application/octet-stream';

    res.writeHead(200, {
        'Content-Type': contentType,
        'Cache-Control': extension === '.html' ? 'no-cache' : 'public, max-age=31536000, immutable',
    });

    createReadStream(filePath).pipe(res);
}

function sendText(statusCode, message, res) {
    res.writeHead(statusCode, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end(message);
}

const server = http.createServer(async (req, res) => {
    if (!existsSync(indexPath)) {
        sendText(500, 'Build output not found. Run "npm run build" before starting the server.', res);
        return;
    }

    const requestUrl = new URL(req.url || '/', `http://${req.headers.host || 'localhost'}`);
    const pathname = decodeURIComponent(requestUrl.pathname);
    const relativePath = pathname === '/' ? 'index.html' : pathname.replace(/^\/+/, '');
    const normalizedPath = path.normalize(relativePath);
    const filePath = path.join(distDir, normalizedPath);

    if (!filePath.startsWith(distDir)) {
        sendText(403, 'Forbidden', res);
        return;
    }

    try {
        const fileStat = await stat(filePath);

        if (fileStat.isFile()) {
            sendFile(filePath, res);
            return;
        }
    } catch {
        // Fall back to index.html for SPA routes.
    }

    sendFile(indexPath, res);
});

server.listen(port, () => {
    console.log(`Portfolio server running on port ${port}`);
});
