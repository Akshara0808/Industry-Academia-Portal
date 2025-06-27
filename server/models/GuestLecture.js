const mongoose = require("mongoose");

const guestLectureSchema = new mongoose.Schema({
  resourcePerson: String,
  designation: String,
  topic: String,
  venue: String,
  date: String,
  beneficiaries: String,
  outcomes: String,
});

module.exports = mongoose.model("GuestLecture", guestLectureSchema);
