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

            <section class="frame-VG">
                <div class="frame-VG_title">
                    <h2>Visitas Guiadas</h2>
                </div>
                <div class="frame-VG_txt">
                    <p>Descubre los secretos detrás del escenario con nuestras emocionantes visitas guiadas al teatro Al
                        UrbanTheater. Únete a nosotros para explorar los rincones ocultos de este icónico espacio cultural.
                        Nuestros guías expertos te llevarán a través de los bastidores, revelando la rica historia del
                        teatro y compartiendo anécdotas fascinantes sobre las producciones que han iluminado nuestro
                        escenario a lo largo de los años. Desde los camerinos hasta el telón principal, experimentarás la
                        magia del teatro desde una perspectiva única. ¡Sumérgete en la historia y el encanto que hacen de
                        nuestro teatro un lugar verdaderamente especial!</p>
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

.frame-VG {
    display: flex;
    flex-direction: column;
    max-width: 600px;
    margin: auto;
}

.frame-VG_title {
    position: relative;
    margin-bottom: 25px;
    color: #000000;
    font-size: 20px;
}

.frame-VG_title h2::after {
    content: "";
    width: 100%;
    position: absolute;
    height: 2px;
    display: block;
    margin: 0 auto;
    background-color: #000000;
}

.frame-VG_txt {
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
