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
  Admin.create(
    {
      username: username,
      password: password,
    },
    (user) => {
      if (user) {
        res.status(201).json({ message: "Admin created successfully" });
      } else {
        res.status(401).json({ message: "Somethng went wrong!" });
      }
    }
  );
});

router.post("/signin", (req, res) => {
  // Implement admin signup logic
  const { username, password } = req.body;
  Admin.findOne(
    {
      username: username,
      password: password,
    },
    (user) => {
      if (user) {
        const token = jwt.sign({ username: username }, jwtSecret);
        res.status(200).json({ message: `Bearer ${token}` });
      } else {
        res.status(401).json({ message: "Somethng went wrong" });
      }
    }
  );
});

router.post("/courses", adminMiddleware, (req, res) => {
  // Implement course creation logic
  const { title, description, price, imageLink } = req.body;
  Course.create(
    {
      title,
      description,
      price,
      imageLink,
    },
    (course) => {
      if (course) {
        res.status(200).json({
          message: "Course created successfully",
          courseId: course._id,
        });
      } else {
        res.status(401).json({ message: "Somethng went wrong" });
      }
    }
  );
});

router.get("/courses", adminMiddleware, async (req, res) => {
  // Implement fetching all courses logic
  const response = await Course.find({});
  res.status(200).json({ courses: response });
});

module.exports = router;
