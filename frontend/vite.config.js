import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  resolve: {
    preserveSymlinks: true,
  },
  server: {
    port: 3000,
    open: true,
    host: true, // Listen on all addresses
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'stacks-vendor': ['@stacks/connect', '@stacks/network', '@stacks/transactions'],
        },
      },
    },
  },
})
