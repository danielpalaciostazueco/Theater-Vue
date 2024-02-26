<template>
    <div>
        <main>
            <div class="main-block">
                <h1 class="main-block__title">{{ obra?.nombre }}</h1>
            </div>
            <section class="horarios" v-if="obra && obra.imagenes && obra.imagenes.length > 0">
                <div class="horarios-img">
                    <img :src="obra.imagenes?.split(',')[0]" alt="Imagen destacada de la obra" />
                </div>
                <div class="horarios-txt">
                    <h2 class="horarios-txt__title">{{ $t("Function.text1") }}</h2>
                    <ul class="horarios-txt__list">
                        <li v-for="fecha in [obra.fechaUno, obra.fechaDos, obra.fechaTres]"
                            :key="fecha && fecha.toLocaleString()" class="horarios-txt__item">{{ fecha &&
                                fecha.toLocaleString() }}
                        </li>
                    </ul>
                </div>
            </section>
            <div class="primera-img" v-if="obra && obra.imagenes && obra.imagenes.length > 1">
                <img :src="obra.imagenes?.split(',')[1]" alt="Imagen destacada de la obra" />
            </div>
            <article>
                <div class="button-bought" id="boton-comprar">
                    <RouterLink :to="{ path: '/ComprarUno/' + obra?.obraID }" class='show-poster__button'>
                        {{ $t("Function.text3") }}
                    </RouterLink>
                </div>
            </article>
            <section>
                <div class="frame-information">
                    <div class="frame-information__title">
                        <h2>{{ $t("Function.text2") }}</h2>
                    </div>
                    <div class="frame-information__txt">
                        <p>{{ obra?.descripcion }}</p>
                    </div>
                </div>
                <div class="frame-repart">
                    <div class="frame-repart__title">
                        <h2>{{ $t("Function.text4") }}</h2>
                    </div>
                    <div class="frame-repart__txt">
                        <ul class="frame-repart__list">
                            <li v-for="actor in obra?.actores?.split(',')" :key="actor" class="frame-repart__item">{{ actor
                            }}</li>
                        </ul>
                    </div>
                </div>
            </section>
        </main>
    </div>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

interface Obra {
    nombre?: string;
    descripcion?: string;
    imagenes?: string;
    actores?: string;
    fechaUno?: string;
    fechaDos?: string;
    fechaTres?: string;
    obraID?: string;
}

const obra = ref<Obra | null>(null);


const formatearFecha = (fecha: string) => {
    const opciones: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(fecha).toLocaleDateString('es-ES', opciones);
}

onMounted(() => {
    const route = useRoute();
    const idObra = route.params.Id as string;
    if (idObra) {
        fetchData(idObra);
    }
});

async function fetchData(idObra: string) {
    try {
        const response = await fetch(`http://localhost:8001/obras/${idObra}`);
        if (response.ok) {
            const data = await response.json();

            obra.value = {
                ...data,
                fechaUno: data.fechaUno ? formatearFecha(data.fechaUno) : undefined,
                fechaDos: data.fechaDos ? formatearFecha(data.fechaDos) : undefined,
                fechaTres: data.fechaTres ? formatearFecha(data.fechaTres) : undefined,
            };
        } else {
            console.error('Error al obtener los datos de la obra');
        }
    } catch (error) {
        console.error('Error en la solicitud fetch:', error);
    }
}
</script>



<style scoped>
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


@media screen and (max-width: 1150px) {
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
