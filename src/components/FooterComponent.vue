<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>
<template>
    <footer class="footer">
        <div class="footer__logo">
            <RouterLink to="/Home"><img src="../assets/img/logo.png" alt="Logo del Teatro Example" class="logo__image">
            </RouterLink>
        </div>
        <div class="footer__menu">
            <RouterLink to="/Programacion" class="footer__menu-link">{{ $t("Footer.schedule") }}</RouterLink>
            <RouterLink to="/About" class="footer__menu-link">{{ $t("Footer.information") }}</RouterLink>
            <RouterLink to="Activities" class="footer__menu-link">{{ $t("Footer.activities") }}</RouterLink>
            <RouterLink to="/Contact" class="footer__menu-link">{{ $t("Footer.contact") }}</RouterLink>
        </div>
        <div class="footer__networks">
            <img src="../assets/img/instagram.png" alt="">
            <img src="../assets/img/facebook.png" alt="">
            <img src="../assets/img/tweeter.png" alt="">
        </div>
    </footer>
</template>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Roboto:wght@400;500&display=swap');

.footer {
    margin-top: 13vh;
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

.footer__logo img {
    width: 90px;
    border-radius: 70px;
}

.footer__menu {
    flex: 1;
    margin-left: 4px;
    text-align: center;
}

.footer__menu-link {
    color: white;
    margin-right: 2vh;
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    text-decoration: none;
    transition: color 0.3s;
}

.footer__menu-link:hover {
    color: #87CEEB;

}

.footer__networks {
    flex: 0.7;
    text-align: left;
}

.footer__networks img {
    width: 40px;
    margin-right: 4vh;
}

@media screen and (max-width: 768px) {
    .footer__networks {
        display: none;
    }

    .footer {
        margin-top: 13vh;
        display: flex;
        align-items: center;
        background-color: #1e3367;
        text-align: center;
        width: 100%;
        height: 25vh;
        flex-direction: column;
    }

    .footer__logo {

        margin-top: 20px;
    }

    .footer__menu {
        margin-top: 4vh;
    }
}
</style>