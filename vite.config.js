import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';
import path from 'path';
import { visualizer } from 'rollup-plugin-visualizer';
export default defineConfig({
  plugins: [
    laravel({
      input: [
        'resources/js/app.jsx',
        'resources/js/metronic/globalPlugins.js',
      ],
      ssr: 'resources/js/ssr.jsx',
      refresh: true,
    }),
    react(),
     visualizer({
      filename: './dist/stats.html',
      open: true, // auto-open report after build
      gzipSize: true,
      brotliSize: true,
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'resources/js'),          // for components
      '@assets': path.resolve(__dirname, 'resources/assets'), // for images, fonts, etc.
      '@Misc' : path.resolve(__dirname, 'resources/js/Misc'),
      jquery: 'jquery/dist/jquery.js', // ✅ this avoids duplicate jQuery instances
    },
  },
});
