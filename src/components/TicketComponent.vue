<template>
    <div class="ticket-container">
        <h1 class="ticket-title">UrbanTheater</h1>
        <p class="ticket-date">{{ fechaFormateada }}</p>
        <div class="ticket-details">
            <h2>Detalles de la Compra</h2>
            <p class="ticket-show">Obra: {{ store.storeObras[0]?.nombre }}</p>
            <p class="ticket-session">Sesión ID: {{ idSesion }}</p>
            <p class="ticket-seats">Asientos: {{ asientosComprados }}</p>
            <p class="ticket-total">Total: {{ calcularTotal }} €</p>
        </div>
        <button class="ticket-button" @click="realizarCompraYRecargarAsientos">
            {{ $t("Comprar2.text2") }}
        </button>
    </div>
</template>

<script setup lang="ts">
import { useListadoObrasComprar2Store } from '../store/Comprar-2-Store';
const store = useListadoObrasComprar2Store();
</script>

<style scoped>
.ticket-container {
    font-family: 'Times New Roman', serif;
    max-width: 300px;
    margin: auto;
    padding: 20px;
    background-color: #fdf3e7;
    border: 2px solid #000;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}

.ticket-title {
    font-size: 24px;
    text-align: center;
    color: #8b0000;
}

.ticket-date, .ticket-details h2, .ticket-show, .ticket-session, .ticket-seats, .ticket-total {
    font-size: 16px;
    margin: 10px 0;
    color: #333;
}

.ticket-button {
    display: block;
    width: 100%;
    padding: 10px;
    background-color: #8b0000;
    color: #fff;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.ticket-button:hover {
    background-color: #a52a2a;
}
</style>
