import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import fs from 'node:fs'

// Détection automatique si un nom de domaine personnalisé est configuré
const hasCustomDomain = fs.existsSync('./public/CNAME')

export default defineConfig({
  plugins: [vue()],
  // En local ou avec domaine personnalisé / Vercel : base = '/'
  // Si build sur GitHub Actions sans domaine personnalisé : '/My-Portfolio/'
  base: process.env.VITE_BASE || (hasCustomDomain ? '/' : (process.env.GITHUB_ACTIONS ? '/My-Portfolio/' : '/')),
})
