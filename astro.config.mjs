// @ts-check

import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://Moran-38B.github.io',
  base: '/Web.github.io',

  vite: {
    plugins: [tailwindcss()],
  },
});