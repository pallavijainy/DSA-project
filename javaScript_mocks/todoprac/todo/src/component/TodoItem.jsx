import React from 'react'
import "./todo.css"
const TodoItem = ({id,title,isCompleted,handleDelete,handleEdit,handleC}) => {

    
    
  return (
    <div>
      <h1 onClick={()=>handleC(id)}>{title} - {isCompleted? "complete":"not complete"}</h1>
       <button onClick={()=>handleEdit(id)}>edit</button>
       <button onClick={()=>handleDelete(id)}>delete</button>
    </div>
  )
}

export default TodoItem
