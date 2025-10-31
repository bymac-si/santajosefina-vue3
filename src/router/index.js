import { createRouter, createWebHashHistory } from 'vue-router'
import { getAuthUser } from '@/services/appsheet'

// === Vistas principales ===
const Home          = () => import('@/views/Home.vue')
const Servicios     = () => import('@/views/Servicios.vue')
const Copropiedades = () => import('@/views/Copropiedades.vue')
const Contacto      = () => import('@/views/Contacto.vue')

// === Vistas de autenticación ===
const Login         = () => import('@/views/Login.vue')
const Panel         = () => import('@/views/Panel.vue')

// === Configuración del router ===
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/',              name: 'home',          component: Home },
    { path: '/servicios',     name: 'servicios',     component: Servicios },
    { path: '/copropiedades', name: 'copropiedades', component: Copropiedades },
    { path: '/contacto',      name: 'contacto',      component: Contacto },
    { path: '/login',         name: 'login',         component: Login },
    { path: '/panel',         name: 'panel',         component: Panel, meta: { requiresAuth: true } },
    { path: '/:pathMatch(.*)*', redirect: '/' } // fallback
  ],
  scrollBehavior() {
    return { top: 0 }
  }
})

// === Protección de rutas ===
router.beforeEach((to) => {
  const u = getAuthUser()

  // Requiere autenticación
  if (to.meta.requiresAuth && !u) {
    return { name: 'login' }
  }

  // Control de rol (si lo especificas en meta.role)
  if (to.meta.role) {
    const roleNeed = String(to.meta.role).toLowerCase()
    const roleUser = String(u?.rol || '').toLowerCase()
    if (roleNeed && roleNeed !== roleUser) {
      return { name: 'home' }
    }
  }
})

export default router