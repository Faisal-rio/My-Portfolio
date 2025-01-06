import React, { useState } from "react";
import { FaHome, FaUserAlt, FaCode, FaProjectDiagram, FaGraduationCap, FaEnvelope } from "react-icons/fa";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      {/* Logo Section */}
      <div className="navbar-logo">
        <a href="#home">ғᗩ𝓈𝔦ⓁŘｉᵒ</a>
      </div>

      {/* Hamburger Icon */}
      <div className={`hamburger ${isOpen ? "active" : ""}`} onClick={toggleMenu}>
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
      </div>

      {/* Links Section */}
      <ul className={`navbar-links ${isOpen ? "open" : ""}`}>
        <li>
          <a href="#home" onClick={() => setIsOpen(false)}>
            <FaHome className="icon" /> Home
          </a>
        </li>
        <li>
          <a href="#about" onClick={() => setIsOpen(false)}>
            <FaUserAlt className="icon" /> About
          </a>
        </li>
        <li>
          <a href="#whatido" onClick={() => setIsOpen(false)}>
            <FaCode className="icon" /> What I Do
          </a>
        </li>
        <li>
          <a href="#projects" onClick={() => setIsOpen(false)}>
            <FaProjectDiagram className="icon" /> Projects & Skills
          </a>
        </li>
        <li>
          <a href="#education" onClick={() => setIsOpen(false)}>
            <FaGraduationCap className="icon" /> Education
          </a>
        </li>
        <li>
          <a href="#Footer" onClick={() => setIsOpen(false)}>
            <FaEnvelope className="icon" /> Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
