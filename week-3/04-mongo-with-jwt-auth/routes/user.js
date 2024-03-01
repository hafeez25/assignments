const { Router } = require("express");
const router = Router();
const jwt = require("jsonwebtoken");
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db/index");
const { jwtSecret } = require("../config/index");

// User Routes
router.post("/signup", (req, res) => {
  // Implement user signup logic
  const { username, password } = req.body;

  User.create({
    username: username,
    password: password,
  })
    .then((user) => {
      console.log(user);
      res.status(201).json({ message: "User created successfully" });
    })
    .catch((err) => {
      res
        .status(411)
        .json({ message: "Please enter valid email and password" });
    });
});

router.post("/signin", async (req, res) => {
  // Implement admin signup logic
  const { username, password } = req.body;

  User.findOne({
    username: username,
    password: password,
  })
    .then((reslut) => {
      if (reslut) {
        const token = jwt.sign({ username: username }, jwtSecret);
        res.status(200).json({ message: `Bearer ${token}` });
      } else {
        res.status(411).json({ message: `Email and password are incorrect` });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(401).json({ message: "Incorrect email and pass" });
    });
});

router.get("/courses", async (req, res) => {
  // Implement listing all courses logic
  const response = await Course.find({});
  res.status(200).json({ courses: response });
});

router.post("/courses/:courseId", userMiddleware, async (req, res) => {
  // Implement course purchase logic
  const courseId = req.params.courseId;
  const username = req.username;

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
});

router.get("/courses/purchasedCourses", userMiddleware, async (req, res) => {
  // Implement fetching purchased courses logic
  const user = await User.findOne({
    username: req.username,
  });

  try {
    const response = await Course.find({
      _id: {
        $in: user.purchasedCourse,
      },
    });

    res.json({
      courses: response,
    });
  } catch (error) {
    console.log(error);
    res.status(401).json({ message: "Something bad happend" });
  }
});

module.exports = router;
