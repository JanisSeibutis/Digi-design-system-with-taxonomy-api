import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  optimizeDeps: {
    exclude: ['@digi/arbetsformedlingen'],
  },
  plugins: [react(), tailwindcss()],
  base: '/Digi-design-system-with-taxonomy-api/',
})
