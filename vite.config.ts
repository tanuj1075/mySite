import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig, loadEnv } from 'vite';

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
    plugins: [react(), tailwindcss()],
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
