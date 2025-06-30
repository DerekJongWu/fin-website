import { client } from '@/sanity/client';
import TeamPageClient from './TeamPageClient';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Team - Fin Capital',
};

export const revalidate = 600;

const TEAM_QUERY = `*[_type == "teamMember"]{_id, name, title, image, bio,linkedinUrl, focus, metadataTag, order} | order(order asc)`;
const ADVISOR_QUERY = `*[_type == "advisorMember"]{_id, name, title,linkedinUrl, order} | order(order asc)`;

export default async function TeamPage() {
  const team = await client.fetch(TEAM_QUERY);
  const advisors = await client.fetch(ADVISOR_QUERY);

  return <TeamPageClient team={team} advisors={advisors} />;
}
