// routes/certificationCourses.js
const express = require("express");
const router = express.Router();
const CertificationCourse = require("../models/CertificationCourse");

// Create a new certification course
router.post("/", async (req, res) => {
  try {
    const newCourse = new CertificationCourse(req.body);
    await newCourse.save();
    res.status(201).json(newCourse);
  } catch (err) {
    res.status(500).json({ message: "Error creating certification course", error: err });
  }
});

// Get all certification courses
router.get("/", async (req, res) => {
  try {
    const courses = await CertificationCourse.find();
    res.status(200).json(courses);
  } catch (err) {
    res.status(500).json({ message: "Error fetching certification courses", error: err });
  }
});

// Delete a certification course by ID
router.delete("/:id", async (req, res) => {
  try {
    const course = await CertificationCourse.findByIdAndDelete(req.params.id);
    if (!course) {
      return res.status(404).json({ message: "Course not found" });
    }
    res.status(200).json({ message: "Course deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Error deleting course", error: err });
  }
});

module.exports = router;
