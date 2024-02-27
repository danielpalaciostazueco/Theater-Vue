import { defineStore } from 'pinia';
import { reactive } from 'vue';

interface Obra {
  nombre: string;
  imagenes: string[];
  obraID: string;
  descripcion: string;
  fechaUno: string;
  fechaDos: string;
  fechaTres: string;
}

export const useListadoObrasComprar1Store = defineStore('listadoObrasComprar1', () => {
  const storeObras = reactive<Obra[]>([]);


  async function cargarObras(obraID: string) {
    try {
      const response = await fetch(`http://localhost:8001/Obras/${obraID}`);
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
