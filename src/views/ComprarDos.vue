<template>
  <main>
    <article class="article-block">
      <div class="main-block">
        <h1>{{ $t("Comprar2.information") }}</h1>
      </div>
      <section class="frame-function" v-if="obra">
        <div class="frame-function__poster">
          <img :src="obra?.imagenes.split(',')[0]" alt="Imagen de la obra">
        </div>
        <div class="frame-function__title">
          <h2>{{ obra?.nombre }}</h2>
        </div>
      </section>
    </article>

    <div ref="cinemaSeatsContainer" class="cinema-seats"></div>
    <div class="cinema-button">
      <div>
        <p>{{ $t("Comprar2.text") }} {{ calcularTotal }} €</p>
      </div>
      <div>
        <button @click="comprarAsientos">{{ $t("Comprar2.text2") }}</button>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import type { ListFormat } from 'typescript';
import { ref, onMounted, computed, nextTick } from 'vue';
import { useRoute } from 'vue-router';

interface Obra {
  nombre: string;
  descripcion: string;
  imagenes: string;
  actores: string;
  obraID: string;
}

interface Asiento {
  idAsiento: number;
  isFree: boolean;
}

interface AsientoOcupado {
  idAsiento: number
}

const obra = ref<Obra | null>(null);
let asientos = ref<Asiento[]>([]);
const precioPorAsiento = 5;
const cinemaSeatsContainer = ref<HTMLElement | null>(null);
const asientosSeleccionados = ref<Asiento[]>([]);
let asientosOcupados = ref<AsientoOcupado[]>([]);
const route = useRoute();
const idObra = route.params.Id as string;
const idSesion = route.query.idSesion as string;

onMounted(async () => {
  try {
    let respuesta = await fetch(`http://localhost:8001/Obras/${idObra}`);
    if (respuesta.ok) {
      obra.value = await respuesta.json();
    }
  } catch (error) {
    console.error("Error al cargar la obra:", error);
  }

  try {
    let respuestaOcupados = await fetch(`http://localhost:8001/Obras/${idObra}/Session/${idSesion}/Seat`);
    if (respuestaOcupados.ok) {
      const datosOcupados = await respuestaOcupados.json();
      asientosOcupados.value = datosOcupados.map((idAsiento: number) => ({ idAsiento }));
    }

    let respuesta = await fetch(`http://localhost:8001/Asientos/GetAll`);
    if (respuesta.ok) {
      const datos = await respuesta.json();
      asientos.value = datos.map((asiento: any) => ({
        idAsiento: asiento.idAsiento,
        isFree: !asientosOcupados.value.some(ocupado => ocupado.idAsiento === asiento.idAsiento),
      }));
    }

    generarButacas();
  } catch (error) {
    console.error("Error al cargar los asientos:", error);
  }
});

function generarButacas() {
  const anchoAsiento = 40, altoAsiento = 40, espacioEntreAsientos = 10, espacioEntreFilas = 20;
  const anchoReposabrazos = 10, altoReposabrazos = altoAsiento;
  const anchoSvg = (anchoAsiento + espacioEntreAsientos + anchoReposabrazos * 2) * 5;

  const anchoPantalla = anchoSvg * 0.8;
  const altoPantalla = 100;
  const xPantalla = (anchoSvg - anchoPantalla) / 2;
  const yPantalla = 20;

  let svgHTML = `<svg width="350" height="400">`;

  svgHTML += `<rect x="${xPantalla}" y="${yPantalla}" width="${anchoPantalla}" height="${altoPantalla}" style="fill:#9f9f9f; stroke:white; stroke-width:2" />`;

  asientos.value.forEach((asiento, index) => {
    const fila = Math.floor(index / 5);
    const posAsiento = index % 5;
    const x = posAsiento * (anchoAsiento + espacioEntreAsientos + anchoReposabrazos * 2);
    const y = fila * (altoAsiento + espacioEntreFilas) + altoPantalla + yPantalla * 2;
    const color = asiento.isFree ? '#00008B' : 'red';

    svgHTML += `<rect id="asiento-${asiento.idAsiento}" x="${x + anchoReposabrazos}" y="${y}" width="${anchoAsiento}" height="${altoAsiento}" rx="5" ry="5" style="stroke:black; fill:${color}" />`;


    svgHTML += `<rect x="${x}" y="${y}" width="${anchoReposabrazos}" height="${altoReposabrazos}" style="fill:grey" />`;


    svgHTML += `<rect x="${x + anchoAsiento + anchoReposabrazos}" y="${y}" width="${anchoReposabrazos}" height="${altoReposabrazos}" style="fill:grey" />`;
  });

  svgHTML += '</svg>';

  nextTick(() => {
    if (cinemaSeatsContainer.value) {
      cinemaSeatsContainer.value.innerHTML = svgHTML;
      cinemaSeatsContainer.value.querySelectorAll('rect').forEach(rect => {
        const idAsiento = parseInt(rect.id.replace('asiento-', ''));
        if (asientos.value.find(a => a.idAsiento === idAsiento && a.isFree)) {
          rect.addEventListener('click', () => {
            cambiarColor(rect);
          });
        }
      });
    }
  });
}



function cambiarColor(asiento: SVGElement) {
  const idAsiento = parseInt(asiento.id.replace('asiento-', ''));

  const indexSeleccionado = asientosSeleccionados.value.findIndex(a => a.idAsiento === idAsiento);

  const estaOcupado = asientosOcupados.value.some(a => a.idAsiento === idAsiento);


  if (estaOcupado) {
    return;
  }

  if (indexSeleccionado > -1) {
    asientosSeleccionados.value.splice(indexSeleccionado, 1);
    asiento.style.fill = '#00008B';
  } else {

    asientosSeleccionados.value.push({ idAsiento, isFree: false });
    asiento.style.fill = 'red';
  }
}

async function comprarAsientos() {
  try {

    const url = `http://localhost:8001/Obras/${idObra}/Session/${idSesion}/AddAsientos`;
    const asientosParaEnviar = asientosSeleccionados.value.map(asiento => ({
      idAsiento: asiento.idAsiento,
      isFree: asiento.isFree
    }));
    const respuesta = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(asientosParaEnviar),
    });

    if (!respuesta.ok) {
      throw new Error('Error en la compra de asientos');
    }


    console.log('Compra realizada con éxito');
    asientosSeleccionados.value = [];
  } catch (error) {
    console.error('Error al realizar la compra:', error);
  }
}

const calcularTotal = computed(() => {
  return asientosSeleccionados.value.length * precioPorAsiento;
});
</script>

<style scoped>
body,
h1,
h2,
p,
ul,
li,
a {
  margin: 0;
  padding: 0;
  text-decoration: none;
}


.article-block {
  display: flex;
  justify-content: right;
  margin-top: 10vh;
  flex-direction: column;
}

.main-block {
  display: flex;
  align-items: center;
  justify-content: start;
  width: 100%;
  background-color: #1E3367;
  height: 13vh;
  margin-bottom: 10vh;
}

.main-block h1 {
  color: white;
  font-size: xx-large;
  margin-left: 20vh;
}

/* Estilos del marco de la función */
.frame-function {
  display: flex;
  align-items: center;
  background-color: #1E3367;
  width: 800px;
  height: 450px;
  text-align: center;
  max-width: 977px;
  margin: auto;
}

.frame-function__poster {
  flex: 1;
}

.frame-function__poster img {
  width: 280px;
}

.frame-function__title {
  flex: 1;
}

.frame-function__title h2 {
  font-size: 30px;
  color: white;
}

/* Estilos del contenedor */
#container {
  text-align: center;
}

h2 {
  color: #333;
}

.container-frame {
  margin-top: 20px;
  background-color: #f8f8f8;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
}

button {
  margin-left: 10px;
}

section {
  font-family: Arial, sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 15vh;
}

.container {
  text-align: center;
}

.cinema-seats {
  display: flex;
  justify-content: center;
  padding-top: 30px;
}


.cinema-seats svg {
  cursor: pointer;
}

.cinema-button {
  display: flex;
  justify-content: center;
  padding-top: 20px;
}
</style>

