var express = require("express");
var router = express.Router();
const bookController = require("../controllers/book");
const authorController = require("../controllers/author");

/**
 * routes for book model
 */
// list all books
router.get("/books", bookController.getBooks);

// GET create a new book, display the create book page
router.get("/book/create", bookController.getCreateBook);
// POST create a new book
router.post("/book/create", bookController.postCreateBook);

// display book details
router.get("/book/:id", bookController.getBookDetail);

// GET book (id) detail, display the book detail page
router.get("/book/:id/update", bookController.getUpdateBookDetail);
// POST update book details by send data
router.post("/book/:id/update", bookController.postUpdateBookDetail);

// delete book
router.get("/book/:id/delete", bookController.getDeleteBook);
router.post("/book/:id/delete", bookController.postDeleteBook);

/**
 * routes for author model
 */
// list all books
router.get("/authors", authorController.getAuthors);

// GET create a new book, display the create book page
router.get("/author/create", authorController.getCreateAuthor);
// POST create a new author
router.post("/author/create", authorController.postCreateAuthor);

// display author details
router.get("/author/:id", authorController.getAuthorDetail);

// GET author (id) detail, display the author detail page
router.get("/author/:id/update", authorController.getUpdateAuthorDetail);
// POST update author details by send data
router.post("/author/:id/update", authorController.postUpdateAuthorDetail);

// delete author
router.get("/author/:id/delete", authorController.getDeleteAuthor);
router.post("/author/:id/delete", authorController.postDeleteAuthor);

/**
 * routes for bookinstance model
 */
// list all books
// router.get("/genres", bookInstanceController.getgenres);

// GET create a new book, display the create book page
// router.get(
//   "/bookinstance/create",
//   bookInstanceController.getCreateBookInstance
// );
// POST create a new bookinstance
// router.post(
//   "/bookinstance/create",
//   bookInstanceController.postCreateBookInstance
// );

// display bookinstance details
// router.get("/bookinstance/:id", bookInstanceController.getBookInstanceDetail);

// GET bookinstance (id) detail, display the bookinstance detail page
// router.get(
//   "/bookinstance/:id/update",
//   bookInstanceController.getUpdateBookInstanceDetail
// );
// POST update bookinstance details by send data
// router.post(
//   "/bookinstance/:id/update",
//   bookInstanceController.postUpdateBookInstanceDetail
// );

// delete bookinstance
// router.get(
//   "/bookinstance/:id/delete",
//   bookInstanceController.getDeleteBookInstance
// );
// router.post(
//   "/bookinstance/:id/delete",
//   bookInstanceController.postDeleteBookInstance
// );

/**
 * routes for the genre model
 */
// list all genres
// router.get("/genres", genreController.getGenres);

// GET create a new genre, display the create genre page
// router.get("/genre/create", genreController.getCreateGenre);
// POST create a new genre
// router.post("/genre/create", genreController.postCreateGenre);

// display genre details
// router.get("/genre/:id", genreController.getGenreDetail);

// GET genre (id) detail, display the genre detail page
// router.get("/genre/:id/update", genreController.getUpdateGenreDetail);
// POST update genre details by send data
// router.post("/genre/:id/update", genreController.postUpdateGenreDetail);

// delete genre
// router.get("/genre/:id/delete", genreController.getDeleteGenre);
// router.post("/genre/:id/delete", genreController.postDeleteGenre);

module.exports = router;
