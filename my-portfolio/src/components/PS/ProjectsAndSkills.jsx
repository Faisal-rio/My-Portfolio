import React from "react";
import "./ProjectsAndSkills.css";

const ProjectsAndSkills = () => {
  const projects = [
    {
      title: "HappyLearning (MERN Project)",
      description: "A full-stack Learning Management System (LMS) built with MongoDB, Express, React, and Node.js.",
      githubLink: "https://github.com/Faisal-rio/HappyLearningA-lms-capston-p",
      netlifyLink: "https://ahappylearning-lms-cp.netlify.app/",
      icons: ["react", "nodejs", "mongodb", "express"],
    },
    {
      title: "Portfolio Website",
      description: "Interactive Portfolio Website: Displaying My Development Projects and Skills in a Mobile-Optimized Design.",
      githubLink: "https://github.com/Faisal-rio/portfolio-website",
      netlifyLink: "https://portfolio-website.netlify.app",
      icons: ["html", "css", "javascript", "react"],
    },
    {
      title: "Shopping Cart",
      description: "A React-based app for managing and displaying tech products with dynamic quantity updates and total price calculation.",
      githubLink: "https://github.com/Faisal-rio/Context.Api.react07",
      netlifyLink: "https://07contextapizz3.netlify.app/",
      icons: ["react", "bootstrap", "javascript"],
    },
    {
      title: "Blog Website",
      description: "MERN Stack Blog Showcasing Technical Articles Across Various Domains",
      githubLink: "https://github.com/Faisal-rio/Guvi-Blog-Clone",
      netlifyLink: "https://sampleguviclone.netlify.app/",
      icons: ["html", "css", "javascript"],
    },
    {
      title: "E-commerce Landing Page",
      description: "A modern and responsive landing page for an e-commerce website.",
      githubLink: "https://github.com/Faisal-rio/ecommerce-landing-page",
      netlifyLink: "https://ecommerce-landing-page.netlify.app",
      icons: ["html", "css", "javascript"],
    },
    {
      title: "API Projects",
      description: "Fierce Fox Gallery & API Projects: A Fun Web Collection Featuring Fox Images, IP Address Viewer, and Random Joke Generator",
      githubLink: "https://github.com/Faisal-rio/Promise-D18-simple-API?tab=readme-ov-file",
      netlifyLink: "https://sample-api-01.netlify.app//",
      icons: ["html", "css", "javascript"],
    },
  ];

  const renderIcons = (icons) => {
    const iconMap = {
      react: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      nodejs: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      mongodb: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      express: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
      html: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      css: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      javascript: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      bootstrap: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
      github: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", // GitHub Icon
      netlify: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/netlify/netlify-original.svg", // Netlify Icon
    };

    return icons.map((icon) => (
      <img key={icon} src={iconMap[icon]} alt={icon} className="tech-icon" />
    ));
  };

  return (
    <div className="projects-skills-container">
      <h2 className="section-title">Projects & Skills</h2>

      {/* Skills Section */}
      <div className="skills-container">
        <div className="skills-list">
          <span className="skill-item">React</span>
          <span className="skill-item">JavaScript</span>
          <span className="skill-item">HTML</span>
          <span className="skill-item">CSS</span>
          <span className="skill-item">Node.js</span>
          <span className="skill-item">Express</span>
          <span className="skill-item">MongoDB</span>
          <span className="skill-item">Bootstrap</span>
          <span className="skill-item">Git</span>
          <span className="skill-item">GitHub</span>
        </div>
      </div>

      {/* Projects Section */}
      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <div className="project-icons">{renderIcons(project.icons)}</div>
            <div className="project-links">
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="github-link"
              >
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                  alt="GitHub"
                  className="tech-icon"
                />
              </a>
              <a
                href={project.netlifyLink}
                target="_blank"
                rel="noopener noreferrer"
                className="netlify-link"
              >
                <img
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/netlify/netlify-original.svg"
                  alt="Netlify"
                  className="tech-icon"
                />
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* See More Projects Button */}
      <div className="see-more-container">
        <button
          className="see-more-btn"
          onClick={() => window.open("https://github.com/Faisal-rio", "_blank")}
        >
          More Projects😊
        </button>
      </div>
    </div>
  );
};

export default ProjectsAndSkills;
