// Middleware for handling auth
const { Admin } = require("../db/index");
function adminMiddleware(req, res, next) {
  // Implement admin auth logic
  // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
  console.log(req.headers);
  const username = req.headers.username;
  const password = req.headers.password;
  if (username == "admin" && password == "pass") next();
  else res.status(400).json({ message: "You are not allowed!" });
}

module.exports = adminMiddleware;
