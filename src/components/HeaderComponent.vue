<template>
  <header class="header">
    <div class="header__logo">
      <RouterLink to="/"></RouterLink>
      <canvas ref="canvasRef" width="100" height="106"></canvas>
    </div>
    <nav class="header__nav">
      <RouterLink to="/Programacion" class="nav__link">{{ $t("Header.schedule") }}</RouterLink>
      <RouterLink to="/About" class="nav__link">{{ $t("Header.information") }}</RouterLink>
      <RouterLink to="/Activities" class="nav__link">{{ $t("Header.activities") }}</RouterLink>
      <RouterLink to="/Contact" class="nav__link">{{ $t("Header.contact") }}</RouterLink>
    </nav>
    <section class="search-block" style="text-align: right; padding: 20px;">
      <input v-model="nombreBuscado" placeholder="Buscar obra por nombre..." />
    </section>
  </header>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { RouterLink, useRouter } from 'vue-router'
const nombreBuscado = ref('');
const router = useRouter();

const mask1Src = '/Careta-Morada.png';
const mask2Src = '/Careta-amarilla.png';

const separation = ref(0);
const movingApart = ref(false);

const canvasRef = ref<HTMLCanvasElement | null>(null);

onMounted(() => {
  if (canvasRef.value) {
    const ctx = canvasRef.value.getContext("2d");
    if (!ctx) return;

    const mask1 = new Image();
    const mask2 = new Image();

    mask1.onload = () => {
      drawMasks(ctx, mask1, mask2);
    };
    mask2.onload = () => {
      drawMasks(ctx, mask1, mask2);
    };

    mask1.onerror = () => {
      alert("Error al cargar la imagen 1");
    };

    mask2.onerror = () => {
      alert("Error al cargar la imagen 2");
    };

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
  ctx.arc(100, 100, 30, 0, 2 * Math.PI);
  ctx.fill();
  ctx.stroke();


  ctx.drawImage(mask1, 100 - mask1.width / 2 - separation.value, 50, 100, 100);
  ctx.drawImage(mask2, 100 - mask2.width / 2 + separation.value, 50, 100, 100);
}

function handleMouseEnter() {
  movingApart.value = true;
  separation.value = 10;
  redrawMasks();
}

function handleMouseLeave() {
  movingApart.value = false;
  separation.value = 0;
  redrawMasks();
}

function redrawMasks() {
  if (canvasRef.value) {
    const ctx = canvasRef.value.getContext("2d");
    if (!ctx) return;
    const mask1 = new Image();
    const mask2 = new Image();
    mask1.src = mask1Src;
    mask2.src = mask2Src;
    mask1.onload = () => {
      drawMasks(ctx, mask1, mask2);
    };
    mask2.onload = () => {
      drawMasks(ctx, mask1, mask2);
    };
  }
}

const buscarObra = async () => {
  if (!nombreBuscado.value) {
    alert('Por favor, ingrese un nombre para buscar.');
    return;
  }
  try {
    const response = await fetch(`http://localhost:8001/Obras/Nombre/${nombreBuscado.value}`);
    if (response.ok) {
      const obraEncontrada = await response.json();
      router.push(`/ComprarUno/${obraEncontrada.obraID}`);
    } else {
      alert('Obra no encontrada.');
    }
  } catch (error) {
    console.error('Error al buscar la obra:', error);
  }
};
</script>

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
