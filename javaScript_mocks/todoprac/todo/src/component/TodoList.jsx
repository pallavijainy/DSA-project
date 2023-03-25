import React from 'react'
import TodoItem from './TodoItem';
import "./todo.css"
const TodoList = ({todo,handleDelete,handleEdit,handleC}) => {
  return (
    <div>
        {
            todo.map((el)=>(
                <TodoItem key={el.id} {...el} handleDelete={handleDelete} handleEdit={handleEdit} handleC={handleC}/>
            ))
        }
      
    </div>
  )
}

export default TodoList
