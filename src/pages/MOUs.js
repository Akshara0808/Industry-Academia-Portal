import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaTrash } from "react-icons/fa";

const MOUs = () => {
  const [mous, setMous] = useState([]);
  const [formData, setFormData] = useState({
    academicYear: "",
    organisation: "",
    industryName: "",
    yearOfSigning: "",
    duration: "",
    activities: "",
    participants: "",
  });

  useEffect(() => {
    fetchMOUs();
  }, []);

  const fetchMOUs = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/mous");
      setMous(res.data);
    } catch (err) {
      console.error("Error fetching MOUs:", err);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/mous", formData);
      setFormData({
        academicYear: "",
        organisation: "",
        industryName: "",
        yearOfSigning: "",
        duration: "",
        activities: "",
        participants: "",
      });
      fetchMOUs();
    } catch (err) {
      console.error("Error adding MoU:", err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/mous/${id}`);
      fetchMOUs();
    } catch (err) {
      console.error("Error deleting MoU:", err);
    }
  };

  return (
    <div style={{ padding: "30px", fontFamily: "'Segoe UI', sans-serif", backgroundColor: "#F1EFEC", minHeight: "100vh" }}>
      <h2 style={{ color: "#123458", fontSize: "28px", textAlign: "center" }}>Add MoU</h2>
      <form onSubmit={handleSubmit} style={{ maxWidth: "800px", margin: "20px auto" }}>
        <input
          name="academicYear"
          type="text"
          placeholder="Academic Year"
          value={formData.academicYear}
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

        <input
          name="organisation"
          type="text"
          placeholder="Organisation with which MoU is signed"
          value={formData.organisation}
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

        <input
          name="industryName"
          type="text"
          placeholder="Name of the Industry/Institution/Corporate House"
          value={formData.industryName}
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

        <input
          name="yearOfSigning"
          type="date"
          placeholder="Year of Signing MoU"
          value={formData.yearOfSigning}
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

        <input
          name="duration"
          type="text"
          placeholder="Duration"
          value={formData.duration}
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

        <textarea
          name="activities"
          placeholder="List the actual activities under each MoU (year-wise)"
          value={formData.activities}
          onChange={handleChange}
          required
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "10px",
            borderRadius: "6px",
            border: "1px solid #ccc",
            fontSize: "16px",
            minHeight: "150px",
          }}
        />

        <textarea
          name="participants"
          placeholder="Number of students/teachers participated under MoUs"
          value={formData.participants}
          onChange={handleChange}
          required
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "10px",
            borderRadius: "6px",
            border: "1px solid #ccc",
            fontSize: "16px",
            minHeight: "120px",
          }}
        />

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
          Add MoU
        </button>
      </form>

      <h3 style={{ marginTop: "50px", fontSize: "30px", color: "#123458", textAlign: "center" }}>MoU Records</h3>
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
              <th>Academic Year</th>
              <th>Organisation</th>
              <th>Industry Name</th>
              <th>Year of Signing</th>
              <th>Duration</th>
              <th>Activities</th>
              <th>Participants</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {mous.map((mou) => (
              <tr key={mou._id}>
                <td>{mou.academicYear}</td>
                <td>{mou.organisation}</td>
                <td>{mou.industryName}</td>
                <td>{mou.yearOfSigning}</td>
                <td>{mou.duration}</td>
                <td>{mou.activities}</td>
                <td>{mou.participants}</td>
                <td>
                  <button
                    onClick={() => handleDelete(mou._id)}
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

export default MOUs;
