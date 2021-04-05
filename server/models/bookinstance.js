const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

// config use schema
const BookInstanceSchema = new mongoose.Schema({
  book: { type: mongoose.Types.ObjectId, ref: "book", required: true },
  imprint: { type: String, required: true },
  status: {
    type: String,
    required: true,
    enum: ["Available", "Maintenance", "Loaned", "Reserved"],
    default: "Maintenance",
  },
  due_back: { type: Date, default: Date.now },
  /**
   * private virtual properties
   * _url
   */
});

BookInstanceSchema.virtual("_url").get(async function () {
  return await `/api/bookinstance/${this._id}`;
});

const BookInstanceModel = new mongoose.model(
  "bookinstance",
  BookInstanceSchema
);

module.exports = BookInstanceModel;
