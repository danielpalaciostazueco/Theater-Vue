import { defineStore } from 'pinia';
import { reactive } from 'vue';

export interface Obra {
  obraID: number;
  nombre: string;
  descripcion: string;
  autores: string;
  duracion: number;
  actores: string;
  imagenes: string;
  fechaUno: string; 
  fechaDos: string;
  fechaTres: string;
  cartel: string;
}

export const useListadoObrasAdminStore = defineStore('listadoObrasAdmin', () => {
  const apiUrl = 'http://localhost:8001/Obra';
  const obras = reactive<Array<Obra>>([]);
  const obraEditando = reactive<Obra>({
    obraID: 0,
    nombre: '',
    descripcion: '',
    autores: '',
    duracion: 0,
    actores: '',
    imagenes: '',
    fechaUno: new Date().toISOString(), 
    fechaDos: new Date().toISOString(),
    fechaTres: new Date().toISOString(),
    cartel: '',
  });
  function convertirFechasParaBackend(obra: Obra) {
    return {
      ...obra,
      fechaUno: obra.fechaUno ? new Date(obra.fechaUno).toISOString() : '',
      fechaDos: obra.fechaDos ? new Date(obra.fechaDos).toISOString() : '',
      fechaTres: obra.fechaTres ? new Date(obra.fechaTres).toISOString() : '',
    };
  }

  async function cargarObras() {
    try {
      const response = await fetch(apiUrl);
      if (!response.ok) throw new Error('Error al cargar las obras');
      const data = await response.json();
      obras.splice(0, obras.length, ...data);
    } catch (error) {
      console.error('Error al cargar las obras:', error);
    }
  }

  
async function guardarObra(obra: Obra) {
  try {
  
    const obraParaGuardar = convertirFechasParaBackend(obra);

    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(obraParaGuardar),
    });

    if (!response.ok) {
      const errorBody = await response.text();
      throw new Error(`Error al guardar la obra: ${errorBody}`);
    }

    await cargarObras();
  } catch (error) {
    console.error('Error al guardar la obra:', error);
  }
}

async function actualizarObra(obra: Obra) {
  try {
    
    const obraParaActualizar = convertirFechasParaBackend(obra);

    const response = await fetch(`${apiUrl}/${obra.obraID}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(obraParaActualizar),
    });

    if (!response.ok) {
      const errorBody = await response.text();
      throw new Error(`Error al actualizar la obra: ${errorBody}`);
    }

    await cargarObras();
  } catch (error) {
    console.error('Error al actualizar la obra:', error);
  }
}
  async function borrarObra(obraID: number) {
    try {
      const response = await fetch(`${apiUrl}/${obraID}`, {
        method: 'DELETE',
      });
      if (!response.ok) throw new Error('Error al borrar la obra');
      await cargarObras();
    } catch (error) {
      console.error('Error al borrar la obra:', error);
    }
  }

  function setObraEditando(obra: Obra) {
    Object.assign(obraEditando, obra);
  }

  function resetObraEditando() {
    Object.assign(obraEditando, {
      obraID: 0,
      nombre: '',
      descripcion: '',
      autores: '',
      duracion: 0,
      actores: '',
      imagenes: '',
      fechaUno: '',
      fechaDos: '',
      fechaTres: '',
      cartel: '',
    });
  }

  return { obras, obraEditando, cargarObras, guardarObra, actualizarObra, borrarObra, resetObraEditando, setObraEditando };
});
