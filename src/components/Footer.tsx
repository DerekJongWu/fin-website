'use client';

import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer style={{
      backgroundColor: '#1E2332',
      color: 'white',
      padding: '1.5rem 2rem',
      width: '100%',
      marginTop: 'auto'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        gap: '0.75rem'
      }}>
        {/* Address Section */}
        <div>
          <h3 style={{ 
            fontSize: '1rem', 
            marginBottom: '0.25rem',
            fontWeight: 'bold'
          }}>
            Contact Us
          </h3>
          <address style={{
            fontStyle: 'normal',
            lineHeight: '1.3',
            fontSize: '0.85rem'
          }}>
            123 Business Street<br />
            Suite 100<br />
            San Francisco, CA 94105<br />
            United States
          </address>
        </div>

        {/* Copyright */}
        <div style={{
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          paddingTop: '0.75rem',
          textAlign: 'center',
          fontSize: '0.8rem',
          color: 'rgba(255, 255, 255, 0.7)'
        }}>
          © {new Date().getFullYear()} Fin. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer; 