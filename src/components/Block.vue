<script setup lang = "ts">
defineProps<{
    name?: string
    images?: string
}>()
</script>



<template>
    <div class="show-poster">
        <div class="show-poster__image">
            <img :src="images" alt="">
        </div>
        <div class="show-poster__details">{{ name }}</div>
    </div>
</template>
<style>
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
</style>