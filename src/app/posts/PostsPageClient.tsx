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
  if (postType === "GTM Navigator") return "#E1E2E5";
  if (postType === "Fin News") return "#93E9BE";
  if (postType === "Investment Announcement") return "#FFD700";
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
                gridAutoRows: '200px',
                gap: '24px',
                gridAutoFlow: 'dense',
              }}
            >
              {(() => {
                // Find the first GTM Navigator article
                const bigIdx = featuredPosts.findIndex(post => post.postType === "GTM Navigator");
                return featuredPosts.map((post, idx) => {
                  let gridColumn = 'span 1';
                  let gridRow = 'span 1';
                  if ((bigIdx !== -1 && idx === bigIdx) || (bigIdx === -1 && idx === 0)) {
                    gridColumn = 'span 2';
                    gridRow = 'span 2';
                  }
                  return (
                    <div
                      key={post._id}
                      style={{
                        gridColumn,
                        gridRow,
                        background: getCardBg(post.postType),
                        borderRadius: 16,
                        padding: '24px',
                        border: '1px solid rgba(255,255,255,0.1)',
                        transition: 'transform 0.2s ease-in-out',
                        cursor: 'pointer',
                        minWidth: 0,
                        minHeight: 0,
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'flex-end',
                      }}
                    >
                      <Link
                        href={post.newslink || `/posts/${post.slug.current}`}
                        style={{ textDecoration: 'none' }}
                        target={post.newslink ? "_blank" : undefined}
                        rel={post.newslink ? "noopener noreferrer" : undefined}
                      >
                        <h2 style={{ color: '#1E2332', fontSize: '1.3rem', fontWeight: 600, marginBottom: 8, fontFamily: 'var(--font-inter)' }}>{post.title}</h2>
                        <p style={{ color: '#1E2332', fontSize: '1.05rem', fontFamily: 'var(--font-inter)' }}>{new Date(post.publishedAt).toLocaleDateString()}</p>
                      </Link>
                    </div>
                  );
                });
              })()}
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
                  <h2 style={{ color: '#1E2332', fontSize: '1.3rem', fontWeight: 600, marginBottom: 8, fontFamily: 'var(--font-inter)' }}>{post.title}</h2>
                  <p style={{ color: '#1E2332', fontSize: '1.05rem', fontFamily: 'var(--font-inter)' }}>{new Date(post.publishedAt).toLocaleDateString()}</p>
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