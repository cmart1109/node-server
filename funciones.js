const tareas = require('tareas');
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
let funciones = [

    function Agregartarea(indicador, descripcion, completada) {
    tareas.push({ indicador, descripcion, completada });
  },


 function Agregar() {
    rl.question('Ingrese una nueva tarea: ', (descripcion) => {
      Agregartarea(`Tarea ${tareas.length + 1}`, descripcion, false);
      console.log('Nueva tarea agregada.');
      });
  },

  

]


Agregar()

module.exports = funciones