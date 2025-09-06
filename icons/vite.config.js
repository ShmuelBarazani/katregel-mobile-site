// C:\Users\user\אפליקציות\katregel-mobile\vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base: './' מאפשר לטעון את האתר ישירות מקבצים (file://) בטלפון
export default defineConfig({
  base: './',
  plugins: [react()]
})
