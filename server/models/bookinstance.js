const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

// config use schema
const BookInstanceSchema = new mongoose.Schema({
  book: { type: mongoose.Types.ObjectId, ref: "book", required: true },
  imprint: { type: String, required: true },
  status: {
    type: String,
    required: true,
    enum: ["available", "maintenance", "loaded", "reserved"],
    default: "maintenance",
  },
  due: { type: Date, default: Date.now },
  /**
   * private virtual properties
   * _url
   */
});

BookInstanceSchema.virtual("_url").get(async function () {
  return await `/api/bookinstance/${this._id}`;
});

/**
 * validate data before create a new document
 */
BookInstanceSchema.pre("save", async function (next) {
  try {
    this.password = await bcrypt.hash(this.password, 10);
    next();
  } catch (error) {
    console.log(err);
    next();
  }
});

BookInstanceSchema.methods.validPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

const BookInstanceModel = new mongoose.model(
  "bookinstance",
  BookInstanceSchema
);

module.exports = BookInstanceModel;
