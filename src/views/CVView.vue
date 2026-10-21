<template>
  <div class="space-y-6 print:space-y-0 print:p-0 print:m-0">
    <!-- Barre d'outils (Masquée à l'impression) -->
    <div class="no-print flex flex-wrap items-center justify-between gap-4 p-4 rounded-2xl bg-white/80 dark:bg-[#111827]/80 backdrop-blur-md border border-slate-200/80 dark:border-white/[0.08] shadow-sm">
      <div class="flex items-center gap-3">
        <RouterLink to="/" class="btn-secondary text-xs py-2 px-3.5">
          <i class="fa-solid fa-arrow-left text-[10px]"></i>
          <span>Retour au site</span>
        </RouterLink>
        <span class="text-xs text-slate-500 dark:text-slate-400 hidden sm:inline">
          Format A4 standardisé • Prêt pour candidature & ATS
        </span>
      </div>

      <div class="flex items-center gap-2">
        <button
          type="button"
          @click="printCV"
          class="btn-primary text-xs py-2 px-4 shadow-sm"
          title="Ouvrir la boîte d'impression du navigateur pour enregistrer en PDF"
        >
          <i class="fa-solid fa-file-pdf text-xs"></i>
          <span>Télécharger en PDF</span>
        </button>
        <RouterLink
          to="/lettre"
          class="btn-secondary text-xs py-2 px-3"
          title="Consulter ma lettre de motivation & synthèse"
        >
          <i class="fa-regular fa-envelope-open text-xs"></i>
          <span>Lettre de motivation</span>
        </RouterLink>
      </div>
    </div>

    <!-- DOCUMENT DU CV (Feuille A4 stylisée pour écran et impression) -->
    <div class="cv-sheet max-w-4xl mx-auto bg-white text-slate-900 rounded-2xl shadow-xl dark:shadow-2xl border border-slate-200/90 p-8 sm:p-12 print:p-0 print:border-none print:shadow-none print:rounded-none">
      <!-- EN-TÊTE DU CV (Avec nom visible et QR code pour les recruteurs) -->
      <div class="cv-header border-b-2 border-slate-900 pb-5 mb-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <!-- Nom, Titre & Coordonnées -->
        <div class="space-y-1">
          <h1 class="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-950 uppercase leading-none">
            Mattéo Rivière
          </h1>
          <p class="text-base sm:text-lg font-bold text-blue-600">
            Développeur Web & Logiciel
          </p>
          <p class="text-xs sm:text-sm font-semibold text-slate-600">
            Étudiant en 3e année de BUT Informatique • Recherche de stage web (18 semaines : du 15/02/27 au 07/05/27 & du 28/06/27 au 15/08/27)
          </p>

          <!-- Coordonnées en ligne -->
          <div class="pt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-600">
            <div class="flex items-center gap-1.5">
              <i class="fa-solid fa-location-dot text-blue-600 text-[11px]"></i>
              <span>Aubière / Clermont-Ferrand (63)</span>
            </div>
            <div class="flex items-center gap-1.5">
              <i class="fa-solid fa-envelope text-blue-600 text-[11px]"></i>
              <a href="mailto:contact@matteoriviere.fr" class="font-semibold text-slate-900 hover:underline">contact@matteoriviere.fr</a>
            </div>
            <div class="flex items-center gap-1.5">
              <i class="fa-solid fa-phone text-blue-600 text-[11px]"></i>
              <span class="font-semibold text-slate-900">07 78 13 16 90</span>
            </div>
            <div class="flex items-center gap-1.5">
              <i class="fa-brands fa-linkedin text-blue-600 text-[11px]"></i>
              <a href="https://www.linkedin.com/in/matteo-rivière-8664b8356" target="_blank" rel="noopener noreferrer" class="hover:underline">in/matteo-rivière-8664b8356</a>
            </div>
            <div class="flex items-center gap-1.5">
              <i class="fa-brands fa-github text-blue-600 text-[11px]"></i>
              <a href="https://github.com/Scorpion-g" target="_blank" rel="noopener noreferrer" class="hover:underline">github.com/Scorpion-g</a>
            </div>
            <div class="flex items-center gap-1.5">
              <i class="fa-solid fa-globe text-blue-600 text-[11px]"></i>
              <a href="https://matteoriviere.fr" target="_blank" rel="noopener noreferrer" class="font-semibold text-slate-900 hover:underline">matteoriviere.fr</a>
            </div>
          </div>
        </div>

        <!-- QR CODE VECTORIEL DU PORTFOLIO (Pour les RH) -->
        <div class="shrink-0 flex flex-col items-center sm:items-end text-center sm:text-right pt-2 sm:pt-0">
          <div
            v-if="qrCodeSvg"
            v-html="qrCodeSvg"
            class="qr-code-box w-20 h-20 bg-white border-0 rounded-none shadow-none"
            title="Scannez ce QR Code pour ouvrir le portfolio en ligne"
          ></div>
          <span class="text-[10px] font-bold text-slate-600 mt-1 uppercase tracking-wider">
            Portfolio en ligne
          </span>
          <span class="text-[9px] text-slate-400">
            Scannez pour voir mes projets
          </span>
        </div>
      </div>

      <!-- À PROPOS / PROFIL -->
      <section class="mb-5">
        <h2 class="text-xs font-bold uppercase tracking-widest text-slate-500 mb-1.5 border-b border-slate-200 pb-1">
          À propos
        </h2>
        <p class="text-xs sm:text-sm text-slate-700 leading-relaxed text-justify">
          Passionné d'informatique depuis la découverte de Linux et Vim au collège, j'étudie en 3e année de BUT Informatique à l'IUT Clermont Auvergne avec une spécialisation en <strong>développement web</strong>. Autonome, curieux et doté d'une forte capacité d'adaptation, j'ai déjà validé mes compétences en entreprise sur l'automatisation de tests sous Playwright et GitLab CI. Je recherche un <strong>stage de 18 semaines</strong> (du <strong>15/02/2027 au 07/05/2027</strong> et du <strong>28/06/2027 au 15/08/2027</strong>) pour intégrer une équipe technique et concevoir des applications web propres, fiables et utiles.
        </p>
      </section>

      <!-- EXPÉRIENCE PROFESSIONNELLE -->
      <section class="mb-5">
        <h2 class="text-xs font-bold uppercase tracking-widest text-slate-500 mb-2.5 border-b border-slate-200 pb-1">
          Expérience Professionnelle
        </h2>

        <div>
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
            <div>
              <h3 class="text-sm font-bold text-slate-950">
                Développeur Tests E2E Automatisés — <span class="text-blue-600 font-semibold">OSPI Cloud</span>
              </h3>
              <p class="text-xs text-slate-500">Lyon (Stage de 2e année de BUT — 8 semaines)</p>
            </div>
            <span class="text-xs font-semibold text-slate-600 self-start sm:self-center">
              Juin 2025 — Août 2025
            </span>
          </div>

          <ul class="list-disc list-outside ml-4 text-xs text-slate-700 space-y-1 mt-1.5">
            <li>
              <strong>Automatisation des tests E2E :</strong> Conception et écriture de scripts sous <strong>Playwright</strong> pour valider automatiquement les parcours utilisateurs critiques sur les plateformes web.
            </li>
            <li>
              <strong>Intégration Continue (CI/CD) :</strong> Intégration de la suite de tests au pipeline <strong>GitLab CI</strong> avec déclenchement automatique à chaque commit/push.
            </li>
            <li>
              <strong>Reporting Qualité :</strong> Mise en place de rapports visuels interactifs via <strong>Allure Reporter</strong> facilitant le suivi et la résolution des bugs par l'équipe.
            </li>
            <li>
              <strong>Bénéfice :</strong> Réduction significative des temps de validation manuelle et fiabilisation des livraisons en production.
            </li>
          </ul>
          <p class="text-[11px] text-slate-500 mt-1 italic">
            Environnement : Playwright, GitLab CI, Allure, JavaScript, Git.
          </p>
        </div>
      </section>

      <!-- PROJETS TECHNIQUES SIGNIFICATIFS -->
      <section class="mb-5">
        <h2 class="text-xs font-bold uppercase tracking-widest text-slate-500 mb-2.5 border-b border-slate-200 pb-1">
          Projets Techniques Clés
        </h2>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-xs text-slate-700">
          <div class="py-1">
            <div class="flex items-center justify-between mb-1">
              <h3 class="font-bold text-slate-950">AéroStat — Guidage GPS temps réel & Météo</h3>
              <span class="text-[10px] text-slate-500 font-medium">3e année (Équipe de 3)</span>
            </div>
            <p class="text-slate-600 leading-relaxed mb-1.5">
              Plateforme pour pilotes de montgolfière : tracking GPS temps réel (2s), météo AROME hors-ligne et gestion agile sous <strong>YouTrack</strong>.
            </p>
            <p class="text-[10px] text-slate-500">
              Stack : PostgreSQL, Kubernetes, GitLab CI, YouTrack, Leaflet.
            </p>
          </div>

          <div class="py-1">
            <div class="flex items-center justify-between mb-1">
              <h3 class="font-bold text-slate-950">Sukaijo — Application Logicielle IHM</h3>
              <span class="text-[10px] text-slate-500 font-medium">Équipe de 3 (3 mois)</span>
            </div>
            <p class="text-slate-600 leading-relaxed mb-1.5">
              Adaptation du jeu Skyjo en application logicielle avec interface XAML moderne et moteur de règles en <strong>C# / .NET MAUI</strong>.
            </p>
            <p class="text-[10px] text-slate-500">
              Stack : C#, .NET MAUI, XAML, Architecture MVC, Git.
            </p>
          </div>
        </div>
      </section>

      <!-- FORMATION ACADÉMIQUE -->
      <section class="mb-5">
        <h2 class="text-xs font-bold uppercase tracking-widest text-slate-500 mb-2 border-b border-slate-200 pb-1">
          Formation Académique
        </h2>

        <div class="space-y-2.5 text-xs">
          <div class="flex items-start justify-between gap-2">
            <div>
              <h3 class="font-bold text-slate-950">
                BUT Informatique (Bachelor Universitaire de Technologie) — 3e année
              </h3>
              <p class="text-slate-600">IUT Clermont Auvergne — Campus d'Aubière (63)</p>
              <p class="text-slate-500 text-[11px] mt-0.5">
                Spécialisation développement web, conception logicielle, bases de données, réseaux & méthodes agiles.
              </p>
            </div>
            <span class="font-semibold text-slate-600 shrink-0">2024 — 2027</span>
          </div>

          <div class="flex items-start justify-between gap-2 pt-1 border-t border-slate-100">
            <div>
              <h3 class="font-bold text-slate-950">
                Baccalauréat Général (Scientifique) — Mention Assez Bien
              </h3>
              <p class="text-slate-600">Lycée René Cassin — Tarare (69)</p>
            </div>
            <span class="font-semibold text-slate-600 shrink-0">2024</span>
          </div>
        </div>
      </section>

      <!-- COMPÉTENCES & QUALITÉS (2 COLONNES) -->
      <section class="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <h2 class="text-xs font-bold uppercase tracking-widest text-slate-500 mb-1.5 border-b border-slate-200 pb-1">
            Compétences Techniques & Méthodes
          </h2>
          <div class="space-y-1 text-xs text-slate-700">
            <div>
              <strong class="text-slate-950">Front-end :</strong>
              <span class="text-slate-600"> Vue.js 3, Angular, JavaScript (ES6+), HTML5, CSS3, Tailwind CSS</span>
            </div>
            <div>
              <strong class="text-slate-950">Back-end & Données :</strong>
              <span class="text-slate-600"> Symfony, PHP 8, Node.js, API REST, SQL (PostgreSQL), C#</span>
            </div>
            <div>
              <strong class="text-slate-950">DevOps & Déploiement :</strong>
              <span class="text-slate-600"> Docker, Git, GitLab CI, Kubernetes, Playwright, Allure, Linux & Vim</span>
            </div>
            <div>
              <strong class="text-slate-950">Gestion & IA :</strong>
              <span class="text-slate-600"> Méthode MoSCoW, YouTrack, Automatisation IA (outils & scripts)</span>
            </div>
          </div>
        </div>

        <div>
          <h2 class="text-xs font-bold uppercase tracking-widest text-slate-500 mb-1.5 border-b border-slate-200 pb-1">
            Soft Skills & Centres d'Intérêt
          </h2>
          <div class="space-y-1 text-xs text-slate-700">
            <div>
              <strong class="text-slate-950">Sport :</strong>
              <span class="text-slate-600"> Boxe anglaise (6 ans) — Rigueur, sang-froid et persévérance.</span>
            </div>
            <div>
              <strong class="text-slate-950">Musique :</strong>
              <span class="text-slate-600"> Pop feel-good & Classiques français (Jean-Jacques Goldman).</span>
            </div>
            <div>
              <strong class="text-slate-950">Atouts :</strong>
              <span class="text-slate-600"> Anticipation, sens du collectif, curiosité technique et adaptabilité.</span>
            </div>
            <div>
              <strong class="text-slate-950">Langues :</strong>
              <span class="text-slate-600"> Français (maternelle), Anglais technique (lu, écrit).</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { RouterLink } from 'vue-router'
import QRCode from 'qrcode'

const qrCodeSvg = ref('')


// URL absolue du portfolio pour le QR Code
const portfolioUrl = computed(() => {
  if (typeof window !== 'undefined') {
    return window.location.origin + (import.meta.env.BASE_URL || '/')
  }
  return 'https://matteoriviere.fr/'
})

onMounted(async () => {
  try {
    qrCodeSvg.value = await QRCode.toString(portfolioUrl.value, {
      type: 'svg',
      margin: 1,
      color: {
        dark: '#0f172a',
        light: '#ffffff'
      }
    })
  } catch (err) {
    console.error('Erreur lors de la génération du QR code', err)
  }
})

const printCV = () => {
  window.print()
}
</script>

<style scoped>
:deep(.qr-code-box svg) {
  width: 100%;
  height: 100%;
  display: block;
  shape-rendering: crispEdges;
  image-rendering: pixelated;
}

@media print {
  @page {
    size: A4 portrait;
    margin: 8mm 10mm 6mm 10mm;
  }
  .cv-sheet {
    box-shadow: none !important;
    border: none !important;
    padding: 0 !important;
    margin: 0 !important;
    max-width: 100% !important;
    font-size: 11px !important;
    line-height: 1.3 !important;
  }
  .cv-header {
    padding-bottom: 8px !important;
    margin-bottom: 8px !important;
  }
  section {
    margin-bottom: 8px !important;
  }
}
</style>
