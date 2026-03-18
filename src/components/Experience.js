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
            <li>Built and deployed a Java-based CloudFormation Hook on AWS Lambda to enforce safe IAM deletion workflows, reducing
            review time by 80% and lowering security risk from invalid deletions.</li>
            <li>Engineered a fault-tolerant evaluation pipeline with retry/backoff, structured logging, and automated failure handling to maintain
            reliability under API throttling and high request volume.</li>
            <li>Automated cleanup of IAM resources including access keys, MFA devices, and policies while enforcing safety constraints across
            dependent resources.</li>
            <li>Developed CI/CD pipelines and integration tests to validate end-to-end correctness across deletion and rollback scenarios.</li>
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
              <li>Evaluated LLM summarization performance across 6 datasets and 18 model-prompt configurations using ROUGE-L, BERTScore,
              and human evaluation, achieving inter-rater agreement of 𝜅 = 0.76.</li>
              <li>Built a high-throughput crawler and ETL pipeline for dataset ingestion, preprocessing, and versioning, automating experiment
              setup across multiple summarization datasets and reducing manual preparation time.</li>
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
              <li>Led a 4-person team building an Air Force E911 dispatch system using React, Spring Boot, AWS, and MySQL to support
              emergency operations across 179 military bases.</li>
              <li>Designed the relational schema and backend data pipeline for live geolocation and status propagation, including migration logic
              and integrity checks for legacy records.</li>
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
              <li>Built real-time voice interaction features in Unreal/C++, achieving 𝑝95 latency below 170 ms. </li>
              <li>Optimized audio processing with VAD, buffering, and multithreading to maintain 60 FPS with near-zero dropped frames.</li>
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
              <li>Provided personalized tutoring to high school students in Ann Arbor for STEM subjects including Calculus AB/BC, Geometry, Algebra I-II, Chemistry, and SAT preparation.</li>
              <li>Fostered a supportive and engaging learning environment, building strong rapport with students and achieving measurable academic improvements.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}