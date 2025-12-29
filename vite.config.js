import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Landing_Page_A11y/',
  build: {
    outDir: 'dist'
  }
})
