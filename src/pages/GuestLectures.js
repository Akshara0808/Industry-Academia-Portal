
// GuestLectures.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaTrash } from "react-icons/fa";

const GuestLectures = () => {
  const [lectures, setLectures] = useState([]);
  const [formData, setFormData] = useState({
    resourcePerson: "",
    designation: "",
    topic: "",
    venue: "",
    date: "",
    beneficiaries: "",
    outcomes: "",
  });

  useEffect(() => {
    fetchLectures();
  }, []);

  const fetchLectures = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/guest-lectures");
      setLectures(res.data);
    } catch (err) {
      console.error("Error fetching guest lectures:", err);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/guest-lectures", formData);
      setFormData({
        resourcePerson: "",
        designation: "",
        topic: "",
        venue: "",
        date: "",
        beneficiaries: "",
        outcomes: "",
      });
      fetchLectures();
    } catch (err) {
      console.error("Error adding guest lecture:", err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/guest-lectures/${id}`);
      fetchLectures();
    } catch (err) {
      console.error("Error deleting lecture:", err);
    }
  };

  return (
    <div style={{ padding: "30px", fontFamily: "'Segoe UI', sans-serif", backgroundColor: "#F1EFEC", minHeight: "100vh" }}>
      <h2 style={{ color: "#123458", fontSize: "28px", textAlign: "center" }}>Add Guest Lecture</h2>
      <form onSubmit={handleSubmit} style={{ maxWidth: "600px", margin: "20px auto" }}>
        {["resourcePerson", "designation", "topic", "venue", "date", "beneficiaries", "outcomes"].map((field) => (
          <input
            key={field}
            name={field}
            type={field === "date" ? "date" : "text"}
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
          Add Guest Lecture
        </button>
      </form>

      <h3 style={{ marginTop: "50px", fontSize: "30px", color: "#123458", textAlign: "center" }}>
        Guest Lecture Records
      </h3>
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
              <th>Resource Person</th>
              <th>Designation</th>
              <th>Topic</th>
              <th>Venue</th>
              <th>Date</th>
              <th>Beneficiaries</th>
              <th>Outcomes</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {lectures.map((l) => (
              <tr key={l._id}>
                <td>{l.resourcePerson}</td>
                <td>{l.designation}</td>
                <td>{l.topic}</td>
                <td>{l.venue}</td>
                <td>{l.date}</td>
                <td>{l.beneficiaries}</td>
                <td>{l.outcomes}</td>
                <td>
                  <button
                    onClick={() => handleDelete(l._id)}
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

export default GuestLectures;
