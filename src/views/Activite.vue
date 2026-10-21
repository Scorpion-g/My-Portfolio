<template>
  <div class="space-y-20 sm:space-y-28">
    <!-- En-tête éditorial -->
    <header class="pt-4 sm:pt-8 max-w-4xl">
      <div class="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-600 dark:text-amber-400 text-xs font-semibold uppercase tracking-wider mb-4">
        Personnalité & Équilibre
      </div>
      <h1 class="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
        Ce qui me passionne & Ma méthode
      </h1>
      <p class="text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
        Ce qui m'aide à garder l'équilibre, à rester concentré et à aborder chaque projet de développement avec méthode, rigueur et bonne humeur.
      </p>
    </header>

    <!-- 1. ARTICLE : LA BOXE ANGLAISE -->
    <article class="border-t border-slate-200/80 dark:border-white/[0.08] pt-12 sm:pt-16">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        <!-- Photo Boxe -->
        <div class="lg:col-span-5 h-72 sm:h-96 rounded-3xl overflow-hidden bg-slate-900 shadow-lg border border-slate-200/80 dark:border-white/10">
          <img
            :src="boxeImg"
            alt="Pratique de la boxe anglaise"
            class="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>

        <!-- Récit Boxe -->
        <div class="lg:col-span-7 space-y-5 text-slate-700 dark:text-slate-300 text-base leading-relaxed">
          <div class="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-amber-600 dark:text-amber-400">
            <span>01</span>
            <span class="w-8 h-px bg-amber-600/40"></span>
            <span>Discipline sportive</span>
          </div>

          <h2 class="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            6 ans de boxe anglaise : le ring comme école de rigueur
          </h2>

          <p>
            J'ai pratiqué la boxe anglaise pendant 6 ans. Bien loin des clichés d'agressivité, c'est avant tout un sport de self-control, d'humilité et de persévérance. Sur un ring, chaque geste compte, la précipitation se paie cash et l'endurance mentale fait toute la différence.
          </p>

          <p>
            Cette discipline m'accompagne chaque jour dans mon métier de développeur : quand un bug résiste ou qu'une contrainte technique bloque l'avancement, la boxe m'a appris à ne pas paniquer. Je prends du recul, je respire et je décompose le problème calmement jusqu'à trouver la solution.
          </p>

          <!-- 3 piliers -->
          <div class="pt-2 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
            <div class="p-3.5 rounded-xl bg-slate-100/80 dark:bg-[#111827]/70 border border-slate-200/80 dark:border-white/[0.08]">
              <i class="fa-solid fa-shield-heart text-amber-500 text-base mb-1 block"></i>
              <strong class="text-slate-900 dark:text-white block text-sm">Sang-froid</strong>
              <span class="text-slate-500">Garder sa lucidité face aux imprévus</span>
            </div>
            <div class="p-3.5 rounded-xl bg-slate-100/80 dark:bg-[#111827]/70 border border-slate-200/80 dark:border-white/[0.08]">
              <i class="fa-solid fa-dumbbell text-blue-500 text-base mb-1 block"></i>
              <strong class="text-slate-900 dark:text-white block text-sm">Discipline</strong>
              <span class="text-slate-500">Être régulier et aller jusqu'au bout</span>
            </div>
            <div class="p-3.5 rounded-xl bg-slate-100/80 dark:bg-[#111827]/70 border border-slate-200/80 dark:border-white/[0.08]">
              <i class="fa-solid fa-bullseye text-emerald-500 text-base mb-1 block"></i>
              <strong class="text-slate-900 dark:text-white block text-sm">Précision</strong>
              <span class="text-slate-500">Concentration maximale sur les détails</span>
            </div>
          </div>
        </div>
      </div>
    </article>

    <!-- 2. ARTICLE : VEILLE TECH, LINUX & OPEN SOURCE -->
    <article class="border-t border-slate-200/80 dark:border-white/[0.08] pt-12 sm:pt-16 space-y-8">
      <div class="max-w-3xl">
        <div class="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-2">
          <span>02</span>
          <span class="w-8 h-px bg-blue-600/40"></span>
          <span>Curiosité & Écosystème</span>
        </div>
        <h2 class="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Veille technologique, Linux & Culture Open Source
        </h2>
        <p class="mt-3 text-slate-700 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
          Pour moi, l'informatique n'a jamais été une simple matière d'école : c'est un écosystème en perpétuel mouvement que j'explore activement depuis le collège.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="p-6 rounded-2xl bg-white/80 dark:bg-[#111827]/70 border border-slate-200/80 dark:border-white/[0.08] space-y-3">
          <div class="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center text-lg">
            <i class="fa-brands fa-linux"></i>
          </div>
          <h3 class="text-lg font-bold text-slate-900 dark:text-white">L'ADN Linux & Vim</h3>
          <p class="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
            Initié en classe de 3ème, j'ai développé une vraie passion pour les systèmes UNIX, le terminal, la gestion des processus et la personnalisation de mon environnement (scripts Bash, dotfiles, raccourcis clavier).
          </p>
        </div>

        <div class="p-6 rounded-2xl bg-white/80 dark:bg-[#111827]/70 border border-slate-200/80 dark:border-white/[0.08] space-y-3">
          <div class="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center text-lg">
            <i class="fa-solid fa-layer-group"></i>
          </div>
          <h3 class="text-lg font-bold text-slate-900 dark:text-white">Veille Web & Frameworks</h3>
          <p class="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
            Je suis de près les évolutions des frameworks modernes, côté front (Vue.js 3, Angular, Tailwind CSS) comme back (Symfony, Node.js). J'aime expérimenter les nouveautés pour construire des architectures logicielles toujours plus modulaires et robustes.
          </p>
        </div>

        <div class="p-6 rounded-2xl bg-white/80 dark:bg-[#111827]/70 border border-slate-200/80 dark:border-white/[0.08] space-y-3">
          <div class="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center text-lg">
            <i class="fa-solid fa-microchip"></i>
          </div>
          <h3 class="text-lg font-bold text-slate-900 dark:text-white">IA appliquée & Qualité</h3>
          <p class="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
            Exploration continue des agents de code, des frameworks de test (Playwright) et de l'intégration continue (GitLab CI / GitHub Actions) pour fiabiliser le cycle de vie applicatif sans perte de temps.
          </p>
        </div>
      </div>
    </article>

    <!-- 3. ARTICLE : MUSIQUE FEEL-GOOD -->
    <article class="border-t border-slate-200/80 dark:border-white/[0.08] pt-12 sm:pt-16 space-y-8">
      <div class="max-w-3xl">
        <div class="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-pink-600 dark:text-pink-400 mb-2">
          <span>03</span>
          <span class="w-8 h-px bg-pink-600/40"></span>
          <span>Énergie musicale</span>
        </div>
        <h2 class="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Ce qui tourne en boucle dans mon casque
        </h2>
        <p class="mt-3 text-slate-700 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
          Pour coder efficacement pendant des heures, l'ambiance sonore est primordiale. Pas de son mélancolique : que de l'énergie positive et entraînante !
        </p>
      </div>

      <div class="p-6 sm:p-10 rounded-3xl bg-gradient-to-br from-pink-500/5 to-purple-500/5 dark:from-pink-500/10 dark:to-purple-500/10 border border-pink-500/20 space-y-6">
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-3">
            <span class="w-10 h-10 rounded-xl bg-pink-500/10 text-pink-600 dark:text-pink-400 flex items-center justify-center text-lg">
              <i class="fa-solid fa-headphones"></i>
            </span>
            <div>
              <h3 class="text-xl font-bold text-slate-900 dark:text-white">Le mix parfait pour enchaîner les commits</h3>
              <p class="text-xs text-slate-500 dark:text-slate-400">Flow, bonne humeur et productivité</p>
            </div>
          </div>

          <!-- Égaliseur sonore dynamique -->
          <div class="flex items-end gap-1 h-6 px-3 bg-pink-500/10 rounded-xl py-1" title="Flow musical actif">
            <span class="w-1 bg-pink-500 rounded-full animate-pulse h-3"></span>
            <span class="w-1 bg-pink-500 rounded-full animate-bounce h-6"></span>
            <span class="w-1 bg-pink-500 rounded-full animate-pulse h-2"></span>
            <span class="w-1 bg-pink-500 rounded-full animate-bounce h-5"></span>
            <span class="w-1 bg-pink-500 rounded-full animate-pulse h-4"></span>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
          <div class="p-5 rounded-2xl bg-white/80 dark:bg-slate-900/60 border border-slate-200/80 dark:border-white/[0.08] space-y-2">
            <div class="flex items-center gap-2 font-bold text-slate-900 dark:text-white">
              <i class="fa-solid fa-sparkles text-pink-500"></i>
              <span>White Girl Music (Pop 2000s / 2010s)</span>
            </div>
            <p class="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed">
              Taylor Swift, Carly Rae Jepsen, Katy Perry, pop rétro entraînante. C'est le secret pour garder un tempo soutenu et ne jamais s'endormir devant du refactoring de code.
            </p>
          </div>

          <div class="p-5 rounded-2xl bg-white/80 dark:bg-slate-900/60 border border-slate-200/80 dark:border-white/[0.08] space-y-2">
            <div class="flex items-center gap-2 font-bold text-slate-900 dark:text-white">
              <i class="fa-solid fa-guitar text-indigo-500"></i>
              <span>Jean-Jacques Goldman & Grands classiques</span>
            </div>
            <p class="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed">
              Des mélodies intemporelles, des refrains motivants qu'on chante sous la douche et qui accompagnent à merveille la réflexion logique et les sessions d'architecture logicielle.
            </p>
          </div>
        </div>
      </div>
    </article>

    <!-- 4. ARTICLE : MÉTHODE, ANTICIPATION & TRAVAIL D'ÉQUIPE -->
    <article class="border-t border-slate-200/80 dark:border-white/[0.08] pt-12 sm:pt-16 space-y-8">
      <div class="max-w-3xl">
        <div class="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400 mb-2">
          <span>04</span>
          <span class="w-8 h-px bg-indigo-600/40"></span>
          <span>Méthode & Organisation</span>
        </div>
        <h2 class="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Comment j'aborde un projet technique
        </h2>
        <p class="mt-3 text-slate-700 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
          Pour travailler sereinement en équipe ou en autonomie, la clé réside dans la clarté des objectifs et l'anticipation constante des dépendances.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
        <div class="space-y-3">
          <div class="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center text-lg">
            <i class="fa-solid fa-list-check"></i>
          </div>
          <h3 class="font-bold text-slate-900 dark:text-white text-base">Cadrage MoSCoW & YouTrack</h3>
          <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            Chaque fonctionnalité est formalisée en User Story claire, avec ses critères d'acceptation et sa criticité afin de prioriser sans ambiguïté.
          </p>
        </div>

        <div class="space-y-3">
          <div class="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center text-lg">
            <i class="fa-solid fa-wand-magic-sparkles"></i>
          </div>
          <h3 class="font-bold text-slate-900 dark:text-white text-base">Automatisation par l'IA</h3>
          <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            Utilisation intelligente des LLMs et agents de programmation pour accélérer les tâches répétitives, tester les cas limites et prototyper vite.
          </p>
        </div>

        <div class="space-y-3">
          <div class="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center text-lg">
            <i class="fa-solid fa-users"></i>
          </div>
          <h3 class="font-bold text-slate-900 dark:text-white text-base">Communication transparente</h3>
          <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            Comme sur le projet AéroStat avec notre client pilote, un partage régulier des avancées garantit que le produit répond aux attentes réelles du terrain.
          </p>
        </div>
      </div>
    </article>

    <!-- BANNIÈRE FINALE CONTACT -->
    <section class="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-blue-600 to-indigo-700 text-white shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
      <div class="space-y-2 text-center sm:text-left">
        <h3 class="text-2xl font-extrabold tracking-tight">Envie d'échanger sur un projet ?</h3>
        <p class="text-blue-100 text-sm">Disponible pour un stage de 18 semaines en développement web.</p>
      </div>
      <RouterLink to="/contact" class="px-6 py-3 rounded-xl font-bold bg-white text-blue-700 hover:bg-blue-50 transition-all text-center shrink-0 shadow-md">
        Me contacter
      </RouterLink>
    </section>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import boxeImg from '../assets/boxe_cinematic.jpg'
</script>
