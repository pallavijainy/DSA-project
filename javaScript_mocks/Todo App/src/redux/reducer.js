
import { ADD_TODOS, DELETE_TODOS, GET_TODOS, UPDATE_TODOS } from './actionTypes'

const initialValue={
    todo:[]
}

export const reducer = (state=initialValue,action) => {
 switch(action.type){
     case GET_TODOS:{
         return {
             ...state,
             todo:action.payload
         }
     }
     case ADD_TODOS:{
         return{
             ...state,
      todo:[...state.todo,action.payload]
         }
     }
    
     case DELETE_TODOS:{
        // const filtertodo=
        return{
            ...state,
            todo:state.todo.filter((el)=> el.id !== action.payload)
        }
     }
     case UPDATE_TODOS:{
          const updatedata=state.todo.map((el)=>{
              if(el.id === action.payload.id){
                  return {
                      ...el,
                      ...action.payload.change
                  }
              }
              return el;
          })
         return{
             ...state,
             todo:updatedata
         }
     }

     default:{
         return state
     }
 }
}
