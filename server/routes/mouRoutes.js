const express = require("express");
const router = express.Router();
const MoU = require("../models/mouModel");

// Create a new MoU
router.post("/", async (req, res) => {
  try {
    const newMoU = new MoU({
      academicYear: req.body.academicYear,
      organisation: req.body.organisation,
      industryName: req.body.industryName,
      yearOfSigning: req.body.yearOfSigning,
      duration: req.body.duration,
      activities: req.body.activities,
      participants: req.body.participants,
    });

    await newMoU.save();
    res.status(201).json({ message: "MoU created successfully!" });
  } catch (error) {
    console.error("Error creating MoU:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// Get all MoUs
router.get("/", async (req, res) => {
  try {
    const moUs = await MoU.find();
    res.status(200).json(moUs);
  } catch (error) {
    console.error("Error fetching MoUs:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// Get MoU by ID
router.get("/:id", async (req, res) => {
  try {
    const moU = await MoU.findById(req.params.id);
    if (!moU) {
      return res.status(404).json({ message: "MoU not found" });
    }
    res.status(200).json(moU);
  } catch (error) {
    console.error("Error fetching MoU by ID:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// Update a MoU by ID
router.put("/:id", async (req, res) => {
  try {
    const updatedMoU = await MoU.findByIdAndUpdate(
      req.params.id,
      {
        academicYear: req.body.academicYear,
        organisation: req.body.organisation,
        industryName: req.body.industryName,
        yearOfSigning: req.body.yearOfSigning,
        duration: req.body.duration,
        activities: req.body.activities,
        participants: req.body.participants,
      },
      { new: true }
    );

    if (!updatedMoU) {
      return res.status(404).json({ message: "MoU not found" });
    }

    res.status(200).json({ message: "MoU updated successfully!" });
  } catch (error) {
    console.error("Error updating MoU:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// Delete a MoU by ID
router.delete("/:id", async (req, res) => {
  try {
    const deletedMoU = await MoU.findByIdAndDelete(req.params.id);
    if (!deletedMoU) {
      return res.status(404).json({ message: "MoU not found" });
    }
    res.status(200).json({ message: "MoU deleted successfully!" });
  } catch (error) {
    console.error("Error deleting MoU:", error);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
