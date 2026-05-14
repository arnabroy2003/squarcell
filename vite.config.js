import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
   server: {
    allowedHosts: [
      'f20e-150-129-64-66.ngrok-free.app'
    ]
  }
})