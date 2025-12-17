import { defineConfig } from 'vite'
import path from 'path'

export default defineConfig({
  // DO NOT set `root` — let Vite treat the project root as root
  build: {
    outDir: path.resolve(__dirname, 'dist'), // final build output
    emptyOutDir: true,
    rollupOptions: {
      // point to your index.html inside src/pages
      input: path.resolve(__dirname, 'src/pages/index.html'),
    },
  },

  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // optional, for clean imports
    },
  },
})
