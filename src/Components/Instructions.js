// src/pages/Instructions.js
/*
import React from "react";
import Header from "../Components/Header";
import Sidebar from "../Components/Sidebar";

const Instructions = () => {
  return (
        <div style={{ padding: "30px", backgroundColor: "#F1EFEC", height: "100%" }}>
          <h2 style={{ textAlign: "center" ,color: "#304674" }}>Welcome to the Industry Academia Portal</h2>
          <p style={{ color: "#555", textAlign: "center", marginTop: "20px" }}>
            Use the sidebar to access different sections like MOUs, StartUps, Guest Lectures, and Certification Courses.
          </p>
        </div>

  );
};

export default Instructions;*/
import React from "react";

const Instructions = () => {
  return (
    <div style={{ padding: "20px", fontFamily: "'Segoe UI', sans-serif" }}>
      <h2 style={{ textAlign: "center" , color: "#304674", fontSize: "40px" }}>Welcome to the Industry Academia Portal</h2>
      <h2 style={{ color: "#304674", marginBottom: "20px" }}>Instructions</h2>
      <ul style={{ lineHeight: "1.8", fontSize: "20px" }}>
        <li>Fill in the required forms carefully and accurately.</li>
        <li>Ensure all fields are completed before submitting.</li>
        <li>You can view and delete submitted records below each form.</li>
        <li>Use the sidebar to navigate between different data entry sections.</li>
        <li>If you encounter any issues, please contact the system administrator.</li>
      </ul>
    </div>
  );
};

export default Instructions;
