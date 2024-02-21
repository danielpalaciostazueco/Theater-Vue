<template>
    <header class="header">
        <div class="header__logo">
            <RouterLink to="/"></RouterLink>
            <canvas ref="canvasRef" width="100" height="106"></canvas>
        </div>
        <nav class="header__nav">
            <!-- Se eliminó el nav anidado redundante -->
            <RouterLink to="/Programacion" class="nav__link">Programación</RouterLink>
            <RouterLink to="/About" class="nav__link">Información</RouterLink>
            <RouterLink to="/Activities" class="nav__link">Otras Actividades</RouterLink>
            <RouterLink to="/Contact" class="nav__link">Contacto</RouterLink>
        </nav>
    </header>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { RouterLink } from 'vue-router'

// Define las rutas de las imágenes como referencias reactivas
const mask1Src = "../assets/Careta-Morada.png";
const mask2Src = "../assets/Careta-amarilla.png";

// Separación inicial y estado de animación como referencias reactivas
const separation = ref(0);
const movingApart = ref(false);

// Crear una referencia para el elemento canvas con el tipo correcto
const canvasRef = ref<HTMLCanvasElement | null>(null);

onMounted(() => {
    if (canvasRef.value) {
        const ctx = canvasRef.value.getContext("2d");
        if (!ctx) return; // Asegura que ctx está definido

        const mask1 = new Image();
        const mask2 = new Image();

        // Configura las fuentes de las imágenes
        mask1.src = mask1Src;
        mask2.src = mask2Src;
    }
});

function drawMasks(ctx: CanvasRenderingContext2D, mask1: HTMLImageElement, mask2: HTMLImageElement) {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    ctx.lineWidth = 6;
    ctx.strokeStyle = "blue";
    ctx.fillStyle = "#87CEEB";
    ctx.beginPath();
    ctx.arc(50, 45, 30, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();

    ctx.drawImage(mask1, ctx.canvas.width / 2 - mask1.width / 2 - separation.value, ctx.canvas.height / 2 - mask1.height / 2);
    ctx.drawImage(mask2, ctx.canvas.width / 2 - mask2.width / 2 + separation.value, ctx.canvas.height / 2 - mask2.height / 2);
}
</script>
<style>
/* Los estilos se mantienen iguales, ya que no hay indicación de problemas en ellos */
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
    justify-content: left;
    gap: 20px;
}

.nav__link {
    color: #000000;
    text-decoration: none;
}

@media screen and (max-width: 1150px) {
    .header {
        flex-direction: column;
        text-align: center;
        margin-top: 5vh;
        margin-bottom: 5vh;
    }

    .header__logo,
    .header__nav {
        margin-left: 0;
        margin-top: 10px;
    }
}
</style>
