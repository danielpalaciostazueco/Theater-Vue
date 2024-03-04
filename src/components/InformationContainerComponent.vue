<template>
    <div id="container" class="information-container">
        <h2 class="information-title">{{ $t("Comprar1.text") }}</h2>
        <div class="container-frame" v-if="store.storeObras.length > 0 && store.storeObras[0]">
            <ul class="horarios-txt__list">
                <li v-if="store.storeObras[0].fechaUno" class='horarios-txt__item'>
                    {{ store.storeObras[0].fechaUno }}
                    <RouterLink :to="{
                        path: '/comprarDos/' + store.storeObras[0].obraID,
                        query: { idSesion: 1 }
                    }" class="show-poster__button" v-if="store.storeObras[0].obraID">{{ $t("Comprar1.text2") }}</RouterLink>
                </li>
                <li v-if="store.storeObras[0].fechaDos" class='horarios-txt__item'>
                    {{ store.storeObras[0].fechaDos }}
                    <RouterLink :to="{
                        path: '/comprarDos/' + store.storeObras[0].obraID,
                        query: { idSesion: 2 }
                    }" class="show-poster__button" v-if="store.storeObras[0].obraID">{{ $t("Comprar1.text2") }}</RouterLink>
                </li>
                <li v-if="store.storeObras[0].fechaTres" class='horarios-txt__item'>
                    {{ store.storeObras[0].fechaTres }}
                    <RouterLink :to="{
                        path: '/comprarDos/' + store.storeObras[0].obraID,
                        query: { idSesion: 3 }
                    }" class="show-poster__button" v-if="store.storeObras[0].obraID">{{ $t("Comprar1.text2") }}</RouterLink>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, } from 'vue';
import { useRoute, RouterLink } from 'vue-router';
import { useListadoObrasComprar1Store } from '../store/Comprar-1-Store';


const store = useListadoObrasComprar1Store();
const route = useRoute();
const idObra = route.params.Id as string;

onMounted(async () => {
    await store.cargarObras(idObra);
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

/* Estilos generales del cuerpo */
body {
    font-family: 'Roboto';
    line-height: 1.6;
    overflow: auto;
}

.horarios-txt__item{
    margin-bottom: 10px;
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
    /* background: #060e83; */
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


@media screen and (max-width: 768px) {

    .information-title h2 {
        color: #333;
        margin-top: 20px;
    }
}
</style>
