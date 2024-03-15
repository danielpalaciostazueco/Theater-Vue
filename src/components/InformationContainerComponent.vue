<template>
  <div id="container" class="information-container">
    <h2 class="information-title">{{ $t('Comprar1.text') }}</h2>
    <div class="container-frame" v-if="store.storeObras.length > 0">
      <ul class="horarios-txt__list">
        <li v-if="store.storeObras[0].fechaUno" class="horarios-txt__item">
          {{ store.storeObras[0].fechaUno }}
          <RouterLink :to="{ path: '/comprarDos/' + store.storeObras[0].obraID, query: { idSesion: 1 } }"
            class="show-poster__button">{{ $t('Comprar1.text2') }}</RouterLink>
        </li>
        <li v-if="store.storeObras[0].fechaDos" class="horarios-txt__item">
          {{ store.storeObras[0].fechaDos }}
          <RouterLink :to="{ path: '/comprarDos/' + store.storeObras[0].obraID, query: { idSesion: 2 } }"
            class="show-poster__button">{{ $t('Comprar1.text2') }}</RouterLink>
        </li>
        <li v-if="store.storeObras[0].fechaTres" class="horarios-txt__item">
          {{ store.storeObras[0].fechaTres }}
          <RouterLink :to="{ path: '/comprarDos/' + store.storeObras[0].obraID, query: { idSesion: 3 } }"
            class="show-poster__button">{{ $t('Comprar1.text2') }}</RouterLink>
        </li>
      </ul>
    </div>
    <div class="asientos-disponibles">
      <h3>
        {{ $t('Comprar1.session1') }} : {{ asientos - asientosOcupados.sesion1 }}
        {{ $t('Comprar1.text3') }}
      </h3>
      <h3>
        {{ $t('Comprar1.session2') }} : {{ asientos - asientosOcupados.sesion2 }}
        {{ $t('Comprar1.text3') }}
      </h3>
      <h3>
        {{ $t('Comprar1.session3') }} : {{ asientos - asientosOcupados.sesion3 }}
        {{ $t('Comprar1.text3') }}
      </h3>
    </div>
  </div>
</template>
<script setup lang="ts">
import { onMounted, reactive } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import { useListadoObrasComprar1Store } from '../store/Comprar-1-Store'
import { useListadoObrasComprar2Store } from '@/store/Comprar-2-Store'

const asientos = 20
const store = useListadoObrasComprar1Store()
const store2 = useListadoObrasComprar2Store()
const route = useRoute()
const idObra = route.params.Id as string

const asientosOcupados = reactive({
  sesion1: 0,
  sesion2: 0,
  sesion3: 0
})

onMounted(async () => {
  await store.cargarObras(idObra)

  await store2.cargarAsientosOcupados(idObra, '1')
  asientosOcupados.sesion1 = store2.asientosComprados()

  await store2.cargarAsientosOcupados(idObra, '2')
  asientosOcupados.sesion2 = store2.asientosComprados()

  await store2.cargarAsientosOcupados(idObra, '3')
  asientosOcupados.sesion3 = store2.asientosComprados()
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');

body {
  font-family: 'Poppins', sans-serif;
  color: #333;
  background-color: #f4f4f4;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.information-container {
  max-width: 800px;
  margin: 20px auto;

  padding body,
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

  body {
    font-family: 'Roboto';
    line-height: 1.6;
    overflow: auto;
  }

  .horarios-txt__item {
    margin-bottom: 10px;
  }

  .main-block {
    display: flex;
    align-items: center;
    justify-content: start;
    width: 100%;
    background-color: #1e3367;
    height: 13vh;
    margin-bottom: 10vh;
  }

  .main-block h1 {
    color: white;
    font-size: xx-large;
    margin-left: 20vh;
  }

  .show-poster__button {
    background: linear-gradient(0deg, #060e83, #0c19b4);
    color: #fff;
    border: none;
    font-size: 16px;
    margin-left: 10px;
    width: 130px;
    height: 40px;
    padding: 1px 10px;
    border-radius: 5px;
  }

  .frame-function {
    display: flex;
    align-items: center;
    background-color: #1e3367;
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

  asientos-disponibles h3 {
    .asientos-disponibles h3 {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      font-size: 24px;
      color: #ff5733;
      text-transform: uppercase;
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
      letter-spacing: 2px;
      font-weight: bold;
      text-align: center;
    }
  }

  .information-title {
    text-align: center;
  }

  @media screen and (max-width: 768px) {
    .information-title h2 {
      color: #333;
      margin-top: 20px;
    }

    .horarios-txt__item {
      font-size: 14px;
    }
  }
}
</style>
