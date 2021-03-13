var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  // if isLoggedIn true, go to /dashboard

  // otherwise, redirect to /login
  res.redirect("/login");
});

/**
 * login page
 * GET localhost:5000/login
 */
router.get("/login", (req, res, next) => {
  res.render("pages/login", { title: "LOG IN" });
});

/**
 * sign up page
 * GET localhost:5000/signup
 */
router.get("/signup", (req, res, next) => {
  res.render("pages/signup", { title: "SIGN UP" });
});

/**
 * dashboard page
 */
router.get("/dashboard", (req, res, next) => {
  res.render("pages/dashboard", { title: "DASHBOARD" });
});

/**
 * listing books
 */
router.get("/books", (req, res, next) => {
  res.render("pages/book/index", { title: "Books" });
});
router.get("/book/create", (req, res) => {
  res.render("pages/book/createBook", { title: "Create New Book" });
});
router.get("/authors", (req, res) => {
  res.render("pages/author/index", { title: "Authors" });
});
router.get("/author/create", (req, res) => {
  res.render("pages/author/createAuthor", { title: "Create New Author" });
});
router.get("/genres", (req, res) => {
  res.render("pages/genre/index", { title: "Genres" });
});
router.get("/genre/create", (req, res) => {
  res.render("pages/genre/createGenre", { title: "Create New Genre" });
});
router.get("/bookinstances", (req, res) => {
  res.render("pages/bookinstance/index", { title: "Bookinstances" });
});
router.get("/bookinstance/create", (req, res) => {
  res.render("pages/bookinstance/createbookinstance", {
    title: "Create New Book Instance",
  });
});

module.exports = router;
