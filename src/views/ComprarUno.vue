<!--
<script setup lang="ts">
import { defineProps } from 'vue'

// Definición de props con sus tipos respectivos
const props = defineProps<{
    name?: string;
    images?: string;
    horarios?: string[];
}>()
</script>
<template>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="/css/compraEntradas1.css">
        <link href='https://fonts.googleapis.com/css?family=Roboto' rel='stylesheet'>
        <title>Project-Thiater</title>
    </head>

    <body>


        <header class="header">
            <div class="header__logo">
                <a href="/index.html"><img src="/img/logo.png" alt="Logo del Teatro Example" class="logo__image"></a>
            </div>
            <nav class="header__nav">

                <a href="/html/programacion-obra.html" class="nav__link">Programación</a>
                <a href="/html/informacion.html" class="nav__link">Información</a>
                <a href="/html/OtrasActividades.html" class="nav__link">Otras Actividades</a>
                <a href="/html/Contacto.html" class="nav__link">Contacto</a>

            </nav>
        </header>


        <main>
            <section class="main-block">
                <h1 class="main-block__title">Compra de entradas</h1>
            </section>

            <section class="frame-function">
                <div class="frame-function__poster">
                    <img :src="images" alt="Imagen destacada de la obra" />
                </div>
                <div class="frame-function__title">
                    <h2 class="frame-function__title-text">{{ name }}</h2>
                </div>
            </section>

            <div id="container" class="information-container">
                <h2 class="information-title">Información de Fechas y Horas</h2>
                <div class="container-frame" id="informacionSeleccionada"></div>
            </div>

            <div class="horario">
                <ul class="horarios-txt__list">
                    <li class='horarios-txt__item'>{{ horarios }}</li>
                </ul>
            </div>


        </main>


        <footer class="footer">
            <div class="footer__logo">
                <img src="/img/logo2.png" alt="">
            </div>
            <div class="footer__menu">
                <a href="/html/programacion-obra.html" class="footer__menu-link">Programación</a>
                <a href="/html/informacion.html" class="footer__menu-link">Información</a>
                <a href="/html/OtrasActividades.html" class="footer__menu-link">Otras Actividades</a>
                <a href="/html/Contacto.html" class="footer__menu-link">Contacto</a>
            </div>
            <div class="footer__networks">
                <img src="/img/tweeter.png" alt="">
                <img src="/img/instagram.png" alt="">
                <img src="/img/facebook.png" alt="">
            </div>
        </footer>
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

/* Estilos generales del cuerpo */
body {
    font-family: 'Roboto';
    line-height: 1.6;
    overflow: auto;
}

/* Estilos del encabezado */
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
    background-color: #1E3367;
    color: #e9e3e3;
    border: none;
    /* padding: 10px 20px; */
    font-size: 16px;
    margin-left: 10px;
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

.horario {
    border: 1px solid #ccc;
    padding: 10px;
    margin-bottom: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 900px;
    margin: auto;
}

.fecha,
.hora,
.disponibilidad {
    flex: 1;
}

.boton-comprar {
    background-color: #1E3367;
    color: white;
    padding: 8px 15px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 14px;
    border-radius: 4px;
}

.boton-comprar:hover {
    background-color: #45a049;
}

/* Estilos del pie de página */
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

    main {
        margin: 0 15px;
    }

    .frame-function {
        display: flex;
        flex-direction: column;
        width: auto;
        height: 500px;
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

    .main-block h1 {
        margin-left: 6vh;
    }
}
</style>
-->