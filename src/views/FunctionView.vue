<template>
    <div>
      <main>
        <div class="main-block">
          <h1 class="main-block__title">{{ obra?.Nombre }}</h1>
        </div>
        <section class="horarios" v-if="obra && obra.Imagenes && obra.Imagenes.length > 0">
          <div class="horarios-img">
            <img :src="obra.Imagenes[0]" alt="Imagen destacada de la obra" />
          </div>
          <div class="horarios-txt">
            <h2 class="horarios-txt__title">Horarios de la función</h2>
            <ul class="horarios-txt__list">
              <li v-for="horario in obra?.Fechas" :key="horario" class="horarios-txt__item">{{ horario }}</li>
            </ul>
          </div>
        </section>
        <div class="primera-img" v-if="obra && obra.Imagenes && obra.Imagenes.length > 1">
          <img :src="obra.Imagenes[1]" alt="Imagen destacada de la obra" />
        </div>
        <article>
          <div class="button-bought" id="boton-comprar">
            <RouterLink :to="{ path: '/Function/' + obra?.Slug }" class='show-poster__button'>ComprarEntradas</RouterLink>
          </div>
        </article>
        <section>
          <div class="frame-information">
            <div class="frame-information__title">
              <h2>Información de la función</h2>
            </div>
            <div class="frame-information__txt">
              <p>{{ obra?.Descripcion }}</p>
            </div>
          </div>
          <div class="frame-repart">
            <div class="frame-repart__title">
              <h2>Reparto</h2>
            </div>
            <div class="frame-repart__txt">
              <ul class="frame-repart__list">
                <li v-for="actor in obra?.Actores" :key="actor" class="frame-repart__item">{{ actor }}</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </div>
  </template>
  <script setup lang="ts">
  import { ref, onMounted } from 'vue';
  import type { RouteLocationNormalizedLoaded } from 'vue-router';
  import { useRoute } from 'vue-router';
  
  interface Obra {
    Nombre?: string;
    Descripcion?: string;
    Imagenes?: string[];
    Actores?: string[];
    Fechas?: string[];
    Slug?: string;
  }
  
  const obra = ref<Obra | null>(null);
  
  async function fetchData(idObra: string) {
    try {
      const response = await fetch(`http://localhost:8001/obras/${idObra}`);
      if (response.ok) {
        const data: Obra = await response.json();
        obra.value = data;
      } else {
        console.error('Error al obtener los datos de la obra');
      }
    } catch (error) {
      console.error('Error en la solicitud fetch:', error);
    }
  }
  
  onMounted(() => {
    const route = useRoute();
    const idObra = route.query.Id as string;
    if (idObra) {
      fetchData(idObra);
    }
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
}

body {
    font-family: 'Roboto';
    line-height: 1.6;
    overflow: auto;
}

/*---------Header--------*/

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
    max-width: 130px;
    height: auto;
}

.header__nav {
    flex: 2.2;
    display: flex;
    /* Para que los elementos se distribuyan en línea */
    text-align: left;
    justify-content: left;
    /* Para alinear los elementos al final del contenedor */
    gap: 20px;
    /* Espacio entre los elementos */
}

.nav__link {
    color: #000000;
    text-decoration: none;
}

/*---------Main--------*/

.main-block {
    display: flex;
    align-items: center;
    justify-content: start;
    width: 100%;
    background-color: #1E3367;
    height: 13vh;
    margin-bottom: 10vh;
}

.main-block__title {
    color: white;
    font-size: xx-large;
    margin-left: 20vh;
}

.horarios {
    display: flex;
    align-items: center;
    align-content: center;
    width: 100%;
    margin-bottom: 5vh;
}

.horarios-img {
    flex: 1;
    text-align: center;
}

.horarios-img img {
    width: 500px;
}



.horarios-txt {
    flex: 1;
    text-align: center;
}

.horarios-txt__title {
    font-size: xxx-large;
    margin-bottom: 3vh;
}

.horarios-txt__list,
.horarios-txt__item {
    font-size: xx-large;
    list-style-position: inside;
}

.primera-img {
    display: flex;
    justify-content: center;
    width: 100%;
    margin-bottom: 5vh;
}

.primera-img img {
    max-width: 100vh;
}

.segunda-img {
    display: flex;
    justify-content: left;
    margin-left: 20vh;
    margin-bottom: 5vh;
}

.segunda-img__image {
    width: 700px;
}

article {
    display: flex;
    justify-content: right;
    margin-top: 10vh;
}

.button-bought {
    background-color: #1E3367;
    border-radius: 32px;
    display: flex;
    width: 47vh;
    height: 8vh;
    margin-right: 30vh;
    justify-content: center;
    align-items: center;
    margin-bottom: 10vh;
}

.button-bought__link {
    color: white;
    font-size: x-large;
}

.show-poster__button {
    background-color: #1E3367;
    color: #fff;
    border: none;
    padding: 10px 20px;
    font-size: 16px;
}

.frame-information {
    display: flex;
    flex-direction: column;
    max-width: 600px;
    margin: auto;
}

.frame-information__title {
    position: relative;
    margin-bottom: 25px;
    color: #000000;
    font-size: 20px;
}

.frame-information__title h2::after {
    content: "";
    width: 100%;
    position: absolute;
    height: 2px;
    display: block;
    margin: 0 auto;
    background-color: #000000;
}

.frame-information__txt {
    margin-top: 3vh;
    margin-bottom: 5vh;
    font-size: 20px;
}

.frame-repart {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 600px;
    margin: auto;
}

.frame-repart__title {
    font-size: 20px;
}

.frame-repart__item {
    list-style-position: inside;
    font-size: 20px;
}

.imagen-container img {
    max-width: 500px;
}

.boton-container img {
    max-width: 500px;
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


    .main-block h1 {
        margin-left: 6vh;
    }

    .horarios {
        flex-direction: column;
        align-items: center;
        text-align: center;
        margin-bottom: 5vh;
    }

    .horarios-img,
    .horarios-txt {
        flex: 1;
    }

    .horarios-img__image {
        width: 100%;
        max-width: 600px;
    }

    .horarios-txt {
        margin-top: 3vh;
    }

    .horarios-txt__title {
        font-size: 32px;
        margin-bottom: 10px;
    }

    .horarios-txt__item {
        font-size: 22px;
    }

    .primera-img,
    .segunda-img {
        justify-content: center;
        margin-left: 0;
        margin-bottom: 5vh;
    }

    .primera-img__image,
    .segunda-img__image {
        width: 100%;
        max-width: 600px;
    }

    .button-bought {

        margin-right: 0;
        margin-bottom: 10vh;
    }

    .button-bought__link {
        font-size: 18px;
    }

    .frame-information,
    .frame-repart {
        max-width: 100%;
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

    .show-poster__button {
        background-color: #1E3367;
        color: #fff;
        border: none;
        padding: 10px 20px;
        font-size: 16px;
    }
}
</style>
