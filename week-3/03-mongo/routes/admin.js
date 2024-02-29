const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, User, Course } = require("../db/index");
const router = Router();

// Admin Routes
router.post("/signup", async (req, res) => {
  // Implement admin signup logic
  try {
    const { username, password } = req.body;
    const user = new Admin({
      username,
      password,
    });
    await user.save();
    res.status(201).json({ message: "Admin created successfully" });
  } catch (err) {
    res.status(400).json({ message: err });
  }
});

router.post("/courses", adminMiddleware, async (req, res) => {
  // Implement course creation logic
  const { title, description, price, imageLink } = req.body;
  if (!title || !description || !price || !imageLink) {
    res.status(400).json({ message: "Please enter all requied fields!" });
  }
  try {
    const course = new Course({
      title,
      description,
      price,
      imageLink,
    });
    await course.save();
    res
      .status(201)
      .json({ message: "Course created successfully", courseId: course._id });
  } catch (error) {
    res.status(400).json({ message: "Course not created" });
  }
});

router.get("/courses", adminMiddleware, async (req, res) => {
  // Implement fetching all courses logic
  try {
    const course = await Course.find();
    res.status(200).json(course);
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: err });
  }
});

module.exports = router;
