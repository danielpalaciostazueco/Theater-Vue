<template>
    <div class="circle"></div>
    <div class="card">
        <div class="logo">
            <i class='bx bxs-user-circle'></i>
        </div>
        <h2>{{ $t("LoginUser.text1") }}</h2>
        <form class="form" @submit.prevent="submitForm">
            <input type="text" placeholder="Usuario" v-model="store.formData.nombreUsuario">
            <input type="password" placeholder="Contraseña" v-model="store.formData.contrasena">
            <button type="submit">{{ $t("LoginUser.text1") }}</button>
        </form>
        <footer>
            {{ $t("LoginUser.text2") }}
            <a href="/">{{ $t("LoginUser.text3") }}</a>
            <br>
            {{ $t("LoginUser.text4") }}
            <RouterLink to="/LoginAdmin">{{ $t("LoginUser.text3") }}</RouterLink>
        </footer>
    </div>
</template>
<script setup lang="ts">
import { useListadoObrasLoginUserStore  } from '../store/LoginUser-Store'; 

const store = useListadoObrasLoginUserStore();

const submitForm = async () => {
  await store.registrarUsuario();
};
</script>

<style scoped>
* {
    box-sizing: border-box;
}

html,
body {
    margin: 0;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #f5f5f5;
    font-family: "Ubuntu";
}

.circle {
    position: fixed;
    top: -50vmin;
    left: -50vmin;
    width: 200vmin;
    height: 200vmin;
    border-radius: 50%;
    background: #65c8ff;
    z-index: -1;
}

.circle::after {
    content: "";
    position: absolute;
    right: -50vmin;
    bottom: -50vmin;
    width: 200vmin;
    height: 200vmin;
    border-radius: 50%;
    background: #143d81;
    z-index: -2;
}

.card {
    overflow: hidden;
    position: relative;
    z-index: 1;
    width: 100%;
    max-width: 380px;
    margin: auto;
    padding: 160px 30px 38px;
    border-radius: 1.25rem;
    background: #fff;
    text-align: center;
    box-shadow: 0 100px 100px rgba(0, 0, 0, 0.1);
    margin-top: 30vh;
}

.card::before {
    content: "";
    position: absolute;
    background: #216ce7;
    top: -880px;
    left: 50%;
    width: 1000px;
    height: 1000px;
    border-radius: 50%;
    transform: translate(-50%, 0);
}

.card .logo {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background-color: #fff;
    height: 64px;
    width: 64px;
    top: 30px;
    left: 50%;
    transform: translate(-50%, 0);
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.1);
}

.card .logo i {
    font-size: 30px;
    color: #216ce7;
}

.card>h2 {
    font-size: 22px;
    font-weight: 400;
    margin: 0 0 30px;
    color: #2a3444;
}

.form {
    margin: 0 auto;
    display: grid;
    gap: 18px;
    width: 100%;
    max-width: 300px;
}

.form>input,
.form>button {
    width: 100%;
    height: 50px;
    border-radius: 25px;
}

.form>input {
    border: 2px solid #e0e0e0;
    font-family: inherit;
    font-size: 16px;
    padding: 0 24px;
    color: #11274b;
    transition: border-color 0.3s;
}

.form>input:focus {
    outline: none;
    border-color: #216ce7;
}

.form>input::placeholder {
    color: #cacaca;
}

.form>button {
    cursor: pointer;
    background: #216ce7;
    color: #ffffff;
    border: none;
    font-family: inherit;
    font-size: 16px;
    font-weight: 600;
    letter-spacing: 1px;
    transition: background-color 0.3s;
}

.form>button:hover {
    background-color: #1a5cb8;
}

.card>footer {
    font-size: 14px;
    color: #7c7c7c;
}

.card>footer>a,
.card>footer>RouterLink {
    color: #216ce7;
    text-decoration: none;
    transition: color 0.3s;
}

.card>footer>a:hover,
.card>footer>RouterLink:hover {
    color: #1a5cb8;
}

@media (min-width: 768px) {
    .card {
        width: 360px;
    }
}
</style>
