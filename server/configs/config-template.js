module.exports = {
  mongoose: {
    db_uri: "your mongodb atlas url",
  },
  jwt: {
    secret: "your jwt secret",
    options: {
      expiresIn: "10h",
    },
  },
};
