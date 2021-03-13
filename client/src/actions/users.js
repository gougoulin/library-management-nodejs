import { LOG_OUT, SET_TOKEN } from "./constants";

export const setToken = (token) => async (dispatch) => {
  localStorage.setItem("token", token);
  dispatch({ type: SET_TOKEN, payload: token });
};
export const logOut = () => async (dispatch) => {
  localStorage.removeItem("token");
  dispatch({ type: LOG_OUT });
};
