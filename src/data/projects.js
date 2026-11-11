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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
  }
]
