const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const config = require("../configs/config");

exports.login = async (req, res) => {
  try {
    console.log(req.body);
    const user = await User.findOne({ email: req.body.email }).exec();
    if (user) {
      const isMatched = await user.validPassword(req.body.password);
      if (isMatched) {
        const token = await jwt.sign(
          { id: user._id },
          config.jwt.secret,
          config.jwt.options
        );
        res.status(200).json({ token });
      } else {
        res.status(401).json({ err: "Password/email incorrect." });
      }
    } else {
      res.status(404).json({ err: "User not exists." });
    }
  } catch (error) {
    res.status(500).json({ err: error.message });
  }
};

exports.signup = async (req, res) => {
  try {
    const user = new User(req.body);
    const result = await user.save();
    const token = await jwt.sign(
      { id: user._id },
      config.jwt.secret,
      config.jwt.options
    );
    res.status(201).json({ token });
  } catch (error) {
    res.status(500).json({ err: error.message });
  }
};
