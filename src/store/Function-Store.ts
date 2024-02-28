import { defineStore } from 'pinia';
import { reactive, ref } from 'vue';

interface Obra {
  nombre: string;
  imagenes: string[];
  obraID: string;
  descripcion: string;
  fechaUno: string;
  fechaDos: string;
  fechaTres: string;
  actores: string[];
}

export const useListadoObrasFunctionStore = defineStore('listadoObrasFuncion', () => {
  const storeObras = reactive<Obra[]>([]);


  async function cargarObras(obraID: string) {
    try {
      const response = await fetch(`http://localhost:8001/Obra/${obraID}`);
      if (!response.ok) {
        throw new Error('Error al obtener los datos de la obra');
      }
      const data = await response.json();
      storeObras.length = 0; 
      storeObras.push({
        nombre: data.nombre,
        imagenes: data.imagenes.split(','),
        obraID: data.obraID,
        descripcion: data.descripcion,
        fechaUno: formatearFecha(data.fechaUno),
        fechaDos: formatearFecha(data.fechaDos),
        fechaTres: formatearFecha(data.fechaTres),
        actores: data.actores.split(','),
      });
    } catch (error) {
      console.error('Error al obtener los datos de la obra:', error);
    }
  }
  function formatearFecha(fecha: string) {
    const opciones: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(fecha).toLocaleDateString('es-ES', opciones);
  }

  return { cargarObras, storeObras};
});
