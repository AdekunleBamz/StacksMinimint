import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Minimal contribution
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
    host: true, // Listen on all addresses
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
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
