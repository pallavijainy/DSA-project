import axios from "axios";
import {
  ADD_TASK_ERROR,
  ADD_TASK_LOADING_TASK,
  ADD_TASK_SUCESSFULLY,
  GET_TASKS_ERROR,
  GET_TASKS_LOADING,
  GET_TASKS_SUCCESS,
} from "./action";

export const getTask = () => async (dispatch) => {
  dispatch({ type: GET_TASKS_LOADING });
  try {
    let response = await axios.get("http://localhost:3000/tasks");
    dispatch({ type: GET_TASKS_SUCCESS, paylode: response.data });
  } catch (error) {
    dispatch({ type: GET_TASKS_ERROR });
  }
};

export const addTask = (data) => async (dispatch) => {
  dispatch({ type: ADD_TASK_LOADING_TASK });
  try {
    let res = await axios.post("http://localhost:3000/tasks", data);
    dispatch({ type: ADD_TASK_SUCESSFULLY, paylode: res.data });
  } catch (error) {
    dispatch({ type: ADD_TASK_ERROR });
  }
};
