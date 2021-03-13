const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

// config use schema
const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["user", "admin"],
  },
});

UserSchema.pre("save", async function (next) {
  try {
    this.password = await bcrypt.hash(this.password, 10);
    next();
  } catch (error) {
    console.log(err);
    next();
  }
});

UserSchema.methods.validPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

const UserModel = new mongoose.model("user", UserSchema);

module.exports = UserModel;
