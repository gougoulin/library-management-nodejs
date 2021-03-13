import { GET_BOOKS, GET_BOOK_DETAIL } from "../actions/constants";

const initState = { currentBook: {}, bookList: [] };
const bookReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_BOOKS:
      return { ...state, bookList: action.payload };
    case GET_BOOK_DETAIL:
      return { ...state, currentBook: action.payload };
    default:
      return state;
  }
};

export default bookReducer;
