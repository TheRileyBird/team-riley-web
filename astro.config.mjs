import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import alpinejs from '@astrojs/alpinejs';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://teamrileyweb.com',
  integrations: [
    tailwind(),
    alpinejs(),
    sitemap({
      filter: (page) => page !== 'https://teamrileyweb.com/digital-health-audit/',
    }),
  ],
});
