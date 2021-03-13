const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const validator = require("validator");
const bcrypt = require("bcrypt");

const userSchema = new Schema({
  email: {
    type: String,
    required: [true, "empty email"],
    unique: true,
    max: [100, "no more than 100 characters"],
    validate: {
      validator: validator.isEmail,
      message: "not a valid email",
    },
  },
  password: {
    type: String,
    required: [true, "empty password"],
    // not min, should be minLength
    minLength: [6, "minimum 6 characters"],
  },
});

userSchema.pre("save", async function () {
  this.password = await bcrypt.hash(this.password, 10);
});

userSchema.methods.validPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const UserModel = new mongoose.model("user", userSchema);

module.exports = UserModel;
