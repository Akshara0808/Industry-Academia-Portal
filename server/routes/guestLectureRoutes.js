const express = require("express");
const router = express.Router();
const GuestLecture = require("../models/GuestLecture");

// GET all guest lectures
router.get("/", async (req, res) => {
  try {
    const lectures = await GuestLecture.find();
    res.json(lectures);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// POST a new guest lecture
router.post("/", async (req, res) => {
  const newLecture = new GuestLecture(req.body);
  try {
    const savedLecture = await newLecture.save();
    res.status(201).json(savedLecture);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// DELETE a guest lecture
router.delete("/:id", async (req, res) => {
  try {
    await GuestLecture.findByIdAndDelete(req.params.id);
    res.json({ message: "Guest Lecture deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
