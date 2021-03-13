import { GET_AUTHORS, GET_AUTHOR_DETAIL } from "../actions/constants";

const initState = { currentAuthor: {}, authorList: [] };
const authorReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_AUTHORS:
      return { ...state, authorList: action.payload };
    case GET_AUTHOR_DETAIL:
      return { ...state, currentAuthor: action.payload };
    default:
      return state;
  }
};

export default authorReducer;
