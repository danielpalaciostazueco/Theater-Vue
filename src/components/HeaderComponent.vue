<template>
  <header class="header">
    <div class="header__logo">
      <RouterLink to="/"></RouterLink>
    </div>
    <nav class="header__nav">
      <RouterLink to="/Programacion" class="nav__link">{{ $t("Header.schedule") }}</RouterLink>
      <RouterLink to="/About" class="nav__link">{{ $t("Header.information") }}</RouterLink>
      <RouterLink to="/Activities" class="nav__link">{{ $t("Header.activities") }}</RouterLink>
      <RouterLink to="/Contact" class="nav__link">{{ $t("Header.contact") }}</RouterLink>
      <RouterLink v-if="isAdmin" to="/AdminPanel" class="nav__link">{{ $t("HomeAdmin.admin") }}</RouterLink>
    </nav>
    <button @click="toggleLanguage" class="nav__link">{{ currentLanguage }}</button>
  </header>
</template>

<script setup lang="ts">
import { onMounted, ref, computed } from 'vue'
import { RouterLink } from 'vue-router'
import { useListadoObrasLoginStore } from '../store/LoginView-Store';
import { useI18n } from 'vue-i18n';

const store = useListadoObrasLoginStore();
const { t, locale } = useI18n();

const isAdmin = computed(() => store.isAdmin());
const currentLanguage = computed(() => locale.value === 'en' ? 'Español' : 'English');

const toggleLanguage = () => {
  locale.value = locale.value === 'en' ? 'es' : 'en';
}
</script>



<style scoped>
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

@media screen and (max-width: 768px) {
  .header {
    text-align: center;
    margin-top: 5vh;
    margin-bottom: 5vh;
    display: grid;
  }

  .header__logo,
  .header__nav {

    display: flex;
    justify-content: left;
    gap: 20px;
  }
}
</style>
