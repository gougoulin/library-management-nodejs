const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

// config use schema
const AuthorSchema = new mongoose.Schema({
  first_name: { type: String, trim: true, maxLength: 100 },
  last_name: { type: String, trim: true, maxLength: 100 },
  date_of_birth: { type: Date }, // date of birth
  date_of_death: { type: Date }, // date of dead

  /**
   * virtual properties
   */
  //   _name: String,
  //   _lifespan: String,
  //   _url: String,
});

AuthorSchema.virtual("name").get(function () {
  const fname = this.first_name || "";
  const lname = this.last_name ? `, ${this.last_name}` : "";
  return `${fname}${lname}`;
});

AuthorSchema.virtual("lifespan").get(function () {
  const birth = this.date_of_birth.getYear();
  const death = this.date_of_death.getYear();
  return `${birth} - ${death}`.toString();
});

AuthorSchema.virtual("url").get(function () {
  return `/api/authors/${this._id}`;
});

AuthorSchema.pre("findOneAndRemove", async function (next) {
  console.log("Pre findOneAndRemove");
  // const Book = require("../models/book");
  // await Book.deleteMany({ author: this._conditions._id });
  // return next();
});

const AuthorModel = new mongoose.model("author", AuthorSchema);

module.exports = AuthorModel;
