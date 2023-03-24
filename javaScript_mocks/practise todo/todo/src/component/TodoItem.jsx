import React from 'react'
import TodoList from './TodoList'

const TodoItem = ({data,handleDelete,handleEdit}) => {

  
    
  return (
    <div>
       { data.map((el)=>(
          <TodoList key={el.id} {...el}  handleDelete={handleDelete} handleEdit={handleEdit}/>
       ))}
    </div>
  )
}

export default TodoItem