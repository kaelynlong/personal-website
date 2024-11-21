"use client";

import React from "react";
import "./fab.css";

export default function FloatingActionButton() {
  const toggleDarkMode = () => {
    // Logic to toggle dark mode
    console.log("Dark mode toggled!");
  };

  return (
    <div className="fab-container">
      {/* Dark Mode FAB */}
      <button className="fab" onClick={toggleDarkMode}>
        <img
          src="/images/darkMode.png"
          alt="Dark Mode"
          className="fab-icon"
        />
      </button>
    </div>
  );
}