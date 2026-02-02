<template>
  <div>
    <h1>Projet: {{ id }}</h1>
    <div v-if="id === 'sukaijo'">
      <img :src="sukaijoCover" alt="Sukaijo" style="max-width:300px" />
      <p>Le projet Sukaijo est un projet scolaire ...</p>
    </div>
    <div v-else-if="id === 'sparcky'">
      <img :src="sparckyCover" alt="Sparcky" style="max-width:300px" />
      <p>Le projet Sparcky est un bot Discord ...</p>
    </div>
    <div v-else>
      <p>Projet non trouvé.</p>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import sukaijoCover from '../assets/sukaijo_1.webp'
import sparckyCover from '../assets/sparcky_1.webp'

const route = useRoute()
const id = route.params.id
</script>
