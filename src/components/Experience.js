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
            const totalItems = 6;
            for (let i = 0; i < totalItems; i++) {
              setTimeout(() => {
                setVisibleSections((prev) => [...new Set([...prev, String(i)])]);
              }, i * 150);
            }
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );

    const heading = document.querySelector(".experience-section h1");
    if (heading) observer.observe(heading);

    return () => observer.disconnect();
  }, []);

  return (
    <div id="experience" className="experience-section">
      <h1 className={`fade-item ${visibleSections.includes("0") ? "fade-in" : ""}`}>EXPERIENCE</h1>
      <div className="timeline">
      <div
        className={`experience-timeline-item ${visibleSections.includes("1") ? "fade-in" : ""}`}
      >
        <div className="timeline-dot"></div>
        <div className="timeline-connector"></div>
        <div className="timeline-content">
          <h2>Amazon</h2>
          <p><em>Software Development Engineer Intern | Seattle, WA | May - Aug 2025</em></p>
          <ul className="indented-list">
            <li>Reduced IAM deletion review time by 80% by designing and deploying a Java-based CloudFormation Hook on AWS Lambda,
            collaborating with the IAM security team to formalize deletion safety policies adopted across internal teams.</li>
            <li>Built fault-tolerant evaluation logic with exponential backoff, structured logging, and automated failure recovery to maintain
            pipeline reliability under API throttling and high request volume.</li>
            <li>Designed the Hook's IAM/EC2 boundary resolution layer to handle concurrent resource propagation, with DynamoDB-backed
            caching reducing redundant API calls by 70% and enabling consistent policy enforcement at scale.</li>
            <li>Implemented a CloudWatch observability layer with custom metrics, latency dashboards, and automated alarms to monitor
            Hook invocations and failure rates in production across multiple accounts.</li>
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
              <li>Built a scalable ETL pipeline with automated ingestion, preprocessing, and versioning for 10K+ documents across 18 model-prompt
              configurations, reducing experiment setup time by over 50%.</li>
              <li>Deployed a vector-indexed retrieval system (FAISS) over processed corpora to support RAG-based summarization, improving
              ROUGE-L from 0.34 to 0.38 on XSum using LLaMA-2 with retrieval-augmented prompting.</li>
              <li>Developed a FastAPI model-serving layer supporting on-demand inference across 3 LLM families (GPT, LLaMA, Mistral), with
              batched request handling and structured logging for reproducible benchmark evaluation.</li>
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
              <li>Led a 4-person team building an Air Force E911 dispatch system serving 179 military bases, achieving sub-200ms end-to-end
              delivery for real-time emergency coordination.</li>
              <li>Designed an event-driven WebSocket architecture with geofenced routing, priority queuing, and live state synchronization,
              enabling dispatchers to receive streaming incident updates without polling.</li>
              <li>Built an automated legacy-data migration pipeline processing 20K+ records with referential integrity validation, achieving
              zero-downtime cutover across all 179 bases.</li>
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