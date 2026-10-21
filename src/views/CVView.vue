<template>
  <div class="space-y-6 print:space-y-0 print:p-0 print:m-0">
    <!-- Barre d'outils (Masquée à l'impression) -->
    <div class="no-print flex flex-wrap items-center justify-between gap-4 p-4 rounded-2xl bg-white/80 dark:bg-[#111827]/80 backdrop-blur-md border border-slate-200/80 dark:border-white/[0.08] shadow-sm">
      <div class="flex items-center gap-3">
        <RouterLink to="/" class="btn-secondary text-xs py-2 px-3.5">
          <i class="fa-solid fa-arrow-left text-[10px]"></i>
          <span>{{ t('cv_page.back_btn') }}</span>
        </RouterLink>
        <span class="text-xs text-slate-500 dark:text-slate-400 hidden sm:inline">
          {{ t('cv_page.format_notice') }}
        </span>
      </div>

      <div class="flex items-center gap-2">
        <button
          type="button"
          @click="printCV"
          class="btn-primary text-xs py-2 px-4 shadow-sm"
          :title="isEn ? 'Open browser print dialog to save as PDF' : 'Ouvrir la boîte d\'impression du navigateur pour enregistrer en PDF'"
        >
          <i class="fa-solid fa-file-pdf text-xs"></i>
          <span>{{ t('cv_page.download_pdf') }}</span>
        </button>
        <RouterLink
          to="/lettre"
          class="btn-secondary text-xs py-2 px-3"
          :title="isEn ? 'Read cover letter' : 'Consulter ma lettre de motivation & synthèse'"
        >
          <i class="fa-regular fa-envelope-open text-xs"></i>
          <span>{{ t('cv_page.cover_letter_btn') }}</span>
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
            {{ t('cv_page.sub_headline') }}
          </p>
          <p class="text-xs sm:text-sm font-semibold text-slate-600">
            {{ t('cv_page.status_line') }}
          </p>

          <!-- Coordonnées en ligne -->
          <div class="pt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-600">
            <div class="flex items-center gap-1.5">
              <i class="fa-solid fa-location-dot text-blue-600 text-[11px]"></i>
              <span>{{ t('cv_page.location') }}</span>
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
            :title="isEn ? 'Scan this QR Code to open the online portfolio' : 'Scannez ce QR Code pour ouvrir le portfolio en ligne'"
          ></div>
          <span class="text-[10px] font-bold text-slate-600 mt-1 uppercase tracking-wider">
            {{ t('cv_page.online_portfolio') }}
          </span>
          <span class="text-[9px] text-slate-400">
            {{ t('cv_page.scan_qr') }}
          </span>
        </div>
      </div>

      <!-- À PROPOS / PROFIL -->
      <section class="mb-5">
        <h2 class="text-xs font-bold uppercase tracking-widest text-slate-500 mb-1.5 border-b border-slate-200 pb-1">
          {{ t('cv_page.sec_about') }}
        </h2>
        <p class="text-xs sm:text-sm text-slate-700 leading-relaxed text-justify">
          {{ t('cv_page.about_text') }}
        </p>
      </section>

      <!-- EXPÉRIENCE PROFESSIONNELLE -->
      <section class="mb-5">
        <h2 class="text-xs font-bold uppercase tracking-widest text-slate-500 mb-2.5 border-b border-slate-200 pb-1">
          {{ t('cv_page.sec_exp') }}
        </h2>

        <div>
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
            <div>
              <h3 class="text-sm font-bold text-slate-950">
                {{ t('cv_page.exp_role') }} — <span class="text-blue-600 font-semibold">{{ t('cv_page.exp_company') }}</span>
              </h3>
              <p class="text-xs text-slate-500">{{ t('cv_page.exp_place') }}</p>
            </div>
            <span class="text-xs font-semibold text-slate-600 self-start sm:self-center">
              {{ t('cv_page.exp_dates') }}
            </span>
          </div>

          <ul class="list-disc list-outside ml-4 text-xs text-slate-700 space-y-1 mt-1.5">
            <li>
              <strong>{{ t('cv_page.exp_b1_title') }}</strong> {{ t('cv_page.exp_b1_desc') }}
            </li>
            <li>
              <strong>{{ t('cv_page.exp_b2_title') }}</strong> {{ t('cv_page.exp_b2_desc') }}
            </li>
            <li>
              <strong>{{ t('cv_page.exp_b3_title') }}</strong> {{ t('cv_page.exp_b3_desc') }}
            </li>
            <li>
              <strong>{{ t('cv_page.exp_b4_title') }}</strong> {{ t('cv_page.exp_b4_desc') }}
            </li>
          </ul>
          <p class="text-[11px] text-slate-500 mt-1 italic">
            {{ t('cv_page.exp_env') }}
          </p>
        </div>
      </section>

      <!-- PROJETS TECHNIQUES SIGNIFICATIFS -->
      <section class="mb-5">
        <h2 class="text-xs font-bold uppercase tracking-widest text-slate-500 mb-2.5 border-b border-slate-200 pb-1">
          {{ t('cv_page.sec_proj') }}
        </h2>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-xs text-slate-700">
          <div class="py-1">
            <div class="flex items-center justify-between mb-1">
              <h3 class="font-bold text-slate-950">{{ t('cv_page.p1_title') }}</h3>
              <span class="text-[10px] text-slate-500 font-medium">{{ t('cv_page.p1_team') }}</span>
            </div>
            <p class="text-slate-600 leading-relaxed mb-1.5">
              {{ t('cv_page.p1_desc') }}
            </p>
            <p class="text-[10px] text-slate-500">
              {{ t('cv_page.p1_stack') }}
            </p>
          </div>

          <div class="py-1">
            <div class="flex items-center justify-between mb-1">
              <h3 class="font-bold text-slate-950">{{ t('cv_page.p2_title') }}</h3>
              <span class="text-[10px] text-slate-500 font-medium">{{ t('cv_page.p2_team') }}</span>
            </div>
            <p class="text-slate-600 leading-relaxed mb-1.5">
              {{ t('cv_page.p2_desc') }}
            </p>
            <p class="text-[10px] text-slate-500">
              {{ t('cv_page.p2_stack') }}
            </p>
          </div>
        </div>
      </section>

      <!-- FORMATION ACADÉMIQUE -->
      <section class="mb-5">
        <h2 class="text-xs font-bold uppercase tracking-widest text-slate-500 mb-2 border-b border-slate-200 pb-1">
          {{ t('cv_page.sec_edu') }}
        </h2>

        <div class="space-y-2.5 text-xs">
          <div class="flex items-start justify-between gap-2">
            <div>
              <h3 class="font-bold text-slate-950">
                {{ t('cv_page.edu1_degree') }}
              </h3>
              <p class="text-slate-600">{{ t('cv_page.edu1_school') }}</p>
              <p class="text-slate-500 text-[11px] mt-0.5">
                {{ t('cv_page.edu1_desc') }}
              </p>
            </div>
            <span class="font-semibold text-slate-600 shrink-0">{{ t('cv_page.edu1_dates') }}</span>
          </div>

          <div class="flex items-start justify-between gap-2 pt-1 border-t border-slate-100">
            <div>
              <h3 class="font-bold text-slate-950">
                {{ t('cv_page.edu2_degree') }}
              </h3>
              <p class="text-slate-600">{{ t('cv_page.edu2_school') }}</p>
            </div>
            <span class="font-semibold text-slate-600 shrink-0">{{ t('cv_page.edu2_dates') }}</span>
          </div>
        </div>
      </section>

      <!-- COMPÉTENCES & QUALITÉS (2 COLONNES) -->
      <section class="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <h2 class="text-xs font-bold uppercase tracking-widest text-slate-500 mb-1.5 border-b border-slate-200 pb-1">
            {{ t('cv_page.sec_skills') }}
          </h2>
          <div class="space-y-1 text-xs text-slate-700">
            <div>
              <strong class="text-slate-950">{{ t('cv_page.sk_front_label') }}</strong>
              <span class="text-slate-600"> {{ t('cv_page.sk_front_val') }}</span>
            </div>
            <div>
              <strong class="text-slate-950">{{ t('cv_page.sk_back_label') }}</strong>
              <span class="text-slate-600"> {{ t('cv_page.sk_back_val') }}</span>
            </div>
            <div>
              <strong class="text-slate-950">{{ t('cv_page.sk_ops_label') }}</strong>
              <span class="text-slate-600"> {{ t('cv_page.sk_ops_val') }}</span>
            </div>
            <div>
              <strong class="text-slate-950">{{ t('cv_page.sk_mgmt_label') }}</strong>
              <span class="text-slate-600"> {{ t('cv_page.sk_mgmt_val') }}</span>
            </div>
          </div>
        </div>

        <div>
          <h2 class="text-xs font-bold uppercase tracking-widest text-slate-500 mb-1.5 border-b border-slate-200 pb-1">
            {{ t('cv_page.sec_soft') }}
          </h2>
          <div class="space-y-1 text-xs text-slate-700">
            <div>
              <strong class="text-slate-950">{{ t('cv_page.soft_sport_label') }}</strong>
              <span class="text-slate-600"> {{ t('cv_page.soft_sport_val') }}</span>
            </div>
            <div>
              <strong class="text-slate-950">{{ t('cv_page.soft_music_label') }}</strong>
              <span class="text-slate-600"> {{ t('cv_page.soft_music_val') }}</span>
            </div>
            <div>
              <strong class="text-slate-950">{{ isEn ? 'Key Strengths:' : 'Atouts :' }}</strong>
              <span class="text-slate-600"> {{ isEn ? 'Proactive planning, team spirit, engineering curiosity and rapid adaptability.' : 'Anticipation, sens du collectif, curiosité technique et adaptabilité.' }}</span>
            </div>
            <div>
              <strong class="text-slate-950">{{ t('cv_page.soft_lang_label') }}</strong>
              <span class="text-slate-600"> {{ t('cv_page.soft_lang_val') }}</span>
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
import { useI18n } from '../composables/useI18n'

const { t, isEn } = useI18n()
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
