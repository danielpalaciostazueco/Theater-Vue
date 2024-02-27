import { defineStore } from 'pinia';
import { reactive, ref } from 'vue';

interface Obra {
  nombre: string;
  imagenes: string[];
  obraID: string;
}

interface Asiento {
  idAsiento: number;
  isFree: boolean;
}

interface AsientoOcupado {
  idAsiento: number;
}

export const useListadoObrasComprar2Store = defineStore('listadoObrasComprar2', () => {
  const obra = ref<Obra | null>(null);
  const asientos = ref<Asiento[]>([]);
  const asientosOcupados = ref<AsientoOcupado[]>([]);
  const precioPorAsiento = 5;

  async function cargarObra(obraID: string) {
    try {
      const response = await fetch(`http://localhost:8001/Obras/${obraID}`);
      if (!response.ok) {
        throw new Error('Error al obtener los datos de la obra');
      }
      const data = await response.json();
      obra.value = {
        nombre: data.nombre,
        imagenes: data.imagenes.split(','),
        obraID: data.obraID,
      };
    } catch (error) {
      console.error('Error al obtener los datos de la obra:', error);
    }
  }

  async function cargarAsientosOcupados(obraID: string, idSesion: string) {
    try {
      const response = await fetch(`http://localhost:8001/Obras/${obraID}/Session/${idSesion}/Seat`);
      if (!response.ok) {
        throw new Error('Error al obtener asientos ocupados');
      }
      const data = await response.json();
      asientosOcupados.value = data.map((idAsiento: number) => ({ idAsiento }));
    } catch (error) {
      console.error('Error al obtener asientos ocupados:', error);
    }
  }

  async function cargarTodosLosAsientos() {
    try {
      const response = await fetch(`http://localhost:8001/Asientos/GetAll`);
      if (!response.ok) {
        throw new Error('Error al obtener todos los asientos');
      }
      const data = await response.json();
      asientos.value = data.map((asiento: any) => ({
        idAsiento: asiento.idAsiento,
        isFree: !asientosOcupados.value.some(ocupado => ocupado.idAsiento === asiento.idAsiento),
      }));
    } catch (error) {
      console.error('Error al obtener todos los asientos:', error);
    }
  }

  async function comprarAsientos(asientosParaComprar: Asiento[], obraID: string, idSesion: string) {
    try {
      const url = `http://localhost:8001/Obras/${obraID}/Session/${idSesion}/AddAsientos`;
      const respuesta = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(asientosParaComprar),
      });

      if (!respuesta.ok) {
        throw new Error('Error en la compra de asientos');
      }
      console.log('Compra realizada con éxito');
    } catch (error) {
      console.error('Error al realizar la compra:', error);
    }
  }

  return { obra, asientos, asientosOcupados, cargarObra, cargarAsientosOcupados, cargarTodosLosAsientos, comprarAsientos, precioPorAsiento };
});
