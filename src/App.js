import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Courses from "./Courses";
import Contact from "./Contact";
import './App.css';
function App() {
  return (
    <Router>
      <nav style={{ padding: "10px", background: "#f0f0f0" }}>
        <Link to="/" style={{ margin: "10px" }}>Home</Link>
        <Link to="/courses" style={{ margin: "10px" }}>Courses</Link>
        <Link to="/contact" style={{ margin: "10px" }}>Contact</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}
export default App;
