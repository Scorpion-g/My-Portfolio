<template>
  <section class="portfolio-page">
    <div class="section-block">
      <h1 class="section-title">Mes projets</h1>
      <p class="section-subtitle">Des projets scolaires et personnels, orientés web.</p>
    </div>

    <div class="section-block">
      <p>
        J’ai réalisé de nombreux projets en cours et en autonomie, avec un intérêt particulier pour le web.
        Voici une frise verticale de quelques réalisations.
      </p>
    </div>

    <div class="project-timeline">
      <ProjectTimelineCard
        v-for="(project, index) in projects"
        :key="project.id"
        :project="project"
        :side="index % 2 === 0 ? 'left' : 'right'"
      />
    </div>

    <div class="section-block">
      <div class="card">
        <h2>Compétences mobilisées</h2>
        <div class="clean-list">
          <div class="item"><i class="fa-solid fa-laptop-code"></i>Front-end : intégration et interfaces</div>
          <div class="item"><i class="fa-solid fa-server"></i>Back-end : logique, API, données</div>
          <div class="item"><i class="fa-solid fa-mobile-screen"></i>Responsive : mobile-first</div>
          <div class="item"><i class="fa-solid fa-shield-halved"></i>Qualité : tests, validation, rigueur</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import ProjectTimelineCard from '../components/ProjectTimelineCard.vue'
import { projects } from '../data/projects'
</script>
