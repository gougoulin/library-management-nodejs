import * as api from "../api/";
import {
  GET_GENRES,
  GET_GENRE_DETAIL,
  LOADING_FAIL,
  LOADING_START,
  POST_GENRES,
} from "./constants";

export const getGenres = () => async (dispatch) => {
  try {
    dispatch({ type: LOADING_START });
    const data = await api.getGenres();
    dispatch({ type: GET_GENRES, payload: data });
  } catch (error) {
    dispatch({ type: LOADING_FAIL });
    console.log(error);
  }
};

export const getGenreDetailByID = (id) => async (dispatch) => {
  try {
    const data = await api.getGenreDetailByID(id);
    dispatch({ type: GET_GENRE_DETAIL, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const postGenres = (record) => async (dispatch) => {
  try {
    const data = await api.postGenres(record);
    dispatch({ type: POST_GENRES, payload: data });
  } catch (error) {
    console.log(error);
  }
};
