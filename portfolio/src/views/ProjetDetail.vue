<template>
  <section class="portfolio-page">
    <div class="section-block">
      <h1 class="section-title">
        {{ project ? project.title : 'Projet introuvable' }}
      </h1>
      <p class="section-subtitle" v-if="project">{{ project.summary }}</p>
      <p class="section-subtitle" v-else>Le projet demande n'existe pas ou a ete supprime.</p>
    </div>

    <div v-if="project">
      <ProjectDetail :project="project" />
    </div>

    <div v-else class="card">
      <h2>Retour aux projets</h2>
      <p>Parcourez la frise pour voir les projets disponibles.</p>
      <router-link to="/projets" class="project-button">Voir les projets</router-link>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import ProjectDetail from '../components/ProjectDetail.vue'
import { projects } from '../data/projects'

const route = useRoute()

const project = computed(() => projects.find((item) => item.id === route.params.id))
</script>
