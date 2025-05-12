import PortfolioHeader from '@/components/PortfolioHeader';
import Footer from '@/components/Footer';
import PortfolioClient from './PortfolioClient';

// Replace with your actual API endpoint
const API_URL = 'https://app.lighthouse.ai/api?type=portfolio&key=sT3Qb2Li1ZkMQ3iE6ScJtXev2raZZHgc';

export default async function PortfolioPage() {
  // Fetch company data from external API
  const res = await fetch(API_URL, { next: { revalidate: 60 } });
  if (!res.ok) throw new Error('Failed to fetch companies');
  const companiesRaw = await res.json();

  // Map API keys to expected keys for PortfolioClient
  const companies = companiesRaw.map((c: any) => ({
    name: c["Company Name"],
    website: c["Website"],
    description: c['Description'],
    thesis: c['Thesis'],
    logoUrl: c["Logo URL"],
    status: c['Status'],
    fund: c['Fund']
  }));

  return (
    <div style={{ background: '#1E2332', minHeight: '100vh', width: '100vw', fontFamily: 'var(--font-inter)' }}>
      <PortfolioHeader />
      <main style={{ maxWidth: 1400, margin: '0 auto', padding: '30px 24px 48px 24px', minHeight: '80vh' }}>
        <h1 style={{ color: 'white', fontSize: '2.2rem', fontWeight: 700, marginBottom: 16, fontFamily: 'var(--font-inter)' }}>Companies</h1>
        <div style={{ width: '100%', height: '1px', background: 'rgba(255,255,255,0.1)', marginBottom: 32 }} />
        <PortfolioClient companies={companies} />
      </main>
      <Footer />
    </div>
  );
}
