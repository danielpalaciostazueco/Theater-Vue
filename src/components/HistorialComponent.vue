<template>
    <div class="historial-container">
        <div v-for="(grupo, clave) in historiales" :key="clave" class="historial-group">
            <h2>{{ grupo.nombreObra }}</h2>
            <p>{{ grupo.nombreUsuario }}</p>
            <p>{{ grupo.fecha }}</p>
            <p>Sesión: {{ grupo.sesion }}</p>
            <p>Asientos: {{ grupo.asientos.join(', ') }}</p>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, computed } from 'vue';
import { useHistorialStore } from '../store/Historial-Store';
import { useListadoObrasLoginStore } from '@/store/LoginView-Store';

const historialStore = useHistorialStore();
const usuarioStore = useListadoObrasLoginStore();

onMounted(() => {
    historialStore.cargarHistoriales(usuarioStore.usuarios[0].idUsuario);
});

const historiales = computed(() => {
    return historialStore.historiales;
});
</script>

<style>
.historial-container {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
}

.historial-group {
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 20px;
    width: 300px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.historial-group h2 {
    margin-top: 0;
}
</style>
