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
    display: flex;
    align-items: center;
    justify-content: start;
    width: 100%;
    background-color: #1e3367;
    height: 13vh;
    margin-bottom: 10vh;
    color: #fff
}

.main-block h1[data-v-fd379de5] {
    padding-left: 30px;
    margin-bottom: 50px;

}
</style>
