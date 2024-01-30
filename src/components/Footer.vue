<script setup lang="ts">
import {RouterLink} from 'vue-router'
</script>
<template>  
    <footer class="footer">
        <div class="footer__logo">
            <RouterLink to="/"><img src="../assets/img/logo.png" alt="Logo del Teatro Example" class="logo__image"></RouterLink>
        </div>
        <div class="footer__menu">
            <RouterLink to="/Programacion" class="footer__menu-link">Programación</RouterLink>
            <RouterLink to="/About" class="footer__menu-link">Información</RouterLink>
            <RouterLink to="Activities" class="footer__menu-link">Otras Actividades</RouterLink>
            <RouterLink to="/Contact" class="footer__menu-link">Contacto</RouterLink>
        </div>
        <div class="footer__networks">
            <img src="../assets/img/tweeter.png" alt="">
            <img src="../assets/img/instagram.png" alt="">
            <img src="../assets/img/facebook.png" alt="">
        </div>
    </footer>
</template>
<style>
.footer {
    margin-top: 13vh;
    display: flex;
    align-items: center;
    background-color: #1E3367;
    text-align: center;
    width: 100%;
    height: 25vh;
}

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

</style>