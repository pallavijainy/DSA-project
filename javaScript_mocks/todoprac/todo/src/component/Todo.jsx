import React, { useState } from 'react'
import TodoInput from './TodoInput';
import TodoList from './TodoList';
import "./todo.css"
const Todo = () => {
    const [edit,setEdit] = useState(false)
    const [inp,setInp] = useState("")
    const [id,setId] = useState(0)

    const [todo,setTodo] = useState([])

    const handleAdd=(text)=>{

        setTodo([...todo,{id:Date.now() , title:text , isCompleted:false}])
    }

    const handleDelete=(id)=>{
      const del=  todo.filter((el)=>el.id !== id)
     setTodo(del)
    }

    const handleEdit=(id)=>{
      todo.filter((el)=>{
          if(el.id == id){
              setEdit(true)
              setInp(el.title)
              setId(id)
              
          }
      })
    }

    const handleSave=()=>{
     let update =  todo.map((el)=>{
          if(el.id == id){
           return {...el , title:inp}
          }else{
           return el;
          }
      })

      setTodo(update)
      setEdit(false)
    }

    const handleC=(id)=>{
        let update =  todo.map((el)=>{
            if(el.id == id){
             return {...el , isCompleted:!el.isCompleted}
            }else{
             return el;
            }
        })
  
        setTodo(update)
        
    }

  return (
    <div className="todo-container">
    <h1 className="todo-header">T O D O</h1>
    <TodoInput handleAdd={handleAdd}/>
    <TodoList todo={todo} handleDelete={handleDelete} handleEdit={handleEdit} handleC={handleC}/>

{
    edit ? (  <div>
        <input type="text"  value={inp} onChange={(e)=>setInp(e.target.value)}/>
        <button onClick={handleSave}>save</button>
    </div>):(
        null
    )
}
     
    </div>
  )
}

export default Todo