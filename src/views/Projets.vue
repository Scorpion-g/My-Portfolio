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

    <!-- Barre de recherche et filtres combinés -->
    <div class="space-y-4">
      <div class="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 justify-between">
        <!-- Champ de recherche textuelle -->
        <div class="relative flex-1 max-w-md">
          <i class="fa-solid fa-magnifying-glass absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-xs"></i>
          <input
            v-model="searchQuery"
            type="text"
            placeholder="Rechercher par mot-clé (Playwright, Vue.js, GPS, bot...)"
            class="w-full pl-9 pr-8 py-2.5 rounded-xl text-xs sm:text-sm bg-white/90 dark:bg-slate-800/80 border border-slate-200/80 dark:border-white/[0.08] focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 text-slate-800 dark:text-slate-100 placeholder-slate-400 outline-none transition-all shadow-xs"
          />
          <button
            v-if="searchQuery"
            type="button"
            @click="searchQuery = ''"
            class="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 text-xs"
            title="Effacer la recherche"
          >
            <i class="fa-solid fa-xmark"></i>
          </button>
        </div>

        <!-- Compteur de résultats -->
        <div class="text-xs text-slate-500 dark:text-slate-400 font-medium shrink-0 flex items-center gap-2">
          <span class="w-2 h-2 rounded-full bg-blue-600 inline-block"></span>
          <span>{{ filteredProjects.length }} projet{{ filteredProjects.length > 1 ? 's' : '' }} trouvé{{ filteredProjects.length > 1 ? 's' : '' }}</span>
          <button
            v-if="searchQuery || selectedCategory !== 'Tous' || selectedTech !== 'Tous'"
            type="button"
            @click="resetFilters"
            class="ml-2 text-blue-600 dark:text-blue-400 hover:underline font-semibold"
          >
            Réinitialiser
          </button>
        </div>
      </div>

      <!-- Filtres par catégorie -->
      <div class="space-y-2">
        <div class="text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
          Catégories
        </div>
        <div class="flex flex-wrap items-center gap-2">
          <button
            v-for="cat in categories"
            :key="cat"
            type="button"
            @click="selectedCategory = cat"
            class="px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all focus:outline-none"
            :class="[
              selectedCategory === cat
                ? 'bg-blue-600 text-white shadow-xs scale-105'
                : 'bg-white/90 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200/80 dark:border-white/[0.08]'
            ]"
          >
            {{ cat }}
          </button>
        </div>
      </div>

      <!-- Filtres par technos populaires -->
      <div class="space-y-2 pt-1">
        <div class="text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
          Technologies
        </div>
        <div class="flex flex-wrap items-center gap-1.5">
          <button
            v-for="tech in techPills"
            :key="tech"
            type="button"
            @click="selectedTech = tech"
            class="px-2.5 py-1 rounded-lg text-xs font-medium transition-all focus:outline-none"
            :class="[
              selectedTech === tech
                ? 'bg-indigo-600 text-white font-semibold shadow-xs'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700 border border-transparent'
            ]"
          >
            {{ tech }}
          </button>
        </div>
      </div>
    </div>

    <!-- Frise / Liste des projets -->
    <section class="space-y-8 pt-2">
      <ProjectTimelineCard
        v-for="(project, index) in filteredProjects"
        :key="project.id"
        :project="project"
        :side="index % 2 === 0 ? 'left' : 'right'"
      />

      <div
        v-if="filteredProjects.length === 0"
        class="p-12 text-center rounded-2xl bg-white/50 dark:bg-slate-900/50 border border-slate-200/80 dark:border-white/[0.08] space-y-3"
      >
        <i class="fa-solid fa-filter-circle-xmark text-3xl text-slate-400"></i>
        <h3 class="font-bold text-slate-800 dark:text-slate-200">Aucun projet ne correspond à votre recherche</h3>
        <p class="text-xs text-slate-500 dark:text-slate-400">Essayez d'autres mots-clés ou réinitialisez les filtres.</p>
        <button
          type="button"
          @click="resetFilters"
          class="btn-primary text-xs py-2 px-4"
        >
          Voir tous les projets
        </button>
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
const selectedTech = ref('Tous')
const searchQuery = ref('')

const categories = computed(() => {
  const cats = new Set(projects.map(p => p.category).filter(Boolean))
  return ['Tous', ...Array.from(cats)]
})

const techPills = [
  'Tous',
  'Vue.js',
  'Playwright / Tests',
  'Node.js',
  'Kubernetes / CI',
  'PostgreSQL',
  'Temps Réel',
  'Python'
]

const resetFilters = () => {
  selectedCategory.value = 'Tous'
  selectedTech.value = 'Tous'
  searchQuery.value = ''
}

const filteredProjects = computed(() => {
  const q = searchQuery.value.trim().toLowerCase()
  const cat = selectedCategory.value
  const tech = selectedTech.value

  return projects.filter(p => {
    // 1. Filtre catégorie
    if (cat !== 'Tous' && p.category !== cat) {
      return false
    }

    // 2. Filtre techno
    if (tech !== 'Tous') {
      const matchTech = (p.tech && p.tech.toLowerCase().includes(tech.toLowerCase().replace(' / tests', '').replace(' / ci', ''))) ||
        (p.tags && p.tags.some(t => t.toLowerCase().includes(tech.toLowerCase().replace(' / tests', '').replace(' / ci', ''))))
      if (!matchTech) return false
    }

    // 3. Filtre recherche textuelle
    if (q) {
      const searchable = [
        p.title,
        p.shortTitle,
        p.summary,
        p.cardText,
        p.tech,
        ...(p.tags || []),
        ...(p.highlights || [])
      ].filter(Boolean).join(' ').toLowerCase()

      if (!searchable.includes(q)) return false
    }

    return true
  })
})
</script>
