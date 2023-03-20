import axios from "axios";
import {
  ADD_USER_DATA,
  ADD_USER_DATA_FAILURE,
  ADD_USER_DATA_LOADING,
  GET_USER_DATA,
  GET_USER_DATA_FAILURE,
  GET_USER_DATA_LOADING,
} from "./actionTypes";

const getData = () => (dispatch) => {
  dispatch({ type: GET_USER_DATA_LOADING });
  return axios
    .get("http://localhost:3000/users")
    .then((res) => {
      dispatch({ type: GET_USER_DATA, paylode: res });
    })
    .catch((error) => {
      dispatch({ type: GET_USER_DATA_FAILURE });
    });
};
const addUser = (paylode) => (dispatch) => {
  dispatch({ type: ADD_USER_DATA_LOADING });
  return axios
    .post("http://localhost:3000/users", paylode)
    .then((res) => {
      return dispatch({ type: ADD_USER_DATA });
    })
    .catch((err) => {
      dispatch({ type: ADD_USER_DATA_FAILURE });
    });
};

export { getData, addUser };
