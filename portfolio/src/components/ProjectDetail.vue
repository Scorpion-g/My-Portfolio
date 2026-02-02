<template>
  <section class="project-detail-layout">
    <article class="card project-detail-main">
      <h1>{{ project.title }}</h1>
      <p>{{ project.summary }}</p>

      <h2>Objectifs du projet</h2>
      <p>{{ project.objectives }}</p>

      <h2>Technologies utilisees</h2>
      <p>{{ project.tech }}</p>

      <h2>Equipe de projet</h2>
      <p>{{ project.team }}</p>

      <h2>Duree du projet</h2>
      <p>{{ project.duration }}</p>
    </article>

    <aside class="card project-detail-aside">
      <h2>Apercu du projet</h2>
      <div class="image-zoom-container">
        <a :href="project.cover.src" target="_blank" rel="noopener">
          <img :src="project.cover.src" :alt="project.cover.alt" class="project-image" />
          <div class="zoom-overlay">
            <i class="fas fa-search-plus zoom-icon"></i>
          </div>
        </a>
        <div class="tech-badge">{{ project.cover.badge }}</div>
      </div>
      <div class="image-caption">{{ project.cover.caption }}</div>
      <div class="image-separator"></div>

      <div class="aside-gallery">
        <div class="image-item" v-for="(img, idx) in project.gallery" :key="idx">
          <a :href="img.src" target="_blank" rel="noopener">
            <img :src="img.src" :alt="img.alt" class="project-image" />
          </a>
          <div class="tech-badge">{{ img.badge }}</div>
          <div v-if="img.caption" class="image-caption">{{ img.caption }}</div>
        </div>
      </div>
    </aside>
  </section>
</template>

<script setup>
defineProps({
  project: { type: Object, required: true }
})
</script>

