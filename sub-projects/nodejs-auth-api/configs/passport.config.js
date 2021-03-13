const UserModel = require("../models/user");
const passport = require("passport");
const JWTStrategy = require("passport-jwt").Strategy;
const { ExtractJwt } = require("passport-jwt");
const LocalStrategy = require("passport-local");
const { makeToken } = require("../helpers/jwtHelper");
const GoogleStrategy = require("passport-google-oauth").OAuth2Strategy;
const FacebookStrategy = require("passport-facebook").Strategy;

passport.use(
  new JWTStrategy(
    {
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: "our top secret",
    },
    async function (payload, done) {
      try {
        UserModel.findOne({ _id: payload }, function (err, user) {
          if (user) {
            return done(null, user);
          } else {
            return done(null, false);
          }
        });
      } catch (error) {
        done(error);
      }
    }
  )
);

passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password",
    },
    async function (email, password, done) {
      try {
        const user = await UserModel.findOne({ email });
        console.log(user);
        if (!user) {
          done(null, false, { message: "email not exist." });
        } else {
          const isMatch = await user.validPassword(password, this.password);
          console.log(`isMatch is ${isMatch}`);
          if (isMatch) {
            done(null, makeToken(user._id));
          } else {
            done(null, false, { message: "password incorrect." });
          }
        }
      } catch (error) {
        done(error);
      }
    }
  )
);

// google oauth 2.0
passport.use(
  "google",
  new GoogleStrategy(
    {
      clientID:
        "46187500107-jg607f7nlb9dac7gsvc9lm0vufqcvjf5.apps.googleusercontent.com",
      clientSecret: "C6Pdrt7WLYIfaWDwxRP0UD2V",
      callbackURL: "http://localhost:5000/api/oauth/google/callback",
    },
    async function (accessToken, refreshToken, profile, done) {
      try {
        console.log(`accessToken is ${accessToken}`);
        console.log(`refreshToken is ${refreshToken}`);
        console.log(`profile is ${profile}`);
        return done(null, JSON.stringify(profile));
      } catch (error) {
        done(error);
      }
    }
  )
);

// facebook oauth 2.0
// passport.use(
//   new FacebookStrategy(
//     {
//       clientID: "",
//       clientSecret: "",
//       callbackURL: "",
//     },
//     (accessToken, refreshToken, profile, done) => {
//       try {
//         console.log(`accessToken is ${accessToken}`);
//         console.log(`refreshToken is ${refreshToken}`);
//         console.log(`profile is ${profile}`);
//       } catch (error) {
//         return done(error, false, { message: error.message });
//       }
//     }
//   )
// );
