'use client'
import Link from 'next/link';
import React from 'react';

const PortfolioHeader: React.FC = () => {
  return (
    <header style={{ 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'space-between', 
      padding: '1rem 2rem',
      height: '75px',
      position: 'relative',
      backgroundColor: 'transparent',
      zIndex: 1000,
      width: '100%',
      fontFamily: 'var(--font-inter)'
    }}>
      {/* Logo */}
      <div style={{ display: 'flex', alignItems: 'center', height: '75px' }}>
        <a href="/" aria-label="Home" style={{ display: 'flex', alignItems: 'center', height: '100%', paddingTop: '0.5rem' }}>
          <img src="/FinLogo-white.png" alt="Fin Logo" style={{ height: '50px', display: 'block' }} />
        </a>
      </div>

      {/* Navigation Links */}
      <nav style={{ display: 'flex', alignItems: 'center', marginRight: '0.95rem' }}>
        <ul style={{ 
          display: 'flex', 
          listStyle: 'none', 
          gap: '1.5rem', 
          margin: 0, 
          padding: 0,
          alignItems: 'center',
          fontFamily: 'var(--font-inter)'
        }}>
          <li><a href="/about" className="nav-link" style={{ color: 'white', textDecoration: 'none', fontWeight: '600', fontSize: '1.1rem' }}>About</a></li>
          <li><a href="/team" className="nav-link" style={{ color: 'white', textDecoration: 'none', fontWeight: '600', fontSize: '1.1rem' }}>Team</a></li>
          <li><a href="/portfolio" className="nav-link" style={{ color: 'white', textDecoration: 'none', fontWeight: '600', fontSize: '1.1rem' }}>Portfolio</a></li>
          <li><a href="/posts" className="nav-link" style={{ color: 'white', textDecoration: 'none', fontWeight: '600', fontSize: '1.1rem' }}>News & Insights</a></li>
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
          background-color: white;
          transition: width 0.3s ease-in-out;
        }
        .nav-link:hover::after {
          width: 100%;
        }
      `}</style>
    </header>
  );
};

export default PortfolioHeader; 