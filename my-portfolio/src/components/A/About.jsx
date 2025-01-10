import React, { useEffect } from "react";
import "./About.css";

const About = () => {
  useEffect(() => {
    // Function to handle scroll event and add 'in-view' class
    const handleScroll = () => {
      const aboutImage = document.querySelector(".profile-image");
      const aboutDescriptions = document.querySelectorAll(".about-description");

      if (aboutImage) {
        const imageInView =
          aboutImage.getBoundingClientRect().top < window.innerHeight;
        if (imageInView) {
          aboutImage.classList.add("in-view");
        }
      }

      if (aboutDescriptions.length) {
        aboutDescriptions.forEach((desc) => {
          const descriptionInView =
            desc.getBoundingClientRect().top < window.innerHeight;
          if (descriptionInView) {
            desc.classList.add("in-view");
          }
        });
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="about-section">
      <div className="about-container">
        {/* Left: Profile Image */}
        <div className="image-container">
          <div className="yellow-border">
            <img
              src="/images/faisalsf.png" // Relative path to the public folder
              alt="Mohammed Fasil"
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
            href="https://drive.google.com/file/d/1OZhT3HTkCoAnBoZTEI0S_gktbK-2tkOQ/view"
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
