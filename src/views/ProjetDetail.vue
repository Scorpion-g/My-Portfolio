<template>
  <div class="space-y-8">
    <!-- Fil d'ariane & Bouton retour -->
    <div class="flex items-center justify-between gap-4">
      <nav class="flex items-center gap-2 text-xs sm:text-sm text-slate-500 dark:text-slate-400">
        <RouterLink to="/" class="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Accueil</RouterLink>
        <span class="text-slate-300 dark:text-slate-600">/</span>
        <RouterLink to="/projets" class="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Projets</RouterLink>
        <span class="text-slate-300 dark:text-slate-600">/</span>
        <span class="text-slate-800 dark:text-slate-200 font-medium truncate max-w-[200px] sm:max-w-none">
          {{ project ? project.shortTitle : 'Détail' }}
        </span>
      </nav>

      <RouterLink
        to="/projets"
        class="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
      >
        <i class="fa-solid fa-arrow-left text-[10px]"></i>
        <span>Retour aux projets</span>
      </RouterLink>
    </div>

    <!-- En-tête du projet trouvé -->
    <header v-if="project" class="max-w-3xl">
      <div class="flex items-center gap-2 mb-3">
        <span class="badge-primary">
          {{ project.category }}
        </span>
        <span class="text-xs text-slate-400 font-mono">{{ project.duration }}</span>
      </div>
      <h1 class="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
        {{ project.title }}
      </h1>
      <p class="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
        {{ project.summary }}
      </p>
    </header>

    <!-- Composant de détail -->
    <div v-if="project">
      <ProjectDetail :project="project" />
    </div>

    <!-- État projet introuvable -->
    <div v-else class="pro-card text-center py-16 space-y-4">
      <div class="w-16 h-16 rounded-full bg-red-500/10 text-red-500 mx-auto flex items-center justify-center text-2xl">
        <i class="fa-solid fa-triangle-exclamation"></i>
      </div>
      <h2 class="text-2xl font-bold text-slate-900 dark:text-white">Projet introuvable</h2>
      <p class="text-slate-500 dark:text-slate-400 max-w-md mx-auto text-sm">
        Le projet demandé n'existe pas ou a été déplacé. Parcourez la liste pour explorer mes autres réalisations.
      </p>
      <div class="pt-2">
        <RouterLink to="/projets" class="btn-primary">
          <span>Voir tous les projets</span>
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import ProjectDetail from '../components/ProjectDetail.vue'
import { projects } from '../data/projects'

const route = useRoute()
const project = computed(() => projects.find((item) => item.id === route.params.id))
</script>
