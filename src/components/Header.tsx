'use client';

import Link from 'next/link';
import React from 'react';

const Header: React.FC = () => {
  return (
    <header style={{ 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'space-between', 
      padding: '1rem 2rem',
      height: '75px',
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      backgroundColor: 'white',
      zIndex: 1000
    }}>
      {/* Logo */}
      <div>
        <a href="/" aria-label="Home">
          {/* Replace with actual logo image or SVG */}
          <img src="/FinLogo.png" alt="Fin Logo" style={{ height: '75px' }} />
        </a>
      </div>

      {/* Navigation Links */}
      <nav style={{ display: 'flex', alignItems: 'center' }}>
        <ul style={{ 
          display: 'flex', 
          listStyle: 'none', 
          gap: '1.5rem', 
          margin: 0, 
          padding: 0,
          alignItems: 'center'
        }}>
          <li><a href="/companies" className="nav-link" style={{ color: 'black', textDecoration: 'none', fontWeight: 'bold' }}>Companies</a></li>
          <li><a href="/team" className="nav-link" style={{ color: 'black', textDecoration: 'none', fontWeight: 'bold' }}>Team</a></li>
          <li><a href="/posts" className="nav-link" style={{ color: 'black', textDecoration: 'none', fontWeight: 'bold' }}>News & Insights</a></li>
          <li><a href="/explore" className="nav-link" style={{ color: 'black', textDecoration: 'none', fontWeight: 'bold' }}>Explore</a></li>
        </ul>
      </nav>

      <style jsx>{`
        .nav-link {
          position: relative;
          text-decoration: none;
        }
        
        .nav-link::after {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          bottom: -2px;
          left: 0;
          background-color: black;
          transition: width 0.3s ease-in-out;
        }
        
        .nav-link:hover::after {
          width: 100%;
        }
      `}</style>
    </header>
  );
};

export default Header;