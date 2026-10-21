<template>
  <div class="space-y-24 sm:space-y-32">
    <!-- 1. HERO SECTION (Spacieuse, directe et fluide) -->
    <section class="pt-6 sm:pt-14 max-w-5xl">
      <!-- Badge Disponibilité -->
      <div class="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs sm:text-sm font-semibold mb-6 shadow-xs">
        <span class="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
        <span>{{ t('hero.badge') }}</span>
      </div>

      <!-- Titre animé -->
      <h1 class="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1] mb-6">
        <span>{{ t('hero.greeting') }}</span> <br class="hidden sm:inline" />
        <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-500 to-cyan-500 animate-gradient-text">
          Mattéo Rivière
        </span>
      </h1>

      <!-- Présentation directe -->
      <p class="text-lg sm:text-2xl text-slate-700 dark:text-slate-300 font-normal leading-relaxed mb-8 max-w-3xl">
        <span>{{ t('hero.pitch_p1') }} </span>
        <strong>{{ t('hero.pitch_p2') }}</strong>
        <span> {{ t('hero.pitch_p3') }} </span>
        <strong>{{ t('hero.pitch_p4') }}</strong>
      </p>

      <!-- Boutons d'action -->
      <div class="flex flex-wrap items-center gap-4">
        <RouterLink to="/projets" class="btn-primary group text-sm sm:text-base py-3 px-6">
          <span>{{ t('hero.cta_projects') }}</span>
          <i class="fa-solid fa-arrow-right text-xs transition-transform group-hover:translate-x-1.5"></i>
        </RouterLink>

        <RouterLink to="/cv" class="btn-secondary text-sm sm:text-base py-3 px-6">
          <i class="fa-regular fa-file-lines text-sm"></i>
          <span>{{ t('hero.cta_cv') }}</span>
        </RouterLink>

        <RouterLink to="/contact" class="btn-secondary text-sm sm:text-base py-3 px-6">
          <i class="fa-regular fa-envelope text-sm"></i>
          <span>{{ t('hero.cta_contact') }}</span>
        </RouterLink>
      </div>
    </section>

    <!-- 2. BANDEAU DES TECHNOLOGIES (Défilement continu) -->
    <section class="overflow-hidden py-3 -mx-4 sm:-mx-6 lg:-mx-10 border-y border-slate-200/80 dark:border-white/[0.08] bg-white/40 dark:bg-[#111827]/40 backdrop-blur-sm">
      <div class="animate-marquee flex items-center gap-8 text-xs sm:text-sm font-semibold text-slate-600 dark:text-slate-300">
        <span class="flex items-center gap-2"><i class="fa-brands fa-vuejs text-emerald-500 text-base"></i> Vue.js 3</span>
        <span class="text-slate-300 dark:text-slate-700">•</span>
        <span class="flex items-center gap-2"><i class="fa-brands fa-angular text-red-500 text-base"></i> Angular</span>
        <span class="text-slate-300 dark:text-slate-700">•</span>
        <span class="flex items-center gap-2"><i class="fa-brands fa-symfony text-slate-800 dark:text-white text-base"></i> Symfony</span>
        <span class="text-slate-300 dark:text-slate-700">•</span>
        <span class="flex items-center gap-2"><i class="fa-brands fa-php text-indigo-400 text-base"></i> PHP 8</span>
        <span class="text-slate-300 dark:text-slate-700">•</span>
        <span class="flex items-center gap-2"><i class="fa-brands fa-js text-amber-500 text-base"></i> JavaScript (ES6+)</span>
        <span class="text-slate-300 dark:text-slate-700">•</span>
        <span class="flex items-center gap-2"><i class="fa-brands fa-css3-alt text-cyan-500 text-base"></i> Tailwind CSS</span>
        <span class="text-slate-300 dark:text-slate-700">•</span>
        <span class="flex items-center gap-2"><i class="fa-brands fa-docker text-blue-500 text-base"></i> Docker</span>
        <span class="text-slate-300 dark:text-slate-700">•</span>
        <span class="flex items-center gap-2"><i class="fa-solid fa-vial-circle-check text-green-500 text-base"></i> Playwright (Tests E2E)</span>
        <span class="text-slate-300 dark:text-slate-700">•</span>
        <span class="flex items-center gap-2"><i class="fa-solid fa-location-arrow text-indigo-500 text-base"></i> AéroStat (GPS 2s)</span>
        <span class="text-slate-300 dark:text-slate-700">•</span>
        <span class="flex items-center gap-2"><i class="fa-brands fa-node text-emerald-600 text-base"></i> Node.js</span>
        <span class="text-slate-300 dark:text-slate-700">•</span>
        <span class="flex items-center gap-2"><i class="fa-brands fa-gitlab text-orange-500 text-base"></i> GitLab CI & YouTrack</span>
        <span class="text-slate-300 dark:text-slate-700">•</span>
        <span class="flex items-center gap-2"><i class="fa-brands fa-linux text-slate-800 dark:text-slate-200 text-base"></i> Linux & Vim</span>
        <span class="text-slate-300 dark:text-slate-700">•</span>
        <span class="flex items-center gap-2"><i class="fa-solid fa-database text-blue-500 text-base"></i> PostgreSQL</span>
        <span class="text-slate-300 dark:text-slate-700">•</span>
        <span class="flex items-center gap-2"><i class="fa-solid fa-cloud text-sky-500 text-base"></i> Kubernetes</span>
        <span class="text-slate-300 dark:text-slate-700">•</span>

        <!-- Boucle continue -->
        <span class="flex items-center gap-2"><i class="fa-brands fa-vuejs text-emerald-500 text-base"></i> Vue.js 3</span>
        <span class="text-slate-300 dark:text-slate-700">•</span>
        <span class="flex items-center gap-2"><i class="fa-brands fa-angular text-red-500 text-base"></i> Angular</span>
        <span class="text-slate-300 dark:text-slate-700">•</span>
        <span class="flex items-center gap-2"><i class="fa-brands fa-symfony text-slate-800 dark:text-white text-base"></i> Symfony</span>
        <span class="text-slate-300 dark:text-slate-700">•</span>
        <span class="flex items-center gap-2"><i class="fa-brands fa-php text-indigo-400 text-base"></i> PHP 8</span>
        <span class="text-slate-300 dark:text-slate-700">•</span>
        <span class="flex items-center gap-2"><i class="fa-brands fa-js text-amber-500 text-base"></i> JavaScript (ES6+)</span>
        <span class="text-slate-300 dark:text-slate-700">•</span>
        <span class="flex items-center gap-2"><i class="fa-brands fa-css3-alt text-cyan-500 text-base"></i> Tailwind CSS</span>
        <span class="text-slate-300 dark:text-slate-700">•</span>
        <span class="flex items-center gap-2"><i class="fa-brands fa-docker text-blue-500 text-base"></i> Docker</span>
        <span class="text-slate-300 dark:text-slate-700">•</span>
        <span class="flex items-center gap-2"><i class="fa-solid fa-vial-circle-check text-green-500 text-base"></i> Playwright (Tests E2E)</span>
        <span class="text-slate-300 dark:text-slate-700">•</span>
        <span class="flex items-center gap-2"><i class="fa-solid fa-location-arrow text-indigo-500 text-base"></i> AéroStat (GPS 2s)</span>
        <span class="text-slate-300 dark:text-slate-700">•</span>
        <span class="flex items-center gap-2"><i class="fa-brands fa-node text-emerald-600 text-base"></i> Node.js</span>
        <span class="text-slate-300 dark:text-slate-700">•</span>
        <span class="flex items-center gap-2"><i class="fa-brands fa-gitlab text-orange-500 text-base"></i> GitLab CI & YouTrack</span>
        <span class="text-slate-300 dark:text-slate-700">•</span>
        <span class="flex items-center gap-2"><i class="fa-brands fa-linux text-slate-800 dark:text-slate-200 text-base"></i> Linux & Vim</span>
        <span class="text-slate-300 dark:text-slate-700">•</span>
        <span class="flex items-center gap-2"><i class="fa-solid fa-database text-blue-500 text-base"></i> PostgreSQL</span>
        <span class="text-slate-300 dark:text-slate-700">•</span>
        <span class="flex items-center gap-2"><i class="fa-solid fa-cloud text-sky-500 text-base"></i> Kubernetes</span>
        <span class="text-slate-300 dark:text-slate-700">•</span>
      </div>
    </section>

    <!-- 3. ARTICLE 1 : PRÉSENTATION & PARCOURS (Article éditorial ouvert, sans boîte) -->
    <article class="border-t border-slate-200/80 dark:border-white/[0.08] pt-12 sm:pt-16">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
        <!-- Photo & identité -->
        <div class="lg:col-span-4 flex flex-col items-center sm:items-start">
          <div class="relative group">
            <img
              :src="moiImg"
              alt="Mattéo Rivière"
              class="w-52 h-52 sm:w-64 sm:h-64 rounded-3xl object-cover shadow-lg border border-slate-200/80 dark:border-white/10"
            />
            <div class="absolute -bottom-3 -right-2 px-3 py-1 rounded-xl bg-blue-600 text-white text-xs font-bold shadow-md">
              {{ t('about.location') }}
            </div>
          </div>
          <div class="mt-6 space-y-1 text-center sm:text-left">
            <h3 class="text-xl font-bold text-slate-900 dark:text-white">Mattéo Rivière</h3>
            <p class="text-sm text-slate-500 dark:text-slate-400">{{ t('about.studies') }}</p>
            <p class="text-xs text-blue-600 dark:text-blue-400 font-medium">{{ t('about.school') }}</p>
          </div>
        </div>

        <!-- Récit personnel & passion -->
        <div class="lg:col-span-8 space-y-6 text-slate-700 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
          <div class="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">
            <span>{{ t('about.tag') }}</span>
            <span class="w-8 h-px bg-blue-600/40"></span>
            <span>{{ t('about.subtitle') }}</span>
          </div>

          <h2 class="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {{ t('about.title') }}
          </h2>

          <p>
            {{ t('about.p1') }}
          </p>

          <p>
            {{ t('about.p2') }}
          </p>

          <!-- Citation / Devise de travail -->
          <div class="pl-4 sm:pl-6 border-l-2 border-blue-500 italic text-slate-600 dark:text-slate-300 text-base sm:text-lg bg-blue-50/40 dark:bg-blue-950/20 py-3 rounded-r-xl">
            {{ t('about.quote') }}
          </div>
        </div>
      </div>
    </article>

    <!-- 4. ARTICLE 2 : PROJETS PHARES (Incrustés directement avec respiration) -->
    <section class="border-t border-slate-200/80 dark:border-white/[0.08] pt-12 sm:pt-16 space-y-16">
      <div class="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <div class="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-2">
            <span>{{ t('featured.tag') }}</span>
            <span class="w-8 h-px bg-blue-600/40"></span>
            <span>{{ t('featured.subtitle') }}</span>
          </div>
          <h2 class="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {{ t('featured.title') }}
          </h2>
        </div>
        <RouterLink to="/projets" class="text-sm font-bold text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-2 self-start sm:self-auto">
          <span>{{ t('featured.explore') }}</span>
          <i class="fa-solid fa-arrow-right text-xs"></i>
        </RouterLink>
      </div>

      <!-- Projet 1 : AéroStat -->
      <article class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        <div class="lg:col-span-6 h-72 sm:h-96 rounded-2xl overflow-hidden bg-slate-950 relative shadow-md">
          <img
            :src="aerostatCover"
            alt="Plateforme AéroStat"
            class="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          />
          <span class="absolute top-4 left-4 text-xs font-bold px-3 py-1.5 rounded-full bg-blue-600 text-white shadow-md">
            {{ t('featured.p1_badge') }}
          </span>
        </div>

        <div class="lg:col-span-6 space-y-4">
          <div class="flex items-center gap-2 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide">
            <span>{{ t('featured.p1_team') }}</span>
          </div>

          <h3 class="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
            {{ t('featured.p1_title') }}
          </h3>

          <p class="text-slate-700 dark:text-slate-300 text-base leading-relaxed">
            {{ t('featured.p1_desc') }}
          </p>

          <div class="flex flex-wrap gap-2 pt-1">
            <span class="badge-tag">{{ isEn ? '2s Telemetry' : 'Télémétrie 2s' }}</span>
            <span class="badge-tag">{{ isEn ? 'AROME Weather' : 'Météo AROME' }}</span>
            <span class="badge-tag">PostgreSQL</span>
            <span class="badge-tag">Kubernetes</span>
            <span class="badge-tag">GitLab CI</span>
            <span class="badge-tag">YouTrack</span>
          </div>

          <div class="pt-3">
            <RouterLink to="/projets/aerostat" class="btn-primary text-sm py-2.5 px-5">
              <span>{{ t('featured.p1_cta') }}</span>
              <i class="fa-solid fa-arrow-right text-xs"></i>
            </RouterLink>
          </div>
        </div>
      </article>

      <div class="w-full h-px bg-slate-200/80 dark:border-white/[0.08]"></div>

      <!-- Projet 2 : OSPI Cloud E2E -->
      <article class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        <div class="lg:col-span-6 space-y-4 order-last lg:order-first">
          <div class="flex items-center gap-2 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide">
            <span>{{ t('featured.p2_team') }}</span>
          </div>

          <h3 class="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
            {{ t('featured.p2_title') }}
          </h3>

          <p class="text-slate-700 dark:text-slate-300 text-base leading-relaxed">
            {{ t('featured.p2_desc') }}
          </p>

          <div class="flex flex-wrap gap-2 pt-1">
            <span class="badge-tag">Playwright</span>
            <span class="badge-tag">GitLab CI/CD</span>
            <span class="badge-tag">Allure Reporter</span>
            <span class="badge-tag">JavaScript</span>
            <span class="badge-tag">{{ isEn ? 'Quality Assurance' : 'Assurance Qualité' }}</span>
          </div>

          <div class="pt-3">
            <RouterLink to="/projets/ospi-cloud-e2e" class="btn-primary text-sm py-2.5 px-5">
              <span>{{ t('featured.p2_cta') }}</span>
              <i class="fa-solid fa-arrow-right text-xs"></i>
            </RouterLink>
          </div>
        </div>

        <div class="lg:col-span-6 h-72 sm:h-96 rounded-2xl overflow-hidden bg-slate-950 relative shadow-md">
          <img
            :src="ospiCover"
            alt="Tests E2E OSPI Cloud"
            class="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          />
          <span class="absolute top-4 right-4 text-xs font-bold px-3 py-1.5 rounded-full bg-emerald-600 text-white shadow-md">
            {{ t('featured.p2_badge') }}
          </span>
        </div>
      </article>
    </section>

    <!-- 5. ARTICLE 3 : MÉTHODE, ANTICIPATION & IA (Article éditorial avec contenu fluide) -->
    <article class="border-t border-slate-200/80 dark:border-white/[0.08] pt-12 sm:pt-16 space-y-10">
      <div class="max-w-3xl">
        <div class="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400 mb-2">
          <span>{{ t('methodology.tag') }}</span>
          <span class="w-8 h-px bg-indigo-600/40"></span>
          <span>{{ t('methodology.subtitle') }}</span>
        </div>
        <h2 class="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          {{ t('methodology.title') }}
        </h2>
        <p class="mt-3 text-slate-700 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
          {{ t('methodology.pitch') }}
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        <!-- Axe 1 : Anticipation -->
        <div class="space-y-4">
          <div class="flex items-center gap-3">
            <span class="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center text-lg">
              <i class="fa-solid fa-diagram-project"></i>
            </span>
            <h3 class="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
              {{ t('methodology.axe1_title') }}
            </h3>
          </div>
          <p class="text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
            {{ t('methodology.axe1_desc') }}
          </p>
          <div class="flex flex-wrap gap-2 text-xs pt-1">
            <span class="badge-tag">{{ t('methodology.axe1_b1') }}</span>
            <span class="badge-tag">{{ t('methodology.axe1_b2') }}</span>
            <span class="badge-tag">{{ t('methodology.axe1_b3') }}</span>
          </div>
        </div>

        <!-- Axe 2 : IA pragmatique -->
        <div class="space-y-4">
          <div class="flex items-center gap-3">
            <span class="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center text-lg">
              <i class="fa-solid fa-wand-magic-sparkles"></i>
            </span>
            <h3 class="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
              {{ t('methodology.axe2_title') }}
            </h3>
          </div>
          <p class="text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
            {{ t('methodology.axe2_desc') }}
          </p>
          <div class="flex flex-wrap gap-2 text-xs pt-1">
            <span class="badge-tag">{{ t('methodology.axe2_b1') }}</span>
            <span class="badge-tag">{{ t('methodology.axe2_b2') }}</span>
            <span class="badge-tag">{{ t('methodology.axe2_b3') }}</span>
          </div>
        </div>
      </div>
    </article>

    <!-- 6. ARTICLE 4 : ÉQUILIBRE & QUOTIDIEN (Boxe & Musique Feel-Good) -->
    <article class="border-t border-slate-200/80 dark:border-white/[0.08] pt-12 sm:pt-16 space-y-10">
      <div class="max-w-3xl">
        <div class="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-amber-600 dark:text-amber-400 mb-2">
          <span>{{ t('balance.tag') }}</span>
          <span class="w-8 h-px bg-amber-600/40"></span>
          <span>{{ t('balance.subtitle') }}</span>
        </div>
        <h2 class="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          {{ t('balance.title') }}
        </h2>
        <p class="mt-3 text-slate-700 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
          {{ t('balance.desc') }}
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
        <!-- Boxe anglaise -->
        <div class="space-y-4">
          <div class="flex items-center gap-3">
            <span class="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center text-lg">
              <i class="fa-solid fa-hand-fist"></i>
            </span>
            <h3 class="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
              {{ t('balance.boxe_title') }}
            </h3>
          </div>
          <p class="text-slate-700 dark:text-slate-300 text-base leading-relaxed">
            {{ t('balance.boxe_desc') }}
          </p>
          <div class="flex gap-2 text-xs pt-1">
            <span class="badge-tag"><i class="fa-solid fa-shield text-amber-500"></i> {{ t('balance.composure') }}</span>
            <span class="badge-tag"><i class="fa-solid fa-bullseye text-blue-500"></i> {{ t('balance.perseverance') }}</span>
            <span class="badge-tag"><i class="fa-solid fa-bolt text-emerald-500"></i> {{ t('balance.discipline') }}</span>
          </div>
        </div>

        <!-- Musique feel-good -->
        <div class="p-6 sm:p-7 rounded-2xl bg-gradient-to-br from-pink-500/5 to-purple-500/5 dark:from-pink-500/10 dark:to-purple-500/10 border border-pink-500/20 space-y-4">
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-2.5 font-bold text-slate-900 dark:text-white text-lg">
              <i class="fa-solid fa-headphones text-pink-500"></i>
              <span>{{ t('balance.music_title') }}</span>
            </div>
            <!-- Égaliseur sonore animé -->
            <div class="flex items-end gap-1 h-5 px-2 bg-pink-500/10 rounded-lg py-1" title="Flow musical">
              <span class="w-1 bg-pink-500 rounded-full animate-pulse h-3"></span>
              <span class="w-1 bg-pink-500 rounded-full animate-bounce h-5"></span>
              <span class="w-1 bg-pink-500 rounded-full animate-pulse h-2"></span>
              <span class="w-1 bg-pink-500 rounded-full animate-bounce h-4"></span>
              <span class="w-1 bg-pink-500 rounded-full animate-pulse h-3"></span>
            </div>
          </div>
          <p class="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
            {{ t('balance.music_desc') }}
          </p>
          <span class="text-xs font-semibold text-pink-600 dark:text-pink-400 block">
            {{ t('balance.music_sub') }}
          </span>
        </div>
      </div>
    </article>

    <!-- 7. SECTION CONTACT / CTA FINAL -->
    <section class="p-8 sm:p-14 rounded-3xl bg-gradient-to-br from-blue-600 to-indigo-700 text-white shadow-xl flex flex-col sm:flex-row items-center justify-between gap-8">
      <div class="space-y-3 text-center sm:text-left max-w-2xl">
        <span class="inline-block px-3 py-1 rounded-full bg-white/20 text-xs font-semibold uppercase tracking-wider backdrop-blur-md">
          {{ t('cta_banner.badge') }}
        </span>
        <h2 class="text-2xl sm:text-4xl font-extrabold tracking-tight">
          {{ t('cta_banner.title') }}
        </h2>
        <p class="text-blue-100 text-sm sm:text-base leading-relaxed">
          {{ t('cta_banner.desc') }}
        </p>
      </div>

      <div class="flex flex-col sm:flex-row gap-3 w-full sm:w-auto shrink-0">
        <RouterLink to="/contact" class="px-6 py-3.5 rounded-xl font-bold bg-white text-blue-700 hover:bg-blue-50 transition-all text-center shadow-md">
          {{ t('cta_banner.btn_contact') }}
        </RouterLink>
        <RouterLink to="/cv" class="px-6 py-3.5 rounded-xl font-bold bg-blue-800/60 hover:bg-blue-800 text-white border border-white/20 transition-all text-center">
          {{ t('cta_banner.btn_cv') }}
        </RouterLink>
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { RouterLink } from 'vue-router'
import { useI18n } from '../composables/useI18n'
import { projects } from '../data/projects'
import moiImg from '../assets/Moi.jpeg'
import aerostatCover from '../assets/aerostat_mockup.jpg'
import ospiCover from '../assets/ospi_playwright_mockup.jpg'

const { t, isEn } = useI18n()
const featuredProjects = computed(() => projects.filter(p => p.featured))
</script>
