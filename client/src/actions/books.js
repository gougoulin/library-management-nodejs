import * as api from "../api";
import Loading from "../components/loading";
import {
  GET_BOOKS,
  GET_BOOK_DETAIL,
  LOADING_START,
  LOADING_FAIL,
  DELETE_BOOK,
} from "./constants";

export const getBooks = () => async (dispatch) => {
  try {
    dispatch({ type: LOADING_START });
    const res = await api.getBooks();
    console.log(res);
    if (res.ok && res.status === 200) {
      const data = await res.json();
      data.loading = false;
      dispatch({ type: GET_BOOKS, payload: data });
    } else {
      dispatch({
        type: LOADING_FAIL,
        payload: { code: res.status, msg: res.statusText },
      });
    }
  } catch (error) {
    console.log(error);
  }
};

export const getBookDetailByID = (id) => async (dispatch) => {
  try {
    const data = await api.getBookDetailByID(id);
    dispatch({ type: GET_BOOK_DETAIL, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deleteBook = (id) => async (dispatch) => {
  try {
    const url = "http://localhost:5000/api/books/" + id;
    const res = await fetch(url, {
      method: "DELETE",
    });
    switch (res.status) {
      case 200:
        dispatch({ type: DELETE_BOOK, payload: id });
        console.info("Book deleted.");
        break;
      case 404:
        console.info(`Error: book ${id} not exist.`);
        break;
      case 500:
        console.info("Error: server internal error.");
        break;
      default:
        break;
    }
  } catch (error) {
    console.log(error);
  }
};
