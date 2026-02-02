<template>
  <div class="project" :class="sideClass">
    <div class="project-content">
      <div class="project-arrow"></div>

      <img :src="project.cover.src" :alt="project.cover.alt" class="project-image" />

      <h3 class="project-title">{{ project.shortTitle }}</h3>

      <p class="project-description">
        {{ project.cardText || project.objectives }}
      </p>

      <div class="home-actions">
        <router-link :to="`/projets/${project.id}`" class="project-button">
          En savoir plus
        </router-link>

        <a
            v-if="project.links?.github"
            :href="project.links.github"
            target="_blank"
            class="project-button ghost"
        >
          <i class="fa-brands fa-github"></i> GitHub
        </a>
      </div>
    </div>
    <div class="project-dot"></div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  project: { type: Object, required: true },
  side: { type: String, default: 'left' }
})

// Utiliser un computed est plus "Vue-way" pour la réactivité
const sideClass = computed(() => props.side === 'right' ? 'project-right' : 'project-left')
</script>