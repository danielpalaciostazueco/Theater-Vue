<template>
<AdminComponent></AdminComponent>
</template>
<script setup lang="ts">
import AdminComponent from '@/components/AdminComponent.vue';
</script>
<style scoped>
.gestion-obras {
  padding: 20px;
  font-family: Arial, sans-serif;
}

.titulo {
  text-align: center;
  margin-bottom: 20px;
}

.boton-agregar,
.boton-editar,
.boton-borrar {
  background-color: #1E3367;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-right: 5px;
}

.boton-agregar:hover,
.boton-editar:hover,
.boton-borrar:hover {
  background-color: #1E3367;
}

.tabla-obras {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
}

.tabla-obras th,
.tabla-obras td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}

.tabla-obras th {
  background-color: #1E3367;
  color: white;
}

.tabla-obras tr:nth-child(even) {
  background-color: #f2f2f2;
}

.tabla-obras tr:hover {
  background-color: #ddd;
}

.formulario-obras {
  display: flex;
  flex-direction: column;
  margin-top: 20px;
}

.formulario-obras input,
.formulario-obras textarea {
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.formulario-obras button {
  margin-top: 10px;
}
</style>
