"use client";

import React, { useState, useEffect } from 'react';
import './Projects.css';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [visibleProjects, setVisibleProjects] = useState([]);

  const projects = [
    {
      name: "Instagram Clone",
      shortDesc: "Dynamic Instagram clone featuring user accounts, photo uploads, likes, and comments.",
      longDesc: (
        <>
          Developed a dynamic web app using ReactJS, Flask, and custom REST APIs, emulating Instagram features like photo uploads, likes, comments, user following, and session management. Includes infinite scrolling and was deployed to AWS for scalability.<br />
          <br />
          <i>Source code is private; contact kaelynl@umich.edu for access or inquiries.</i>
        </>
      ),
      tags: ["Python", "React", "SQLite", "AWS"]
    },
    {
      name: "Wikipedia Search Engine and Custom MapReduce Server",
      shortDesc: "Scalable search engine and fault-tolerant MapReduce server, supporting efficient text processing, indexing, and ranking with tf-idf scores.",
      longDesc: (
        <>
          Developed a multi-worker and fault-tolerant MapReduce server in Python using threading and TCP to process user-submitted tasks. Built a scalable search engine from scratch in ReactJS based on text segmentation, Hadoop MapReduce indexing, and tf-idf scores. Allows users to query Wikipedia pages and return a list of results ordered by relevance.<br />
          <br />
          <i>Source code is private; contact kaelynl@umich.edu for access or inquiries.</i>
        </>
      ),
      tags: ["Python", "React", "Hadoop", "AWS"]
    },
    {
      name: "LC-2K",
      shortDesc: "Custom RISC architecture involving pipeline assembly, cache simulation, and linking.",
      longDesc: (
        <>
          Developed a custom RISC architecture that converts assembly code into machine code for execution simulation. Includes a pipeline assembler with forwarding and stall mechanisms to manage hazards, a cache simulator supporting various mapping techniques, and a linker to combine object files into executables.<br />
          <br />
          <i>Source code is private; contact kaelynl@umich.edu for access or inquiries.</i>
        </>
      ),
      tags: ["C"]
    },
    {
      name: "DSA Class Projects",
      shortDesc: "A series of C++ projects demonstrating proficiency in data structures, algorithms, and optimization techniques.",
      longDesc: (
        <>
          <strong>Word Morphing:</strong> Designed BFS and DFS algorithms for customizable word transformations (e.g., letter changes, insertions, deletions, swaps), enabling efficient graph search and route tracing within complex dictionaries.<br />
          <strong>Mine Escape:</strong> Developed a pathfinding simulation employing priority-based search algorithms, custom priority queues using binary heaps and sorted arrays, optimizing tile discovery in grid-based environments.<br />
          <strong>Database Query Language:</strong> Built a command-line shell emulating a relational database, featuring a simplified SQL-like query language and leveraging dynamic arrays, hash tables, and binary search trees for efficient table management and query execution.<br />
          <strong>Drone Delivery:</strong> Implemented fast route tracking across a simulated campus using MST, branch and bound, and Kruskal’s algorithms, alongside heuristic approaches such as TSP and Knapsack to achieve near-optimal results.<br />
          <strong>Euchre:</strong> Developed a text-based simulator of popular card game, Euchre, supporting gameplay for up to 4 AI/human players to learn about abstract data types, object-oriented programming, and polymorphism.<br />
          <br />
          <i>Source code is private; contact kaelynl@umich.edu for access or inquiries.</i>
        </>
      ),
      tags: ["C++"]
    },
    {
      name: "Personal Website",
      shortDesc: "Personal portfolio showcasing projects, skills, and experience.",
      longDesc: "You're viewing it! Designed and built from scratch to highlight professional experience, projects, and skills while incorporating animations and interactive elements. Features accessibility optimizations to enhance user experience, including keyboard navigation, reduced motion support, and a fully responsive design.",
      tags: ["Next.js", "CSS"],
      image: "/images/personalWebsite.png"
    },
    { name: "View All", shortDesc: "Explore more projects on GitHub" },
  ];

  const handleProjectClick = (project) => {
    if (project.name === "View All") {
      window.open("https://github.com/kaelynlong?tab=repositories", "_blank");
    } else {
      setSelectedProject(project);
    }
  };

  const closePopup = () => {
    setSelectedProject(null);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = entry.target.getAttribute("data-index");
            setTimeout(() => {
              setVisibleProjects((prev) => [...new Set([...prev, index])]);
            }, index * 100);
          }
        });
      },
      { threshold: 0.1 }
    );

    const items = document.querySelectorAll(".project-tile");
    items.forEach((item, index) => {
      item.setAttribute("data-index", index);
      observer.observe(item);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div id="projects" className="projects-section">
      <div className="projects-container">
        <h1>PROJECTS</h1>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`project-tile ${visibleProjects.includes(index.toString()) ? "fade-in" : ""} ${
                project.name === "View All" ? "view-all" : ""
              }`}
              onClick={() => handleProjectClick(project)}
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleProjectClick(project);
              }}
            >
              <div className="project-info">
                <h2>
                  {project.name}
                  {project.name === "View All" && (
                    <span className="project-arrow">
                      <img src="/images/arrow.png" alt="Arrow" />
                    </span>
                  )}
                </h2>
                <p>{project.shortDesc}</p>
                {project.tags && (
                  <div className="tags">
                    {project.tags.map((tag, idx) => (
                      <span key={idx} className="tag">{tag}</span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <div
          className="project-popup-overlay"
          onClick={closePopup}
        >
          <div
            className="project-popup"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="popup-content">
              <button className="close-button" onClick={closePopup}>
                <img src="/images/closeIcon.png" alt="Close" />
              </button>
              {selectedProject.image && (
                <img src={selectedProject.image} alt={selectedProject.name} className="popup-image" />
              )}
              <div className="popup-details">
                <h2>
                  {selectedProject.name === "Personal Website" ? (
                    <a
                      href="https://github.com/kaelynlong/personal-website"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {selectedProject.name}
                    </a>
                  ) : (
                    selectedProject.name
                  )}
                </h2>
                <p>{selectedProject.longDesc}</p>
                <div className="tags">
                  {selectedProject.tags.map((tag, idx) => (
                    <span key={idx} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
