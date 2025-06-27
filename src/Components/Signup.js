import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import college from './vnrclg.jpg';

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email) {
      alert("Please enter both name and email.");
      return;
    }

    try {
      const res = await axios.post("http://localhost:5000/api/users/signup", { name, email });
      if (res.status === 201) {
        alert("Signup successful! Please log in.");
        navigate("/"); // Redirect to login
      }
    } catch (err) {
      if (err.response?.status === 400) {
        alert("User already exists. Please log in.");
        navigate("/");
      } else {
        alert("Something went wrong. Try again later.");
      }
    }
  };

  return (
    <div style={styles.background}>
      <div style={styles.header}>
        <h1 style={styles.title}>VNRVJIET</h1>
        <h2 style={styles.subtitle}>Industry-Academia Portal</h2>
      </div>
      <div style={styles.container}>
        <h2 style={styles.heading}>Sign Up</h2>
        <form onSubmit={handleSubmit} style={styles.form}>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={styles.input}
          />
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
          />
          <button type="submit" style={styles.button}>Sign Up</button>
        </form>
      </div>
    </div>
  );
}

const styles = {
  background: {
    backgroundImage: `url(${college})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "100vh",
    paddingTop: "40px",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    color: "#030303",
  },
  header: {
    textAlign: "center",
    marginBottom: "20px",
  },
  title: {
    fontSize: "40px",
    fontWeight: "bold",
    color: "#123458",
    marginBottom: "5px",
  },
  subtitle: {
    fontSize: "24px",
    color: "#123458",
  },
  container: {
    backgroundColor: "rgba(241, 239, 236, 0.9)",
    borderRadius: "12px",
    padding: "40px 20px",
    maxWidth: "400px",
    margin: "auto",
    textAlign: "center",
    boxShadow: "0 8px 16px rgba(0,0,0,0.3)",
  },
  heading: {
    fontSize: "24px",
    marginBottom: "20px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  input: {
    padding: "12px",
    fontSize: "18px",
    border: "1px solid #ccc",
    borderRadius: "6px",
  },
  button: {
    padding: "12px",
    fontSize: "18px",
    backgroundColor: "#123458",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
};

export default Signup;
