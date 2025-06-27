'use client';
import React, { useState, useMemo } from 'react';
import PortfolioHeader from '@/components/PortfolioHeader';
import Footer from '@/components/Footer';
import imageUrlBuilder from '@sanity/image-url';
import type { SanityImageSource } from '@sanity/image-url/lib/types/types';
import { client } from '@/sanity/client';

// Team member type definition
interface TeamMember {
  _id: string;
  name: string;
  title: string;
  image: SanityImageSource;
  bio: string;
  linkedinUrl?: string;
  focus: string | string[];
  metadataTag: string | string[];
  order: number;
}

interface Advisor {
  _id: string;
  name: string;
  title: string;
  linkedinUrl?: string;
  order: number;
}

// Image URL builder setup
const { projectId, dataset } = client.config();
const urlFor = (source: SanityImageSource) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;

export default function TeamPageClient({ team, advisors }: { team: TeamMember[]; advisors: Advisor[] }) {
  const [selected, setSelected] = useState<TeamMember | null>(null);
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
    <div style={{ background: '#1E2332', minHeight: '100vh', width: '100vw', fontFamily: 'var(--font-inter)' }}>
      <PortfolioHeader />
      <main
        style={{
          maxWidth: 1400,
          margin: '0 auto',
          padding: '50px 24px 48px 24px',
          minHeight: '80vh',
          fontFamily: 'var(--font-inter)'
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
                fontFamily: 'var(--font-inter)'
              }}
            >
              {tag}
            </button>
          ))}
        </div>
        <h1 style={{ color: 'white', fontSize: '2.5rem', fontWeight: 700, marginBottom: 40, fontFamily: 'var(--font-inter)' }}>Our Team</h1>
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
                fontFamily: 'var(--font-inter)'
              }}
              onClick={() => setSelected(member)}
              onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.04)')}
              onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
            >
              <div
                style={{
                  width: '100%',
                  maxWidth: 370,
                  height: 340,
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
                      objectPosition: 'center 10%',
                      display: 'block',
                    }}
                  />
                )}
              </div>
              <h2 style={{ color: 'white', fontSize: '1.3rem', fontWeight: 600, margin: '18px 0 0 0', textAlign: 'center', fontFamily: 'var(--font-inter)' }}>{member.name}</h2>
              <p style={{ color: '#B0B3C7', fontSize: '1.05rem', marginTop: 4, textAlign: 'center', fontFamily: 'var(--font-inter)' }}>{member.title}</p>
            </div>
          ))}
        </div>
      </main>
      {/* Our Advisors Section */}
      <section style={{ maxWidth: 1400, margin: '56px auto 0 auto', padding: '0 24px 64px 24px', fontFamily: 'var(--font-inter)' }}>
        <h2 style={{ color: 'white', fontSize: '2rem', fontWeight: 600, marginBottom: 18, marginTop: 0, letterSpacing: 0.5 }}>OUR ADVISORS</h2>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: `repeat(${Math.ceil(advisors.length / 2)}, 1fr)`,
            gridTemplateRows: 'repeat(2, auto)',
            gap: '2.5rem 0',
            color: 'white',
            fontFamily: 'var(--font-inter)',
            width: '100%',
          }}
        >
          {advisors.map((advisor, idx) => (
            <div key={advisor._id} style={{ marginBottom: 0, gridRow: idx < Math.ceil(advisors.length / 2) ? 1 : 2 }}>
              {advisor.linkedinUrl ? (
                <a
                  href={advisor.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: 'white',
                    fontWeight: 700,
                    fontSize: '1rem',
                    textDecoration: 'none',
                    transition: 'border-bottom 0.2s',
                    borderBottom: '2px solid transparent',
                    display: 'inline-block',
                    cursor: 'pointer',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.borderBottom = '2px solid #fff')}
                  onMouseLeave={e => (e.currentTarget.style.borderBottom = '2px solid transparent')}
                >
                  {advisor.name}
                </a>
              ) : (
                <span style={{ color: 'white', fontWeight: 700, fontSize: '1rem' }}>{advisor.name}</span>
              )}
              <div style={{ color: '#B0B3C7', fontWeight: 400, fontSize: '0.92rem', marginTop: 2 }}>{advisor.title}</div>
            </div>
          ))}
        </div>
      </section>
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
            fontFamily: 'var(--font-inter)'
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
              fontFamily: 'var(--font-inter)'
            }}
          >
            {/* Left: Image */}
            <div style={{ flex: 1, background: '#181a28', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '32px 0', minWidth: 0 }}>
              {selected.image && (
                <img
                  src={urlFor(selected.image)?.width(520).height(520).fit('crop').url() || ''}
                  alt={selected.name}
                  style={{
                    width: '85%',
                    height: '100%',
                    maxWidth: 380,
                    maxHeight: 480,
                    aspectRatio: '4/5',
                    objectFit: 'cover',
                    borderRadius: 28,
                    boxShadow: '0 2px 20px 0 rgba(0,0,0,0.15)',
                    display: 'block',
                    margin: '0 auto',
                  }}
                />
              )}
              <div style={{ display: 'flex', gap: 12, marginTop: 28, flexWrap: 'wrap', justifyContent: 'flex-start', width: '85%', maxWidth: 380, marginLeft: 'auto', marginRight: 'auto' }}>
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
                      style={{ width: 20, height: 20, display: 'block' }}
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" fill="#0077B5"/>
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
                        fontFamily: 'var(--font-inter)'
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
                        fontFamily: 'var(--font-inter)'
                      }}>{selected.focus}</span>
                    ) : null}
              </div>
            </div>
            {/* Right: Bio */}
            <div style={{ flex: 1, padding: '2.5rem 2rem', overflowY: 'auto', color: 'white', height: '100%', minWidth: 0, fontFamily: 'var(--font-inter)' }}>
              <h2 style={{ fontSize: '2rem', fontWeight: 700, margin: 0, fontFamily: 'var(--font-inter)' }}>{selected.name}</h2>
              <p style={{ color: '#B0B3C7', fontSize: '1.1rem', margin: '8px 0 24px 0', fontFamily: 'var(--font-inter)' }}>{selected.title}</p>
              <div style={{ fontSize: '1.08rem', lineHeight: 1.7, whiteSpace: 'pre-line', fontFamily: 'var(--font-inter)' }}>{selected.bio}</div>
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
                fontFamily: 'var(--font-inter)'
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