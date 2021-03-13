// sign up post handler

const postSignup = (req, res) => {
  res.json({
    msg: req.body.message,
    email: req.body.email,
    password: req.body.password,
  });
};

// log in post handler
const postLogin = (req, res) => {
  // console.log(err.message);
  res.json({ ...req.body });
};

module.exports = {
  postLogin,
  postSignup,
};
