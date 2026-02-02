import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  base: '/Portfolio/',
  plugins: [vue()],
  // utiliser le dossier public par defaut (pas le parent)
  publicDir: 'public',
  server: {
    fs: {
      // autoriser l'acces aux fichiers en dehors du dossier webapp
      allow: [path.resolve(__dirname, '..')]
    }
  }
})
