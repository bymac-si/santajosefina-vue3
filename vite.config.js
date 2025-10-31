import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// If you deploy to GitHub Pages at https://<user>.github.io/<repo>/
// set base to '/<repo>/' (e.g. '/santajosefina-vue3/').
// You can override via VITE_BASE env var.
const base = process.env.VITE_BASE || '/santajosefina-vue3/'

export default defineConfig({
  plugins: [vue()],
  base,
})