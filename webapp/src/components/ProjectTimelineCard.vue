<template>
  <div class="project" :class="sideClass">
    <div class="project-content">
      <div class="project-arrow"></div>
      <img :src="project.cover.src" :alt="project.cover.alt" class="project-image" />
      <h3 class="project-title">{{ project.shortTitle }}</h3>
      <p class="project-description">
        {{ project.cardText || project.objectives }}
      </p>
      <router-link :to="`/projets/${project.id}`" class="project-button">
        En savoir plus
      </router-link>
    </div>
    <div class="project-dot"></div>
  </div>
</template>

<script setup>
const props = defineProps({
  project: { type: Object, required: true },
  side: { type: String, default: 'left' }
})

const sideClass = props.side === 'right' ? 'project-right' : 'project-left'
</script>

