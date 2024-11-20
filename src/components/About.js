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
        I’m a third-year computer science student at the University of Michigan’s College of Engineering, with a minor in UX Design and Statistics. I’m passionate about creating accessible, polished user interfaces that seamlessly combine design creativity with the precision of engineering.
      </p>
      <p className={`about-description ${visibleSections.includes("1") ? "fade-in" : ""}`}>
        Beyond UI and accessibility, I’m also deeply interested in statistics and quantitative algorithms, which fuel my approach to problem-solving and drive my fascination with the data-driven aspects of software design. I’m motivated by a commitment to innovative thinking and aspire to build solutions that don’t just meet user needs but push the boundaries of what’s possible in technology.
      </p>
      <p className={`about-description ${visibleSections.includes("2") ? "fade-in" : ""}`}>
        In the past, I’ve had the opportunity to apply these skills in various contexts — from internships and research to student organizations — where I’ve been able to develop a strong foundation in both creative and analytical approaches to technology. These experiences have solidified my dedication to making a positive impact through tech, through both user-centered design and data-driven innovation.
      </p>
      <p className={`about-description ${visibleSections.includes("3") ? "fade-in" : ""}`}>
        In my free time, I enjoy exploring fashion, painting, and reading. I’m always excited to bring together these interests to shape projects that bridge creativity with practical solutions that drive lasting change.
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