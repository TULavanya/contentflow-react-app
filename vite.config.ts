import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: false,
    strictPort: false,
    hmr: {
      overlay: true
    },
    watch: {
      usePolling: false
    },
    // Allow iframe embedding from Contentstack Visual Builder
    headers: {
      'Content-Security-Policy': "frame-ancestors 'self' https://*.contentstack.com https://app.contentstack.com",
    }
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: undefined
      }
    }
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom']
  },
  cacheDir: '.vite'
});
