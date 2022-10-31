import * as types from "./app.actionTypes";
import axios from "axios";

export const fetchDataFromBackend = (args) => (dispatch) => {
  dispatch({ type: types.FETCH_DATA_LOADING });
  return axios
    .get(`http://localhost:8000/`)
    .then((res) => {
      dispatch({ type: types.FETCH_DATA_SUCCESS, payload: res.data });
    })
    .catch((err) => dispatch({ type: types.FETCH_DATA_FAILURE }));
};
