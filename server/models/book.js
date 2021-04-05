const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

// config use schema
const BookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "author",
    required: true,
  },
  summary: { type: String, required: true },
  isbn: { type: String, required: true, unique: true },
  genre: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "genre",
    },
  ],

  /**
   * private virtual properties
   * _url
   */
});

BookSchema.virtual("url").get(function () {
  return `/api/book/${this._id}`;
});

const BookModel = new mongoose.model("book", BookSchema);

module.exports = BookModel;
