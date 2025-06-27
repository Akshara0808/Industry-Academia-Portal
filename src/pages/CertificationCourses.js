import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaTrash } from "react-icons/fa";

const CertificationCourses = () => {
  const [courses, setCourses] = useState([]);
  const [formData, setFormData] = useState({
    courseName: "",
    programName: "",
    regulation: "",
    topicsCovered: "",
    duration: "",
    industry: "",
    beneficiaries: "",
  });

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/certification-courses");
      setCourses(res.data);
    } catch (err) {
      console.error("Error fetching certification courses:", err);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/certification-courses", formData);
      setFormData({
        courseName: "",
        programName: "",
        regulation: "",
        topicsCovered: "",
        duration: "",
        industry: "",
        beneficiaries: "",
      });
      fetchCourses();
    } catch (err) {
      console.error("Error adding certification course:", err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/certification-courses/${id}`);
      fetchCourses();
    } catch (err) {
      console.error("Error deleting certification course:", err);
    }
  };

  return (
    <div style={{ padding: "30px", fontFamily: "'Segoe UI', sans-serif", backgroundColor: "#F1EFEC", minHeight: "100vh" }}>
      <h2 style={{ color: "#123458", fontSize: "28px", textAlign: "center" }}>Add Certification Course</h2>
      <form onSubmit={handleSubmit} style={{ maxWidth: "600px", margin: "20px auto" }}>
        {["courseName", "programName", "regulation", "topicsCovered", "duration", "industry", "beneficiaries"].map((field) => (
          <input
            key={field}
            name={field}
            type={field === "duration" ? "number" : "text"}
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
          Add Certification Course
        </button>
      </form>

      <h3 style={{ marginTop: "50px", fontSize: "30px", color: "#123458", textAlign: "center" }}>Certification Course Records</h3>
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
              <th>Course Name</th>
              <th>Program Name</th>
              <th>Regulation</th>
              <th>Topics Covered</th>
              <th>Duration (hrs)</th>
              <th>Collaborated Industry</th>
              <th>Beneficiaries</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {courses.map((course) => (
              <tr key={course._id}>
                <td>{course.courseName}</td>
                <td>{course.programName}</td>
                <td>{course.regulation}</td>
                <td>{course.topicsCovered}</td>
                <td>{course.duration}</td>
                <td>{course.industry}</td>
                <td>{course.beneficiaries}</td>
                <td>
                  <button
                    onClick={() => handleDelete(course._id)}
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

export default CertificationCourses;
