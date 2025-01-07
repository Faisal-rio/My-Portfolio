import React, { useEffect, useState } from "react";
import "./Home.css";

const Home = () => {
  const [nameText, setNameText] = useState("Hello, I'm Fasil!");

  const texts = [
    "Hi, I'm Fasil!",
    "Welcome to My Site!",
    "A Web Developer!",
  ];
  let index = 0;

  useEffect(() => {
    const interval = setInterval(() => {
      setNameText(texts[index]);
      index = (index + 1) % texts.length;
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home-container">
      <div className="left-section">
        <h1 className="name">{nameText}</h1>
        <p className="Description">
          MERN Stack Developer skilled in React, JavaScript, HTML, and CSS.
          Passionate about building modern, responsive, and user-friendly web
          applications. Let's create something amazing together!
        </p>
        <div className="social-links">
          <a
            href="https://www.linkedin.com/in/mohammadfasil?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            href="https://github.com/Faisal-rio"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://www.instagram.com/invites/contact/?igsh=10q7gy2l0xrgw&utm_content=3ejc9lf"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            href="https://wa.me/8122698741"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
          >
            <i className="fab fa-whatsapp"></i>
          </a>
          <a href="mailto:faisal.sfzubaida@gmail.com" className="social-icon">
            <i className="fas fa-envelope"></i>
          </a>
        </div>
      </div>
      <div className="right-section">
        <div className="photo-frame">
          <img
            src="/images/fasil.png"
            alt="Mohammed Fasil"
            className="profile-photo"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;