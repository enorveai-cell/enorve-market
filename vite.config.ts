import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'html-transform',
      transformIndexHtml(html) {
        return html.replace(
          '%VITE_GA_MEASUREMENT_ID%',
          process.env.VITE_GA_MEASUREMENT_ID || ''
        )
      }
    }
  ],
})
