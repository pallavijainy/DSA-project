import React, { useState } from 'react'
import "./todo.css"
const TodoInput = ({handleAdd}) => {
    const [task,setTask] = useState("")

    const handleClick=()=>{
        handleAdd(task)
        // console.log(task)
    }
  return (
    <div>
        <input type="text" placeholder='task' value={task} onChange={(e)=>setTask(e.target.value)}/>
        <button onClick={handleClick}>add</button>
    </div>
  )
}

export default TodoInput