/// <reference types="vitest/config" />
import { defineConfig, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.dirname(fileURLToPath(import.meta.url));
const assetsDir = path.join(root, 'assets');

function copyDirRecursive(src: string, dest: string) {
  fs.mkdirSync(dest, { recursive: true });
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyDirRecursive(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

/**
 * store.ts builds product image paths as plain strings (e.g. 'assets/images/products/x/2.png')
 * that Vite's bundler can't statically discover, so its default asset pipeline won't copy them.
 * This plugin serves/copies assets/ byte-for-byte at the same path in dev and build so every
 * reference — static <img> tags and runtime string paths alike — keeps resolving correctly.
 */
function vaultAssetsPassthrough(): Plugin {
  return {
    name: 'vault-assets-passthrough',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        if (!req.url || !req.url.startsWith('/assets/')) return next();
        const requestPath = decodeURIComponent(req.url.split('?')[0] ?? '');
        const filePath = path.join(root, requestPath);
        if (!filePath.startsWith(assetsDir) || !fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) {
          return next();
        }
        fs.createReadStream(filePath).pipe(res);
      });
    },
    closeBundle() {
      copyDirRecursive(assetsDir, path.join(root, 'dist', 'assets'));
    }
  };
}

export default defineConfig({
  root,
  plugins: [react(), vaultAssetsPassthrough()],
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        index: path.join(root, 'index.html'),
        listings: path.join(root, 'listings.html'),
        product: path.join(root, 'product.html'),
        cart: path.join(root, 'cart.html'),
        auth: path.join(root, 'auth.html'),
        about: path.join(root, 'about.html')
      }
    }
  },
  test: {
    environment: 'jsdom',
    include: ['tests/**/*.test.{ts,tsx}']
  }
});
