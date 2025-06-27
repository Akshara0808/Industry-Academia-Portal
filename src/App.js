import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Components/Login";
import Instructions from "./Components/Instructions";
import Layout from "./Components/Layout";
import MOUs from "./pages/MOUs";
import StartUps from "./pages/StartUps";
import GuestLectures from "./pages/GuestLectures";
import CertificationCourses from "./pages/CertificationCourses";
import Signup from "./Components/Signup";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/mous" element={<Layout><MOUs /></Layout>} />
        <Route path="/instructions" element={<Layout><Instructions /></Layout>} />
        <Route path="/startups" element={<Layout><StartUps /></Layout>} />
        <Route path="/guest-lectures" element={<Layout><GuestLectures /></Layout>} />
        <Route path="/certification-courses" element={<Layout><CertificationCourses /></Layout>} />
      </Routes>
    </Router>
  );
}

export default App;
