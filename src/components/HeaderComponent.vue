<template>
  <header class="header">
    <div class="header__logo">
      <canvas ref="canvasRef" @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave" width="300"
        height="200"></canvas>
    </div>
    <nav class="header__nav">
      <RouterLink to="/" class="nav__link">{{ $t("Header.homepage") }}</RouterLink>
      <RouterLink to="/Programacion" class="nav__link">{{ $t("Header.schedule") }}</RouterLink>
      <RouterLink to="/About" class="nav__link">{{ $t("Header.information") }}</RouterLink>
      <RouterLink to="/Activities" class="nav__link">{{ $t("Header.activities") }}</RouterLink>
      <RouterLink to="/Contact" class="nav__link">{{ $t("Header.contact") }}</RouterLink>
      <RouterLink to="/Historial" class="nav__link">{{ $t("Header.record") }}</RouterLink>
      <RouterLink to="/Register" class="nav__link">{{ $t("Header.register") }}</RouterLink> 
      <RouterLink v-if="isAdmin" to="/AdminPanel" class="nav__link">{{ $t("HomeAdmin.admin") }}</RouterLink>
    </nav>
    <button @click="toggleLanguage" class="nav__link language-toggle">{{ currentLanguage }}</button>

  </header>
</template>

<script setup lang="ts">
import { onMounted, ref, computed } from 'vue'
import { RouterLink } from 'vue-router'
import { useListadoObrasLoginStore } from '../store/LoginView-Store';
import { useI18n } from 'vue-i18n';

const store = useListadoObrasLoginStore();
const { t, locale } = useI18n();

const isAdmin = computed(() => store.isAdmin());
const currentLanguage = computed(() => locale.value === 'en' ? 'Español' : 'English');

const toggleLanguage = () => {
  locale.value = locale.value === 'en' ? 'es' : 'en';
}

const mask1Src = '/Careta-Morada.png';
const mask2Src = '/Careta-amarilla.png';

const separation = ref(0);
const canvasRef = ref<HTMLCanvasElement | null>(null);

onMounted(() => {
  if (canvasRef.value) {
    const ctx = canvasRef.value.getContext("2d");
    if (!ctx) return;

    const mask1 = new Image();
    const mask2 = new Image();


    mask1.onload = () => {

      if (mask2.complete) {
        drawMasks(ctx, mask1, mask2);
      }
    };
    mask2.onload = () => {

      if (mask1.complete) {
        drawMasks(ctx, mask1, mask2);
      }
    };

    mask1.src = mask1Src;
    mask2.src = mask2Src;
  }
});

function drawMasks(ctx: CanvasRenderingContext2D, mask1: HTMLImageElement, mask2: HTMLImageElement) {
  const canvasWidth = ctx.canvas.width;
  const canvasHeight = ctx.canvas.height;

  ctx.clearRect(0, 0, canvasWidth, canvasHeight);

  const circleRadius = 30;
  ctx.lineWidth = 6;
  ctx.strokeStyle = "blue";
  ctx.fillStyle = "#87CEEB";
  ctx.beginPath();
  ctx.arc(canvasWidth / 2, canvasHeight / 2, circleRadius, 0, 2 * Math.PI);
  ctx.fill();
  ctx.stroke();


  const maskWidth = mask1.width;
  const maskX1 = (canvasWidth - maskWidth) / 2 - separation.value / 2;
  const maskX2 = (canvasWidth - maskWidth) / 2 + separation.value / 2;


  const maskHeight = mask1.height;
  const maskY = (canvasHeight - maskHeight) / 2;


  ctx.drawImage(mask1, maskX1, maskY, maskWidth, maskHeight);
  ctx.drawImage(mask2, maskX2, maskY, maskWidth, maskHeight);
}

function handleMouseEnter() {

  separation.value = 20;
  redrawMasks();
}

function handleMouseLeave() {

  separation.value = 0;
  redrawMasks();
}

function redrawMasks() {
  if (canvasRef.value) {
    const ctx = canvasRef.value.getContext("2d");
    if (!ctx) return;

    const mask1 = new Image();
    const mask2 = new Image();


    mask1.onload = () => {
      if (mask2.complete) {
        drawMasks(ctx, mask1, mask2);
      }
    };
    mask2.onload = () => {
      if (mask1.complete) {
        drawMasks(ctx, mask1, mask2);
      }
    };

    mask1.src = mask1Src;
    mask2.src = mask2Src;
  }
}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Roboto:wght@400;500&display=swap');

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

.header__nav {
  flex: 2.2;
  display: flex;
  justify-content: left;
  gap: 20px;
}

.nav__link,
.language-toggle {
  font-family: 'Roboto', sans-serif;
  padding: 10px 20px;
  border-radius: 20px;
  background-color: transparent;
  color: #1E3367;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
  height: fit-content;
  text-decoration: none;
}

.nav__link:hover,
.language-toggle:hover {
  background-color: #1E3367;
  color: #ffffff;
}

.language-toggle {
  margin-left: auto;
  display: inline-block;
  margin-left: 117px;
  font-family: 'Playfair Display', serif;
  font-weight: 700;
}


@media screen and (max-width: 768px) {
  .header {
    text-align: center;
    margin-top: 5vh;
    margin-bottom: 5vh;
    display: grid;
  }

  .header__logo,
  .header__nav {
    display: flex;
    justify-content: left;
    gap: 20px;
  }

  .language-toggle {
    margin-left: 0;
    margin-top: 10px;
  }
}
</style>