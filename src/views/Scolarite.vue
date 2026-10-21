<template>
  <div class="space-y-20 sm:space-y-28">
    <!-- En-tête de page -->
    <header class="pt-4 sm:pt-8 max-w-4xl">
      <div class="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-semibold uppercase tracking-wider mb-4">
        {{ t('scolarite_page.badge') }}
      </div>
      <h1 class="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
        {{ t('scolarite_page.title') }}
      </h1>
      <p class="text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
        {{ t('scolarite_page.desc') }}
      </p>
    </header>

    <!-- 1. ARTICLE : LE BUT INFORMATIQUE (UCA / IUT CLERMONT AUVERGNE) -->
    <article class="border-t border-slate-200/80 dark:border-white/[0.08] pt-12 sm:pt-16 space-y-10">
      <div class="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
        <div>
          <div class="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-2">
            <span>{{ t('scolarite_page.s1_tag') }}</span>
            <span class="w-8 h-px bg-blue-600/40"></span>
            <span>{{ t('scolarite_page.s1_subtitle') }}</span>
          </div>
          <h2 class="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {{ t('scolarite_page.s1_title') }}
          </h2>
          <p class="text-sm text-slate-500 dark:text-slate-400 mt-1">
            {{ t('scolarite_page.s1_school') }}
          </p>
        </div>
        <span class="text-xs font-mono font-bold px-3 py-1.5 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 self-start sm:self-auto">
          {{ t('scolarite_page.s1_status') }}
        </span>
      </div>

      <!-- Présentation avec Photo UCA -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        <div class="lg:col-span-5 h-72 sm:h-80 rounded-3xl overflow-hidden bg-slate-900 shadow-lg border border-slate-200/80 dark:border-white/10 relative">
          <img
            :src="ucaImg"
            alt="Bâtiment central de l'IUT Clermont Auvergne - Université Clermont Auvergne (UCA)"
            class="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          />
          <span class="absolute bottom-3 left-3 text-xs font-bold px-3 py-1 rounded-full bg-blue-600 text-white shadow-md">
            {{ t('scolarite_page.s1_badge_img') }}
          </span>
        </div>

        <div class="lg:col-span-7 space-y-4 text-slate-700 dark:text-slate-300 text-base leading-relaxed">
          <p>
            {{ t('scolarite_page.s1_p1') }}
          </p>
          <p>
            {{ t('scolarite_page.s1_p2') }}
          </p>
        </div>
      </div>

      <!-- Grille des grands piliers de compétences -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
        <div class="p-6 rounded-2xl bg-white/80 dark:bg-[#111827]/70 border border-slate-200/80 dark:border-white/[0.08] space-y-2.5">
          <div class="w-9 h-9 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center text-base">
            <i class="fa-solid fa-code"></i>
          </div>
          <h3 class="font-bold text-slate-900 dark:text-white text-base">{{ t('scolarite_page.p1_title') }}</h3>
          <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            {{ t('scolarite_page.p1_desc') }}
          </p>
        </div>

        <div class="p-6 rounded-2xl bg-white/80 dark:bg-[#111827]/70 border border-slate-200/80 dark:border-white/[0.08] space-y-2.5">
          <div class="w-9 h-9 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center text-base">
            <i class="fa-solid fa-server"></i>
          </div>
          <h3 class="font-bold text-slate-900 dark:text-white text-base">{{ t('scolarite_page.p2_title') }}</h3>
          <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            {{ t('scolarite_page.p2_desc') }}
          </p>
        </div>

        <div class="p-6 rounded-2xl bg-white/80 dark:bg-[#111827]/70 border border-slate-200/80 dark:border-white/[0.08] space-y-2.5">
          <div class="w-9 h-9 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center text-base">
            <i class="fa-solid fa-vial-circle-check"></i>
          </div>
          <h3 class="font-bold text-slate-900 dark:text-white text-base">{{ t('scolarite_page.p3_title') }}</h3>
          <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            {{ t('scolarite_page.p3_desc') }}
          </p>
        </div>

        <div class="p-6 rounded-2xl bg-white/80 dark:bg-[#111827]/70 border border-slate-200/80 dark:border-white/[0.08] space-y-2.5">
          <div class="w-9 h-9 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center text-base">
            <i class="fa-brands fa-docker"></i>
          </div>
          <h3 class="font-bold text-slate-900 dark:text-white text-base">{{ t('scolarite_page.p4_title') }}</h3>
          <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            {{ t('scolarite_page.p4_desc') }}
          </p>
        </div>

        <div class="p-6 rounded-2xl bg-white/80 dark:bg-[#111827]/70 border border-slate-200/80 dark:border-white/[0.08] space-y-2.5">
          <div class="w-9 h-9 rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center text-base">
            <i class="fa-solid fa-diagram-project"></i>
          </div>
          <h3 class="font-bold text-slate-900 dark:text-white text-base">{{ t('scolarite_page.p5_title') }}</h3>
          <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            {{ t('scolarite_page.p5_desc') }}
          </p>
        </div>

        <div class="p-6 rounded-2xl bg-white/80 dark:bg-[#111827]/70 border border-slate-200/80 dark:border-white/[0.08] space-y-2.5">
          <div class="w-9 h-9 rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 flex items-center justify-center text-base">
            <i class="fa-solid fa-users-gear"></i>
          </div>
          <h3 class="font-bold text-slate-900 dark:text-white text-base">{{ t('scolarite_page.p6_title') }}</h3>
          <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            {{ t('scolarite_page.p6_desc') }}
          </p>
        </div>
      </div>
    </article>

    <!-- 2. ARTICLE : LE CADRE D'APPRENTISSAGE PAR PROJET (SAE) -->
    <article class="border-t border-slate-200/80 dark:border-white/[0.08] pt-12 sm:pt-16 space-y-6">
      <div class="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
        <span>02</span>
        <span class="w-8 h-px bg-emerald-600/40"></span>
        <span>{{ isEn ? 'Project-Based Learning' : 'Apprentissage par projet' }}</span>
      </div>

      <h2 class="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
        {{ isEn ? 'SAEs: Real-world engineering team challenges' : 'Les SAEs : de vrais défis techniques en équipe' }}
      </h2>

      <p class="text-slate-700 dark:text-slate-300 text-base leading-relaxed max-w-4xl">
        {{ isEn ? 'At IUT Clermont Auvergne, Learning and Assessment Situations (SAE) form the core of our curriculum. Far from theoretical isolated exercises, these are semester-long projects carried out in teams of 3 to 5 students, often commissioned by external clients or company partners.' : 'À l\'IUT d\'Aubière, les Situations d\'Apprentissage et d\'Évaluation (SAE) constituent le cœur de notre cursus. Loin des exercices théoriques isolés, ce sont des projets de plusieurs mois menés en équipe de 3 à 5 étudiants, souvent commandités par des acteurs externes ou des entreprises partenaires.' }}
      </p>

      <div class="p-6 sm:p-8 rounded-3xl bg-white/80 dark:bg-[#111827]/70 border border-slate-200/80 dark:border-white/[0.08] space-y-4">
        <div class="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400">
          <i class="fa-solid fa-location-arrow"></i>
          <span>{{ isEn ? 'Featured Project: 3rd Year Capstone — AéroStat' : 'Exemple phare : SAE 3e année — AéroStat' }}</span>
        </div>
        <h3 class="text-xl font-bold text-slate-900 dark:text-white">
          {{ isEn ? 'Real-time GPS guidance for hot air balloon pilot' : 'Guidage GPS temps réel pour pilote de montgolfière' }}
        </h3>
        <p class="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
          {{ isEn ? 'To meet the operational requirements of a competition pilot, we develop an airborne-to-ground telemetry tracking platform (2-second updates), integrating Météo-France AROME models with offline caching, organized via MoSCoW on YouTrack.' : 'Pour répondre aux besoins réels d\'un pilote en compétition, nous développons une plateforme synchronisant la nacelle et les véhicules de poursuite au sol toutes les 2 secondes, intégrant le modèle météo AROME de Météo-France avec mise en cache hors-ligne et piloté selon la méthode MoSCoW sur YouTrack.' }}
        </p>
        <div class="pt-1 flex flex-wrap gap-2 text-xs">
          <span class="badge-tag">{{ isEn ? 'Real Client' : 'Client réel' }}</span>
          <span class="badge-tag">{{ isEn ? 'Team of 3' : 'Équipe de 3' }}</span>
          <span class="badge-tag">{{ isEn ? '2s Telemetry' : 'Télémétrie 2s' }}</span>
          <span class="badge-tag">Kubernetes</span>
          <span class="badge-tag">YouTrack</span>
        </div>
      </div>
    </article>

    <!-- 3. ARTICLE : BACCALAURÉAT GÉNÉRAL (CITÉ SCOLAIRE RENÉ CASSIN, TARARE) -->
    <article class="border-t border-slate-200/80 dark:border-white/[0.08] pt-12 sm:pt-16 space-y-8">
      <div class="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">
        <span>{{ t('scolarite_page.s2_tag') }}</span>
        <span class="w-8 h-px bg-slate-400/40"></span>
        <span>{{ t('scolarite_page.s2_subtitle') }}</span>
      </div>

      <div class="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
        <h2 class="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          {{ t('scolarite_page.s2_title') }}
        </h2>
        <span class="text-xs font-mono font-semibold px-3 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 self-start sm:self-auto">
          {{ isEn ? 'Tarare (France) • June 2024 • Honors Mention' : 'Tarare (69) • Juin 2024 • Mention Assez Bien' }}
        </span>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        <!-- Photo Cité scolaire René Cassin -->
        <div class="lg:col-span-5 h-72 sm:h-80 rounded-3xl overflow-hidden bg-slate-900 shadow-lg border border-slate-200/80 dark:border-white/10 relative">
          <img
            :src="reneCassinImg"
            alt="Entrée de la Cité scolaire de la Plata / René Cassin à Tarare (69)"
            class="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          />
          <span class="absolute bottom-3 left-3 text-xs font-bold px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur-md text-white border border-white/10 shadow-md">
            {{ isEn ? 'René Cassin High School (Tarare)' : 'Cité scolaire René Cassin (Tarare)' }}
          </span>
        </div>

        <div class="lg:col-span-7 space-y-4 text-slate-700 dark:text-slate-300 text-base leading-relaxed">
          <p>
            {{ t('scolarite_page.s2_desc') }}
          </p>
        </div>
      </div>
    </article>

    <!-- 4. BANNIÈRE DISPONIBILITÉ STAGE -->
    <section class="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-blue-600 to-indigo-700 text-white shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
      <div class="space-y-2 text-center sm:text-left">
        <span class="inline-block px-3 py-1 rounded-full bg-white/20 text-xs font-semibold uppercase tracking-wider backdrop-blur-md">
          {{ t('cta_banner.badge') }}
        </span>
        <h3 class="text-2xl sm:text-3xl font-extrabold tracking-tight">
          {{ isEn ? 'Ready to bring solid skills to your engineering team' : 'Prêt à apporter mes compétences à votre équipe' }}
        </h3>
        <p class="text-blue-100 text-sm">
          {{ t('cta_banner.desc') }}
        </p>
      </div>

      <RouterLink to="/contact" class="px-6 py-3.5 rounded-xl font-bold bg-white text-blue-700 hover:bg-blue-50 transition-all text-center shrink-0 shadow-md">
        {{ t('cta_banner.btn_contact') }}
      </RouterLink>
    </section>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { useI18n } from '../composables/useI18n'
import ucaImg from '../assets/uca_iut.jpg'
import reneCassinImg from '../assets/lycee_rene_cassin.jpg'

const { t, isEn } = useI18n()
</script>
