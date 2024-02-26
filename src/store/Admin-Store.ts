import { defineStore } from 'pinia';
import { reactive } from 'vue';

interface Obra {
  obraID?: number;
  nombre: string;
  descripcion: string;
  autores: string;
  duracion: number | null;
  actores: string;
  imagenes: string;
  fechaUno: string | undefined;
  fechaDos: string | undefined;
  fechaTres: string | undefined;
  cartel: string;
}

export const useListadoObrasAdminStore = defineStore('listadoObras', () => {
  const obras = reactive<Array<Obra>>([]);

  const cargarObras = async () => {
    try {
      const response = await fetch('http://localhost:8001/obras');
      if (!response.ok) {
        throw new Error('Error al obtener los datos de las obras');
      }
      const data = await response.json();
      
      data.forEach((obra: Obra) => {
        obra.fechaUno = obra.fechaUno ? formatearFecha(obra.fechaUno) : undefined;
        obra.fechaDos = obra.fechaDos ? formatearFecha(obra.fechaDos) : undefined;
        obra.fechaTres = obra.fechaTres ? formatearFecha(obra.fechaTres) : undefined;
        obras.push(obra);
      });
    } catch (error) {
      console.error('Error al obtener los datos de las obras:', error);
    }
  };

  const formatearFecha = (fecha: string) => {
    const opciones: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(fecha).toLocaleDateString('es-ES', opciones);
  };

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

  async function guardarObra() {
    const obraParaGuardar = {
     
     

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

  return { obras, cargarObras };
});
