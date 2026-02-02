<template>
  <section class="portfolio-page">
    <div class="section-block">
      <h1 class="section-title">Scolarité</h1>
      <p class="section-subtitle">Parcours académique et compétences acquises.</p>
    </div>

    <div class="portfolio-grid">
      <div class="card">
        <div class="card-title-row">
          <span class="card-title-icon"><i class="fa-solid fa-school"></i></span>
          <h2>Parcours</h2>
        </div>
        <div class="media-frame">
          <img :src="plata" alt="Mon lycée" style="max-width:300px" />
        </div>
        <p class="text-block">J'ai obtenu mon baccalauréat en 2024 à Tarare. J'étudie en BUT informatique à Aubière (2e année).</p>
        <p class="text-block">
          Le cursus me permet d’aborder le développement logiciel, les bases de données, les réseaux
          et la gestion de projet, avec un focus croissant sur le web.
        </p>
        <div class="illustration-row">
          <div class="illustration-item"><i class="fa-solid fa-graduation-cap"></i>Bac 2024</div>
          <div class="illustration-item"><i class="fa-solid fa-code"></i>BUT Info</div>
          <div class="illustration-item"><i class="fa-solid fa-laptop"></i>Web</div>
        </div>
      </div>

      <div class="card">
        <div class="card-title-row">
          <span class="card-title-icon"><i class="fa-solid fa-screwdriver-wrench"></i></span>
          <h2>Compétences acquises</h2>
        </div>
        <div class="clean-list">
          <div class="item"><i class="fa-solid fa-code"></i>Programmation : algorithmique, logique applicative</div>
          <div class="item"><i class="fa-solid fa-database"></i>Données : modélisation et requêtes SQL</div>
          <div class="item"><i class="fa-solid fa-network-wired"></i>Réseaux : bases et compréhension des flux</div>
          <div class="item"><i class="fa-solid fa-diagram-project"></i>Gestion de projet : travail en équipe</div>
        </div>
        <div class="illustration-row">
          <div class="illustration-item"><i class="fa-solid fa-briefcase"></i>Stage web</div>
          <div class="illustration-item"><i class="fa-solid fa-people-group"></i>Alternance</div>
        </div>
        <ul>
          <li>Formation : BUT Informatique - IUT Clermont Auvergne.</li>
          <li>Spécialisation progressive : développement web et applications.</li>
          <li>Projet pro : stage web + alternance l’an prochain.</li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup>
import plata from '../assets/plata.jpg'
</script>
