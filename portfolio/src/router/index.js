import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Scolarite from '../views/Scolarite.vue'
import Activite from '../views/Activite.vue'
import Projets from '../views/Projets.vue'
import ProjetDetail from '../views/ProjetDetail.vue'
import Contact from "../views/Contact.vue";

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/scolarite', name: 'Scolarite', component: Scolarite },
  { path: '/activite', name: 'Activite', component: Activite },
  { path: '/projets', name: 'Projets', component: Projets },
  { path: '/projets/:id', name: 'ProjetDetail', component: ProjetDetail, props: true },
  { path: '/contact', name: 'Contact', component: Contact }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

