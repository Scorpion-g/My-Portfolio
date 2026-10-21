<template>
  <div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
    <!-- COLONNE PRINCIPALE (7 colonnes sur desktop) -->
    <article class="lg:col-span-7 space-y-6">
      <div class="pro-card space-y-6">
        <!-- Présentation & Contexte -->
        <div>
          <h2 class="text-xl font-bold text-slate-900 dark:text-white mb-2.5 flex items-center gap-2">
            <i class="fa-solid fa-circle-info text-blue-500 text-sm"></i>
            <span>{{ t('project_detail.what_is_title') }}</span>
          </h2>
          <p class="text-slate-700 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
            {{ project.summary }}
          </p>
        </div>

        <!-- Objectifs -->
        <div class="pt-6 border-t border-slate-200/80 dark:border-white/[0.08]">
          <h2 class="text-xl font-bold text-slate-900 dark:text-white mb-2.5 flex items-center gap-2">
            <i class="fa-solid fa-bullseye text-indigo-500 text-sm"></i>
            <span>{{ t('project_detail.objectives_title') }}</span>
          </h2>
          <p class="text-slate-700 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
            {{ project.objectives }}
          </p>
        </div>

        <!-- Ce que j'ai réalisé / Points clés -->
        <div v-if="project.highlights && project.highlights.length" class="pt-6 border-t border-slate-200/80 dark:border-white/[0.08]">
          <h2 class="text-xl font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
            <i class="fa-solid fa-check-double text-emerald-500 text-sm"></i>
            <span>{{ t('project_detail.what_done_title') }}</span>
          </h2>
          <ul class="space-y-2.5">
            <li
              v-for="(highlight, idx) in project.highlights"
              :key="idx"
              class="flex items-start gap-3 text-sm text-slate-700 dark:text-slate-300"
            >
              <i class="fa-solid fa-circle-check text-emerald-500 mt-1 text-xs shrink-0"></i>
              <span>{{ highlight }}</span>
            </li>
          </ul>
        </div>

        <!-- Technologies -->
        <div class="pt-6 border-t border-slate-200/80 dark:border-white/[0.08]">
          <h2 class="text-xl font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
            <i class="fa-solid fa-code text-amber-500 text-sm"></i>
            <span>{{ t('project_detail.tech_used_title') }}</span>
          </h2>
          <p class="text-slate-700 dark:text-slate-300 text-sm mb-3">
            {{ project.tech }}
          </p>
          <div v-if="project.tags" class="flex flex-wrap gap-2">
            <span v-for="tag in project.tags" :key="tag" class="badge-tag">
              {{ tag }}
            </span>
          </div>
        </div>
      </div>
    </article>

    <!-- COLONNE GALERIE INTERACTIVE & INFOS (5 colonnes sur desktop) -->
    <aside class="lg:col-span-5 space-y-6">
      <!-- Fiche méta-données -->
      <div class="pro-card space-y-3.5 text-sm">
        <h3 class="font-bold text-slate-900 dark:text-white text-base pb-3 border-b border-slate-200/80 dark:border-white/[0.08]">
          {{ t('project_detail.summary_card_title') }}
        </h3>

        <div class="flex items-start justify-between gap-2">
          <span class="text-slate-500 text-xs">{{ t('project_detail.category_label') }}</span>
          <span class="font-semibold text-slate-800 dark:text-slate-200 text-xs text-right">{{ project.category }}</span>
        </div>

        <div class="flex items-start justify-between gap-2">
          <span class="text-slate-500 text-xs">{{ t('project_detail.duration_label') }}</span>
          <span class="font-semibold text-slate-800 dark:text-slate-200 text-xs text-right">{{ project.duration }}</span>
        </div>

        <div class="flex items-start justify-between gap-2">
          <span class="text-slate-500 text-xs">{{ t('project_detail.team_label') }}</span>
          <span class="font-semibold text-slate-800 dark:text-slate-200 text-xs text-right">{{ project.team }}</span>
        </div>

        <!-- Lien GitHub si existant -->
        <div v-if="project.links?.github" class="pt-3 border-t border-slate-200/80 dark:border-white/[0.08]">
          <a
            :href="project.links.github"
            target="_blank"
            rel="noopener noreferrer"
            class="btn-primary w-full text-xs"
          >
            <i class="fa-brands fa-github text-sm"></i>
            <span>{{ t('project_detail.github_btn') }}</span>
          </a>
        </div>
      </div>

      <!-- GALERIE INTERACTIVE ANIMÉE -->
      <div class="pro-card space-y-4">
        <div class="flex items-center justify-between">
          <h3 class="font-bold text-slate-900 dark:text-white text-base flex items-center gap-2">
            <i class="fa-regular fa-images text-blue-500"></i>
            <span>{{ t('project_detail.gallery_title') }}</span>
          </h3>
          <span class="text-[11px] text-slate-400">{{ t('project_detail.gallery_hint') }}</span>
        </div>

        <!-- Image active grande taille avec zoom cliquable -->
        <div class="group relative rounded-xl overflow-hidden bg-slate-950 border border-slate-200/80 dark:border-white/[0.08] min-h-[220px] flex items-center justify-center">
          <img
            :src="activeImage.src"
            :alt="activeImage.alt"
            class="w-full h-auto max-h-[360px] object-contain transition-all duration-300"
          />

          <!-- Overlay d'agrandissement -->
          <a
            :href="activeImage.src"
            target="_blank"
            rel="noopener noreferrer"
            class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-xs font-semibold gap-1.5"
            :title="t('project_detail.fullscreen')"
          >
            <i class="fa-solid fa-magnifying-glass-plus text-sm"></i>
            <span>{{ t('project_detail.fullscreen') }}</span>
          </a>

          <!-- Badge sur l'image -->
          <span
            v-if="activeImage.badge"
            class="absolute bottom-2.5 left-2.5 text-[10px] font-semibold px-2 py-0.5 rounded-md bg-black/80 backdrop-blur-md text-white border border-white/10"
          >
            {{ activeImage.badge }}
          </span>
        </div>

        <!-- Légende -->
        <p v-if="activeImage.caption" class="text-xs text-slate-500 dark:text-slate-400 italic text-center">
          {{ activeImage.caption }}
        </p>

        <!-- Miniatures interactives (Vignettes cliquables avec effet) -->
        <div v-if="allImages.length > 1" class="pt-3 border-t border-slate-200/80 dark:border-white/[0.08]">
          <div class="grid grid-cols-3 gap-2.5">
            <button
              v-for="(img, idx) in allImages"
              :key="idx"
              type="button"
              @click="activeImage = img"
              class="relative rounded-lg overflow-hidden h-16 border-2 transition-all focus:outline-none"
              :class="[
                activeImage.src === img.src
                  ? 'border-blue-600 scale-95 shadow-md ring-2 ring-blue-500/20'
                  : 'border-transparent opacity-70 hover:opacity-100 hover:scale-105'
              ]"
            >
              <img :src="img.src" :alt="img.alt" class="w-full h-full object-cover" />
            </button>
          </div>
        </div>
      </div>
    </aside>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useI18n } from '../composables/useI18n'

const { t } = useI18n()

const props = defineProps({
  project: { type: Object, required: true }
})

// Regroupe l'image de couverture et les images de la galerie
const allImages = computed(() => {
  const list = []
  if (props.project?.cover) {
    list.push(props.project.cover)
  }
  if (props.project?.gallery && Array.isArray(props.project.gallery)) {
    list.push(...props.project.gallery)
  }
  return list
})

// Image actuellement affichée dans la visionneuse
const activeImage = ref(props.project?.cover || {})
</script>
