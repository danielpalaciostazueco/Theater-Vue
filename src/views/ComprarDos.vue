<template>
  <main>
    <article class="article-block">
      <MainBlockComponent></MainBlockComponent>
      <FrameFunctionComponent></FrameFunctionComponent>
    </article>
    <SeatsComponent></SeatsComponent>
  </main>
</template>

<script setup lang="ts">

import MainBlockComponent from '@/components/MainBlockComponent.vue';
import FrameFunctionComponent from '@/components/FrameFunctionComponent.vue';
import SeatsComponent from '@/components/SeatsComponent.vue';
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


.article-block {
  display: flex;
  justify-content: right;
  margin-top: 10vh;
  flex-direction: column;
}

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
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
}

button {
  margin-left: 10px;
}

section {
  font-family: Arial, sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 15vh;
}

.container {
  text-align: center;
}

.cinema-seats {
  display: flex;
  justify-content: center;
  padding-top: 30px;
}


.cinema-seats svg {
  cursor: pointer;
}

.cinema-button {
  display: flex;
  justify-content: center;
  padding-top: 20px;
}

.ocupado {
  fill: red;
}

.seleccionado {
  fill: green;
}
</style>

