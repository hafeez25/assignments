const { Router } = require("express");
const router = Router();
const { User, Course } = require("../db/index");
const userMiddleware = require("../middleware/user");

// User Routes
router.post("/signup", async (req, res) => {
  // Implement user signup logic
  try {
    const { username, password } = req.body;
    const user = new User({
      username,
      password,
    });
    await user.save();
    console.log(user);
    res.status(201).json({ message: "User created successfully" });
  } catch (err) {
    res.status(400).json({ message: err });
  }
});

router.get("/courses", async (req, res) => {
  // Implement listing all courses logic
  const courses = await Course.find();
  res.json(courses);
});

router.post("/courses/:courseId", userMiddleware, async (req, res) => {
  // Implement course purchase logic
  console.log("id");
  const courseId = req.params.courseId;
  console.log(courseId);
  const course = await Course.findById(courseId);

  res
    .status(201)
    .json({ message: "Course purchased successfully", course: course });
});

router.get("/purchasedCourses", userMiddleware, (req, res) => {
  // Implement fetching purchased courses logic
});

module.exports = router;
