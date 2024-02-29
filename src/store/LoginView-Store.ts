import { defineStore } from 'pinia';
import { reactive, ref } from 'vue';
import router from '@/router';

interface Usuario {
  nombreUsuario: string;
  contrasena: string;
  rol: number;
}

export const useListadoObrasLoginStore = defineStore('listadoObrasLogin', () => {
  const formData = ref({
    nombreUsuario: '',
    contrasena: '',
  });


  const usuarios = reactive<Usuario[]>([]);

  async function registrarUsuario() {
    const url = 'http://localhost:8001/Usuario/Register';
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData.value),
      });

      if (response.ok) {
        const usuarioRegistrado: Usuario = await response.json();
        usuarios.splice(0, usuarios.length, usuarioRegistrado); 
        localStorage.setItem('usuario', JSON.stringify(usuarioRegistrado));
        router.push('/Home');
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

  return { formData, registrarUsuario, isAdmin, usuarios, cargarUsuarioDesdeLocalStorage };
});
