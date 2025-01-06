import React, { useEffect } from "react";
import "./About.css";

const About = () => {
  useEffect(() => {
    // Function to handle scroll event and add 'in-view' class
    const handleScroll = () => {
      const aboutImage = document.querySelector(".profile-image");
      const aboutDescription = document.querySelectorAll(".about-description");

      // Check if elements are in the viewport
      if (aboutImage && aboutDescription.length) {
        const imageInView =
          aboutImage.getBoundingClientRect().top < window.innerHeight;
        const descriptionInView = Array.from(aboutDescription).every(
          (desc) => desc.getBoundingClientRect().top < window.innerHeight
        );

        if (imageInView) {
          aboutImage.classList.add("in-view");
        }
        if (descriptionInView) {
          aboutDescription.forEach((desc) => desc.classList.add("in-view"));
        }
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="about-section">
      <div className="about-container">
        {/* Left: Profile Image */}
        <div className="image-container">
          <div className="yellow-border">
            <img
              src="public/images/Faisal.sfT.jpg" // Replace with your image URL
              alt="Profile"
              className="profile-image"
            />
          </div>
        </div>

        {/* Right: About Text */}
        <div className="text-container">
          <h2 className="about-title">ABOUT ME</h2>
          <p className="about-description">
            Hi, I'm Mohammed Fasil 👨‍💻, a React Developer 🚀 passionate about
            creating responsive, user-friendly web applications. I specialize in
            MERN Stack technologies (MongoDB, Express.js, React, Node.js) 🌐 and
            strive to craft seamless user experiences. My goal is to
            continuously learn and adapt to new technologies to build
            cutting-edge web solutions.
          </p>
          <p className="about-description">
            I bring a strong problem-solving mindset 🧩 and a keen attention to
            detail 🔍, ensuring code quality and performance. Eager to
            collaborate in dynamic teams 🤝, I’m ready to contribute to
            innovative projects and grow as a developer. Let’s build something
            amazing together!
          </p>

          {/* Resume View Button */}
          <a
            href="https://drive.google.com/file/d/1YVcNY6E4gY0AxGigUSKE3O130uAo27pH/view"
            className="resume-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
