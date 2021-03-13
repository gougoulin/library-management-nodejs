const Genre = require("../models/genre");

// create new genre
// const getCreateGenre = (req, res) => {
//   res.json(req);
// };

// POST
// create a new genre in database
const postGenres = async (req, res) => {
  console.log(req.body);
  try {
    const newGenre = {
      name: req.body.name,
    };
    console.log(newGenre);
    const matched = await Genre.findOne(newGenre).exec();
    if (matched) {
      res.status(209).json({ id: matched._id });
    } else {
      const createdGenre = await Genre.create(newGenre);
      console.log("createdGenre is", createdGenre);
      if (!createdGenre) throw Error(`Can't create the genre ${req.body.name}`);
      res.status(201).json({ id: createdGenre._id, url: createdGenre.url });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// GET genre model from database base on id in url
const getGenre = async (req, res) => {
  try {
    const matchedGenre = await Genre.findById(req.params.id).exec();
    if (!matchedGenre) {
      res.status(404).json({ msg: "genre not exists." });
    } else {
      res.status(200).json(matchedGenre);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// update genre
// const getUpdateGenreDetail = (req, res) => {
//   res.send(`${req.method} ${req.url}`);
// };

const putGenre = async (req, res) => {
  try {
    console.log(req.params.id, req.body.name);
    const updatedGenre = await Genre.update(
      {
        _id: req.params.id,
      },
      { name: req.body.name }
    ).exec();
    if (!updatedGenre) throw Error("Fail to update genre ID ${req.params.id}");
    res.status(200).json(updatedGenre);
  } catch (error) {
    console.log(error);
  }
};

const deleteGenre = async (req, res) => {
  try {
    const result = await Genre.findOneAndRemove({ _id: req.params.id });
    console.log(result);
    if (result) {
      res
        .status(200)
        .json({ msg: `Genre ID ${req.params.id} deleted`, data: result });
    } else {
      res.status(404);
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

const getGenres = async (req, res) => {
  try {
    const genreList = await Genre.find({});
    console.log(genreList);
    if (genreList) {
      res.json({ data: genreList });
    } else {
      throw Error("Can't list genres");
    }
  } catch (error) {
    res.json({ error: error.message });
  }
};

module.exports = {
  getGenres,
  postGenres,
  getGenre,
  putGenre,
  deleteGenre,
};
