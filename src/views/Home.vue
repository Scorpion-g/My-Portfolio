<template>
  <div class="space-y-24 sm:space-y-32">
    <!-- 1. HERO SECTION (Spacieuse, directe et fluide) -->
    <section class="pt-6 sm:pt-14 max-w-5xl">
      <!-- Badge Disponibilité -->
      <div class="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs sm:text-sm font-semibold mb-6 shadow-xs">
        <span class="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
        <span v-if="!isEn">Stage web (18 sem.) : 15/02/27 au 07/05/27 & 28/06/27 au 15/08/27</span>
        <span v-else>18-week Internship : Feb 15 - May 07 & June 28 - Aug 15, 2027</span>
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
        <span v-if="!isEn">
          Étudiant en <strong>3e année de BUT Informatique</strong> à Aubière.
          Passionné de code depuis ma découverte de Linux et Vim au collège, je conçois des applications web modernes, performantes et bien architecturées.
          À la recherche d'un stage de 18 semaines du <strong>15/02/2027 au 07/05/2027</strong> et du <strong>28/06/2027 au 15/08/2027</strong>.
        </span>
        <span v-else>
          Final-year <strong>Computer Science Undergraduate</strong> in Aubière, France.
          Passionate about clean software engineering since discovering Linux and Vim. Building fast, resilient and user-focused web applications.
          Seeking an 18-week internship from <strong>February 15 to May 7, 2027</strong> and <strong>June 28 to August 15, 2027</strong>.
        </span>
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
              Aubière (63)
            </div>
          </div>
          <div class="mt-6 space-y-1 text-center sm:text-left">
            <h3 class="text-xl font-bold text-slate-900 dark:text-white">Mattéo Rivière</h3>
            <p class="text-sm text-slate-500 dark:text-slate-400">3e année BUT Informatique</p>
            <p class="text-xs text-blue-600 dark:text-blue-400 font-medium">IUT Clermont Auvergne</p>
          </div>
        </div>

        <!-- Récit personnel & passion -->
        <div class="lg:col-span-8 space-y-6 text-slate-700 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
          <div class="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">
            <span>01</span>
            <span class="w-8 h-px bg-blue-600/40"></span>
            <span>À propos de moi</span>
          </div>

          <h2 class="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Curieux sous le capot, rigoureux dans la livraison
          </h2>

          <p>
            J'ai attrapé le virus de l'informatique en 3e, le jour où j'ai installé ma première distribution Linux et commencé à apprivoiser l'éditeur Vim. Ce n'était pas juste pour changer de système d'exploitation : je voulais comprendre ce qui s'exécutait en coulisses, maîtriser mon environnement et écrire du code proprement.
          </p>

          <p>
            Aujourd'hui, en fin de cursus à l'IUT Clermont Auvergne, je transpose cette même curiosité dans le développement web moderne. J'aime concevoir des architectures claires avec <strong>Vue.js, Angular, Symfony (PHP), Node.js, Tailwind et PostgreSQL</strong>, tout en m'assurant que chaque brique fonctionne grâce aux tests automatisés avec <strong>Playwright</strong>.
          </p>

          <!-- Citation / Devise de travail -->
          <div class="pl-4 sm:pl-6 border-l-2 border-blue-500 italic text-slate-600 dark:text-slate-300 text-base sm:text-lg bg-blue-50/40 dark:bg-blue-950/20 py-3 rounded-r-xl">
            « Pour moi, un bon projet web commence par une anticipation minutieuse des besoins et se termine par un code testé, stable et agréable à utiliser. »
          </div>
        </div>
      </div>
    </article>

    <!-- 4. ARTICLE 2 : PROJETS PHARES (Incrustés directement avec respiration) -->
    <section class="border-t border-slate-200/80 dark:border-white/[0.08] pt-12 sm:pt-16 space-y-16">
      <div class="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <div class="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400 mb-2">
            <span>02</span>
            <span class="w-8 h-px bg-blue-600/40"></span>
            <span>Réalisations clés</span>
          </div>
          <h2 class="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Des projets concrets, de la conception au déploiement
          </h2>
        </div>
        <RouterLink to="/projets" class="text-sm font-bold text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-2 self-start sm:self-auto">
          <span>Explorer tous mes projets</span>
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
            Projet 3e année • En cours
          </span>
        </div>

        <div class="lg:col-span-6 space-y-4">
          <div class="flex items-center gap-2 text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide">
            <span>Client réel : Pilote de montgolfière</span>
            <span>•</span>
            <span>Équipe de 3 devs</span>
          </div>

          <h3 class="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
            AéroStat — Guidage GPS temps réel & Météo AROME
          </h3>

          <p class="text-slate-700 dark:text-slate-300 text-base leading-relaxed">
            Application d'assistance au vol pour montgolfières. Elle gère la transmission de position GPS en direct toutes les 2 secondes entre le pilote en l'air et ses équipiers de récupération au sol, l'intégration des données météo haute précision de Météo-France (modèle AROME) avec mise en cache pour usage hors ligne, et un pilotage agile de projet sous YouTrack.
          </p>

          <div class="flex flex-wrap gap-2 pt-1">
            <span class="badge-tag">Télémétrie 2s</span>
            <span class="badge-tag">Météo AROME</span>
            <span class="badge-tag">PostgreSQL</span>
            <span class="badge-tag">Kubernetes</span>
            <span class="badge-tag">GitLab CI</span>
            <span class="badge-tag">YouTrack</span>
          </div>

          <div class="pt-3">
            <RouterLink to="/projets/aerostat" class="btn-primary text-sm py-2.5 px-5">
              <span>Découvrir l'étude de cas</span>
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
            <span>Stage 2e année</span>
            <span>•</span>
            <span>8 semaines • Lyon</span>
          </div>

          <h3 class="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
            Automatisation de tests E2E avec Playwright (OSPI Cloud)
          </h3>

          <p class="text-slate-700 dark:text-slate-300 text-base leading-relaxed">
            Durant mon stage de 8 semaines chez OSPI Cloud, j'ai conçu une suite complète de tests de bout en bout avec Playwright. L'objectif était de fiabiliser les parcours utilisateurs critiques et de bloquer les régressions avant la production grâce à des pipelines d'intégration continue GitLab CI et des rapports d'exécution visuels Allure.
          </p>

          <div class="flex flex-wrap gap-2 pt-1">
            <span class="badge-tag">Playwright</span>
            <span class="badge-tag">GitLab CI/CD</span>
            <span class="badge-tag">Allure Reporter</span>
            <span class="badge-tag">JavaScript</span>
            <span class="badge-tag">Assurance Qualité</span>
          </div>

          <div class="pt-3">
            <RouterLink to="/projets/ospi-cloud-e2e" class="btn-primary text-sm py-2.5 px-5">
              <span>Voir le retour d'expérience</span>
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
            Stage 2e année • Lyon
          </span>
        </div>
      </article>
    </section>

    <!-- 5. ARTICLE 3 : MÉTHODE, ANTICIPATION & IA (Article éditorial avec contenu fluide) -->
    <article class="border-t border-slate-200/80 dark:border-white/[0.08] pt-12 sm:pt-16 space-y-10">
      <div class="max-w-3xl">
        <div class="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-indigo-600 dark:text-indigo-400 mb-2">
          <span>03</span>
          <span class="w-8 h-px bg-indigo-600/40"></span>
          <span>Méthode de travail</span>
        </div>
        <h2 class="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Anticipation rigoureuse & Automatisation intelligente
        </h2>
        <p class="mt-3 text-slate-700 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
          Développer ne se résume pas à écrire des lignes de code : c'est avant tout savoir où l'on va, lever les blocages avant qu'ils n'arrivent et s'équiper des bons leviers pour avancer vite sans casser l'existant.
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
              Planifier et découper pour ne jamais subir
            </h3>
          </div>
          <p class="text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
            Dans chacun de mes projets, qu'il s'agisse d'un projet solo ou en équipe comme AéroStat, j'applique un cadrage strict : formalisation des besoins en User Stories, priorisation MoSCoW (Must, Should, Could, Won't) et suivi précis des tâches sur YouTrack. Anticiper les dépendances en amont évite le stress des retards et assure une livraison sereine.
          </p>
          <div class="flex flex-wrap gap-2 text-xs pt-1">
            <span class="badge-tag">Priorisation MoSCoW</span>
            <span class="badge-tag">Gestion YouTrack</span>
            <span class="badge-tag">Jalons stricts</span>
          </div>
        </div>

        <!-- Axe 2 : IA pragmatique -->
        <div class="space-y-4">
          <div class="flex items-center gap-3">
            <span class="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center text-lg">
              <i class="fa-solid fa-wand-magic-sparkles"></i>
            </span>
            <h3 class="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
              L'IA comme démultiplicateur technique
            </h3>
          </div>
          <p class="text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
            Je considère l'intelligence artificielle comme un véritable levier d'accélération pour les tâches répétitives ou complexes : prototyper rapidement une interface, concevoir des jeux de tests exhaustifs ou automatiser des scripts fastidieux. L'objectif n'est pas de déléguer la réflexion, mais de gagner du temps pour se concentrer sur l'architecture et la qualité finale.
          </p>
          <div class="flex flex-wrap gap-2 text-xs pt-1">
            <span class="badge-tag">Prototypage rapide</span>
            <span class="badge-tag">Tests exhaustifs</span>
            <span class="badge-tag">Architecture maîtrisée</span>
          </div>
        </div>
      </div>
    </article>

    <!-- 6. ARTICLE 4 : ÉQUILIBRE & QUOTIDIEN (Boxe & Musique Feel-Good) -->
    <article class="border-t border-slate-200/80 dark:border-white/[0.08] pt-12 sm:pt-16 space-y-10">
      <div class="max-w-3xl">
        <div class="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-amber-600 dark:text-amber-400 mb-2">
          <span>04</span>
          <span class="w-8 h-px bg-amber-600/40"></span>
          <span>Équilibre & Personnalité</span>
        </div>
        <h2 class="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Ce qui rythme mes journées
        </h2>
        <p class="mt-3 text-slate-700 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
          Pour être efficace derrière son écran, il faut savoir trouver son rythme et son ancrage. Voici ce qui nourrit mon énergie au quotidien :
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
              6 ans de boxe anglaise
            </h3>
          </div>
          <p class="text-slate-700 dark:text-slate-300 text-base leading-relaxed">
            Sur le ring comme devant un terminal, pas de place pour la précipitation. La boxe m'a transmis la discipline de l'entraînement, l'humilité face à la difficulté et surtout le sang-froid indispensable pour ne pas céder à la panique quand un bug complexe survient.
          </p>
          <div class="flex gap-2 text-xs pt-1">
            <span class="badge-tag"><i class="fa-solid fa-shield text-amber-500"></i> Sang-froid</span>
            <span class="badge-tag"><i class="fa-solid fa-bullseye text-blue-500"></i> Persévérance</span>
            <span class="badge-tag"><i class="fa-solid fa-bolt text-emerald-500"></i> Discipline</span>
          </div>
        </div>

        <!-- Musique feel-good -->
        <div class="p-6 sm:p-7 rounded-2xl bg-gradient-to-br from-pink-500/5 to-purple-500/5 dark:from-pink-500/10 dark:to-purple-500/10 border border-pink-500/20 space-y-4">
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-2.5 font-bold text-slate-900 dark:text-white text-lg">
              <i class="fa-solid fa-headphones text-pink-500"></i>
              <span>Dans mon casque quand je code</span>
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
            Pour coder avec le sourire et maintenir un flow régulier : une playlist sans complexe mêlant la <strong>White Girl Music des années 2000/2010</strong> (pop entraînante, refrains ultra catchy) et les grands classiques de <strong>Jean-Jacques Goldman</strong>.
          </p>
          <span class="text-xs font-semibold text-pink-600 dark:text-pink-400 block">
            Du 100% Feel-Good pour abattre du travail avec le sourire !
          </span>
        </div>
      </div>
    </article>

    <!-- 7. SECTION CONTACT / CTA FINAL -->
    <section class="p-8 sm:p-14 rounded-3xl bg-gradient-to-br from-blue-600 to-indigo-700 text-white shadow-xl flex flex-col sm:flex-row items-center justify-between gap-8">
      <div class="space-y-3 text-center sm:text-left max-w-2xl">
        <span class="inline-block px-3 py-1 rounded-full bg-white/20 text-xs font-semibold uppercase tracking-wider backdrop-blur-md">
          Stage de 18 semaines • Du 15/02/27 au 07/05/27 & du 28/06/27 au 15/08/27
        </span>
        <h2 class="text-2xl sm:text-4xl font-extrabold tracking-tight">
          Un projet ou une mission de stage à me proposer ?
        </h2>
        <p class="text-blue-100 text-sm sm:text-base leading-relaxed">
          Je suis disponible pour un stage de 18 semaines découpé en deux périodes (du 15 février au 7 mai 2027 et du 28 juin au 15 août 2027). Réponse assurée sous 24h.
        </p>
      </div>

      <div class="flex flex-col sm:flex-row gap-3 w-full sm:w-auto shrink-0">
        <RouterLink to="/contact" class="px-6 py-3.5 rounded-xl font-bold bg-white text-blue-700 hover:bg-blue-50 transition-all text-center shadow-md">
          Prendre contact
        </RouterLink>
        <RouterLink to="/cv" class="px-6 py-3.5 rounded-xl font-bold bg-blue-800/60 hover:bg-blue-800 text-white border border-white/20 transition-all text-center">
          Voir mon CV
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
