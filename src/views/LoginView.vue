<template>
    <div class="circle"></div>
    <div class="card">
        <div class="logo">
            <i class='bx bxs-user'></i>
        </div>
        <h2>{{ $t("CreateAccount.text1") }}</h2>
        <form class="form" @submit.prevent="submitForm">
            <input type="text" placeholder="Nombre" v-model="formData.nombreUsuario">
            <input type="password" placeholder="Contraseña" v-model="formData.contrasena">
            <button type="submit">{{ $t("CreateAccount.text5") }}</button>
        </form>
        <footer>
            {{ $t("CreateAccount.text2") }}
            <RouterLink to="/LoginUser">{{ $t("CreateAccount.text3") }}</RouterLink>
            <br>
            {{ $t("CreateAccount.text4") }}
            <RouterLink to="/LoginAdmin">{{ $t("CreateAccount.text3") }}</RouterLink>
        </footer>
    </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
    setup() {
        const router = useRouter();
        // Ajusta los nombres de las propiedades para que coincidan con tu modelo de backend
        const formData = ref({
            nombreUsuario: '', // Cambiado de 'nombre' a 'nombreUsuario'
            contrasena: '', // Ya está correcto
        });

        const submitForm = async () => {
            const url = 'http://localhost:8001/Usuario';
            try {
                // Verifica que la estructura del objeto que envías coincide con la esperada por tu backend
                const response = await fetch(url, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        nombreUsuario: formData.value.nombreUsuario,
                        contrasena: formData.value.contrasena,
                        // idUsuario no se incluye porque es autoincrementable por Entity Framework
                    }),
                });

                if (response.ok) {
                    // Procesamiento de la respuesta
                    const data = await response.json();
                    console.log('Registro exitoso:', data);
                    router.push('/Home'); // Redirige a la página principal tras un registro exitoso
                } else {
                    console.error('Error en el registro:', response.statusText);
                }
            } catch (error) {
                console.error('Error en el registro:', error);
            }
        };

        return {
            formData,
            submitForm,
        };
    },
});
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
    z-index: 3;
    width: 360px;
    padding: 160px 30px 38px;
    border-radius: 1.25rem;
    background: #fff;
    text-align: center;
    box-shadow: 0 100px 100px rgba(0, 0, 0, 0.1);
    margin-left: 80vh;
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
    max-width: 300px;
    /* fija un ancho máximo para los campos del formulario */
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

/* Media query para ajustar el tamaño de la tarjeta en pantallas más grandes */
@media (min-width: 768px) {
    .card {
        width: 360px;
        /* Ancho de la tarjeta para pantallas más grandes */
    }
}
</style>
