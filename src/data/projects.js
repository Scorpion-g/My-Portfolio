import sukaijo1 from '../assets/sukaijo_1.webp'
import sukaijo2 from '../assets/sukaijo_2.webp'
import sukaijo3 from '../assets/sukaijo_3.webp'
import sparcky1 from '../assets/sparcky_1.webp'
import sparcky2 from '../assets/sparcky_2.webp'
import sparcky3 from '../assets/sparcky_3.webp'
import sparcky_god_pres from '../assets/sparcky_god_presentation.png'
import sparcky_god_gallery1 from '../assets/sparcky_god_gallery_1.png'
import sparcky_god_gallery2 from '../assets/sparcky_god_gallery_2.png'
import sparckyFullstackCover from '../assets/sparcky_fullstack_mockup.jpg'
import ospiCloudCover from '../assets/ospi_playwright_mockup.jpg'
import aerostatCover from '../assets/aerostat_mockup.jpg'
import { computed } from 'vue'
import { useI18n } from '../composables/useI18n'

export const projects = [
  {
    id: 'sparcky',
    title: 'Sparcky — Écosystème SaaS Full-Stack : Bot Discord & Dashboard Web',
    shortTitle: 'Sparcky (SaaS Full-Stack)',
    featured: true,
    category: 'Full-Stack & Cloud',
    summary:
      "Conception, développement et déploiement en production d'un écosystème SaaS complet pour serveurs Discord : Bot Discord v14 haute performance, API REST Express/Node.js sécurisée par JWT, Dashboard d'administration React 18 / Vite / Tailwind multilingue, et base de données MongoDB, le tout conteneurisé sous Docker sur VPS Linux.",
    objectives:
      "Offrir aux administrateurs de communautés Discord une plateforme clé en main pour animer et gérer leurs serveurs : 28 commandes slash, modération automatisée avec auto-sanctions, économie virtuelle complète (casino, boutique, transferts), progression de niveaux XP avec cartes générées dynamiquement via Canvas, système de tickets de support avec export de transcripts, et tirages au sort (Giveaways) avec distribution automatique des gains en base de données (pièces, rôles, XP).",
    tech: 'React 18, Vite, Tailwind CSS, Node.js, Express.js, Discord.js v14, MongoDB / Mongoose, Docker Compose, Nginx SSL, REST API, JWT, i18n, Canvacord',
    team: 'Projet personnel d\'envergure (Conception, développement full-stack, DevOps & hébergement VPS solo).',
    duration: 'Projet majeur en production continue (2025 - 2026).',
    cardText:
      'Architecture monorepo complète : Bot Discord v14 (28 commandes slash), Dashboard React multilingue temps réel, API REST Express, base MongoDB et conteneurisation Docker sur VPS Linux.',
    tags: ['Full-Stack', 'React 18', 'Node.js', 'Discord.js v14', 'MongoDB', 'Docker', 'Vite', 'Tailwind CSS', 'API REST', 'VPS Linux'],
    cover: {
      src: sparckyFullstackCover,
      alt: 'Écosystème Sparcky - Dashboard Web & Bot Discord',
      badge: 'Full-Stack & Docker',
      caption: 'Dashboard d\'administration React et Bot Discord v14 déployés sous Docker sur VPS'
    },
    gallery: [
      {
        src: sparckyFullstackCover,
        alt: 'Vue d\'ensemble de l\'écosystème Sparcky',
        badge: 'Architecture Globale',
        caption: 'Dashboard Web React & Bot Discord haute performance connectés à l\'API REST'
      },
      {
        src: sparcky_god_pres,
        alt: 'Commandes interactives et profil du bot Discord',
        badge: 'Bot Discord v14',
        caption: '28 commandes slash avec composants interactifs (boutons, sélecteurs, modales)'
      },
      {
        src: sparcky_god_gallery1,
        alt: 'Module de modération et gestion des serveurs',
        badge: 'Modération & Rôles',
        caption: 'Auto-sanctions paramétrables (warn, mute, kick, ban) et logs d\'audit sécurisés'
      },
      {
        src: sparcky_god_gallery2,
        alt: 'Système d\'économie, niveaux XP et Giveaways',
        badge: 'Économie & Giveaways',
        caption: 'Économie intégrée, progression XP et giveaways avec attribution automatique des gains'
      }
    ],
    links: {
      github: 'https://github.com/Scorpion-g/Sparcky',
      live: 'https://sparcky.matteoriviere.fr'
    },
    highlights: [
      'Architecture Monorepo robuste avec package de base de données partagé (@sparcky/database)',
      'Dashboard React 18 multilingue (FR / EN / ES) avec OAuth2 Discord et contrôle en temps réel des serveurs',
      'API REST sécurisée par JWT avec rate-limiting, validations strictes et intégration Discord REST API',
      'Bot Discord v14 riche : 28 commandes slash, blindtest musical vocal, boutique virtuelle et tickets support',
      'Système de Giveaways automatisé avec distribution instantanée des récompenses (crédit pièces, points d\'XP, rôles)',
      'Déploiement en production sur VPS Linux avec Docker Compose et reverse-proxy Nginx avec chiffrement SSL'
    ],
    en: {
      title: 'Sparcky — Full-Stack SaaS Ecosystem: Discord Bot & Web Dashboard',
      shortTitle: 'Sparcky (Full-Stack SaaS)',
      category: 'Full-Stack & Cloud',
      summary:
        'Design, engineering, and production deployment of a comprehensive SaaS ecosystem for Discord servers: high-performance Discord.js v14 bot, Express.js / Node.js REST API secured with JWT, multilingual React 18 / Vite / Tailwind admin dashboard, and MongoDB database, all containerized with Docker on a Linux VPS.',
      objectives:
        'Provide Discord community owners with a turnkey platform to manage and engage their servers: 28 slash commands, automated moderation with auto-punishments, comprehensive virtual economy (casino, shop, currency transfers), XP leveling system with dynamically generated Canvas rank cards, support ticket management with transcript exports, and automated Giveaways with instant database reward distribution (coins, roles, XP).',
      tech: 'React 18, Vite, Tailwind CSS, Node.js, Express.js, Discord.js v14, MongoDB / Mongoose, Docker Compose, Nginx SSL, REST API, JWT, i18n, Canvacord',
      team: 'Major solo project (Architecture, full-stack development, DevOps & VPS hosting).',
      duration: 'Flagship production project (2025 - 2026).',
      cardText:
        'Complete monorepo architecture: Discord v14 bot (28 slash commands), real-time multilingual React dashboard, Express REST API, MongoDB, and Docker containerization on Linux VPS.',
      tags: ['Full-Stack', 'React 18', 'Node.js', 'Discord.js v14', 'MongoDB', 'Docker', 'Vite', 'Tailwind CSS', 'REST API', 'Linux VPS'],
      cover: {
        alt: 'Sparcky Ecosystem - Web Dashboard & Discord Bot',
        badge: 'Full-Stack & Docker',
        caption: 'React Admin Dashboard and Discord.js v14 Bot deployed via Docker Compose on VPS'
      },
      gallery: [
        {
          alt: 'Sparcky Ecosystem Global Architecture',
          badge: 'Global Architecture',
          caption: 'React Web Dashboard & high-performance Discord Bot connected to the REST API'
        },
        {
          alt: 'Interactive commands and Discord bot profile',
          badge: 'Discord.js v14 Bot',
          caption: '28 slash commands with rich interactive components (buttons, select menus, modals)'
        },
        {
          alt: 'Moderation module and server management',
          badge: 'Moderation & Roles',
          caption: 'Configurable auto-punishments (warn, mute, kick, ban) and secure audit logging'
        },
        {
          alt: 'Economy system, XP levels, and Giveaways',
          badge: 'Economy & Giveaways',
          caption: 'Integrated economy, XP progression, and automated giveaways with instant reward dispatch'
        }
      ],
      highlights: [
        'Robust Monorepo architecture with a shared database package (@sparcky/database)',
        'Multilingual React 18 dashboard (FR / EN / ES) with Discord OAuth2 and real-time server control',
        'REST API secured with JWT, rate-limiting, strict schema validation, and Discord REST API integration',
        'Feature-rich Discord.js v14 bot: 28 slash commands, voice music blind test, virtual store, and support tickets',
        'Automated Giveaway system with instant database reward distribution (coins, XP points, Discord roles)',
        'Production deployment on Linux VPS with Docker Compose and Nginx reverse proxy with SSL encryption'
      ]
    }
  },
  {
    id: 'aerostat',
    title: 'AéroStat — Guidage GPS temps réel & Météo pour montgolfières',
    shortTitle: 'AéroStat (GPS & Météo)',
    featured: true,
    category: 'Application Web & Mobile',
    summary:
      "Projet d'envergure de 3e année de BUT Informatique avec un client réel (pilote de montgolfière) : conception d'une plateforme de navigation GPS temps réel et météo hors-ligne pour aérostiers et équipiers au sol.",
    objectives:
      "Fournir aux pilotes un suivi télémétrique précis (transmission GPS toutes les 2 secondes), le téléchargement des prévisions météo Météo-France AROME dans un rayon de 40 km utilisable hors réseau en vol, le calcul de trajectoires en compétition et une interface d'administration web.",
    tech: 'PostgreSQL, GitLab CI/CD, Kubernetes, YouTrack, Leaflet, API AROME, Architecture temps réel',
    team: 'Équipe de 3 développeurs, gestion de projet agile avec le client (M. Lafourcade).',
    duration: 'Projet annuel de 3e année (en cours).',
    cardText:
      'Guidage GPS temps réel (2s), météo AROME hors-ligne et calcul de trajectoire pour montgolfières. Déploiement Kubernetes et gestion de projet sous YouTrack.',
    tags: ['Temps Réel', 'GPS / Cartographie', 'PostgreSQL', 'Kubernetes', 'GitLab CI', 'YouTrack', 'Météo AROME'],
    cover: {
      src: aerostatCover,
      alt: 'Plateforme AéroStat - Guidage télémétrique et GPS temps réel',
      badge: 'Temps réel & Kubernetes',
      caption: 'Télémétrie GPS temps réel (2s) et suivi de vol pour montgolfières'
    },
    gallery: [
      {
        src: aerostatCover,
        alt: 'Interface de télémétrie GPS et météo AROME',
        badge: 'Navigation & Météo',
        caption: 'Interface temps réel de navigation et de prévisions AROME'
      }
    ],
    highlights: [
      'Gestion de projet rigoureuse avec YouTrack : planification, méthode MoSCoW, anticipation des risques',
      'Transmission GPS en temps réel toutes les 2 secondes entre le ballon et le véhicule suiveur au sol',
      'Mise en cache des prévisions météo AROME pour un fonctionnement autonome en vol sans réseau mobile',
      'Utilisation pragmatique de l\'IA pour prototyper et automatiser les tâches complexes dans un cadre strict'
    ],
    en: {
      title: 'AéroStat — Real-Time GPS Tracking & Weather Platform for Hot-Air Balloons',
      shortTitle: 'AéroStat (GPS & Weather)',
      category: 'Web & Mobile Application',
      summary:
        'Major 3rd-year BUT Informatique team project for a real-world client (hot-air balloon pilot): design and implementation of a real-time GPS telemetry and offline weather navigation platform for pilots and ground chase crews.',
      objectives:
        'Provide pilots with precise telemetric tracking (GPS location transmitted every 2 seconds), offline download of Météo-France AROME forecasts within a 40 km radius for use during flight without cellular coverage, competition flight trajectory calculation, and a web admin dashboard.',
      tech: 'PostgreSQL, GitLab CI/CD, Kubernetes, YouTrack, Leaflet, AROME API, Real-time Architecture',
      team: 'Team of 3 developers, agile project management with the client (Mr. Lafourcade).',
      duration: 'Year-long 3rd-year capstone project (ongoing).',
      cardText:
        'Real-time GPS tracking (2s), offline AROME weather caching, and flight trajectory calculation for hot-air balloons. Kubernetes deployment and project management in YouTrack.',
      tags: ['Real-Time', 'GPS / Mapping', 'PostgreSQL', 'Kubernetes', 'GitLab CI', 'YouTrack', 'AROME Weather'],
      cover: {
        alt: 'AéroStat Platform - Telemetric tracking and real-time GPS',
        badge: 'Real-Time & Kubernetes',
        caption: 'Real-time GPS telemetry (every 2s) and flight tracking for hot-air balloons'
      },
      gallery: [
        {
          alt: 'GPS telemetry interface and AROME weather maps',
          badge: 'Navigation & Weather',
          caption: 'Real-time navigation interface and offline AROME forecast maps'
        }
      ],
      highlights: [
        'Rigorous project management with YouTrack: sprint planning, MoSCoW prioritization, proactive risk mitigation',
        'Real-time GPS telemetry broadcast every 2 seconds between the balloon and ground chase vehicle',
        'Offline caching of high-resolution AROME weather data for autonomous in-flight use with zero cell coverage',
        'Pragmatic use of AI to prototype and automate complex tasks within a disciplined engineering framework'
      ]
    }
  },
  {
    id: 'ospi-cloud-e2e',
    title: 'Ospi Cloud - Suite de tests E2E automatisés',
    shortTitle: 'Ospi Cloud (Tests E2E)',
    featured: true,
    category: 'Entreprise & QA',
    summary:
      "Conception et déploiement d'une infrastructure de tests bout en bout (E2E) chez Ospi Cloud à Lyon lors de mon stage de 2e année de BUT Informatique.",
    objectives:
      "Sécuriser les parcours utilisateurs critiques sur les plateformes web de l'entreprise, fiabiliser les déploiements continus et générer des rapports de conformité visuels pour les équipes techniques.",
    tech: 'Playwright, Allure Reporter, GitLab CI, JavaScript',
    team: 'Projet mené en immersion au sein de l’équipe Ospi Cloud.',
    duration: 'Stage de 8 semaines (2e année de BUT).',
    cardText:
      'Automatisation complète de tests E2E avec Playwright, rapports d\'exécution Allure et intégration continue via pipeline GitLab CI.',
    tags: ['Playwright', 'GitLab CI', 'Allure', 'JavaScript', 'E2E Testing'],
    cover: {
      src: ospiCloudCover,
      alt: 'Illustration de l’environnement de test et code Ospi Cloud',
      badge: 'Playwright & CI/CD',
      caption: 'Tests automatisés avec Playwright & pipeline GitLab CI'
    },
    gallery: [
      {
        src: ospiCloudCover,
        alt: 'Dashboard d\'exécution des tests Playwright et rapports Allure',
        badge: 'Playwright & Allure',
        caption: 'Exécution automatique à chaque push et reporting visuel Allure'
      }
    ],
    highlights: [
      'Réduction drastique du temps de validation manuelle avant mise en production',
      'Reporting automatisé et visuel via Allure',
      'Déclenchement automatique des suites de tests à chaque commit dans GitLab CI'
    ],
    en: {
      title: 'Ospi Cloud - Automated End-to-End (E2E) Test Suite',
      shortTitle: 'Ospi Cloud (E2E Testing)',
      category: 'Enterprise & QA',
      summary:
        'Design and deployment of an end-to-end (E2E) automated testing infrastructure at Ospi Cloud in Lyon during my 2nd-year BUT Informatique internship.',
      objectives:
        'Secure critical user workflows on enterprise web platforms, ensure high reliability across continuous deployments, and generate visual compliance reports for technical leadership.',
      tech: 'Playwright, Allure Reporter, GitLab CI, JavaScript',
      team: 'Internship project embedded within the Ospi Cloud engineering team.',
      duration: '8-week internship (2nd year of BUT).',
      cardText:
        'Complete E2E testing automation with Playwright, visual Allure execution reports, and continuous integration via GitLab CI pipelines.',
      tags: ['Playwright', 'GitLab CI', 'Allure', 'JavaScript', 'E2E Testing'],
      cover: {
        alt: 'Ospi Cloud testing environment illustration and codebase',
        badge: 'Playwright & CI/CD',
        caption: 'Automated testing with Playwright & GitLab CI continuous integration pipeline'
      },
      gallery: [
        {
          alt: 'Playwright test execution dashboard and Allure reports',
          badge: 'Playwright & Allure',
          caption: 'Automated test suite execution on every push with comprehensive Allure reporting'
        }
      ],
      highlights: [
        'Drastic reduction of manual verification time before production releases',
        'Automated visual reporting and execution metrics via Allure Reporter',
        'Automatic triggering of full test suites on every commit in GitLab CI'
      ]
    }
  },
  {
    id: 'sukaijo',
    title: 'Sukaijo - Jeu de société avec IHM desktop',
    shortTitle: 'Sukaijo',
    featured: true,
    category: 'Application Logicielle',
    summary:
      "Adaptation logicielle complète du jeu de société Skyjo développée en C# et .NET MAUI / XAML en 1re année de BUT Informatique.",
    objectives:
      "Concevoir une interface graphique réactive et fluide, modéliser les règles complexes du jeu en orienté objet, et assurer une gestion d'historique et de scores persistants.",
    tech: 'C#, .NET MAUI, XAML, Architecture MVC',
    team: 'Équipe de 3 développeurs.',
    duration: 'Projet académique de 3 mois.',
    cardText:
      'Application interactive avec interface XAML moderne, moteur de règles de cartes en C# et gestion d\'historique des parties.',
    tags: ['C#', '.NET MAUI', 'XAML', 'POO', 'Git'],
    cover: {
      src: sukaijo1,
      alt: 'Interface principale du jeu Sukaijo',
      badge: 'C# .NET MAUI',
      caption: "Page d'accueil et menu interactif du jeu Sukaijo"
    },
    gallery: [
      {
        src: sukaijo2,
        alt: 'Plateau et déroulement de la partie',
        badge: 'Gameplay',
        caption: 'Interface de jeu et affichage dynamique des cartes'
      },
      {
        src: sukaijo3,
        alt: 'Historique et statistiques des parties',
        badge: 'Scores',
        caption: 'Tableau des scores et récapitulatif des vainqueurs'
      }
    ],
    highlights: [
      'Conception d’un moteur de règles de cartes robuste',
      'Architecture modulaire facilitant l’évolution des fonctionnalités',
      'Collaboration en équipe avec Git et revues de code'
    ],
    en: {
      title: 'Sukaijo - Card Board Game with Desktop GUI',
      shortTitle: 'Sukaijo',
      category: 'Software Application',
      summary:
        'Full software adaptation of the Skyjo card game engineered in C# and .NET MAUI / XAML during my 1st year of BUT Informatique.',
      objectives:
        'Design a responsive and fluid graphical user interface, model complex card game rules using object-oriented principles, and provide persistent match history and score tracking.',
      tech: 'C#, .NET MAUI, XAML, MVC Architecture',
      team: 'Team of 3 developers.',
      duration: '3-month academic team project.',
      cardText:
        'Interactive desktop application with modern XAML UI, robust C# card game rule engine, and persistent match history tracking.',
      tags: ['C#', '.NET MAUI', 'XAML', 'OOP', 'Git'],
      cover: {
        alt: 'Sukaijo main game menu interface',
        badge: 'C# .NET MAUI',
        caption: 'Home screen and interactive setup menu for Sukaijo'
      },
      gallery: [
        {
          alt: 'Game board and active gameplay match',
          badge: 'Gameplay',
          caption: 'Interactive board and dynamic card reveal animations'
        },
        {
          alt: 'Match history and player statistics',
          badge: 'Scores & Stats',
          caption: 'Leaderboard, score history, and winner statistics recap'
        }
      ],
      highlights: [
        'Engineered a robust card game rule engine in object-oriented C#',
        'Modular architecture facilitating seamless feature expansion',
        'Collaborative Git team workflow with code reviews and branch management'
      ]
    }
  },
  {
    id: 'sparcky-initial',
    title: 'Sparcky v1 - Premier bot communautaire',
    shortTitle: 'Sparcky v1',
    featured: false,
    category: 'Automatisation & Backend',
    summary:
      "Premier projet d'automatisation réalisé en autonomie pour animer et modérer des communautés de joueurs.",
    objectives:
      "Comprendre les bases des bots événementiels, créer des mini-jeux textuels interactifs (Pierre-Feuille-Ciseaux) et un système de suggestions.",
    tech: 'Logique applicative événementielle, Webhooks',
    team: 'Projet personnel initial.',
    duration: 'Projet d\'été initial (2024).',
    cardText:
      'Premier bot communautaire avec mini-jeux, boîte à idées et commandes de modération de base.',
    tags: ['Automatisation', 'Mini-jeux', 'Algorithmique'],
    cover: {
      src: sparcky1,
      alt: 'Interface du bot Discord Sparcky',
      badge: 'Prototype Initial',
      caption: 'Interface de commandes initiales'
    },
    gallery: [
      {
        src: sparcky2,
        alt: 'Mini-jeu Pierre Feuille Ciseaux',
        badge: 'Mini-jeu',
        caption: 'Interaction de jeu textuel en temps réel'
      },
      {
        src: sparcky3,
        alt: 'Boîte à suggestions communautaires',
        badge: 'Suggestions',
        caption: 'Collecte et filtrage des idées des membres'
      }
    ],
    highlights: [
      'Première immersion dans la logique d’automatisation',
      'Prise en main des interactions utilisateurs et flux d’entrées'
    ],
    en: {
      title: 'Sparcky v1 - Initial Community Bot',
      shortTitle: 'Sparcky v1',
      category: 'Automation & Backend',
      summary:
        'First self-directed automation project built from scratch to animate and moderate online gaming communities.',
      objectives:
        'Master the fundamentals of event-driven architectures, create interactive text mini-games (Rock-Paper-Scissors), and build a community suggestion box.',
      tech: 'Event-driven Application Logic, Webhooks',
      team: 'Initial personal project.',
      duration: 'Summer project (2024).',
      cardText:
        'First community bot featuring mini-games, suggestion box, and essential moderation commands.',
      tags: ['Automation', 'Mini-games', 'Algorithms'],
      cover: {
        alt: 'Sparcky initial Discord bot interface',
        badge: 'Initial Prototype',
        caption: 'First iteration command interface'
      },
      gallery: [
        {
          alt: 'Rock Paper Scissors mini-game',
          badge: 'Mini-Game',
          caption: 'Real-time text-based mini-game interaction'
        },
        {
          alt: 'Community suggestion box',
          badge: 'Suggestions',
          caption: 'Member suggestion collection and filtering system'
        }
      ],
      highlights: [
        'First practical immersion into event-driven software architecture',
        'Hands-on experience with user input handling and interactive state flows'
      ]
    }
  }
]

export function useProjects() {
  const { isEn } = useI18n()

  const localizedProjects = computed(() => {
    return projects.map((p) => {
      if (!isEn.value || !p.en) return p
      return {
        ...p,
        title: p.en.title || p.title,
        shortTitle: p.en.shortTitle || p.shortTitle,
        category: p.en.category || p.category,
        summary: p.en.summary || p.summary,
        objectives: p.en.objectives || p.objectives,
        tech: p.en.tech || p.tech,
        team: p.en.team || p.team,
        duration: p.en.duration || p.duration,
        cardText: p.en.cardText || p.cardText,
        tags: p.en.tags || p.tags,
        highlights: p.en.highlights || p.highlights,
        cover: {
          ...p.cover,
          alt: p.en.cover?.alt || p.cover.alt,
          badge: p.en.cover?.badge || p.cover.badge,
          caption: p.en.cover?.caption || p.cover.caption
        },
        gallery: p.gallery.map((g, idx) => ({
          ...g,
          alt: p.en.gallery?.[idx]?.alt || g.alt,
          badge: p.en.gallery?.[idx]?.badge || g.badge,
          caption: p.en.gallery?.[idx]?.caption || g.caption
        }))
      }
    })
  })

  return {
    projects: localizedProjects
  }
}
