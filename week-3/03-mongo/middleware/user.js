const { User } = require("../db/index");
async function userMiddleware(req, res, next) {
  // Implement user auth logic
  // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
  const username = req.headers.username;
  const password = req.headers.password;

  const user = await User.findOne({ username: username });
  console.log(user);
  if (user && user.username == username && user.password == password) {
    next();
  } else {
    res.status(400).json({ message: "You are not authorized" });
  }
}

module.exports = userMiddleware;
