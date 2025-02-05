import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { AddTask } from './components/AddTask'

function App() {
  const [tasks, setTask] = useState([])

  const addTask = (newTask)=>{
let object = {
  task: newTask,
  status: false
}
setTask([...tasks,object])
console.log(tasks)
  }

  return (
    <>
      <AddTask addTask={addTask} />
    </>
  )
}

export default App
