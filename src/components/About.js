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
       I’m Kaelyn, a senior at the University of Michigan studying Computer Science. My background includes full-stack development, backend systems, and applied research, and I’m especially interested in scalable infrastructure and high-performance software. In my free time, I enjoy exploring fashion, painting, and reading.
      </p>
    </div>
  );
}
