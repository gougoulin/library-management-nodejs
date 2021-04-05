import {
  DELETE_AUTHOR,
  GET_AUTHORS,
  GET_AUTHOR_DETAIL,
  LOADING_FAIL,
  LOADING_START,
} from "../actions/constants";

const initState = {
  currentAuthor: {},
  authorList: [],
  loading: false,
  loadingError: "",
};
const authorReducer = (state = initState, action) => {
  switch (action.type) {
    case LOADING_START:
      return { ...state, loading: "start" };
    case LOADING_FAIL:
      return { ...state, loading: "fail", loadingError: action.payload };
    case GET_AUTHORS:
      return { ...state, loading: "success", authorList: action.payload };
    case GET_AUTHOR_DETAIL:
      return { ...state, currentAuthor: action.payload };
    case DELETE_AUTHOR:
      return {
        ...state,
        authorList: state.authorList.filter((author) => {
          console.log(author.id, action.payload);
          return author.id !== action.payload;
        }),
      };
    default:
      return state;
  }
};

export default authorReducer;
