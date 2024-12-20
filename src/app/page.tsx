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
      <main style={{ padding: '2rem', textAlign: 'center' }}>
        <div>
          <About />
        </div>
        <div>
          <Skills />
        </div>
        <div>
          <Education />
        </div>
        <div>
          <Experience />
        </div>
        <div>
          <Projects />
        </div>
      </main>
      <Footer />
    </>
  );
}
