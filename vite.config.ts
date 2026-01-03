import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Shim process for TypeScript without @types/node
declare const process: { env: Record<string, string> };

export default defineConfig({
  plugins: [react()],
  base: '/taxfirm/',
  appType: 'spa', // Disables directory listing and ensures SPA fallback
  define: {
    'process.env.API_KEY': JSON.stringify(process.env.API_KEY || "")
  },
  build: {
    rollupOptions: {
      input: {
        main: './index.html',
      },
    },
  },
});