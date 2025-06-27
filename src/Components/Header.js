import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "./vnrlogo.jpg";

const Header = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <div style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "15px 30px",
      backgroundColor: "#d8e1e8", // Light misty background
      color: "#304674", // Deep navy text
      borderBottom: "2px solid #b2cbde",
      boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)"
    }}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <img
          src={logo}
          alt="VNRVJIET Logo"
          style={{ height: "100px", marginRight: "20px", borderRadius: "8px" }}
        />
        <div style={{ textAlign: "left" }}>
          <h1 style={{
            margin: 0,
            fontSize: "26px",
            fontWeight: "bold",
            color: "#304674", // same as header
            letterSpacing: "1px"
          }}>
            VNRVJIET
          </h1>
          <h2 style={{
            margin: 0,
            fontSize: "20px",
            color: "#555",
            fontWeight: "normal"
          }}>
            Industry Academia Portal
          </h2>
        </div>
      </div>
      <button
        onClick={handleLogout}
        style={{
          padding: "10px 20px",
          backgroundColor: "#304674", // Navy button
          border: "none",
          color: "#ffffff",
          cursor: "pointer",
          fontWeight: "bold",
          borderRadius: "6px",
          fontSize: "14px"
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default Header;
