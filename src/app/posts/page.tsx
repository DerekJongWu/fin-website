import { client } from "@/sanity/client";
import PostsPageClient from "./PostsPageClient";
import { Metadata } from 'next';

// Define the interface for post data (matching PostsPageClient)
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

export const metadata: Metadata = {
  title: 'News & Insights - Fin Capital',
};

const POSTS_QUERY = `*[
  _type == "post"
  && defined(slug.current)
]|order(publishedAt desc) {_id, title, slug, publishedAt, featured, newslink, postType}`;

const options = { next: { revalidate: 30 } };

export default async function PostsPage() {
  const posts = await client.fetch<Post[]>(POSTS_QUERY, {}, options);
  return <PostsPageClient posts={posts} />;
} 