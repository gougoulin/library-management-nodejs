const Book = require("../models/book");

const getBooks = async (req, res) => {
  try {
    const allBooks = await Book.find({}).populate("genre").populate("author");
    if (allBooks) {
      res.status(201).json(allBooks);
    }
  } catch (error) {
    res.status(500).json({ msg: error.message });
    console.log(error);
  }
};

const postBooks = async (req, res) => {
  try {
    const matchedBook = await Book.findOne({ isbn: req.body.isbn }).exec();
    if (matchedBook) {
      res.status(409).json({
        id: matchedBook._id,
        msg: `The book already exist with ${matchedBook.isbn}. Check URL ${matchedBook.url}`,
      });
    } else {
      // create the book
      console.log(req.body);
      const newBook = await Book.create(req.body);
      if (!newBook) throw Error("Failed to create the book");
      res.status(201).json(newBook);
    }
  } catch (error) {
    // there are error, go back to GET /api/book/create
    console.log(error.message);
    res.status(400).json({ error: "[Error] Bad request: " + error.message });
  }
};

const putBooks = (req, res) => {
  res.status(405).json({});
};

const patchBooks = putBooks;
const deleteBooks = putBooks;

const getBookByID = async (req, res) => {
  try {
    const matchedBook = await Book.findById(req.params.id)
      .populate([{ path: "author" }, { path: "genre" }])
      .exec();
    res.status(200).json(matchedBook);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

// avoid accidentally POST a book that already exists
const postBookByID = async (req, res) => {
  try {
    const matchedBook = await Book.findById(req.params.id);
    res.status(409).json({ id: matchedBook._id });
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

const putBookByID = async (req, res) => {
  try {
    if (!req.body) {
      res.status(204);
    } else {
      const matchedBook = await Book.findById(req.params.id);

      if (matchedBook) {
        const count = await Book.update({ _id: req.params.id }, req.body);
        if (count === 1) {
          res.status(200);
        } else {
          throw Error("internal error");
        }
      } else {
        res.status(404);
      }
    }
  } catch (error) {
    console.log(error.message);
    res.status(500);
  }
};

const patchBookByID = putBookByID;

const deleteBookByID = async (req, res) => {
  try {
    const targetBook = await Book.findById(req.params.id);
    if (targetBook) {
      const deletedBook = await Book.deleteOne(targetBook).exec();
      if (deleteBook) {
        res.status(200).json(deletedBook);
      } else {
        // internal error
        throw Error("Failed to delete the Book from database");
      }
    } else {
      res.status(404);
    }
  } catch (error) {
    console.log(error.message);
    res.json(500);
  }
};

module.exports = {
  getBooks,
  postBooks,
  putBooks,
  patchBooks,
  deleteBooks,
  getBookByID,
  postBookByID,
  putBookByID,
  patchBookByID,
  deleteBookByID,
};
