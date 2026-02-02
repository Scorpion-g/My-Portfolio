<template>
  <nav class="site-nav">
    <div class="brand">Mattéo Rivière</div>
    <RouterLink to="/" class="nav-link">Accueil</RouterLink>
    <RouterLink to="/scolarite" class="nav-link">Scolarité</RouterLink>
    <RouterLink to="/activite" class="nav-link">Activités</RouterLink>
    <RouterLink to="/projets" class="nav-link">Projets</RouterLink>
    <RouterLink to="/contact" class="nav-link">Contact</RouterLink>
  </nav>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>
