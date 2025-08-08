import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';

export default defineConfig({
  site: 'https://arnabdey.art',
  output: 'server', // Changed to 'server' to enable API routes
  adapter: vercel(),
});