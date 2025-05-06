'use client';

import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <>
      <Header />
      <main className="relative h-screen w-full" style={{ backgroundColor: '#1E2332' }}>
        <div className="absolute top-1/2 left-[15%] transform -translate-y-1/2">
          <h1 className="text-[clamp(3.5rem,6vw,4.5rem)] leading-tight font-bold" style={{ color: '#FFFFFF' }}>
            <span className={`block transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              Built by operators
            </span>
            <span className={`block transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              for operators
            </span>
          </h1>
        </div>
      </main>
      <Footer />
    </>
  );
}