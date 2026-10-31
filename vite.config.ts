import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
<<<<<<< HEAD
import fs from 'node:fs';
import path from 'path';
import { defineConfig, loadEnv } from 'vite';

function copyStaticImagesPlugin() {
  return {
    name: 'copy-static-images',
    closeBundle() {
      const srcImages = path.resolve(__dirname, 'src/assets/images');
      const distSrcImages = path.resolve(__dirname, 'dist/src/assets/images');
      const distAssetsImages = path.resolve(__dirname, 'dist/assets/images');
      if (fs.existsSync(srcImages)) {
        fs.mkdirSync(distSrcImages, { recursive: true });
        fs.cpSync(srcImages, distSrcImages, { recursive: true });
        fs.mkdirSync(distAssetsImages, { recursive: true });
        fs.cpSync(srcImages, distAssetsImages, { recursive: true });
      }
    },
  };
}

=======
import path from 'path';
import { defineConfig, loadEnv } from 'vite';

>>>>>>> f06a4a73293268b8c14a582969c92981c4dabe61
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), 'VITE_');
  const apiUrl = env.VITE_API_URL?.trim();

  // If apiUrl is provided in production, warn if protocol is unexpected, but never fail the build
  if (mode === 'production' && apiUrl) {
    try {
      const parsedUrl = new URL(apiUrl);
      const isLocalhost = ['localhost', '127.0.0.1', '[::1]'].includes(parsedUrl.hostname);
      if (!isLocalhost && parsedUrl.protocol !== 'https:' && parsedUrl.protocol !== 'http:') {
        console.warn('[vite.config] VITE_API_URL should use https:// in production');
      }
    } catch {
      // Relative URL like "/api" is also valid
    }
  }

  return {
<<<<<<< HEAD
    plugins: [react(), tailwindcss(), copyStaticImagesPlugin()],
=======
    plugins: [react(), tailwindcss()],
>>>>>>> f06a4a73293268b8c14a582969c92981c4dabe61
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      proxy: {
        '/api': {
          target: 'http://localhost:4000',
          changeOrigin: true,
        },
      },
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify - file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
