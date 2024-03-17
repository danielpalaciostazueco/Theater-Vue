import { defineStore } from 'pinia';
import { reactive, ref } from 'vue';
import { URLAPI } from '@/env';
import { useListadoObrasLoginStore } from './LoginView-Store';


interface Obra {
  nombre: string;
  imagenes: string[];
  obraID: string;
  duracion: number;
  fechaUno: string;
  fechaDos: string;
  fechaTres: string;
}


interface Asiento {
  idAsiento: number;
  isFree: boolean;
}

interface AsientoOcupado {
  idAsiento: number;
}

export const useListadoObrasComprar2Store = defineStore('listadoObrasCompra2', () => {
  const storeObras = reactive<Obra[]>([]);
  const asientos = reactive<Asiento[]>([]);
  const asientosOcupados = reactive<AsientoOcupado[]>([]);
  const precioPorAsiento = 5;
  const asientosComprados = () => asientosOcupados.length;

  async function cargarObra(obraID: string) {
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
        duracion: data.duracion ,
        fechaUno: formatearFecha(data.fechaUno),
        fechaDos: formatearFecha(data.fechaDos),
        fechaTres: formatearFecha(data.fechaTres),
      });
    } catch (error) {
      console.error('Error al obtener los datos de la obra:', error);
    }
  }

    async function cargarAsientosOcupados(obraID: string, idSesion: string) {
    try {
      const response = await fetch(`${URLAPI}/Obra/${obraID}/Session?sessionId=${idSesion}`);
      if (response.ok) {
        const data = await response.json();
        asientosOcupados.splice(0, asientosOcupados.length, ...data.map((idAsiento: number) => ({ idAsiento })));
  
      } else if (response.status === 404) {
        asientosOcupados.splice(0, asientosOcupados.length); 
      } else {
        throw new Error('Error al obtener asientos ocupados');
      }
    } catch (error) {
      console.error('Error al obtener asientos ocupados:', error);
    }
  }

  async function cargarTodosLosAsientos() {
    try {
      const response = await fetch(`${URLAPI}/Asiento`);
      if (!response.ok) {
        throw new Error('Error al obtener todos los asientos');
      }
      const data = await response.json();
      asientos.splice(0, asientos.length, ...data.map((asiento: any) => ({
        idAsiento: asiento.idAsiento,
        isFree: !asientosOcupados.some(ocupado => ocupado.idAsiento === asiento.idAsiento),
      })));
    } catch (error) {
      console.error('Error al obtener todos los asientos:', error);
    }
  }



  async function comprarAsientos(asientosParaComprar: Asiento[], obraID: string, idSesion: string) {
    try {
      const idsAsientosParaComprar = asientosParaComprar.map(asiento => asiento.idAsiento);
      const payload = {
        asientos: idsAsientosParaComprar,
      };
      const url = `${URLAPI}/Obra/${obraID}/Session?sessionId=${idSesion}`;
      const respuesta = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!respuesta.ok) {
        throw new Error('Error en la compra de asientos');
      }

      console.log('Compra realizada con éxito');

      ponerInfo(asientosParaComprar, obraID, idSesion); 

      
      await cargarAsientosOcupados(obraID, idSesion);
      await cargarTodosLosAsientos();
    } catch (error) {
      console.error('Error al realizar la compra:', error);
    }
  }

  async function ponerInfo(asientosParaComprar: Asiento[], obraID: string, idSesion: string) {
    try {
      const storeLogin = useListadoObrasLoginStore();

      
      const infoParaEnviar = {
        nombreUsuario: storeLogin.usuarios[0].nombreUsuario, 
        nombreObra: storeObras[0].nombre,
        fecha: new Date().toISOString(), 
        sesion: idSesion,
        asiento: asientosParaComprar.map(asiento => asiento.idAsiento),
        idUsuario: storeLogin.usuarios[0].idUsuario, 
      };

      const url2 = `${URLAPI}/Historial`; 

      const respuesta2 = await fetch(url2, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(infoParaEnviar),
      });

      if (!respuesta2.ok) {
        throw new Error('Error en añadir la información al historial');
      }
      
      console.log('Datos enviados correctamente');
    } catch (error) {
      console.error('Error al enviar la información al historial:', error);
    }
  }



async function resetearYRecargarAsientos(obraID: string, idSesion: string) {
    asientosOcupados.splice(0, asientosOcupados.length); 
    await cargarAsientosOcupados(obraID, idSesion);
    await cargarTodosLosAsientos();
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
  


  return { 
    storeObras, 
    asientos, 
    asientosOcupados, 
    cargarObra, 
    cargarAsientosOcupados, 
    cargarTodosLosAsientos, 
    comprarAsientos, 
    precioPorAsiento, 
    resetearYRecargarAsientos,
    asientosComprados
  };
});
