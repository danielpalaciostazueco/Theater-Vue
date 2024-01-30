<!--
<template>
    <div>
        <header class="header">
            <div class="header__logo">
                <a href="/index.html"><img src="/img/logo.png" alt="Logo del Teatro Example" class="logo__image"></a>
            </div>
            <nav class="header__nav">
                <a href="/html/programacion-obra.html" class="nav__link">Programación</a>
                <a href="/html/informacion.html" class="nav__link">Información</a>
                <a href="/html/OtrasActividades.html" class="nav__link">Otras Actividades</a>
                <a href="/html/Contacto.html" class="nav__link">Contacto</a>
            </nav>
        </header>

        <main>
            <div class="main-block">
                <h1>Información</h1>
            </div>

            <section class="frame-Thorario">
                <div class="frame-Thorario_title">
                    <h2>Horarios de taquilla</h2>
                </div>
                <div class="frame-Thorario_txt">
                    <p>Nos complace anunciar que nuestro horario de apertura para la compra de entradas es especialmente
                        conveniente para nuestros visitantes. De lunes a viernes, nuestras taquillas están abiertas desde
                        las 8:00 a.m. hasta las 7:00 p.m., permitiendo así que tanto los madrugadores como los que prefieren
                        las tardes puedan adquirir sus entradas sin inconvenientes. Los fines de semana, extendemos nuestro
                        horario: abrimos a las 9:00 a.m. y cerramos a las 8:00 p.m., asegurándonos de que incluso aquellos
                        que disfrutan de un merecido descanso en la mañana puedan planificar su visita. Además, para mayor
                        comodidad, nuestra página web ofrece la posibilidad de comprar entradas en línea las 24 horas del
                        día, todos los días de la semana, facilitando aún más el acceso a nuestros eventos y espectáculos.
                    </p>
                </div>
            </section>

        </main>

        <footer class="footer">
            <div class="footer__logo">
                <img src="/img/logo2.png" alt="">
            </div>
            <div class="footer__menu">
                <a href="/html/programacion-obra.html" class="footer__menu-link">Programación</a>
                <a href="/html/informacion.html" class="footer__menu-link">Información</a>
                <a href="/html/OtrasActividades.html" class="footer__menu-link">Otras Actividades</a>
                <a href="/html/Contacto.html" class="footer__menu-link">Contacto</a>
            </div>
            <div class="footer__networks">
                <img src="/img/tweeter.png" alt="">
                <img src="/img/instagram.png" alt="">
                <img src="/img/facebook.png" alt="">
            </div>
        </footer>
    </div>
</template>
<style>
body,
h1,
h2,
p,
ul,
li,
a {
    margin: 0;
    padding: 0;
    text-decoration: none;
}

body {
    font-family: 'Roboto';
    line-height: 1.6;
    overflow: auto;
}

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
    /* Para que los elementos se distribuyan en línea */
    text-align: left;
    justify-content: left;
    /* Para alinear los elementos al final del contenedor */
    gap: 20px;
    /* Espacio entre los elementos */
}

.nav__link {
    color: #000000;
    text-decoration: none;
}

/*---------Header--------*/

.main-block {
    display: flex;
    align-items: center;
    justify-content: start;
    width: 100%;
    background-color: #1E3367;
    height: 13vh;
    margin-bottom: 10vh;
}

.main-block h1 {
    color: white;
    font-size: xx-large;
    margin-left: 20vh;
}

.frame-Thorario {
    display: flex;
    flex-direction: column;
    max-width: 600px;
    margin: auto;
}

.frame-Thorario_title {
    position: relative;
    margin-bottom: 25px;
    color: #000000;
    font-size: 20px;
}

.frame-Thorario_title h2::after {
    content: "";
    width: 100%;
    position: absolute;
    height: 2px;
    display: block;
    margin: 0 auto;
    background-color: #000000;
}

.frame-Thorario_txt {
    margin-top: 3vh;
    margin-bottom: 5vh;
    font-size: 20px;
}


/* Estilos del pie de página */
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

@media screen and (max-width: 1150px) {

    .header {
        margin-top: 5vh;
        display: flex;
        height: auto;
        text-align: center;
        margin-bottom: 5vh;
    }

    .header__logo {
        margin-left: 5vh;
    }

    .header__nav {
        flex-direction: column;
        align-items: center;
        text-align: center;
        margin-top: 10px;
    }

    main {
        margin: 0 15px;
    }

    .footer {
        display: flex;
        justify-content: center;
    }

    .footer__logo {
        text-align: center;
    }

    .footer__menu {
        display: flex;
        flex-direction: column;
    }

    .footer__networks {
        display: flex;
        flex-direction: column;
    }
}
</style>
-->