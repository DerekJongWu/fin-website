import PortfolioHeader from '@/components/PortfolioHeader';
import Footer from '@/components/Footer';
import AboutPageClient from './AboutPageClient';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About - Fin Capital',
};

export default function AboutPage() {
  const features = [
    {
      title: 'Lighthouse',
      description:
        'We provide our Founders and LPs with access to our proprietary AI platform to strengthen collaboration and empower our partnership. ',
    },
    {
      title: 'Business Development & GTM Strategy',
      description:
        'We leverage our extensive network and experience to help portfolio companies identify and pursue high-impact commercial opportunities, build scalable go-to-market strategies, and form strategic partnerships to accelerate revenue growth.',
    },
    {
      title: 'Corporate Development',
      description:
        'We provide hands-on support with strategic planning, M&A execution, and partnership negotiations to help founders unlock new growth pathways and maximize enterprise value.',
    },
    {
      title: 'Board Leadership',
      description:
        'We offer active board-level guidance grounded in deep operational and industry experience, helping founders stay focused on long-term goals while managing key governance priorities.',
    },
    {
      title: 'Talent Sourcing',
      description:
        'We help portfolio companies attract, assess, and retain world-class talent across technical and business functions through our recruiting partners and internal hiring support.',
    },
  ];

  return (
    <div style={{ background: '#1E2332', minHeight: '100vh', width: '100vw', fontFamily: 'var(--font-inter)' }}>
      <PortfolioHeader />
      <AboutPageClient features={features} />
    </div>
  );
} 