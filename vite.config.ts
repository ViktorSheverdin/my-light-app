import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  esbuild: {
    jsx: 'automatic',
    target: 'esnext', // no extra transpile steps
  },
  optimizeDeps: {
    include: ['react', 'react-dom'], // prebundle react to memory
  },
  server: {
    open: false,
    hmr: true,
  },
  build: {
    target: 'esnext', // skip old browser polyfills
    minify: false, // faster local builds
  },
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './src/setupTests.ts',
  },
});
