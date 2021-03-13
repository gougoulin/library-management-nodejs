const UserModel = require("../models/user");
const { makeToken } = require("../helpers/jwtHelper");

module.exports = async function (req, res, next) {
  try {
    const { email, password } = req.body;
    const user = await UserModel.create({ email, password });
    req.userToken = makeToken(user._id);
    next();
  } catch (error) {
    if (error.message.includes("empty password")) {
      res.status(401).send("Password Empty");
    } else if (error.message.includes("empty email")) {
      res.status(401).send("Email Empty");
    } else if (error.code === 11000) {
      res.send("Email has been occupied.");
    } else {
      res.status(401).send(error.message);
    }
  }
};
