import { URLAPI } from '@/env';
import { defineStore } from 'pinia';
import { ref } from 'vue';

interface Obra {
  nombre: string;
  imagenes: string;
  obraID: string;
}

export const useListadoObrasStore = defineStore('listadoObras', () => {
  const obras = ref<Array<Obra>>([]);
  let data: any;
  const cargarObras = async () => {
    try {
      const response = await fetch(`${URLAPI}/Obra`);
      if (!response.ok) {
       const response = await fetch(`${URLAPI}/Obra`);
       data = await response.json();
      }
       data = await response.json();
      obras.value = []; 
      data.forEach((obra: Obra) => obras.value.push(obra)); 
    } catch (error) {
      console.error('Error al obtener los datos de las obras:', error);
    }
  };

  return { obras, cargarObras };
});

