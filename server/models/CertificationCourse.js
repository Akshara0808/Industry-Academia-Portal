// models/CertificationCourse.js
const mongoose = require("mongoose");

const certificationCourseSchema = new mongoose.Schema({
  courseName: {
    type: String,
    required: true,
  },
  programName: {
    type: String,
    required: true,
  },
  regulation: {
    type: String,
    required: true,
  },
  topicsCovered: {
    type: String,
    required: true,
  },
  duration: {
    type: Number,
    required: true,  // Duration in hours
  },
  industry: {
    type: String,
    required: true,
  },
  beneficiaries: {
    type: Number,
    required: true,
  },
});

const CertificationCourse = mongoose.model("CertificationCourse", certificationCourseSchema);

module.exports = CertificationCourse;
