<template>
  <div class="space-y-16 sm:space-y-24">
    <!-- En-tête de page -->
    <header class="pt-4 sm:pt-8 max-w-4xl">
      <div class="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-semibold uppercase tracking-wider mb-4">
        {{ t('projects_page.badge') }}
      </div>
      <h1 class="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
        {{ t('projects_page.title') }}
      </h1>
      <p class="text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
        {{ t('projects_page.desc') }}
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
            :placeholder="t('projects_page.search_placeholder')"
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
          <span>{{ filteredProjects.length }} {{ filteredProjects.length > 1 ? t('projects_page.found_multi') : t('projects_page.found_single') }}</span>
          <button
            v-if="searchQuery || selectedCategory !== 'Tous' || selectedTech !== 'Tous'"
            type="button"
            @click="resetFilters"
            class="ml-2 text-blue-600 dark:text-blue-400 hover:underline font-semibold"
          >
            {{ t('projects_page.reset') }}
          </button>
        </div>
      </div>

      <!-- Filtres par catégorie -->
      <div class="space-y-2">
        <div class="text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
          {{ t('projects_page.categories_title') }}
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
            {{ cat === 'Tous' ? t('projects_page.all_cat') : cat }}
          </button>
        </div>
      </div>

      <!-- Filtres par technos populaires -->
      <div class="space-y-2 pt-1">
        <div class="text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
          {{ t('projects_page.tech_title') }}
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
            {{ tech === 'Tous' ? t('projects_page.all_cat') : tech }}
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
        <h3 class="font-bold text-slate-800 dark:text-slate-200">{{ t('projects_page.empty_title') }}</h3>
        <p class="text-xs text-slate-500 dark:text-slate-400">{{ t('projects_page.empty_desc') }}</p>
        <button
          type="button"
          @click="resetFilters"
          class="btn-primary text-xs py-2 px-4"
        >
          {{ t('projects_page.empty_btn') }}
        </button>
      </div>
    </section>

    <!-- Compétences transversales mobilisées (Article éditorial ouvert) -->
    <section class="border-t border-slate-200/80 dark:border-white/[0.08] pt-12 sm:pt-16 space-y-8">
      <div class="max-w-3xl">
        <div class="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-2">
          <span>{{ t('projects_page.takeaway_tag') }}</span>
        </div>
        <h2 class="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          {{ t('projects_page.takeaway_title') }}
        </h2>
        <p class="mt-2 text-slate-700 dark:text-slate-300 text-base leading-relaxed">
          {{ t('projects_page.takeaway_desc') }}
        </p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-sm">
        <div class="p-6 rounded-2xl bg-white/80 dark:bg-[#111827]/70 border border-slate-200/80 dark:border-white/[0.08] space-y-2">
          <div class="flex items-center gap-2.5 font-bold text-slate-900 dark:text-white text-base mb-1">
            <i class="fa-solid fa-laptop-code text-blue-500"></i>
            <span>{{ t('projects_page.card1_title') }}</span>
          </div>
          <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            {{ t('projects_page.card1_desc') }}
          </p>
        </div>

        <div class="p-6 rounded-2xl bg-white/80 dark:bg-[#111827]/70 border border-slate-200/80 dark:border-white/[0.08] space-y-2">
          <div class="flex items-center gap-2.5 font-bold text-slate-900 dark:text-white text-base mb-1">
            <i class="fa-solid fa-server text-indigo-500"></i>
            <span>{{ t('projects_page.card2_title') }}</span>
          </div>
          <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            {{ t('projects_page.card2_desc') }}
          </p>
        </div>

        <div class="p-6 rounded-2xl bg-white/80 dark:bg-[#111827]/70 border border-slate-200/80 dark:border-white/[0.08] space-y-2">
          <div class="flex items-center gap-2.5 font-bold text-slate-900 dark:text-white text-base mb-1">
            <i class="fa-solid fa-vial-circle-check text-emerald-500"></i>
            <span>{{ t('projects_page.card3_title') }}</span>
          </div>
          <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            {{ t('projects_page.card3_desc') }}
          </p>
        </div>

        <div class="p-6 rounded-2xl bg-white/80 dark:bg-[#111827]/70 border border-slate-200/80 dark:border-white/[0.08] space-y-2">
          <div class="flex items-center gap-2.5 font-bold text-slate-900 dark:text-white text-base mb-1">
            <i class="fa-solid fa-users text-amber-500"></i>
            <span>{{ t('projects_page.card4_title') }}</span>
          </div>
          <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            {{ t('projects_page.card4_desc') }}
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
import { useI18n } from '../composables/useI18n'

const { t } = useI18n()

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
