const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const Book = require("./book");

// config use schema
const GenreSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
    maxLength: 100,
    unique: true,
  },
  /**
   * private virtual properties
   * _url
   */
});

GenreSchema.virtual("url").get(function () {
  return `/api/genre/${this._id}`;
});

/**
 * assure no books connected with genre to be deleted
 */
GenreSchema.pre(
  "findOneAndRemove",
  { query: true, document: false },
  async function (next) {
    console.log("pre delete running");
    console.log(this._conditions._id);
    const Book = require("../models/book");
    await Book.deleteMany({ genre: this._conditions._id });
    return next();
    // try {
    //   console.log("pre delete");
    //   const res = await Book.findOne({ genre: this._id });
    //   if (res.n > 0) {
    //     res.status(209).json({
    //       error: "there are books belonging to this genre. Can't delete.",
    //     });
    //   } else {
    //     return next();
    //   }
    // } catch (error) {
    //   console.log(error);
    //   res.status(500).json({
    //     error: "Internal error",
    //   });
    // }
  }
);

// GenreSchema.methods.validPassword = async function (password) {
//   return await bcrypt.compare(password, this.password);
// };

const GenreModel = new mongoose.model("genre", GenreSchema);

module.exports = GenreModel;
