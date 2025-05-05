'use client';
import React, { useState, useMemo } from 'react';
import PortfolioHeader from '@/components/PortfolioHeader';
import Footer from '@/components/Footer';
import { urlFor } from './page';

export default function TeamPageClient({ team }: { team: any[] }) {
  const [selected, setSelected] = useState<any | null>(null);
  const [activeTag, setActiveTag] = useState<string>('All');

  // Collect all unique metadataTag values
  const allTags = useMemo(() => {
    const tags = new Set<string>();
    team.forEach(member => {
      if (Array.isArray(member.metadataTag)) {
        member.metadataTag.forEach((tag: string) => tags.add(tag));
      } else if (member.metadataTag) {
        tags.add(member.metadataTag);
      }
    });
    return Array.from(tags).sort();
  }, [team]);

  // Filtered team
  const filteredTeam = useMemo(() => {
    if (activeTag === 'All') return team;
    return team.filter(member =>
      Array.isArray(member.metadataTag)
        ? member.metadataTag.includes(activeTag)
        : member.metadataTag === activeTag
    );
  }, [team, activeTag]);

  return (
    <div style={{ background: '#1E2332', minHeight: '100vh', width: '100vw' }}>
      <PortfolioHeader />
      <main
        style={{
          maxWidth: 1400,
          margin: '0 auto',
          padding: '50px 24px 48px 24px',
          minHeight: '80vh',
        }}
      >
        {/* Filter Bar */}
        <div style={{ display: 'flex', gap: 16, marginBottom: 36, flexWrap: 'wrap', alignItems: 'center' }}>
          {["All", ...allTags].map(tag => (
            <button
              key={tag}
              onClick={() => setActiveTag(tag)}
              style={{
                background: activeTag === tag ? 'rgba(255, 215, 0, 0.18)' : 'rgba(255, 215, 0, 0.10)',
                color: '#fff',
                border: activeTag === tag ? '2px solid #FFD700' : '2px solid transparent',
                borderRadius: 14,
                padding: '10px 22px',
                fontWeight: 600,
                fontSize: '1.08rem',
                letterSpacing: 0.5,
                cursor: 'pointer',
                boxShadow: activeTag === tag ? '0 2px 8px 0 rgba(255,215,0,0.10)' : '0 1px 4px 0 rgba(0,0,0,0.07)',
                outline: 'none',
                transition: 'border 0.2s, background 0.2s',
              }}
            >
              {tag}
            </button>
          ))}
        </div>
        <h1 style={{ color: 'white', fontSize: '2.5rem', fontWeight: 700, marginBottom: 40 }}>Our Team</h1>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '2.5rem',
            justifyItems: 'center',
          }}
        >
          {filteredTeam.map((member) => (
            <div
              key={member._id}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                width: '100%',
                cursor: 'pointer',
                transition: 'transform 0.18s cubic-bezier(.4,1.2,.6,1)',
              }}
              onClick={() => setSelected(member)}
              onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.04)')}
              onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
            >
              <div
                style={{
                  width: '100%',
                  maxWidth: 370,
                  height: 440,
                  background: 'rgba(255,255,255,0.03)',
                  borderRadius: 24,
                  boxShadow: '0 2px 16px 0 rgba(0,0,0,0.10)',
                  overflow: 'hidden',
                  display: 'flex',
                  alignItems: 'stretch',
                  justifyContent: 'center',
                }}
              >
                {member.image && (
                  <img
                    src={urlFor(member.image)?.width(700).height(830).fit('crop').url() || ''}
                    alt={member.name}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block',
                    }}
                  />
                )}
              </div>
              <h2 style={{ color: 'white', fontSize: '1.3rem', fontWeight: 600, margin: '18px 0 0 0', textAlign: 'center' }}>{member.name}</h2>
              <p style={{ color: '#B0B3C7', fontSize: '1.05rem', marginTop: 4, textAlign: 'center' }}>{member.title}</p>
            </div>
          ))}
        </div>
      </main>
      <Footer />
      {/* Modal */}
      {selected && (
        <div
          onClick={() => setSelected(null)}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            background: 'rgba(0,0,0,0.55)',
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)',
            zIndex: 2000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div
            onClick={e => e.stopPropagation()}
            style={{
              background: '#23263a',
              borderRadius: 24,
              boxShadow: '0 4px 32px 0 rgba(0,0,0,0.25)',
              width: 'min(1100px, 98vw)',
              height: '720px',
              minHeight: 500,
              maxHeight: 720,
              display: 'flex',
              overflow: 'hidden',
              position: 'relative',
            }}
          >
            {/* Left: Image */}
            <div style={{ flex: 1, background: '#181a28', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '32px 0', minWidth: 0 }}>
              {selected.image && (
                <img
                  src={urlFor(selected.image)?.width(520).height(520).fit('crop').url() || ''}
                  alt={selected.name}
                  style={{
                    width: '90%',
                    height: '100%',
                    maxWidth: 440,
                    maxHeight: 540,
                    aspectRatio: '4/5',
                    objectFit: 'cover',
                    borderRadius: 28,
                    boxShadow: '0 2px 20px 0 rgba(0,0,0,0.15)',
                    display: 'block',
                    margin: '0 auto',
                  }}
                />
              )}
              <div style={{ display: 'flex', gap: 12, marginTop: 28, flexWrap: 'wrap', justifyContent: 'flex-start', width: '90%', maxWidth: 440, marginLeft: 'auto', marginRight: 'auto' }}>
                {selected.linkedinUrl && (
                  <a
                    href={selected.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn profile"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      background: '#fff',
                      borderRadius: 14,
                      width: 48,
                      height: 48,
                      minWidth: 48,
                      minHeight: 48,
                      boxShadow: '0 1px 4px 0 rgba(0,0,0,0.10)',
                      padding: 0,
                    }}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      style={{ width: 24, height: 24, display: 'block' }}
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M17.5 7h-11A.5.5 0 0 0 6 7.5v9A.5.5 0 0 0 6.5 17h11a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5zm-7.25 9h-2v-6h2v6zm-1-7a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm8.25 7h-2v-2.5c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5V16h-2v-6h2v.75c.41-.58 1.09-.75 1.5-.75 1.38 0 2.5 1.12 2.5 2.5V16z" fill="#0077B5"/>
                    </svg>
                  </a>
                )}
                {/* Focus area(s) bubbles */}
                {Array.isArray(selected.focus)
                  ? selected.focus.map((focus: string, idx: number) => (
                      <span key={idx} style={{
                        background: '#F5F6F8',
                        color: '#1E2332',
                        borderRadius: 14,
                        padding: '0 18px',
                        height: 48,
                        minWidth: 48,
                        display: 'flex',
                        alignItems: 'center',
                        fontWeight: 500,
                        fontSize: '1.08rem',
                        letterSpacing: 0.5,
                        boxShadow: '0 1px 4px 0 rgba(0,0,0,0.07)',
                      }}>{focus}</span>
                    ))
                  : selected.focus ? (
                      <span style={{
                        background: '#F5F6F8',
                        color: '#1E2332',
                        borderRadius: 14,
                        padding: '0 18px',
                        height: 48,
                        minWidth: 48,
                        display: 'flex',
                        alignItems: 'center',
                        fontWeight: 500,
                        fontSize: '1.08rem',
                        letterSpacing: 0.5,
                        boxShadow: '0 1px 4px 0 rgba(0,0,0,0.07)',
                      }}>{selected.focus}</span>
                    ) : null}
              </div>
            </div>
            {/* Right: Bio */}
            <div style={{ flex: 1, padding: '2.5rem 2rem', overflowY: 'auto', color: 'white', height: '100%', minWidth: 0 }}>
              <h2 style={{ fontSize: '2rem', fontWeight: 700, margin: 0 }}>{selected.name}</h2>
              <p style={{ color: '#B0B3C7', fontSize: '1.1rem', margin: '8px 0 24px 0' }}>{selected.title}</p>
              <div style={{ fontSize: '1.08rem', lineHeight: 1.7, whiteSpace: 'pre-line' }}>{selected.bio}</div>
            </div>
            {/* Close button */}
            <button
              onClick={() => setSelected(null)}
              aria-label="Close"
              style={{
                position: 'absolute',
                top: 18,
                right: 18,
                background: 'rgba(30,35,50,0.8)',
                border: 'none',
                color: 'white',
                fontSize: 28,
                borderRadius: '50%',
                width: 40,
                height: 40,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 10,
              }}
            >
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  );
} 