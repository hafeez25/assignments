const { Router } = require("express");
const jwt = require("jsonwebtoken");
const adminMiddleware = require("../middleware/admin");
const { jwtSecret } = require("../config/index");
const { Admin, Course } = require("../db/index");
const router = Router();

// Admin Routes
router.post("/signup", (req, res) => {
  // Implement admin signup logic
  const { username, password } = req.body;
  Admin.create({
    username: username,
    password: password,
  })
    .then((reslut) => {
      res.status(201).json({ message: "Admin created successfully" });
    })
    .catch((err) => {
      res.status(401).json({ message: "Somethng went wrong!" });
    });
});

router.post("/signin", (req, res) => {
  // Implement admin signup logic
  const { username, password } = req.body;
  Admin.findOne({
    username: username,
    password: password,
  })
    .then((result) => {
      if (result) {
        const token = jwt.sign({ username: username }, jwtSecret);
        res.status(200).json({ message: `Bearer ${token}` });
      } else {
        res.status(411).json({ message: `Email and password are incorrect` });
      }
    })
    .catch((err) => {
      res.status(401).json({ message: "Somethng went wrong" });
    });
});

router.post("/courses", adminMiddleware, (req, res) => {
  // Implement course creation logic
  const { title, description, price, imageLink } = req.body;
  console.log("user " + req.username);

  Course.create({ title, description, price, imageLink })
    .then((course) => {
      if (course) {
        res.status(200).json({
          message: "Course created successfully",
          courseId: course._id,
        });
      } else {
        res.status(401).json({ message: "Something went wrong" });
      }
    })
    .catch((error) => {
      res
        .status(500)
        .json({ message: "Internal Server Error", error: error.message });
    });
});

router.get("/courses", adminMiddleware, async (req, res) => {
  // Implement fetching all courses logic
  const response = await Course.find({});
  res.status(200).json({ courses: response });
});

module.exports = router;
