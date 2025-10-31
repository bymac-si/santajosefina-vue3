<template>
  <div>
    <!-- HERO -->
    <section class="hero">
      <div class="container-narrow hero-wrap" style="margin-top:60px">
        <div class="hero-kicker">Gestión Inmobiliaria Integral</div>
        <h1 class="hero-title">SU PROPIEDAD EN LAS MEJORES MANOS</h1>
        <p class="mb-3" style="max-width:60ch">
          Venta, arriendo y administración de propiedades en todo Chile. Soluciones para inversionistas, familias y comunidades.
        </p>
        <div class="hero-cta">
          <a href="#contacto" class="btn btn-primary">Habla con un especialista</a>
          <a href="#propiedades" class="btn btn-primary">Ver Propiedades</a>
        </div>
      </div>
    </section>

    <!-- CÍRCULOS + TEXTO -->
    <section class="features container-narrow">
      <div class="features-grid">
        <div class="circles" aria-hidden="true">
          <figure class="circle" style="position:relative; top:-170px;">
            <img src="/assets/img/circ-1.jpg" alt="Paisaje urbano" />
          </figure>
          <figure class="circle" style="position:relative; top:-250px;">
            <img src="/assets/img/circ-2.jpg" alt="Edificio y cúpula" />
          </figure>
          <figure class="circle" style="position:relative; top:-330px;">
            <img src="/assets/img/circ-3.jpg" alt="Parque empresarial" />
          </figure>
        </div>
        <div class="features-copy" style="position:relative; top:-220px;">
          <p class="kicker">lo que nos define</p>
          <h2 class="h2">Transparencia • Proyección • Disponibilidad</h2>
          <div class="list">
            <div class="item">
              <b>TRANSPARENCIA</b>
              <p>Gestión transparente en la administración y ejecución de los gastos comunes.</p>
            </div>
            <div class="item">
              <b>PROYECCIÓN</b>
              <p>Estimamos presupuestos para proyectar el gasto común en períodos semestrales, anuales o bianuales.</p>
            </div>
            <div class="item">
              <b>DISPONIBILIDAD</b>
              <p>Equipo experto en la Ley 21.442, con tiempo dedicado para su comunidad.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- PROPIEDADES -->
    <section id="propiedades" class="container-narrow" style="position:relative; top:-200px; margin-bottom:-100px;">
      <h2>Propiedades Disponibles</h2>
      <div id="listaPropiedades">
        <div v-for="(p,i) in disponibles" :key="i">
          <img :src="p.ImagenURL || ''" alt="Propiedad" style="width:100%; height:180px; object-fit:cover;">
          <div class="card-body">
            <h3 style="font-size:18px; margin-bottom:5px;">{{ p.Titulo || 'Propiedad' }}</h3>
            <p class="text-muted small">{{ p.Tipo || '' }} · {{ p.Comuna || '' }} · {{ p.Region || '' }}</p>
            <p class="fw-bold" style="color:#B46A55; margin:8px 0;">
              {{ clp(p.Precio || 0) }}
            </p>
            <p class="d-flex gap-2">
              <a href="javascript:void(0)" class="btn btn-primary" @click="abrirModal(i)">Ver detalle</a>
              <a href="#contacto" class="btn btn-primary">Solicitar info</a>
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- SERVICIOS + CONTACTO TARJETA -->
    <section id="servicios">
      <div class="container-narrow services">
        <div>
          <h2>Servicios Especializados</h2>
          <p class="text-muted">Santa Josefina SpA se especializa en la Administración de Edificios y Condominios Horizontales acogidos a la Ley 21.442 de Copropiedad Inmobiliaria, brindando a su comunidad apoyo y ventajas diferenciales.</p>
          <ul class="text-muted">
            <li>Compra y venta de propiedades residenciales y comerciales.</li>
            <li>Arriendos y gestión integral para inversionistas.</li>
            <li>Asesoría legal y financiera en transacciones.</li>
            <li>Promoción y marketing digital de propiedades.</li>
          </ul>
        </div>
        <aside id="contacto" class="contact">
          <strong>Hablemos hoy</strong>
          <a href="tel:+56998647190">+56 9 9864 7190</a>
          <a href="mailto:marcos.castro@santajosefinaspa.cl">marcos.castro@santajosefinaspa.cl</a>
          <a href="https://www.santajosefinaspa.cl" target="_blank" rel="noopener">www.santajosefinaspa.cl</a>
          <span class="hint">Respuesta en horario hábil</span>
          <a class="btn btn-primary" style="width:50%; margin:0 auto;" href="mailto:marcos.castro@santajosefinaspa.cl?subject=Consulta%20Landing%20Santa%20Josefina">Solicitar propuesta</a>
        </aside>
      </div>
    </section>

    <!-- COPROPIEDAD -->
    <section id="copropiedad" class="container-narrow">
      <h2>Administración de Copropiedades</h2>
      <p class="text-muted" style="max-width:800px">
        Con la entrada en vigencia de la <strong>Ley N°21.442 de Copropiedad Inmobiliaria</strong>, ofrecemos administración profesional de condominios y edificios, asegurando transparencia, eficiencia y cumplimiento normativo. Inscritos en el Registro Nacional de Administradores del Minvu.
      </p>
      <ul class="text-muted" style="max-width:800px">
        <li>Gestión financiera y contable con reportes claros a la comunidad.</li>
        <li>Mantención preventiva y correctiva de áreas comunes.</li>
        <li>Protocolos de seguridad y convivencia.</li>
        <li>Asesoría legal en conflictos de copropiedad.</li>
        <li>Plataforma digital para comunicación con residentes.</li>
      </ul>
    </section>

    <!-- CONTACTO FORM -->
    <section class="container-narrow" style="padding:44px 0">
      <h2>Contáctenos</h2>
      <form id="formContacto" @submit.prevent="enviar">
        <input v-model="form.nombre" type="text" placeholder="Nombre completo" required>
        <input v-model="form.email"  type="email" placeholder="Correo electrónico" required>
        <input v-model="form.fono"   type="tel" placeholder="Teléfono">
        <textarea v-model="form.msj" placeholder="Escribe tu consulta..." rows="4" required></textarea>
        <button type="submit" class="btn btn-primary">Enviar</button>
      </form>
      <p v-show="enviado" style="color:green; margin-top:15px;">¡Gracias! Tu mensaje ha sido enviado.</p>
    </section>

    <!-- FOOTER -->
    <footer>
      <div class="container-narrow">
        © {{ new Date().getFullYear() }} Santa Josefina SpA · Administración de Edificios y Condominios
      </div>
    </footer>

    <!-- MODAL -->
    <div id="modalPropiedad" class="modal" :class="{active: showModal}" aria-hidden="true">
      <div class="modal-content">
        <button class="btn btn-primary" style="width:50%; margin:0 auto;" @click="cerrarModal">Cerrar</button>
        <h1 style="font-size:24px; font-weight:bold; margin-top:6px;">{{ sel?.Titulo || 'Propiedad' }}</h1>
        <img :src="sel?.ImagenURL || ''" alt="Imagen propiedad" style="width:100%;max-height:250px;object-fit:cover;border-radius:6px;margin-bottom:10px;">
        <p><b>Tipo:</b> {{ sel?.Tipo || '' }}</p>
        <p><b>Comuna:</b> {{ sel?.Comuna || '' }}</p>
        <p><b>Región:</b> {{ sel?.Region || '' }}</p>
        <p><b>Precio:</b> {{ clp(sel?.Precio || 0) }}</p>
        <div class="card shadow-sm mb-3">
          <div class="card-header bg-warning text-dark fw-bold">Detalles de la Propiedad</div>
          <div class="card-body p-0">
            <table class="table table-bordered mb-0">
              <tbody>
                <tr><th style="width:75%;"><img src="/assets/img/plan.svg" style="width:20px;vertical-align:middle;margin-right:6px;">Metros Cuadrados Construidos</th><td style="text-align:center;">{{ sel?.MetrosConstruidos || '—' }}</td></tr>
                <tr><th><img src="/assets/img/area.svg" style="width:20px;vertical-align:middle;margin-right:6px;">Metros Cuadrados Totales</th><td style="text-align:center;">{{ sel?.MetrosTotales || '—' }}</td></tr>
                <tr><th><img src="/assets/img/bed.svg"  style="width:20px;vertical-align:middle;margin-right:6px;">Dormitorios</th><td style="text-align:center;">{{ sel?.Dormitorios || '—' }}</td></tr>
                <tr><th><img src="/assets/img/bathroom.svg" style="width:20px;vertical-align:middle;margin-right:6px;">Baños</th><td style="text-align:center;">{{ sel?.Banos || '—' }}</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
import { reactive, ref, computed, onMounted } from 'vue'

// --- Estado
const propsAll = ref([])
const showModal = ref(false)
const sel = ref(null)
const form = reactive({ nombre:'', email:'', fono:'', msj:'' })
const enviado = ref(false)

// --- Helpers
const clp = (n)=> '$'+ new Intl.NumberFormat('es-CL').format(n||0)
const fechaHoyTexto = ()=>{
  const d=new Date(), dd=String(d.getDate()).padStart(2,'0'), mm=String(d.getMonth()+1).padStart(2,'0'), yy=d.getFullYear()
  return `${dd}-${mm}-${yy}`
}
const disponibles = computed(()=> propsAll.value.filter(p=> (p.Estado||'')==='Disponible'))

// --- Modal
const abrirModal = (i)=> { sel.value = disponibles.value[i] || null; showModal.value = true }
const cerrarModal = ()=> { showModal.value = false }

// --- Carga de propiedades (AppSheet/Sheets). Si no existe fetchData(), no rompe.
async function cargarPropiedadesLanding(){
  try{
    if (typeof window.fetchData === 'function'){
      propsAll.value = await window.fetchData('Propiedades')
    }else{
      propsAll.value = [] // sin backend no muestra cards (queda listo para conectar)
    }
  }catch{ propsAll.value = [] }
}

// --- Envío contacto (si existe appSheetCRUD)
async function enviar(){
  try{
    if (typeof window.appSheetCRUD === 'function'){
      await window.appSheetCRUD('Contactos','Add',[{
        Nombre: form.nombre.trim(),
        Email: form.email.trim(),
        Telefono: form.fono.trim(),
        Mensaje: form.msj.trim(),
        Fecha: fechaHoyTexto(),
        Estado: 'Nuevo',
        Notas: ''
      }])
    }
    Object.assign(form, { nombre:'', email:'', fono:'', msj:'' })
    enviado.value = true
  }catch(err){
    alert('Error al guardar: ' + (err?.message||err))
    console.error(err)
  }
}

onMounted(cargarPropiedadesLanding)
</script>