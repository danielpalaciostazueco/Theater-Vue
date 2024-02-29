<template>
  <header class="header">
    <div class="header__logo">
      <RouterLink to="/"></RouterLink>
      <canvas ref="canvasRef" width="100" height="106"></canvas>
    </div>
    <nav class="header__nav">
      <RouterLink to="/Programacion" class="nav__link">{{ $t("Header.schedule") }}</RouterLink>
      <RouterLink to="/About" class="nav__link">{{ $t("Header.information") }}</RouterLink>
      <RouterLink to="/Activities" class="nav__link">{{ $t("Header.activities") }}</RouterLink>
      <RouterLink to="/Contact" class="nav__link">{{ $t("Header.contact") }}</RouterLink>
  
      <RouterLink v-if="isAdmin" to="/AdminPanel" class="nav__link">{{ $t("HomeAdmin.admin") }}</RouterLink>
    </nav>
  </header>
</template>
<script setup lang="ts">
import { onMounted, ref, computed } from 'vue'
import { RouterLink } from 'vue-router'
import { useListadoObrasLoginStore } from '../store/LoginView-Store';

const store = useListadoObrasLoginStore();

const isAdmin = computed(() => store.isAdmin());
</script>

<style>
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
}
</style>
