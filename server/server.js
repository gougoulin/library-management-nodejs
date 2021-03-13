// environment
require("dotenv").config();

const express = require("express");
const server = express();
const ApiRouter = require("./routes/apiRoute.js");

// database connection
require("./configs/mongoose.config");

// set up middle-wares
server.use(express.json());
server.use(express.urlencoded("extended"));

// set up routers
server.use("/api", ApiRouter);

const PORT = process.env.PORT || 5000;

server.listen(PORT, (err) => {
  if (err) console.log(err);
  console.log(`Server started listening requests on port ${PORT}`);
});

server.get("/", (req, res) => {
  res.send("home page");
});
