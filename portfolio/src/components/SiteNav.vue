<template>
  <nav class="site-nav">
    <div class="brand">Mattéo Rivière</div>
    <RouterLink to="/" class="nav-link">Accueil</RouterLink>
    <RouterLink to="/scolarite" class="nav-link">Scolarité</RouterLink>
    <RouterLink to="/activite" class="nav-link">Activités</RouterLink>
    <RouterLink to="/projets" class="nav-link">Projets</RouterLink>
    <RouterLink to="/contact" class="nav-link">Contact</RouterLink>
    <div class="nav-actions">
      <a class="cv-button" href="/cv.pdf" download>Télécharger CV</a>
      <label class="theme-switch" :class="{ 'is-light': isLight }">
        <input
          class="switch-input"
          type="checkbox"
          :checked="isLight"
          @change="onToggleTheme"
          aria-label="Basculer le thème"
        />
        <span class="switch-track">
          <span class="switch-thumb"></span>
        </span>
        <span class="switch-text">{{ isLight ? 'Clair' : 'Sombre' }}</span>
      </label>
    </div>
  </nav>
</template>

<script setup>
import { computed } from 'vue'
import { RouterLink } from 'vue-router'

const props = defineProps({
  theme: { type: String, required: true },
  onToggleTheme: { type: Function, required: true }
})

const isLight = computed(() => props.theme === 'light')
</script>
