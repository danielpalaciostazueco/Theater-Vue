<template>
  <div>
    <main>
      <section class="main-block">
        <h1 class="main-block__title">{{ obra?.nombre }}</h1>
      </section>
      <section class="frame-function" v-if="obra && obra.imagenesArray.length > 0">
        <div class="frame-function__poster">
          <img :src="obra.imagenesArray[1]" alt="Imagen destacada de la obra" />
        </div>
        <div class="frame-function__title">
          <h2>{{ obra.nombre }}</h2>
        </div>
      </section>
      <section class="information-section">
        <h2 class="information-title">Información de Fechas y Horas</h2>
        <ul class="horarios-list">
          <li v-for="fecha in obra?.fechasArray" :key="fecha" class="horarios-item">
            {{ fecha }}
            <RouterLink :to="{ name: 'comprarEntrada', params: { obraId: obra?.ObraID, fecha: fecha } }"
              class="button-comprar">Comprar</RouterLink>
          </li>
        </ul>
      </section>
      <article>
        <div class="frame-information">
          <h2>Información de la función</h2>
          <p>{{ obra?.descripcion }}</p>
        </div>
        <div class="frame-reparto">
          <h2>Reparto</h2>
          <ul>
            <li v-for="actor in obra?.actoresArray" :key="actor">{{ actor }}</li>
          </ul>
        </div>
      </article>
    </main>
  </div>
</template>
  
<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

interface Obra {
  nombre: string;
  descripcion: string;
  imagenesArray: string[];
  actoresArray: string[];
  fechasArray: string[];
  ObraID: string;
}

const obra = ref<Obra | null>(null);

onMounted(async () => {
  const route = useRoute();
  const idObra = route.params.Id as string;
  try {
    const response = await fetch('http://localhost:8001/obras/' + idObra);
    if (!response.ok) throw new Error('Error al obtener los datos de la obra');
    obra.value = await response.json();
  } catch (error) {
    console.error('Error al obtener los datos de la obra:', error);
  }
});
</script>
  
<style>
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



/* Estilos del encabezado */
.header {
  display: flex;
  align-items: center;
  background-color: #ffffff;
  color: #000000;
  height: 23vh;
  max-width: 1000px;
  margin: auto;
}

.header__logo {
  flex: 1;
  text-align: center;
}

.logo__image {
  max-width: 140px;
  height: auto;
}

.header__nav {
  flex: 2.2;
  display: flex;
  text-align: left;
  justify-content: left;
  gap: 20px;
}

.nav__link {
  color: #000000;
  text-decoration: none;
}

.article-information {
  display: flex;
  justify-content: right;
  margin-top: 10vh;
  flex-direction: column;
}

/* Estilos del bloque principal */
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

/* Estilos para el contenedor de los asientos */
#cinema-seats {
  text-align: center;
  margin: 20px auto;
}

/* Estilos para las filas de asientos */
.row {
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
}

/* Estilos para cada asiento */
.seat {
  width: 20px;
  height: 20px;
  margin: 5px;
  background-color: #bdc3c7;
  border-radius: 3px;
  /* Opcional: para asientos redondeados */
  display: block;
  cursor: pointer;
}

/* Estilos para asientos seleccionados */
.seat.selected {
  background-color: #3498db;
}

.seat {
  width: 20px;
  height: 20px;
  margin: 5px;
  background-color: #bdc3c7;
  border-radius: 3px;
  /* Opcional: para asientos redondeados */
  display: block;
  cursor: pointer;
}


/* Añadir esta regla para los asientos comprados */
.seat.comprado {
  background-color: #ff0000;
  /* Rojo para indicar que el asiento está comprado */
  cursor: not-allowed;
  /* Cambia el cursor para indicar que no se puede seleccionar */
}


/* Estilos para el texto del precio total */
#total-price {
  font-size: 16px;
  text-align: center;
  margin-top: 20px;
}

/* Estilos para el botón de compra */
#buy-button {
  display: block;
  margin: 20px auto;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  background-color: #1E3367;
  color: white;
  border: none;
  border-radius: 5px;
}

/* Estilos del pie de página */
.footer {
  margin-top: 10vh;
  display: flex;
  align-items: center;
  background-color: #1E3367;
  text-align: center;
  width: 100%;
  height: 25vh;
}

.footer__logo {
  flex: 0.7;
  text-align: right;
}

.footer__menu {
  flex: 1;
  text-align: center;
}

.footer__menu a {
  color: white;
  margin-right: 2vh;
}

.footer__networks {
  flex: 0.7;
  text-align: left;
}

.footer__logo img {
  width: 90px;
  border-radius: 70px;
}

.footer__networks img {
  width: 40px;
  margin-right: 4vh;
}
</style>
