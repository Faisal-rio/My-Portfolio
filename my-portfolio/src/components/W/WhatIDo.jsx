import React, { useEffect, useState } from 'react';
import './WhatIDo.css'; // Importing the CSS file

const WhatIDo = () => {
  const [inView, setInView] = useState(false);

  // Observer callback to toggle in-view class based on visibility
  const handleScroll = (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        setInView(true);
      } else {
        setInView(false);
      }
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleScroll, { threshold: 0.3 });
    const elements = document.querySelectorAll('.what-i-do-section');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="what-i-do-container">
      <h2 className="section-title">What I Do</h2>
      <div className="what-i-do-content">
        {/* Left side: ChatGPT */}
        <div className={`left-side what-i-do-section ${inView ? 'in-view' : ''}`}>
          <div className="description">
            <h3>ChatGPT & AI Tools</h3>
            <p>
              I gained hands-on experience with ChatGPT and AI tools, completing the 'ChatGPT for Coders' course from Great Learning and a workshop at b10x. These experiences have enhanced my understanding and practical skills in utilizing AI tools effectively.
            </p>
            {/* AI Tools Icons */}
            <div className="icons-container">
              <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg" alt="ChatGPT" className="tech-icon" />
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzPbiLlsqVBtyy8lHMMWAyy__5y7qGhwlldQ&s" alt="Merlin AI" className="tech-icon" />
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6ZrNtA3wypBXfeivZXf0_8eWLw-gWCXJoTg&s" alt="Microsoft Copilot" className="tech-icon" />
            </div>
          </div>
        </div>

        {/* Right side: Fullstack Development */}
        <div className={`right-side what-i-do-section ${inView ? 'in-view' : ''}`}>
          <div className="description">
            <h3>Fullstack Development</h3>
            <p>
              I specialize in Fullstack web development using the MERN stack (MongoDB, Express, React, Node.js). I have built various applications and earned certification as a Fullstack Developer.
            </p>
            {/* Fullstack Development Icons */}
            <div className="icons-container">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML5" className="tech-icon" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS3" className="tech-icon" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" className="tech-icon" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" className="tech-icon" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" className="tech-icon" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="MongoDB" className="tech-icon" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" alt="Bootstrap" className="tech-icon" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git" className="tech-icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatIDo;