"use client";

import React, { useState } from "react";
import "./Navbar.css";

export default function Navbar() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const closeSidebar = () => {
        setIsSidebarOpen(false);
    };

    return (
        <>
            {/* Announcement Bar */}
            <div className="announcement-bar">
                ˚ ༘♡ ⋆｡˚ Last updated Nov 2024 ˚୨୧⋆｡˚ ⋆
            </div>

            {/* Navbar */}
            <header className="navbar">
                <nav className="navbar-content">
                    <div className="navbar-logo">
                        <img
                            src="/images/kaelynLong1.png"
                            alt="Kaelyn Long"
                            className="logo-image"
                        />
                    </div>
                    <ul className="navbar-links">
                        <li>
                            <a href="#about">ABOUT</a>
                        </li>
                        <li>
                            <a href="#skills">SKILLS</a>
                        </li>
                        <li>
                            <a href="#education">EDUCATION</a>
                        </li>
                        <li>
                            <a href="#experience">EXPERIENCE</a>
                        </li>
                        <li>
                            <a href="#projects">PROJECTS</a>
                        </li>
                    </ul>
                    <div className="navbar-icons">
                        <a
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src="/images/linkedinLogo.png"
                                alt="LinkedIn Logo"
                                className="navbar-icon"
                            />
                        </a>
                        <a
                            href="https://github.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src="/images/githubLogo.png"
                                alt="GitHub Logo"
                                className="navbar-icon"
                            />
                        </a>
                        <img
                            src="/images/hamburger.png"
                            alt="Menu"
                            className="hamburger-menu"
                            onClick={toggleSidebar}
                        />
                    </div>
                </nav>
                {/* Sticky Divider */}
                <div className="navbar-divider"></div>
            </header>

            {/* Sidebar Overlay and Sidebar */}
            <div
                className={`sidebar-overlay ${
                    isSidebarOpen ? "open" : ""
                }`}
                onClick={closeSidebar}
            ></div>
            <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
                <button
                    className="close-button"
                    onClick={closeSidebar}
                ></button>
                <ul className="sidebar-links">
                    <li>
                        <a href="#about" onClick={closeSidebar}>
                            ABOUT
                        </a>
                    </li>
                    <li>
                        <a href="#skills" onClick={closeSidebar}>
                            SKILLS
                        </a>
                    </li>
                    <li>
                        <a href="#education" onClick={closeSidebar}>
                            EDUCATION
                        </a>
                    </li>
                    <li>
                        <a href="#experience" onClick={closeSidebar}>
                            EXPERIENCE
                        </a>
                    </li>
                    <li>
                        <a href="#projects" onClick={closeSidebar}>
                            PROJECTS
                        </a>
                    </li>
                </ul>
            </div>
        </>
    );
}