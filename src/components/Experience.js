// components/Experience.js
import React from 'react';
import './Experience.css';

export default function Experience() {
  return (
    <div className="experience-section">
      <h1>EXPERIENCE</h1>
      <div className="timeline">

        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-connector"></div>
          <div className="timeline-content">
            <h2>BlackRock</h2>
            <p><em>Incoming Software Engineer Intern | New York, NY | Jun - Aug 2025</em></p>
            <p>Aladdin Engineering Team</p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-connector"></div>
          <div className="timeline-content">
            <h2>University of Michigan</h2>
            <p><em>NLP Researcher and AI Software Developer | Ann Arbor, MI | Nov 2024 - Present</em></p>
            <p>Built and optimized responsive UI components, collaborated with UX designers, and implemented accessibility improvements.</p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-connector"></div>
          <div className="timeline-content">
            <h2>Akima</h2>
            <p><em>Software Engineering Intern | Herndon, VA | Jun - Aug 2024</em></p>
            <p>Built an Air Force E911 dispatch system from scratch for 179 bases, processing 300+ support tickets with AWS, React, and Spring Boot. Automated ticket tracking and data management with Python and MySQL. Showcased to 50+ stakeholders, including the CEO, group presidents, and military teams.</p>
          </div>
        </div>
        
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-connector"></div>
          <div className="timeline-content">
          <h2>Center for Academic Innovation at UofM</h2>
            <p><em>XR Researcher | Ann Arbor, MI | Oct 2024 - May 2024</em></p>
            <p>
                Conducted data analysis and visualization, built predictive models, and created reports to drive business insights.
            </p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-connector"></div>
          <div className="timeline-content">
          <h2>Academic Success Partners</h2>
            <p><em>Private Tutor | Ann Arbor, MI | Apr 2023 - Aug 2024</em></p>
            <p>
                Conducted data analysis and visualization, built predictive models, and created reports to drive business insights.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
