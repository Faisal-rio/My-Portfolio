import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="clean-footer">
      <div className="footer-container">
        {/* Logo Section */}
        <div className="footer-logo">
          <h2 className="footer-signature">м𝒹 𝔽ａ𝓢ｉ𝕝</h2>
        </div>

        {/* Main Footer Content */}
        <div className="footer-main">
          {/* Contact Section */}
          <div className="footer-section">
            <h3>Contact</h3>
            <a href="mailto:faisal.sfzubaida@gmail.com" className="footer-link">
              <i className="fas fa-envelope"></i> Email Me
            </a>
            <a href="tel:+918122698741" className="footer-link">
              <i className="fas fa-phone"></i> Call Me
            </a>
          </div>

          {/* Address Section */}
          <div className="footer-section">
            <h3>Find Me</h3>
            <a
              href="https://www.google.com/maps?q=Vaniyambadi,Tamil Nadu,India"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              <i className="fas fa-map-marker-alt"></i> View on Google Maps
            </a>
          </div>

          {/* Social Links */}
          <div className="footer-section">
            <h3>Follow Me</h3>
            <div className="social-icons">
              <a
                href="https://github.com/Faisal-rio"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/mohammadfasil?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin"></i>
              </a>
              <a
                href="https://www.instagram.com/invites/contact/?igsh=10q7gy2l0xrgw&utm_content=3ejc9lf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="https://wa.me/918122698741"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-whatsapp"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Navigation Section */}
        <div className="footer-navigation">
          <nav className="footer-nav">
            <ul>
              <li>
                <a href="#home" className="footer-nav-link">Home</a>
              </li>
              <li>
                <a href="#about" className="footer-nav-link">About</a>
              </li>
              <li>
                <a href="#projects" className="footer-nav-link">Projects</a>
              </li>
              <li>
                <a href="#education" className="footer-nav-link">Education</a>
              </li>
            </ul>
          </nav>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p>© 2025 Fasil's Portfolio. All Rights Reserved.</p>
          <p>
            Designed with <span className="footer-heart">❤️</span> by Fasil
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
