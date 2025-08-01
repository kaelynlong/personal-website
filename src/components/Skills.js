"use client";

import React, { useEffect, useState } from "react";
import "./Skills.css";

export default function Skills() {
  const [visibleSections, setVisibleSections] = useState([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = entry.target.getAttribute("data-index");
            setVisibleSections((prev) => [...new Set([...prev, index])]);
          }
        });
      },
      { threshold: 0.1 }
    );

    const paragraphs = document.querySelectorAll(".skills-item");
    paragraphs.forEach((p, index) => {
      p.setAttribute("data-index", index);
      observer.observe(p);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div id="skills" className="skills-section">
      <h1>SKILLS</h1>
      <div className="skills-container">
        <div className={`skills-item ${visibleSections.includes("0") ? "fade-in" : ""}`}>
          <img src="/images/languagesIcon.png" alt="Languages Icon" className="skills-icon" />
          <div className="skills-text">
            <strong>Languages:</strong> C/C++ | Java | Python | HTML | CSS | JavaScript | Shell scripting | SQL | R
          </div>
        </div>
        <div className={`skills-item ${visibleSections.includes("1") ? "fade-in" : ""}`}>
          <img src="/images/softwareIcon.png" alt="Software Icon" className="skills-icon" />
          <div className="skills-text">
            <strong>Software:</strong> VSCode | IntelliJ | Github | Git | AWS | Jira | Confluence | Tableau | Jupyter | Excel
          </div>
        </div>
      </div>
    </div>
  );
}