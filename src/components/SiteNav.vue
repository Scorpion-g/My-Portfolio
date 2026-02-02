<template>
  <nav class="site-nav" role="navigation">
    <div class="nav-top container">
      <button
        class="nav-toggle"
        @click="open = !open"
        :aria-expanded="String(open)"
        aria-controls="primary-navigation"
        aria-label="Ouvrir le menu"
      >
        <span class="bar" aria-hidden="true"></span>
      </button>
    </div>

    <div :class="['nav-links', 'container', { 'is-open': open }]" id="primary-navigation">
      <div class="nav-links__group">
        <RouterLink to="/" class="nav-link" @click="closeOnNavigate">Accueil</RouterLink>
        <RouterLink to="/scolarite" class="nav-link" @click="closeOnNavigate">Scolarité</RouterLink>
        <RouterLink to="/activite" class="nav-link" @click="closeOnNavigate">Activités</RouterLink>
        <RouterLink to="/projets" class="nav-link" @click="closeOnNavigate">Projets</RouterLink>
        <RouterLink to="/contact" class="nav-link" @click="closeOnNavigate">Contact</RouterLink>
      </div>

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
    </div>
  </nav>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import { RouterLink } from 'vue-router'

const props = defineProps({
  theme: { type: String, required: true },
  onToggleTheme: { type: Function, required: true }
})

const isLight = computed(() => props.theme === 'light')

const open = ref(false)

const closeOnNavigate = () => { open.value = false }

// Fermer le menu quand la fenêtre devient large
const onResize = () => {
  if (window.innerWidth >= 900) open.value = false
}

onMounted(() => {
  window.addEventListener('resize', onResize)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', onResize)
})
</script>

<style scoped>
/* Styles légers spécifiques au composant pour le comportement responsive */
.site-nav{padding:12px 0;border-bottom:1px solid rgba(255,255,255,0.04);width:100%}
.nav-top{display:flex;align-items:center;justify-content:space-between;gap:12px}
.brand{display:none}

/* Toggle button (visible surmobile) */
.nav-toggle{background:transparent;border:0;width:44px;height:44px;display:flex;align-items:center;justify-content:center;cursor:pointer}
.nav-toggle .bar{display:block;width:22px;height:2px;background:currentColor;position:relative}
.nav-toggle .bar::before,.nav-toggle .bar::after{content:'';position:absolute;left:0;width:22px;height:2px;background:currentColor}
.nav-toggle .bar::before{top:-7px}
.nav-toggle .bar::after{top:7px}

/* Liens cachés par défaut sur mobile */
.nav-links{display:none;flex-direction:column;gap:10px;padding:12px 0}
.nav-links.is-open{display:flex}
.nav-links__group{display:flex;flex-direction:column;gap:10px}
.nav-link{display:block;text-decoration:none;padding:8px 0;color:inherit}

.nav-actions{display:flex;flex-direction:column;gap:8px;margin-top:6px;width:100%;align-items:flex-end}

/* CV button */
.cv-button{display:inline-block;padding:8px 12px;border-radius:8px;text-decoration:none;background:rgba(90,169,255,0.12);border:1px solid var(--border)}
.theme-switch{display:inline-flex;align-items:center;gap:8px}

/* Desktop: affiche la nav en ligne et masque le toggle; container centree */
@media (min-width:900px){
  .nav-toggle{display:none}
  /* On transforme le site-nav en ligne */
  .site-nav{display:block;padding:12px 20px}

  /* Masquer la barre du haut en desktop (plus de nom) */
  .nav-top{display:none}

  /* Liens a gauche (groupe), actions a droite */
  .nav-links{display:flex !important;flex-direction:row;align-items:center;gap:16px;padding:0;justify-content:space-between;width:100%;flex-wrap:nowrap}
  .nav-links__group{display:flex;flex-direction:row;align-items:center;gap:16px;flex-wrap:nowrap}
  .nav-links > .nav-link{flex:0;text-align:left;padding:6px 10px;white-space:nowrap}

  /* Les actions (CV + theme) restent a droite */
  .nav-actions{margin-left:auto;flex:0 0 auto;flex-direction:row;margin:0;gap:12px}

  /* Lien styling pour desktop */
  .nav-link{padding:6px 10px}
}
</style>
