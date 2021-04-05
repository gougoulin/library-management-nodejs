const mongoose = require("mongoose");
const config = require("./config");

mongoose.connect(config.mongoose.db_uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

mongoose.connection.on("error", (err) => {
  console.log(`[configs/mongoose.js] ${err}`);
});

mongoose.connection.on("open", () => {
  console.log(`[configs/mongoose.js] Database connected.`);
});
