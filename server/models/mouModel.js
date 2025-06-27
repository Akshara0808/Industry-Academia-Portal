const mongoose = require("mongoose");

const mouSchema = new mongoose.Schema(
  {
    academicYear: {
      type: String,
      required: true,
    },
    organisation: {
      type: String,
      required: true,
    },
    industryName: {
      type: String,
      required: true,
    },
    yearOfSigning: {
      type: Date,
      required: true,
    },
    duration: {
      type: String,
      required: true,
    },
    activities: {
      type: String,
      required: true,
    },
    participants: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("MoU", mouSchema);
