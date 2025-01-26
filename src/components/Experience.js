"use client";

import React, { useEffect, useState } from "react";
import "./Experience.css";

export default function Experience() {
  const [visibleSections, setVisibleSections] = useState([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = entry.target.getAttribute("data-index");
            setTimeout(() => {
              setVisibleSections((prev) => [...new Set([...prev, index])]);
            }, index * 50);
          }
        });
      },
      { threshold: 0.1 }
    );

    const items = document.querySelectorAll(".experience-timeline-item, .experience-section h1");
    items.forEach((item, index) => {
      item.setAttribute("data-index", index);
      observer.observe(item);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div id="experience" className="experience-section">
      <h1 className={`fade-item ${visibleSections.includes("0") ? "fade-in" : ""}`}>EXPERIENCE</h1>
      <div className="timeline">
      <div
          className={`experience-timeline-item ${visibleSections.includes("2") ? "fade-in" : ""}`}
        >
          <div className="timeline-dot"></div>
          <div className="timeline-connector"></div>
          <div className="timeline-content">
            <h2>Amazon</h2>
            <p><em>Software Development Engineer Intern | Seattle, WA | Summer 2025</em></p>
            <ul className="indented-list">
              <li>Incoming 2025</li>
            </ul>
          </div>
        </div>

        <div
          className={`experience-timeline-item ${visibleSections.includes("2") ? "fade-in" : ""}`}
        >
          <div className="timeline-dot"></div>
          <div className="timeline-connector"></div>
          <div className="timeline-content">
            <h2>University of Michigan</h2>
            <p><em>NLP Researcher and AI Software Developer | Ann Arbor, MI | Nov 2024 - Present</em></p>
            <ul className="indented-list">
              <li>Conduct research on text summarization, evaluating ChatGPT using human methods like Likert scales and pairwise comparisons</li>
              <li>Build web crawlers to benchmark a UMich-developed bot across diverse datasets and automate data preprocessing workflows</li>
            </ul>
          </div>
        </div>

        <div
          className={`experience-timeline-item ${visibleSections.includes("3") ? "fade-in" : ""}`}
        >
          <div className="timeline-dot"></div>
          <div className="timeline-connector"></div>
          <div className="timeline-content">
            <h2>Akima</h2>
            <p><em>Software Engineering Intern | Herndon, VA | Jun - Aug 2024</em></p>
            <ul className="indented-list">
              <li>Designed and developed a robust web-based E911 dispatch system for 179 Air Force bases, leveraging AWS, React, Spring Boot, and Tableau to address 300+ support tickets</li>
              <li>Automated base and ticket tracking with MySQL and Python by creating data validation scripts, ETL pipelines, and real-time API integrations, streamlining updates and improving efficiency</li>
              <li>Led a cross-functional team of 7 as Scrum Master, facilitating Agile practices, refining backlogs, and driving on-time delivery of the project</li>
              <li>Presented the MVP to 50+ stakeholders, including the CEO, senior leadership, and military teams, effectively communicating progress, aligning objectives, and securing buy-in for future phases</li>
            </ul>
          </div>
        </div>

        <div
          className={`experience-timeline-item ${visibleSections.includes("4") ? "fade-in" : ""}`}
        >
          <div className="timeline-dot"></div>
          <div className="timeline-connector"></div>
          <div className="timeline-content">
            <h2>Center for Academic Innovation at UofM</h2>
            <p><em>XR Researcher | Ann Arbor, MI | Oct 2024 - May 2024</em></p>
            <ul className="indented-list">
              <li>Implemented audio functionalities for vocal interaction with virtual patients in a VR application using Google Cloud Speech API, Unreal Engine, and C++, capturing and processing audio input with optimized settings</li>
              <li>Collaborated with medical experts and professors to lead iterative user testing sessions, gathering extensive feedback and analyzing data to drive continuous design improvements and enhance user experience</li>
              <li>Oversaw financial and HR operations for the XR program, managing 32 projects and optimizing performance across 17 schools</li>
            </ul>
          </div>
        </div>

        <div
          className={`experience-timeline-item ${visibleSections.includes("5") ? "fade-in" : ""}`}
        >
          <div className="timeline-dot"></div>
          <div className="timeline-connector"></div>
          <div className="timeline-content">
            <h2>Academic Success Partners</h2>
            <p><em>Private Tutor | Ann Arbor, MI | Apr 2023 - Aug 2024</em></p>
            <ul className="indented-list">
              <li>Provided personalized tutoring to high school students in Ann Arbor for STEM subjects including Calculus AB/BC, Geometry, Algebra I-II, Chemistry, and SAT preparation</li>
              <li>Fostered a supportive and engaging learning environment, building strong rapport with students and achieving measurable academic improvements</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}