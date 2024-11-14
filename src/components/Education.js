// components/Education.js
import React from 'react';
import './Education.css';

export default function Education() {
  return (
    <div className="education-section">
      <h1>EDUCATION</h1>
      <div className="timeline">
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-connector"></div>
          <div className="timeline-content">
            <h2>University of Michigan</h2>
            <p><em>Bachelors Degree | 2022 - 2026</em></p>
            <p><strong>Major:</strong> Computer Science</p>
            <p><strong>Minor:</strong> UX Design and Statistics</p>
            <p><strong>Relevant Coursework:</strong> Data Structures and Algorithms, Computer Organization and Hardware, Web Applications and Systems, Computer Science Pragmatics, Robotics Mechanisms, Statistical Computing, Discrete Mathematics, Applied Linear Algebra, Probability and Statistics for Engineers, Calculus I-III</p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-connector"></div>
          <div className="timeline-content">
          <h2>The George Washington University</h2>
            <p><em>High School Dual Credit</em></p>
            <p><strong>Relevant Coursework:</strong> Introduction to Software Development, Introduction to Programming with Python</p>
          </div>
        </div>
        
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-connector"></div>
          <div className="timeline-content">
          <h2>School Without Walls</h2>
            <p><em>High School Diploma | 2018 - 2022</em></p>
            <p><strong>#1 High School</strong> in District of Columbia by U.S. News & World Report</p>
          </div>
        </div>
      </div>
    </div>
  );
}
