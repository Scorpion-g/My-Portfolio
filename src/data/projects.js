import sukaijo1 from '../assets/sukaijo_1.webp'
import sukaijo2 from '../assets/sukaijo_2.webp'
import sukaijo3 from '../assets/sukaijo_3.webp'
import sparcky1 from '../assets/sparcky_1.webp'
import sparcky2 from '../assets/sparcky_2.webp'
import sparcky3 from '../assets/sparcky_3.webp'
import sparcky_god_pres from '../assets/sparcky_god_presentation.png'
import sparcky_god_gallery1 from '../assets/sparcky_god_gallery_1.png'
import sparcky_god_gallery2 from '../assets/sparcky_god_gallery_2.png'
import ospiCloudCover from '../assets/ospi_playwright_mockup.jpg'
import aerostatCover from '../assets/aerostat_mockup.jpg'

export const projects = [
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
    id: 'sparcky-god',
    title: 'Sparcky God - Bot Discord avancé d\'administration & utilitaires',
    shortTitle: 'Sparcky God',
    featured: true,
    category: 'Automatisation & Backend',
    summary:
      "Bot Discord modulaire et performant avec gestion d'événements asynchrones, modération automatisée et utilitaires communautaires.",
    objectives:
      "Développer une architecture robuste basée sur l'API Discord, avec gestion des rôles, logs automatisés, filtres anti-spam et commandes personnalisées.",
    tech: 'JavaScript, Node.js, Discord.js, REST API',
    team: 'Projet personnel (conception & développement solo).',
    duration: 'Développement évolutif.',
    cardText:
      'Bot Discord orienté gestion, modération avancée et commandes utilitaires propulsé par Node.js et l\'API Discord.',
    tags: ['JavaScript', 'Node.js', 'Discord.js', 'API REST', 'Async'],
    cover: {
      src: sparcky_god_pres,
      alt: 'Aperçu du bot Discord Sparcky God',
      badge: 'Discord.js',
      caption: 'Profil et commandes interactives de Sparcky God'
    },
    gallery: [
      {
        src: sparcky_god_gallery1,
        alt: 'Gestion avancée des permissions et rôles',
        badge: 'Rôles & Sécurité',
        caption: 'Module de configuration des permissions serveur'
      },
      {
        src: sparcky_god_gallery2,
        alt: 'Commandes utilitaires et interactions',
        badge: 'Utilitaires',
        caption: 'Suite de commandes interactives et animations'
      }
    ],
    links: {
      github: 'https://github.com/Scorpion-g/Sparcky_god'
    },
    highlights: [
      'Gestion asynchrone des flux d’événements en temps réel',
      'Système de logs et modération proactive',
      'Code source disponible et versionné sur GitHub'
    ]
  },
  {
    id: 'sparcky',
    title: 'Sparcky - Premier bot communautaire',
    shortTitle: 'Sparcky',
    featured: false,
    category: 'Automatisation & Backend',
    summary:
      "Premier projet d'automatisation réalisé en autonomie pour animer et modérer des communautés de joueurs.",
    objectives:
      "Comprendre les bases des bots événementiels, créer des mini-jeux textuels interactifs (Pierre-Feuille-Ciseaux) et un système de suggestions.",
    tech: 'Logique applicative événementielle, Webhooks',
    team: 'Projet personnel.',
    duration: 'Projet d\'été initial.',
    cardText:
      'Premier bot communautaire avec mini-jeux, boîte à idées et commandes de modération de base.',
    tags: ['Automatisation', 'Mini-jeux', 'Algorithmique'],
    cover: {
      src: sparcky1,
      alt: 'Interface du bot Discord Sparcky',
      badge: 'Bot Initial',
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
