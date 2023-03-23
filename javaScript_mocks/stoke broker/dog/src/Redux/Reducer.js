import {
  AddSuccess,
  AuthERROR,
  AuthLOADING,
  Delete,
  ErrorADD,
  Get,
  GetError,
  LoadingADD,
  LoadingGet,
  LOGIN,
  LOGOUT,
} from "./ActionType";

const token = localStorage.getItem("token");
let initialState = {
  data: [],
  loading: false,
  error: false,
  isAuth: !!token,
  token: null,
};

export const Reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case Get: {
      return {
        ...state,
        loading: false,
        error: false,
        data: payload,
      };
    }
    case AddSuccess: {
      return {
        ...state,
        loading: false,
        data: [...state, payload],
      };
    }
    case LoadingADD: {
      return {
        ...state,
        loading: true,
        error: false,
        data: [],
      };
    }

    case ErrorADD: {
      return {
        ...state,
        loading: false,
        error: true,
        data: [],
      };
    }

    case LoadingGet: {
      return {
        ...state,
        loading: true,
        error: false,
        data: [],
      };
    }

    case GetError: {
      return {
        ...state,
        loading: false,
        error: true,
        data: [],
      };
    }

    case LOGIN:{
        localStorage.setItem("token", payload.data.token)
        return{
            ...state,
            loading: false,
        error: false,
        isAuth: true,
        token: payload.data.token,
        }
    }

    case LOGOUT:{
        return{
            ...state,
            loading: false,
            error: false,
            isAuth: false,
            token: "",
        }
    }
    case AuthLOADING:{
        return {
            ...state,
            loading: true,
            error: false,
            isAuth:false,
            token:""
          };
    }

    case AuthERROR:{
        return{
            ...state,
            loading: false,
            error: true,
            token:""
        }
    }
    case Delete:{
      const remfun=state.data.filter((el)=> el.id !== payload.id)
      return {
          ...state,
          loading:false,
          error:false,
          data:remfun
      }
  }


    default: {
      return state;
    }
  }
};

export default Reducer;
