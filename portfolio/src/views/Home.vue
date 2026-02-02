<template>
  <section class="portfolio-page">
    <div class="home-hero section-block">
      <p class="home-kicker">Portfolio - Développement web</p>
      <h1 class="home-title">Bonjour, moi c'est Mattéo Rivière</h1>
      <p class="home-subtitle">
        Étudiant en 2e année de BUT Informatique à Aubière, je me spécialise dans la programmation web
        et je recherche un stage, avec une poursuite en alternance pour l’année prochaine.
      </p>
      <div class="home-actions">
        <a class="project-button" href="/projets">Voir mes projets</a>
        <a class="project-button ghost" href="/contact">Me contacter</a>
      </div>
    </div>

    <div class="section-block">
      <h2 class="section-title">Qui je suis ?</h2>
      <p class="section-subtitle">Étudiant en 2e année de BUT Informatique, orienté développement web.</p>
    </div>

    <div class="portfolio-grid">
      <div class="card">
        <div class="card-title-row">
          <span class="card-title-icon"><i class="fa-solid fa-user"></i></span>
          <h2>Présentation</h2>
        </div>
        <div class="media-frame">
          <img :src="moi" alt="Photo de Moi" style="max-width:200px" />
        </div>
        <p class="text-block">Bonjour, je m’appelle Mattéo Rivière, je suis étudiant en deuxième année de BUT informatique à Aubière.</p>
        <p class="text-block">
          Passionné par le développement web, je travaille régulièrement sur des projets personnels et scolaires
          pour progresser en front-end, back-end et en conception d’interfaces.
        </p>
        <p class="text-block">
          Je recherche un stage dans la programmation web et, si possible, une poursuite en alternance
          pour l’année prochaine.
        </p>
        <div class="illustration-row">
          <div class="illustration-item"><i class="fa-solid fa-location-dot"></i>Aubière</div>
          <div class="illustration-item"><i class="fa-solid fa-graduation-cap"></i>BUT Info</div>
          <div class="illustration-item"><i class="fa-solid fa-laptop-code"></i>Web</div>
        </div>
      </div>

      <div class="card">
        <div class="card-title-row">
          <span class="card-title-icon"><i class="fa-solid fa-layer-group"></i></span>
          <h2>Compétences</h2>
        </div>
        <div class="clean-list">
          <div class="item"><i class="fa-solid fa-code"></i>Front-end : HTML, CSS, JavaScript, Vue</div>
          <div class="item"><i class="fa-solid fa-database"></i>Back-end & data : SQL, logique métier</div>
          <div class="item"><i class="fa-solid fa-pen-nib"></i>UI/UX : design d’interfaces, responsive</div>
          <div class="item"><i class="fa-solid fa-people-group"></i>Soft skills : équipe, curiosité, autonomie</div>
        </div>
        <div class="illustration-row">
          <div class="illustration-item"><i class="fa-solid fa-code-branch"></i>Projets réguliers</div>
          <div class="illustration-item"><i class="fa-solid fa-diagram-project"></i>Gestion de projet</div>
        </div>
        <p class="caption">En cours d’approfondissement : API, architecture web et bonnes pratiques.</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import moi from '../assets/Moi.jpeg'
</script>
