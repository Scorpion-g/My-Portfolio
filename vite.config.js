import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  // Pour GitHub Pages, remplace 'My-Portfolio' par le nom de ton repo
  base: '/My-Portfolio/',
})
