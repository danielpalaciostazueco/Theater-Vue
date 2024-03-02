<template>
    <div class="card">
        <div class="logo">
            <i class='bx bxs-user'></i>
        </div>
        <h2>{{ $t("CreateAccount.text1") }}</h2>
        <form class="form" @submit.prevent="submitForm">
            <input type="text" placeholder="Nombre" v-model="store.formData.nombreUsuario">
            <input type="password" placeholder="Contraseña" v-model="store.formData.contrasena">
            <button type="submit">{{ $t("CreateAccount.text5") }}</button>
        </form>
        <footer>

        </footer>
    </div>
</template>
<script setup lang="ts">
import { useListadoObrasLoginStore } from '../store/LoginView-Store';

const store = useListadoObrasLoginStore();

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
    height: 100%;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #f5f5f5;
    font-family: "Ubuntu";
}

.card {
    overflow: hidden;
    position: relative;
    z-index: 3;
    width: 100%;
    max-width: 360px;
    padding: 160px 30px 38px;
    border-radius: 1.25rem;
    background: #fff;
    text-align: center;
    margin: 30px;
    margin-left: 79vh;
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
    margin: 0 auto 30px;
    display: grid;
    gap: 18px;
    width: 100%;
    /* Eliminar el ancho máximo para adaptarse a pantallas pequeñas */
}

.form>input,
.form>button {
    width: 100%;
    height: 50px;
    border-radius: 20px;
}

.form>input {
    border: 2px solid #e0e0e0;
    font-family: inherit;
    font-size: 16px;
    padding: 0 24px;
    color: #11274c;
    transition: border 0.3s ease;
}

.form>input:hover,
.form>input:focus {
    border-color: #216ce7;
}

.form>input::placeholder {
    color: #cac8c8;
}

.form>button {
    cursor: pointer;
    background: #216ce7;
    color: #f9f9f9;
    border: none;
    font-family: inherit;
    font-size: 1rem;
    font-weight: 600;
    text-align: center;
    letter-spacing: 1px;
    transition: background-color 0.3s ease;
}

.form>button:hover {
    background-color: #143d81;
}

.card>footer {
    color: #7c7c7c;
    line-height: 1.6;
    margin-top: 16px;
    /* Ajustar según sea necesario para el espaciado */
}

.card>footer>a {
    color: #216ce7;
    text-decoration: none;
    transition: color 0.3s ease;
}

.card>footer>a:hover {
    color: orange;
}

/* Media query para pantallas de tamaño intermedio */
@media (min-width: 576px) and (max-width: 767px) {
    .card {
        padding: 100px 15px 38px;
        margin-top: 20vh;
    }

    .card>h2 {
        font-size: 22px;
        font-weight: 400;
        margin: 0 0 30px;
        color: #2a3444;
        margin-top: 30px;
    }
}

/* Media query para teléfonos móviles */
@media (max-width: 575px) {
    .card {
        padding: 100px 15px 38px;
        margin-top: 20vh;
        padding-right: 30px;
    }
}

.card>h2 {
    font-size: 22px;
    font-weight: 400;
    margin: 0 0 30px;
    color: #2a3444;
    margin-top: 30px;
}
</style>
