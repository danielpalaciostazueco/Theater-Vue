<template>
  <div>
    <main>
      <section class="main-block">
        <h1 class="main-block__title">{{ obra?.Nombre }}</h1>
      </section>
      <section class="horarios" v-if="obra && obra.imagenesArray && obra.imagenesArray.length > 0">
        <div class="horarios-img">
          <img :src="obra.imagenesArray[1]" alt="Imagen destacada de la obra" />
        </div>
        <div class="horarios-txt">
          <h2 class="horarios-txt__title">Información de Fechas y Horas</h2>
          <ul class="horarios-txt__list">
            <li v-for="fecha in obra.fechasArray" :key="fecha" class="horarios-txt__item">
              {{ fecha }}
              <RouterLink :to="{ name: 'comprarDos', params: { obraId: obra.ObraId, fecha: fecha } }"
                class="button-bought__link">Comprar</RouterLink>
            </li>
          </ul>
        </div>
      </section>
      <article>
        <div class="frame-information">
          <div class="frame-information__title">
            <h2>Información de la función</h2>
          </div>
          <div class="frame-information__txt">
            <p>{{ obra?.Descripcion }}</p>
          </div>
        </div>
        <div class="frame-repart">
          <div class="frame-repart__title">
            <h2>Reparto</h2>
          </div>
          <div class="frame-repart__txt">
            <ul class="frame-repart__list">
              <li v-for="actor in obra?.actoresArray" :key="actor" class="frame-repart__item">{{ actor }}</li>
            </ul>
          </div>
        </div>
      </article>
    </main>
  </div>
</template>
  
<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

interface Obra {
  Nombre: string;
  Descripcion: string;
  imagenesArray: string[];
  actoresArray: string[];
  fechasArray: string[];
  ObraId: string;
}

const obra = ref<Obra | null>(null);

async function fetchObra(idObra: string) {
  try {
    const response = await fetch(`http://localhost:8001/obras/${idObra}`);
    if (!response.ok) throw new Error('Error al obtener los datos de la obra');
    const data = await response.json();
    obra.value = data;
  } catch (error) {
    console.error('Error en la solicitud fetch:', error);
  }
}

onMounted(() => {
  const route = useRoute();
  const idObra = route.params.obraId as string;
  if (idObra) fetchObra(idObra);
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

/* Estilos generales del cuerpo */
body {
  font-family: 'Roboto';
  line-height: 1.6;
  overflow: auto;
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

.show-poster__button {
  background-color: #1E3367;
  color: #e9e3e3;
  border: none;
  /* padding: 10px 20px; */
  font-size: 16px;
  margin-left: 10px;
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
  padding: 15px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
}

button {
  margin-left: 10px;
}

.horario {
  border: 1px solid #ccc;
  padding: 10px;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 900px;
  margin: auto;
}

.fecha,
.hora,
.disponibilidad {
  flex: 1;
}

.boton-comprar {
  background-color: #1E3367;
  color: white;
  padding: 8px 15px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 14px;
  border-radius: 4px;
}

.boton-comprar:hover {
  background-color: #45a049;
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

@media screen and (max-width: 1150px) {


  .header {
    margin-top: 5vh;
    display: flex;
    height: auto;
    text-align: center;
    margin-bottom: 5vh;
  }

  .header__logo {
    margin-left: 5vh;
  }

  .header__nav {
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin-top: 10px;
  }

  main {
    margin: 0 15px;
  }

  .frame-function {
    display: flex;
    flex-direction: column;
    width: auto;
    height: 500px;
  }

  .footer {
    display: flex;
    justify-content: center;
  }

  .footer__logo {
    text-align: center;
  }

  .footer__menu {
    display: flex;
    flex-direction: column;
  }

  .footer__networks {
    display: flex;
    flex-direction: column;
  }

  .main-block h1 {
    margin-left: 6vh;
  }
}
</style>
