<template>
  <body>
    <main class="main">
      <section class="performance-block">
        <div class="performance-block__info">
          <h2 class="performance-block__title">{{ $t('HomeAdmin.text1') }}</h2>
          <RouterLink to="/Programacion" class="performance-block__button">{{ $t('HomeAdmin.text4') }}
          </RouterLink>
        </div>
        <div class="performance-block__image">
          <img src="../assets/img/ROMEO-Y-JULIETA.jpeg" alt="Función de Teatro" class="image__img" />
        </div>
        <div class="performance-block__name">
          <h2 class="performance-block__name-title">{{ $t('HomeAdmin.text2') }}</h2>
          <p class="performance-block__name-text">
            {{ $t('HomeAdmin.text3') }}
          </p>
        </div>
      </section>
      <article>
        <CardComponent></CardComponent>
      </article>
    </main>
  </body>
</template>

<script setup lang="ts">
import CardComponent from '../components/CardComponent.vue'
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

.performance-block {
  background-color: #1e3367;
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

.performance-block__image img[data-v-5da18407] {
  width: 350px;
  margin-bottom: 20px;
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

.image__img {
  width: 360px;
}

.performance-block__name-text {
  color: white;
  text-align: center;
}


@media screen and (max-width: 768px) {
  .performance-block {
    display: flex;
    flex-direction: column;
  }

  .performance-block__name {
    width: 350px;
    margin-bottom: 20px;
  }

  .image__img {

    max-width: 300px;
  }

  .performance-block__name-title {
    font-size: xx-large;
    color: #fff;
    margin-bottom: 5vh;
    margin-left: 8vh;
  }

  .performance-block__name-text {
    color: #fff;
    text-align: center;
    margin-left: 5vh;
  }

  article {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>
