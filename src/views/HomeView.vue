
<script setup lang="ts">

import { defineProps } from 'vue'
// Definición de props con sus tipos respectivos
const props = defineProps<{
    name?: string;
    images?: string;
}>()
const obras = [
    {
        name: 'Esperando a Godot',
        description: 'Una obra teatral absurda que sigue a dos personajes, Vladimir y Estragon, mientras esperan en un lugar desolado a alguien llamado Godot, explorando temas de la existencia, la alienación y la esperanza.',
        authors: [
            'Samuel Beckett'
        ],
        duration: 2,
        actors: [
            'Alexander Montgomery',
            'Isabella Ramirez',
            'Benjamin Worthington',
            'Olivia Hawthorne',
            'Nathaniel Harrington'
        ],
        images: [
            'https://ik.imagekit.io/daniel2003/fotos-descripci%C3%B3n-obras-teatro/Esperando-Godot/esperando-a-godot_FN.jpg',
            'https://ik.imagekit.io/daniel2003/fotos-descripci%C3%B3n-obras-teatro/Esperando-Godot/esperando-a-godot_FN2.jpg',
            'https://ik.imagekit.io/daniel2003/fotos-descripci%C3%B3n-obras-teatro/Esperando-Godot/una-escena-de-esperando-a-godot.jpg'
        ],
        dates: [
            1709499600,
            1710021600,
            1710802800
        ],
        slug: 'godot',
        cartel: 'https://ik.imagekit.io/daniel2003/fotos-descripci%C3%B3n-obras-teatro/Esperando-Godot/esperando-a-godot.jpg'
    },

    {

        name: 'El Fantasma de la Ópera',
        description: 'Una icónica obra de teatro musical que narra la historia de un misterioso y desfigurado hombre conocido como el Fantasma, que vive en los pasadizos de la Ópera de París y se obsesiona con una joven y talentosa soprano, Christine.',
        authors: [
            'Andrew Lloyd Webber'
        ],
        duration: 2.5,
        actors: [
            'Sophia Anderson',
            'Daniel Blackwood',
            'Elena Rodriguez',
            'Nicholas Smith',
            'Isabella Johnson'
        ],
        images: [
            'https://ik.imagekit.io/daniel2003/fotos-descripci%C3%B3n-obras-teatro/Fantasma-opera/fantasma-opera_FN.jpg',
            'https://ik.imagekit.io/daniel2003/fotos-descripci%C3%B3n-obras-teatro/Fantasma-opera/Fantasma-operea_FN2.jpg'

        ],
        dates: [
            1704659400,
            1705093200,
            1705950000

        ],
        slug: 'fantasma',
        cartel: 'https://ik.imagekit.io/daniel2003/fotos-descripci%C3%B3n-obras-teatro/Fantasma-opera/fantasma-opera.jpg'
    },
    {

        name: 'Esto No Es Un Show',
        description: 'Un audaz espectáculo que desafía las convenciones, combinando elementos de teatro, danza y performance art. La trama sigue a un grupo ecléctico de artistas mientras exploran temas de identidad, realidad y percepción a través de actuaciones vanguardistas.',
        authors: [
            'Valentina Moreno',
            'Carlos Ruiz'
        ],
        duration: 1.75,
        actors: [
            'Miguel Ángel Jiménez',
            'Laura González',
            'José Martín',
            'Carmen Sánchez',
            'Diego Torres'
        ],
        images: [
            'https://ik.imagekit.io/daniel2003/fotos-descripci%C3%B3n-obras-teatro/Galder/galder2.jpg',
            'https://ik.imagekit.io/daniel2003/fotos-descripci%C3%B3n-obras-teatro/Galder/galder3.jpg'

        ],
        dates: [
            1714604400,
            1715810400,
            1716238800
        ],
        slug: 'show',
        cartel: 'https://ik.imagekit.io/daniel2003/fotos-descripci%C3%B3n-obras-teatro/Galder/Galder.jpeg'
    },
    {

        name: 'Hamlet',
        description: 'Una de las tragedias más emblemáticas de William Shakespeare, centrada en la historia del príncipe Hamlet de Dinamarca, quien busca vengar la muerte de su padre. La obra explora temas complejos como la locura, la traición, la venganza y la moralidad.',
        authors: [
            'William Shakespeare'
        ],
        duration: 3,
        actors: [
            'Alexander Knight',
            'Sarah Miller',
            'David Johnson',
            'Emily White',
            'Richard Brown'
        ],
        images: [
            'https://ik.imagekit.io/daniel2003/fotos-descripci%C3%B3n-obras-teatro/Hamlet/hamlet_FN2.jpg',
            'https://ik.imagekit.io/daniel2003/fotos-descripci%C3%B3n-obras-teatro/Hamlet/hamlet_FN.jpg'
        ],
        dates: [

            1717266600,
            1717700400,
            1718056800

        ],
        slug: 'hamlet',
        cartel: 'https://ik.imagekit.io/daniel2003/fotos-descripci%C3%B3n-obras-teatro/Hamlet/hamlet.jpg'
    },
    {

        name: 'El Rey León',
        description: 'Un musical espectacular basado en la famosa película animada de Disney. La historia sigue las aventuras de Simba, un joven león que debe enfrentar numerosos desafíos para reclamar su lugar como el legítimo rey de la sabana. El musical es conocido por su impresionante uso de disfraces, marionetas y efectos visuales para recrear el ambiente de África.',
        authors: [
            'Irene Mecchi',
            'Jonathan Roberts',
            'Linda Woolverton'
        ],
        duration: 2.5,
        actors: [
            'Michael James',
            'Elizabeth Green',
            'Thomas Hill',
            'Rachel Adams',
            'William Parker'
        ],
        images: [
            'https://ik.imagekit.io/daniel2003/fotos-descripci%C3%B3n-obras-teatro/Rey-Leon/reyleonIMG3.jpg',
            'https://ik.imagekit.io/daniel2003/fotos-descripci%C3%B3n-obras-teatro/Rey-Leon/reyLeonImg1.jpg',
            'https://ik.imagekit.io/daniel2003/fotos-descripci%C3%B3n-obras-teatro/Rey-Leon/reyleonIMG2.avif'
        ],
        dates: [
            1719867600,
            1720638000,
            1721505600

        ],
        slug: 'leon',
        cartel: 'https://ik.imagekit.io/daniel2003/fotos-descripci%C3%B3n-obras-teatro/Rey-Leon/reyLeon.webp'
    },
    {

        name: 'Bodas de sangre',
        description: 'Una comedia romántica contemporánea que sigue la historia de varias parejas que se preparan para sus respectivas bodas. La obra teje una trama llena de enredos amorosos, malentendidos cómicos y momentos de reflexión sobre las relaciones y el matrimonio.',
        authors: [
            'Ana García',
            'Luis Hernández'
        ],
        duration: 2,
        actors: [
            'Elena Sánchez',
            'Carlos Pérez',
            'María López',
            'José Torres',
            'Laura Jiménez'
        ],
        images: [
            'https://ik.imagekit.io/daniel2003/fotos-descripci%C3%B3n-obras-teatro/BodasDeSangre/BodasDeSangre_NF2.jpg',
            'https://ik.imagekit.io/daniel2003/fotos-descripci%C3%B3n-obras-teatro/BodasDeSangre/BodasDeSangre_NF.jpg'

        ],
        dates: [
            1722632400,
            1723492800,
            1724274000
        ],
        slug: 'bodas',
        cartel: 'https://ik.imagekit.io/daniel2003/fotos-descripci%C3%B3n-obras-teatro/BodasDeSangre/BodasDeSangre.jpg'
    },
    {
        name: 'B-Vocal',
        description: 'Un aclamado grupo vocal que destaca por su habilidad para fusionar a cappella y comedia en sus actuaciones. B-Vocal cautiva al público con su mezcla única de música, humor y la sorprendente habilidad de crear sonidos instrumentales con sus voces, explorando diversos géneros musicales desde el pop hasta el clásico.',
        authors: [
            'Alberto Marca',
            'Carlos Marco'
        ],
        duration: 1.5,
        actors: [
            'Augusto González',
            'Fernando Ardévol',
            'Juan Luis García'
        ],
        images: [
            'https://ik.imagekit.io/daniel2003/fotos-descripci%C3%B3n-obras-teatro/B-vocal/b-vocal_NF.jpg',
            'https://ik.imagekit.io/daniel2003/fotos-descripci%C3%B3n-obras-teatro/B-vocal/b.jpg'
        ],
        dates: [

            1725224400,
            1725402600,
            1726009200
        ],
        slug: 'vocal',
        cartel: 'https://ik.imagekit.io/daniel2003/fotos-descripci%C3%B3n-obras-teatro/B-vocal/b-vocal_LG.jpg'
    }
]

</script>
<template>
    <body>
        <main class="main">
            <section class="performance-block">
                <div class="performance-block__info">
                    <h2 class="performance-block__title">Próxima Función</h2>
                    <RouterLink to="/html/Funciones/RomeoJulieta.html" class="performance-block__button">Comprar Entradas
                    </RouterLink>
                </div>
                <div class="performance-block__image">
                    <img src="../img/fotos-descripción-obras-teatro/romo-julieta/ROMEO-Y-JULIETA.jpeg"
                        alt="Función de Teatro" class="image__img" />
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
                <div class="title-posters">
                    <h2 class="title-posers_txt"></h2>
                </div>
                <section class="poster-container">
                    <div v-for="obra in obras" :key="obra.slug" class='show-poster'>
                        <div class='show-poster__image'>
                            <img :src="obra.images[0]" alt="Imagen de la obra" />
                        </div>
                        <div class='show-poster__details'>
                            <h3 class='show-poster__details__title'>{{ obra.name }}</h3>
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
    width: 250px;
    /* Ajusta el ancho de la tarjeta */
    border: #000000 2px solid;
    box-sizing: border-box;
    /* Incluye el borde en el tamaño total */
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
    /* Ajusta la altura de la imagen */
    width: 100%;
    /* Haz que la imagen ocupe el ancho completo de la tarjeta */
}

.show-poster__details {
    color: white;
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


/* ---------------------------Calendario------------------------------------ */




::-webkit-scrollbar {
    width: 5px;
}

::-webkit-scrollbar-track {
    background: #f5f5f5;
    border-radius: 50px;
}

.body {
    position: relative;
    min-height: 100vh;
    align-items: center;
    display: flex;
    justify-content: center;
    padding-bottom: 30px;
    background-color: #f4e8dc;
}

.container {
    position: relative;
    width: 1200px;
    min-height: 850px;
    margin: 0 auto;
    padding: 5px;
    color: #fff;
    display: flex;
    border-radius: 10px;
    background-color: #373c4f;
}

.left {
    width: 60%;
    padding: 20px;
}

.calendar {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-between;
    color: #878895;
    border-radius: 5px;
    background-color: #fff;
}

/* set after behind the main element */
.calendar::before,
.calendar::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 100%;
    width: 12px;
    height: 97%;
    border-radius: 0 5px 5px 0;
    background-color: #d3d4d6d7;
    transform: translateY(-50%);
}

.calendar::before {
    height: 94%;
    left: calc(100% + 12px);
    background-color: rgb(153, 153, 153);
}

.calendar-hed {
    display: none;

}

.calendar .month {
    width: 100%;
    height: 150px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 50px;
    font-size: 1.2rem;
    font-weight: 500;
    text-transform: capitalize;
}

.calendar .month .prev,
.calendar .month .next {
    cursor: pointer;
}

.calendar .month .prev:hover,
.calendar .month .next:hover {
    color: var(--primary-color)
}

.calendar .weekdays {
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    font-size: 1rem;
    font-weight: 500;
    text-transform: capitalize;
}

.weekdays div {
    width: 14.28%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.calendar .days {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 0 20px;
    font-size: 1rem;
    font-weight: 500;
    margin-bottom: 20px;
}

.calendar .days .day {
    width: 14.28%;
    height: 90px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    color: var(--primary-clr);
    border: 1px solid #f5f5f5;
}

.calendar .days .day:nth-child(7n + 1) {
    border-left: 2px solid #f5f5f5;
}

.calendar .days .day:nth-child(7n) {
    border-right: 2px solid #f5f5f5;
}

.calendar .days .day:nth-child(-n + 7) {
    border-top: 2px solid #f5f5f5;
}

.calendar .days .day:nth-child(n + 29) {
    border-bottom: 2px solid #f5f5f5;
}

.calendar .days .day:not(.prev-date, .next-date):hover {
    color: #fff;
    background-color: var(--primary-color)
}

.calendar .days .prev-date,
.calendar .days .next-date {
    color: #b3b3b3;
}

.calendar .days .active {
    position: relative;
    font-size: 2rem;
    color: #fff;
    background-color: var(--primary-color);
}

.calendar .days .active::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    box-shadow: 0 0 10px 2px var(--primary-color);
}

.calendar .days .today {
    font-size: 2rem;
}

.calendar .days .event {
    position: relative;
}

.calendar .days .event::after {
    content: "";
    position: absolute;
    bottom: 10%;
    left: 50%;
    width: 75%;
    height: 6px;
    border-radius: 30px;
    transform: translateX(-50%);
    background-color: var(--primary-color);
}

.calendar .days .day:hover.event::after {
    background-color: #fff;
}

.calendar .days .active.event::after {
    background-color: #fff;
    bottom: 20%;
}

.calendar .days .active.event {
    padding-bottom: 10px;
}

.calendar .goto-today {
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 5px;
    padding: 0 20px;
    margin-bottom: 20px;
    color: var(--primary-color)
}

.calendar .goto-today .goto {
    display: flex;
    align-items: center;
    border-radius: 5px;
    overflow: hidden;
    border: 1px solid var(--primary-color)
}

.calendar .goto-today .goto input {
    width: 100%;
    height: 30px;
    outline: none;
    border: none;
    border-radius: 5px;
    padding: 0 20px;
    color: var(--primary-color)
}

.calendar .goto-today button {
    padding: 5px 10px;
    border: 1px solid var(--primary-color);
    border-radius: 5px;
    background-color: transparent;
    cursor: pointer;
    color: var(--primary-color);
}

.calendar .goto-today button:hover {
    color: #fff;
    background-color: var(--primary-color)
}

.calendar .goto-today .goto button {
    border: none;
    border-left: 1px solid var(--primary-color)
}

.container .right {
    position: relative;
    width: 40%;
    min-height: 100%;
    padding: 20px 0;
}

.right .today-date {
    width: 100%;
    height: 50px;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    align-items: center;
    justify-content: space-between;
    padding: 0 40px;
    padding-left: 70px;
    margin-top: 50px;
    margin-bottom: 20px;
    text-transform: capitalize;
}

.right .today-date .event-day {
    font-size: 2rem;
    font-weight: 500;
}

.right .today-date .event-date {
    font-size: 1rem;
    font-weight: 400;
    color: #878895;
}

.events {
    width: 100%;
    height: 100%;
    max-height: 600px;
    overflow-x: hidden;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    padding-left: 4px;
}

.events .event {
    position: relative;
    width: 95%;
    min-height: 70px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 5px;
    padding: 0 20px;
    padding-left: 50px;
    color: #fff;
    background: linear-gradient(90deg, #3f4458, transparent);
    cursor: pointer;
}

/* even event */
.events .event:nth-child(even) {
    background: transparent;
}

.events .event:hover {
    background: linear-gradient(90deg, var(--primary-color), transparent);
}

.events .event .title {
    display: flex;
    align-items: center;
    pointer-events: none;
}

.events .event .title .event-title {
    font-size: 1rem;
    font-weight: 400;
    margin-left: 20px;
}

.events .event i {
    color: var(--primary-color)
}

.events .event:hover i {
    color: #fff;
}

.events .event .event-time {
    font-size: 0.8rem;
    font-weight: 400;
    color: #878895;
    margin-left: 15px;
    pointer-events: none;
}

.events .event:hover .event-time {
    color: #fff;
}

/* add tick in event after */
.events .event::after {
    content: "✓";
    position: absolute;
    top: 50%;
    right: 0;
    font-size: 3rem;
    line-height: 1;
    display: none;
    align-items: center;
    justify-content: center;
    opacity: 0.3;
    color: var(--primary-color)
}

.events .event:hover::after {
    display: flex;
}

.add-event {
    position: absolute;
    bottom: 30px;
    right: 30px;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    color: #878895;
    border: 2px solid #878895;
    opacity: 0.5;
    border-radius: 50%;
    background-color: transparent;
    cursor: pointer;
}

.add-event:hover {
    opacity: 1;
}

.add-event i {
    pointer-events: none;
}

.events .no-event {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    font-weight: 500;
    color: #878895;
}

.add-event-wrapper {
    position: absolute;
    bottom: 100px;
    left: 50%;
    width: 90%;
    max-height: 0;
    overflow: hidden;
    border-radius: 5px;
    background-color: #fff;
    transform: translateX(-50%);
    transition: max-height 0.5s ease;
}

.add-event-wrapper.active {
    max-height: 300px;
}

.add-event-header {
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    color: #373c4f;
    border-bottom: 1px solid #f5f5f5;
}

.add-event-header .close {
    font-size: 1.5rem;
    cursor: pointer;
}

.add-event-header .close:hover {
    color: var(--primary-color)
}

.add-event-header .title {
    font-size: 1.2rem;
    font-weight: 500;
}

.add-event-body {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 5px;
    padding: 20px;
}

.add-event-body .add-event-input {
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
}

.add-event-body .add-event-input input {
    width: 100%;
    height: 100%;
    outline: none;
    border: none;
    border-bottom: 1px solid #f5f5f5;
    padding: 0 10px;
    font-size: 1rem;
    font-weight: 400;
    color: #373c4f;
}

.add-event-body .add-event-input input::placeholder {
    color: #a5a5a5;
}

.add-event-body .add-event-input input:focus {
    border-bottom: 1px solid var(--primary-color)
}

.add-event-body .add-event-input input:focus::placeholder {
    color: var(--primary-color)
}

.add-event-footer {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
}

.add-event-footer .add-event-btn {
    height: 40px;
    font-size: 1rem;
    font-weight: 500;
    outline: none;
    border: none;
    color: #fff;
    background-color: var(--primary-color);
    border-radius: 5px;
    cursor: pointer;
    padding: 5px 10px;
    border: 1px solid var(--primary-color);
}

.add-event-footer .add-event-btn:hover {
    background-color: transparent;
    color: var(--primary-color)
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

/* media queries */</style>
