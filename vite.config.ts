import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  // Using relative base path './' so static assets load correctly on GitHub Pages regardless of domain/repo path
  base: './',

  plugins: [react()],

  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
