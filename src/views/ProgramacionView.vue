<template>
        <body>
            <main>
                <div class="main-block">
                    <h1>Programación</h1>
                </div>
                <section class="poster-container">
                    <div v-for="obra in obras" :key="obra.slug" class='show-poster'>
                        <div class='show-poster__image'>
                            <img :src="obra.images[0]" alt="Imagen de la obra" />
                        </div>
                        <div class='show-poster__details'>
                            <h3 class='show-poster__details__title'>{{ obra.name }}</h3>
                            <RouterLink :to="{ path: '/Function/' + obra.slug }" class='show-poster__button'>Comprar Entradas</RouterLink>
                        </div>
                    </div>
                </section>
            </main>
        </body>
</template>

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
