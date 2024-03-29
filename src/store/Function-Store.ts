import { defineStore } from 'pinia';
import { reactive } from 'vue';
import { URLAPI } from '@/env';

interface Obra {
  nombre: string;
  imagenes: string[];
  obraID: string;
  descripcion: string;
  fechaUno: string;
  fechaDos: string;
  fechaTres: string;
  actores: string[];
  duracion: number;
}

export const useListadoObrasFunctionStore = defineStore('listadoObrasFuncion', () => {
  const storeObras = reactive<Obra[]>([]);


  async function cargarObras(obraID: string) {
    try {
      const response = await fetch(`${URLAPI}/Obra/${obraID}`);
      if (!response.ok) {
        throw new Error('Error al obtener los datos de la obra');
      }
      const data = await response.json();
      storeObras.length = 0; 
      storeObras.push({
        nombre: data.nombre,
        imagenes: data.imagenes.split(','),
        obraID: data.obraID,
        duracion: data.duracion,
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

  function formatearFecha(fecha: string): string {
  const fechaObj = new Date(fecha);
  fechaObj.setHours(fechaObj.getHours()); 
  return fechaObj.toLocaleString('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  });
}

  return { cargarObras, storeObras};
});
