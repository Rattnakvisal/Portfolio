import { cp, mkdir, readdir, rm } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const distDir = path.join(rootDir, 'dist');
const distAssetsDir = path.join(distDir, 'assets');
const builtHtmlPath = path.join(distDir, 'build-entry.html');
const rootAssetsDir = path.join(rootDir, 'assets');
const folderMetadata = new Set(['desktop.ini', '.folder-icons-main.ico']);

const assetFiles = await readdir(distAssetsDir);
const jsBundle = assetFiles.find((file) => /^(index|build-entry)-.*\.js$/i.test(file));
const cssBundle = assetFiles.find((file) => /^(index|build-entry)-.*\.css$/i.test(file));

if (!jsBundle || !cssBundle) {
    throw new Error('Could not find the built JS/CSS bundles in dist/assets.');
}

await mkdir(rootAssetsDir, { recursive: true });

for (const entry of await readdir(rootAssetsDir)) {
    if (!folderMetadata.has(entry.toLowerCase())) {
        await rm(path.join(rootAssetsDir, entry), { force: true, recursive: true });
    }
}

await cp(builtHtmlPath, path.join(distDir, 'index.html'));

for (const file of assetFiles) {
    await cp(path.join(distAssetsDir, file), path.join(rootAssetsDir, file));
}

await cp(path.join(distAssetsDir, jsBundle), path.join(rootAssetsDir, 'app.js'));
await cp(path.join(distAssetsDir, cssBundle), path.join(rootAssetsDir, 'app.css'));
