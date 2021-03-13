import * as api from "../api";
import { GET_BOOKS, GET_BOOK_DETAIL } from "./constants";

export const getBooks = () => async (dispatch) => {
  try {
    const res = await api.getBooks();
    const data = await res.json();
    dispatch({ type: GET_BOOKS, payload: data });
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
