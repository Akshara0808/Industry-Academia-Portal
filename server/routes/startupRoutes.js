const express = require("express");
const router = express.Router();
const Startup = require("../models/StartUp");

// POST - add new startup
router.post("/", async (req, res) => {
  const newStartup = new Startup(req.body);
  const saved = await newStartup.save();
  res.json(saved);
});

// GET - fetch all startups
router.get("/", async (req, res) => {
  const startups = await Startup.find();
  res.json(startups);
});

// ✅ DELETE - delete a startup by ID
router.delete("/:id", async (req, res) => {
  try {
    await Startup.findByIdAndDelete(req.params.id);
    res.sendStatus(204);
  } catch (err) {
    console.error("Delete error:", err);
    res.status(500).json({ error: "Delete failed" });
  }
});

module.exports = router;
