<template>
  <header class="main-header" id="mainHeader">
    <div class="navbar container-fluid">
      <!-- Logo -->
      <RouterLink class="navbar-brand" to="/" aria-label="Inicio">
        <img src="/assets/img/logo_santajosefina.png" alt="Santa Josefina" style="width:140px;height:auto;">
      </RouterLink>

      <!-- Botón hamburguesa (solo móvil) -->
      <button
        class="btn d-md-none"
        type="button"
        aria-label="Abrir menú"
        data-bs-toggle="offcanvas"
        data-bs-target="#mobileMenu"
        aria-controls="mobileMenu"
        style="display:flex;align-items:center;gap:8px;border:1px solid #ddd;border-radius:10px;padding:8px 12px;background:#fff;">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
        </svg>
        <span style="font-weight:600;color:var(--brand);">Menú</span>
      </button>

      <!-- Links escritorio -->
      <nav class="nav-links d-none d-md-block">
        <a href="#servicios">Servicios</a>
        <a href="#copropiedad">Copropiedades</a>
        <a href="#contacto">Contacto</a>
        <a href="/dashboard.html" class="btn btn-primary text-white">Acceso Corporativo</a>
      </nav>
    </div>
  </header>

  <!-- Offcanvas -->
  <div class="offcanvas offcanvas-end" tabindex="-1" id="mobileMenu" aria-labelledby="mobileMenuLabel" style="width:80vw;max-width:360px;">
    <div class="offcanvas-header">
      <h5 class="offcanvas-title" id="mobileMenuLabel" style="display:flex;align-items:center;gap:10px;">
        <img src="/assets/img/logo_santajosefina.png" alt="Santa Josefina" style="height:28px;width:auto;">
        <span style="color:var(--brand);font-weight:800;">Santa Josefina</span>
      </h5>
      <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Cerrar"></button>
    </div>
    <div class="offcanvas-body">
      <nav class="list-group list-group-flush" style="gap:8px;display:grid;">
        <a class="list-group-item list-group-item-action" href="#servicios">Servicios</a>
        <a class="list-group-item list-group-item-action" href="#copropiedad">Copropiedades</a>
        <a class="list-group-item list-group-item-action" href="#contacto">Contacto</a>
        <a class="btn btn-primary" href="/dashboard.html">Acceso Corporativo</a>
      </nav>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'

// header translúcido al hacer scroll
onMounted(() => {
  const h = document.getElementById('mainHeader')
  const onScroll = () => h?.classList.toggle('scrolled', window.scrollY > 8)
  document.addEventListener('scroll', onScroll, { passive: true })
  onScroll()

  // cerrar offcanvas al seguir un enlace
  const off = document.getElementById('mobileMenu')
  if (off) {
    off.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        // Bootstrap Offcanvas está disponible porque importamos 'bootstrap' en main.js
        const inst = window.bootstrap?.Offcanvas.getInstance(off)
        if (inst) inst.hide()
      })
    })
  }
})
</script>