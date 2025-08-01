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
        I’m Kaelyn Long Lin, a senior at the University of Michigan’s College of Engineering, majoring in Computer Science with a UX Design minor. I blend creative vision with technical precision to solve complex problems and turn ideas into scalable solutions.
      </p>
      <p className={`about-description ${visibleSections.includes("1") ? "fade-in" : ""}`}>
        From software engineering internships and AI/ML research to leading student organizations, I leverage analytical rigor and inventive flair to deliver user-centric products.
      </p>
      <p className={`about-description ${visibleSections.includes("2") ? "fade-in" : ""}`}>
        In my free time, you’ll find me exploring fashion, painting, or reading—passions that spark fresh perspectives and keep my work inspired.
      </p>
    </div>
  );
}
