<script setup>
const base = import.meta.env.BASE_URL   // respeta el subpath /santajosefina-vue3/
</script>

<template>
  <RouterLink class="navbar-brand" to="/" aria-label="Inicio">
    <img :src="base + 'assets/img/logo_santajosefina.png'" alt="Logo" style="width:140px;height:auto;">
  </RouterLink>
</template>