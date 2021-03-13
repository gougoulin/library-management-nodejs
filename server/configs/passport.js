const UserModel = require("../models/user");
const LocalStrategy = require("passport-local").Strategy;
const passport = require("passport");

passport.use(
  "login",
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password",
    },
    async function (email, password, done) {
      try {
        let user = await UserModel.findOne({ email: email });
        if (user) {
          if (user.validPassword(password)) {
            return done(null, user._id, { message: "log in success" });
          } else {
            return done(null, false, { message: "incorrect password" });
          }
        } else {
          done(null, false, { message: "user not exist" });
        }
      } catch (error) {
        done(error, false);
      }
    }
  )
);

passport.use(
  "signup",
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password",
    },
    async function (email, password, done) {
      try {
        const user = await UserModel.create({
          email,
          password,
        });
        return done(null, user, { message: "sign up success" });
      } catch (error) {
        return done(error);
      }
    }
  )
);
