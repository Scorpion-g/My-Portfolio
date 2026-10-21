<template>
  <div class="space-y-16 sm:space-y-24">
    <!-- En-tête de page -->
    <header class="pt-4 sm:pt-8 max-w-4xl">
      <div class="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-semibold uppercase tracking-wider mb-4">
        Portfolio & Réalisations
      </div>
      <h1 class="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
        Mes Projets
      </h1>
      <p class="text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
        Voici une sélection de mes réalisations techniques : des projets conçus en entreprise lors de mon stage, des défis académiques d'envergure menés en équipe à l'IUT (SAE), et des projets personnels d'automatisation.
      </p>
    </header>

    <!-- Filtres par catégorie -->
    <div class="flex flex-wrap items-center gap-2">
      <button
        v-for="cat in categories"
        :key="cat"
        type="button"
        @click="selectedCategory = cat"
        class="px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all focus:outline-none"
        :class="[
          selectedCategory === cat
            ? 'bg-blue-600 text-white shadow-md shadow-blue-500/25 scale-105'
            : 'bg-white/90 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200/80 dark:border-white/[0.08]'
        ]"
      >
        {{ cat }}
      </button>
    </div>

    <!-- Frise / Liste des projets -->
    <section class="space-y-8 pt-2">
      <ProjectTimelineCard
        v-for="(project, index) in filteredProjects"
        :key="project.id"
        :project="project"
        :side="index % 2 === 0 ? 'left' : 'right'"
      />

      <div v-if="filteredProjects.length === 0" class="p-12 text-center rounded-2xl bg-white/50 dark:bg-slate-900/50 border border-slate-200/80 dark:border-white/[0.08]">
        <p class="text-slate-500 dark:text-slate-400">Aucun projet trouvé dans cette catégorie pour le moment.</p>
      </div>
    </section>

    <!-- Compétences transversales mobilisées (Article éditorial ouvert) -->
    <section class="border-t border-slate-200/80 dark:border-white/[0.08] pt-12 sm:pt-16 space-y-8">
      <div class="max-w-3xl">
        <div class="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-2">
          <span>Acquis & Pratique</span>
        </div>
        <h2 class="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Ce que ces projets m'ont appris
        </h2>
        <p class="mt-2 text-slate-700 dark:text-slate-300 text-base leading-relaxed">
          Au-delà de la syntaxe d'un langage, chaque réalisation m'a permis de développer des réflexes d'ingénierie logicielle solides.
        </p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-sm">
        <div class="p-6 rounded-2xl bg-white/80 dark:bg-[#111827]/70 border border-slate-200/80 dark:border-white/[0.08] space-y-2">
          <div class="flex items-center gap-2.5 font-bold text-slate-900 dark:text-white text-base mb-1">
            <i class="fa-solid fa-laptop-code text-blue-500"></i>
            <span>Front-end & IHM</span>
          </div>
          <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            Créer des interfaces réactives et intuitives (Vue.js, Angular, Tailwind CSS, XAML), avec un soin particulier porté à la lisibilité et à l'expérience utilisateur.
          </p>
        </div>

        <div class="p-6 rounded-2xl bg-white/80 dark:bg-[#111827]/70 border border-slate-200/80 dark:border-white/[0.08] space-y-2">
          <div class="flex items-center gap-2.5 font-bold text-slate-900 dark:text-white text-base mb-1">
            <i class="fa-solid fa-server text-indigo-500"></i>
            <span>Architecture & Data</span>
          </div>
          <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            Structurer la logique métier d'APIs (Symfony, Node.js), modéliser des bases de données SQL robustes (PostgreSQL) et gérer des flux temps réel.
          </p>
        </div>

        <div class="p-6 rounded-2xl bg-white/80 dark:bg-[#111827]/70 border border-slate-200/80 dark:border-white/[0.08] space-y-2">
          <div class="flex items-center gap-2.5 font-bold text-slate-900 dark:text-white text-base mb-1">
            <i class="fa-solid fa-vial-circle-check text-emerald-500"></i>
            <span>Tests & CI/CD</span>
          </div>
          <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            Automatiser les suites de tests E2E avec Playwright et configurer des pipelines GitLab CI pour livrer sereinement en production.
          </p>
        </div>

        <div class="p-6 rounded-2xl bg-white/80 dark:bg-[#111827]/70 border border-slate-200/80 dark:border-white/[0.08] space-y-2">
          <div class="flex items-center gap-2.5 font-bold text-slate-900 dark:text-white text-base mb-1">
            <i class="fa-solid fa-users text-amber-500"></i>
            <span>Gestion & Travail d'équipe</span>
          </div>
          <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            Prioriser selon la méthode MoSCoW, découper les jalons dans YouTrack et coordonner les contributions Git avec clarté.
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import ProjectTimelineCard from '../components/ProjectTimelineCard.vue'
import { projects } from '../data/projects'

const selectedCategory = ref('Tous')

const categories = computed(() => {
  const cats = new Set(projects.map(p => p.category).filter(Boolean))
  return ['Tous', ...Array.from(cats)]
})

const filteredProjects = computed(() => {
  if (selectedCategory.value === 'Tous') return projects
  return projects.filter(p => p.category === selectedCategory.value)
})
</script>
