<template>
  <div class="relative pl-8 sm:pl-10 pb-10 border-l-2 border-blue-500/30 dark:border-blue-500/20 last:border-transparent last:pb-0 group">
    <!-- Point lumineux sur la timeline -->
    <div
      class="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-blue-600 ring-4 ring-white dark:ring-[#0B0F17] group-hover:scale-125 transition-transform"
    ></div>

    <!-- Carte du projet -->
    <div class="pro-card-interactive">
      <div class="flex flex-col sm:flex-row gap-6">
        <!-- Image de couverture -->
        <div class="sm:w-1/3 shrink-0 overflow-hidden rounded-xl bg-slate-900 h-44 relative">
          <img
            :src="project.cover.src"
            :alt="project.cover.alt"
            class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <span
            v-if="project.cover?.badge"
            class="absolute bottom-2 left-2 text-[11px] font-semibold px-2 py-0.5 rounded-md bg-black/75 backdrop-blur-md text-white border border-white/10"
          >
            {{ project.cover.badge }}
          </span>
        </div>

        <!-- Détails du projet -->
        <div class="sm:w-2/3 flex flex-col justify-between">
          <div>
            <div class="flex items-center gap-2 mb-2">
              <span class="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                {{ project.category || 'Projet' }}
              </span>
              <span class="text-xs text-slate-400">• {{ project.duration }}</span>
            </div>

            <h3 class="text-xl font-bold text-slate-900 dark:text-white mb-2">
              {{ project.title }}
            </h3>

            <p class="text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
              {{ project.cardText || project.summary }}
            </p>

            <!-- Tags -->
            <div v-if="project.tags" class="flex flex-wrap gap-1.5 mb-4">
              <span v-for="tag in project.tags" :key="tag" class="badge-tag">
                {{ tag }}
              </span>
            </div>
          </div>

          <!-- Actions -->
          <div class="pt-4 border-t border-slate-200/60 dark:border-white/[0.08] flex items-center gap-3">
            <RouterLink :to="`/projets/${project.id}`" class="btn-primary text-xs py-2 px-4">
              <span>{{ t('timeline_card.case_study_btn') }}</span>
              <i class="fa-solid fa-arrow-right text-[10px]"></i>
            </RouterLink>

            <a
              v-if="project.links?.github"
              :href="project.links.github"
              target="_blank"
              rel="noopener noreferrer"
              class="btn-secondary text-xs py-2 px-4"
            >
              <i class="fa-brands fa-github text-sm"></i>
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { useI18n } from '../composables/useI18n'

const { t } = useI18n()

defineProps({
  project: { type: Object, required: true },
  side: { type: String, default: 'left' }
})
</script>