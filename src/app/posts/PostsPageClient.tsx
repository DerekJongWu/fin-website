"use client";
import Link from "next/link";
import { useState } from "react";
import PortfolioHeader from "@/components/PortfolioHeader";
import Footer from "@/components/Footer";


const FILTERS = [
  { label: "All", value: "all" },
  { label: "GTM Navigator", value: "GTM Navigator" },
  { label: "Fin News", value: "Fin News" },
  { label: "Investment Announcement", value: "Investment Announcement" },
];

function getCardBg(postType: string) {
  if (postType === "GTM Navigator") return "#2D50A0";
  if (postType === "Fin News") return "#8F8F8F";
  if (postType === "Investment Announcement") return "#BAA134";
  return "rgba(255,255,255,0.03)";
}

export default function PostsPageClient({ posts }: { posts: any[] }) {
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
        <h1 style={{ color: 'white', fontSize: '2.5rem', fontWeight: 700, marginBottom: 40, fontFamily: 'var(--font-inter)' }}>News & Insights</h1>
        {/* Filter Bar */}
        <div style={{ display: 'flex', gap: 32, alignItems: 'center', marginBottom: 24, borderBottom: '1px solid #3A4060', paddingBottom: 8 }}>
          {FILTERS.map(filter => (
            <button
              key={filter.value}
              onClick={() => setActiveFilter(filter.value)}
              style={{
                background: 'none',
                border: 'none',
                color: 'white',
                fontWeight: activeFilter === filter.value ? 700 : 500,
                fontSize: '1.15rem',
                cursor: 'pointer',
                borderBottom: activeFilter === filter.value ? '3px solid #FFD700' : '3px solid transparent',
                padding: '0 0 8px 0',
                outline: 'none',
                fontFamily: 'var(--font-inter)',
                transition: 'border 0.2s, color 0.2s',
              }}
            >
              {filter.label}
            </button>
          ))}
        </div>
        {/* Featured Section */}
        {activeFilter === "all" && featuredPosts.length > 0 && (
          <section style={{ marginBottom: 60 }}>
            <h2 style={{ color: 'white', fontSize: '1.8rem', fontWeight: 600, marginBottom: 24, fontFamily: 'var(--font-inter)' }}>Featured</h2>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                gridAutoRows: '180px',
                gap: '24px',
                gridAutoFlow: 'dense',
              }}
            >
              {featuredPosts.map((post, idx) => {
                // Dynamic quilt pattern: cycle through a pattern of spans
                // Pattern: [2x2, 2x1, 1x2, 1x1, 1x1, ...]
                const quiltPattern = [
                  { gridColumn: 'span 2', gridRow: 'span 2' },
                  { gridColumn: 'span 2', gridRow: 'span 1' },
                  { gridColumn: 'span 1', gridRow: 'span 2' },
                  { gridColumn: 'span 1', gridRow: 'span 1' },
                  { gridColumn: 'span 1', gridRow: 'span 1' },
                ];
                const pattern = quiltPattern[idx % quiltPattern.length];
                const gridColumn = pattern.gridColumn;
                const gridRow = pattern.gridRow;
                return (
                  <div
                    key={post._id}
                    style={{
                      background: getCardBg(post.postType),
                      borderRadius: 16,
                      padding: '24px',
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
                      top: 16,
                      right: 20,
                      background: 'rgba(255,255,255,0.85)',
                      color: '#23263a',
                      borderRadius: 8,
                      padding: '2px 12px',
                      fontSize: '0.95rem',
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
                        fontSize: '1.1rem',
                        padding: '16px 20px 12px 20px',
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
          <h2 style={{ color: 'white', fontSize: '1.8rem', fontWeight: 600, marginBottom: 24, fontFamily: 'var(--font-inter)' }}>All Articles</h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
            gap: '24px'
          }}>
            {gridPosts.map((post) => (
              <div key={post._id} style={{
                background: getCardBg(post.postType),
                borderRadius: 16,
                padding: '24px',
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
                  <h2 style={{ color: 'white', fontSize: '1.3rem', fontWeight: 600, marginBottom: 8, fontFamily: 'var(--font-inter)' }}>{post.title}</h2>
                  <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.05rem', fontFamily: 'var(--font-inter)' }}>{new Date(post.publishedAt).toLocaleDateString()}</p>
                </Link>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
} 