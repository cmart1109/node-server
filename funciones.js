const tareas = require('./tareas');
const readlineSync = require('readline-sync');
const interfaz = require('./interfaz');


function mostrarTareas() {
  console.table(tareas);

}
function agregarTarea() {
  let indicador = readlineSync.question('Asigna el Nombre de la tarea: ');
  let descripcion = readlineSync.question('Asignale una breve descripcion: ');
  let completado = false;
  tareas.push({ indicador, descripcion, completado});
  console.log('Tarea nueva agregada');
}

function eliminarTarea() {
  mostrarTareas();
  let indice = readlineSync.question('Ingrese el numero de lista que desea eliminar: ');

  if (indice >= 0 && indice < tareas.length) {
    tareas.splice(indice, 1);
    console.log('Tarea Eliminada con exito');
    mostrarTareas();
  } else {
    console.log('Índice no válido.');
  }
}

function marcarTareaComoCompletada() {
  mostrarTareas();
  let indice2 = readlineSync.question('Indique el numero de tarea que desea actualizar: ');

  if (indice2 >= 0 && indice2 < tareas.length) {
    tareas[indice2].completado = true;
    console.log(`Tarea ${indice2 + 1} marcada como completada.`);
  } else {
    console.log('Índice no válido.');
  }
}



module.exports = {
  agregarTarea,
  eliminarTarea,
  mostrarTareas,
  marcarTareaComoCompletada
};
