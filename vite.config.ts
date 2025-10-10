import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '');

  return {
    // Necessario per GitHub Pages su repo "project pages"
    // (https://iohoilpotere.github.io/Sarasolution/)
    base: '/Sarasolution/',

    plugins: [react()],

    server: {
      host: '0.0.0.0',
      port: 3000,
    },

    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },

    // Espone le variabili che stai usando come process.env.*
    define: {
      'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },

    build: {
      outDir: 'dist',
    },
  };
});
