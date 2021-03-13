import Home from "./pages/home.jsx";
import Books from "./pages/books/";
import Authors from "./pages/authors/";
import Genres from "./pages/genres/";
import CreateBook from "./pages/books/createBook";
import BookDetail from "./pages/books/bookdetail";
import UpdateBook from "./pages/books/bookedit";
import CreateAuthor from "./pages/authors/author-create";
import AuthorDetail from "./pages/authors/author-detail";
import AuthorEdit from "./pages/authors/author-edit";
import CreateGenre from "./pages/genres/genre-create";
import GenreDetail from "./pages/genres/genre-detail";
import GenreEdit from "./pages/genres/genre-edit";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./pages/login";
import Signup from "./pages/signup";
import RouteGuard from "./components/routeGuard";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        {/* <Route exact path="/books/create" component={CreateBook} /> */}
        <RouteGuard exact path="/books/create">
          <CreateBook />
        </RouteGuard>
        {/* <Route exact path="/books" component={Books} /> */}
        <RouteGuard path="/books">
          <Books />
        </RouteGuard>
        {/* <Route exact path="/books/:id/edit" component={UpdateBook} /> */}
        <RouteGuard exact path="/books/:id/edit">
          <UpdateBook />
        </RouteGuard>
        {/* <Route exact path="/books/:id" component={BookDetail} /> */}
        <RouteGuard exact path="/books/:id">
          <BookDetail />
        </RouteGuard>
        {/* <Route exact path="/authors/:id/edit" component={AuthorEdit} /> */}
        <RouteGuard exact path="/authors/:id/edit">
          <AuthorEdit />
        </RouteGuard>
        {/* <Route exact path="/authors/create" component={CreateAuthor} /> */}
        <RouteGuard exact path="/authors/create">
          <CreateAuthor />
        </RouteGuard>
        {/* <Route exact path="/authors/:id" component={AuthorDetail} /> */}
        <RouteGuard exact path="/authors/:id">
          <AuthorDetail />
        </RouteGuard>
        {/* <Route exact path="/authors" component={Authors} /> */}
        <RouteGuard exact path="/authors">
          <Authors />
        </RouteGuard>
        {/* <Route exact path="/genres/:id/edit" component={GenreEdit} /> */}
        <RouteGuard exact path="/genres/:id/edit">
          <GenreEdit />
        </RouteGuard>
        {/* <Route exact path="/genres/create" component={CreateGenre} /> */}
        <RouteGuard exact path="/genres/create">
          <CreateGenre />
        </RouteGuard>
        {/* <Route exact path="/genres/:id" component={GenreDetail} /> */}
        <RouteGuard exact path="/genres/:id">
          <GenreDetail />
        </RouteGuard>
        {/* <Route exact path="/genres" component={Genres} /> */}
        <RouteGuard exact path="/genres">
          <Genres />
        </RouteGuard>
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        {/* <Route exact path="/" component={Home} /> */}
        <RouteGuard exact path="/">
          <Home />
        </RouteGuard>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
