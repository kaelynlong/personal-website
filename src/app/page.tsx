"use client";

import React from 'react';
import Navbar from '../components/Navbar';
import About from '../components/About';
import Education from '../components/Education';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Footer from '../components/Footer';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <div style={{ padding: '2rem', textAlign: 'center' }}>
        <About />
      </div>
      <div style={{ padding: '2rem', textAlign: 'center' }}>
        <Skills />
      </div>
      <div style={{ padding: '2rem', textAlign: 'center' }}>
        <Education />
      </div>
      <div style={{ padding: '2rem', textAlign: 'center' }}>
        <Experience />
      </div>
      <div style={{ padding: '2rem', textAlign: 'center' }}>
        <Projects />
      </div>
      <Footer />
    </>
  );
}