import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Servicios from '../views/Servicios.vue'
import Copropiedades from '../views/Copropiedades.vue'
import Contacto from '../views/Contacto.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/servicios', name: 'Servicios', component: Servicios },
  { path: '/copropiedades', name: 'Copropiedades', component: Copropiedades },
  { path: '/contacto', name: 'Contacto', component: Contacto },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() { return { top: 0 } }
})

export default router
