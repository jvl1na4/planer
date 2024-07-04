/*
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  return {
    plugins: [react()],
    base: mode === 'production' ? '/planer/' : '/'
  };
});
*/

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/my-vite-app/',
  plugins: [react()],
});
