<template>
  <div class="container py-5">
    <h1 class="h3 mb-4">Contáctenos</h1>
    <form class="row g-3" @submit.prevent="send">
      <div class="col-md-6">
        <label class="form-label">Nombre</label>
        <input v-model="form.nombre" type="text" required class="form-control" />
      </div>
      <div class="col-md-6">
        <label class="form-label">Email</label>
        <input v-model="form.email" type="email" required class="form-control" />
      </div>
      <div class="col-12">
        <label class="form-label">Mensaje</label>
        <textarea v-model="form.mensaje" rows="5" class="form-control" required></textarea>
      </div>
      <div class="col-12 d-flex gap-2">
        <button class="btn btn-primary">Enviar</button>
        <a class="btn btn-outline-secondary" href="https://wa.me/56998647190" target="_blank">WhatsApp</a>
      </div>
    </form>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
const form = reactive({ nombre: '', email: '', mensaje: '' })
const send = () => {
  alert('¡Gracias! Tu mensaje ha sido enviado.')
  Object.assign(form, { nombre: '', email: '', mensaje: '' })
}
</script>
