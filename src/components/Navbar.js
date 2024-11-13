// components/Navbar.js
"use client";

import React, { useState } from 'react';
import './Navbar.css'; // CSS file for styling

export default function Navbar() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <header className="navbar">
        {/* Announcement Bar */}
        <div className="announcement-bar">
            °♡ ⋆ Last updated Nov 2024 ⋆ °♡
        </div>

        {/* Navbar */}
        <nav className="navbar-content">
            <div className="navbar-logo">
                <img src="/images/kaelynLong1.png" alt="Kaelyn Long" className="logo-image" />
            </div>
            <ul className="navbar-links">
            <li><a href="#about">ABOUT</a></li>
            <li><a href="#education">EDUCATION</a></li>
            <li><a href="#experience">EXPERIENCE</a></li>
            <li><a href="projects">PROJECTS</a></li>
            <li><a href="#skills">SKILLS</a></li>
            </ul>
            <div className="navbar-icons">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                    <img src="/images/linkedinLogo.png" alt="LinkedIn Logo" className="navbar-icon" />
                </a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                    <img src="/images/githubLogo.png" alt="GitHub Logo" className="navbar-icon" />
                </a>
                <img
                    src="/images/hamburger.png"
                    alt="Menu"
                    className="hamburger-menu"
                    onClick={toggleSidebar}
                />
            </div>
        </nav>

        {/* Sidebar for Mobile Menu */}
        {isSidebarOpen && (
            <div className="sidebar-overlay" onClick={toggleSidebar}>
            <div className="sidebar" onClick={(e) => e.stopPropagation()}>
                <button className="close-button" onClick={toggleSidebar}>×</button>
                <ul className="sidebar-links">
                <li><a href="#about">ABOUT</a></li>
                <li><a href="#education">EDUCATION</a></li>
                <li><a href="#experience">EXPERIENCE</a></li>
                <li><a href="projects">PROJECTS</a></li>
                <li><a href="#skills">SKILLS</a></li>
                <li><a href="#login">LOG IN</a></li>
                </ul>
            </div>
            </div>
        )}

        {/* Divider */}
        <div className="navbar-divider"></div>
        </header>
    );
}
