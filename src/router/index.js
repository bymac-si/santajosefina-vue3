import { createRouter, createWebHashHistory } from 'vue-router'
const Home          = () => import('@/views/Home.vue')
const Servicios     = () => import('@/views/Servicios.vue')
const Copropiedades = () => import('@/views/Copropiedades.vue')
const Contacto      = () => import('@/views/Contacto.vue')

export default createRouter({
  history: createWebHashHistory(),        // gh-pages friendly
  routes: [
    { path: '/',              name: 'home',          component: Home },
    { path: '/servicios',     name: 'servicios',     component: Servicios },
    { path: '/copropiedades', name: 'copropiedades', component: Copropiedades },
    { path: '/contacto',      name: 'contacto',      component: Contacto },
    { path: '/:pathMatch(.*)*', redirect: '/' },     // fallback
  ],
  scrollBehavior() { return { top: 0 } }
})