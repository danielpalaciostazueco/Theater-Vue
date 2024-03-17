<template>
    <section class="performance-block">
        <div class="performance-block__info">
            <h2 class="performance-block__title">{{ store.obras[0].nombre }}</h2>
            <RouterLink to="/Programacion" class="performance-block__button">{{ $t('HomeAdmin.text4') }}
            </RouterLink>
        </div>
        <div class="performance-block__image">
            <img :src=store.obras[0].cartel alt="Función de Teatro" class="image__img" />
        </div>
        <div class="performance-block__name">
            <h2 class="performance-block__name-title">{{ store.obras[0].nombre }}</h2>
            <p class="performance-block__name-text">
                {{ store.obras[0].descripcion }}
            </p>
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
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500;600&family=Roboto&display=swap');

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

.performance-block {
    background-color: #1e3367;
    display: flex;
    align-items: center;
    min-height: 60vh;
    color: #ffffff;
    padding: 4vh;
}

.performance-block__info {
    flex: 1;
    text-align: center;
    padding: 4vh;
}

.performance-block__title {
    font-family: 'Poppins', sans-serif;
    font-size: 3rem;
    font-weight: 600;
    margin-bottom: 2vh;
}

.performance-block__button {
    padding: 1rem 2rem;
    background-color: #ffffff;
    color: #1e3367;
    border: none;
    border-radius: 25px;
    font-family: 'Poppins', sans-serif;
    font-size: 1.2rem;
    font-weight: 500;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transition: all 0.3s ease;
}

.performance-block__button:hover {
    background-color: #f2f2f2;
    transform: translateY(-2px);
}

.performance-block__image img {
    max-width: 100%;
    height: auto;
    margin-left: 40px;
}

.performance-block__name-title {
    font-family: 'Poppins', sans-serif;
    font-size: 2.5rem;
    margin-bottom: 1vh;
    margin-left: 190px;
}

.performance-block__name-text {
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    margin-left: 129px;
}



@media screen and (max-width: 768px) {
    .performance-block {
        flex-direction: column;
        margin-top: 400px;
    }

    .performance-block__name-title,
    .performance-block__name-text {
        margin-left: 0;
        text-align: center;
    }

    .performance-block__button {
        margin: auto;
        margin-top: 2vh;
    }

    .performance-block__image img {
        max-width: 100%;
        height: auto;
    }
}
</style>
