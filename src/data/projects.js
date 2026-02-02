import sukaijo1 from '../assets/sukaijo_1.webp'
import sukaijo2 from '../assets/sukaijo_2.webp'
import sukaijo3 from '../assets/sukaijo_3.webp'
import sparcky1 from '../assets/sparcky_1.webp'
import sparcky2 from '../assets/sparcky_2.webp'
import sparcky3 from '../assets/sparcky_3.webp'
import codeImg from '../assets/code.jpg'
import devoirImg from '../assets/devoir.jpg'
import sparcky_god_pres from '../assets/sparcky_god_presentation.png'
import sparcky_god_gallery1 from '../assets/sparcky_god_gallery_1.png'
import sparcky_god_gallery2 from '../assets/sparcky_god_gallery_2.png'
export const projects = [
  {
    id: 'sukaijo',
    title: 'Projet Sukaijo',
    shortTitle: 'Sukaijo',
    summary:
      "Le projet Sukaijo est un projet scolaire que j'ai fait durant ma première année de BUT.",
    objectives:
      "Le but du projet est de créer un jeu de société informatiquement. Nous avons choisi de faire le jeu de société Skyjo que nous avons adapté en application avec IHM et renommé Sukaijo.",
    tech: 'C# .NET xaml',
    team: 'Nous étions 3 pour réaliser ce projet.',
    duration: 'Le projet a duré 3 mois.',
    cover: {
      src: sukaijo1,
      alt: 'Interface principale du jeu Sukaijo',
      badge: 'C# .NET maui',
      caption: "Page d'accueil du jeu Sukaijo"
    },
    gallery: [
      {
        src: sukaijo2,
        alt: 'Page de jeu Sukaijo',
        badge: 'C# .NET maui'
      },
      {
        src: sukaijo3,
        alt: 'Page historique des parties',
        badge: 'C# .NET maui'
      }
    ]
  },
  {
    id: 'sparcky',
    title: 'Projet Sparcky',
    shortTitle: 'Sparcky',
    summary:
      "Le projet Sparcky est un projet personnel que j'ai fait durant les vacances d'été de troisième.",
    objectives:
      "Le but du projet est de créer un bot discord pour la gestion, la modération et l'animation de serveur discord.",
    tech: 'Codage dans une application avec un language interne.',
    team: 'Le projet a été fait seul.',
    duration: 'Le projet a duré 3 mois.',
    cover: {
      src: sparcky1,
      alt: 'Interface principale du bot Discord Sparcky',
      badge: 'Discord.js',
      caption: 'Interface de commandes du bot Sparcky'
    },
    gallery: [
      {
        src: sparcky2,
        alt: "Panneau d'administration",
        badge: 'Pierre feuille ciseaux',
        caption: 'Commande de jeu Pierre Feuille Ciseaux'
      },
      {
        src: sparcky3,
        alt: 'Système de modération',
        badge: 'Suggestion',
        caption: 'Système de suggestion pour les utilisateurs'
      }
    ]
  },
  {
    id: 'sparcky-god',
    title: 'Sparcky God',
    shortTitle: 'Sparcky God',
    summary:
      "Bot Discord personnel oriente gestion/automatisation, avec commandes custom et outils d'administration.",
    objectives:
      "Concevoir un bot Discord plus complet pour automatiser la moderation, gerer des commandes utiles et proposer des fonctions d'animation.",
    tech: 'Discord.js, JavaScript, API Discord',
    team: 'Projet personnel (solo).',
    duration: 'Projet evolutif sur plusieurs semaines.',
    cardText: 'Bot Discord plus complet pour gestion, moderation et commandes custom.',
    cover: {
      src: sparcky_god_pres,
      alt: 'Illustration du profile pour le projet Sparcky God',
      badge: 'Discord.js',
      caption: 'Apercu du projet Sparcky God'
    },
    gallery: [
      {
        src: sparcky_god_gallery1,
        alt: 'Commande utilitaire de gestion des rôles',
        badge: 'Rôles'
      },
      {
        src: sparcky_god_gallery2,
        alt: 'Exemples de commandes et modules',
        badge: 'Commandes'
      }
    ],
    links: {
      github: 'https://github.com/Scorpion-g/Sparcky_god'
    }
  }
]
