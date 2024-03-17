import { defineStore } from 'pinia';
import { reactive, ref } from 'vue';
import router from '@/router';
import { URLAPI } from '@/env';

interface Usuario {
  idUsuario: number;
  nombreUsuario: string;
  contrasena: string;
  rol: number;
}

export const useListadoObrasLoginStore = defineStore('listadoObrasLogin', () => {
  const Datos = ref({
    nombreUsuario: '',
    contrasena: '',
  });


  const usuarios = reactive<Usuario[]>([]);

  async function registrarUsuario() {
    const url = `${URLAPI}/Usuario/Register`;
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(Datos.value),
        
      });

      if (response.ok) {
        const usuarioRegistrado: Usuario = await response.json();
        usuarios.push(usuarioRegistrado);
        usuarios.splice(0, usuarios.length, usuarioRegistrado); 
        localStorage.setItem('usuario', JSON.stringify(usuarioRegistrado));
        router.push('/');
      } else {
        console.error('Error en el registro:', response.statusText);
      }
    } catch (error) {
      console.error('Error en el registro:', error);
    }
  }

  function isAdmin() {
    const usuarioLocal = cargarUsuarioDesdeLocalStorage();
    return usuarioLocal?.rol === 1;
  }

  function cargarUsuarioDesdeLocalStorage() {
    const usuarioString = localStorage.getItem('usuario');
    if (usuarioString) {
      const usuarioLocal = JSON.parse(usuarioString);

      usuarios.splice(0, usuarios.length, usuarioLocal); 
      return usuarioLocal;
    }
    return null;
  }


  cargarUsuarioDesdeLocalStorage();

  return { Datos, registrarUsuario, isAdmin, usuarios, cargarUsuarioDesdeLocalStorage };
});
