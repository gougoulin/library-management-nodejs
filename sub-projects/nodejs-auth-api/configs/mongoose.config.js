const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://admin:admin@cluster0.y0c87.mongodb.net/server_api_auth?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,

    autoIndex: true,
  }
);

mongoose.connection.on("error", (err) => {
  console.log(err);
});

mongoose.connection.on("open", () => {
  console.log(`Database connected.`);
});
