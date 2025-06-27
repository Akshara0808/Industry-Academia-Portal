// server/server.js
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const userRoutes = require("./routes/userRoutes");
const guestLectureRoutes = require("./routes/guestLectureRoutes");
const certificationCoursesRoutes = require("./routes/certificationCourses");
const mouRoutes = require("./routes/mouRoutes");
dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/users", userRoutes);
// Routes
const startupRoutes = require("./routes/startupRoutes");
app.use("/api/startups", startupRoutes);
app.use("/api/guest-lectures", guestLectureRoutes);
app.use("/api/certification-courses", certificationCoursesRoutes);
app.use("/api/mous", mouRoutes);

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("MongoDB connected");
    app.listen(5000, () => console.log("Server running on port 5000"));
  })
  .catch(err => console.error("Connection error:", err));
