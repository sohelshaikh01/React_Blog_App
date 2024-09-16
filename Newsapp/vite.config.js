import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import svgr from 'vite-plugin-svgr';
import { NodeGlobalsPolyfillPlugin } from '@esbuild-plugins/node-globals-polyfill';

export default defineConfig({
  plugins: [
    react(),
    svgr(),
  ],
  optimizeDeps: {
    esbuildOptions: {
      // Polyfill for 'process'
      define: {
        global: 'globalThis',
      },
      plugins: [
        NodeGlobalsPolyfillPlugin({
          process: true,
          buffer: true,
        }),
      ],
    },
  },
  build: {
    rollupOptions: {
      output: {
        // Ensure globals like 'process' work in production
        globals: {
          process: 'process',
        },
      },
    },
  },
});
