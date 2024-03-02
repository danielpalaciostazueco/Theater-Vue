<template>
    <section class="horarios" v-if="store.storeObras && store.storeObras.length > 0">
        <div class="horarios-img" v-if="store.storeObras[0].imagenes && store.storeObras[0].imagenes.length > 0">
            <img :src="store.storeObras[0].imagenes[0]" alt="Imagen destacada de la obra" />
        </div>
        <div class="horarios-txt">
            <h2 class="horarios-txt__title">{{ $t("Function.text1") }}</h2>
            <ul class="horarios-txt__list" v-if="store.storeObras[0].fechaUno && store.storeObras[0].fechaDos && store.storeObras[0].fechaTres">
                <li v-for="fecha in [store.storeObras[0].fechaUno, store.storeObras[0].fechaDos, store.storeObras[0].fechaTres]"
                    :key="fecha" class="horarios-txt__item">{{ fecha }}</li>
            </ul>
            <div>
                <h2 class="horarios-txt__title2">{{ $t("Function.text5") }}</h2>
                <p class="horarios-txt">{{ store.storeObras[0].duracion }} {{ $t("Function.text6") }}</p>
            </div>
        </div>
    </section>
    <div class="primera-img" v-if="store.storeObras[0].imagenes && store.storeObras[0].imagenes.length > 1">
        <img :src="store.storeObras[0].imagenes[1]" alt="Imagen secundaria de la obra" />
    </div>
    <article>
        <div class="button-bought" id="boton-comprar">
            <RouterLink :to="{ path: '/ComprarUno/' + store.storeObras[0].obraID }" class="show-poster__button">
                {{ $t("Function.text3") }}
            </RouterLink>
        </div>
    </article>
    <section>
        <div class="frame-information">
            <div class="frame-information__title">
                <h2>{{ $t("Function.text2") }}</h2>
            </div>
            <div class="frame-information__txt">
                <p>{{ store.storeObras[0].descripcion }}</p>
            </div>
        </div>
        <div class="frame-repart">
            <div class="frame-repart__title">
                <h2>{{ $t("Function.text4") }}</h2>
            </div>
            <div class="frame-repart__txt">
                <ul class="frame-repart__list">
                    <li v-for="actor in store.storeObras[0].actores" :key="actor" class="frame-repart__item">
                        {{ actor }}
                    </li>
                </ul>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { onMounted, } from 'vue';
import { useRoute, RouterLink } from 'vue-router';
import { useListadoObrasFunctionStore } from '../store/Function-Store';


const store = useListadoObrasFunctionStore();
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

body {
    font-family: 'Roboto';
    line-height: 1.6;
    overflow: auto;
}



.horarios {
    display: flex;
    align-items: center;
    align-content: center;
    width: 100%;
    margin-bottom: 5vh;
}

.horarios-img {
    flex: 1;
    text-align: center;
}

.duracion-title{
    font-size: xxx-large;
    margin-bottom: 3vh;
}

.horarios-img img {
    width: 500px;
}

.horarios-txt {
    flex: 1;
    text-align: center;
}

.horarios-txt__title {
    font-size: xxx-large;
    margin-bottom: 3vh;
}
.horarios-txt__title2{
    font-size: xxx-large;
    margin-bottom: 3vh;
    margin-top: 5vh;
}

.horarios-txt__list {
    margin: 0;
    padding: 0;
    text-decoration: none;
    margin-bottom: 10px;
}

.horarios-txt{
    font-size: larger;
}

.horarios-txt__item {
    font-size: xx-large;
    list-style-position: inside;
}

.primera-img {
    display: flex;
    justify-content: center;
    width: 100%;
    margin-bottom: 5vh;
}

.primera-img img {
    max-width: 100vh;
}

article {
    display: flex;
    justify-content: right;
    margin-top: 10vh;
}

.button-bought {
    background-color: #1E3367;
    border-radius: 32px;
    display: flex;
    width: 47vh;
    height: 8vh;
    margin-right: 30vh;
    justify-content: center;
    align-items: center;
    margin-bottom: 10vh;
}


.show-poster__button {
    background-color: #1E3367;
    color: #fff;
    border: none;
    padding: 10px 20px;
    font-size: 16px;
}

.frame-information {
    display: flex;
    flex-direction: column;
    max-width: 600px;
    margin: auto;
}

.frame-information__title {
    position: relative;
    margin-bottom: 25px;
    color: #000000;
    font-size: 20px;
}

.frame-information__title h2::after {
    content: "";
    width: 100%;
    position: absolute;
    height: 2px;
    display: block;
    margin: 0 auto;
    background-color: #000000;
}

.frame-information__txt {
    margin-top: 3vh;
    margin-bottom: 5vh;
    font-size: 20px;
}

.frame-repart {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 600px;
    margin: auto;
}

.frame-repart__title {
    font-size: 20px;
}

.frame-repart__item {
    list-style-position: inside;
    font-size: 20px;
}



@media screen and (max-width: 768px) {


    .horarios {
        flex-direction: column;
        align-items: center;
        text-align: center;
        margin-bottom: 5vh;
    }

    .horarios-img,
    .horarios-txt {
        flex: 1;
    }

    .horarios-img img {
        width: 344px;
        margin-top: 10vh;
    }

    .horarios-txt {
        margin-top: 3vh;
    }

    .horarios-txt__title {
        font-size: 32px;
        margin-bottom: 10px;
    }
     .horarios-txt__title2 {
        font-size: 32px;
        margin-bottom: 10px;
    }


    .horarios-txt__item {
        font-size: 22px;
    }

    .horarios-txt__list {
        margin: 0;
        padding: 0;
        text-decoration: none;
        margin-bottom: 7px;
    }


    .primera-img img {
        max-width: 300px;
    }


    .button-bought {
        margin-right: 0;
        margin-bottom: 10vh;
        width: 300px;
        margin-right: 45px;
    }

    .frame-information,
    .frame-repart {
        max-width: 100%;
    }

    .show-poster__button {
        background-color: #1E3367;
        color: #fff;
        border: none;
        padding: 10px 20px;
        font-size: 16px;
    }
}
</style>
