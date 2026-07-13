// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';

export default defineConfig({
  output: 'static',
  site: 'https://kaecius.github.io',
  integrations: [sitemap(), mdx()],
});
