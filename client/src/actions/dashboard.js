import {
  GET_DASHBOARD_START,
  GET_DASHBOARD_SUCCESS,
  GET_DASHBOARD_FAIL,
} from "./constants";
import * as api from "../api";

export const getDashboardStart = () => async (dispatch) => {
  dispatch({ type: GET_DASHBOARD_START, payload: { loading: true } });
  try {
    const result = await api.getDashboard();
    console.log("[actions/dashboard.js]");
    if (result) {
      dispatch({
        type: GET_DASHBOARD_SUCCESS,
        payload: { ...result, loading: false },
      });
    }
  } catch (error) {
    dispatch({ type: GET_DASHBOARD_FAIL, payload: { error, loading: false } });
  }
};
export const getDashboardSuccess = (data) => async (dispatch) => {
  dispatch({ type: GET_DASHBOARD_SUCCESS, payload: { data, loading: false } });
};
export const getDashboardFail = (err) => async (dispatch) => {
  dispatch({ type: GET_DASHBOARD_FAIL, payload: { err, loading: false } });
};
