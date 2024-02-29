const { Router } = require("express");
const router = Router();
const { User, Course } = require("../db/index");
const userMiddleware = require("../middleware/user");

// User Routes
router.post("/signup", async (req, res) => {
  // Implement user signup logic
  try {
    const { username, password } = req.body;
    await User.create({
      username,
      password,
    });

    res.status(201).json({ message: "User created successfully" });
  } catch (err) {
    res.status(400).json({ message: err });
  }
});

router.get("/courses", async (req, res) => {
  // Implement listing all courses logic
  const courses = await Course.find();
  res.json({ courses });
});

router.post("/courses/:courseId", userMiddleware, async (req, res) => {
  // Implement course purchase logic

  const courseId = req.params.courseId;
  const username = req.headers.username;

  await User.updateOne(
    {
      username: username,
    },
    {
      $push: {
        purchasedCourse: courseId,
      },
    }
  );
  res.json({
    message: "Purchase complete!",
  });

  res
    .status(201)
    .json({ message: "Course purchased successfully", course: course });
});

router.get("/purchasedcourses", userMiddleware, async (req, res) => {
  // Implement fetching purchased courses logic
  const username = req.headers.username;
  const user = await User.findOne({
    username: username,
  });

  const courses = await Course.find({
    _id: {
      $in: user.purchasedCourse,
    },
  });
  res.json({
    courses: courses,
  });
});

module.exports = router;
