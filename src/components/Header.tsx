'use client';

import Link from 'next/link';
import React, { useState, useRef, useEffect } from 'react';

const Header: React.FC = () => {
  const [isCareerDropdownOpen, setIsCareerDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Check if screen is mobile size
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);

    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

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

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
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

      {/* Desktop Navigation */}
      {!isMobile && (
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
                Careers
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
            <li>
              <a
                href="https://lighthouse.ai/"
                className="nav-link"
                style={{ color: '#fff', textDecoration: 'none', fontWeight: '600', fontSize: '1.1rem' }}
                target="_blank"
                rel="noopener noreferrer"
              >
                Lighthouse
              </a>
            </li>
          </ul>
        </nav>
      )}

      {/* Mobile Menu Button */}
      {isMobile && (
        <button
          onClick={toggleMobileMenu}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '0.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '4px',
            zIndex: 1002
          }}
          aria-label="Toggle mobile menu"
        >
          <div style={{
            width: '25px',
            height: '3px',
            backgroundColor: '#fff',
            transition: 'all 0.3s ease',
            transform: isMobileMenuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none'
          }} />
          <div style={{
            width: '25px',
            height: '3px',
            backgroundColor: '#fff',
            transition: 'all 0.3s ease',
            opacity: isMobileMenuOpen ? '0' : '1'
          }} />
          <div style={{
            width: '25px',
            height: '3px',
            backgroundColor: '#fff',
            transition: 'all 0.3s ease',
            transform: isMobileMenuOpen ? 'rotate(-45deg) translate(7px, -6px)' : 'none'
          }} />
        </button>
      )}

      {/* Mobile Menu Overlay */}
      {isMobile && isMobileMenuOpen && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.95)',
          zIndex: 1001,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '2rem'
        }}>
          <nav style={{ display: 'flex', alignItems: 'center' }}>
            <ul style={{ 
              display: 'flex', 
              flexDirection: 'column',
              listStyle: 'none', 
              gap: '2rem', 
              margin: 0, 
              padding: 0,
              alignItems: 'center',
              fontFamily: 'var(--font-inter)'
            }}>
              <li>
                <Link 
                  href="/about" 
                  className="nav-link" 
                  style={{ color: '#fff', textDecoration: 'none', fontWeight: '600', fontSize: '1.5rem' }}
                  onClick={closeMobileMenu}
                >
                  About
                </Link>
              </li>
              <li>
                <Link 
                  href="/team" 
                  className="nav-link" 
                  style={{ color: '#fff', textDecoration: 'none', fontWeight: '600', fontSize: '1.5rem' }}
                  onClick={closeMobileMenu}
                >
                  Team
                </Link>
              </li>
              <li>
                <Link 
                  href="/portfolio" 
                  className="nav-link" 
                  style={{ color: '#fff', textDecoration: 'none', fontWeight: '600', fontSize: '1.5rem' }}
                  onClick={closeMobileMenu}
                >
                  Portfolio
                </Link>
              </li>
              <li style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
                <span className="nav-link" style={{ color: '#fff', textDecoration: 'none', fontWeight: '600', fontSize: '1.5rem' }}>
                  Careers
                </span>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', alignItems: 'center' }}>
                  <a 
                    href="https://careers.fin.capital/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{
                      color: '#fff',
                      textDecoration: 'none',
                      fontSize: '1.2rem',
                      padding: '0.5rem 1rem',
                      borderRadius: '4px',
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
                      color: '#fff',
                      textDecoration: 'none',
                      fontSize: '1.2rem',
                      padding: '0.5rem 1rem',
                      borderRadius: '4px',
                      transition: 'background-color 0.2s ease'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                  >
                    Fin Family
                  </a>
                </div>
              </li>
              <li>
                <Link 
                  href="/posts" 
                  className="nav-link" 
                  style={{ color: '#fff', textDecoration: 'none', fontWeight: '600', fontSize: '1.5rem' }}
                  onClick={closeMobileMenu}
                >
                  News & Insights
                </Link>
              </li>
              <li>
                <a
                  href="https://lighthouse.ai/"
                  className="nav-link"
                  style={{ color: '#fff', textDecoration: 'none', fontWeight: '600', fontSize: '1.5rem' }}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMobileMenu}
                >
                  Lighthouse
                </a>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;