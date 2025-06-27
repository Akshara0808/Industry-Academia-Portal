// server/routes/userRoutes.js
const express = require("express");
const router = express.Router();
const User = require("../models/User");


router.post("/signup", async (req, res) => {
  const { name, email } = req.body;
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ message: "User already exists" });

    const newUser = new User({ name, email });
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
});
  

module.exports = router;
