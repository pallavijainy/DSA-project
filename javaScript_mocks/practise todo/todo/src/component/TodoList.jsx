import React from 'react'

const TodoList = ({id,title,isComplete,handleDelete,handleEdit}) => {
    // console.log(id,title,isComplete)


    


  return (
    <div>
      
      <h1>{title} - {isComplete ? "complete":"not complete"}</h1>
      <button onClick={()=>handleDelete(id)}>delete</button>
      <button onClick={()=>handleEdit(id)}>edit</button>

    </div>
  )
}

export default TodoList
