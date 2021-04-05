import * as api from "../api";
import {
  GET_BOOK_INSTANCES,
  GET_SINGLE_BOOK_INSTANCE,
  DELETE_SINGLE_BOOK_INSTANCE,
  UPDATE_SINGLE_BOOK_INSTANCE,
  CREATE_SINGLE_BOOK_INSTANCE,
  LOADING_FAIL,
  LOADING_START,
} from "./constants";

export const getBookInstances = () => async (dispatch) => {
  try {
    dispatch({ type: LOADING_START });
    const res = await api.getAllBookInstances();
    console.log(res);
    if (res.ok && res.status === 200) {
      const data = await res.json();
      console.log("bookinstanceActions", data);
      dispatch({ type: GET_BOOK_INSTANCES, payload: data });
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

export const createBookInstance = (data) => async (dispatch) => {
  try {
    const response = await api.createSingleBookInstance(data);

    if (response.ok && response.status === 201) {
      const data = await response.json();
      dispatch({ type: CREATE_SINGLE_BOOK_INSTANCE, payload: data });
    } else {
      dispatch({ type: LOADING_FAIL, payload: response.statusText });
    }
  } catch (error) {
    console.log(error);
  }
};

export const getBookInstanceByID = (id) => async (dispatch) => {
  try {
    const data = await api.getBookDetailByID(id);
    dispatch({ type: GET_SINGLE_BOOK_INSTANCE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deleteBookInstance = (id) => async (dispatch) => {
  try {
    console.log("book copy id", id);
    const res = await api.deleteSingleBookInstanceByID(id);
    switch (res.status) {
      case 201:
        dispatch({ type: DELETE_SINGLE_BOOK_INSTANCE, payload: id });
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
