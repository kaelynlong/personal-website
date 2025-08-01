import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <ul className="footer-info">
          <li>Coded in VS Code, built with Next.js and custom CSS, deployed with Vercel</li>
          <li>
            Contact: <a href="mailto:kaelynl@umich.edu">kaelynl@umich.edu</a>
          </li>
        </ul>
        <div className="footer-copyright">
          © 2025 KAELYN LONG
        </div>
      </div>
    </footer>
  );
}