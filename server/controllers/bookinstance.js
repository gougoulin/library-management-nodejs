const BookInstanceModel = require("../models/bookinstance");

const getBookInstances = async (req, res) => {
  try {
    const bookInstances = await BookInstanceModel.find().exec();
    res.status(200).json(bookInstances);
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Internal error", err: error });
  }
};
// CRUD
const postBookInstance = async (req, res) => {
  console.log(req.body);
  try {
    const newBookInstance = new BookInstanceModel({
      book: req.body.bookid,
      imprint: req.body.imprint,
      status: req.body.status,
      due_back: req.body.due,
    });
    newBookInstance.save(function (err) {
      if (err) {
        console.log(err);
      } else {
        res.status(201).json(newBookInstance);
      }
      return;
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Server internal error." });
  }
};
/**
 *
 * @param {*} req
 * @param {*} res
 */
const getBookInstance = async (req, res) => {
  try {
    const matched = await BookInstanceModel.findById(req.body.id).exec();
    if (matched) {
      res.status(200).json(matched);
    } else {
      res.status(404).json({ msg: "Resource not exists." });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Server error.", err: error });
  }
};

/**
 * update book instance
 * @param {} req
 * @param {*} res
 */
const updateBookInstance = async (req, res) => {
  try {
    const matched = await BookInstanceModel.findById(req.body.id).exec();
    console.log("find by id result: ", matched);
    if (matched) {
      Object.keys(req.body).map((name) => {
        if (name !== "id") {
          matched[name] = req.body[name];
        }
      });
      console.log("new matched", matched);
      const saved = await matched.save();
      console.log("saved", saved);
      if (saved) {
        res.status(201).json({ msg: "updated." });
      } else {
        res.json({ msg: "failed to update document." });
      }
    } else {
      res.status(404).json({ msg: "Resource not exists." });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "server error." });
  }
};

/**
 * delete book instance
 * @param {*} req
 * @param {*} res
 */
const deleteBookInstance = async (req, res) => {
  console.log("deleteBookInstance, req.body: ", req.body);
  try {
    const result = await BookInstanceModel.deleteOne({
      _id: req.body.id,
    }).exec();
    if (result) {
      res.status(201).json({ msg: "deleted.", data: result });
    } else {
      res.status(404).json({ msg: "Error. Resource not exists." });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Server errors." });
  }
};

module.exports = {
  getBookInstances,
  postBookInstance,
  getBookInstance,
  updateBookInstance,
  deleteBookInstance,
};
