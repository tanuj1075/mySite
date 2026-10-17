import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig, loadEnv } from 'vite';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), 'VITE_');
  const apiUrl = env.VITE_API_URL?.trim();
  if (mode === 'production') {
    if (!apiUrl) {
      throw new Error('VITE_API_URL must be set to the deployed API URL before building for production');
    }
    try {
      const parsedUrl = new URL(apiUrl);
      const isLocalhost = ['localhost', '127.0.0.1', '[::1]'].includes(parsedUrl.hostname);
      if (!isLocalhost && parsedUrl.protocol !== 'https:') {
        throw new Error();
      }
    } catch {
      throw new Error('VITE_API_URL must be a valid HTTPS URL in production, unless it is a localhost development URL');
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
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
