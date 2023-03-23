import { ADD, DELETE, UPDATE } from "./actionType.js";

export const AddFun=(payload)=>({type:ADD,payload})
export const DeleteFun=(payload)=>({type:DELETE,payload})
export const UpdateFun=(id,content)=>({type:UPDATE,payload:{id,content}})