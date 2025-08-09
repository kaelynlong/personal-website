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
        I’m Kaelyn Long Lin, a senior at the University of Michigan’s College of Engineering, studying Computer Science with a minor in UX Design. I’m passionate about combining design and technology to create practical, well-crafted solutions.
      </p>
      <p className={`about-description ${visibleSections.includes("1") ? "fade-in" : ""}`}>
        My experience ranges from software engineering internships and AI/ML research to leading student organizations, with a focus on building products that are intuitive and effective.
      </p>
      <p className={`about-description ${visibleSections.includes("2") ? "fade-in" : ""}`}>
        In my free time, I like exploring fashion, painting, and reading—hobbies that keep me creative and inspired.
      </p>
    </div>
  );
}
