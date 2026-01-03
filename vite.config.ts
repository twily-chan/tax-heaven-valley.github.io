import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Base URL for GitHub Pages
  base: '/tax-heaven-valley/',
  // Define the API key safely for client-side bundle
  define: {
    'process.env.API_KEY': JSON.stringify(process.env.API_KEY || "")
  }
})