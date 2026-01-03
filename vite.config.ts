import { defineConfig } from 'vite'

export default defineConfig({
  // Base URL for GitHub Pages
  base: '/',
  // Define the API key safely for client-side bundle
  define: {
    'process.env.API_KEY': JSON.stringify(process.env.API_KEY)
  }
})