<template>
  <header :class="['sj-navbar', overHero ? 'over-hero' : 'scrolled']" id="mainHeader">
    <div class="container-narrow nav-inner">
      <RouterLink class="navbar-brand" to="/" aria-label="Inicio">
        <img :src="base + 'assets/img/logo_santajosefina.png'" alt="Santa Josefina">
      </RouterLink>

      <nav class="nav-links d-none d-md-flex">
        <RouterLink to="/servicios">SERVICIOS</RouterLink>
        <RouterLink to="/copropiedades">COPROPIEDADES</RouterLink>
        <RouterLink to="/contacto">CONTACTO</RouterLink>
        <a :href="base + 'dashboard.html'" class="btn btn-acceso">ACCESO CORPORATIVO</a>
      </nav>

      <!-- Menú móvil -->
      <button class="btn d-md-none btn-menu" type="button"
              data-bs-toggle="offcanvas" data-bs-target="#mobileMenu" aria-controls="mobileMenu">
        ☰
      </button>
    </div>
  </header>

  <div class="offcanvas offcanvas-end" id="mobileMenu" tabindex="-1">
    <div class="offcanvas-header">
      <h5 class="offcanvas-title">Santa Josefina</h5>
      <button type="button" class="btn-close" data-bs-dismiss="offcanvas"></button>
    </div>
    <div class="offcanvas-body">
      <nav class="d-grid gap-2">
        <RouterLink class="btn btn-outline-secondary" to="/servicios">Servicios</RouterLink>
        <RouterLink class="btn btn-outline-secondary" to="/copropiedades">Copropiedades</RouterLink>
        <RouterLink class="btn btn-outline-secondary" to="/contacto">Contacto</RouterLink>
        <a :href="base + 'dashboard.html'" class="btn btn-danger">Acceso Corporativo</a>
      </nav>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
const base = import.meta.env.BASE_URL
const overHero = ref(true) // comienza sobre el hero

onMounted(() => {
  const threshold = 120 // px desde arriba para cambiar estilo
  const onScroll = () => { overHero.value = window.scrollY < threshold }
  document.addEventListener('scroll', onScroll, { passive: true })
  onScroll()
})
</script>

<style scoped>
.sj-navbar{
  position: fixed; inset: 0 0 auto 0; z-index: 1000; transition: all .25s;
}
.sj-navbar .nav-inner{
  height: 86px; display:flex; align-items:center; justify-content:space-between;
}
.sj-navbar .navbar-brand img{ height: 42px; width:auto; }

/* Estado: SOBRE HERO (transparente + texto blanco) */
.sj-navbar.over-hero{
  background: linear-gradient(180deg, rgba(0,0,0,.45), rgba(0,0,0,0));
  color: #fff;
}
.sj-navbar.over-hero .nav-links a{ color:#fff; }
.sj-navbar.over-hero .btn-acceso{ background:#E74E35; border-color:#E74E35; color:#fff; }

/* Estado: SCROLLED (fondo blanco + texto azul) */
.sj-navbar.scrolled{
  background: rgba(255,255,255,.96);
  backdrop-filter: saturate(160%) blur(6px);
  box-shadow: 0 2px 12px rgba(0,0,0,.08);
  color: #1a4fff;
}
.sj-navbar.scrolled .nav-links a{ color:#1a4fff; }
.sj-navbar.scrolled .btn-acceso{ background:#E74E35; border-color:#E74E35; color:#fff; }

.nav-links a{ margin-left:22px; font-weight:700; letter-spacing:.04em; }
.btn-acceso{ border-radius:999px; font-weight:800; padding:.55rem 1.1rem; }
.btn-menu{ border:1px solid #ddd; border-radius:10px; }
</style>