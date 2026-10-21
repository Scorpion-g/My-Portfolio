<template>
  <div class="min-h-screen flex flex-col relative overflow-hidden bg-[#F6F7F9] dark:bg-[#0B0F17] text-slate-800 dark:text-slate-100 transition-colors duration-300 print:bg-white print:min-h-0 print:p-0 print:m-0">
    <!-- Fond subtil avec halo lumineux léger en arrière-plan -->
    <div class="fixed inset-0 pointer-events-none z-0">
      <div class="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-blue-500/10 dark:bg-blue-600/10 blur-3xl"></div>
      <div class="absolute top-1/3 -right-40 w-[500px] h-[500px] rounded-full bg-indigo-500/10 dark:bg-indigo-600/10 blur-3xl"></div>
      <div class="absolute -bottom-40 left-1/3 w-[500px] h-[500px] rounded-full bg-cyan-500/10 dark:bg-cyan-600/10 blur-3xl"></div>
    </div>

    <!-- Navigation du site -->
    <SiteNav
      :theme="theme"
      :on-toggle-theme="toggleTheme"
      @open-palette="isPaletteOpen = true"
      class="relative z-10"
    />

    <!-- Command Palette (Ctrl+K) -->
    <CommandPalette v-model="isPaletteOpen" @toggle-theme="toggleTheme" />

    <!-- Contenu principal fluide & large -->
    <main class="relative z-10 flex-1 max-w-[1440px] w-full mx-auto px-4 sm:px-6 lg:px-10 py-6 sm:py-10 print:p-0 print:m-0 print:max-w-none">
      <RouterView />
    </main>

    <!-- Footer moderne et épuré -->
    <footer class="no-print relative z-10 border-t border-slate-200/80 dark:border-white/[0.08] mt-16 py-8 bg-white/70 dark:bg-[#0E1524]/60 backdrop-blur-md">
      <div class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
        <div class="flex items-center gap-2">
          <span>© {{ currentYear }} Mattéo Rivière.</span>
          <span>Étudiant en BUT Informatique • Aubière</span>
        </div>

        <div class="flex items-center gap-6">
          <RouterLink to="/cv" class="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            Mon CV
          </RouterLink>
          <a
            href="https://github.com/Scorpion-g"
            target="_blank"
            rel="noopener noreferrer"
            class="hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-1.5"
          >
            <i class="fa-brands fa-github text-sm"></i>
            <span>GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/matteo-rivière-8664b8356"
            target="_blank"
            rel="noopener noreferrer"
            class="hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-1.5"
          >
            <i class="fa-brands fa-linkedin text-sm"></i>
            <span>LinkedIn</span>
          </a>
          <a
            href="mailto:contact@matteoriviere.fr"
            class="hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-1.5"
          >
            <i class="fa-solid fa-envelope text-sm"></i>
            <span>Email</span>
          </a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { RouterView, RouterLink } from 'vue-router'
import SiteNav from './components/SiteNav.vue'
import CommandPalette from './components/CommandPalette.vue'

const currentYear = new Date().getFullYear()
const isPaletteOpen = ref(false)

// Initialisation du thème depuis localStorage ou préférence système
const getInitialTheme = () => {
  if (typeof window !== 'undefined') {
    const saved = localStorage.getItem('theme')
    if (saved) return saved
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
      return 'light'
    }
  }
  return 'dark'
}

const theme = ref(getInitialTheme())

const applyTheme = (val) => {
  if (typeof document === 'undefined') return
  const root = document.documentElement
  if (val === 'dark') {
    root.classList.add('dark')
    root.classList.remove('light')
  } else {
    root.classList.remove('dark')
    root.classList.add('light')
  }
}

const toggleTheme = () => {
  theme.value = theme.value === 'dark' ? 'light' : 'dark'
  localStorage.setItem('theme', theme.value)
  applyTheme(theme.value)
}

onMounted(() => {
  applyTheme(theme.value)
})
</script>
