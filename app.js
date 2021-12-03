const tareas = require('./funcionDeTareas')
const process = require('process')


switch (process.argv[2]) {
    case "listar":
        console.log(tareas.listarTareas());
        break;
    case "agregar":
        let estado = process.argv[3];
        tareas.agregarTarea(estado);
        break;
    case undefined:
        console.log('Tenés que pasar una acción.');
        break;
    default:
        console.log('No entiendo qué queres hacer.');
        break;
}

