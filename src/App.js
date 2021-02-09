import React, { useState } from 'react';
import './App.css';
import TasksForm from './components/TasksForm';
import Tareas from './components/Tareas';

const App = () => {
  const [listaTareas, setListarTareas] = useState([])

  //listar
  const nuevaTarea = (tarea) => {
    setListarTareas([tarea, ...listaTareas])
  }

  //borrar
  const borrar = (id) => {
    const listaFiltrada = listaTareas.filter((tarea, index) => index !== id)
    setListarTareas(listaFiltrada)
  }

  //editar
  const actualizarLasTareas = (id, tarea) => {
    const listaActualizada = listaTareas.map((e, index)=>{
      if(index === id){
        e = tarea;
      }
      return e;
   })
    setListarTareas(listaActualizada)
  }

  return (
    <div>
      <TasksForm nuevaTarea={nuevaTarea} />

      <div className="lista">
        {//yo podria listar las tareas sin otro componente, pero por la buena practica, hice un componente tarea
          listaTareas.map((tasks, index) => (
            <Tareas
              tasks={tasks}
              id={index}
              borrar={borrar}
              editar={actualizarLasTareas}
            />))
        }
      </div>
    </div>
  )
}

export default App

