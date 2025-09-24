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
            <li>Built and deployed a Java-based CloudFormation Hook (Lambda) that classified IAM roles/users for safe deletion, reducing review time by 80% and lowering misconfiguration risk in production.</li>
            <li>Implemented a fault-tolerant evaluation engine with retry/backoff and structured logging, ensuring reliability under high API loads and throttling.</li>
            <li>Automated cleanup of IAM resources (keys, MFA, policies), enforcing end-to-end safety constraints.</li>
            <li>Added CI/CD pipelines and integration test harnesses to validate scenarios at scale.</li>
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
              <li>Evaluated LLM summarization on 6 datasets across politics/psych/society using 18 model–prompt configs; benchmarked using ROUGE-L, BERTScore, and human evaluation (𝜅 = 0.76).</li>
              <li>Built a high-throughput crawler and ETL pipeline that automated data ingestion and versioning, reducing setup time and enabling rapid experimentation.</li>
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
              <li>Led a 4-person team to deliver an Air Force E911 system (React, Spring Boot, AWS) supporting 179 bases worldwide.</li>
              <li>Designed MySQL schema and Python automation for live geolocation and status propagation; migrated legacy data with full integrity checks.</li>
              <li>Presented MVP and system architecture to 50+ stakeholders including executives and military personnel.</li>
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
              <li>Implemented real-time voice interaction features using Unreal/C++ and Google Cloud Speech, achieving 𝑝95 latency ≤ 170 ms and reducing clinical-phrase WER from 11% to 8.6%.</li>
              <li>Optimized the audio pipeline (VAD, buffering, threading) to sustain 60 FPS during interaction with ≤ 1 dropped frame per 10 min in testing.</li>
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