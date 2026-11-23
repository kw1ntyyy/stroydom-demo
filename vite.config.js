import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Для Render (корень домена) base менять не нужно.
  // Для GitHub Pages в подпапке укажите, например: base: '/repo-name/'
  base: '/',
});
