import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Scolarite from '../views/Scolarite.vue'
import Activite from '../views/Activite.vue'
import Projets from '../views/Projets.vue'
import ProjetDetail from '../views/ProjetDetail.vue'
import Contact from '../views/Contact.vue'
import CVView from '../views/CVView.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/cv', name: 'CV', component: CVView },
  { path: '/scolarite', name: 'Scolarite', component: Scolarite },
  { path: '/activite', name: 'Activite', component: Activite },
  { path: '/projets', name: 'Projets', component: Projets },
  { path: '/projets/:id', name: 'ProjetDetail', component: ProjetDetail, props: true },
  { path: '/contact', name: 'Contact', component: Contact },
  // Redirection des routes inconnues vers l'accueil
  { path: '/:pathMatch(.*)*', redirect: '/' }
]

const router = createRouter({
  // Utilise dynamiquement la base définie par Vite
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    return { top: 0, behavior: 'smooth' }
  }
})

export default router
