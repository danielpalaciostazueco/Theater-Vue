
import { URLAPI } from '@/env';
import { defineStore } from 'pinia';
import { reactive } from 'vue';
import moment from 'moment';

export interface Obra {
  obraID: number;
  nombre: string;
  descripcion: string;
  autores: string;
  duracion: number;
  actores: string;
  imagenes: string;
  fechaUno: string; 
  fechaDos: string;
  fechaTres: string;
  cartel: string;
}

export const useListadoObrasAdminStore = defineStore('listadoObrasAdmin', () => {
  const apiUrl = `${URLAPI}/Obra`;
  const obras = reactive<Array<Obra>>([]);
  const obraEditando = reactive<Obra>({
    obraID: 0,
    nombre: '',
    descripcion: '',
    autores: '',
    duracion: 0,
    actores: '',
    imagenes: '',
    fechaUno: new Date().toISOString(), 
    fechaDos: new Date().toISOString(),
    fechaTres: new Date().toISOString(),
    cartel: '',
  });

function convertirFechasParaBackend(obra: Obra) {
  function formatearFecha(fecha: string) {

    const fechaMoment = moment(fecha, 'YYYY-MM-DD HH:mm');
    
    if (!fechaMoment.isValid()) {
      console.error('La fecha proporcionada no tiene un formato reconocible:', fecha);
      return '';
    }
    
    return fechaMoment.format('YYYY-MM-DDTHH:mm:ss');
  }
  return {
    ...obra,
    fechaUno: obra.fechaUno ? formatearFecha(obra.fechaUno) : null,
    fechaDos: obra.fechaDos ? formatearFecha(obra.fechaDos) : null,
    fechaTres: obra.fechaTres ? formatearFecha(obra.fechaTres) : null,
  };
}


  async function cargarObras() {
    try {
      const response = await fetch(apiUrl);
      if (!response.ok) throw new Error('Error al cargar las obras');
      const data = await response.json();
      obras.splice(0, obras.length); 
      data.forEach((obra: Obra) => {
        const obraFormateada = {
          ...obra,
          duracion: obra.duracion ,
          fechaUno: obra.fechaUno ? formatearFecha(obra.fechaUno) : '',
          fechaDos: obra.fechaDos ? formatearFecha(obra.fechaDos) : '',
          fechaTres: obra.fechaTres ? formatearFecha(obra.fechaTres) : '',
        };
        obras.push(obraFormateada); 
      });
    } catch (error) {
      console.error('Error al cargar las obras:', error);
    }
  }
  
async function guardarObra(obra: Obra) {
  try {
  
    const obraParaGuardar = convertirFechasParaBackend(obra);

    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(obraParaGuardar),
    });

    if (!response.ok) {
      const errorBody = await response.text();
      throw new Error(`Error al guardar la obra: ${errorBody}`);
    }

    await cargarObras();
  } catch (error) {
    console.error('Error al guardar la obra:', error);
  }
}
function formatearFecha(fecha: string) {
  const fechaObj = new Date(fecha);
  const opciones: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false
  };
  

  const fechaFormateada = fechaObj.toLocaleDateString('es-ES', opciones);
  const horaFormateada = fechaObj.toLocaleTimeString('es-ES', opciones);

  const fechaMatch = fechaFormateada.match(/(\d{2})\/(\d{2})\/(\d{4})/);
  const horaMatch = horaFormateada.match(/(\d{2}):(\d{2})/);
  
  if (fechaMatch && horaMatch) {
  
    return `${fechaMatch[3]}-${fechaMatch[2]}-${fechaMatch[1]} ${horaMatch[1]}:${horaMatch[2]}`;
  } else {
    console.error('No se pudo formatear la fecha:', fecha);
    return '';
  }
}


async function actualizarObra(obra: Obra) {
  try {
    
    const obraParaActualizar = convertirFechasParaBackend(obra);

    const response = await fetch(`${apiUrl}/${obra.obraID}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(obraParaActualizar),
    });

    if (!response.ok) {
      const errorBody = await response.text();
      throw new Error(`Error al actualizar la obra: ${errorBody}`);
    }

    await cargarObras();
  } catch (error) {
    console.error('Error al actualizar la obra:', error);
  }
}
  async function borrarObra(obraID: number) {
    try {
      const response = await fetch(`${apiUrl}/${obraID}`, {
        method: 'DELETE',
      });
      if (!response.ok) throw new Error('Error al borrar la obra');
      await cargarObras();
    } catch (error) {
      console.error('Error al borrar la obra:', error);
    }
  }

  function setObraEditando(obra: Obra) {
    Object.assign(obraEditando, obra);
  }

  function resetObraEditando() {
    Object.assign(obraEditando, {
      obraID: 0,
      nombre: '',
      descripcion: '',
      autores: '',
      duracion: 0,
      actores: '',
      imagenes: '',
      fechaUno: '',
      fechaDos: '',
      fechaTres: '',
      cartel: '',
    });
  }

  return { obras, obraEditando, cargarObras, guardarObra, actualizarObra, borrarObra, resetObraEditando, setObraEditando };
});