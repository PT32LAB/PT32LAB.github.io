// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import remarkWikilinks from './src/plugins/remark-wikilinks.ts';
import remarkGfm from 'remark-gfm';

export default defineConfig({
  site: 'https://pt32lab.github.io',
  integrations: [sitemap(), mdx()],
  markdown: {
    remarkPlugins: [remarkGfm, remarkWikilinks],
  },
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: false,
    },
  },
  vite: {
    plugins: [tailwindcss()],
    server: {
      allowedHosts: ['bark.nousaeternos.org'],
    },
  },
});
