const jwt = require("jsonwebtoken");
const { jwtSecret } = require("../config");

const { User } = require("../index");
function userMiddleware(req, res, next) {
  // Implement user auth logic
  // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
  const token = req.headers.authorization;
  const words = token.split(" ");

  const jwtToken = words[1];
  try {
    const decodedValue = jwt.verify(jwtToken, jwtSecret);

    req.username = decodedValue.username;
    next();
  } catch (error) {
    res.status(403).json({
      message: "You are not authenticated",
    });
  }
}

module.exports = userMiddleware;
