<template>
  <div class="space-y-6 pt-2 pb-12 print:p-0 print:m-0 print:space-y-0">
    <!-- BARRE D'ACTIONS SUPÉRIEURE (Masquée à l'impression) -->
    <div class="no-print flex flex-wrap items-center justify-between gap-4 p-4 rounded-2xl bg-white/90 dark:bg-[#111827]/85 backdrop-blur-md border border-slate-200/90 dark:border-white/[0.08] shadow-sm">
      <div class="flex items-center gap-3">
        <RouterLink to="/" class="btn-secondary text-xs py-2 px-3">
          <i class="fa-solid fa-arrow-left text-[11px]"></i>
          <span>{{ t('lettre_page.back_btn') }}</span>
        </RouterLink>
        <RouterLink to="/cv" class="btn-secondary text-xs py-2 px-3">
          <i class="fa-regular fa-file-lines text-[11px]"></i>
          <span>{{ t('lettre_page.cv_btn') }}</span>
        </RouterLink>
      </div>

      <div class="flex items-center gap-2">
        <button
          type="button"
          @click="printLetter"
          class="btn-primary text-xs py-2 px-4 shadow-sm"
          :title="isEn ? 'Open print dialog to save as 1-page PDF' : 'Ouvrir la boîte d\'impression pour enregistrer en PDF (1 page)'"
        >
          <i class="fa-solid fa-file-pdf text-xs"></i>
          <span>{{ t('lettre_page.download_pdf') }}</span>
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
            {{ t('lettre_page.candidate_title') }}
          </p>
          <p class="text-xs font-semibold text-slate-600">
            {{ t('lettre_page.candidate_school') }}
          </p>

          <div class="pt-1.5 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-600">
            <span class="flex items-center gap-1.5">
              <i class="fa-solid fa-envelope text-blue-600 text-[11px]"></i>
              <a href="mailto:contact@matteoriviere.fr" class="font-semibold text-slate-900 hover:underline">contact@matteoriviere.fr</a>
            </span>
            <span class="flex items-center gap-1.5">
              <i class="fa-solid fa-phone text-blue-600 text-[11px]"></i>
              <span class="font-semibold text-slate-900">07 78 13 16 90</span>
            </span>
            <span class="flex items-center gap-1.5">
              <i class="fa-solid fa-location-dot text-blue-600 text-[11px]"></i>
              <span>{{ t('cv_page.location') }}</span>
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
            :title="isEn ? 'Scan to open interactive portfolio' : 'Scannez ce QR Code pour ouvrir le portfolio interactif'"
          ></div>
          <span class="text-[9px] font-bold text-slate-700 mt-1 uppercase tracking-wider">
            {{ t('lettre_page.online_portfolio') }}
          </span>
          <span class="text-[8px] text-slate-500">
            {{ t('lettre_page.scan_qr') }}
          </span>
        </div>
      </div>

      <!-- DESTINATAIRE & OBJET -->
      <div class="letter-dest-box mb-4 space-y-2">
        <div class="flex flex-col sm:flex-row sm:items-baseline justify-between text-xs text-slate-500">
          <span>{{ t('lettre_page.dest_to') }}</span>
          <span>{{ t('lettre_page.dest_date_prefix') }} {{ formattedDate }}</span>
        </div>

        <div class="letter-object py-1 text-xs">
          <strong class="text-slate-950 font-bold block mb-0.5">
            {{ t('lettre_page.object_title') }}
          </strong>
          <span class="text-slate-700">
            {{ t('lettre_page.object_dates') }}
          </span>
        </div>
      </div>

      <!-- CORPS DE LA LETTRE (3 Blocs structurés) -->
      <div class="letter-content space-y-3 text-justify text-slate-700 text-xs sm:text-[12.5px] leading-relaxed">
        <p>
          {{ t('lettre_page.salutation') }}
        </p>

        <p>
          {{ t('lettre_page.p1') }}
        </p>

        <p>
          {{ t('lettre_page.p2') }}
        </p>

        <p>
          {{ t('lettre_page.p3') }}
        </p>

        <p>
          {{ t('lettre_page.p4') }}
        </p>

        <p>
          {{ t('lettre_page.p5') }}
        </p>

        <p>
          {{ t('lettre_page.closing') }}
        </p>
      </div>

      <!-- SIGNATURE & LIENS -->
      <div class="letter-signature mt-4 pt-3 border-t border-slate-200 flex items-end justify-between">
        <div>
          <span class="text-[11px] text-slate-500 block">{{ isEn ? 'Motivated and available candidate' : 'Candidat motivé et disponible' }}</span>
          <strong class="text-sm font-bold text-slate-900 block">Mattéo Rivière</strong>
          <span class="text-[10px] text-blue-600">{{ isEn ? 'Full portfolio: matteoriviere.fr' : 'Portfolio complet : matteoriviere.fr' }}</span>
        </div>

        <div class="text-right">
          <span class="text-blue-600 font-bold text-xs tracking-wide">
            {{ isEn ? '18-week Internship • 2027' : 'Stage 18 semaines • 2027' }}
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
import { useI18n } from '../composables/useI18n'

const { t, isEn } = useI18n()
const qrCodeSvg = ref('')

const portfolioUrl = computed(() => {
  if (typeof window !== 'undefined') {
    return window.location.origin + (import.meta.env.BASE_URL || '/')
  }
  return 'https://matteoriviere.fr/'
})

const formattedDate = computed(() => {
  const now = new Date()
  return now.toLocaleDateString(isEn.value ? 'en-US' : 'fr-FR', {
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
      margin: 1,
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
