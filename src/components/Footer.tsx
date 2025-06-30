'use client';

import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <>
      <footer style={{
        backgroundColor: '#1E2332',
        color: 'white',
        padding: '1rem 2rem',
        width: '100%',
        marginTop: 'auto',
        fontFamily: 'var(--font-inter)'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.5rem'
        }}>
          {/* Main Footer Content */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '2rem'
          }}>
            {/* Navigation Links Section */}
            <nav style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
              <Link href="/contact" style={{ textDecoration: 'none', color: 'white', fontWeight: 600, fontSize: '1rem', transition: 'opacity 0.2s, text-decoration 0.2s' }}
                onMouseEnter={e => { e.currentTarget.style.opacity = '0.7'; e.currentTarget.style.textDecoration = 'underline'; }}
                onMouseLeave={e => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.textDecoration = 'none'; }}>
                Contact Us
              </Link>
              <Link href="/about" style={{ textDecoration: 'none', color: 'white', fontWeight: 600, fontSize: '1rem', transition: 'opacity 0.2s, text-decoration 0.2s' }}
                onMouseEnter={e => { e.currentTarget.style.opacity = '0.7'; e.currentTarget.style.textDecoration = 'underline'; }}
                onMouseLeave={e => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.textDecoration = 'none'; }}>
                About
              </Link>
              <Link href="/team" style={{ textDecoration: 'none', color: 'white', fontWeight: 600, fontSize: '1rem', transition: 'opacity 0.2s, text-decoration 0.2s' }}
                onMouseEnter={e => { e.currentTarget.style.opacity = '0.7'; e.currentTarget.style.textDecoration = 'underline'; }}
                onMouseLeave={e => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.textDecoration = 'none'; }}>
                Team
              </Link>
              <Link href="/portfolio" style={{ textDecoration: 'none', color: 'white', fontWeight: 600, fontSize: '1rem', transition: 'opacity 0.2s, text-decoration 0.2s' }}
                onMouseEnter={e => { e.currentTarget.style.opacity = '0.7'; e.currentTarget.style.textDecoration = 'underline'; }}
                onMouseLeave={e => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.textDecoration = 'none'; }}>
                Portfolio
              </Link>
              <a href="https://lighthouse.ai/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'white', fontWeight: 600, fontSize: '1rem', transition: 'opacity 0.2s, text-decoration 0.2s' }}
                onMouseEnter={e => { e.currentTarget.style.opacity = '0.7'; e.currentTarget.style.textDecoration = 'underline'; }}
                onMouseLeave={e => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.textDecoration = 'none'; }}>
                Lighthouse
              </a>
            </nav>

            {/* Social Media Icons */}
            <div style={{
              display: 'flex',
              gap: '1rem',
              alignItems: 'center'
            }}>
              {/* LinkedIn */}
              <a 
                href="https://www.linkedin.com/company/fin-capital-vc/" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{
                  color: 'white',
                  textDecoration: 'none',
                  transition: 'opacity 0.2s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.opacity = '0.7'}
                onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>

              {/* YouTube */}
              <a 
                href="https://www.youtube.com/channel/UCAkHU3akvs6aIKeWtbWorjg" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{
                  color: 'white',
                  textDecoration: 'none',
                  transition: 'opacity 0.2s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.opacity = '0.7'}
                onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>

              {/* X (Twitter) */}
              <a 
                href="https://x.com/Fin_Capital_VC" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{
                  color: 'white',
                  textDecoration: 'none',
                  transition: 'opacity 0.2s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.opacity = '0.7'}
                onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              {/* Bluesky */}
              <a 
                href="https://bsky.app/profile/fin-capital-vc.bsky.social" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{
                  color: 'white',
                  textDecoration: 'none',
                  transition: 'opacity 0.2s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.opacity = '0.7'}
                onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
              >
                <svg width="24" height="21" viewBox="0 0 600 530" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: 'inline-block', verticalAlign: 'middle' }}>
                  <path d="m135.72 44.03c66.496 49.921 138.02 151.14 164.28 205.46 26.262-54.316 97.782-155.54 164.28-205.46 47.98-36.021 125.72-63.892 125.72 24.795 0 17.712-10.155 148.79-16.111 170.07-20.703 73.984-96.144 92.854-163.25 81.433 117.3 19.964 147.14 86.092 82.697 152.22-122.39 125.59-175.91-31.511-189.63-71.766-2.514-7.3797-3.6904-10.832-3.7077-7.8964-0.0174-2.9357-1.1937 0.51669-3.7077 7.8964-13.714 40.255-67.233 197.36-189.63 71.766-64.444-66.128-34.605-132.26 82.697-152.22-67.108 11.421-142.55-7.4491-163.25-81.433-5.9562-21.282-16.111-152.36-16.111-170.07 0-88.687 77.742-60.816 125.72-24.795z" fill="#fff"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Copyright */}
          <div style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            paddingTop: '0.5rem',
            textAlign: 'center',
            fontSize: '0.8rem',
            color: 'rgba(255, 255, 255, 0.7)',
            fontWeight: '400'
          }}>
            © {new Date().getFullYear()} Fin. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer; 