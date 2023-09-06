const tareas = require('./tareas');
const funciones = require('./funciones');
const readlineSync = require('readline-sync');

console.log('Bienvenido a su lista de Tareas');
console.log('Que haremos hoy?');

async function mostrarMenu() {
  while (true) {
  console.log('\nMenú:');
  console.log('1. Agregar nueva tarea');
  console.log('2. Eliminar una tarea');
  console.log('3. Completar tarea');
  console.log('4. Revisar lista de tareas');
  console.log('5. Salir');

  const opcion = readlineSync.question('Seleccione una opcion: ');

  switch (opcion) {
    case '1':
      await funciones.agregarTarea();
      mostrarMenu();
      break;
    case '2':
      await funciones.eliminarTarea();
      mostrarMenu();
      break;
    case '3':
      await funciones.marcarTareaComoCompletada();
      mostrarMenu();
      break;
    case '4':
      await funciones.mostrarTareas();
      mostrarMenu();
      break;
    case '5':
      console.log('Saliendo del programa.');
      process.exit();
      break;
    default:
      console.log('Opción no válida.');
      mostrarMenu();
  }
}
}

mostrarMenu();

module.exports = mostrarMenu()