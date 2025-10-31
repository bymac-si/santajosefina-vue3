<template>
  <b-navbar toggleable="lg" type="light" variant="light" class="border-bottom">
    <b-navbar-brand class="fw-bold">Santa Josefina SpA</b-navbar-brand>
    <b-navbar-toggle target="main-nav" />
    <b-collapse id="main-nav" is-nav>
      <b-navbar-nav class="ms-auto">
        <RouterLink class="nav-link" to="/">Inicio</RouterLink>
        <RouterLink class="nav-link" to="/servicios">Servicios</RouterLink>
        <RouterLink class="nav-link" to="/copropiedades">Copropiedades</RouterLink>
        <RouterLink class="nav-link" to="/contacto">Contacto</RouterLink>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>
