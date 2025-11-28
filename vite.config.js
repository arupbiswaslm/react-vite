import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      usePolling: true, // Needed for some Docker environments (Windows/WSL)
    },
    host: true, // exposes the app on 0.0.0.0
    strictPort: true,
    port: 5173,
  },
});
