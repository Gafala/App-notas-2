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
    case "filtrar":
        if (tareas.filtrarTareas(process.argv[3]).length == 0) {
            console.log('No hay resultados para tu busqueda.');
        } else {
            console.log(tareas.filtrarTareas(process.argv[3]));
        }
        break;
    case "cambiar":
        console.log(tareas.cambiarEstado(process.argv[3], process.argv[4]));
        break;
    case undefined:
        console.log('Tenés que pasar una acción.');
        break;

    default:
        console.log('No entiendo qué queres hacer.');
        break;
}

