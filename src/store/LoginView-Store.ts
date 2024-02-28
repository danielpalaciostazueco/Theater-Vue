import { defineStore } from 'pinia';
import { reactive } from 'vue';
import router from '@/router';

interface Usuario {
  nombreUsuario : string ;
  contrasena : string; 
  rol : number;
}

export let usuario : Usuario
export const useListadoObrasLoginStore = defineStore('listadoObrasLogin', () => {

  const formData = reactive({
    nombreUsuario: '',
    contrasena: '',
  });

  async function registrarUsuario() {
    const url = 'http://localhost:8001/Usuario/Register';
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData), 
      });

      if (response.ok) {
         usuario = await response.json(); 
       
      } else {
        console.error('Error en el registro:', response.statusText);
      }
    } catch (error) {
      console.error('Error en el registro:', error);
    }
  }

  async function isAdmin(usuario : Usuario) {
    if(usuario.rol == 1){
      return true
    }else{
      return false
    }
  }

  return { formData,  registrarUsuario, isAdmin, usuario };
});
