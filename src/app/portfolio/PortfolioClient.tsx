"use client";
import React, { useState } from "react";

interface Company {
  name: string;
  website: string;
  description: string;
  thesis: string;
  logoUrl: string;
  status: string; 
  fund: string;
}

export default function PortfolioClient({ companies }: { companies: Company[] }) {
  // Alphabetize companies by name
  const sortedCompanies = [...companies].sort((a, b) => a.name.localeCompare(b.name));
  const [selected, setSelected] = useState<Company | null>(null);
  const [showFilter, setShowFilter] = useState(false);
  const [selectedTheses, setSelectedTheses] = useState<string[]>([]);
  const [selectedStages, setSelectedStages] = useState<string[]>([]);
  const [selectedStatuses, setSelectedStatuses] = useState<string[]>([]);

  // Collect unique values for filter options
  const allTheses = Array.from(new Set(companies.map(c => c.thesis).filter(Boolean)));
  const allStages = ['Early', 'Growth'];
  const allStatuses = Array.from(new Set(companies.map(c => c.status).filter(Boolean)));

  // Helper: get company stage(s) from fund
  function getCompanyStages(fund: string) {
    const f = (fund || '').toLowerCase();
    const stages = [];
    if (f.includes('regatta') || f.includes('flagship')) stages.push('Early');
    if (f.includes('horizons')) stages.push('Growth');
    return stages;
  }

  // Filter companies based on selected filters
  const filteredCompanies = sortedCompanies.filter(company => {
    // Thesis filter
    if (selectedTheses.length > 0 && !selectedTheses.includes(company.thesis)) {
      return false;
    }
    // Stage filter
    if (selectedStages.length > 0) {
      const companyStages = getCompanyStages(company.fund);
      if (!selectedStages.some(stage => companyStages.includes(stage))) {
        return false;
      }
    }
    // Status filter
    if (selectedStatuses.length > 0 && !selectedStatuses.includes(company.status)) {
      return false;
    }
    return true;
  });

  return (
    <section>
      {/* Filter Toggle */}
      <div style={{ marginBottom: 24 }}>
        <span
          style={{
            color: '#FFD700',
            fontWeight: 600,
            fontSize: '1.1rem',
            cursor: 'pointer',
            userSelect: 'none',
            padding: '6px 18px',
            borderRadius: 16,
            background: showFilter ? 'rgba(255,215,0,0.12)' : 'transparent',
            transition: 'background 0.2s',
          }}
          onClick={() => setShowFilter(v => !v)}
        >
          {showFilter ? '− Filter' : '+ Filter'}
        </span>
      </div>
      {/* Filter Panel */}
      {showFilter && (
        <div style={{
          background: '#23263a',
          borderRadius: 18,
          boxShadow: '0 2px 16px 0 rgba(0,0,0,0.10)',
          padding: '24px 32px',
          marginBottom: 32,
          display: 'grid',
          gridTemplateColumns: '2fr 0.7fr 0.7fr',
          gap: 24,
          width: '100%',
          alignItems: 'flex-start',
        }}>
          {/* Thesis */}
          <div style={{ minWidth: 220 }}>
            <div style={{ color: '#FFD700', fontWeight: 600, marginBottom: 10 }}>Thesis</div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0 }}>
              {/* Add marginLeft to the second column */}
              <style>{`
                .thesis-col-1 { margin-left: 0; }
                .thesis-col-2 { margin-left: 24px; }
              `}</style>
              {(() => {
                const colCount = 2;
                const rowCount = Math.ceil(allTheses.length / colCount);
                const columns = Array.from({ length: colCount }, (_, colIdx) =>
                  allTheses.slice(colIdx * rowCount, (colIdx + 1) * rowCount)
                );
                return Array.from({ length: rowCount }, (_, rowIdx) => (
                  <React.Fragment key={rowIdx}>
                    {columns.map((col, colIdx) => {
                      const thesis = col[rowIdx];
                      if (!thesis) return <div key={colIdx} />;
                      return (
                        <label
                          key={thesis}
                          className={`thesis-col-${colIdx + 1}`}
                          style={{ display: 'block', color: 'white', marginBottom: 6, cursor: 'pointer' }}
                        >
                          <input
                            type="checkbox"
                            checked={selectedTheses.includes(thesis)}
                            onChange={e => setSelectedTheses(
                              e.target.checked
                                ? [...selectedTheses, thesis]
                                : selectedTheses.filter(t => t !== thesis)
                            )}
                            style={{ marginRight: 8 }}
                          />
                          {thesis}
                        </label>
                      );
                    })}
                  </React.Fragment>
                ));
              })()}
            </div>
          </div>
          {/* Stage */}
          <div style={{ minWidth: 160 }}>
            <div style={{ color: '#FFD700', fontWeight: 600, marginBottom: 10 }}>Stage</div>
            {allStages.map(stage => (
              <label key={stage} style={{ display: 'block', color: 'white', marginBottom: 6, cursor: 'pointer' }}>
                <input
                  type="checkbox"
                  checked={selectedStages.includes(stage)}
                  onChange={e => setSelectedStages(
                    e.target.checked
                      ? [...selectedStages, stage]
                      : selectedStages.filter(s => s !== stage)
                  )}
                  style={{ marginRight: 8 }}
                />
                {stage}
              </label>
            ))}
          </div>
          {/* Status */}
          <div style={{ minWidth: 160, justifySelf: 'end' }}>
            <div style={{ color: '#FFD700', fontWeight: 600, marginBottom: 10 }}>Status</div>
            {allStatuses.map(status => (
              <label key={status} style={{ display: 'block', color: 'white', marginBottom: 6, cursor: 'pointer' }}>
                <input
                  type="checkbox"
                  checked={selectedStatuses.includes(status)}
                  onChange={e => setSelectedStatuses(
                    e.target.checked
                      ? [...selectedStatuses, status]
                      : selectedStatuses.filter(s => s !== status)
                  )}
                  style={{ marginRight: 8 }}
                />
                {status}
              </label>
            ))}
          </div>
        </div>
      )}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)", // 4 columns
          gap: "2.5rem",
          justifyItems: "center",
        }}
      >
        {filteredCompanies.map((company) => (
          <div
            key={company.name}
            style={{
              textDecoration: "none",
              color: "inherit",
              width: "100%",
              maxWidth: 370,
              aspectRatio: "4 / 3",
              background: "rgba(255, 255, 255, 0.25)",
              borderRadius: 24,
              boxShadow: "0 2px 16px 0 rgba(0,0,0,0.10)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              overflow: "visible",
              position: "relative",
              transition: "transform 0.18s cubic-bezier(.4,1.2,.6,1)",
              padding: 0,
              cursor: "pointer",
              zIndex: 10,
            }}
            onClick={() => setSelected(company)}
            onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.04)')}
            onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
          >
            {/* Exited Bubble */}
            {company.status && company.status.toLowerCase() === 'exited' && (
              <div
                style={{
                  position: 'absolute',
                  top: -14,
                  right: -14,
                  background: '#FFD700',
                  color: '#23263a',
                  fontWeight: 600,
                  fontSize: '1rem',
                  borderRadius: 14,
                  padding: '4px 18px',
                  boxShadow: '0 2px 10px 0 rgba(0,0,0,0.13)',
                  zIndex: 2,
                  border: '3px solid #fff',
                }}
              >
                Exited
              </div>
            )}
            <div style={{ width: '100%', height: '100%', overflow: 'hidden', borderRadius: 24, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img
                src={company.logoUrl}
                alt={company.name + " logo"}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                  display: "block",
                  background: "transparent",
                  mixBlendMode: "multiply",
                  filter: "brightness(0) invert(1)",
                }}
              />
            </div>
          </div>
        ))}
      </div>
      {/* Modal */}
      {selected && (
        <div
          onClick={() => setSelected(null)}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            background: 'rgba(0,0,0,0.55)',
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)',
            zIndex: 2000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div
            onClick={e => e.stopPropagation()}
            style={{
              background: '#23263a',
              borderRadius: 24,
              boxShadow: '0 4px 32px 0 rgba(0,0,0,0.25)',
              width: 'min(1100px, 98vw)',
              height: '550px',
              minHeight: 500,
              maxHeight: 720,
              display: 'flex',
              overflow: 'hidden',
              position: 'relative',
            }}
          >
            {/* Left: Logo */}
            <div style={{ flex: 1.3, background: '#181a28', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '32px 0', minWidth: 0 }}>
              <a href={selected.website} target="_blank" rel="noopener noreferrer" style={{ width: '90%', maxWidth: 320, display: 'block', margin: '0 auto' }}>
                <img
                  src={selected.logoUrl}
                  alt={selected.name + " logo"}
                  style={{
                    width: '100%',
                    maxWidth: 320,
                    maxHeight: 320,
                    objectFit: 'contain',
                    borderRadius: 20,
                    background: '#fff',
                    boxShadow: '0 2px 20px 0 rgba(0,0,0,0.10)',
                    display: 'block',
                  }}
                />
              </a>
              {/* Fund Tag(s) */}
              <div style={{ display: 'flex', gap: 12, marginTop: 28, flexWrap: 'wrap', marginLeft: 0, width: '90%', maxWidth: 320 }}>
                {(() => {
                  const fund = (selected.fund || '').toLowerCase();
                  const tags = [];
                  if (fund.includes('regatta') || fund.includes('flagship')) tags.push('Early');
                  if (fund.includes('horizons')) tags.push('Growth');
                  // Remove duplicates if both regatta/flagship and horizons are present
                  return tags.length > 0 ? tags.map((tag, idx) => (
                    <span key={idx} style={{
                      background: '#F5F6F8',
                      color: '#1E2332',
                      borderRadius: 14,
                      padding: '0 18px',
                      height: 48,
                      minWidth: 48,
                      display: 'flex',
                      alignItems: 'center',
                      fontWeight: 500,
                      fontSize: '1.08rem',
                      letterSpacing: 0.5,
                      boxShadow: '0 1px 4px 0 rgba(0,0,0,0.07)',
                    }}>{tag}</span>
                  )) : null;
                })()}
                {/* Thesis Bubble */}
                {selected.thesis && (
                  <span style={{
                    background: '#FFD700',
                    color: '#23263a',
                    borderRadius: 14,
                    padding: '0 18px',
                    height: 48,
                    minWidth: 48,
                    display: 'flex',
                    alignItems: 'center',
                    fontWeight: 500,
                    fontSize: '1.08rem',
                    letterSpacing: 0.5,
                    boxShadow: '0 1px 4px 0 rgba(0,0,0,0.07)',
                  }}>{selected.thesis}</span>
                )}
              </div>
            </div>
            {/* Right: Description */}
            <div style={{ flex: 1.7, padding: '2.5rem 2rem', overflowY: 'auto', color: 'white', height: '100%', minWidth: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <h2 style={{ fontSize: '2rem', fontWeight: 700, margin: 0 }}>{selected.name}</h2>
              <div style={{ fontSize: '1.08rem', lineHeight: 1.7, whiteSpace: 'pre-line', marginTop: 16 }}>{selected.description}</div>
            </div>
            {/* Close button */}
            <button
              onClick={() => setSelected(null)}
              aria-label="Close"
              style={{
                position: 'absolute',
                top: 18,
                right: 18,
                background: 'rgba(30,35,50,0.8)',
                border: 'none',
                color: 'white',
                fontSize: 28,
                borderRadius: '50%',
                width: 40,
                height: 40,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 10,
              }}
            >
              ×
            </button>
          </div>
        </div>
      )}
    </section>
  );
} 