// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  output: 'hybrid', // or 'hybrid' if you prefer
  integrations: [tailwind(), icon()],
  
  vite: {
    ssr: {
        noExternal: ['webcoreui']
    },
    css: {
        preprocessorOptions: {
            scss: {
                api: 'modern-compiler'
            }
        }
    }
}
});