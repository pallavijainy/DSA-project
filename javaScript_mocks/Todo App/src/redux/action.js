import { ADD_TODOS, DELETE_TODOS, GET_TODOS, UPDATE_TODOS } from "./actionTypes";

export const GetTodoFun = () => ({
  type: GET_TODOS,
 
    payload: [
      { id: 1, name: "pallavi", isCompleted: true },
      { id: 2, name: "vinay", isCompleted: true },
    ],
  
});

export const AddTodoFun = (name) => ({
  type: ADD_TODOS,
  payload: { id: Date.now(), name, isCompleted: false },
});

export const UpdateTodoFun = (id, change) => ({
  type: UPDATE_TODOS,
  payload: { id, change },
});

export const DeleteTodoFun=(id)=>({type:DELETE_TODOS,payload:id})


