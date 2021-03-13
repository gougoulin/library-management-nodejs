const jwt = require("jsonwebtoken");

module.exports = {
  makeToken: (subjectObj) => {
    // registered claim names , https://tools.ietf.org/html/rfc7519#section-4.1
    const token = jwt.sign(
      {
        iss: "http://localhost:5000", // issuer
        sub: subjectObj, // subject
        iat: Date.now(), // issued at
      },
      "our top secret",
      {
        algorithm: "HS256",
        expiresIn: "3d",
        // notBefore: 60, // 60, "2 days", "10h", "7d"
      }
    );
    return token;
  },
  verify: (req, res, next) => {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];
    console.log(authHeader, token);
    if (!token) {
      res.sendStatus(401);
    } else {
      jwt.verify(token, "our top secret", (err, user) => {
        if (err) {
          console.log(err);
          res.sendStatus(403);
        } else {
          req.userID = user;
          next();
        }
      });
    }
  },
};
