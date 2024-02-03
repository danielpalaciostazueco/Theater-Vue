
<script setup lang="ts">
import { defineProps } from 'vue'
// Definición de props con sus tipos respectivos
const props = defineProps<{
    name?: string;
    images?: string;
    horarios?: string[];
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
            "2024-03-03 - 21:00",
            "2024-03-09 - 22:00",
            "2024-03-18 - 23:00"
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
            "2024-01-07 - 20:30",
            "2024-01-12 - 21:00",
            "2024-01-22 - 19:00"

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
            "2024-05-01 - 23:00",
            "2024-05-15 - 22:00",
            "2024-05-20 - 21:00"
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

            "2024-06-01 - 18:30",
            "2024-06-06 - 19:00",
            "2024-06-10 - 22:00"

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
            "2024-07-01 - 21:00",
            "2024-07-10 - 19:00",
            "2024-07-20 - 20:00"

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
            "2024-08-02 - 21:00",
            "2024-08-12 - 20:00",
            "2024-08-21 - 21:00"
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

            "2024-09-01 - 21:00",
            "2024-09-03 - 22:30",
            "2024-09-10 - 23:00"
        ],
        slug: 'vocal',
        cartel: 'https://ik.imagekit.io/daniel2003/fotos-descripci%C3%B3n-obras-teatro/B-vocal/b-vocal_LG.jpg'
    }
]
const cogerSlug = () => {
    const pathSegments = window.location.pathname.split('/');
    const lastSegment = pathSegments[pathSegments.length - 1];
    return lastSegment;
};

const encontrarSlug = (slug: string) => {
    return obras.find(obra => obra.slug === slug);
};

const slug = cogerSlug();
const obra = encontrarSlug(slug);

</script>
<template>
    <body>
        <main>
            <section class="main-block">
                <h1 class="main-block__title">Compra de entradas</h1>
            </section>
            <section class="frame-function">
                <div class="frame-function__poster">
                    <img :src="obra?.images[1]" alt="Imagen destacada de la obra" />
                </div>
                <div class="frame-function__title">
                    <h2 class="frame-function__title-text">{{ obra?.name }}</h2>
                </div>
            </section>
            <div id="container" class="information-container">
                <h2 class="information-title">Información de Fechas y Horas</h2>
                <div class="container-frame" id="informacionSeleccionada"></div>
            </div>
            <div class="horario">
                <ul class="horarios-txt__list">
                    <li v-for="horario in obra?.dates" :key="horario" class='horarios-txt__item'>
                        {{ horario }}
                        <RouterLink :to="{
                            path: '/ComprarDos/' + obra?.slug,
                            query: {
                                fecha: horario
                            }
                        }" class='show-poster__button'>
                            Comprar
                        </RouterLink>
                    </li>
                </ul>
            </div>
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
