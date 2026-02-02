<template>
  <div id="app-root" class="app-shell theme-dark bg-default">
    <SiteNav />
    <main class="page-content">
      <RouterView />
    </main>
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router'
import SiteNav from './components/SiteNav.vue'
</script>
