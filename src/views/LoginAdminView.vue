
<template>


    <div></div>
</template>
<style scoped>
* {
    box-sizing: border-box;
}

html,
body {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #f5f5f5;
    font-family: "Ubuntu", sans-serif;
}

.circle {
    position: fixed;
    width: 200vmax;
    /* ajustado para garantizar que cubra toda la pantalla */
    height: 200vmax;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    background: linear-gradient(145deg, #65c8ff, #143d81);
    z-index: -1;
}

.card {
    position: relative;
    z-index: 1;
    width: 90%;
    /* ajustado para proporcionar espacio en pantallas más pequeñas */
    max-width: 360px;
    /* el ancho máximo del formulario */
    margin: 0 auto;
    /* centrado horizontal */
    padding: 160px 30px 38px;
    border-radius: 1.25rem;
    background: #fff;
    text-align: center;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    margin-top: 30vh;
}

.card .logo {
    background-color: #216ce7;
    height: 64px;
    width: 64px;
    border-radius: 50%;
    position: absolute;
    top: 69px;
    left: 50%;
    transform: translate(-50%);
    display: flex;
    align-items: center;
    justify-content: center;
}


.card .logo i {
    font-size: 32px;
    color: #fff;
}

.card h2 {
    font-size: 22px;
    color: #2a3444;
    margin-bottom: 24px;
}

.form {
    display: grid;
    gap: 18px;
}

.form input,
.form button {
    width: 100%;
    padding: 12px 20px;
    border-radius: 20px;
    border: 2px solid #e0e0e0;
    font-size: 16px;
}

.form input:focus {
    border-color: #216ce7;
    outline: none;
}

.form button {
    color: #fff;
    background-color: #216ce7;
    border: none;
    cursor: pointer;
    font-weight: 600;
    transition: background-color 0.3s;
}

.form button:hover {
    background-color: #143d81;
}

.card footer {
    font-size: 14px;
    color: #7c7c7c;
    margin-top: 16px;
}

.card footer a {
    color: #216ce7;
    text-decoration: none;
    transition: color 0.3s;
}

.card footer a:hover {
    color: #143d81;
}

@media (max-width: 768px) {
    .card {
        padding: 120px 30px 30px;
    }

    .card .logo {
        top: -64px;
        /* doble del valor de la altura del logo para compensar */
    }
}
</style>
