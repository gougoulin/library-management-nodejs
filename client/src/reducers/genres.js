import { GET_GENRES, GET_GENRE_DETAIL } from "../actions/constants";

const initState = { currentGenre: {}, genreList: [] };
const genreReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_GENRES:
      return { ...state, genreList: action.payload };
    case GET_GENRE_DETAIL:
      return { ...state, currentGenre: action.payload };
    default:
      return state;
  }
};

export default genreReducer;
