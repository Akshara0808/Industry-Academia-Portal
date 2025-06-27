// server/models/Startup.js
const mongoose = require("mongoose");

const startupSchema = new mongoose.Schema({
  name: String,
  category: String,
  beneficiaries: Number,
  mentor: String,
  outcomes: String,
}, { timestamps: true });

module.exports = mongoose.model("Startup", startupSchema);
