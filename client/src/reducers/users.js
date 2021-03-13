import { LOG_OUT, SET_TOKEN } from "../actions/constants";

const initState = { token: "" };
const userReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_TOKEN:
      return { ...state, token: action.payload };
    case LOG_OUT:
      return { token: "" };
    default:
      return state;
  }
};

export default userReducer;
