<template>
  <div class="space-y-6 pt-2 pb-12 print:p-0 print:m-0 print:space-y-0">
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
          title="Ouvrir la boîte d'impression pour enregistrer en PDF (1 page)"
        >
          <i class="fa-solid fa-file-pdf text-xs"></i>
          <span>Télécharger en PDF</span>
        </button>
      </div>
    </div>

    <!-- DOCUMENT FEUILLE A4 (Lettre de motivation 1 page stricte) -->
    <div class="letter-sheet max-w-4xl mx-auto bg-white text-slate-900 rounded-2xl shadow-xl dark:shadow-2xl border border-slate-200/90 p-8 sm:p-12 print:p-0 print:border-none print:shadow-none print:rounded-none text-slate-800 text-[12.5px] leading-relaxed">
      <!-- EN-TÊTE CANDIDAT & QR CODE -->
      <div class="letter-header border-b-2 border-slate-900 pb-4 mb-4 flex flex-col sm:flex-row sm:items-start justify-between gap-4">
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

          <div class="pt-1.5 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-600">
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
              <a href="https://www.linkedin.com/in/matteo-rivière-8664b8356" target="_blank" rel="noopener noreferrer" class="hover:underline">in/matteo-rivière-8664b8356</a>
            </span>
          </div>
        </div>

        <!-- QR Code vectoriel avec anti-aliasing désactivé -->
        <div class="shrink-0 flex flex-col items-center sm:items-end text-center sm:text-right pt-1 sm:pt-0">
          <div
            v-if="qrCodeSvg"
            v-html="qrCodeSvg"
            class="qr-code-box w-16 h-16 bg-white border-0 rounded-none shadow-none"
            title="Scannez ce QR Code pour ouvrir le portfolio interactif"
          ></div>
          <span class="text-[9px] font-bold text-slate-700 mt-1 uppercase tracking-wider">
            Portfolio en ligne
          </span>
          <span class="text-[8px] text-slate-500">
            Scannez pour voir mes projets
          </span>
        </div>
      </div>

      <!-- DESTINATAIRE & OBJET -->
      <div class="letter-dest-box mb-4 space-y-2">
        <div class="flex flex-col sm:flex-row sm:items-baseline justify-between text-xs text-slate-500">
          <span>À l'attention de l'équipe de recrutement & de la direction technique</span>
          <span>Clermont-Ferrand, le {{ formattedDate }}</span>
        </div>

        <div class="letter-object py-1 text-xs">
          <strong class="text-slate-950 font-bold block mb-0.5">
            Objet : Candidature — Stage de fin d'études en développement web (18 semaines)
          </strong>
          <span class="text-slate-700">
            Périodes officielles : <strong>du 15/02/2027 au 07/05/2027</strong> (12 sem.) et <strong>du 28/06/2027 au 15/08/2027</strong> (6 sem.) • Mobilité : Clermont-Ferrand / Aubière / Lyon / Hybride
          </span>
        </div>
      </div>

      <!-- CORPS DE LA LETTRE (3 Blocs structurés) -->
      <div class="letter-content space-y-3 text-justify text-slate-700 text-xs sm:text-[12.5px] leading-relaxed">
        <p>
          Madame, Monsieur,
        </p>

        <p>
          Actuellement en 3e année de BUT Informatique à l'IUT Clermont Auvergne, je recherche un stage de fin d'études de 18 semaines pour intégrer votre équipe et mettre mes compétences en développement web et génie logiciel au service de vos projets.
        </p>

        <p>
          Ma passion pour l'informatique a commencé dès la classe de 3ème avec la découverte de <strong>Linux et de l'éditeur Vim</strong>. Ce qui n'était au départ qu'une curiosité est devenu une véritable exigence : comprendre le fonctionnement des systèmes sous le capot, écrire un code propre et structurer des applications performantes. Aujourd'hui, je maîtrise l'écosystème web moderne avec <strong>Vue.js 3, Angular, Symfony (PHP), Node.js, Tailwind CSS et PostgreSQL</strong>.
        </p>

        <p>
          Mon parcours académique et mes expériences pratiques m'ont appris à conjuguer autonomie technique et esprit d'équipe :
        </p>

        <!-- Puces compétences & projets clés -->
        <ul class="space-y-1 pl-3 list-none">
          <li class="flex items-start gap-2">
            <span class="text-blue-600 font-bold mt-0.5">•</span>
            <span>
              <strong>Gestion de projet agile & Télémétrie temps réel (AéroStat) :</strong> Au sein d'une équipe de 3 développeurs pour un client réel (pilote de montgolfière), je participe à la conception d'une plateforme d'assistance au vol synchronisant les coordonnées GPS toutes les 2 secondes et intégrant les prévisions météo Météo-France AROME en cache hors-ligne. Nous pilotons le projet selon la méthode MoSCoW avec un découpage strict des jalons sous YouTrack.
            </span>
          </li>
          <li class="flex items-start gap-2">
            <span class="text-blue-600 font-bold mt-0.5">•</span>
            <span>
              <strong>Qualité logicielle & Intégration Continue (Stage chez OSPI Cloud — 8 semaines) :</strong> J'ai développé et déployé une infrastructure complète de tests de bout en bout (E2E) avec <strong>Playwright</strong> et <strong>Allure Reporter</strong>, automatisée dans des pipelines <strong>GitLab CI</strong> pour sécuriser les parcours critiques avant mise en production.
            </span>
          </li>
          <li class="flex items-start gap-2">
            <span class="text-blue-600 font-bold mt-0.5">•</span>
            <span>
              <strong>Pragmatisme & Accélération par l'IA :</strong> J'utilise l'intelligence artificielle comme démultiplicateur technique pour prototyper rapidement, concevoir des tests exhaustifs et vérifier les cas limites, tout en maintenant un cadre strict et la maîtrise totale de l'architecture logicielle.
            </span>
          </li>
        </ul>

        <p>
          Sur le plan personnel, mes <strong>6 années de boxe anglaise</strong> m'ont transmis une discipline rigoureuse, l'humilité face aux difficultés et un sang-froid indispensable pour aborder les blocages techniques avec méthode et persévérance. Intégrer votre structure serait pour moi l'opportunité de relever des défis techniques stimulants et de m'investir avec énergie au sein de votre équipe.
        </p>

        <p>
          Disponible pour débuter dès le <strong>15 février 2027</strong>, je serais ravi d'échanger avec vous lors d'un entretien pour vous exposer ma motivation et étudier comment je pourrai contribuer à vos projets.
        </p>

        <p>
          Je vous prie d'agréer, Madame, Monsieur, l'expression de mes salutations distinguées.
        </p>
      </div>

      <!-- SIGNATURE & LIENS -->
      <div class="letter-signature mt-4 pt-3 border-t border-slate-200 flex items-end justify-between">
        <div>
          <span class="text-[11px] text-slate-500 block">Candidat motivé et disponible</span>
          <strong class="text-sm font-bold text-slate-900 block">Mattéo Rivière</strong>
          <span class="text-[10px] text-blue-600">Portfolio complet : matteoriviere.fr</span>
        </div>

        <div class="text-right">
          <span class="text-blue-600 font-bold text-xs tracking-wide">
            Stage 18 semaines • 2027
          </span>
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

const portfolioUrl = computed(() => {
  if (typeof window !== 'undefined') {
    return window.location.origin + (import.meta.env.BASE_URL || '/')
  }
  return 'https://matteoriviere.fr/'
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
      margin: 1, // Marge nette d'un module blanc pour détacher le QR code proprement
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
    margin: 8mm 12mm 6mm 12mm;
  }
  .letter-sheet {
    padding: 0 !important;
    margin: 0 !important;
    max-width: 100% !important;
    border: none !important;
    box-shadow: none !important;
    font-size: 11px !important;
    line-height: 1.32 !important;
  }
  .letter-header {
    padding-bottom: 6px !important;
    margin-bottom: 6px !important;
  }
  .letter-sheet h1 {
    font-size: 20px !important;
    line-height: 1 !important;
  }
  .letter-dest-box {
    margin-bottom: 6px !important;
  }
  .letter-object {
    padding: 2px 0 !important;
    background: transparent !important;
    border: none !important;
  }
  .letter-content {
    gap: 4px !important;
  }
  .letter-content p {
    margin-bottom: 5px !important;
  }
  .letter-content ul {
    margin-top: 3px !important;
    margin-bottom: 5px !important;
    padding-left: 14px !important;
  }
  .letter-content li {
    margin-bottom: 3px !important;
    line-height: 1.25 !important;
  }
  .letter-signature {
    margin-top: 6px !important;
    padding-top: 5px !important;
  }
}
</style>
