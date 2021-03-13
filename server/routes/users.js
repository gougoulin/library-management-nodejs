var express = require("express");
var router = express.Router();
const { login, signup } = require("../controllers/users");

/* GET users listing. */
router.post("/login", login);
router.post("/signup", signup);
module.exports = router;
