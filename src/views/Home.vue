<template>
  <div>
    <section class="bg-light border-bottom">
      <div class="container py-5">
        <div class="row align-items-center g-4">
          <div class="col-lg-6">
            <h1 class="display-5 fw-bold">Gestión Inmobiliaria Integral</h1>
            <p class="lead mb-4">SU PROPIEDAD EN LAS MEJORES MANOS</p>
            <div class="d-flex gap-2">
              <a class="btn btn-primary" href="https://wa.me/56998647190" target="_blank">Habla con un especialista</a>
              <RouterLink class="btn btn-outline-secondary" to="/servicios">Ver Servicios</RouterLink>
            </div>
          </div>
          <div class="col-lg-6">
            <img class="img-fluid rounded shadow-sm" src="/hero.jpg" alt="Santa Josefina" />
          </div>
        </div>
      </div>
    </section>

    <section class="container py-5">
      <h2 class="h3 mb-4 text-uppercase">Transparencia • Proyección • Disponibilidad</h2>
      <div class="row g-4">
        <div class="col-md-4">
          <div class="card h-100">
            <div class="card-body">
              <h3 class="h5">TRANSPARENCIA</h3>
              <p>Gestión transparente en la administración y ejecución de los gastos comunes.</p>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card h-100">
            <div class="card-body">
              <h3 class="h5">PROYECCIÓN</h3>
              <p>Estimamos presupuestos para proyectar el gasto común en períodos semestrales, anuales o bianuales.</p>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card h-100">
            <div class="card-body">
              <h3 class="h5">DISPONIBILIDAD</h3>
              <p>Equipo experto en la Ley 21.442, con tiempo dedicado para su comunidad.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-light border-top">
      <div class="container py-5">
        <h2 class="h3 mb-4">Servicios Especializados</h2>
        <ul class="list-unstyled">
          <li>• Compra y venta de propiedades residenciales y comerciales.</li>
          <li>• Arriendos y gestión integral para inversionistas.</li>
          <li>• Asesoría legal y financiera en transacciones.</li>
          <li>• Promoción y marketing digital de propiedades.</li>
        </ul>
      </div>
    </section>
  </div>
</template>
