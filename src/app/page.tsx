'use client';

import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="relative h-screen">
        <img 
          src="/HomePage-1.jpeg" 
          alt="Hero image"
          className="w-full h-full object-cover"
          style={{ objectPosition: '100% center' }}
        />
        <div className="absolute top-1/2 left-[15%] transform -translate-y-1/2">
          <h1 className="text-[clamp(3.5rem,6vw,4.5rem)] leading-tight font-bold" style={{ color: '#FFFFFF' }}>
            Built by operators
            <br />
            for operators
          </h1>
        </div>
      </main>
      <Footer />
    </>
  );
}