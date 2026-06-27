// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  vite: {
    // Cast works around a harmless dual-Vite `Plugin` type mismatch between
    // Astro's bundled Vite and @tailwindcss/vite; the plugin runs fine.
    plugins: [/** @type {any} */ (tailwindcss())],
  },
});
