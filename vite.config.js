import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Listen on all IP addresses
    allowedHosts: true, // Allow all hosts
  },
  test :{
    globals : true,
    environment : "jsdom",
    setupFiles : ["./src/setupTests.jsx"]
  }
})
