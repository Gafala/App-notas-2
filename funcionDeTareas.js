const fs = require('fs')
tareas = JSON.parse(fs.readFileSync('./tareas.json','utf-8'));

const moduloTareas = {
    listarTareas : () => tareas,
    agregarTarea : estado =>{
        let tarea = {
            titulo : `Tarea ${tareas.length + 1}`,
            estado
        }
        tareas.push(tarea)
        moduloTareas.guardarJson(tareas)
    },
    guardarJson : tareas => fs.writeFileSync('./tareas.json',JSON.stringify(tareas,null,2),'utf-8')
}

module.exports = moduloTareas;



