<script setup lang="ts">
import { RouterView } from 'vue-router';
import { useRoute } from 'vue-router';
import Header from './components/HeaderComponent.vue';
import Footer from './components/FooterComponent.vue';
const route = useRoute();
</script>

<template>
    <Header v-if="route.path !== '/HomeAdmin' && route.path !== '/AdminPanel' && route.path !== '/'
        && route.path !== '/LoginUser' && route.path !== '/LoginAdmin'"></Header>
    <RouterView></RouterView>
    <Footer v-if="route.path !== '/' && route.path !== '/LoginUser' && route.path !== '/LoginAdmin'"></Footer>
</template>
