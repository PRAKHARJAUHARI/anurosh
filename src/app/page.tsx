'use client';

import React, { useRef, useState } from 'react';
import Link from 'next/link';
import { Volume2, VolumeX, ArrowUpRight } from 'lucide-react';

export default function HomePage() {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const toggleSound = () => {
    if (videoRef.current) {
      const nextMuted = !videoRef.current.muted;
      videoRef.current.muted = nextMuted;
      setIsMuted(nextMuted);
    }
  };

  const storeAddress = '18/355, Sadbhavna Road, Near Maitri Park, Indira Nagar, Lucknow, Uttar Pradesh - 226016';
  const phone = '+91 98765 43210';

  const curatedPortfolios = [
    { title: 'Bridal', href: '/collections/bridal', desc: 'Bespoke bridal lehengas and hand-woven zardozi veils.' },
    { title: 'Ethnic', href: '/collections/ethnic', desc: 'Pure Lakhnavi Chikankari and imperial groom sherwanis.' },
    { title: 'Collaboration', href: '/collaboration', desc: 'NRI trousseau consultations and bespoke commissions.' },
    { title: 'About', href: '/about', desc: 'Generations of Awadhi master artisans and our flagship studio.' },
    { title: 'Contact', href: '/contact', desc: '18/355, Sadbhavna Road, Indira Nagar, Lucknow.' },
  ];

  return (
    <div className="min-h-screen bg-[#fdfbf8] text-[#241e1b] selection:bg-[#9b7c53] selection:text-white">
      
      {/* ========================================================================= */}
      {/* 1. CLEAN RUNWAY VIDEO HERO (100% Text-Free, Pure High-Fashion Showcase)   */}
      {/* ========================================================================= */}
      <section className="relative h-[85vh] sm:h-[92vh] w-full overflow-hidden bg-[#161210] flex items-center justify-center">
        
        {/* Ambient video blur halo for widescreen / 4K displays */}
        <div className="absolute inset-0 z-0 overflow-hidden opacity-30 pointer-events-none scale-110">
          <video
            src="/anurosh-runway.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover blur-2xl"
          />
        </div>

        {/* Clean, Centered High-Definition Runway Video (No text overlay) */}
        <div className="relative z-10 h-full w-full max-w-full flex items-center justify-center">
          <video
            ref={videoRef}
            src="/anurosh-runway.mp4"
            poster="/anurosh-runway-poster.jpg"
            autoPlay
            muted
            loop
            playsInline
            className="h-full w-auto max-w-full aspect-[9/16] object-cover shadow-[0_10px_40px_rgba(0,0,0,0.4)]"
          />
        </div>

        {/* Discreet Minimalist Audio Toggle in Bottom Corner */}
        <div className="absolute bottom-6 right-6 z-20 pointer-events-auto">
          <button
            onClick={toggleSound}
            type="button"
            className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/40 hover:bg-black/60 text-white/80 hover:text-white backdrop-blur-md border border-white/20 transition-all text-[10px] tracking-[0.2em] uppercase font-light cursor-pointer"
            title={isMuted ? 'Unmute' : 'Mute'}
          >
            {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
            <span className="hidden sm:inline">{isMuted ? 'Sound Off' : 'Sound On'}</span>
          </button>
        </div>

      </section>

      {/* ========================================================================= */}
      {/* 2. LIGHT, ELEGANT, & PREMIUM PHILOSOPHY SECTION                           */}
      {/* ========================================================================= */}
      <section className="py-20 md:py-28 px-6 text-center border-b border-[#eee6db] bg-[#fdfbf8]">
        <div className="max-w-3xl mx-auto space-y-6">
          <span className="text-[10px] uppercase tracking-[0.4em] text-[#9b7c53] font-light block">
            The House of Anurosh • Lucknow
          </span>

          <h1 className="font-serif text-3xl sm:text-5xl font-light tracking-[0.2em] text-[#241e1b] uppercase leading-tight">
            Anurosh Couture
          </h1>

          <p className="text-xs sm:text-sm text-[#73655d] max-w-xl mx-auto font-light leading-relaxed tracking-wide">
            In an era of mass velocity, true luxury is patience. Every Anurosh bridal silhouette is painstakingly handcrafted over 1,200 hours by master Awadhi karigars in Lucknow.
          </p>

          <div className="pt-2">
            <span className="text-[11px] uppercase tracking-[0.3em] text-[#9b7c53] font-light block">
              Indira Nagar • Lucknow
            </span>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. CURATED PORTFOLIO DIRECTORY (Light & Premium Grid)                     */}
      {/* ========================================================================= */}
      <section className="py-16 md:py-24 px-6 border-b border-[#eee6db] bg-[#faf6f0]">
        <div className="max-w-6xl mx-auto">
          
          <div className="text-center mb-14 space-y-2">
            <span className="text-[10px] uppercase tracking-[0.35em] text-[#9b7c53] font-light block">
              Curated Portfolios
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-light tracking-[0.2em] text-[#241e1b] uppercase">
              Collections & Atelier
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {curatedPortfolios.map((item, idx) => (
              <Link
                key={item.title}
                href={item.href}
                className="p-8 bg-[#fdfbf8] border border-[#eee6db] hover:border-[#9b7c53] transition-all duration-500 group flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] font-mono text-[#9b7c53] tracking-widest block mb-4">
                    0{idx + 1}
                  </span>
                  <h3 className="font-serif text-xl font-light tracking-[0.18em] text-[#241e1b] uppercase group-hover:text-[#9b7c53] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#7e6f67] font-light mt-2.5 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                <div className="pt-6 mt-6 border-t border-[#f4ede4] flex items-center justify-between text-[10px] tracking-[0.2em] uppercase text-[#9b7c53]">
                  <span>Explore</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </Link>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. LIGHT & MINIMALIST FOOTER                                              */}
      {/* ========================================================================= */}
      <footer className="bg-[#f7f3ed] text-[#6b5c52] py-16 px-6 text-xs font-light">
        <div className="max-w-6xl mx-auto space-y-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-b border-[#e5ddd0] pb-10">
            <div>
              <span className="font-serif text-2xl tracking-[0.25em] text-[#241e1b] uppercase block">
                Anurosh
              </span>
              <span className="text-[10px] uppercase tracking-[0.35em] text-[#9b7c53] font-light">
                Haute Couture • Lucknow
              </span>
            </div>
            
            <div className="text-center md:text-right text-xs text-[#73655d] leading-relaxed">
              <p>18/355, Sadbhavna Road, Near Maitri Park, Indira Nagar, Lucknow - 226016</p>
              <p className="mt-1">
                Concierge: <a href={`tel:${phone}`} className="text-[#241e1b] underline">{phone}</a> • <Link href="/contact" className="text-[#9b7c53] underline">Location & Hours</Link>
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] tracking-[0.25em] uppercase text-[#8c7b70]">
            <p>© 2026 ANUROSH. ALL RIGHTS RESERVED.</p>
            <p>LUCKNOW • UTTAR PRADESH • INDIA</p>
          </div>
        </div>
      </footer>

    </div>
  );
}