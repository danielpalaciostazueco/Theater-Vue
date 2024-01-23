<template>
     <header class="header">
        <div class="header__logo">
            <a href="/index.html"><img src="../assets/img/logo.png" alt="Logo del Teatro Example" class="logo__image"></a>
        </div>
        <nav class="header__nav">
            <a href="/html/programacion-obra.html" class="nav__link">Programación</a>
            <a href="/html/informacion.html" class="nav__link">Información</a>
            <a href="/html/OtrasActividades.html" class="nav__link">Otras Actividades</a>
            <a href="/html/Contacto.html" class="nav__link">Contacto</a>
        </nav>
    </header>
</template>
<style>


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
    text-align: left;
    justify-content: left;
    gap: 20px;
}


.nav__link {
    color: #000000;
    text-decoration: none;
}

@media screen and (max-width: 1150px) {


.header {
    margin-top: 5vh;
    display: flex; 
    height: auto;
    text-align: center;
    margin-bottom: 5vh;
}
.header__logo{
    margin-left: 5vh;
}

.header__nav {
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin-top: 10px;
}
}
</style>
