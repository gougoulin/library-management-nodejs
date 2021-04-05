import {
  GET_DASHBOARD_START,
  GET_DASHBOARD_SUCCESS,
  GET_DASHBOARD_FAIL,
} from "../actions/constants";

const initState = {};
const DashboardReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_DASHBOARD_START:
      return { ...state, ...action.payload };
    case GET_DASHBOARD_SUCCESS:
      return { ...state, ...action.payload };
    case GET_DASHBOARD_FAIL:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export default DashboardReducer;
