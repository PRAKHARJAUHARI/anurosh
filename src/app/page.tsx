'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, MapPin, Phone, ArrowRight, ShieldCheck, Compass, RotateCcw, Clock, Award, Star } from 'lucide-react';
import StorefrontPreloader from '@/components/StorefrontPreloader';

export default function HomePage() {
  const [hasEntered, setHasEntered] = useState<boolean>(false);

  const storeAddress = '18/355, Sadbhavna Road, Near Maitri Park, Indira Nagar, Lucknow, Uttar Pradesh - 226016';
  const phone = '+91 98765 43210';
  const mapsUrl = `https://maps.google.com/?q=${encodeURIComponent(storeAddress)}`;

  // Listen for custom event from logo click to replay entrance
  useEffect(() => {
    const handleReplay = () => {
      setHasEntered(false);
    };

    window.addEventListener('play-anurosh-doors', handleReplay);
    return () => window.removeEventListener('play-anurosh-doors', handleReplay);
  }, []);

  return (
    <div className={`relative min-h-screen ${!hasEntered ? 'h-screen overflow-hidden' : ''}`}>
      {/* 1. CINEMATIC FULL-SCREEN STOREFRONT PRELOADER WITH SLOW DOOR ZOOM (4-4.5s) */}
      {!hasEntered && (
        <StorefrontPreloader onComplete={() => setHasEntered(true)} />
      )}

      {/* 2. MAIN WEBSITE CONTENT (Revealed with elegant luxury dissolve) */}
      <AnimatePresence>
        {hasEntered && (
          <motion.main
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            className="flex-grow flex flex-col bg-[#fdfbf7] text-[#221c18]"
          >
            {/* Royal Awadhi Hero Banner */}
            <section className="relative py-20 md:py-28 bg-gradient-to-b from-[#24060c] via-[#350912] to-[#1c0409] text-[#f7ede2] border-b border-[#521722] overflow-hidden">
              {/* Background ambient lighting */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(212,175,55,0.2)_0%,_transparent_70%)] pointer-events-none" />

              <div className="relative max-w-5xl mx-auto px-4 sm:px-6 text-center space-y-7">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#d4af37]/40 bg-[#1e050a]/90 text-[#f5ebd7] text-xs uppercase tracking-[0.25em] shadow-lg">
                  <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
                  <span>Flagship Architectural Boutique • Lucknow</span>
                </div>

                <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-[1.12]">
                  The Grandeur of Awadh <br className="hidden sm:inline" />
                  <span className="gold-gradient-text italic font-normal">Meets Modern Bridal Couture</span>
                </h1>

                <p className="text-sm sm:text-base md:text-lg text-[#dfd4c7] max-w-2xl mx-auto leading-relaxed font-light">
                  Welcome to <strong className="text-white font-medium">Anurosh</strong>. Handcrafted 16-kali bridal lehengas, 
                  bespoke royal Zardozi embroidery, and generational Lakhnavi Chikankari couture curated for discerning brides.
                </p>

                {/* Store Address Banner for Local SEO */}
                <div className="p-4 sm:p-5 bg-[#1a0408]/90 border border-[#d4af37]/45 max-w-2xl mx-auto text-xs sm:text-sm text-[#f5ebd7] shadow-2xl backdrop-blur-md">
                  <div className="flex items-center justify-center gap-2.5">
                    <MapPin className="w-4 h-4 text-[#d4af37] shrink-0" />
                    <span>
                      <strong className="text-white">Flagship Boutique: </strong>
                      {storeAddress}
                    </span>
                  </div>
                </div>

                {/* Curated Category Portals */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 pt-4 max-w-4xl mx-auto">
                  <Link
                    href="/collections/bridal"
                    className="p-5 bg-[#1f050a] border border-[#d4af37]/30 hover:border-[#d4af37] hover:bg-[#2b080f] transition-all duration-300 text-center group shadow-md"
                  >
                    <span className="block text-[10px] uppercase tracking-widest text-[#d4af37] font-semibold mb-1">
                      01 • Couture
                    </span>
                    <span className="block font-serif text-lg font-bold text-white group-hover:text-[#d4af37] transition-colors">
                      Bridal Lehengas
                    </span>
                    <span className="text-[11px] text-[#bdae9f] mt-1 block">
                      Zardozi, Velvet & Raw Silk
                    </span>
                  </Link>

                  <Link
                    href="/collections/ethnic"
                    className="p-5 bg-[#1f050a] border border-[#d4af37]/30 hover:border-[#d4af37] hover:bg-[#2b080f] transition-all duration-300 text-center group shadow-md"
                  >
                    <span className="block text-[10px] uppercase tracking-widest text-[#d4af37] font-semibold mb-1">
                      02 • Heritage
                    </span>
                    <span className="block font-serif text-lg font-bold text-white group-hover:text-[#d4af37] transition-colors">
                      Lakhnavi Chikankari
                    </span>
                    <span className="text-[11px] text-[#bdae9f] mt-1 block">
                      32 Hand Stitches & Mukaish
                    </span>
                  </Link>

                  <Link
                    href="/collaboration"
                    className="p-5 bg-[#1f050a] border border-[#d4af37]/30 hover:border-[#d4af37] hover:bg-[#2b080f] transition-all duration-300 text-center group shadow-md"
                  >
                    <span className="block text-[10px] uppercase tracking-widest text-[#d4af37] font-semibold mb-1">
                      03 • Atelier
                    </span>
                    <span className="block font-serif text-lg font-bold text-white group-hover:text-[#d4af37] transition-colors">
                      Collaboration
                    </span>
                    <span className="text-[11px] text-[#bdae9f] mt-1 block">
                      Stylists, NRI Brides & Trousseau
                    </span>
                  </Link>

                  <Link
                    href="/about"
                    className="p-5 bg-[#1f050a] border border-[#d4af37]/30 hover:border-[#d4af37] hover:bg-[#2b080f] transition-all duration-300 text-center group shadow-md"
                  >
                    <span className="block text-[10px] uppercase tracking-widest text-[#d4af37] font-semibold mb-1">
                      04 • Legacy
                    </span>
                    <span className="block font-serif text-lg font-bold text-white group-hover:text-[#d4af37] transition-colors">
                      About Anurosh
                    </span>
                    <span className="text-[11px] text-[#bdae9f] mt-1 block">
                      Awadh Karigari & Story
                    </span>
                  </Link>
                </div>

                {/* Primary Actions */}
                <div className="pt-6 flex flex-wrap items-center justify-center gap-4">
                  <a
                    href={`tel:${phone}`}
                    className="px-7 py-3.5 bg-gradient-to-r from-[#d4af37] via-[#f5e6b5] to-[#c5a059] text-[#1c080d] font-bold text-xs uppercase tracking-[0.18em] shadow-[0_4px_25px_rgba(212,175,55,0.4)] hover:shadow-[0_6px_35px_rgba(212,175,55,0.6)] hover:scale-105 active:scale-95 transition-all duration-300"
                  >
                    Call Studio ({phone})
                  </a>
                  <a
                    href={mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-7 py-3.5 border border-[#d4af37]/80 text-[#f5ebd7] hover:bg-[#d4af37]/15 font-semibold text-xs uppercase tracking-[0.18em] transition-all duration-300"
                  >
                    Get Store Route
                  </a>
                  <button
                    onClick={() => setHasEntered(false)}
                    type="button"
                    className="px-4 py-3.5 text-xs uppercase tracking-wider text-white/70 hover:text-white flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <RotateCcw className="w-3.5 h-3.5 text-[#d4af37]" />
                    <span>Revisit Storefront</span>
                  </button>
                </div>
              </div>
            </section>

            {/* In-Store Boutique Showcase & Directions */}
            <section className="py-16 sm:py-24 bg-[#faf6ee] border-b border-[#e5d8c6]">
              <div className="max-w-4xl mx-auto px-4 sm:px-6">
                <div className="text-center mb-12">
                  <span className="text-xs uppercase tracking-[0.25em] text-[#8e6d2b] font-semibold block mb-1">
                    Indira Nagar Flagship
                  </span>
                  <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#380e15]">
                    Visit Our Lucknow Boutique
                  </h2>
                  <p className="text-xs sm:text-sm text-[#665a50] mt-2 max-w-xl mx-auto">
                    Step inside our private bridal trial suites for an exclusive 1-on-1 couture consultation.
                  </p>
                </div>

                <div className="bg-white border border-[#e2d5c2] p-8 sm:p-10 shadow-lg">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                    <div>
                      <h3 className="font-serif text-xl font-bold text-[#380e15] mb-3">Store Location</h3>
                      <address className="not-italic text-sm text-[#4a3f36] leading-relaxed mb-4">
                        <strong className="text-[#380e15] text-base block font-bold">Anurosh Couture</strong>
                        18/355, Sadbhavna Road,<br />
                        Near Maitri Park, Indira Nagar,<br />
                        Lucknow, Uttar Pradesh - 226016
                      </address>
                      <p className="text-xs text-[#706155] leading-relaxed">
                        <strong>Nearby Landmarks:</strong> Just 2 minutes from Maitri Park, 10 mins from Gomti Nagar, and 5 mins from Munshi Pulia Metro.
                      </p>
                    </div>

                    <div className="space-y-4 md:border-l md:border-[#f0e4d2] md:pl-8">
                      <div>
                        <h4 className="font-serif text-base font-bold text-[#380e15] mb-1">Studio Timings</h4>
                        <div className="flex items-center gap-2 text-xs text-[#4a3f36]">
                          <Clock className="w-3.5 h-3.5 text-[#8e6d2b]" />
                          <span>Monday to Sunday: 10:30 AM – 9:00 PM</span>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-serif text-base font-bold text-[#380e15] mb-1">Direct Inquiries</h4>
                        <p className="text-xs text-[#4a3f36]">
                          Phone: <a href={`tel:${phone}`} className="underline font-semibold text-[#380e15]">{phone}</a>
                        </p>
                        <p className="text-xs text-[#4a3f36]">Email: contact@anurosh.com</p>
                      </div>

                      <div className="pt-2">
                        <a
                          href={mapsUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block px-6 py-2.5 bg-[#380e15] hover:bg-[#521722] text-[#f7ede2] text-xs uppercase tracking-wider font-semibold transition-colors shadow"
                        >
                          Open in Google Maps
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </motion.main>
        )}
      </AnimatePresence>
    </div>
  );
}
