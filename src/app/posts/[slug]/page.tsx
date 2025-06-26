import { PortableText, type SanityDocument } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { client } from "@/sanity/client";
import Link from "next/link";
import PortfolioHeader from "@/components/PortfolioHeader";
import Footer from "@/components/Footer";
import SocialIcons from "./SocialIcons";

// Define interface for image value in Portable Text
interface ImageValue {
  asset?: {
    _ref: string;
  };
  alt?: string;
}

const POST_QUERY = `*[_type == "post" && slug.current == $slug][0]`;

const { projectId, dataset } = client.config();
const urlFor = (source: SanityImageSource) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;

const options = { next: { revalidate: 30 } };

// Custom components for Portable Text
const components = {
  types: {
    image: ({ value }: { value: ImageValue }) => {
      if (!value?.asset?._ref) {
        return null;
      }
      return (
        <img
          src={urlFor(value)?.width(800).url()}
          alt={value.alt || ' '}
          style={{
            width: '100%',
            height: 'auto',
            borderRadius: '16px',
            margin: '2rem 0'
          }}
        />
      );
    },
    youtube: ({ value }: { value: { url: string } }) => {
      if (!value?.url) {
        return null;
      }
      // Extract video ID from YouTube URL
      const videoId = value.url.match(/(?:youtu\.be\/|youtube\.com(?:\/embed\/|\/v\/|\/watch\?v=|\/user\/\S+|\/ytscreeningroom\?v=|\/sandalsResorts#\w\/\w\/.*\/))([^\/&\?]*)/)?.[1];
      if (!videoId) {
        return null;
      }
      return (
        <div style={{ 
          position: 'relative', 
          paddingBottom: '56.25%', 
          height: 0, 
          overflow: 'hidden',
          maxWidth: '100%',
          margin: '2rem 0',
          borderRadius: '16px'
        }}>
          <iframe
            src={`https://www.youtube.com/embed/${videoId}`}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              border: 0,
              borderRadius: '16px'
            }}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      );
    }
  }
};

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const post = await client.fetch<SanityDocument>(POST_QUERY, await params, options);
  const postImageUrl = post.image
    ? urlFor(post.image)?.width(550).height(310).url()
    : null;

  return (
    <div style={{ background: '#1E2332', minHeight: '100vh', width: '100vw', fontFamily: 'var(--font-inter)' }}>
      <PortfolioHeader />
      <main style={{ maxWidth: 850, margin: '0 auto', padding: '50px 24px 48px 24px', minHeight: '80vh' }}>
        <Link href="/posts" style={{ 
          color: '#B0B3C7', 
          textDecoration: 'none',
          display: 'inline-block',
          marginBottom: '2rem',
          fontSize: '1.1rem',
          fontFamily: 'var(--font-inter)'
        }}>
          ← Back to posts
        </Link>
        {postImageUrl && (
          <img
            src={postImageUrl}
            alt={post.title}
            style={{
              width: '100%',
              maxWidth: '100%',
              height: 'auto',
              borderRadius: '16px',
              marginBottom: '2rem'
            }}
          />
        )}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '2rem' }}>
          <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
            {/* Date chip */}
            {post.publishedAt && (
              <span style={{
                background: '#23263a',
                color: '#fff',
                borderRadius: '20px',
                padding: '6px 16px',
                fontSize: '1rem',
                fontWeight: 600,
                letterSpacing: '1px',
                border: '1px solid #B0B3C7',
                display: 'inline-block',
                fontFamily: 'var(--font-inter)'
              }}>
                {new Date(post.publishedAt).toLocaleDateString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' })}
              </span>
            )}
            {/* Category chips */}
            {Array.isArray(post.categories) && post.categories.map((cat: string) => (
              <span key={cat} style={{
                background: '#fff',
                color: '#23263a',
                borderRadius: '16px',
                padding: '6px 14px',
                fontSize: '0.95rem',
                fontWeight: 600,
                marginLeft: '2px',
                display: 'inline-block',
                fontFamily: 'var(--font-inter)'
              }}>{cat.toUpperCase()}</span>
            ))}
          </div>
          {/* Social icons */}
          <SocialIcons />
        </div>
        <h1 style={{ 
          color: 'white', 
          fontSize: '2.5rem', 
          fontWeight: 700, 
          marginBottom: '1rem',
          fontFamily: 'var(--font-inter)'
        }}>{post.title}</h1>
        <p style={{ 
          color: '#B0B3C7', 
          fontSize: '1.1rem',
          marginBottom: '2rem',
          fontFamily: 'var(--font-inter)'
        }}>
          {/* Optionally keep this for redundancy, or remove if not needed */}
        </p>
        <div style={{ 
          color: 'white',
          fontSize: '1.1rem',
          lineHeight: 1.7,
          fontFamily: 'var(--font-inter)'
        }}>
          {Array.isArray(post.body) && <PortableText value={post.body} components={components} />}
        </div>
      </main>
      <Footer />
    </div>
  );
}
