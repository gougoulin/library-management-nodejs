import {
  GET_GENRES,
  GET_GENRE_DETAIL,
  LOADING_FAIL,
  LOADING_START,
} from "../actions/constants";

const initState = { currentGenre: {}, genreList: [], loading: "" };
const genreReducer = (state = initState, action) => {
  switch (action.type) {
    case LOADING_START:
      return { ...state, loading: "start" };
    case LOADING_FAIL:
      return { ...state, loading: "fail" };
    case GET_GENRES:
      return { ...state, loading: "success", genreList: action.payload };
    case GET_GENRE_DETAIL:
      return { ...state, currentGenre: action.payload };
    default:
      return state;
  }
};

export default genreReducer;
