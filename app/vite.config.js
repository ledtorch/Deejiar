import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// CSS Dependency
import autoprefixer from 'autoprefixer';

// HTTPS Dependency
import fs from 'fs';

export default defineConfig({
  plugins: [vue()],
  css: {
    preprocessorOptions: {
      scss: {
      },
    },
    postcss: {
      plugins: [
        autoprefixer
      ],
    },
  },

  // // Normal Server
  // server: {
  //   host: '0.0.0.0'
  // }

  // HTTPS Server
  server: {
    https: {
      key: fs.readFileSync('./localhost.key'),
      cert: fs.readFileSync('./localhost.crt'),
    },
  },

})