import { ref, computed } from 'vue'

const getInitialLang = () => {
  if (typeof window !== 'undefined') {
    const saved = localStorage.getItem('portfolio_lang')
    if (saved === 'en' || saved === 'fr') return saved
    if (navigator.language && navigator.language.startsWith('en')) {
      return 'en'
    }
  }
  return 'fr'
}

const currentLang = ref(getInitialLang())

export const messages = {
  fr: {
    nav: {
      home: 'Accueil',
      projects: 'Projets',
      education: 'Scolarité',
      internship: 'Stage (18 sem.)',
      activities: 'Activités',
      contact: 'Contact',
      cv: 'CV',
      search: 'Rechercher',
      theme_light: 'Passer au mode clair',
      theme_dark: 'Passer au mode sombre',
      lang_toggle: 'Switch to English'
    },
    hero: {
      badge: 'Étudiant en 3e année BUT Informatique • IUT Aubière',
      status: 'À la recherche d’un stage de fin d’études de 18 semaines (2027)',
      greeting: 'Bonjour, je suis',
      name: 'Mattéo Rivière',
      title: 'Développeur Web & Logiciel',
      pitch: 'Passionné par la conception d\'applications modernes et performantes. Spécialisé en Vue.js, Symfony, Angular, PostgreSQL et l\'assurance qualité logicielle avec tests E2E Playwright.',
      cta_projects: 'Voir mes projets',
      cta_cv: 'Consulter mon CV',
      cta_contact: 'Me contacter'
    },
    quick: {
      stage_title: 'Disponibilité Stage',
      stage_dates: '18 semaines en 2 périodes (15 fév - 07 mai / 28 juin - 15 août 2027)',
      location: 'Aubière / Clermont-Ferrand / Lyon / Hybride'
    }
  },
  en: {
    nav: {
      home: 'Home',
      projects: 'Projects',
      education: 'Education',
      internship: 'Internship (18 w.)',
      activities: 'Activities',
      contact: 'Contact',
      cv: 'Resume',
      search: 'Search',
      theme_light: 'Switch to Light Mode',
      theme_dark: 'Switch to Dark Mode',
      lang_toggle: 'Passer en Français'
    },
    hero: {
      badge: '3rd Year Computer Science Undergraduate • IUT Aubière',
      status: 'Looking for an 18-week final year internship (2027)',
      greeting: "Hello, I am",
      name: 'Mattéo Rivière',
      title: 'Web & Software Developer',
      pitch: 'Passionate about building fast, reliable, modern applications. Specialized in Vue.js, Symfony, Angular, PostgreSQL, and software quality assurance with Playwright E2E tests.',
      cta_projects: 'Explore my projects',
      cta_cv: 'View my resume',
      cta_contact: 'Get in touch'
    },
    quick: {
      stage_title: 'Internship Availability',
      stage_dates: '18 weeks in 2 terms (Feb 15 - May 07 / June 28 - Aug 15, 2027)',
      location: 'Aubière / Clermont-Ferrand / Lyon / Hybrid'
    }
  }
}

export function useI18n() {
  const toggleLang = () => {
    currentLang.value = currentLang.value === 'fr' ? 'en' : 'fr'
    if (typeof window !== 'undefined') {
      localStorage.setItem('portfolio_lang', currentLang.value)
    }
  }

  const setLang = (lang) => {
    if (lang === 'fr' || lang === 'en') {
      currentLang.value = lang
      if (typeof window !== 'undefined') {
        localStorage.setItem('portfolio_lang', lang)
      }
    }
  }

  const t = (path) => {
    const keys = path.split('.')
    let current = messages[currentLang.value] || messages.fr
    for (const key of keys) {
      if (current && current[key] !== undefined) {
        current = current[key]
      } else {
        return path
      }
    }
    return current
  }

  const isEn = computed(() => currentLang.value === 'en')

  return {
    lang: currentLang,
    isEn,
    toggleLang,
    setLang,
    t
  }
}
