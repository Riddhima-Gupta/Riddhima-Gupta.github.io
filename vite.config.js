import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// To deploy to GitHub Pages, set VITE_BASE_PATH in .env.production
// Example: VITE_BASE_PATH=/your-repo-name/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [react()],
    base: env.VITE_BASE_PATH || '/',
  };
});
