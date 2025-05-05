import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { client } from '@/sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import type { SanityImageSource } from '@sanity/image-url/lib/types/types';
import TeamPageClient from './TeamPageClient';

const TEAM_QUERY = `*[_type == "teamMember"]{_id, name, title, image, bio,linkedinUrl, focus, metadataTag, order} | order(order asc)`;

const { projectId, dataset } = client.config();
export const urlFor = (source: SanityImageSource) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;

export default async function TeamPage() {
  const team = await client.fetch<any[]>(TEAM_QUERY);
  return <TeamPageClient team={team} />;
}
