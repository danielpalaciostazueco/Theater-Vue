<template>
    <section class="poster-container">
        <div v-for="obra in store.obras" :key="obra.obraID" class="show-poster">
            <div class="show-poster__image">
                <img :src="obra.imagenes.split(',')[0]" alt="Imagen de la obra" />
            </div>
            <div class="show-poster__details">
                <h3 class="show-poster__details__title">{{ obra.nombre }}</h3>
                <RouterLink :to="{ path: '/Function/' + obra.obraID }" class="show-poster__button">
                    {{ $t('HomeAdmin.text4') }}
                </RouterLink>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { useListadoObrasStore } from '../store/Obra-Store'
import { onMounted } from 'vue'
import { RouterLink } from 'vue-router'
const store = useListadoObrasStore()

onMounted(() => {
    store.cargarObras()
})
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

@media screen and (max-width: 1285px) {
    .poster-container {
        display: flex;
        justify-content: space-evenly;
        background-color: #fff;
        padding: 20px;
        margin: 20px;
        flex-wrap: wrap;
    }


}

@media screen and (max-width: 768px) {
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
