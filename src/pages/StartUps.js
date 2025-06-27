import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaTrash } from "react-icons/fa";

const Startups = () => {
  const [startups, setStartups] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    beneficiaries: "",
    mentor: "",
    outcomes: "",
  });

  useEffect(() => {
    fetchStartups();
  }, []);

  const fetchStartups = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/startups");
      setStartups(res.data);
    } catch (err) {
      console.error("Error fetching startups:", err);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/startups", formData);
      setFormData({
        name: "",
        category: "",
        beneficiaries: "",
        mentor: "",
        outcomes: "",
      });
      fetchStartups();
    } catch (err) {
      console.error("Error adding startup:", err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/startups/${id}`);
      fetchStartups();
    } catch (err) {
      console.error("Error deleting startup:", err);
    }
  };

  return (
    <div style={{ padding: "30px", fontFamily: "'Segoe UI', sans-serif", backgroundColor: "#F1EFEC", minHeight: "100vh" }}>
      <h2 style={{ color: "#123458", fontSize: "28px", textAlign: "center" }}>Add Startup</h2>
      <form onSubmit={handleSubmit} style={{ maxWidth: "600px", margin: "20px auto" }}>
        {["name", "category", "beneficiaries", "mentor", "outcomes"].map((field) => (
          <input
            key={field}
            name={field}
            type={field === "beneficiaries" ? "number" : "text"}
            placeholder={field.replace(/([A-Z])/g, " $1")}
            value={formData[field]}
            onChange={handleChange}
            required
            style={{
              width: "100%",
              padding: "10px",
              marginBottom: "10px",
              borderRadius: "6px",
              border: "1px solid #ccc",
              fontSize: "16px",
            }}
          />
        ))}
        <button
          type="submit"
          style={{
            width: "100%",
            padding: "12px",
            backgroundColor: "#123458",
            color: "white",
            fontSize: "16px",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
          }}
        >
          Add Startup
        </button>
      </form>

      <h3 style={{ marginTop: "50px", fontSize: "30px", color: "#123458", textAlign: "center" }}>Startup Records</h3>
      <div style={{ overflowX: "auto", marginTop: "20px" }}>
        <table
          border="1"
          cellPadding="12"
          style={{
            margin: "0 auto",
            backgroundColor: "#fff",
            borderCollapse: "collapse",
            fontSize: "16px",
            minWidth: "80%",
          }}
        >
          <thead style={{ backgroundColor: "#123458", color: "#fff" }}>
            <tr>
              <th>Name of the Startup</th>
              <th>Startup Category</th>
              <th>No. of Students/Faculty Benefited</th>
              <th>Industry Mentor</th>
              <th>Outcomes</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {startups.map((startup) => (
              <tr key={startup._id}>
                <td>{startup.name}</td>
                <td>{startup.category}</td>
                <td>{startup.beneficiaries}</td>
                <td>{startup.mentor}</td>
                <td>{startup.outcomes}</td>
                <td>
                  <button
                    onClick={() => handleDelete(startup._id)}
                    style={{
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      color: "#ff4d4d",
                    }}
                  >
                    <FaTrash size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Startups;
