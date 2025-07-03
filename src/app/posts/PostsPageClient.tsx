"use client";
import Link from "next/link";
import { useState } from "react";
import PortfolioHeader from "@/components/PortfolioHeader";

// Define the interface for post data
interface Post {
  _id: string;
  postType: string;
  featured: boolean;
  title: string;
  publishedAt: string;
  slug: {
    current: string;
  };
  newslink?: string;
}

const FILTERS = [
  { label: "All", value: "all" },
  { label: "GTM Navigator", value: "GTM Navigator" },
  { label: "Fin News", value: "Fin News" },
  { label: "Investment Announcements", value: "Investment Announcements" },
];

function getCardBg(postType: string) {
  if (postType === "GTM Navigator") return "#2D50A0";
  if (postType === "Fin News") return "#8F8F8F";
  if (postType === "Investment Announcements") return "#BAA134";
  return "rgba(255,255,255,0.03)";
}

export default function PostsPageClient({ posts }: { posts: Post[] }) {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredPosts = activeFilter === "all"
    ? posts
    : posts.filter(post => post.postType === activeFilter);

  const featuredPosts = filteredPosts.filter(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  const gridPosts = activeFilter === "all" ? regularPosts : filteredPosts;

  return (
    <div style={{ background: '#1E2332', minHeight: '100vh', width: '100vw', fontFamily: 'var(--font-inter)' }}>
      <PortfolioHeader />
      <main style={{ maxWidth: 1400, margin: '0 auto', padding: '50px 24px 48px 24px', minHeight: '80vh' }}>
        <h1 style={{ color: 'white', fontSize: 'clamp(2rem, 5vw, 2.5rem)', fontWeight: 700, marginBottom: 40, fontFamily: 'var(--font-inter)' }}>News & Insights</h1>
        {/* Filter Bar */}
        <div style={{ display: 'flex', gap: 'clamp(16px, 4vw, 32px)', alignItems: 'center', marginBottom: 24, borderBottom: '1px solid #3A4060', paddingBottom: 8, flexWrap: 'wrap' }}>
          {FILTERS.map(filter => (
            <button
              key={filter.value}
              onClick={() => setActiveFilter(filter.value)}
              style={{
                background: 'none',
                border: 'none',
                color: 'white',
                fontWeight: activeFilter === filter.value ? 700 : 500,
                fontSize: 'clamp(1rem, 2.5vw, 1.15rem)',
                cursor: 'pointer',
                borderBottom: activeFilter === filter.value ? '3px solid #FFD700' : '3px solid transparent',
                padding: '0 0 8px 0',
                outline: 'none',
                fontFamily: 'var(--font-inter)',
                transition: 'border 0.2s, color 0.2s',
                whiteSpace: 'nowrap',
              }}
            >
              {filter.label}
            </button>
          ))}
        </div>
        {/* Featured Section */}
        {activeFilter === "all" && featuredPosts.length > 0 && (
          <section style={{ marginBottom: 60 }}>
            <h2 style={{ color: 'white', fontSize: 'clamp(1.5rem, 4vw, 1.8rem)', fontWeight: 600, marginBottom: 24, fontFamily: 'var(--font-inter)' }}>Featured</h2>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gridAutoRows: 'clamp(160px, 25vw, 180px)',
                gap: 'clamp(16px, 3vw, 24px)',
                gridAutoFlow: 'dense',
              }}
            >
              {featuredPosts.map((post, idx) => {
                // Responsive quilt pattern: simpler on mobile, complex on desktop
                const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
                let quiltPattern;
                
                if (isMobile) {
                  // On mobile, all cards are the same size
                  quiltPattern = [
                    { gridColumn: 'span 1', gridRow: 'span 1' },
                    { gridColumn: 'span 1', gridRow: 'span 1' },
                    { gridColumn: 'span 1', gridRow: 'span 1' },
                    { gridColumn: 'span 1', gridRow: 'span 1' },
                    { gridColumn: 'span 1', gridRow: 'span 1' },
                  ];
                } else {
                  // On desktop, use the original quilt pattern
                  quiltPattern = [
                    { gridColumn: 'span 2', gridRow: 'span 2' },
                    { gridColumn: 'span 2', gridRow: 'span 1' },
                    { gridColumn: 'span 1', gridRow: 'span 2' },
                    { gridColumn: 'span 1', gridRow: 'span 1' },
                    { gridColumn: 'span 1', gridRow: 'span 1' },
                  ];
                }
                
                const pattern = quiltPattern[idx % quiltPattern.length];
                const gridColumn = pattern.gridColumn;
                const gridRow = pattern.gridRow;
                return (
                  <div
                    key={post._id}
                    style={{
                      background: getCardBg(post.postType),
                      borderRadius: 16,
                      padding: 'clamp(16px, 3vw, 24px)',
                      border: '1px solid rgba(255,255,255,0.1)',
                      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                      cursor: 'pointer',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'flex-end',
                      position: 'relative',
                      overflow: 'hidden',
                      gridColumn,
                      gridRow,
                      minHeight: 0,
                      minWidth: 0,
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-8px) scale(1.03)';
                      e.currentTarget.style.boxShadow = '0 12px 24px rgba(0,0,0,0.18)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0) scale(1)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  >
                    {/* Top right: Badge */}
                    <span style={{
                      position: 'absolute',
                      top: 'clamp(12px, 2vw, 16px)',
                      right: 'clamp(16px, 3vw, 20px)',
                      background: 'rgba(255,255,255,0.85)',
                      color: '#23263a',
                      borderRadius: 8,
                      padding: '2px clamp(8px, 2vw, 12px)',
                      fontSize: 'clamp(0.8rem, 2.2vw, 0.95rem)',
                      fontWeight: 500,
                      zIndex: 2,
                      boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
                    }}>{post.postType}</span>
                    {/* Center: Optional logo or icon could go here */}
                    <Link
                      href={post.newslink || `/posts/${post.slug.current}`}
                      style={{
                        textDecoration: 'none',
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flex: 1,
                        position: 'relative',
                      }}
                      target={post.newslink ? "_blank" : undefined}
                      rel={post.newslink ? "noopener noreferrer" : undefined}
                    >
                      {/* Bottom: Title */}
                      <span style={{
                        position: 'absolute',
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: 'rgba(30,35,50,0.75)',
                        color: 'white',
                        fontWeight: 700,
                        fontSize: 'clamp(0.9rem, 2.5vw, 1.1rem)',
                        padding: 'clamp(12px, 2.5vw, 16px) clamp(16px, 3vw, 20px) clamp(8px, 2vw, 12px) clamp(16px, 3vw, 20px)',
                        borderBottomLeftRadius: 16,
                        borderBottomRightRadius: 16,
                        textShadow: '0 2px 8px rgba(0,0,0,0.18)',
                        zIndex: 3,
                        display: 'block',
                        textAlign: 'left',
                        letterSpacing: '-0.01em',
                      }}>{post.title}</span>
                    </Link>
                  </div>
                );
              })}
            </div>
          </section>
        )}
        {/* Regular Posts Grid */}
        <section>
          <h2 style={{ color: 'white', fontSize: 'clamp(1.5rem, 4vw, 1.8rem)', fontWeight: 600, marginBottom: 24, fontFamily: 'var(--font-inter)' }}>All Articles</h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 'clamp(16px, 3vw, 24px)'
          }}>
            {gridPosts.map((post) => (
              <div key={post._id} style={{
                background: getCardBg(post.postType),
                borderRadius: 16,
                padding: 'clamp(16px, 3vw, 24px)',
                border: '1px solid rgba(255,255,255,0.1)',
                transition: 'transform 0.2s ease-in-out',
                cursor: 'pointer',
                height: '100%'
              }}>
                <Link
                  href={post.newslink || `/posts/${post.slug.current}`}
                  style={{ textDecoration: 'none' }}
                  target={post.newslink ? "_blank" : undefined}
                  rel={post.newslink ? "noopener noreferrer" : undefined}
                >
                  <h2 style={{ color: 'white', fontSize: 'clamp(1.1rem, 3vw, 1.3rem)', fontWeight: 600, marginBottom: 8, fontFamily: 'var(--font-inter)' }}>{post.title}</h2>
                  <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: 'clamp(0.9rem, 2.5vw, 1.05rem)', fontFamily: 'var(--font-inter)' }}>{new Date(post.publishedAt).toLocaleDateString()}</p>
                </Link>
              </div>
            ))}
          </div>
        </section>
      </main>

      <style jsx global>{`
        /* Responsive breakpoints for featured posts quilt pattern */
        @media (min-width: 768px) {
          .featured-grid {
            grid-template-columns: repeat(4, 1fr) !important;
          }
          .featured-grid > div:nth-child(1) {
            grid-column: span 2 !important;
            grid-row: span 2 !important;
          }
          .featured-grid > div:nth-child(2) {
            grid-column: span 2 !important;
            grid-row: span 1 !important;
          }
          .featured-grid > div:nth-child(3) {
            grid-column: span 1 !important;
            grid-row: span 2 !important;
          }
          .featured-grid > div:nth-child(4) {
            grid-column: span 1 !important;
            grid-row: span 1 !important;
          }
          .featured-grid > div:nth-child(5) {
            grid-column: span 1 !important;
            grid-row: span 1 !important;
          }
        }
      `}</style>
    </div>
  );
} 