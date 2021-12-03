const fs = require('fs')
let tareas = JSON.parse(fs.readFileSync('./tareas.json','utf-8'));
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
    filtrarTareas: estado => tareas.filter(tarea => tarea.estado === estado)
    ,
    cambiarEstado : (filtro,nuevoEstado) => {
        let Tarea = function (titulo,estado){
            this.titulo = titulo,
            this.estado = estado
        }
        let tareasActualizadas = tareas.map(tarea => {
            if(tarea.titulo.includes(filtro)){
                tarea.estado = nuevoEstado 
            }
            return new Tarea(tarea.titulo,tarea.estado)
        })
       moduloTareas.guardarJson(tareasActualizadas)
       return moduloTareas.listarTareas()
    },
    guardarJson : tareas => fs.writeFileSync('./tareas.json',JSON.stringify(tareas,null,2),'utf-8')
}

module.exports = moduloTareas;



