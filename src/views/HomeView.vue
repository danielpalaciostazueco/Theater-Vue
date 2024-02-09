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
                        "Romeo y Julieta" es una obra de teatro escrita por William Shakespeare en el siglo XVI...
                    </p>
                </div>
            </section>
            <article>
                <div class="title-posters">
                    <h2 class="title-posters_txt">Todas las Obras</h2>
                </div>
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

.header {
    display: flex;
    align-items: center;
    background-color: #ffffff;
    color: #000000;
    height: 23vh;
    max-width: 1000px;
    margin: auto;
}

.header__logo {
    flex: 1;
    text-align: center;
}

.logo__image {
    max-width: 140px;
    height: auto;
}

.header__nav {
    flex: 2.2;
    display: flex;
    text-align: left;
    justify-content: left;
    gap: 20px;
}

.nav__link {
    color: #000000;
    text-decoration: none;
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
    color: #000000;
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

/* Ajusta el contenedor principal para que tenga un wrap y un margen negativo para compensar los márgenes de los elementos hijos */
.poster-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: stretch;
    background-color: white;
    padding: 20px;
    margin: -10px;
    /* Compensa el margen de los elementos hijos */
}

/* Ajusta los estilos de cada tarjeta para que tengan un ancho flexible y un margen estable */
.show-poster {
    text-align: center;
    background-color: #1E3367;
    padding: 20px;
    margin: 10px;
    /* Asegura que el margen sea la mitad del negativo en .poster-container */
    width: calc(33.333% - 40px);
    /* Asegura que tres elementos quepan en una fila teniendo en cuenta los márgenes */
    border: #000000 2px solid;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

/* Asegúrate de que las imágenes se escalen correctamente dentro de las tarjetas */
.show-poster__image img {
    width: 100%;
    height: auto;
    margin-bottom: 10px;
}

/* Estilos para los detalles de las tarjetas */
.show-poster__details {
    color: white;
}

/* Estilos para el botón dentro de cada tarjeta */
.show-poster__button {
    padding: 10px 20px;
    background-color: #fff;
    color: black;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

.button-frame {
    display: flex;
    justify-content: left;
    margin-top: 10vh;
}

.button-seeMore {
    background-color: #1E3367;
    border-radius: 32px;
    display: flex;
    width: 32vh;
    height: 8vh;
    margin-left: 30vh;
    justify-content: center;
    align-items: center;
    margin-bottom: 7vh;
}

.button-seeMore_txt {
    color: white;
    font-size: x-large;
}

.footer {
    margin-top: 13vh;
    display: flex;
    align-items: center;
    background-color: #1E3367;
    text-align: center;
    width: 100%;
    height: 25vh;
}

.footer {
    margin-top: 10vh;
    display: flex;
    align-items: center;
    background-color: #1E3367;
    text-align: center;
    width: 100%;
    height: 25vh;
}

.footer__logo {
    flex: 0.7;
    text-align: right;
}

.footer__menu {
    flex: 1;
    text-align: center;
}

.footer__menu a {
    color: white;
    margin-right: 2vh;
}

.footer__networks {
    flex: 0.7;
    text-align: left;
}

.footer__logo img {
    width: 90px;
    border-radius: 70px;
}

.footer__networks img {
    width: 40px;
    margin-right: 4vh;
}


@media screen and (max-width: 1150px) {


    .header {
        margin-top: 5vh;
        display: flex;
        height: auto;
        text-align: center;
        margin-bottom: 5vh;
    }

    .header__logo {
        margin-left: 5vh;
    }

    .header__nav {
        flex-direction: column;
        align-items: center;
        text-align: center;
        margin-top: 10px;
    }

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

    /* Ajusta el contenedor principal para que tenga un wrap y un margen negativo para compensar los márgenes de los elementos hijos */
    .poster-container {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
        align-items: stretch;
        background-color: white;
        padding: 20px;
        margin: -10px;
        /* Compensa el margen de los elementos hijos */
    }

    /* Ajusta los estilos de cada tarjeta para que tengan un ancho flexible y un margen estable */
    .show-poster {
        text-align: center;
        background-color: #1E3367;
        padding: 20px;
        margin: 10px;
        /* Asegura que el margen sea la mitad del negativo en .poster-container */
        width: calc(33.333% - 40px);
        /* Asegura que tres elementos quepan en una fila teniendo en cuenta los márgenes */
        border: #000000 2px solid;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    /* Asegúrate de que las imágenes se escalen correctamente dentro de las tarjetas */
    .show-poster__image img {
        width: 100%;
        height: auto;
        margin-bottom: 10px;
    }

    /* Estilos para los detalles de las tarjetas */
    .show-poster__details {
        color: white;
    }

    /* Estilos para el botón dentro de cada tarjeta */
    .show-poster__button {
        padding: 10px 20px;
        background-color: #fff;
        color: black;
        border: none;
        border-radius: 4px;
        cursor: pointer;
    }

    .button-frame {
        width: 70%;
        height: auto;
        margin: 5vh;
    }

    .button-seeMore {
        margin-left: 0;
    }

    .footer {
        display: flex;
        justify-content: center;
    }

    .footer__logo {
        text-align: center;
    }

    .footer__menu {
        display: flex;
        flex-direction: column;
    }

    .footer__networks {
        display: flex;
        flex-direction: column;
    }
}

/* media queries */
</style>
