'use client';

import React, { useRef, useState } from 'react';
import Link from 'next/link';
import { Volume2, VolumeX, Play, Pause, ArrowUpRight } from 'lucide-react';

function InstagramIcon({ className = 'w-3.5 h-3.5' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

export default function HomePage() {
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const ambientVideoRef = useRef<HTMLVideoElement | null>(null);

  const instagramUrl = 'https://www.instagram.com/anurosh.in';
  const phone = '08496000040';

  const toggleSound = () => {
    if (videoRef.current) {
      const nextMuted = !videoRef.current.muted;
      videoRef.current.muted = nextMuted;
      setIsMuted(nextMuted);
    }
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        ambientVideoRef.current?.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        ambientVideoRef.current?.pause();
        setIsPlaying(false);
      }
    }
  };

  const curatedCollections = [
    {
      title: 'Bridal Couture',
      href: '/collections/bridal',
      desc: 'Bespoke bridal lehengas, hand-woven zardozi veils, and royal trousseau.',
      code: '01',
    },
    {
      title: 'Heritage Ethnic',
      href: '/collections/ethnic',
      desc: 'Pure Lakhnavi Chikankari, imperial groom sherwanis, and Awadhi attire.',
      code: '02',
    },
    {
      title: 'Collaboration',
      href: '/collaboration',
      desc: 'NRI trousseau styling consultations and bespoke couture commissions.',
      code: '03',
    },
    {
      title: 'The Atelier',
      href: '/about',
      desc: 'Generations of master Awadhi artisans and our Gomti Nagar flagship.',
      code: '04',
    },
    {
      title: 'Contact & Studio',
      href: '/contact',
      desc: '2/23, Vineet Khand, Gomti Nagar, Lucknow, UP - 226010.',
      code: '05',
    },
  ];

  return (
    <div className="min-h-screen bg-[#fdfbf8] text-[#241e1b] selection:bg-[#9b7c53] selection:text-white">
      
      {/* ========================================================================= */}
      {/* 1. EXACT SABYASACHI FULLSCREEN RUNWAY HERO                                */}
      {/* ========================================================================= */}
      <section className="relative h-screen w-full overflow-hidden bg-[#0c0908] flex items-center justify-center">
        
        {/* Ambient video blur halo for widescreen / 4K displays */}
        <div className="absolute inset-0 z-0 overflow-hidden opacity-30 pointer-events-none scale-110">
          <video
            ref={ambientVideoRef}
            src="/anurosh-runway.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover blur-2xl"
          />
        </div>

        {/* Crisp Central High-Definition Runway Video Player */}
        <div className="relative z-10 h-full w-full max-w-full flex items-center justify-center">
          <video
            ref={videoRef}
            src="/anurosh-runway.mp4"
            poster="/anurosh-runway-poster.jpg"
            autoPlay
            muted
            loop
            playsInline
            className="h-full w-auto max-w-full aspect-[9/16] object-cover shadow-[0_10px_60px_rgba(0,0,0,0.6)]"
          />
        </div>

        {/* Sabyasachi Subtle Bottom Shadow Vignette */}
        <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-black/80 via-black/30 to-transparent pointer-events-none z-20" />

        {/* Sabyasachi Bottom Center Title & FOLLOW US Button (Exact Replica of Sabyasachi Layout) */}
        <div className="absolute inset-x-0 bottom-12 sm:bottom-14 z-30 flex flex-col items-center justify-center text-center space-y-4 px-6 pointer-events-none">
          <span className="font-serif text-xl sm:text-2xl md:text-3xl text-white font-light tracking-[0.25em] uppercase drop-shadow-md">
            The Runway Showcase
          </span>

          {/* FOLLOW US Button (Redirects to https://www.instagram.com/anurosh.in) */}
          <div className="pointer-events-auto">
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-9 py-2.5 border border-white text-white hover:bg-white hover:text-[#0c0908] transition-all duration-300 text-xs uppercase tracking-[0.3em] font-light backdrop-blur-sm shadow-lg inline-block active:scale-95 cursor-pointer"
            >
              Follow Us
            </a>
          </div>
        </div>

        {/* Sabyasachi Bottom Right Circular Audio & Playback Controls */}
        <div className="absolute bottom-6 right-6 z-30 flex items-center gap-2.5 pointer-events-auto">
          <button
            onClick={toggleSound}
            type="button"
            className="w-8 h-8 rounded-full border border-white/40 bg-black/30 hover:bg-black/60 text-white/90 hover:text-white backdrop-blur-md flex items-center justify-center transition-all cursor-pointer"
            title={isMuted ? 'Sound On' : 'Sound Off'}
            aria-label="Toggle Sound"
          >
            {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
          </button>

          <button
            onClick={togglePlay}
            type="button"
            className="w-8 h-8 rounded-full border border-white/40 bg-black/30 hover:bg-black/60 text-white/90 hover:text-white backdrop-blur-md flex items-center justify-center transition-all cursor-pointer"
            title={isPlaying ? 'Pause' : 'Play'}
            aria-label="Toggle Playback"
          >
            {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
          </button>
        </div>

      </section>

      {/* ========================================================================= */}
      {/* 2. DEDICATED "FOLLOW US" STRIP UNDER THE VIDEO                            */}
      {/* ========================================================================= */}
      <section className="py-10 px-6 bg-[#faf6f0] border-b border-[#eee6db] text-center">
        <div className="max-w-2xl mx-auto space-y-4">
          <span className="text-[10px] uppercase tracking-[0.35em] text-[#9b7c53] font-light block">
            Official Instagram • @anurosh.in
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-light tracking-[0.2em] text-[#241e1b] uppercase">
            Follow The House of Anurosh
          </h2>
          <p className="text-xs text-[#73655d] font-light max-w-md mx-auto leading-relaxed">
            Discover behind-the-scenes ateliers, bridal styling stories, and live runway couture on our official Instagram.
          </p>
          <div className="pt-2">
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 bg-[#241e1b] text-white hover:bg-[#9b7c53] transition-colors text-xs uppercase tracking-[0.25em] font-light shadow-sm"
            >
              <InstagramIcon className="w-3.5 h-3.5" />
              <span>Follow @anurosh.in</span>
            </a>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. SABYASACHI MANIFESTO / CRAFTSMANSHIP PHILOSOPHY                        */}
      {/* ========================================================================= */}
      <section className="py-24 md:py-32 px-6 text-center border-b border-[#eee6db] bg-[#fdfbf8]">
        <div className="max-w-3xl mx-auto space-y-6">
          <span className="text-[10px] uppercase tracking-[0.4em] text-[#9b7c53] font-light block">
            The Philosophy of Anurosh
          </span>

          <blockquote className="font-serif text-2xl sm:text-3xl md:text-4xl font-light tracking-[0.14em] text-[#241e1b] leading-relaxed italic">
            “In an era of mass velocity, true luxury is patience. Every Anurosh bridal silhouette is painstakingly handcrafted over 1,200 hours by generational Awadhi karigars in Lucknow.”
          </blockquote>

          <div className="pt-2">
            <span className="text-xs uppercase tracking-[0.3em] text-[#8a7a70] font-light block">
              — Anurosh Atelier • Gomti Nagar, Lucknow
            </span>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. THE EDITORIAL RUNWAY LOOKBOOK (Sabyasachi Magazine Grid)               */}
      {/* ========================================================================= */}
      <section className="py-20 md:py-28 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-2">
          <span className="text-[10px] uppercase tracking-[0.35em] text-[#9b7c53] font-light block">
            Haute Couture Archives
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-light tracking-[0.2em] text-[#241e1b] uppercase">
            The Heritage Runway Edit
          </h2>
          <div className="w-12 h-px bg-[#9b7c53]/40 mx-auto mt-4" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          
          {/* Look I */}
          <article className="border border-[#eee6db] bg-[#faf6f0] p-6 space-y-4 group">
            <div className="relative aspect-[3/4] overflow-hidden bg-stone-100">
              <img
                src="/campaign-bridal.jpg"
                alt="Heritage Bridal Lehenga"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <span className="absolute top-4 left-4 bg-black/60 px-2.5 py-1 text-[10px] tracking-widest text-white uppercase backdrop-blur-sm">
                Look I
              </span>
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#9b7c53] font-light block">
                Bridal Ensemble
              </span>
              <h3 className="font-serif text-xl font-light tracking-[0.15em] text-[#241e1b] uppercase mt-1">
                The Heritage Bridal Lehenga
              </h3>
              <p className="text-xs text-[#73655d] font-light mt-2 leading-relaxed">
                Handcrafted pure silk crimson lehenga adorned with antique bullion zardozi and beaten gold dabka.
              </p>
            </div>
          </article>

          {/* Look II */}
          <article className="border border-[#eee6db] bg-[#faf6f0] p-6 space-y-4 group">
            <div className="relative aspect-[3/4] overflow-hidden bg-stone-100">
              <img
                src="/campaign-groom.jpg"
                alt="Imperial Groom Sherwani"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <span className="absolute top-4 left-4 bg-black/60 px-2.5 py-1 text-[10px] tracking-widest text-white uppercase backdrop-blur-sm">
                Look II
              </span>
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#9b7c53] font-light block">
                Imperial Menswear
              </span>
              <h3 className="font-serif text-xl font-light tracking-[0.15em] text-[#241e1b] uppercase mt-1">
                The Royal Groom Sherwani
              </h3>
              <p className="text-xs text-[#73655d] font-light mt-2 leading-relaxed">
                Ivory raw silk sherwani tailored with tonal metallic needlework and ceremonial handloom doshala.
              </p>
            </div>
          </article>

          {/* Look III */}
          <article className="border border-[#eee6db] bg-[#faf6f0] p-6 space-y-4 group">
            <div className="relative aspect-[3/4] overflow-hidden bg-stone-100">
              <img
                src="/campaign-couture.jpg"
                alt="Lakhnavi Chikankari Couture"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <span className="absolute top-4 left-4 bg-black/60 px-2.5 py-1 text-[10px] tracking-widest text-white uppercase backdrop-blur-sm">
                Look III
              </span>
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#9b7c53] font-light block">
                Heritage Chikankari
              </span>
              <h3 className="font-serif text-xl font-light tracking-[0.15em] text-[#241e1b] uppercase mt-1">
                The Lakhnavi Badla Edit
              </h3>
              <p className="text-xs text-[#73655d] font-light mt-2 leading-relaxed">
                Diaphanous pure georgette featuring master shadow-work jali stitches and antique silver mukaish.
              </p>
            </div>
          </article>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. CURATED PORTFOLIO DIRECTORY (5 Pages)                                  */}
      {/* ========================================================================= */}
      <section className="py-20 px-6 border-t border-[#eee6db] bg-[#faf6f0]">
        <div className="max-w-6xl mx-auto">
          
          <div className="text-center mb-14 space-y-2">
            <span className="text-[10px] uppercase tracking-[0.35em] text-[#9b7c53] font-light block">
              Curated Portfolios
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-light tracking-[0.2em] text-[#241e1b] uppercase">
              The World of Anurosh
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {curatedCollections.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="p-8 bg-[#fdfbf8] border border-[#eee6db] hover:border-[#9b7c53] transition-all duration-500 group flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] font-mono text-[#9b7c53] tracking-widest block mb-4">
                    {item.code}
                  </span>
                  <h3 className="font-serif text-xl font-light tracking-[0.18em] text-[#241e1b] uppercase group-hover:text-[#9b7c53] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#7e6f67] font-light mt-2.5 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                <div className="pt-6 mt-6 border-t border-[#f4ede4] flex items-center justify-between text-[10px] tracking-[0.2em] uppercase text-[#9b7c53]">
                  <span>View</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </Link>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. LIGHT & ELEGANT FOOTER                                                 */}
      {/* ========================================================================= */}
      <footer className="bg-[#f7f3ed] text-[#6b5c52] py-16 px-6 text-xs font-light border-t border-[#eee6db]">
        <div className="max-w-6xl mx-auto space-y-12">
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-b border-[#e5ddd0] pb-10">
            <div className="space-y-3">
              <img
                src="/anurosh-logo.webp"
                alt="Anurosh - Beyond Fashion"
                className="h-14 w-auto object-contain"
              />
              <p className="text-xs text-[#73655d] font-light mt-2 leading-relaxed max-w-xs">
                Handcrafted bridal lehengas and Awadhi karigari curated at our Indira Nagar flagship atelier.
              </p>
            </div>

            <div className="space-y-2">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#9b7c53] font-light block">
                Flagship Studio
              </span>
              <p className="text-xs text-[#4a3f38] leading-relaxed">
                2/23, Vineet Khand,<br />
                Gomti Nagar,<br />
                Lucknow, UP - 226010
              </p>
              <p className="pt-1">
                <Link href="/contact" className="text-[#9b7c53] underline text-[11px] uppercase tracking-wider">
                  View Map & Directions →
                </Link>
              </p>
            </div>

            <div className="space-y-2">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#9b7c53] font-light block">
                Official Channels
              </span>
              <p>
                Concierge: <a href={`tel:${phone}`} className="text-[#241e1b] underline">{phone}</a>
              </p>
              <p>
                Email: <a href="mailto:contact@anurosh.com" className="text-[#241e1b] underline">contact@anurosh.com</a>
              </p>
              <div className="pt-2">
                <a
                  href={instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[#9b7c53] hover:underline uppercase text-[11px] tracking-wider"
                >
                  <InstagramIcon className="w-3.5 h-3.5" />
                  <span>Instagram @anurosh.in</span>
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] tracking-[0.25em] uppercase text-[#8c7b70]">
            <p>© 2026 ANUROSH HAUTE COUTURE. ALL RIGHTS RESERVED.</p>
            <p>LUCKNOW • UTTAR PRADESH • INDIA</p>
          </div>

        </div>
      </footer>

    </div>
  );
}