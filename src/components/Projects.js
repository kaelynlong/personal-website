"use client";

import React, { useState } from 'react';
import './Projects.css';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    { name: "Project 1", shortDesc: "Short description", longDesc: "Longer description of the project...", tags: ["React", "JavaScript", "CSS"] },
    { name: "Project 2", shortDesc: "Short description", longDesc: "Longer description of the project...", tags: ["Node.js", "Express"] },
    { name: "Project 3", shortDesc: "Short description", longDesc: "Longer description of the project...", tags: ["Python", "Django"] },
    { name: "Project 4", shortDesc: "Short description", longDesc: "Longer description of the project...", tags: ["HTML", "CSS", "JavaScript"] }
    // Add more project objects here as needed.
  ];

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const closePopup = () => {
    setSelectedProject(null);
  };

  return (
    <div className="projects-section">
      <div className="projects-container">
        <h1>PROJECTS</h1>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-tile"
              onClick={() => handleProjectClick(project)}
            >
              <div className="project-info">
                <h3>{project.name}</h3>
                <p>{project.shortDesc}</p>
                <div className="tags">
                  {project.tags.map((tag, idx) => (
                    <span key={idx} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <div className="project-popup">
          <div className="popup-content">
            <button className="close-button" onClick={closePopup}>✕</button>
            <img src="placeholder-image.png" alt={selectedProject.name} className="popup-image" /> {/* Replace with actual image */}
            <div className="popup-details">
              <h2>
                {selectedProject.name}
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="project-link">
                  ↗
                </a>
              </h2>
              <p>{selectedProject.longDesc}</p>
              <div className="tags">
                {selectedProject.tags.map((tag, idx) => (
                  <span key={idx} className="tag">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
