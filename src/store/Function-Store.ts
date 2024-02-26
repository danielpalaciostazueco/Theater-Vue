import { defineStore } from 'pinia';
import { reactive } from 'vue';

interface Obra {
  nombre: string;
  imagenes: string;
  obraID: string;
  descripcion: string;
  fechaUno: string | undefined;
  fechaDos: string | undefined;
  fechaTres: string | undefined;
  actores : string | undefined;
}

export const useListadoObrasFunctionStore = defineStore('listadoObras', () => {
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

  return { obras, cargarObras };
});
