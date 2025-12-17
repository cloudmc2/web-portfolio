import { defineConfig } from 'vite'
import path from 'path'

export default defineConfig({
  build: {
    outDir: path.resolve(__dirname, 'dist'), // final build output
    emptyOutDir: true,
    rollupOptions: {
      // this is where the input goes
      input: {
        main: path.resolve(__dirname, 'src/index.html'),
      },
    },
  },

  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // optional, for clean imports
    },
  },
})
