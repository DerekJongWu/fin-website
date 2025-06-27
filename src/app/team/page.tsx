import { client } from '@/sanity/client';
import TeamPageClient from './TeamPageClient';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Team - Fin Capital',
};

const TEAM_QUERY = `*[_type == "teamMember"]{_id, name, title, image, bio,linkedinUrl, focus, metadataTag, order} | order(order asc)`;

export default async function TeamPage() {
  const team = await client.fetch(TEAM_QUERY);

  return <TeamPageClient team={team} />;
}
