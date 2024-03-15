import { defineStore } from 'pinia';
import { reactive } from 'vue';
import { URLAPI } from '@/env';

interface Historial {
  idObjeto: number;
  nombreUsuario: string;
  nombreObra: string;
  fecha: string;
  sesion: string;
  asiento: number;
  idUsuario: number;
}

interface HistorialesAgrupados {
  [clave: string]: {
    nombreUsuario: string;
    nombreObra: string;
    fecha: string;
    sesion: string;
    asientos: number[];
    idUsuario: number;
  };
}

export const useHistorialStore = defineStore('Historial', () => {
  const historiales = reactive<HistorialesAgrupados>({});

  function formatearFecha(fecha: string): string {
    const opciones: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    };
    return new Intl.DateTimeFormat('es-ES', opciones).format(new Date(fecha));
  }

  async function cargarHistoriales(idUsuario: number) {
    try {
      const response = await fetch(`${URLAPI}/Historial/${idUsuario}`);
      if (!response.ok) throw new Error('Error al cargar los historiales');
      const datosParaHacerTarjeta: Historial[] = await response.json();


      const tarjetasInfo: HistorialesAgrupados = {};

      datosParaHacerTarjeta.forEach((historial) => {
        const clave = `${historial.nombreObra}-${formatearFecha(historial.fecha)}`;
        if (!tarjetasInfo[clave]) {
          tarjetasInfo[clave] = {
            nombreUsuario: historial.nombreUsuario,
            nombreObra: historial.nombreObra,
            fecha: formatearFecha(historial.fecha),
            sesion: historial.sesion,
            asientos: [historial.asiento],
            idUsuario: historial.idUsuario,
          };
        } else {
          tarjetasInfo[clave].asientos.push(historial.asiento);
        }
      });


      for (const clave in historiales) {
        delete historiales[clave];
      }

      Object.entries(tarjetasInfo).forEach(([clave, valor]) => {
        historiales[clave] = valor;
      });

    } catch (error) {
      console.error('Error al cargar los historiales:', error);
    }
  }

  return { historiales, cargarHistoriales, formatearFecha };
});
