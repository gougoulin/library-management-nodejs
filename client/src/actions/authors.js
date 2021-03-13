import * as api from "../api/";
import { GET_AUTHORS, GET_AUTHOR_DETAIL } from "./constants";

export const getAuthors = () => async (dispatch) => {
  try {
    const data = await api.getAuthors();
    dispatch({ type: GET_AUTHORS, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const getAuthorDetailByID = (id) => async (dispatch) => {
  try {
    const data = await api.getAuthorDetailByID(id);
    dispatch({ type: GET_AUTHOR_DETAIL, payload: data });
  } catch (error) {
    console.log(error);
  }
};
