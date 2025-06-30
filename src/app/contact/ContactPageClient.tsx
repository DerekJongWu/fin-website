'use client';

import React from 'react';
import PortfolioHeader from '@/components/PortfolioHeader';

const ContactPageClient: React.FC = () => {
  return (
    <div style={{
      background: '#1E2332',
      minHeight: '100vh',
      width: '100vw',
      fontFamily: 'var(--font-inter)'
    }}>
      <PortfolioHeader />
      <main style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '48px 2rem 2rem 2rem',
        minHeight: '80vh',
        fontFamily: 'var(--font-inter)'
      }}>
        {/* Main Content - Reorganized Layout */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '2rem',
          marginBottom: '3rem'
        }}>
          {/* Top Section - Our Offices */}
          <div>
            <h2 style={{
              fontSize: '1.5rem',
              fontWeight: '600',
              color: 'white',
              marginBottom: '1.5rem'
            }}>
              Our Offices
            </h2>
            
            <div style={{ 
              display: 'flex', 
              gap: '1.5rem',
              flexWrap: 'wrap'
            }}>
              {/* San Francisco Office */}
              <div style={{
                backgroundColor: 'rgba(255,255,255,0.03)',
                padding: '1.2rem',
                borderRadius: '8px',
                boxShadow: '0 2px 16px 0 rgba(0,0,0,0.10)',
                border: '1px solid rgba(255,255,255,0.1)',
                minHeight: '100px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                flex: '1',
                minWidth: '300px'
              }}>
                <div style={{ borderRadius: '12px', overflow: 'hidden', marginBottom: '1rem' }}>
                  <iframe
                    width={"100%"}
                    height={200}
                    frameBorder={0}
                    style={{ border: 0 }}
                    src="https://www.google.com/maps?q=One+Sansome+Street,+Suite+3950,+San+Francisco,+CA+94104&output=embed"
                    allowFullScreen
                    aria-hidden="false"
                    tabIndex={0}
                  />
                </div>
                <h3 style={{
                  fontSize: '1.3rem',
                  fontWeight: '600',
                  color: 'white',
                  marginBottom: '0.3rem'
                }}>
                  San Francisco
                </h3>
                <p style={{
                  color: '#B0B3C7',
                  lineHeight: '1.6',
                  marginBottom: '0.75rem',
                  fontSize: '1rem'
                }}>
                  One Sansome Street<br />
                  Suite 3950<br />
                  San Francisco, CA 94104
                </p>
                
              </div>

              {/* New York Office */}
              <div style={{
                backgroundColor: 'rgba(255,255,255,0.03)',
                padding: '1.2rem',
                borderRadius: '8px',
                boxShadow: '0 2px 16px 0 rgba(0,0,0,0.10)',
                border: '1px solid rgba(255,255,255,0.1)',
                minHeight: '100px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                flex: '1',
                minWidth: '300px'
              }}>
                <div style={{ borderRadius: '12px', overflow: 'hidden', marginBottom: '1rem' }}>
                  <iframe
                    width={"100%"}
                    height={200}
                    frameBorder={0}
                    style={{ border: 0 }}
                    src="https://www.google.com/maps?q=155+E+44th+Street,+Floor+33,+New+York,+NY+10017&output=embed"
                    allowFullScreen
                    aria-hidden="false"
                    tabIndex={0}
                  />
                </div>
                <h3 style={{
                  fontSize: '1.3rem',
                  fontWeight: '600',
                  color: 'white',
                  marginBottom: '0.3rem'
                }}>
                  New York
                </h3>
                <p style={{
                  color: '#B0B3C7',
                  lineHeight: '1.6',
                  marginBottom: '0.75rem',
                  fontSize: '1rem'
                }}>
                  155 E 44th Street<br />
                  Floor 33<br />
                  New York, NY 10017
                </p>
              </div>
            </div>

            {/* Satellite Offices Note */}
            <div style={{
              textAlign: 'center',
              marginTop: '1rem',
              color: '#B0B3C7',
              fontSize: '0.9rem',
              fontStyle: 'italic'
            }}>
              Satellite Offices: Miami & Tokyo
            </div>
          </div>

          {/* Bottom Section - Get In Touch */}
          <div>
            <h2 style={{
              fontSize: '1.5rem',
              fontWeight: '600',
              color: 'white',
              marginBottom: '1.5rem'
            }}>
              Get In Touch
            </h2>

            {/* Three boxes spread horizontally */}
            <div style={{
              display: 'flex',
              gap: '1.5rem',
              flexWrap: 'wrap'
            }}>
              {/* Contact Emails */}
              <div style={{
                backgroundColor: 'rgba(255,255,255,0.03)',
                padding: '2rem',
                borderRadius: '8px',
                boxShadow: '0 2px 16px 0 rgba(0,0,0,0.10)',
                border: '1px solid rgba(255,255,255,0.1)',
                minHeight: '160px',
                flex: '1',
                minWidth: '300px'
              }}>
                <h3 style={{
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  color: 'white',
                  marginBottom: '1rem'
                }}>
                  Contact Information
                </h3>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  <div>
                    <p style={{
                      fontSize: '0.9rem',
                      color: '#B0B3C7',
                      marginBottom: '0.25rem'
                    }}>
                      General Inquiries
                    </p>
                    <a 
                      href="mailto:info@fin.capital"
                      style={{
                        color: '#FFD700',
                        textDecoration: 'none',
                        fontWeight: '500'
                      }}
                    >
                      info@fin.capital
                    </a>
                  </div>
                  
                  <div>
                    <p style={{
                      fontSize: '0.9rem',
                      color: '#B0B3C7',
                      marginBottom: '0.25rem'
                    }}>
                      Investor Relations
                    </p>
                    <a 
                      href="mailto:ir@fin.capital"
                      style={{
                        color: '#FFD700',
                        textDecoration: 'none',
                        fontWeight: '500'
                      }}
                    >
                      ir@fin.capital
                    </a>
                  </div>
                  
                  <div>
                    <p style={{
                      fontSize: '0.9rem',
                      color: '#B0B3C7',
                      marginBottom: '0.25rem'
                    }}>
                      Media & Press
                    </p>
                    <a 
                      href="mailto:press@fin.capital"
                      style={{
                        color: '#FFD700',
                        textDecoration: 'none',
                        fontWeight: '500'
                      }}
                    >
                      press@fin.capital
                    </a>
                  </div>
                  
                  <div>
                    <p style={{
                      fontSize: '0.9rem',
                      color: '#B0B3C7',
                      marginBottom: '0.25rem'
                    }}>
                      Careers
                    </p>
                    <a 
                      href="mailto:careers@fin.capital"
                      style={{
                        color: '#FFD700',
                        textDecoration: 'none',
                        fontWeight: '500'
                      }}
                    >
                      careers@fin.capital
                    </a>
                  </div>
                </div>
              </div>

              {/* Combined Newsletter & Social Media */}
              <div style={{
                backgroundColor: 'rgba(255,255,255,0.03)',
                padding: '2rem',
                borderRadius: '8px',
                boxShadow: '0 2px 16px 0 rgba(0,0,0,0.10)',
                border: '1px solid rgba(255,255,255,0.1)',
                minHeight: '160px',
                flex: '1',
                minWidth: '300px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}>
                {/* Stay Updated Section */}
                <div>
                  <h3 style={{
                    fontSize: '1.1rem',
                    fontWeight: '600',
                    color: 'white',
                    marginBottom: '0.5rem'
                  }}>
                    Stay Updated
                  </h3>
                  <p style={{
                    fontSize: '0.9rem',
                    color: '#B0B3C7',
                    marginBottom: '1rem',
                    lineHeight: '1.5'
                  }}>
                    Subscribe to our newsletter for the latest insights, portfolio updates, and industry news.
                  </p>
                  
                  <iframe
                    src="https://embeds.beehiiv.com/380f7697-bb1d-4a0c-99d9-088d0c032592?slim=true"
                    width="100%"
                    height="60"
                    frameBorder="0"
                    scrolling="no"
                    style={{
                      border: 'none',
                      borderRadius: '4px',
                      backgroundColor: 'transparent'
                    }}
                  />
                </div>

                {/* Follow Us Section */}
                <div style={{ marginTop: '2rem' }}>
                  <h3 style={{
                    fontSize: '1.1rem',
                    fontWeight: '600',
                    color: 'white',
                    marginBottom: '1rem'
                  }}>
                    Follow Us
                  </h3>
                  <div style={{
                    display: 'flex',
                    gap: '1rem',
                    alignItems: 'center',
                    flexWrap: 'wrap'
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
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ContactPageClient; 