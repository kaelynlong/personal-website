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
          <p><em>Software Development Engineer Intern | Seattle, WA | May - Aug 2025</em></p>
          <ul className="indented-list">
            <li>Built and deployed a Java-based AWS Lambda CloudFormation Hook that automatically classifies safety of IAM roles, users, and groups for deletion using Access Advisor data, reducing manual audits and preventing accidental deletions in production</li>
            <li>Extended solution to handle access keys, MFA devices, group memberships, and detached managed policies, enabling automated cleanup aligned with AWS IAM constraints through ARN normalization and policy detachment logic</li>
            <li>Led end-to-end development and testing, designing a fault-tolerant evaluation engine with retry-safe logic, structured CloudWatch logging, and full JUnit5 test coverage for API edge cases, throttling, and propagation delays</li>
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
              <li>Conduct research on text summarization, evaluating different LLMs using human methods</li>
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
              <li>Led a team of 7 as Scrum Master to engineer a web-based Air Force E911 dispatch software system from scratch for 179 bases using AWS, React, Spring Boot, and Tableau, processing over 300 support tickets</li>
              <li>Implemented MySQL database and utilized Python scripting to manage and track bases and tickets, automating updates</li>
              <li>Presented to over 50 stakeholders, including the CEO, group presidents, and military teams, showcasing the functional MVP</li>
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
              <li>Implemented audio functionalities for vocal interaction with virtual patients in a VR application using Google Cloud Speech API, Unreal Engine, and C++, capturing and processing auction input with optimized settings</li>
              <li>Collaborated with medical experts and professors to lead iterative user testing sessions and drive continuous design improvements</li>
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