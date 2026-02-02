<template>
  <section class="portfolio-page">
    <div class="section-block">
      <h1 class="section-title">Activités</h1>
      <p class="section-subtitle">Ce qui me motive en dehors du développement.</p>
    </div>

    <div class="portfolio-grid">
      <div class="card">
        <div class="card-title-row">
          <span class="card-title-icon"><i class="fa-solid fa-hand-fist"></i></span>
          <h2>Boxe</h2>
        </div>
        <div class="media-frame">
          <img :src="boxe" alt="Boxe" style="max-width:300px" />
        </div>
        <p class="text-block">J'adore la boxe. C’est un sport qui demande de la discipline, de l’agilité, de la force et de la concentration.</p>
        <p class="text-block">
          Cette pratique m’aide aussi dans mes projets : rigueur, persévérance et goût du challenge.
        </p>
        <div class="illustration-row">
          <div class="illustration-item"><i class="fa-solid fa-dumbbell"></i>Discipline</div>
          <div class="illustration-item"><i class="fa-solid fa-bolt"></i>Agilité</div>
          <div class="illustration-item"><i class="fa-solid fa-bullseye"></i>Concentration</div>
        </div>
      </div>

      <div class="card">
        <div class="card-title-row">
          <span class="card-title-icon"><i class="fa-solid fa-people-group"></i></span>
          <h2>Soft skills</h2>
        </div>
        <div class="clean-list">
          <div class="item"><i class="fa-solid fa-bullseye"></i>Concentration et précision</div>
          <div class="item"><i class="fa-solid fa-dumbbell"></i>Discipline et régularité</div>
          <div class="item"><i class="fa-solid fa-fire"></i>Motivation et esprit de challenge</div>
          <div class="item"><i class="fa-solid fa-people-group"></i>Respect et esprit d’équipe</div>
        </div>
        <div class="illustration-row">
          <div class="illustration-item"><i class="fa-solid fa-shield"></i>Rigueur</div>
          <div class="illustration-item"><i class="fa-solid fa-heart"></i>Motivation</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import boxe from '../assets/boxe.jpg'
</script>
