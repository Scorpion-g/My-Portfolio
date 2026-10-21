<template>
  <div class="space-y-20 sm:space-y-28">
    <!-- En-tête éditorial -->
    <header class="pt-4 sm:pt-8 max-w-4xl">
      <div class="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-600 dark:text-amber-400 text-xs font-semibold uppercase tracking-wider mb-4">
        {{ t('activite_page.badge') }}
      </div>
      <h1 class="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
        {{ t('activite_page.title') }}
      </h1>
      <p class="text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
        {{ t('activite_page.desc') }}
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
            <span>{{ t('activite_page.s1_tag') }}</span>
            <span class="w-8 h-px bg-amber-600/40"></span>
            <span>{{ t('activite_page.s1_subtitle') }}</span>
          </div>

          <h2 class="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {{ t('activite_page.s1_title') }}
          </h2>

          <p>
            {{ t('activite_page.s1_p1') }}
          </p>

          <p>
            {{ t('activite_page.s1_p2') }}
          </p>

          <!-- 3 piliers -->
          <div class="pt-2 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
            <div class="p-3.5 rounded-xl bg-slate-100/80 dark:bg-[#111827]/70 border border-slate-200/80 dark:border-white/[0.08]">
              <i class="fa-solid fa-shield-heart text-amber-500 text-base mb-1 block"></i>
              <strong class="text-slate-900 dark:text-white block text-sm">{{ t('activite_page.s1_b1_title') }}</strong>
              <span class="text-slate-500">{{ t('activite_page.s1_b1_desc') }}</span>
            </div>
            <div class="p-3.5 rounded-xl bg-slate-100/80 dark:bg-[#111827]/70 border border-slate-200/80 dark:border-white/[0.08]">
              <i class="fa-solid fa-dumbbell text-blue-500 text-base mb-1 block"></i>
              <strong class="text-slate-900 dark:text-white block text-sm">{{ t('activite_page.s1_b2_title') }}</strong>
              <span class="text-slate-500">{{ t('activite_page.s1_b2_desc') }}</span>
            </div>
            <div class="p-3.5 rounded-xl bg-slate-100/80 dark:bg-[#111827]/70 border border-slate-200/80 dark:border-white/[0.08]">
              <i class="fa-solid fa-bullseye text-emerald-500 text-base mb-1 block"></i>
              <strong class="text-slate-900 dark:text-white block text-sm">{{ t('activite_page.s1_b3_title') }}</strong>
              <span class="text-slate-500">{{ t('activite_page.s1_b3_desc') }}</span>
            </div>
          </div>
        </div>
      </div>
    </article>

    <!-- 2. ARTICLE : VEILLE TECH, LINUX & OPEN SOURCE -->
    <article class="border-t border-slate-200/80 dark:border-white/[0.08] pt-12 sm:pt-16 space-y-8">
      <div class="max-w-3xl">
        <div class="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-2">
          <span>{{ t('activite_page.s2_tag') }}</span>
          <span class="w-8 h-px bg-blue-600/40"></span>
          <span>{{ isEn ? 'Technical Curiosity & Ecosystem' : 'Curiosité & Écosystème' }}</span>
        </div>
        <h2 class="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          {{ isEn ? 'Tech Radar, Linux & Open Source Culture' : 'Veille technologique, Linux & Culture Open Source' }}
        </h2>
        <p class="mt-3 text-slate-700 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
          {{ isEn ? 'Computing was never just an academic topic for me: it is a fast-evolving ecosystem that I have explored passionately since middle school.' : 'Pour moi, l\'informatique n\'a jamais été une simple matière d\'école : c\'est un écosystème en perpétuel mouvement que j\'explore activement depuis le collège.' }}
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="p-6 rounded-2xl bg-white/80 dark:bg-[#111827]/70 border border-slate-200/80 dark:border-white/[0.08] space-y-3">
          <div class="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center text-lg">
            <i class="fa-brands fa-linux"></i>
          </div>
          <h3 class="text-lg font-bold text-slate-900 dark:text-white">{{ isEn ? 'Linux & Vim Heritage' : "L'ADN Linux & Vim" }}</h3>
          <p class="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
            {{ isEn ? 'Started in middle school, I developed deep appreciation for UNIX systems, the command line, process inspection, and personal developer environments (Bash scripts, dotfiles, keyboard shortcuts).' : 'Initié en classe de 3ème, j\'ai développé une vraie passion pour les systèmes UNIX, le terminal, la gestion des processus et la personnalisation de mon environnement (scripts Bash, dotfiles, raccourcis clavier).' }}
          </p>
        </div>

        <div class="p-6 rounded-2xl bg-white/80 dark:bg-[#111827]/70 border border-slate-200/80 dark:border-white/[0.08] space-y-3">
          <div class="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center text-lg">
            <i class="fa-solid fa-layer-group"></i>
          </div>
          <h3 class="text-lg font-bold text-slate-900 dark:text-white">{{ isEn ? 'Web Architecture & Modern Stacks' : 'Veille Web & Frameworks' }}</h3>
          <p class="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
            {{ isEn ? 'I closely follow modern developments in both front-end (Vue.js 3, Angular, Tailwind CSS) and back-end (Symfony, Node.js), experimenting constantly to design modular and stable applications.' : 'Je suis de près les évolutions des frameworks modernes, côté front (Vue.js 3, Angular, Tailwind CSS) comme back (Symfony, Node.js). J\'aime expérimenter les nouveautés pour construire des architectures logicielles toujours plus modulaires et robustes.' }}
          </p>
        </div>

        <div class="p-6 rounded-2xl bg-white/80 dark:bg-[#111827]/70 border border-slate-200/80 dark:border-white/[0.08] space-y-3">
          <div class="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center text-lg">
            <i class="fa-solid fa-microchip"></i>
          </div>
          <h3 class="text-lg font-bold text-slate-900 dark:text-white">{{ isEn ? 'Applied AI & Continuous Quality' : 'IA appliquée & Qualité' }}</h3>
          <p class="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
            {{ isEn ? 'Active adoption of code agents, test automation frameworks (Playwright), and CI pipelines (GitLab CI / GitHub Actions) to secure the software lifecycle efficiently.' : 'Exploration continue des agents de code, des frameworks de test (Playwright) et de l\'intégration continue (GitLab CI / GitHub Actions) pour fiabiliser le cycle de vie applicatif sans perte de temps.' }}
          </p>
        </div>
      </div>
    </article>

    <!-- 3. ARTICLE : MUSIQUE FEEL-GOOD -->
    <article class="border-t border-slate-200/80 dark:border-white/[0.08] pt-12 sm:pt-16 space-y-8">
      <div class="max-w-3xl">
        <div class="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-pink-600 dark:text-pink-400 mb-2">
          <span>{{ t('activite_page.s3_tag') }}</span>
          <span class="w-8 h-px bg-pink-600/40"></span>
          <span>{{ isEn ? 'Music Energy' : 'Énergie musicale' }}</span>
        </div>
        <h2 class="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          {{ isEn ? 'On continuous loop in my headphones' : 'Ce qui tourne en boucle dans mon casque' }}
        </h2>
        <p class="mt-3 text-slate-700 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
          {{ isEn ? 'To code efficiently for hours, sound atmosphere is vital. No melancholy here: pure positive rhythm and upbeat stamina!' : 'Pour coder efficacement pendant des heures, l\'ambiance sonore est primordiale. Pas de son mélancolique : que de l\'énergie positive et entraînante !' }}
        </p>
      </div>

      <div class="p-6 sm:p-10 rounded-3xl bg-gradient-to-br from-pink-500/5 to-purple-500/5 dark:from-pink-500/10 dark:to-purple-500/10 border border-pink-500/20 space-y-6">
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-3">
            <span class="w-10 h-10 rounded-xl bg-pink-500/10 text-pink-600 dark:text-pink-400 flex items-center justify-center text-lg">
              <i class="fa-solid fa-headphones"></i>
            </span>
            <div>
              <h3 class="text-xl font-bold text-slate-900 dark:text-white">{{ isEn ? 'The ideal mix for continuous commits' : 'Le mix parfait pour enchaîner les commits' }}</h3>
              <p class="text-xs text-slate-500 dark:text-slate-400">{{ isEn ? 'Flow, positive mood & focus' : 'Flow, bonne humeur et productivité' }}</p>
            </div>
          </div>

          <!-- Égaliseur sonore dynamique -->
          <div class="flex items-end gap-1 h-6 px-3 bg-pink-500/10 rounded-xl py-1" :title="isEn ? 'Active musical flow' : 'Flow musical actif'">
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
              {{ isEn ? 'Taylor Swift, Carly Rae Jepsen, Katy Perry, upbeat pop anthems. The secret recipe to keep high tempo and stay fully energized through refactoring sessions.' : 'Taylor Swift, Carly Rae Jepsen, Katy Perry, pop rétro entraînante. C\'est le secret pour garder un tempo soutenu et ne jamais s\'endormir devant du refactoring de code.' }}
            </p>
          </div>

          <div class="p-5 rounded-2xl bg-white/80 dark:bg-slate-900/60 border border-slate-200/80 dark:border-white/[0.08] space-y-2">
            <div class="flex items-center gap-2 font-bold text-slate-900 dark:text-white">
              <i class="fa-solid fa-guitar text-indigo-500"></i>
              <span>Jean-Jacques Goldman & Classics</span>
            </div>
            <p class="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed">
              {{ isEn ? 'Timeless melodies, motivating choruses to sing along, and a steady soundtrack that accompanies architectural thinking and focused engineering.' : 'Des mélodies intemporelles, des refrains motivants qu\'on chante sous la douche et qui accompagnent à merveille la réflexion logique et les sessions d\'architecture logicielle.' }}
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
          <span>{{ isEn ? 'Methodology & Structure' : 'Méthode & Organisation' }}</span>
        </div>
        <h2 class="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          {{ isEn ? 'How I approach technical projects' : 'Comment j\'aborde un projet technique' }}
        </h2>
        <p class="mt-3 text-slate-700 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
          {{ isEn ? 'To work calmly in teams or autonomously, the key is transparent goals and continuous anticipation of technical dependencies.' : 'Pour travailler sereinement en équipe ou en autonomie, la clé réside dans la clarté des objectifs et l\'anticipation constante des dépendances.' }}
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
        <div class="space-y-3">
          <div class="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 flex items-center justify-center text-lg">
            <i class="fa-solid fa-list-check"></i>
          </div>
          <h3 class="font-bold text-slate-900 dark:text-white text-base">{{ isEn ? 'MoSCoW & YouTrack Scoping' : 'Cadrage MoSCoW & YouTrack' }}</h3>
          <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            {{ isEn ? 'Every feature is structured into clear User Stories with acceptance criteria and criticality to prioritize without ambiguity.' : 'Chaque fonctionnalité est formalisée en User Story claire, avec ses critères d\'acceptation et sa criticité afin de prioriser sans ambiguïté.' }}
          </p>
        </div>

        <div class="space-y-3">
          <div class="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center text-lg">
            <i class="fa-solid fa-wand-magic-sparkles"></i>
          </div>
          <h3 class="font-bold text-slate-900 dark:text-white text-base">{{ isEn ? 'Smart AI Automation' : 'Automatisation par l\'IA' }}</h3>
          <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            {{ isEn ? 'Pragmatic usage of LLMs and code assistants to accelerate repetitive scaffolding, stress-test edge cases, and prototype quickly.' : 'Utilisation intelligente des LLMs et agents de programmation pour accélérer les tâches répétitives, tester les cas limites et prototyper vite.' }}
          </p>
        </div>

        <div class="space-y-3">
          <div class="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center text-lg">
            <i class="fa-solid fa-users"></i>
          </div>
          <h3 class="font-bold text-slate-900 dark:text-white text-base">{{ isEn ? 'Transparent Communication' : 'Communication transparente' }}</h3>
          <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            {{ isEn ? 'As demonstrated on AéroStat with our hot air balloon pilot client, frequent progress reviews ensure the solution aligns perfectly with real flight conditions.' : 'Comme sur le projet AéroStat avec notre client pilote, un partage régulier des avancées garantit que le produit répond aux attentes réelles du terrain.' }}
          </p>
        </div>
      </div>
    </article>

    <!-- BANNIÈRE FINALE CONTACT -->
    <section class="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-blue-600 to-indigo-700 text-white shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
      <div class="space-y-2 text-center sm:text-left">
        <h3 class="text-2xl font-extrabold tracking-tight">{{ isEn ? 'Looking to discuss a project or internship?' : "Envie d'échanger sur un projet ?" }}</h3>
        <p class="text-blue-100 text-sm">{{ isEn ? 'Available for an 18-week web development internship.' : 'Disponible pour un stage de 18 semaines en développement web.' }}</p>
      </div>
      <RouterLink to="/contact" class="px-6 py-3 rounded-xl font-bold bg-white text-blue-700 hover:bg-blue-50 transition-all text-center shrink-0 shadow-md">
        {{ t('hero.cta_contact') }}
      </RouterLink>
    </section>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { useI18n } from '../composables/useI18n'
import boxeImg from '../assets/boxe_cinematic.jpg'

const { t, isEn } = useI18n()
</script>
