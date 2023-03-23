import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GetTodoFun } from '../redux/action'
import TodoInput from './TodoInput'
import TodoItem from './TodoItem'

const Todo = () => {

    const todo=useSelector((store)=>store.todo)
    // console.log(todo)
    const dispatch=useDispatch()

useEffect(()=>{
dispatch(GetTodoFun())
},[])

  return (
    <div>
        <h1>TODO APP</h1>
        <TodoInput/>
        {
            todo.map((el)=>(
               <TodoItem key={el.id} {...el}/>
            ))
        }

    </div>
  )
}

export default Todo