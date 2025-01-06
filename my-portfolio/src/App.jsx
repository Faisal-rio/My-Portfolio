import React, { useState, useEffect } from "react";
import Navbar from "./components/NA/Navbar";
import Home from "./components/H/Home";
import About from "./components/A/About";
import WhatIDo from "./components/W/WhatIDo";
import ProjectsAndSkills from "./components/PS/ProjectsAndSkills";
import Education from "./components/E/Education";
import Footer from "./components/Footer/Footer";
import Loader from "./components/Loader/EnhancedLoader"; // Import the loader component
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay to show the loader
    const timer = setTimeout(() => setLoading(false), 3000); // 3 seconds
    return () => clearTimeout(timer); // Cleanup the timer
  }, []);

  return (
    <div>
      {loading ? (
        <Loader /> // Show the loader while loading
      ) : (
        <>
          <Navbar />
          <section id="home">
            <Home />
          </section>
          <section id="about">
            <About />
          </section>
          <section id="whatido">
            <WhatIDo />
          </section>
          <section id="projects">
            <ProjectsAndSkills />
          </section>
          <section id="education">
            <Education />
          </section>
          <section id="Footer">
            <Footer />
          </section>
        </>
      )}
    </div>
  );
}

export default App;
