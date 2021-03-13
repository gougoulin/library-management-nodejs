const Author = require("../models/author");
const Book = require("../models/book");

const getAuthors = async (req, res) => {
  try {
    const authors = await Author.find({}).exec();
    if (!authors) throw Error("Can't fetch authors from database");
    const extendedAuthors = authors.map((author) => {
      return {
        id: author._id,
        name: author.name,
        lifespan: author.lifespan,
        url: author.url,
      };
    });
    res.status(200).json(extendedAuthors);
  } catch (error) {
    res.status(500).json({ msg: "Server error." });
  }
};

const postAuthors = async (req, res) => {
  try {
    const dataNewAuthor = {
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      date_of_birth: new Date(req.body.date_of_birth),
      date_of_death: new Date(req.body.date_of_death),
    };
    const isAuthorExist = await Author.findOne({
      first_name: dataNewAuthor.first_name,
      last_name: dataNewAuthor.last_name,
      date_of_birth: dataNewAuthor.date_of_birth,
      date_of_death: dataNewAuthor.date_of_death,
    }).exec();
    if (isAuthorExist) {
      res.status(409).json({ id: isAuthorExist._id, msg: "author exist" });
    } else {
      const savedAuthor = await Author.create(dataNewAuthor);
      console.log(savedAuthor);
      res.status(201).json({ id: savedAuthor._id, msg: "author created" });
    }
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

const getAuthor = async (req, res) => {
  try {
    const author = await Author.findById(req.params.id).exec();
    if (author) {
      res.json(author);
    } else {
      throw Error("author doesn't exist");
    }
  } catch (error) {
    res.json({ error: error.message });
  }
};

const putAuthor = async (req, res) => {
  try {
    const updatedAuthor = await Author.findByIdAndUpdate(
      { _id: req.params.id },
      {
        $set: { ...req.body },
      }
    );
    if (!updatedAuthor) throw Error("Failed to update author.");
    res.json({ data: updatedAuthor, msg: "Update author success." });
  } catch (error) {
    res.json({ msg: error.message });
  }
};

const deleteAuthor = async (req, res) => {
  /**
   * if the author's books, reject the request
   * This MUST be done in the future.
   */
  try {
    const booksOfAuthor = await Book.findOne({ author: req.params.id }).exec();
    if (!booksOfAuthor) {
      console.log("found booksOfAuthor", booksOfAuthor);
      const deletedAuthor = await Author.findOneAndRemove({
        _id: req.params.id,
      });
      if (deletedAuthor) {
        res
          .status(200)
          .json({ data: deletedAuthor, msg: "author deleted success." });
      } else {
        res.status(404);
      }
    } else {
      res
        .status(409)
        .json({ msg: "Can't delete. Delete author's books first." });
    }
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

module.exports = {
  getAuthors,
  postAuthors,
  getAuthor,
  putAuthor,
  deleteAuthor,
};
