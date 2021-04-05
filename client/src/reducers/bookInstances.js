import {
  GET_BOOK_INSTANCES,
  GET_SINGLE_BOOK_INSTANCE,
  DELETE_SINGLE_BOOK_INSTANCE,
  UPDATE_SINGLE_BOOK_INSTANCE,
  CREATE_SINGLE_BOOK_INSTANCE,
  LOADING_FAIL,
  LOADING_START,
} from "../actions/constants";

// three states of loading: start, success, fail
const initState = { loading: "" };
const bookInstanceReducer = (state = initState, action) => {
  switch (action.type) {
    case LOADING_START:
      return { ...state, loading: "start" };
    case LOADING_FAIL:
      return { ...state, ...action.payload, loading: "fail" };

    case GET_SINGLE_BOOK_INSTANCE:
      return {
        ...state,
        bookInstanceList: action.payload,
      };
    case UPDATE_SINGLE_BOOK_INSTANCE:
      return {
        ...state,
        bookInstanceList: action.payload,
      };
    case DELETE_SINGLE_BOOK_INSTANCE:
      return {
        ...state,
        bookInstanceList: state.bookInstanceList.filter(
          (item) => item._id !== action.payload
        ),
      };
    case CREATE_SINGLE_BOOK_INSTANCE:
      return {
        ...state,
        bookInstanceList: action.payload,
      };
    case GET_BOOK_INSTANCES:
      return { ...state, loading: "success", bookInstanceList: action.payload };
    default:
      return state;
  }
};

export default bookInstanceReducer;
