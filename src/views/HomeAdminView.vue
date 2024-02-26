<template>
    <header class="header">
        <div class="header__logo">
            <RouterLink to="/"></RouterLink>
            <canvas ref="canvasRef" width="100" height="106"></canvas>
        </div>
        <nav class="header__nav">
            <RouterLink to="/Programacion" class="nav__link">{{ $t("HomeAdmin.schedule") }}</RouterLink>
            <RouterLink to="/About" class="nav__link">{{ $t("HomeAdmin.information") }}</RouterLink>
            <RouterLink to="/Activities" class="nav__link">{{ $t("HomeAdmin.activities") }}</RouterLink>
            <RouterLink to="/Contact" class="nav__link">{{ $t("HomeAdmin.contact") }}</RouterLink>
            <RouterLink to="/AdminPanel" class="nav__link">{{ $t("HomeAdmin.admin") }}</RouterLink>
        </nav>
        <section class="search-block" style="text-align: right; padding: 20px;">
            <input v-model="nombreBuscado" placeholder="Buscar obra por nombre..." />
            <button @click="buscarObra">Buscar</button>
        </section>
    </header>

    <body>
        <main class="main">
            <section class="performance-block">
                <div class="performance-block__info">
                    <h2 class="performance-block__title">{{ $t("HomeAdmin.text1") }}</h2>
                    <RouterLink to="/Programacion" class="performance-block__button">{{ $t("HomeAdmin.text4") }}
                    </RouterLink>
                </div>
                <div class="performance-block__image">
                    <img src="../assets/img/ROMEO-Y-JULIETA.jpeg" alt="Función de Teatro" class="image__img" />
                </div>
                <div class="performance-block__name">
                    <h2 class="performance-block__name-title">{{ $t("HomeAdmin.text2") }}</h2>
                    <p class="performance-block__name-text">
                        {{ $t("HomeAdmin.text3") }}
                    </p>
                </div>
            </section>
            <article>
                <section class="poster-container">
                    <div v-for="obra in obras" :key="obra.obraID" class='show-poster'>
                        <div class='show-poster__image'>
                            <img :src="obra.imagenes.split(',')[0]" alt="Imagen de la obra" />
                        </div>
                        <div class='show-poster__details'>
                            <h3 class='show-poster__details__title'>{{ obra.nombre }}</h3>
                            <RouterLink :to="{ path: '/Function/' + obra.obraID }" class='show-poster__button'>
                                {{ $t("HomeAdmin.text4") }}
                            </RouterLink>
                        </div>
                    </div>
                </section>
            </article>
        </main>
    </body>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { RouterLink, useRouter } from 'vue-router'

const nombreBuscado = ref('');
const router = useRouter();

interface Obra {
    nombre: string;
    imagenes: string;
    obraID: string;
}

const obras = ref<Obra[]>([]);

const buscarObra = async () => {
    if (!nombreBuscado.value) {
        alert('Por favor, ingrese un nombre para buscar.');
        return;
    }
    try {
        const response = await fetch(`http://localhost:8001/Obras/Nombre/${nombreBuscado.value}`);
        if (response.ok) {
            const obraEncontrada = await response.json();
            router.push(`/ComprarUno/${obraEncontrada.obraID}`);
        } else {
            alert('Obra no encontrada.');
        }
    } catch (error) {
        console.error('Error al buscar la obra:', error);
    }
};
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
    color: #fffcfc;
    margin-bottom: 5vh;
    font-size: xxx-large;
}

.performance-block__button {
    display: inline-block;
    padding: 10px 20px;
    background-color: #fffefe;
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
    padding: 10px 20px;
    background-color: #fff;
    color: #1E3367;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}



@media screen and (max-width: 1150px) {
    .header {
        flex-direction: column;
        text-align: center;
        margin-top: 5vh;
        margin-bottom: 5vh;
    }

    .header__logo,
    .header__nav {
        margin-left: 0;
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
}
</style>
