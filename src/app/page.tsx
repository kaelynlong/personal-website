// app/page.tsx
import React from 'react';
import Navbar from '../components/Navbar';
import About from '../components/About';
import Education from '../components/Education';
import Experience from '../components/Experience';
import Footer from '../components/Footer';

export default function HomePage() {
  return (
    <>
      <Navbar />
      {/* Main content goes here */}
      <div style={{ padding: '2rem', textAlign: 'center' }}>
        <About />
      </div>
      <div style={{ padding: '2rem', textAlign: 'center' }}>
        <Education />
      </div>
      <div style={{ padding: '2rem', textAlign: 'center' }}>
        <Experience />
      </div>
      <Footer />
    </>
  );
}
