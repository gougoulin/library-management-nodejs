// // environment
// require("dotenv").config();

// const express = require("express");
// const server = express();
// const ApiRouter = require("./routes/api.js");

// // database connection
// require("./configs/mongoose.config");

// // set up middle-wares
// server.use(express.json());
// server.use(express.urlencoded("extended"));

// // set up routers
// server.use("/api", ApiRouter);

// const PORT = process.env.PORT || 5000;

// server.listen(PORT, (err) => {
//   console.log(`[server.js] Server started listening requests on port ${PORT}`);
//   if (err) console.log(err);
// });

// server.get("/", (req, res) => {
//   res.send("home page");
// });
