import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Ensure the dist folder is used
    rollupOptions: {
      input: './index.html', // Make sure the right entry point is used
    },
  },
})
