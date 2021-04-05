const http = require("http.js");

exports.getUsers = http({
  method: "get",
  url: "/users",
});
