<template>
  <div class="gestion-obras">
    <h2 class="titulo">{{ $t("AdminPanel.title") }}</h2>
    <button @click="nuevaObra" class="boton-agregar">{{ $t("AdminPanel.create") }}</button>
    <table class="tabla-obras">
      <thead>
        <tr>
          <th>{{ $t("AdminPanel.id") }}</th>
          <th>{{ $t("AdminPanel.name") }}</th>
          <th>{{ $t("AdminPanel.description") }}</th>
          <th>{{ $t("AdminPanel.authors") }}</th>
          <th>{{ $t("AdminPanel.duration") }}</th>
          <th>{{ $t("AdminPanel.actors") }}</th>
          <th>{{ $t("AdminPanel.images") }}</th>
          <th>{{ $t("AdminPanel.date1") }}</th>
          <th>{{ $t("AdminPanel.date2") }}</th>
          <th>{{ $t("AdminPanel.date3") }}</th>
          <th>{{ $t("AdminPanel.poster") }}</th>
          <th>{{ $t("AdminPanel.actions") }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="obra in obras" :key="obra.obraID">
          <td>{{ obra.obraID }}</td>
          <td>{{ obra.nombre }}</td>
          <td>{{ obra.descripcion }}</td>
          <td>{{ obra.autores }}</td>
          <td>{{ obra.duracion }}</td>
          <td>{{ obra.actores }}</td>
          <td>
            <ul>
              <li v-for="imagen in obra.imagenes.split(',')" :key="imagen">{{ imagen }}</li>
            </ul>
          </td>
          <td>{{ obra.fechaUno }}</td>
          <td>{{ obra.fechaDos }}</td>
          <td>{{ obra.fechaTres }}</td>
          <td><img :src="obra.cartel" alt="Cartel de la obra" style="width: 100px; height: auto;" /></td>
          <td>
            <button @click="editarObra(obra)">Editar</button>
            <button @click="borrarObra(obra.obraID!)">Borrar</button>
          </td>
        </tr>
      </tbody>
    </table>
    <div v-if="mostrarFormulario">
      <input v-model="obraEditando.nombre" placeholder="Nombre" />
      <textarea v-model="obraEditando.descripcion" placeholder="Descripción"></textarea>
      <input v-model="obraEditando.autores" placeholder="Autores" />
      <input v-model="obraEditando.duracion" type="number" placeholder="Duración" />
      <input v-model="obraEditando.actores" placeholder="Actores" />
      <input v-model="obraEditando.imagenes" placeholder="Imágenes" />
      <input type="date" v-model="obraEditando.fechaUno" placeholder="Fecha 1" />
      <input type="date" v-model="obraEditando.fechaDos" placeholder="Fecha 2" />
      <input type="date" v-model="obraEditando.fechaTres" placeholder="Fecha 3" />
      <input v-model="obraEditando.cartel" placeholder="Cartel" />
      <button @click="guardarObra">Guardar</button>
      <button @click="cerrarFormulario">Cancelar</button>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue';

interface Obra {
  obraID?: number;
  nombre: string;
  descripcion: string;
  autores: string;
  duracion: number | null;
  actores: string;
  imagenes: string;
  fechaUno: string;
  fechaDos: string;
  fechaTres: string;
  cartel: string;
}

const obras = ref<Obra[]>([]);
const obraEditando = ref<Obra>({ ...estadoInicial() });
const mostrarFormulario = ref(false);

function estadoInicial(): Obra {
  return {
    nombre: '',
    descripcion: '',
    autores: '',
    duracion: null,
    actores: '',
    imagenes: '',
    fechaUno: '',
    fechaDos: '',
    fechaTres: '',
    cartel: '',
  };
}


function convertirFechaAString(fecha: Date): string {
  return fecha.toISOString().substring(0, 10);
}


function convertirStringAFecha(fechaStr: string): Date {
  return new Date(fechaStr);
}

onMounted(cargarObras);

async function cargarObras() {
  try {
    const response = await fetch('http://localhost:8001/Obras');
    const data = await response.json();
    obras.value = data.map((obra: any) => ({
      ...obra,

      fechaUno: convertirFechaAString(new Date(obra.fechaUno)),
      fechaDos: convertirFechaAString(new Date(obra.fechaDos)),
      fechaTres: convertirFechaAString(new Date(obra.fechaTres)),
    }));
  } catch (error) {
    console.error('Error al cargar las obras:', error);
  }
}

async function guardarObra() {
  const obraParaGuardar = {
    ...obraEditando.value,
    fechaUno: convertirStringAFecha(obraEditando.value.fechaUno),
    fechaDos: convertirStringAFecha(obraEditando.value.fechaDos),
    fechaTres: convertirStringAFecha(obraEditando.value.fechaTres),
  };


  const url = obraEditando.value.obraID ? `http://localhost:8001/Obras/${obraEditando.value.obraID}` : 'http://localhost:8001/Obras';
  const method = obraEditando.value.obraID ? 'PUT' : 'POST';

  try {
    const response = await fetch(url, {
      method: method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(obraParaGuardar),
    });

    if (!response.ok) {
      throw new Error('Error al guardar la obra');
    }
    cerrarFormulario();
    await cargarObras();
  } catch (error) {
    console.error('Error al guardar la obra:', error);
  }
}

function cerrarFormulario() {
  mostrarFormulario.value = false;
  obraEditando.value = estadoInicial();
}

function nuevaObra() {
  obraEditando.value = estadoInicial();
  mostrarFormulario.value = true;
}

function editarObra(obra: Obra) {
  obraEditando.value = { ...obra };
  mostrarFormulario.value = true;
}

async function borrarObra(obraID: number) {
  try {
    const response = await fetch(`http://localhost:8001/Obras/${obraID}`, { method: 'DELETE' });
    if (!response.ok) {
      throw new Error('Error al borrar la obra');
    }
    await cargarObras();
  } catch (error) {
    console.error('Error al borrar la obra:', error);
  }
}
</script>



<style scoped>
.gestion-obras {
  padding: 20px;
  font-family: Arial, sans-serif;
}

.titulo {
  text-align: center;
  margin-bottom: 20px;
}

.boton-agregar,
.boton-editar,
.boton-borrar {
  background-color: #1E3367;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-right: 5px;
}

.boton-agregar:hover,
.boton-editar:hover,
.boton-borrar:hover {
  background-color: #1E3367;
}

.tabla-obras {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
}

.tabla-obras th,
.tabla-obras td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}

.tabla-obras th {
  background-color: #1E3367;
  color: white;
}

.tabla-obras tr:nth-child(even) {
  background-color: #f2f2f2;
}

.tabla-obras tr:hover {
  background-color: #ddd;
}

.formulario-obras {
  display: flex;
  flex-direction: column;
  margin-top: 20px;
}

.formulario-obras input,
.formulario-obras textarea {
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.formulario-obras button {
  margin-top: 10px;
}
</style>
