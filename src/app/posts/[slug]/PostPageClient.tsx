'use client';
import React from "react";

export default function PostPageClient() {
  const [copied, setCopied] = React.useState(false);
  const [postUrl, setPostUrl] = React.useState('');
  React.useEffect(() => {
    setPostUrl(window.location.href);
  }, []);
  const handleCopy = () => {
    navigator.clipboard.writeText(postUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 1000);
  };

  return (
    <div style={{ display: 'flex', gap: '18px', alignItems: 'center' }}>
      {/* X Icon */}
      <a 
        href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(postUrl)}`} 
        target="_blank" 
        rel="noopener noreferrer"
        style={{ color: 'inherit', textDecoration: 'none' }}
      >
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <circle cx="16" cy="16" r="16" fill="#fff" />
          <path d="M22.162 8.667L17.07 14.07L22.093 21H18.21L15.07 16.93L11.62 21H9.838L14.93 15.597L9.907 9H13.79L16.93 13.07L20.38 9H22.162ZM18.37 19.13H19.19L13.7 11.77H12.74L18.37 19.13Z" fill="#1E2332"/>
        </svg>
      </a>
      {/* LinkedIn Icon */}
      <a
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(postUrl)}`}
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: 'inherit', textDecoration: 'none' }}
      >
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <circle cx="16" cy="16" r="16" fill="#fff" />
          <g>
            <rect x="9" y="14" width="2.5" height="8" fill="#1E2332"/>
            <circle cx="10.25" cy="12" r="1.25" fill="#1E2332"/>
            <path d="M14.5 14V22H17V17.5C17 16.25 17.75 15.5 18.6875 15.5C19.625 15.5 20 16.175 20 17.5V22H22.5V17C22.5 14.5 21.375 13.5 19.6875 13.5C18.5625 13.5 18 14.175 17.625 14.625H17.6V14H14.5Z" fill="#1E2332"/>
          </g>
        </svg>
      </a>
      {/* Copy Link Icon */}
      <button
        style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}
        onClick={handleCopy}
        aria-label={copied ? 'Copied!' : 'Copy link'}
      >
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <circle cx="16" cy="16" r="16" fill="#fff" />
          <g>
            <path d="M20.24 11.76a3 3 0 0 0-4.24 0l-3.24 3.24a3 3 0 0 0 4.24 4.24l.47-.47a1 1 0 1 0-1.42-1.42l-.47.47a1 1 0 1 1-1.42-1.42l3.24-3.24a1 1 0 1 1 1.42 1.42l-.47.47a1 1 0 1 0 1.42 1.42l.47-.47a3 3 0 0 0 0-4.24z" fill="#1E2332"/>
          </g>
        </svg>
      </button>
    </div>
  );
} 