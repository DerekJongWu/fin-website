'use client';

import PortfolioHeader from '@/components/PortfolioHeader';
import Footer from '@/components/Footer';
import React, { useState } from 'react';

export default function AboutPage() {
  const features = [
    {
      title: 'Lighthouse',
      description:
        'We provide our Founders and LPs with access to our proprietary AI platform to strengthen collaboration and empower our partnership. ',
    },
    {
      title: 'Business Development & GTM Strategy',
      description:
        'We leverage our extensive network and experience to help portfolio companies identify and pursue high-impact commercial opportunities, build scalable go-to-market strategies, and form strategic partnerships to accelerate revenue growth.',
    },
    {
      title: 'Corporate Development',
      description:
        'We provide hands-on support with strategic planning, M&A execution, and partnership negotiations to help founders unlock new growth pathways and maximize enterprise value.',
    },
    {
      title: 'Board Leadership',
      description:
        'We offer active board-level guidance grounded in deep operational and industry experience, helping founders stay focused on long-term goals while managing key governance priorities.',
    },
    {
      title: 'Talent Sourcing',
      description:
        'We help portfolio companies attract, assess, and retain world-class talent across technical and business functions through our recruiting partners and internal hiring support.',
    },
  ];
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const handleCardHover = (index: number | null) => {
    setExpandedCard(index);
  };

  return (
    <div style={{ background: '#1E2332', minHeight: '100vh', width: '100vw', fontFamily: 'var(--font-inter)' }}>
      <PortfolioHeader />
      <main
        style={{
          maxWidth: 1400,
          margin: '0 auto',
          padding: '50px 24px 48px 24px',
          minHeight: '95vh',
          fontFamily: 'var(--font-inter)'
        }}
      >
        {/* Hero Text */}
        <h1 style={{ 
          color: 'white', 
          fontSize: '3.5rem', 
          fontWeight: 700, 
          marginBottom: 40, 
          fontFamily: 'var(--font-inter)',
          textAlign: 'center',
          lineHeight: 1.2
        }}>
          We are full-lifecycle<br />
          B2B Fintech software investors
        </h1>

        {/* Investment Focus Section */}
        <section style={{ marginTop: 80, marginBottom: 80 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 40 }}>
            <h2 style={{
              color: 'white',
              fontSize: '2.5rem',
              fontWeight: 600,
              marginBottom: 24,
              textAlign: 'left',
              marginTop: 0
            }}>
              What We Invest In
            </h2>
          </div>

          <div>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(5, 1fr)',
              gap: '24px',
              margin: '0 auto',
              position: 'relative'
            }}>
              {/* Team Card */}
              <div className="subsector-card" style={{
                background: 'rgba(255,255,255,0.03)',
                borderRadius: 16,
                padding: '24px',
                height: '180px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                border: '1px solid rgba(255,255,255,0.1)',
                opacity: 0,
                animation: 'fadeIn 0.6s ease-out forwards',
                animationDelay: '0.1s',
                position: 'relative',
                overflow: 'hidden'
              }}
              onMouseEnter={() => handleCardHover(0)}
              onMouseLeave={() => handleCardHover(null)}>
                <span style={{ display: 'block', marginBottom: 10 }}>
                  <svg width="52" height="52" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="16" cy="18" r="6" fill="#FFD700" fillOpacity="0.8"/>
                    <circle cx="32" cy="18" r="6" fill="#FFD700" fillOpacity="0.5"/>
                    <ellipse cx="16" cy="34" rx="10" ry="6" fill="#FFD700" fillOpacity="0.8"/>
                    <ellipse cx="32" cy="34" rx="10" ry="6" fill="#FFD700" fillOpacity="0.5"/>
                  </svg>
                </span>
                <h3 className="subsector-title" style={{ color: 'white', fontSize: '1.25rem', marginBottom: 12, zIndex: 1 }}>
                  Team
                </h3>
                <div className="subsector-desc-overlay" style={{ background: '#1E2332' }}>
                  Repeat founders and seasoned entrepreneurs with a track record of success
                </div>
              </div>

              {/* Geographies Card */}
              <div className="subsector-card" style={{
                background: 'rgba(255,255,255,0.03)',
                borderRadius: 16,
                padding: '24px',
                height: '180px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                border: '1px solid rgba(255,255,255,0.1)',
                opacity: 0,
                animation: 'fadeIn 0.6s ease-out forwards',
                animationDelay: '0.2s',
                position: 'relative',
                overflow: 'hidden'
              }}
              onMouseEnter={() => handleCardHover(1)}
              onMouseLeave={() => handleCardHover(null)}>
                <span style={{ display: 'block', marginBottom: 10 }}>
                  <svg width="52" height="52" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="24" cy="24" r="18" stroke="#FFD700" strokeWidth="3" fill="none"/>
                    <ellipse cx="24" cy="24" rx="18" ry="7" stroke="#FFD700" strokeWidth="3" fill="none"/>
                    <path d="M24 6v36" stroke="#FFD700" strokeWidth="3"/>
                    <path d="M6 24h36" stroke="#FFD700" strokeWidth="3"/>
                  </svg>
                </span>
                <h3 className="subsector-title" style={{ color: 'white', fontSize: '1.25rem', marginBottom: 12, zIndex: 1 }}>
                  Geographies
                </h3>
                <div className="subsector-desc-overlay" style={{ background: '#1E2332' }}>
                  Primary focus on the US, with opportunistic consideration for other global markets
                </div>
              </div>

              {/* Stage Card */}
              <div className="subsector-card" style={{
                background: 'rgba(255,255,255,0.03)',
                borderRadius: 16,
                padding: '24px',
                height: '180px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                border: '1px solid rgba(255,255,255,0.1)',
                opacity: 0,
                animation: 'fadeIn 0.6s ease-out forwards',
                animationDelay: '0.3s',
                position: 'relative',
                overflow: 'hidden'
              }}
              onMouseEnter={() => handleCardHover(2)}
              onMouseLeave={() => handleCardHover(null)}>
                <span style={{ display: 'block', marginBottom: 10 }}>
                  <svg width="52" height="52" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <polyline points="8,40 20,28 30,34 40,12" fill="none" stroke="#FFD700" strokeWidth="4" strokeLinejoin="round" strokeLinecap="round"/>
                    <circle cx="8" cy="40" r="3" fill="#FFD700"/>
                    <circle cx="20" cy="28" r="3" fill="#FFD700"/>
                    <circle cx="30" cy="34" r="3" fill="#FFD700"/>
                    <circle cx="40" cy="12" r="3" fill="#FFD700"/>
                  </svg>
                </span>
                <h3 className="subsector-title" style={{ color: 'white', fontSize: '1.25rem', marginBottom: 12, zIndex: 1 }}>
                  Stage
                </h3>
                <div className="subsector-desc-overlay" style={{ background: '#1E2332' }}>
                  We invest in pre-seed through pre-IPO
                </div>
              </div>

              {/* Capital Type Card */}
              <div className="subsector-card" style={{
                background: 'rgba(255,255,255,0.03)',
                borderRadius: 16,
                padding: '24px',
                height: '180px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                border: '1px solid rgba(255,255,255,0.1)',
                opacity: 0,
                animation: 'fadeIn 0.6s ease-out forwards',
                animationDelay: '0.4s',
                position: 'relative',
                overflow: 'hidden'
              }}
              onMouseEnter={() => handleCardHover(3)}
              onMouseLeave={() => handleCardHover(null)}>
                <span style={{ display: 'block', marginBottom: 10 }}>
                  <svg width="52" height="52" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="8" y="16" width="32" height="20" rx="4" fill="#FFD700" fillOpacity="0.8" stroke="#FFD700" strokeWidth="2"/>
                    <circle cx="24" cy="26" r="5" fill="none" stroke="#FFD700" strokeWidth="2"/>
                    <path d="M24 21v10" stroke="#FFD700" strokeWidth="2"/>
                    <path d="M19 26h10" stroke="#FFD700" strokeWidth="2"/>
                  </svg>
                </span>
                <h3 className="subsector-title" style={{ color: 'white', fontSize: '1.25rem', marginBottom: 12, zIndex: 1 }}>
                  Capital Type
                </h3>
                <div className="subsector-desc-overlay" style={{ background: '#1E2332' }}>
                  We invest in direct primary or secondaries
                </div>
              </div>

              {/* Sub-Sector Focus Card */}
              <div className="subsector-card" style={{
                background: 'rgba(255,255,255,0.03)',
                borderRadius: 16,
                padding: '24px',
                height: '180px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                border: '1px solid rgba(255,255,255,0.1)',
                opacity: 0,
                animation: 'fadeIn 0.6s ease-out forwards',
                animationDelay: '0.5s',
                position: 'relative',
                overflow: 'hidden'
              }}
              onMouseEnter={() => handleCardHover(4)}
              >
                <span style={{ display: 'block', marginBottom: 10 }}>
                  <svg width="52" height="52" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="8" y="8" width="22" height="14" rx="2" fill="#FFD700" fillOpacity="0.7" transform="rotate(-10 8 8)"/>
                    <rect x="10" y="16" width="22" height="14" rx="2" fill="#FFD700" stroke="#FFD700" strokeWidth="2"/>
                    <rect x="10" y="21" width="22" height="4" fill="#191B23"/>
                  </svg>
                </span>
                <h3 className="subsector-title" style={{ color: 'white', fontSize: '1.25rem', marginBottom: 12, zIndex: 1 }}>
                  Sub-Sector Focus
                </h3>
                <div className="subsector-desc-overlay" style={{ background: '#1E2332' }}>
                  Explore our specialized investment areas in fintech
                </div>
              </div>

              {/* Expanded Sub-Sector Cards Container */}
              {expandedCard === 4 && (
                <div style={{
                  position: 'absolute',
                  top: '100%',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  background: '#1E2332',
                  zIndex: 1000,
                  padding: '40px',
                  marginTop: '24px',
                  boxShadow: '0 4px 24px rgba(0, 0, 0, 0.2)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '16px',
                  display: 'flex',
                  justifyContent: 'center',
                  minHeight: '550px',
                  overflow: 'auto',
                  maxWidth: '1400px',
                  width: '100%'
                }}
                onMouseLeave={() => handleCardHover(null)}>
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(4, 1fr)',
                    gap: '24px',
                    width: '100%',
                    maxWidth: '1400px',
                    padding: '0 24px'
                  }}>
                    {/* Reuse the existing sub-sector cards */}
                    <div className="subsector-card" style={{
                      background: 'rgba(255,255,255,0.03)',
                      borderRadius: 16,
                      padding: '24px',
                      height: '180px',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center',
                      textAlign: 'center',
                      border: '1px solid rgba(255,255,255,0.1)',
                      position: 'relative',
                      overflow: 'hidden'
                    }}>
                      <span style={{ display: 'block', marginBottom: 10 }}>
                        <svg width="52" height="52" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect x="10" y="10" width="18" height="18" rx="3" stroke="#FFD700" strokeWidth="2" fill="none"/>
                          <rect x="15" y="15" width="8" height="8" rx="1.5" stroke="#FFD700" strokeWidth="2" fill="#FFD700" fillOpacity="0.18"/>
                          <g stroke="#FFD700" strokeWidth="2" strokeLinecap="round">
                            <line x1="19" y1="2" x2="19" y2="8" />
                            <line x1="19" y1="30" x2="19" y2="36" />
                            <line x1="2" y1="19" x2="8" y2="19" />
                            <line x1="30" y1="19" x2="36" y2="19" />
                          </g>
                        </svg>
                      </span>
                      <h3 className="subsector-title" style={{ color: 'white', fontSize: '1.25rem', marginBottom: 12, zIndex: 1 }}>
                        Enterprise AI Enablement
                      </h3>
                      <div className="subsector-desc-overlay" style={{ background: '#1E2332' }}>
                        Infrastructure to support AI adoption and deployment across financial services and other large enterprises
                      </div>
                    </div>

                    <div className="subsector-card" style={{
                      background: 'rgba(255,255,255,0.03)',
                      borderRadius: 16,
                      padding: '24px',
                      height: '180px',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center',
                      textAlign: 'center',
                      border: '1px solid rgba(255,255,255,0.1)',
                      position: 'relative',
                      overflow: 'hidden'
                    }}>
                      <span style={{ display: 'block', marginBottom: 10 }}>
                        <svg width="52" height="52" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <polygon points="19,7 32,16 6,16" fill="#FFD700" stroke="#FFD700" strokeWidth="2"/>
                          <circle cx="19" cy="13" r="2" fill="#191B23"/>
                          <rect x="8" y="16" width="4" height="10" rx="1.2" fill="#FFD700"/>
                          <rect x="16" y="16" width="4" height="10" rx="1.2" fill="#FFD700"/>
                          <rect x="24" y="16" width="4" height="10" rx="1.2" fill="#FFD700"/>
                          <rect x="6" y="26" width="26" height="3" rx="1.5" fill="#FFD700"/>
                        </svg>
                      </span>
                      <h3 className="subsector-title" style={{ color: 'white', fontSize: '1.25rem', marginBottom: 12, zIndex: 1 }}>
                        BankTech
                      </h3>
                      <div className="subsector-desc-overlay" style={{ background: '#1E2332' }}>
                        Technologies that help banks rapidly modernize and digitize across the front and middle office
                      </div>
                    </div>

                    <div className="subsector-card" style={{
                      background: 'rgba(255,255,255,0.03)',
                      borderRadius: 16,
                      padding: '24px',
                      height: '180px',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center',
                      textAlign: 'center',
                      border: '1px solid rgba(255,255,255,0.1)',
                      position: 'relative',
                      overflow: 'hidden'
                    }}>
                      <span style={{ display: 'block', marginBottom: 10 }}>
                        <svg width="52" height="52" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect x="8" y="8" width="22" height="14" rx="2" fill="#FFD700" fillOpacity="0.7" transform="rotate(-10 8 8)"/>
                          <rect x="10" y="16" width="22" height="14" rx="2" fill="#FFD700" stroke="#FFD700" strokeWidth="2"/>
                          <rect x="10" y="21" width="22" height="4" fill="#191B23"/>
                        </svg>
                      </span>
                      <h3 className="subsector-title" style={{ color: 'white', fontSize: '1.25rem', marginBottom: 12, zIndex: 1 }}>
                        B2B Payments
                      </h3>
                      <div className="subsector-desc-overlay" style={{ background: '#1E2332' }}>
                        Companies that support the modernization of payments from enhanced wallet infrastructure to cross-border transactions
                      </div>
                    </div>

                    <div className="subsector-card" style={{
                      background: 'rgba(255,255,255,0.03)',
                      borderRadius: 16,
                      padding: '24px',
                      height: '180px',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center',
                      textAlign: 'center',
                      border: '1px solid rgba(255,255,255,0.1)',
                      position: 'relative',
                      overflow: 'hidden'
                    }}>
                      <span style={{ display: 'block', marginBottom: 10 }}>
                        <svg width="52" height="52" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="19" cy="19" r="16" fill="#FFD700" fillOpacity="0.13"/>
                          <path d="M19 19V7" stroke="#FFD700" strokeWidth="3" strokeLinecap="round"/>
                          <path d="M19 19L29 29" stroke="#FFD700" strokeWidth="3" strokeLinecap="round"/>
                          <path d="M19 19L9 29" stroke="#FFD700" strokeWidth="3" strokeLinecap="round"/>
                          <rect x="16" y="25" width="6" height="6" rx="1.5" fill="#FFD700"/>
                        </svg>
                      </span>
                      <h3 className="subsector-title" style={{ color: 'white', fontSize: '1.25rem', marginBottom: 12, zIndex: 1 }}>
                        CFO Tech Stack
                      </h3>
                      <div className="subsector-desc-overlay" style={{ background: '#1E2332' }}>
                        SaaS companies that are enabling the CFO / Finance / Treasury function to modernize their workflows and deliver higher value output to their global organizations
                      </div>
                    </div>

                    <div className="subsector-card" style={{
                      background: 'rgba(255,255,255,0.03)',
                      borderRadius: 16,
                      padding: '24px',
                      height: '180px',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center',
                      textAlign: 'center',
                      border: '1px solid rgba(255,255,255,0.1)',
                      position: 'relative',
                      overflow: 'hidden'
                    }}>
                      <span style={{ display: 'block', marginBottom: 10 }}>
                        <svg width="52" height="52" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <ellipse cx="19" cy="32" rx="10" ry="3" fill="#FFD700" fillOpacity="0.13"/>
                          <rect x="13" y="18" width="12" height="8" rx="3" fill="#FFD700"/>
                          <rect x="16" y="10" width="6" height="8" rx="2" fill="#FFD700" fillOpacity="0.7"/>
                          <path d="M19 10v-3" stroke="#191B23" strokeWidth="2" strokeLinecap="round"/>
                          <circle cx="19" cy="7" r="1.5" fill="#191B23"/>
                        </svg>
                      </span>
                      <h3 className="subsector-title" style={{ color: 'white', fontSize: '1.25rem', marginBottom: 12, zIndex: 1 }}>
                        Asset/Wealth Management & Capital Markets
                      </h3>
                      <div className="subsector-desc-overlay" style={{ background: '#1E2332' }}>
                        Companies focused on the digitization of financial asset exchange and management, driving efficiency, automation and streamlined investment processes for institutions, advisors and their customers
                      </div>
                    </div>

                    <div className="subsector-card" style={{
                      background: 'rgba(255,255,255,0.03)',
                      borderRadius: 16,
                      padding: '24px',
                      height: '180px',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center',
                      textAlign: 'center',
                      border: '1px solid rgba(255,255,255,0.1)',
                      position: 'relative',
                      overflow: 'hidden'
                    }}>
                      <span style={{ display: 'block', marginBottom: 10 }}>
                        <svg width="52" height="52" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="19" cy="19" r="13" stroke="#FFD700" strokeWidth="3" fill="#FFD700" fillOpacity="0.13"/>
                          <circle cx="19" cy="19" r="6" fill="#FFD700"/>
                          <path d="M28 28l5 5" stroke="#191B23" strokeWidth="3" strokeLinecap="round"/>
                          <polygon points="19,14 21,20 17,20" fill="#191B23"/>
                        </svg>
                      </span>
                      <h3 className="subsector-title" style={{ color: 'white', fontSize: '1.25rem', marginBottom: 12, zIndex: 1 }}>
                        RiskTech & Cyber
                      </h3>
                      <div className="subsector-desc-overlay" style={{ background: '#1E2332' }}>
                        Companies that enhance compliance management and mitigate fraud and security risks
                      </div>
                    </div>

                    <div className="subsector-card" style={{
                      background: 'rgba(255,255,255,0.03)',
                      borderRadius: 16,
                      padding: '24px',
                      height: '180px',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center',
                      textAlign: 'center',
                      border: '1px solid rgba(255,255,255,0.1)',
                      position: 'relative',
                      overflow: 'hidden'
                    }}>
                      <span style={{ display: 'block', marginBottom: 10 }}>
                        <svg width="52" height="52" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect x="17" y="10" width="4" height="18" rx="2" fill="#FFD700"/>
                          <rect x="10" y="18" width="4" height="10" rx="2" fill="#FFD700"/>
                          <rect x="24" y="18" width="4" height="10" rx="2" fill="#FFD700"/>
                          <path d="M19 10V6" stroke="#191B23" strokeWidth="2" strokeLinecap="round"/>
                          <path d="M12 18V14" stroke="#191B23" strokeWidth="2" strokeLinecap="round"/>
                          <path d="M26 18V14" stroke="#191B23" strokeWidth="2" strokeLinecap="round"/>
                          <path d="M19 28v4" stroke="#191B23" strokeWidth="2" strokeLinecap="round"/>
                          <path d="M12 28v4" stroke="#191B23" strokeWidth="2" strokeLinecap="round"/>
                          <path d="M26 28v4" stroke="#191B23" strokeWidth="2" strokeLinecap="round"/>
                        </svg>
                      </span>
                      <h3 className="subsector-title" style={{ color: 'white', fontSize: '1.25rem', marginBottom: 12, zIndex: 1 }}>
                        Vertical Fintech
                      </h3>
                      <div className="subsector-desc-overlay" style={{ background: '#1E2332' }}>
                        Intersection of vertical specific operating systems/ platforms with financial services products
                      </div>
                    </div>

                    <div className="subsector-card" style={{
                      background: 'rgba(255,255,255,0.03)',
                      borderRadius: 16,
                      padding: '24px',
                      height: '180px',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center',
                      textAlign: 'center',
                      border: '1px solid rgba(255,255,255,0.1)',
                      position: 'relative',
                      overflow: 'hidden'
                    }}>
                      <span style={{ display: 'block', marginBottom: 10 }}>
                        <svg width="52" height="52" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect x="11" y="13" width="16" height="20" rx="3" fill="#FFD700" fillOpacity="0.13"/>
                          <rect x="15" y="17" width="8" height="12" rx="2" fill="#FFD700"/>
                          <path d="M19 17v-4" stroke="#191B23" strokeWidth="2" strokeLinecap="round"/>
                          <circle cx="19" cy="13" r="2" fill="#191B23"/>
                        </svg>
                      </span>
                      <h3 className="subsector-title" style={{ color: 'white', fontSize: '1.25rem', marginBottom: 12, zIndex: 1 }}>
                        Insurtech
                      </h3>
                      <div className="subsector-desc-overlay" style={{ background: '#1E2332' }}>
                        Companies that seek to improve the way that risk is quantified, priced, controlled, and prevented
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Platform Team Section */}
        <section style={{ marginTop: 80, marginBottom: 0, display: 'flex', flexDirection: 'column', flex: 1 }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.1fr',
            gap: '48px',
            alignItems: 'stretch',
            borderTop: '1px solid #3A4060',
            paddingTop: 32,
            maxWidth: '100%',
            flex: 1
          }}>
            {/* Left column */}
            <div>
              <h2 style={{
                color: 'white',
                fontSize: '2.5rem',
                fontWeight: 600,
                marginBottom: 24,
                textAlign: 'left',
                marginTop: 0
              }}>
                How we add value
              </h2>
              <div style={{ color: '#B0B3C7', fontSize: '1.25rem', lineHeight: 1.6 }}>
                Our Platform team specializes in solving your most pressing challenges. We are passionate about rolling up our sleeves and partnering with founders that have deep financial services experience, audacious goals, differentiated products, and a global mindset.
              </div>
            </div>
            {/* Right column */}
            <div className="right-scroll-panel" style={{ borderLeft: '1px solid #3A4060', paddingLeft: 32, height: '100%', maxHeight: '440px', overflowY: 'auto', direction: 'rtl' }}>
              <div style={{ direction: 'ltr' }}>
                {features.map((feature, idx) => (
                  <div key={feature.title} style={{ marginBottom: idx < features.length - 1 ? 36 : 0 }}>
                    <button
                      onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                      style={{
                        width: '100%',
                        background: 'none',
                        border: 'none',
                        color: 'white',
                        fontWeight: 700,
                        fontSize: '1rem',
                        letterSpacing: 0.5,
                        textTransform: 'uppercase',
                        marginBottom: 12,
                        textAlign: 'left',
                        cursor: 'pointer',
                        outline: 'none',
                        padding: 0,
                        transition: 'color 0.2s',
                      }}
                      aria-expanded={openIndex === idx}
                      aria-controls={`accordion-panel-${idx}`}
                    >
                      {feature.title}
                    </button>
                    <div
                      id={`accordion-panel-${idx}`}
                      style={{
                        maxHeight: openIndex === idx ? 200 : 0,
                        overflow: 'hidden',
                        color: '#B0B3C7',
                        fontSize: '1.1rem',
                        lineHeight: 1.6,
                        transition: 'max-height 0.3s cubic-bezier(0.4,0,0.2,1)',
                        marginBottom: openIndex === idx ? 16 : 0,
                        paddingLeft: 0,
                      }}
                    >
                      <div style={{ padding: openIndex === idx ? '0 0 8px 0' : '0' }}>{feature.description}</div>
                    </div>
                    {idx < features.length - 1 && (
                      <hr style={{ border: 'none', borderTop: '1px solid #3A4060', margin: '32px 0 0 0' }} />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <style jsx global>{`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .subsector-card {
            position: relative;
            overflow: hidden;
          }
          .subsector-title {
            transition: opacity 0.3s;
          }
          .subsector-desc-overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(30, 35, 50, 0.96);
            color: #fff;
            display: flex;
            align-items: center;
            justify-content: center;
            opacity: 0;
            pointer-events: none;
            font-size: 1.08rem;
            font-weight: 500;
            padding: 24px;
            text-align: left;
            transition: opacity 0.3s;
            z-index: 2;
          }
          .subsector-card:hover .subsector-title {
            opacity: 0;
          }
          .subsector-card:hover .subsector-desc-overlay {
            opacity: 1;
            pointer-events: auto;
          }
          .right-scroll-panel::-webkit-scrollbar {
            width: 10px;
            background: #23263a;
            border-radius: 8px;
          }
          .right-scroll-panel::-webkit-scrollbar-thumb {
            background: rgba(255, 215, 0, 0.45);
            border-radius: 8px;
            border: 2px solid #23263a;
          }
          .right-scroll-panel::-webkit-scrollbar-thumb:hover {
            background: #FFD700;
          }
          .right-scroll-panel {
            scrollbar-color: #FFD700 #23263a;
            scrollbar-width: thin;
          }
          button:hover {
            background: rgba(255,255,255,0.05) !important;
          }
        `}</style>
      </main>
      <hr style={{ border: 'none', borderTop: '1px solid #3A4060', margin: 0 }} />
      <Footer />
    </div>
  );
} 