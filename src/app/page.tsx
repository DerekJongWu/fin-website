'use client';

import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ImageSlider from "@/components/ImageSlider";
import { useEffect, useState } from "react";

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div style={{ fontFamily: 'var(--font-inter)' }}>
      <Header />
      <main className="relative min-h-screen w-full" style={{ backgroundColor: '#E1E2E5', fontFamily: 'var(--font-inter)' }}>
        <div className="absolute top-[25vh] left-[15%] text-left">
          <h1 className="text-[clamp(3.5rem,6vw,4.5rem)] leading-tight font-bold" style={{ color: '#1E2332', fontFamily: 'var(--font-inter)' }}>
            <span className={`block transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              Built by operators
            </span>
            <span className={`block transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              for operators
            </span>
          </h1>
        </div>
        <div className="absolute top-[35vh] left-1/2 transform -translate-x-1/2 w-full">
          <ImageSlider />
        </div>
      </main>
      <Footer />
    </div>
  );
}