const jwt = require("jsonwebtoken");
const { jwtSecret } = require("../config/index");
const { Admin } = require("../index");

// Middleware for handling auth
function adminMiddleware(req, res, next) {
  // Implement admin auth logic
  // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
  const token = req.headers.authorization;
  const words = token.split(" ");
  const jwtToken = words[1];
  console.log(jwtToken);
  try {
    jwtDecode = jwt.verify(jwtToken, jwtSecret);
    req.username = jwtDecode.username;
    next();
  } catch (error) {
    res.status(403).json({ message: "You are not authenticated" });
  }
}

module.exports = adminMiddleware;
