<template>
  <main>
    <article class="article-block">
      <div class="main-block">
        <h1>{{ $t("Comprar2.information") }}</h1>
      </div>
      <section class="frame-function" v-if="obra">
        <div class="frame-function__poster">
          <img :src="obra.imagenes[0]" alt="Imagen de la obra">
        </div>
        <div class="frame-function__title">
          <h2>{{ obra.nombre }}</h2>
        </div>
      </section>
    </article>

    <div class="cinema-seats">
      <div v-for="asiento in asientos" :key="asiento.idAsiento" class="seat"
        :class="{ 'occupied': !asiento.isFree, 'selected': asiento.selected }" @click="toggleSeatSelection(asiento)">
        <span>{{ asiento.idAsiento }}</span>
      </div>
    </div>
    <div class="cinema-button">
      <div>
        <p>{{ $t("Comprar2.text") }} {{ calcularTotal }} €</p>
      </div>
      <div>
        <button @click="realizarCompra">{{ $t("Comprar2.text2") }}</button>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { onMounted, ref, computed } from 'vue';
import { useRoute } from 'vue-router';
import { useListadoObrasComprar2Store } from '../store/Comprar-2-Store';

const route = useRoute();
const store = useListadoObrasComprar2Store();
const idObra = route.params.Id as string;
const idSesion = route.query.idSesion as string;

const asientosSeleccionados = ref(new Set<number>());

onMounted(async () => {
  await store.cargarObra(idObra);
  await store.cargarAsientosOcupados(idObra, idSesion);
  await store.cargarTodosLosAsientos();
});

const calcularTotal = computed(() => {
  return asientosSeleccionados.value.size * store.precioPorAsiento;
});

const toggleSeatSelection = (asiento: any) => {
  if (!asiento.isFree) return;
  if (asientosSeleccionados.value.has(asiento.idAsiento)) {
    asientosSeleccionados.value.delete(asiento.idAsiento);
  } else {
    asientosSeleccionados.value.add(asiento.idAsiento);
  }
  asientosSeleccionados.value = new Set(asientosSeleccionados.value);
};

const realizarCompra = async () => {
  const asientosParaComprar = [...asientosSeleccionados.value];
  if (asientosParaComprar.length > 0) {
    await store.comprarAsientos(asientosParaComprar, idObra, idSesion);
    asientosSeleccionados.value.clear();
    await store.cargarAsientosOcupados(idObra, idSesion);
    await store.cargarTodosLosAsientos();
  }
};

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

