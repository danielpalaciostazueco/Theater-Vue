<template>
    <body>
        <main class="main">
            <div class="main-block">
                <h1>Programación</h1>
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
        </main>
    </body>
</template>

  
<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

// Define la estructura de los datos de las obras
interface Obra {
    nombre: string;
    imagenesArray: string[];
    obraID: string;
}

// Variable reactiva para almacenar la lista de obras
const obras = ref<Obra[]>([]);

// Función para obtener las obras desde el backend
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

// Llamada a la función fetchObras cuando el componente se monta
onMounted(() => {
    fetchObras();
});
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
}
</style>
