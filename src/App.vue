<template>
  <div>
    <NavBar />
    <RouterView />
    <SiteFooter />
  </div>
</template>

<script setup>
import NavBar from './components/NavBar.vue'
import SiteFooter from './components/SiteFooter.vue'
</script>
