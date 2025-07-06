// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

import tailwindcss from '@tailwindcss/vite';

import svgr from 'vite-plugin-svgr';

import sitemap from '@astrojs/sitemap';

import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  site: 'https://rabbitit.fun',
  devToolbar: {
    enabled: false
  },
  integrations: [sitemap(), react(), mdx()],

  vite: {
    plugins: [svgr(), tailwindcss()]
  }
});