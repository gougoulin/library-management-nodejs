const express = require("express");
const Router = express.Router();
const passport = require("passport");
const signup = require("../middlewares/signup");
const expressJWT = require("express-jwt");
const { verify } = require("../helpers/jwtHelper");
require("../configs/passport.config");

// passport strategy set up
// passport.use();

// login
Router.post(
  "/login",
  passport.authenticate("local", { session: false }),
  (req, res) => {
    res.json(req.user);
  }
);

// signup
Router.post("/signup", signup, async (req, res) => {
  console.log(req.userToken);
  res.json(req.userToken);
});

// protected routes
// verify is my own middleware
// Router.get("/protected", verify, (req, res) => {

// also can use passport.authenticate
Router.get(
  "/protected",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    console.log(req.userID);
    res.json(req.userID);
  }
);

// google oauth 2.0
Router.post(
  "/oauth/google",
  passport.authenticate(
    "google",
    { session: false, scope: ["https://www.googleapis.com/auth/plus.login"] }
    // (req, res) => {
    //   res.send("google oauth");
    // }
  )
);
Router.get(
  "/oauth/google/callback",
  passport.authenticate("google"),
  (req, res) => {
    res.send(`you reached google callback ${JSON.stringify(req.user)}`);
  }
);

// facebook oauth 2.0
// Router.post(
//   "/oauth/facebook",
//   passport.authenticate("facebook", { session: false, scope: ["profile"] }),
//   (req, res) => {
//     res.send("facebook oauth page");
//   }
// );

// export Router
module.exports = Router;
