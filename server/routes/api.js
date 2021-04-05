const express = require("express");
const ApiRouter = express.Router();
// const passport = require("passport");
const { postSignup, postLogin } = require("../controllers/auth");
const bookController = require("../controllers/book");
const authorController = require("../controllers/author");
const genreController = require("../controllers/genre");
const bookInstanceController = require("../controllers/bookinstance");

// import passport.config.js to initialize strategy
// require("../configs/passport");

/**
 * routes for book model
 */
// all books
ApiRouter.get("/books", bookController.getBooks); // safe, return books
ApiRouter.post("/books", bookController.postBooks); // 201 create new book, return book ID
ApiRouter.put("/books", bookController.putBooks); // 405
ApiRouter.patch("/books", bookController.deleteBooks); // 405
ApiRouter.delete("/books", bookController.deleteBooks); // 405
// books/:id
ApiRouter.get("/books/:id", bookController.getBookByID); // safe, return on ebook(ID)
ApiRouter.post("/books/:id", bookController.postBookByID); // 404 or 409
ApiRouter.put("/books/:id", bookController.putBookByID); // 200, 204 or 404
ApiRouter.patch("/books/:id", bookController.patchBookByID); // 200, 204 or 404
ApiRouter.delete("/books/:id", bookController.deleteBookByID); // 200 or 404

/**
 * routes for author model
 */
// list all books
ApiRouter.get("/authors", authorController.getAuthors);
// GET create a new book, display the create book page
ApiRouter.post("/authors", authorController.postAuthors);

// CRUD
// GET author (id) detail, display the author detail page
ApiRouter.get("/authors/:id", authorController.getAuthor);
// POST update author details by send data
ApiRouter.put("/authors/:id", authorController.putAuthor);
// delete author
ApiRouter.delete("/authors/:id", authorController.deleteAuthor);

/**
 * routes for bookinstance model
 */
// list all books
ApiRouter.get("/bookinstances", bookInstanceController.getBookInstances);
// // POST create a new bookinstance
ApiRouter.post("/bookinstance", bookInstanceController.postBookInstance);
// // display bookinstance details
ApiRouter.get("/bookinstance", bookInstanceController.getBookInstance);
// // update bookinstance details by send data
ApiRouter.put("/bookinstance", bookInstanceController.updateBookInstance);
// // delete bookinstance
ApiRouter.delete("/bookinstance", bookInstanceController.deleteBookInstance);

/**
 * routes for the genre model
 * CRUD
 */

// CREATE
// GET create a new genre, display the create genre page
// ApiRouter.get("/genre/create", genreController.getCreateGenre);
// POST create a new genre
ApiRouter.post("/genres", genreController.postGenres);

// display genre details
// READ
ApiRouter.get("/genres/:id", genreController.getGenre);
// GET genre (id) detail, display the genre detail page
// ApiRouter.get("/genre/:id/update", genreController.getUpdateGenreDetail);
// POST update genre details by send data
// UPDATE
ApiRouter.put("/genres/:id", genreController.putGenre);
// delete genre
// DELETE
// ApiRouter.get("/genre/:id/delete", genreController.getDeleteGenre);
ApiRouter.delete("/genres/:id", genreController.deleteGenre);
// list all genres
// READ
ApiRouter.get("/genres", genreController.getGenres);

module.exports = ApiRouter;
