
import { defineStore } from 'pinia';
import { reactive } from 'vue';

const obra = reactive(Array<Obra>())

interface Obra {
  nombre: string;
  imagenes: string;
  obraID: string;
}

export const useListadoObrasStore = defineStore('listadoObras', () => {
  const obras = reactive<Array<Obra>>([]);

  const cargarObras = async () => {
    try {
      const response = await fetch('http://localhost:8001/obras');
      if (!response.ok) {
        throw new Error('Error al obtener los datos de las obras');
      }
      const data = await response.json();
      data.forEach((obra: Obra) => obras.push(obra)); 
    } catch (error) {
      console.error('Error al obtener los datos de las obras:', error);
    }
  };

  return { obras, cargarObras };
});






