<template>
  <section class="frame-function">

    <div class="frame-function__poster" v-if="showComprarUno && storeComprar1.storeObras.length > 0">
      <img v-if="storeComprar1.storeObras[0].imagenes?.[0]" :src="storeComprar1.storeObras[0].imagenes[0]"
        alt="Imagen de la obra" />

    </div>


    <div class="frame-function__poster" v-if="showComprarDos && storeComprar2.storeObras.length > 0">
      <img v-if="storeComprar2.storeObras[0].imagenes?.[0]" :src="storeComprar2.storeObras[0].imagenes[0]"
        alt="Imagen de la obra" />
    </div>

    <div class="frame-function__title">
      <h2 v-if="showComprarUno && storeComprar1.storeObras.length > 0">{{ storeComprar1.storeObras[0]?.nombre }}</h2>
      <h2 v-if="showComprarDos && storeComprar2.storeObras.length > 0">{{ storeComprar2.storeObras[0]?.nombre }}</h2>
      <h2 v-if="showComprarDos">{{ $t("Function.text7") }} {{ idSesion }}</h2>
      <h2 v-if="showComprarDos && idSesion === '1'">{{ storeComprar2.storeObras[0]?.fechaUno }}</h2>
      <h2 v-if="showComprarDos && idSesion === '2'">{{ storeComprar2.storeObras[0]?.fechaDos }}</h2>
      <h2 v-if="showComprarDos && idSesion === '3'">{{ storeComprar2.storeObras[0]?.fechaTres }}</h2>
      <h2 v-if="showComprarDos">{{ storeComprar2.storeObras[0].duracion }} {{ $t("Function.text6") }}</h2>

    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue';
import { useRoute, RouterLink } from 'vue-router';
import { useListadoObrasComprar1Store } from '../store/Comprar-1-Store';
import { useListadoObrasComprar2Store } from '../store/Comprar-2-Store';

const route = useRoute();
const storeComprar1 = useListadoObrasComprar1Store();
const storeComprar2 = useListadoObrasComprar2Store();

const idObra = computed(() => route.params.Id as string);
const idSesion = computed(() => route.query.idSesion as string);
const showComprarUno = computed(() => route.name === 'ComprarUno');
const showComprarDos = computed(() => route.name === 'ComprarDos');

onMounted(async () => {
  if (showComprarUno.value) {
    await storeComprar1.cargarObras(idObra.value);
  }
  if (showComprarDos.value) {
    await storeComprar2.cargarObra(idObra.value);
  }
});
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Roboto:wght@400;500&display=swap');

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
  font-family: 'Roboto', sans-serif;

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
  background-color: #1e3367;
  height: 13vh;
  margin-bottom: 10vh;
}

.main-block h1 {
  color: white;
  font-size: xx-large;
  margin-left: 20vh;
  font-family: 'Playfair Display', serif;

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
  font-family: 'Playfair Display', serif;

}

#container {
  text-align: center;
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
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 15vh;
}

@media screen and (max-width: 768px) {
  .frame-function {
    display: flex;
    align-items: center;
    background-color: #1e3367;
    width: 800px;
    height: 450px;
    text-align: center;
    max-width: 323px;
    margin: auto;
    margin-top: 5vh;
  }

  .frame-function__title h2 {
    font-size: 30px;
    color: #fff;
    display: none;

  }

  .frame-function__poster {
    margin-left: 23px;
  }
}
</style>