'use client';

import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="flex h-screen">
        {/* Left side - Text */}
        <div className="w-1/2 bg-white flex items-center justify-center">
          <div className="max-w-xl">
            <h1 className="text-[clamp(3.5rem,6vw,4.5rem)] leading-tight font-bold">
              Built by operators
              <br />
              for operators
            </h1>
          </div>
        </div>

        {/* Right side - Image */}
        <div className="w-1/2 relative">
          <img 
            src="/HomePage.jpg" 
            alt="Hero image"
            className="w-full h-full object-cover"
            style={{ objectPosition: 'center 65%' }}
          />
        </div>
      </main>
      <Footer />
    </>
  );
}