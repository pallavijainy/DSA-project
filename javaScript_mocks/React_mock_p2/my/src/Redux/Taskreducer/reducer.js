import {
  ADD_TASK_ERROR,
  ADD_TASK_LOADING_TASK,
  ADD_TASK_SUCESSFULLY,
  GET_TASKS_LOADING,
  GET_TASKS_SUCCESS,
} from "./action";

let initi = {
  loading: false,
  error: false,
  data: [],
};

export const Taskreducer = (state = initi, { type, paylode }) => {
  switch (type) {
    case ADD_TASK_SUCESSFULLY: {
      return {
        ...state,
        loading: false,
        data: [...state, paylode],
      };
    }
    case ADD_TASK_LOADING_TASK: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }
    case ADD_TASK_ERROR: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }
    case GET_TASKS_LOADING: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }
    case GET_TASKS_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: false,
        data: paylode,
      };
    }
    default: {
      return state;
    }
  }
};
