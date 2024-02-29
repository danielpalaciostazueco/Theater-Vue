<template>
    <div class="main-block">

        <h1 v-if="variable != null"> {{ $t(variable) }}</h1>
        <h1 v-if="showFuction"> {{ storeFunction.storeObras[0].nombre }}</h1>
        <h1 v-if="showComprarUno"> {{ storeComprar1.storeObras[0].nombre }}</h1>
        <h1 v-if="showComprarDos"> {{ storeComprar2.storeObras[0].nombre }}</h1>
    </div>
</template>

<script setup lang="ts">
let variable: string
import { useListadoObrasFunctionStore } from '@/store/Function-Store';
import { useRoute } from 'vue-router';
import { useListadoObrasComprar1Store } from '@/store/Comprar-1-Store';
import { useListadoObrasComprar2Store } from '@/store/Comprar-2-Store';
import { computed, onMounted } from 'vue';


const route = useRoute();
const idObra = route.params.Id as string;
const showComprarUno = computed(() => route.name === 'ComprarUno');
const showComprarDos = computed(() => route.name === 'ComprarDos');
const showFuction = computed(() => route.name === 'Function');

let storeFunction = useListadoObrasFunctionStore();

let storeComprar1 = useListadoObrasComprar1Store();

let storeComprar2 = useListadoObrasComprar2Store();

const pathname = window.location.pathname;

if (pathname === '/Programacion') {
    variable = "Programacion.text1"
}

if (pathname === '/About') {
    variable = "About.information"
}
if (pathname === '/Contact') {
    variable = "Contact.information"
}

if (pathname === '/Activities') {
    variable = "Activities.activities"
}

onMounted(async () => {
    if (showComprarUno.value) {
        await storeComprar1.cargarObras(idObra);
    }
    if (showComprarDos.value) {
        await storeComprar2.cargarObra(idObra);
    }
    if (showFuction.value) {
        await storeFunction.cargarObras(idObra);
    }
    
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

body {
    font-family: 'Roboto';
    line-height: 1.6;
    overflow: auto;
}

.main-block {
    background-color: #1e3367;
    color: white;
}

.main-block h1 {
    padding-left: 30px;
}

.performance-block {
    background-color: #1E3367;
    display: flex;
    align-items: center;
    min-height: 60vh;
}

.performance-block__info {
    flex: 0.7;
    text-align: center;
    margin-bottom: 10vh;
}

.performance-block__title {
    color: #ffffff;
    margin-bottom: 5vh;
    font-size: xxx-large;
}

.performance-block__button {
    display: inline-block;
    padding: 10px 20px;
    background-color: #ffffff;
    color: #ffffff;
    text-decoration: none;
    border-radius: 8px;
    font-size: x-large;
}

.performance-block__image {
    flex: 0.7;
    text-align: center;
}

.performance-block__image img {
    width: 350px;
}

.performance-block__name {
    flex: 1;
    text-align: left;
    align-self: start;
    margin-top: 10vh;
}

.performance-block__name-title {
    font-size: xx-large;
    color: white;
    margin-bottom: 5vh;
}

.performance-block__name-text {
    color: white;
    text-align: center;
}

.title-posters {
    display: flex;
    justify-content: center;
    margin: 7vh;
}

.title-posers_txt {
    font-size: xx-large;
}

.poster-container {
    display: flex;
    justify-content: space-evenly;
    background-color: white;
    padding: 20px;
    margin: 20px;
}

.show-poster {
    text-align: center;
    background-color: #1E3367;
    padding: 20px;
    width: 264px;

    border: #ffffff 2px solid;
    box-sizing: border-box;

}

.show-poster__image {
    margin-bottom: 10px;
}

.show-poster__image img {
    width: 100%;
    height: 20vh;
}

.poster__img {
    height: 300px;

    width: 100%;

}

.show-poster__details {
    color: white;
    font-size: smaller;
}

.show-poster__title {
    margin-bottom: 10px;
}

.show-poster__button {
    padding: 10px 20px;
    background-color: #fff;
    color: #1E3367;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}



@media screen and (max-width: 1150px) {
    .performance-block {
        display: flex;
        flex-direction: column;
    }

    .performance-block__name {
        display: none;
    }

    .main-block h1 {
        margin-left: 6vh;
    }

    article {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .title-posters {
        flex-direction: column;
        align-items: center;
        margin: 2vh;
    }

    .title-posers_txt {
        font-size: x-large;
    }

    .poster-container {
        flex-direction: column;
        align-items: center;
    }

    .show-poster {
        margin-bottom: 7vh;
    }

    .poster-container img {
        margin-bottom: 10px;
    }

    .show-poster {
        padding: 15px;
    }

    .show-poster__image {
        margin-bottom: 10px;
    }
}
</style>
