import { defineStore } from 'pinia';
import { reactive } from 'vue';
import router from '@/router';

export const useListadoObrasLoginStore = defineStore('listadoObrasLogin', () => {

  const formData = reactive({
    nombreUsuario: '',
    contrasena: '',
  });



  async function registrarUsuario() {
    const url = 'http://localhost:8001/Usuario';
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData), 
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Registro exitoso:', data);
        router.push('/Home'); 
        prompt('Bienvenido' + formData.nombreUsuario)
      } else {
        console.error('Error en el registro:', response.statusText);
      }
    } catch (error) {
      console.error('Error en el registro:', error);
    }
  }

  return { formData,  registrarUsuario };
});
