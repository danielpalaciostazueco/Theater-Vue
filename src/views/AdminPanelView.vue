<template>
  <div class="gestion-obras">
    <h2 class="titulo">Gestión de Obras</h2>
    <button @click="nuevaObra" class="boton-agregar">Añadir Nueva Obra</button>
    <table class="tabla-obras">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Descripción</th>
          <th>Autores</th>
          <th>Duración</th>
          <th>Actores</th>
          <th>Imágenes</th>
          <th>Fechas</th>
          <th>Cartel</th>
          <th>Acciones</th>
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
          <td>{{ obra.fechas }}</td>
          <td><img :src="obra.cartel" alt="Cartel de la obra" style="width: 100px; height: auto;" /></td>
          <td>
            <button @click="editarObra(obra)">Editar</button>
            <button @click="obra.obraID && borrarObra(obra.obraID)">Borrar</button>
          </td>
        </tr>
      </tbody>
    </table>
    <div v-if="mostrarFormulario">
      <input v-model="obraEditando.nombre" placeholder="Nombre" />
      <textarea v-model="obraEditando.descripcion" placeholder="Descripción"></textarea>
      <input v-model="obraEditando.autores" placeholder="Autores (separados por comas)" />
      <input v-model="obraEditando.duracion" type="number" placeholder="Duración (en horas)" />
      <input v-model="obraEditando.actores" placeholder="Actores (separados por comas)" />
      <input v-model="obraEditando.imagenes" placeholder="URL de Imágenes (separadas por comas)" />
      <input v-model="obraEditando.fechas" placeholder="Fechas (separadas por comas)" />
      <input v-model="obraEditando.cartel" placeholder="URL del Cartel" />
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
  fechas: string;
  cartel: string;
}

const estadoInicial: Obra = {
  nombre: '',
  descripcion: '',
  autores: '',
  duracion: null,
  actores: '',
  imagenes: '',
  fechas: '',
  cartel: ''
};

const obras = ref<Obra[]>([]); 
const obraEditando = ref<Obra>({ ...estadoInicial });
const mostrarFormulario = ref(false); 

onMounted(cargarObras);

async function cargarObras() {
  try {
    const response = await fetch('http://localhost:8001/Obras');
    obras.value = await response.json();
  } catch (error) {
    console.error('Error al cargar las obras:', error);
  }
}

async function guardarObra() {
  const url = obraEditando.value.obraID ? `http://localhost:8001/Obras/${obraEditando.value.obraID}` : 'http://localhost:8001/Obras';
  const method = obraEditando.value.obraID ? 'PUT' : 'POST';

  try {
    const response = await fetch(url, {
      method: method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(obraEditando.value),
    });

    if (!response.ok) throw new Error('Error al guardar la obra');
    cerrarFormulario();
    await cargarObras();
  } catch (error) {
    console.error('Error al guardar la obra:', error);
  }
}

async function borrarObra(obraID: number) {
  try {
    const response = await fetch(`http://localhost:8001/Obras/${obraID}`, { method: 'DELETE' });
    if (!response.ok) throw new Error('Error al borrar la obra');
    await cargarObras();
  } catch (error) {
    console.error('Error al borrar la obra:', error);
  }
}

function cerrarFormulario() {
  mostrarFormulario.value = false;
  obraEditando.value = { ...estadoInicial };
}

function nuevaObra() {
  obraEditando.value = { ...estadoInicial };
  mostrarFormulario.value = true;
}

function editarObra(obra: Obra) {
  obraEditando.value = { ...obra };
  mostrarFormulario.value = true;
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
