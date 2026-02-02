<template>
  <div id="app-root" class="app-shell bg-default" :class="themeClass">
    <SiteNav :theme="theme" :on-toggle-theme="toggleTheme" />
    <main class="page-content">
      <RouterView />
    </main>
  </div>
</template>

<script setup>
import { computed, ref, watchEffect } from 'vue'
import { RouterView } from 'vue-router'
import SiteNav from './components/SiteNav.vue'

const theme = ref(localStorage.getItem('theme') || 'dark')
const themeClass = computed(() => (theme.value === 'light' ? 'theme-light' : 'theme-dark'))

const toggleTheme = () => {
  theme.value = theme.value === 'dark' ? 'light' : 'dark'
  localStorage.setItem('theme', theme.value)
}

watchEffect(() => {
  if (typeof document === 'undefined') return
  document.body.classList.toggle('theme-dark', theme.value === 'dark')
  document.body.classList.toggle('theme-light', theme.value === 'light')
})
</script>
<style scoped></style>
