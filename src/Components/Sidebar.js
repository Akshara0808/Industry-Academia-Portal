import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const linkStyle = {
    display: "block",
    padding: "14px 22px",
    color: "#304674", // Navy blue text
    textDecoration: "none",
    fontWeight: "500",
    transition: "0.3s"
  };

  const activeStyle = {
    backgroundColor: "#b2cbde", // light accent bg
    color: "#030303",
    fontWeight: "bold"
  };

  return (
    <div style={{
      width: "220px",
      backgroundColor: "#c6d3e3", // Sidebar background
      height: "100vh",
      paddingTop: "20px",
      boxShadow: "2px 0 5px rgba(0, 0, 0, 0.1)"
    }}>
      <NavLink to="/mous" style={linkStyle} activeStyle={activeStyle}>MOUs</NavLink>
      <NavLink to="/startups" style={linkStyle} activeStyle={activeStyle}>StartUps</NavLink>
      <NavLink to="/guest-lectures" style={linkStyle} activeStyle={activeStyle}>Guest Lectures</NavLink>
      <NavLink to="/certification-courses" style={linkStyle} activeStyle={activeStyle}>Certification Courses</NavLink>
    </div>
  );
};

export default Sidebar;
