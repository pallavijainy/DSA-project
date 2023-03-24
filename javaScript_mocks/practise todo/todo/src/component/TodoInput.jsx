import React, { useState } from 'react'

const TodoInput = ({handleAdd}) => {
    const [task , setTask] = useState("")

    const handleClick=()=>{
        handleAdd(task)
setTask("")
    }
  
  return (
    <div>
       
            <input type="text" placeholder='task' value={task} onChange={(e)=>setTask(e.target.value)} />
         <button onClick={handleClick}>add</button>
        
    </div>
  )
}

export default TodoInput