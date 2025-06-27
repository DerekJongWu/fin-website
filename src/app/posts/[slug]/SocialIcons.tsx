"use client";
import React from "react";

export default function SocialIcons() {
  const [url, setUrl] = React.useState("");
  React.useEffect(() => {
    setUrl(window.location.href);
  }, []);

  return (
    <>
      <style>{`
        .social-icon-btn {
          color: #191B23;
          background: #fff;
          border-radius: 50%;
          width: 32px;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          box-shadow: 0 1px 4px rgba(0,0,0,0.04);
          transition: background 0.2s, transform 0.2s;
          border: none;
          cursor: pointer;
        }
        .social-icon-btn:hover {
          background: #FFD700;
          transform: scale(1.13);
        }
      `}</style>
      <div style={{ display: 'flex', gap: '18px', alignItems: 'center' }}>
        {/* X (Twitter) */}
        <a
          href={`https://x.com/share?url=${encodeURIComponent(url)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon-btn"
          aria-label="Share on X"
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M14.7 3H12.9L9.9 7.05L7.2 3H2.25L7.65 10.725L2.4 18H4.2L7.5 13.65L10.5 18H15.45L9.9 10.05L14.7 3ZM5.1 4.2H6.6L12.6 13.8H11.1L5.1 4.2Z" fill="#191B23"/></svg>
        </a>
        {/* LinkedIn */}
        <a
          href={`https://www.linkedin.com/feed/?shareActive=true&shareUrl=${encodeURIComponent(url)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon-btn"
          aria-label="Share on LinkedIn"
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M4.5 6.75H2.25V15.75H4.5V6.75ZM3.375 5.625C4.0875 5.625 4.5 5.175 4.5 4.575C4.5 3.975 4.0875 3.525 3.375 3.525C2.6625 3.525 2.25 3.975 2.25 4.575C2.25 5.175 2.6625 5.625 3.375 5.625ZM6.75 6.75V15.75H9V11.25C9 10.125 9.75 9.375 10.6875 9.375C11.625 9.375 12 10.05 12 11.25V15.75H14.25V10.5C14.25 8.25 13.125 7.125 11.4375 7.125C10.3125 7.125 9.75 7.8 9.375 8.25H9.3375V6.75H6.75Z" fill="#191B23"/></svg>
        </a>
        {/* Link icon */}
        <button
          onClick={() => navigator.clipboard.writeText(url)}
          className="social-icon-btn"
          aria-label="Copy link"
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M12.53 5.47a3.75 3.75 0 0 0-5.3 0l-2.25 2.25a3.75 3.75 0 0 0 5.3 5.3l.53-.53a.75.75 0 1 0-1.06-1.06l-.53.53a2.25 2.25 0 1 1-3.18-3.18l2.25-2.25a2.25 2.25 0 0 1 3.18 3.18.75.75 0 1 0 1.06 1.06 3.75 3.75 0 0 0 0-5.3z" fill="#191B23"/></svg>
        </button>
      </div>
    </>
  );
} 