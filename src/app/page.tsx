'use client';

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    // Start image zoom animation
    setImageLoaded(true);
    // Start text animation after image zoom
    setTimeout(() => {
      setIsVisible(true);
    }, 1000);
  }, []);

  return (
    <div style={{ fontFamily: 'var(--font-inter)', overscrollBehavior: 'none' }}>
      <Header />
      <div className="relative overflow-hidden" style={{ overscrollBehavior: 'none' }}>
        <main
          className="relative w-full flex flex-col"
          style={{
            backgroundImage: 'url(/test.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: '10% center',
            backgroundRepeat: 'no-repeat',
            height: '100vh',
            minHeight: '100vh',
            transform: `scale(${imageLoaded ? 1.1 : 1})`,
            transition: 'transform 1s ease-out',
            transformOrigin: 'center center',
            overscrollBehavior: 'none',
          }}
        >
          <div
            className="flex flex-col justify-center relative z-10"
            style={{
              height: '100vh',
              paddingLeft: '10vw',
              paddingTop: '15vh',
              paddingBottom: '15vh',
            }}
          >
            <h1
              className="landing-title text-[clamp(3rem,7vw,5rem)] leading-tight font-bold"
              style={{ maxWidth: '900px', textShadow: '0 2px 16px rgba(0,0,0,0.25)', color: '#fff' }}
            >
              <span
                className={`block transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} landing-title-span`}
              >
                Built by operators
              </span>
              <span
                className={`block transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} landing-title-span`}
              >
                for operators
              </span>
            </h1>
            <style jsx>{`
              .landing-title, .landing-title-span {
                color: #fff !important;
              }
            `}</style>
          </div>
        </main>
      </div>
      {/* Copyright at the bottom of the image */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          background: 'transparent',
          color: '#fff',
          textAlign: 'center',
          fontSize: '0.75rem',
          fontWeight: 400,
          padding: '6px 0',
          zIndex: 20,
          letterSpacing: 0.2,
          textShadow: '0 1px 4px rgba(0,0,0,0.25)'
        }}
      >
        © {new Date().getFullYear()} Fin Capital. All rights reserved.
      </div>
    </div>
  );
}