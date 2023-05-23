import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import checker from 'vite-plugin-checker'
import stylelint from 'vite-plugin-stylelint';

export default defineConfig({
  plugins: [
    react(),
    stylelint({
      fix: true,
    }),
    checker({
      typescript: true,
    }),
  ],
  css: {
    postcss: null,
    preprocessorOptions: {
        scss: {
          additionalData: `
            @import '/src/style/variables.scss';
          `
        },
    },
},
})

