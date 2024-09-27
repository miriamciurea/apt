import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    modules: {
      scopeBehaviour: 'local', // Use 'local' to scope the styles, if needed
    },
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/styles/global.scss";`, // Add global styles if you're using SCSS
      },
    },
  },
  build: {
    outDir: 'dist', // Ensure the dist folder is used

    sourcemap: false,
    rollupOptions: {
      input: './index.html', // Make sure the right entry point is used
    },
  },
})
