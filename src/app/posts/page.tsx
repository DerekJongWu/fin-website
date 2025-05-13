import { type SanityDocument } from "next-sanity";
import { client } from "@/sanity/client";
import PostsPageClient from "./PostsPageClient";

const POSTS_QUERY = `*[
  _type == "post"
  && defined(slug.current)
]|order(publishedAt desc) {_id, title, slug, publishedAt, featured, newslink, postType}`;

const options = { next: { revalidate: 30 } };

export default async function PostsPage() {
  const posts = await client.fetch<SanityDocument[]>(POSTS_QUERY, {}, options);
  return <PostsPageClient posts={posts} />;
} 