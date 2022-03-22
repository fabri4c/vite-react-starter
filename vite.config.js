import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgrPlugin from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  root: './src',
  publicDir: '../public',
  build: {
    outDir: '../dist'
  },
  plugins: [
    react({
      jsxImportSource: '@emotion/react',
      babel: {
        plugins: ['@emotion/babel-plugin']
      }
    }),
    svgrPlugin({
      svgrOptions: {
        icon: true
      }
    })
  ]
});
