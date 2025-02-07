import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { AddTask } from './components/AddTask'
import {ShowTask} from './components/ShowTask'

function App() {
  const [tasks, setTask] = useState([])

  const addTask = (newTask)=>{
let object = {
  task: newTask,
  status: false
}
setTask([...tasks,object])
  }

  return (
    <>
    
    <h1>Lista de tareas</h1>
      <AddTask addTask={addTask} />
      <ShowTask taskList={tasks}/>
    
    </>
  )
}

export default App
