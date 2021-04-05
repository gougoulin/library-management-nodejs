import {
  DELETE_BOOK,
  GET_BOOKS,
  GET_BOOK_DETAIL,
  LOADING_FAIL,
  LOADING_START,
} from "../actions/constants";

// three states of loading: start, success, fail
const initState = { currentBook: {}, bookList: [] };
const bookReducer = (state = initState, action) => {
  switch (action.type) {
    case LOADING_START:
      return { ...state, loading: "start" };
    case LOADING_FAIL:
      return { ...state, ...action.payload, loading: "fail" };
    case DELETE_BOOK:
      return {
        ...state,
        bookList: state.bookList.filter((book) => book._id !== action.payload),
      };
    case GET_BOOKS:
      return {
        ...state,
        bookList: action.payload,
        loading: "success",
      };
    case GET_BOOK_DETAIL:
      return { ...state, currentBook: action.payload };
    default:
      return state;
  }
};

export default bookReducer;
