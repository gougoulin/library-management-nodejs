const http = require("http.js");

exports.getBooks = http({
  method: "get",
  url: "/books",
});
