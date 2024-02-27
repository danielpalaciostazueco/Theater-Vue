import { defineStore } from 'pinia';
import { reactive } from 'vue';

export interface Obra {
  obraID: string;
  nombre: string | null;
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


export const useListadoObrasAdminStore = defineStore('listadoObrasAdmin', () => {
  const apiUrl = 'http://localhost:8001/Obras';
  const obras = reactive<Array<Obra>>([]);

  const obraEditando = reactive<Obra>({
    obraID: '',
    nombre: null,
    descripcion: '',
    autores: '',
    duracion: null,
    actores: '',
    imagenes: '',
    fechaUno: '',
    fechaDos: '',
    fechaTres: '',
    cartel: '',
  });

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
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(obra),
      });
      if (!response.ok) throw new Error('Error al guardar la obra');
      await cargarObras(); // Recargar obras después de guardar
    } catch (error) {
      console.error('Error al guardar la obra:', error);
    }
  }

  async function actualizarObra(obra: Obra) {
    try {
      const response = await fetch(`${apiUrl}/${obra.obraID}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(obra),
      });
      if (!response.ok) throw new Error('Error al actualizar la obra');
      await cargarObras(); // Recargar obras después de actualizar
    } catch (error) {
      console.error('Error al actualizar la obra:', error);
    }
  }

  async function borrarObra(obraID: string) {
    try {
      const response = await fetch(`${apiUrl}/${obraID}`, {
        method: 'DELETE',
      });
      if (!response.ok) throw new Error('Error al borrar la obra');
      await cargarObras(); // Recargar obras después de borrar
    } catch (error) {
      console.error('Error al borrar la obra:', error);
    }
  }

 function setObraEditando(obra: Obra) {
    Object.assign(obraEditando, obra);
  }

  function resetObraEditando() {
    Object.assign(obraEditando, {
      obraID: '',
      nombre: null,
      descripcion: '',
      autores: '',
      duracion: null,
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
