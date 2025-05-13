import { PortableText, type SanityDocument } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { client } from "@/sanity/client";
import Link from "next/link";
import PortfolioHeader from "@/components/PortfolioHeader";
import Footer from "@/components/Footer";

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
    image: ({ value }: { value: any }) => {
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
      <main style={{ maxWidth: 1400, margin: '0 auto', padding: '50px 24px 48px 24px', minHeight: '80vh' }}>
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
          Published: {new Date(post.publishedAt).toLocaleDateString()}
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
