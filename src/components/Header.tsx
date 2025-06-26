'use client';

import Link from 'next/link';
import React, { useState, useRef } from 'react';

const Header: React.FC = () => {
  const [isCareerDropdownOpen, setIsCareerDropdownOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsCareerDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsCareerDropdownOpen(false);
    }, 150); // 150ms delay before closing
  };

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
      backgroundColor: 'transparent',
      zIndex: 1000,
      fontFamily: 'var(--font-inter)'
    }}>
      {/* Logo */}
      <div style={{ display: 'flex', alignItems: 'center', height: '75px' }}>
        <Link href="/" aria-label="Home" style={{ display: 'flex', alignItems: 'center', height: '100%', paddingTop: '0.5rem' }}>
          <img src="/FinLogo-white.png" alt="Fin Logo" style={{ height: '65px', display: 'block' }} />
        </Link>
      </div>

      {/* Navigation Links */}
      <nav style={{ display: 'flex', alignItems: 'center' }}>
        <ul style={{ 
          display: 'flex', 
          listStyle: 'none', 
          gap: '1.5rem', 
          margin: 0, 
          padding: 0,
          alignItems: 'center',
          fontFamily: 'var(--font-inter)'
        }}>
          <li><Link href="/about" className="nav-link" style={{ color: '#fff', textDecoration: 'none', fontWeight: '600', fontSize: '1.1rem' }}>About</Link></li>
          <li><Link href="/team" className="nav-link" style={{ color: '#fff', textDecoration: 'none', fontWeight: '600', fontSize: '1.1rem' }}>Team</Link></li>
          <li><Link href="/portfolio" className="nav-link" style={{ color: '#fff', textDecoration: 'none', fontWeight: '600', fontSize: '1.1rem' }}>Portfolio</Link></li>
          <li 
            className="career-dropdown"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{ position: 'relative' }}
          >
            <span className="nav-link" style={{ color: '#fff', textDecoration: 'none', fontWeight: '600', fontSize: '1.1rem', cursor: 'pointer' }}>
              Career
            </span>
            {isCareerDropdownOpen && (
              <div 
                className="dropdown-menu" 
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                style={{
                  position: 'absolute',
                  top: '100%',
                  left: '0',
                  backgroundColor: 'rgba(0, 0, 0, 0.9)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  borderRadius: '8px',
                  padding: '0.5rem 0',
                  minWidth: '180px',
                  zIndex: 1001,
                  marginTop: '0.5rem'
                }}
              >
                <a 
                  href="https://careers.fin.capital/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{
                    display: 'block',
                    padding: '0.75rem 1rem',
                    color: '#fff',
                    textDecoration: 'none',
                    fontSize: '1rem',
                    transition: 'background-color 0.2s ease'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                >
                  Fin Capital
                </a>
                <a 
                  href="https://jobs.fin.capital/jobs" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{
                    display: 'block',
                    padding: '0.75rem 1rem',
                    color: '#fff',
                    textDecoration: 'none',
                    fontSize: '1rem',
                    transition: 'background-color 0.2s ease'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                >
                  Fin Family
                </a>
              </div>
            )}
          </li>
          <li><Link href="/posts" className="nav-link" style={{ color: '#fff', textDecoration: 'none', fontWeight: '600', fontSize: '1.1rem' }}>News & Insights</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;