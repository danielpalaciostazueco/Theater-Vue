<template>
    <div class="cinema-seats" id="cinema-seats">

    </div>
    <div class="cinema-button">
        <div>
            <p>{{ $t("Comprar2.text") }} {{ calcularTotal }} €</p>
        </div>
        <div>
            <button @click="realizarCompraYRecargarAsientos">{{ $t("Comprar2.text2") }}</button>
        </div>
    </div>
</template>
<script setup lang="ts">
import { onMounted, ref, computed, nextTick } from 'vue';
import { useRoute } from 'vue-router';
import { useListadoObrasComprar2Store } from '../store/Comprar-2-Store';
import { jsPDF } from "jspdf";

const route = useRoute();
const store = useListadoObrasComprar2Store();
const idObra = route.params.Id as string;
const idSesion = route.query.idSesion as string;

const asientosSeleccionados = ref(new Set<number>());
onMounted(async () => {
    await store.resetearYRecargarAsientos(idObra, idSesion);
    await store.cargarObra(idObra);
    await store.cargarAsientosOcupados(idObra, idSesion);
    await store.cargarTodosLosAsientos();
    nextTick(() => {
        generarButacas();
    });
});

const calcularTotal = computed(() => {
    return asientosSeleccionados.value.size * store.precioPorAsiento;
});

const toggleSeatSelection = (asientoId: number) => {
    const asiento = store.asientos.find(a => a.idAsiento === asientoId);
    if (!asiento || !asiento.isFree) return;

    if (asientosSeleccionados.value.has(asientoId)) {
        asientosSeleccionados.value.delete(asientoId);
        document.getElementById(`asiento-${asientoId}`)!.style.fill = '#00008B';
    } else {
        asientosSeleccionados.value.add(asientoId);
        document.getElementById(`asiento-${asientoId}`)!.style.fill = 'green';
    }
    asientosSeleccionados.value = new Set(asientosSeleccionados.value);
};


const realizarCompra = async () => {

    const asientosParaComprar = Array.from(asientosSeleccionados.value).map(idAsiento => {
        return { idAsiento, isFree: true };
    });
    if (asientosParaComprar.length > 0) {
        await store.comprarAsientos(asientosParaComprar, idObra, idSesion);
        await generarPDF();
        asientosSeleccionados.value.clear();
        await store.cargarAsientosOcupados(idObra, idSesion);
        await store.cargarTodosLosAsientos();
    }
};

function generarButacas() {

    const anchoAsiento = 40, altoAsiento = 40, espacioEntreAsientos = 10, espacioEntreFilas = 20;
    const anchoReposabrazos = 10, altoReposabrazos = altoAsiento;
    const anchoSvg = (anchoAsiento + espacioEntreAsientos + anchoReposabrazos * 2) * 5;

    const anchoPantalla = anchoSvg * 0.8;
    const altoPantalla = 100;
    const xPantalla = (anchoSvg - anchoPantalla) / 2;
    const yPantalla = 20;

    let svgHTML = `<svg width="${anchoSvg}" height="400">`;


    svgHTML += `<rect x="${xPantalla}" y="${yPantalla}" width="${anchoPantalla}" height="${altoPantalla}" style="fill:#9f9f9f; stroke:white; stroke-width:2" />`;


    store.asientos.forEach((asiento, index) => {
        const fila = Math.floor(index / 5);
        const posAsiento = index % 5;
        const x = posAsiento * (anchoAsiento + espacioEntreAsientos + anchoReposabrazos * 2);
        const y = fila * (altoAsiento + espacioEntreFilas) + altoPantalla + yPantalla * 2;
        const color = asiento.isFree ? '#00008B' : 'red';


        svgHTML += `<rect id="asiento-${asiento.idAsiento}" x="${x + anchoReposabrazos}" y="${y}" width="${anchoAsiento}" height="${altoAsiento}" rx="5" ry="5" style="stroke:black; fill:${color}; cursor:pointer" />`;

        svgHTML += `<rect x="${x}" y="${y}" width="${anchoReposabrazos}" height="${altoReposabrazos}" style="fill:grey" />`;
        svgHTML += `<rect x="${x + anchoAsiento + anchoReposabrazos}" y="${y}" width="${anchoReposabrazos}" height="${altoReposabrazos}" style="fill:grey" />`;
    });

    svgHTML += '</svg>';


    document.getElementById('cinema-seats')!.innerHTML = svgHTML;
    document.querySelectorAll('rect[id^="asiento-"]').forEach((rect) => {

        const htmlRect = rect as unknown as HTMLElement;

        const idAsiento = parseInt(htmlRect.id.replace('asiento-', ''));
        const asiento = store.asientos.find(a => a.idAsiento === idAsiento);
        if (asiento && asiento.isFree) {
            htmlRect.addEventListener('click', () => toggleSeatSelection(idAsiento));
        } else {
            htmlRect.style.fill = 'red';
            htmlRect.style.cursor = "not-allowed";
        }
    });
}
const realizarCompraYRecargarAsientos = async () => {
    await realizarCompra();
    generarButacas();
};

function generarPDF() {
    const fechaActual = new Date();
    const anchoEntrada = 3.5 * 72;
    const altoEntrada = 200;

    const doc = new jsPDF({
        orientation: 'landscape',
        unit: 'pt',
        format: [anchoEntrada, altoEntrada]
    });

    const fechaFormateada = fechaActual.toLocaleDateString("es-ES", {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });


    const colorPrincipal = "#000";
    const colorSecundario = "#700";
    doc.setTextColor(colorPrincipal);


    doc.setFont('times', 'bold');
    doc.setFontSize(22);
    doc.text("UrbanTheater", 20, 30);


    doc.setDrawColor(colorSecundario);
    doc.setLineWidth(1);
    doc.line(20, 40, anchoEntrada - 20, 40);

    doc.setFont('times', 'normal');
    doc.setFontSize(12);

    doc.text(`Fecha: ${fechaFormateada}`, 20, 60);
    doc.text("Detalles de la Compra:", 20, 80);
    doc.text(`Obra: ${store.storeObras[0].nombre}`, 20, 100);
    doc.text(`Sesión ID: ${idSesion}`, 20, 120);
    const asientosComprados = Array.from(asientosSeleccionados.value).join(", ");
    doc.text(`Asientos: ${asientosComprados}`, 20, 140);


    doc.setFont('times', 'bold');
    doc.setTextColor(colorSecundario);
    doc.text(`Total: ${calcularTotal.value} €`, 20, 160);
    doc.save("compra.pdf");
}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Roboto:wght@400;500&display=swap');

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

h1,
h2 {
    font-family: 'Playfair Display', serif;
    color: white;
}

.article-block {
    display: flex;
    justify-content: right;
    margin-top: 10vh;
    flex-direction: column;
}

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


.frame-function {
    display: flex;
    align-items: center;
    background-color: #1E3367;
    width: 800px;
    height: 450px;
    text-align: center;
    max-width: 977px;
    margin: auto;
}

.frame-function__poster {
    flex: 1;
}

.frame-function__poster img {
    width: 280px;
}

.frame-function__title {
    flex: 1;
}

.frame-function__title h2 {
    font-size: 30px;
    color: white;
}

/* Estilos del contenedor */
#container {
    text-align: center;
}

h2 {
    color: #333;
}

.container-frame {
    margin-top: 20px;
    background-color: #f8f8f8;
    padding: 10px;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    display: flex;
    justify-content: center;
    align-items: center;
}

button {
    margin-left: 10px;
}

section {
    font-family: Arial, sans-serif;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 15vh;
}

.container {
    text-align: center;
}

.cinema-seats {
    display: flex;
    justify-content: center;
    padding-top: 30px;
}


.cinema-seats svg {
    cursor: pointer;
}

.cinema-button {
    display: flex;
    justify-content: space-between;
    padding: 20px;
    background-color: #1E3367;
    color: white;
    font-size: 20px;
    font-weight: bold;
}

.button-bought {
    background: linear-gradient(45deg, #ffd700, #d4af37);
    border: none;
    color: #1e3367;
    border-radius: 32px;

    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
    box-shadow: 0px 5px 15px rgba(212, 175, 55, 0.4);

    transition: transform 0.2s ease-in-out;

}


.button-bought:hover {
    background: linear-gradient(45deg, #ffe066, #e6be8a);
    transform: translateY(-2px);
}


.button-bought:active {
    transform: translateY(1px);
}

.ocupado {
    fill: red;
}

.seleccionado {
    fill: green;
}
</style>
