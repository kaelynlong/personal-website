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
            setVisibleSections((prev) => (prev.includes(index) ? prev : [...prev, index]));
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

    return () => {
      paragraphs.forEach((p) => observer.unobserve(p)); // Clean up observers
      observer.disconnect();
    };
  }, []);

  return (
    <div id="about" className="about-section">
      <h1>ABOUT</h1>
      <p className={`about-description ${visibleSections.includes("0") ? "fade-in" : ""}`}>
        I’m Kaelyn Long Lin, a third-year student at the University of Michigan’s College of Engineering, studying Computer Science with a minor in UX Design. I’m passionate about creating accessible, polished user interfaces that blend thoughtful design with engineering precision.
      </p>
      <p className={`about-description ${visibleSections.includes("1") ? "fade-in" : ""}`}>
        Through software engineering internships, AI/ML research, and leadership in student organizations, I’ve developed a strong background in both creative and analytical aspects of technology, fueling my dedication to innovative solutions.
      </p>
      <p className={`about-description ${visibleSections.includes("2") ? "fade-in" : ""}`}>
        In my free time, I enjoy exploring fashion, painting, and reading, which inspire my creativity and bring fresh perspectives to my work.
      </p>
    </div>
  );
}
