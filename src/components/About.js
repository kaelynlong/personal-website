"use client";

import React, { useEffect, useState } from "react";
import "./About.css";

export default function About() {
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

    const paragraphs = document.querySelectorAll(".about-description");
    paragraphs.forEach((p, index) => {
      p.setAttribute("data-index", index);
      observer.observe(p);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div id="about" className="about-section">
      <h1>ABOUT</h1>
      <p className={`about-description ${visibleSections.includes("0") ? "fade-in" : ""}`}>
        I’m a third-year Computer Science student at the University of Michigan’s College of Engineering, minoring in UX Design and Statistics. I’m passionate about designing accessible, polished user interfaces that seamlessly merge creativity with engineering precision. Additionally, my interest in quantitative algorithms fuels a data-driven approach to software design and problem-solving.
      </p>
      <p className={`about-description ${visibleSections.includes("1") ? "fade-in" : ""}`}>
        Through software engineering internships, machine learning research, and leadership in student organizations, I’ve developed a strong background in full-stack development. These experiences have also given me a solid foundation in both creative and analytical aspects of technology, fueling my dedication to building innovative, user-centered solutions.
      </p>
      <p className={`about-description ${visibleSections.includes("2") ? "fade-in" : ""}`}>
        In my free time, I enjoy exploring fashion, painting, and reading, which inspire my creativity and bring fresh perspectives to my work.
      </p>
      <a
        className="resume-button"
        href="/resume.pdf"
        download="KaelynLongLinResume.pdf"
      >
        Download Resume
      </a>
    </div>
  );
}