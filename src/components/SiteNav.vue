<template>
  <header class="site-header no-print sticky top-0 z-50 w-full px-4 sm:px-6 lg:px-8 pt-4 pb-2 transition-all duration-300">
    <div
      class="max-w-[1440px] mx-auto rounded-2xl bg-white/90 dark:bg-[#111827]/80 backdrop-blur-xl border border-slate-200/90 dark:border-white/[0.08] shadow-sm dark:shadow-2xl px-4 sm:px-6 py-3 transition-all"
    >
      <div class="flex items-center justify-between">
        <!-- Logo / Marque -->
        <RouterLink to="/" class="flex items-center gap-3 group focus:outline-none">
          <div
            class="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-500 text-white font-extrabold flex items-center justify-center text-base tracking-tight shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform"
          >
            MR
          </div>
          <div class="flex flex-col">
            <span class="font-bold text-sm sm:text-base text-slate-900 dark:text-white leading-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              Mattéo Rivière
            </span>
            <span class="text-xs text-slate-500 dark:text-slate-400 hidden sm:inline">
              Développeur Web
            </span>
          </div>
        </RouterLink>

        <!-- Navigation Desktop -->
        <nav class="hidden md:flex items-center gap-1 bg-slate-100/80 dark:bg-slate-800/50 p-1.5 rounded-xl border border-slate-200/50 dark:border-white/[0.05]">
          <RouterLink
            v-for="link in navLinks"
            :key="link.path"
            :to="link.path"
            class="px-3.5 py-1.5 rounded-lg text-sm font-medium transition-all"
            :class="[
              $route.path === link.path
                ? 'bg-white dark:bg-slate-700/80 text-blue-600 dark:text-white shadow-sm font-semibold'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-white/50 dark:hover:bg-slate-700/40'
            ]"
          >
            {{ link.name }}
          </RouterLink>
        </nav>

        <!-- Actions Desktop & Mobile Toggle -->
        <div class="flex items-center gap-2 sm:gap-3">
          <!-- Bouton CV -->
          <RouterLink
            to="/cv"
            class="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all active:scale-95"
            :class="[
              $route.path === '/cv'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'text-blue-700 dark:text-blue-300 bg-blue-50 hover:bg-blue-100 dark:bg-blue-500/10 dark:hover:bg-blue-500/20 border border-blue-200 dark:border-blue-500/20'
            ]"
            title="Consulter mon CV en ligne"
          >
            <i class="fa-regular fa-file-lines text-xs"></i>
            <span>CV</span>
          </RouterLink>

          <!-- Bouton Thème Sombre/Clair -->
          <button
            type="button"
            @click="onToggleTheme"
            class="w-9 h-9 rounded-xl flex items-center justify-center text-slate-600 dark:text-slate-300 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800/80 dark:hover:bg-slate-800 border border-slate-200/60 dark:border-white/[0.08] transition-all active:scale-90 focus:outline-none"
            :aria-label="isDark ? 'Passer au mode clair' : 'Passer au mode sombre'"
            :title="isDark ? 'Passer au mode clair' : 'Passer au mode sombre'"
          >
            <i :class="isDark ? 'fa-solid fa-sun text-amber-400' : 'fa-solid fa-moon text-blue-600'"></i>
          </button>

          <!-- Bouton Menu Mobile (Hamburger) -->
          <button
            type="button"
            @click="mobileOpen = !mobileOpen"
            class="md:hidden w-9 h-9 rounded-xl flex items-center justify-center text-slate-700 dark:text-slate-200 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800/80 dark:hover:bg-slate-800 border border-slate-200/60 dark:border-white/[0.08] transition-all focus:outline-none"
            :aria-expanded="mobileOpen"
            aria-label="Ouvrir le menu"
          >
            <i :class="mobileOpen ? 'fa-solid fa-xmark text-base' : 'fa-solid fa-bars text-base'"></i>
          </button>
        </div>
      </div>

      <!-- Menu Mobile Déroulant -->
      <div
        v-if="mobileOpen"
        class="md:hidden pt-4 pb-2 border-t border-slate-200/70 dark:border-white/[0.08] mt-3 space-y-1"
      >
        <RouterLink
          v-for="link in navLinks"
          :key="link.path"
          :to="link.path"
          @click="mobileOpen = false"
          class="block px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all"
          :class="[
            $route.path === link.path
              ? 'bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 font-semibold'
              : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
          ]"
        >
          {{ link.name }}
        </RouterLink>

        <div class="pt-2">
          <RouterLink
            to="/cv"
            @click="mobileOpen = false"
            class="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-sm font-semibold text-blue-700 dark:text-blue-300 bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20"
          >
            <i class="fa-regular fa-file-lines text-xs"></i>
            <span>Consulter mon CV</span>
          </RouterLink>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, computed } from 'vue'
import { RouterLink, useRoute } from 'vue-router'

const props = defineProps({
  theme: { type: String, required: true },
  onToggleTheme: { type: Function, required: true }
})

const route = useRoute()
const mobileOpen = ref(false)

const isDark = computed(() => props.theme === 'dark')


const navLinks = [
  { name: 'Accueil', path: '/' },
  { name: 'Projets', path: '/projets' },
  { name: 'Scolarité', path: '/scolarite' },
  { name: 'Activités', path: '/activite' },
  { name: 'Contact', path: '/contact' }
]
</script>
