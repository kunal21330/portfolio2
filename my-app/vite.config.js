import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Allows access from other devices
    port: 5173, // Keep the same port
    strictPort: true // Ensures it does not change
  }

})
