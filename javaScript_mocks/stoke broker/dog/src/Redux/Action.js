import { AddSuccess, AuthERROR, AuthLOADING, Delete, ErrorADD, Get, GetError, LoadingADD, LoadingGet, LOGIN, LOGOUT } from "./ActionType"
import axios from "axios";


export const getData = ()=>async(dispatch)=>{
    dispatch({type:LoadingGet})
try {
    let res = await axios.get("http://localhost:8080/posts")
    dispatch({type:Get , payload:res.data})
} catch (error) {
    dispatch({type:GetError})
}
}

export const addData =(data)=>async(dispatch)=>{
    dispatch({type:LoadingADD})
    try {
        let res = await axios.post("http://localhost:8080/posts",data)
        dispatch({type:AddSuccess , payload:res.data})
    } catch (error) {
        dispatch({type:ErrorADD})
    }
}

export const login_success = (data) => async (dispatch) => {
    dispatch({type:AuthLOADING})
  try {
    let res = await axios.post(`https://reqres.in/api/login`, data);
    dispatch({ type:LOGIN, payload: res});
  } catch (error) {
    dispatch({ type: AuthERROR, payload: error.message });
  }
};


export const logout_success=()=>({type:LOGOUT})

export const deleteFun =(id)=>async(dispatch)=>{
try {
    let res = await axios.delete(`http://localhost:8080/posts/${id}`)
    dispatch({type:Delete,payload:res.data})
} catch (error) {
    console.log(error)
    
}
}