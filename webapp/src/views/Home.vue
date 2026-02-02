<template>
  <div>
    <h1>Qui je suis ?</h1>
    <img :src="moi" alt="Photo de Moi" style="max-width:200px" />
    <p>Bonjour, je m’appelle Mattéo Rivière, je suis étudiant en première année de BUT informatique à Aubière.</p>
  </div>
</template>

<script setup>
import moi from '../assets/Moi.jpeg'
</script>
