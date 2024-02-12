<script setup lang="ts">
import { ref, onMounted } from 'vue';

interface Obra {
    nombre: string;
    imagenesArray: string[];
    obraID: string;
}

const obras = ref<Obra[]>([]);

const fetchObras = async () => {
    try {
        const response = await fetch('http://localhost:8001/obras');
        if (!response.ok) {
            throw new Error('Error al obtener los datos de las obras');
        }
        const data = await response.json();
        obras.value = data;
    } catch (error) {
        console.error('Error al obtener los datos de las obras:', error);
    }
};

onMounted(() => {
    fetchObras();
});
</script>
<template>
    <body>
        <main class="main">
            <section class="performance-block">
                <div class="performance-block__info">
                    <h2 class="performance-block__title">Próxima Función</h2>
                    <RouterLink to="/Programacion" class="performance-block__button">Comprar Entradas</RouterLink>
                </div>
                <div class="performance-block__image">
                    <img src="../assets/img/ROMEO-Y-JULIETA.jpeg" alt="Función de Teatro" class="image__img" />
                </div>
                <div class="performance-block__name">
                    <h2 class="performance-block__name-title">Romeo y Julieta</h2>
                    <p class="performance-block__name-text">
                        "Romeo y Julieta" es una obra de teatro escrita por William Shakespeare en el siglo XVI. La trama
                        sigue a dos jóvenes amantes, Romeo y Julieta, cuyas familias rivales generan conflictos. A pesar de
                        las adversidades, se enamoran y casan en secreto, pero una serie de malentendidos y tragedias lleva
                        a un desenlace fatal. La obra explora temas como el amor, la rivalidad familiar y el destino,
                        convirtiéndose en una de las historias de amor más conocidas de la literatura.
                    </p>
                </div>
            </section>
            <article>
                <section class="poster-container">
                    <div v-for="obra in obras" :key="obra.obraID" class='show-poster'>
                        <div class='show-poster__image'>
                            <img :src="obra.imagenesArray && obra.imagenesArray.length > 0 ? obra.imagenesArray[0] : 'imagen-predeterminada.jpg'"
                                alt="Imagen de la obra" />
                        </div>
                        <div class='show-poster__details'>
                            <h3 class='show-poster__details__title'>{{ obra.nombre }}</h3>
                            <RouterLink :to="{ path: '/Function/' + obra.obraID }" class='show-poster__button'>Comprar
                                Entradas</RouterLink>
                        </div>
                    </div>
                </section>

            </article>
        </main>
    </body>
</template>
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

body {
    font-family: 'Roboto';
    line-height: 1.6;
    overflow: auto;
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
    color: #000000;
    margin-bottom: 5vh;
    font-size: xxx-large;
}

.performance-block__button {
    display: inline-block;
    padding: 10px 20px;
    background-color: #fffefe !important;
    color: #000000 !important;
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
    padding: 10px 20px !important;
    background-color: #fff !important;
    color: #1E3367 !important;
    border: none !important;
    border-radius: 4px !important;
    cursor: pointer !important;
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
