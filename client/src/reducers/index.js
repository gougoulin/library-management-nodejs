import { combineReducers } from "redux";
import books from "./books";
import authors from "./authors";
import genres from "./genres";
import users from "./users";
import dashboard from "./dashboard";
import bookInstances from "./bookInstances";

export default combineReducers({
  books,
  authors,
  genres,
  users,
  dashboard,
  bookInstances,
});
