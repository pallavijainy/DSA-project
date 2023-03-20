import {
  ADD_USER_DATA,
  GET_USER_DATA,
  GET_USER_DATA_FAILURE,
  GET_USER_DATA_LOADING,
} from "./actionTypes";

const initstate = {
  isLoading: false,
  users: [],
  isError: false,
};

export const userReducer = (state = initstate, { type, paylode }) => {
  switch (type) {
    case ADD_USER_DATA: {
      return {
        ...state,
        isLoading: false,
        isError: false,
        users: [...state, paylode],
      };
    }
    case GET_USER_DATA_LOADING: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case GET_USER_DATA: {
      return {
        ...state,
        isLoading: false,
        isError: false,
        users: paylode,
      };
    }
    case GET_USER_DATA_FAILURE: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }
    default: {
      return state;
    }
  }
};
