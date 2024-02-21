<script setup lang="ts">
import { RouterView } from 'vue-router';
import { useRoute } from 'vue-router';
import Header from './components/HeaderComponent.vue';
import Footer from './components/FooterComponent.vue';
const route = useRoute();
</script>

<template>
    <Header v-if="route.path !== '/Admin' && route.path !== '/AdminPanel'"></Header>
    <RouterView></RouterView>
    <Footer></Footer>
</template>
