require("dotenv").config();
const express = require("express");
const app = express();
const morgan = require("morgan");
const apiRoute = require("./routes/api");
require("./configs/mongoose.config");

// middle-wares
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.use("/api", apiRoute);

// start server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server started listening port ${port}`);
});
