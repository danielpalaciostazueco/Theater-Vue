<!--
<script setup lang="ts">
import { defineProps } from 'vue'

// Definición de props con sus tipos respectivos
const props = defineProps<{
    name?: string;
    images?: string;
}>()
</script>
<template>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="/css/Programacion.css">
        <link href='https://fonts.googleapis.com/css?family=Roboto' rel='stylesheet'>
        <title>Project-Theater</title>
        <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
    </head>

    <body>
        <header class="header">
            <div class="header__logo">
                <a href="/index.html"><img src="../img/logo.png" alt="Logo del Teatro Example" class="logo__image"></a>
            </div>
            <nav class="header__nav">
                <a href="/html/programacion-obra.html" class="nav__link">Programación</a>
                <a href="/html/informacion.html" class="nav__link">Información</a>
                <a href="/html/OtrasActividades.html" class="nav__link">Otras Actividades</a>
                <a href="/html/Contacto.html" class="nav__link">Contacto</a>
            </nav>
        </header>

        <main>
            <div class="main-block">
                <h1>Programación</h1>
            </div>

            <section class="poster-container">
                <div class='show-poster'>
                    <div class='show-poster__image'>
                    
                        <img :src="images" alt="Imagen de la obra" />
                    </div>
                    <div class='show-poster__details'>
                  
                        <h3 class='show-poster__details__title'>{{ name }}</h3>
                    </div>
                </div>
            </section>

        </main>

        <footer class="footer">
            <div class="footer__logo">
                <img src="../img/logo2.png" alt="Logo del Teatro">
            </div>
            <div class="footer__menu">
                <a href="/html/programacion-obra.html" class="footer__menu-link">Programación</a>
                <a href="/html/informacion.html" class="footer__menu-link">Información</a>
                <a href="/html/OtrasActividades.html" class="footer__menu-link">Otras Actividades</a>
                <a href="/html/Contacto.html" class="footer__menu-link">Contacto</a>
            </div>
            <div class="footer__networks">
                <img src="/img/tweeter.png" alt="">
                <img src="../img/instagram.png" alt="">
                <img src="../img/facebook.png" alt="">
            </div>
        </footer>
    </body>
</template>
<style>
/* Estilos Generales */
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
    color: black;
}

body {
    font-family: 'Roboto';
    line-height: 1.6;
    overflow: auto;
}

/* Estilos de Cabecera */
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
    justify-content: left;
    gap: 20px;
}

.nav__link {
    color: #000000;
    text-decoration: none;
}

/* Estilos del Bloque Principal */
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

/* Estilos de las Tarjetas de Programación */
.poster-container {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    background-color: white;
    padding: 20px;
    margin: 20px;
    gap: 20px;
}

.show-poster {
    text-align: center;
    background-color: #1E3367;
    padding: 20px;
    width: 300px;
    height: auto;
}

.show-poster__image img {
    width: 100%;
    /* Ajusta el ancho de la imagen al de su contenedor */
    height: 250px;
    /* Altura fija para mantener consistencia */
    object-fit: cover;
    /* Asegura que la imagen cubra el espacio asignado */
}

.show-poster__details {
    color: white;
}

.show-poster__button {
    padding: 10px 20px;
    background-color: #fff;
    color: black;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

/* Estilos para Botones y Pie de Página */
.button-seeMore {
    background-color: #1E3367;
    border-radius: 32px;
    display: flex;
    width: 32vh;
    height: 8vh;
    margin: 10vh;
    justify-content: center;
    align-items: center;
}

.button-seeMore_txt {
    color: white;
    font-size: x-large;
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

/* Estilos para Pantallas Pequeñas */
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

    main {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .main-block h1 {
        margin-left: 6vh;
    }

    .title-posters {
        flex-direction: column;
        align-items: center;
        margin: 2vh;
    }
}</style>
-->