<template>
  <div class="space-y-6 pt-2 pb-12">
    <!-- BARRE D'ACTIONS SUPÉRIEURE (Masquée à l'impression) -->
    <div class="no-print flex flex-wrap items-center justify-between gap-4 p-4 rounded-2xl bg-white/90 dark:bg-[#111827]/85 backdrop-blur-md border border-slate-200/90 dark:border-white/[0.08] shadow-sm">
      <div class="flex items-center gap-3">
        <RouterLink to="/" class="btn-secondary text-xs py-2 px-3">
          <i class="fa-solid fa-arrow-left text-[11px]"></i>
          <span>Portfolio</span>
        </RouterLink>
        <RouterLink to="/cv" class="btn-secondary text-xs py-2 px-3">
          <i class="fa-regular fa-file-lines text-[11px]"></i>
          <span>Mon CV</span>
        </RouterLink>
      </div>

      <div class="flex items-center gap-2">
        <button
          type="button"
          @click="printLetter"
          class="btn-primary text-xs py-2 px-4 shadow-sm"
          title="Ouvrir la boîte d'impression pour enregistrer en PDF"
        >
          <i class="fa-solid fa-file-pdf text-xs"></i>
          <span>Télécharger en PDF</span>
        </button>

        <a
          :href="directPdfUrl"
          download="Lettre-Motivation-Matteo-Riviere.pdf"
          class="btn-secondary text-xs py-2 px-3 hidden sm:inline-flex"
          title="Télécharger le fichier PDF directement"
        >
          <i class="fa-solid fa-download text-[11px]"></i>
          <span>Fichier PDF direct</span>
        </a>
      </div>
    </div>

    <!-- DOCUMENT FEUILLE A4 (Lettre de motivation 1 page) -->
    <div class="letter-sheet max-w-4xl mx-auto bg-white text-slate-900 rounded-2xl shadow-xl dark:shadow-2xl border border-slate-200/90 p-8 sm:p-12 print:p-0 print:border-none print:shadow-none print:rounded-none text-slate-800 text-[13px] leading-relaxed">
      <!-- EN-TÊTE CANDIDAT & QR CODE -->
      <div class="border-b-2 border-slate-900 pb-5 mb-5 flex flex-col sm:flex-row sm:items-start justify-between gap-4">
        <div class="space-y-1">
          <h1 class="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-950 uppercase leading-none">
            Mattéo Rivière
          </h1>
          <p class="text-sm sm:text-base font-bold text-blue-600">
            Développeur Web & Logiciel
          </p>
          <p class="text-xs font-semibold text-slate-600">
            3e année BUT Informatique • IUT Clermont Auvergne (Aubière)
          </p>

          <div class="pt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-600">
            <span class="flex items-center gap-1.5">
              <i class="fa-solid fa-envelope text-blue-600 text-[11px]"></i>
              <a href="mailto:matteo69riviere@gmail.com" class="font-semibold text-slate-900 hover:underline">matteo69riviere@gmail.com</a>
            </span>
            <span class="flex items-center gap-1.5">
              <i class="fa-solid fa-phone text-blue-600 text-[11px]"></i>
              <span class="font-semibold text-slate-900">07 78 13 16 90</span>
            </span>
            <span class="flex items-center gap-1.5">
              <i class="fa-solid fa-location-dot text-blue-600 text-[11px]"></i>
              <span>Aubière / Clermont-Ferrand (63)</span>
            </span>
            <span class="flex items-center gap-1.5">
              <i class="fa-brands fa-linkedin text-blue-600 text-[11px]"></i>
              <a href="https://www.linkedin.com/in/matteo-riviere/" target="_blank" rel="noopener noreferrer" class="hover:underline">in/matteo-riviere</a>
            </span>
          </div>
        </div>

        <!-- QR Code vers le Portfolio en direct -->
        <div class="shrink-0 flex flex-col items-center sm:items-end text-center sm:text-right pt-2 sm:pt-0">
          <div
            v-if="qrCodeSvg"
            v-html="qrCodeSvg"
            class="w-16 h-16 p-1 bg-white border border-slate-300 rounded-lg shadow-xs"
            title="Scannez ce QR Code pour ouvrir le portfolio interactif"
          ></div>
          <span class="text-[9px] font-bold text-slate-600 mt-1 uppercase tracking-wider">
            Portfolio en ligne
          </span>
          <span class="text-[8px] text-slate-400">
            Scannez pour tester mes projets
          </span>
        </div>
      </div>

      <!-- DESTINATAIRE & OBJET -->
      <div class="mb-5 space-y-3">
        <div class="flex flex-col sm:flex-row sm:items-baseline justify-between text-xs text-slate-500">
          <span>À l'attention de l'équipe de recrutement & de la direction technique</span>
          <span>Clermont-Ferrand, le {{ formattedDate }}</span>
        </div>

        <div class="p-3 rounded-xl bg-slate-50 border border-slate-200/80 text-xs">
          <strong class="text-slate-950 font-bold block mb-0.5">
            Objet : Candidature — Stage de fin d'études en développement web (18 semaines)
          </strong>
          <span class="text-slate-700">
            Périodes officielles : <strong>du 15/02/2027 au 07/05/2027</strong> (12 sem.) et <strong>du 28/06/2027 au 15/08/2027</strong> (6 sem.) • Mobilité : Clermont-Ferrand / Aubière / Lyon / Hybride
          </span>
        </div>
      </div>

      <!-- CORPS DE LA LETTRE (3 Blocs structurés : Qui je suis, Ce que j'ai fait, Ce que j'apporte) -->
      <div class="space-y-3.5 text-justify text-slate-700 text-xs sm:text-[13px] leading-relaxed">
        <p>
          Madame, Monsieur,
        </p>

        <p>
          Actuellement en 3e année de BUT Informatique à l'IUT Clermont Auvergne, je recherche un stage de 18 semaines pour intégrer votre équipe et mettre mes compétences en développement web et génie logiciel au service de vos projets.
        </p>

        <p>
          Ma passion pour l'informatique a commencé dès la classe de 3ème avec la découverte de <strong>Linux et de l'éditeur Vim</strong>. Ce qui n'était au départ qu'une curiosité est devenu une véritable exigence : comprendre le fonctionnement des systèmes sous le capot, écrire un code propre et structurer des applications performantes. Aujourd'hui, je maîtrise l'écosystème web moderne avec <strong>Vue.js 3, JavaScript (ES6+), Tailwind CSS, Node.js et PostgreSQL</strong>.
        </p>

        <p>
          Mon parcours académique et mes expériences pratiques m'ont appris à conjuguer autonomie technique et esprit d'équipe :
        </p>

        <!-- Puces compétences & projets clés -->
        <ul class="space-y-1.5 pl-3 list-none">
          <li class="flex items-start gap-2">
            <span class="text-blue-600 font-bold mt-0.5">•</span>
            <span>
              <strong>Gestion de projet agile & Télémétrie temps réel (AéroStat) :</strong> Au sein d'une équipe de 3 développeurs avec un client réel (pilote de montgolfière), je conçois une plateforme d'assistance au vol synchronisant les coordonnées GPS toutes les 2 secondes et intégrant les prévisions météo Météo-France AROME en cache hors-ligne. Nous pilotons le projet selon la méthode MoSCoW avec un découpage strict des jalons sous YouTrack.
            </span>
          </li>
          <li class="flex items-start gap-2">
            <span class="text-blue-600 font-bold mt-0.5">•</span>
            <span>
              <strong>Qualité logicielle & Intégration Continue (Stage chez OSPI Cloud — 8 semaines) :</strong> J'ai développé et déployé une infrastructure complète de tests de bout en bout (E2E) avec <strong>Playwright</strong> et <strong>Allure Reporter</strong>, orchestrée via des pipelines <strong>GitLab CI</strong> pour sécuriser les parcours critiques avant mise en production.
            </span>
          </li>
          <li class="flex items-start gap-2">
            <span class="text-blue-600 font-bold mt-0.5">•</span>
            <span>
              <strong>Pragmatisme & Accélération par l'IA :</strong> J'utilise l'intelligence artificielle comme démultiplicateur technique pour prototyper rapidement et concevoir des jeux de tests exhaustifs, tout en maintenant un cadre strict et la maîtrise totale de l'architecture logicielle.
            </span>
          </li>
        </ul>

        <p>
          Sur le plan personnel, mes <strong>6 années de boxe anglaise</strong> m'ont transmis une discipline rigoureuse, le goût de l'effort et un sang-froid indispensable pour aborder les blocages techniques avec méthode et persévérance. Intégrer votre structure serait pour moi l'opportunité de relever des défis techniques stimulants et de m'investir avec énergie au sein de votre équipe.
        </p>

        <p>
          Je serais ravi d'échanger avec vous lors d'un entretien, en présentiel ou en visio, pour vous exposer plus en détail ma motivation.
        </p>

        <p>
          Je vous prie d'agréer, Madame, Monsieur, l'expression de mes salutations distinguées.
        </p>
      </div>

      <!-- SIGNATURE & LIENS -->
      <div class="mt-5 pt-3 border-t border-slate-200 flex items-end justify-between">
        <div>
          <span class="text-[11px] text-slate-500 block">Candidat motivé et disponible</span>
          <strong class="text-sm font-bold text-slate-900 block">Mattéo Rivière</strong>
          <span class="text-[10px] text-blue-600">Portfolio complet : scorpion-g.github.io/My-Portfolio/</span>
        </div>

        <div class="text-right">
          <div class="inline-block px-3 py-1 rounded-lg bg-blue-50 text-blue-700 text-[11px] font-bold border border-blue-200">
            Stage 18 semaines • 2027
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { RouterLink } from 'vue-router'
import QRCode from 'qrcode'

const qrCodeSvg = ref('')

const directPdfUrl = computed(() => {
  const base = import.meta.env.BASE_URL || '/'
  return `${base.replace(/\/$/, '')}/Lettre-Motivation-Matteo-Riviere.pdf`
})

const portfolioUrl = computed(() => {
  if (typeof window !== 'undefined') {
    return window.location.origin + (import.meta.env.BASE_URL || '/')
  }
  return 'https://scorpion-g.github.io/My-Portfolio/'
})

const formattedDate = computed(() => {
  const now = new Date()
  return now.toLocaleDateString('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  })
})

const printLetter = () => {
  window.print()
}

onMounted(async () => {
  try {
    qrCodeSvg.value = await QRCode.toString(portfolioUrl.value, {
      type: 'svg',
      margin: 0,
      color: {
        dark: '#0f172a',
        light: '#ffffff'
      }
    })
  } catch (err) {
    console.error('Erreur génération QR Code', err)
  }
})
</script>

<style scoped>
@media print {
  .letter-sheet {
    padding: 0 !important;
    margin: 0 !important;
    max-width: 100% !important;
    border: none !important;
    box-shadow: none !important;
  }
}
</style>
