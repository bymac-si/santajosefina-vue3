import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// Repo: santajosefina-vue3
const base = process.env.VITE_BASE || '/santajosefina-vue3/'

export default defineConfig({
  plugins: [vue()],
  base,
})