import * as api from "../api/";
import {
  GET_AUTHORS,
  GET_AUTHOR_DETAIL,
  DELETE_AUTHOR,
  LOADING_START,
  LOADING_FAIL,
} from "./constants";

export const getAuthors = () => async (dispatch) => {
  try {
    dispatch({ type: LOADING_START });
    const res = await api.getAuthors();
    if (res.ok && res.status === 200) {
      const data = await res.json();
      console.log(`[actions/authors.js]`, data);
      dispatch({ type: GET_AUTHORS, payload: data });
    } else {
      dispatch({ type: LOADING_FAIL, payload: res.statusText });
    }
  } catch (error) {
    console.log(error);
    dispatch({ type: LOADING_FAIL });
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

export const deleteAuthor = (id) => async (dispatch) => {
  try {
    const res = await fetch(`http://localhost:5000/api/authors/${id}`, {
      method: "DELETE",
    });
    if (res.ok && res.status === 200) {
      // history.push("/");
      dispatch({ type: DELETE_AUTHOR, payload: id });
    } else if (res.status === 409) {
      throw Error("Can't delete. Delete author's books first.");
    }
  } catch (error) {
    console.log(error.message);
  }
};
