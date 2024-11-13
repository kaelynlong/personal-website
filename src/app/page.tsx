// app/page.tsx
import React from 'react';
import Navbar from '../components/Navbar';

export default function HomePage() {
  return (
    <>
      <Navbar />
      {/* Main content goes here */}
      <div style={{ padding: '2rem', textAlign: 'center' }}>
        <h1>ABOUT</h1>
        {/* Add the rest of your page content here */}
      </div>
    </>
  );
}
