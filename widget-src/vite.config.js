
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  define: {
    'process.env': {}, // 👈 Prevents ReferenceError in browser
  },
  build: {
    outDir: '../backend/public',
    emptyOutDir: true,
    lib: {
      entry: 'src/main.jsx',
      name: 'AssistantWidget',
      fileName: () => 'assistant.js',
      formats: ['iife'],
    },
  },
})
