module.exports = {
  mongoose: {
    db_uri:
      process.env.DB_URI ||
      "mongodb+srv://admin:admin@cluster0.y0c87.mongodb.net/libraryMS?retryWrites=true&w=majority",
  },
  jwt: {
    secret: "this is a test secret",
    options: {
      expiresIn: "1h",
    },
  },
};
