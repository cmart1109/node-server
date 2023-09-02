const readline = require('readline');

  let rl = readline.createInterface({
        input:process.stdin,
        output:process.stdout
  });
  console.log('Bienvenido a su lista de Tareas');
  console.log('Que haremos hoy?');
  function mostrarMenu() {
    console.log('\nMenú:');
    console.log('1. Agregar nueva tarea');
    console.log('2. Eliminar una tarea');
    console.log('3. Completar tarea');
    console.log('4. Salir');
  
    rl.question('Seleccione una opción: ', (opcion) => {
      switch (opcion) {
        case '1':
            console.log('Tarea Asignada');
          break;
        case '2':
          console.log('Tarea  Eliminada');
          break;
        case '3':
          console.log('Tarea completada');;
          case '4':
          rl.close();
        
          break;
        default:
          console.log('Opción no válida.');
          mostrarMenu();
      }
    });
  }
  
  mostrarMenu();  