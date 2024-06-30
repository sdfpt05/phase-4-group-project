import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  preview: {
    port: process.env.PORT ? parseInt(process.env.PORT) : 4173,
    strictPort: true,
    host: true,  // Ensure Vite binds to 0.0.0.0
  },
})
