'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, MapPin, Phone, ArrowRight, ShieldCheck, Compass, RotateCcw } from 'lucide-react';
import AnuroshBoutiqueDoors from '@/components/AnuroshBoutiqueDoors';

export default function HomePage() {
  const [hasEntered, setHasEntered] = useState<boolean>(false);

  const storeAddress = '18/355, Sadbhavna Road, Near Maitri Park, Indira Nagar, Lucknow, Uttar Pradesh - 226016';
  const phone = '+91 98765 43210';
  const mapsUrl = `https://maps.google.com/?q=${encodeURIComponent(storeAddress)}`;

  // Listen for custom event from logo click to replay 3D entrance
  useEffect(() => {
    const handleReplay = () => {
      setHasEntered(false);
    };

    window.addEventListener('play-anurosh-doors', handleReplay);
    return () => window.removeEventListener('play-anurosh-doors', handleReplay);
  }, []);

  return (
    <div className={`relative min-h-screen ${!hasEntered ? 'h-screen overflow-hidden' : ''}`}>
      {/* 1. 3D BOUTIQUE STOREFRONT & DOOR ANIMATION PRELOADER (100vh, overflow-hidden) */}
      {!hasEntered && (
        <AnuroshBoutiqueDoors onEnterComplete={() => setHasEntered(true)} />
      )}

      {/* 2. MAIN WEBSITE CONTENT (Revealed seamlessly upon entering) */}
      <AnimatePresence>
        {hasEntered && (
          <motion.main
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex-grow flex flex-col bg-[#fdfbf7] text-[#221c18]"
          >
            {/* Hero Section */}
            <section className="relative py-16 md:py-24 bg-[#380e15] text-[#f7ede2] border-b border-[#521722] overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(212,175,55,0.15)_0%,_transparent_70%)] pointer-events-none" />

              <div className="relative max-w-4xl mx-auto px-4 text-center space-y-6">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#d4af37]/40 bg-[#26080e]/80 text-[#f5ebd7] text-xs uppercase tracking-[0.2em]">
                  <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
                  <span>Flagship Architectural Studio • Lucknow</span>
                </div>

                <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-tight">
                  Welcome to Anurosh Couture
                </h1>

                <p className="text-sm sm:text-base text-[#dfd4c7] max-w-2xl mx-auto leading-relaxed font-light">
                  Handcrafted bridal lehengas, pure Lakhnavi Chikankari couture, and regal ethnic wear crafted for generation-defining weddings.
                </p>

                {/* Store Address Banner for Local SEO */}
                <div className="p-4 bg-[#26080e] border border-[#d4af37]/40 max-w-2xl mx-auto text-xs sm:text-sm text-[#f5ebd7] shadow-lg">
                  <div className="flex items-center justify-center gap-2">
                    <MapPin className="w-4 h-4 text-[#d4af37] shrink-0" />
                    <span>
                      <strong className="text-white">Store Address: </strong>
                      {storeAddress}
                    </span>
                  </div>
                </div>

                {/* Quick Navigation Cards */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 max-w-3xl mx-auto">
                  <Link
                    href="/collections/bridal"
                    className="p-4 bg-[#22070c] border border-[#d4af37]/30 hover:border-[#d4af37] hover:bg-[#2c0a10] transition-all text-center group"
                  >
                    <span className="block font-serif text-base font-bold text-white group-hover:text-[#d4af37] transition-colors">
                      Bridal
                    </span>
                    <span className="text-[10px] text-[#bdae9f] uppercase tracking-wider mt-1 block">
                      Zardozi & Velvet
                    </span>
                  </Link>

                  <Link
                    href="/collections/ethnic"
                    className="p-4 bg-[#22070c] border border-[#d4af37]/30 hover:border-[#d4af37] hover:bg-[#2c0a10] transition-all text-center group"
                  >
                    <span className="block font-serif text-base font-bold text-white group-hover:text-[#d4af37] transition-colors">
                      Ethnic
                    </span>
                    <span className="text-[10px] text-[#bdae9f] uppercase tracking-wider mt-1 block">
                      Lakhnavi Chikankari
                    </span>
                  </Link>

                  <Link
                    href="/collaboration"
                    className="p-4 bg-[#22070c] border border-[#d4af37]/30 hover:border-[#d4af37] hover:bg-[#2c0a10] transition-all text-center group"
                  >
                    <span className="block font-serif text-base font-bold text-white group-hover:text-[#d4af37] transition-colors">
                      Collaboration
                    </span>
                    <span className="text-[10px] text-[#bdae9f] uppercase tracking-wider mt-1 block">
                      Stylists & Brides
                    </span>
                  </Link>

                  <Link
                    href="/about"
                    className="p-4 bg-[#22070c] border border-[#d4af37]/30 hover:border-[#d4af37] hover:bg-[#2c0a10] transition-all text-center group"
                  >
                    <span className="block font-serif text-base font-bold text-white group-hover:text-[#d4af37] transition-colors">
                      About
                    </span>
                    <span className="text-[10px] text-[#bdae9f] uppercase tracking-wider mt-1 block">
                      Heritage & Studio
                    </span>
                  </Link>
                </div>

                {/* Actions */}
                <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
                  <a
                    href={`tel:${phone}`}
                    className="px-6 py-3 bg-[#d4af37] hover:bg-[#e4bf47] text-[#22170f] font-semibold text-xs uppercase tracking-[0.16em] transition-colors shadow-lg"
                  >
                    Call Store ({phone})
                  </a>
                  <a
                    href={mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 border border-[#d4af37]/70 text-[#f5ebd7] hover:bg-[#d4af37]/15 font-semibold text-xs uppercase tracking-[0.16em] transition-colors"
                  >
                    Get Directions
                  </a>
                  <button
                    onClick={() => setHasEntered(false)}
                    type="button"
                    className="px-4 py-3 text-xs uppercase tracking-wider text-white/70 hover:text-white flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Revisit Storefront</span>
                  </button>
                </div>
              </div>
            </section>

            {/* In-Store Experience & Studio Location Highlight */}
            <section className="py-14 sm:py-20 bg-[#fbf7f0] border-b border-[#e5d8c6]">
              <div className="max-w-4xl mx-auto px-4">
                <div className="text-center mb-10">
                  <span className="text-xs uppercase tracking-[0.2em] text-[#8e6d2b] font-semibold block mb-1">
                    Central Lucknow Studio
                  </span>
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#380e15]">
                    Visit Our Indira Nagar Boutique
                  </h2>
                </div>

                <div className="bg-white border border-[#e2d5c2] p-6 sm:p-8 shadow-sm">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="font-serif text-lg font-bold text-[#380e15] mb-2">Store Address</h3>
                      <address className="not-italic text-sm text-[#4a3f36] leading-relaxed mb-4">
                        <strong className="text-[#380e15]">Anurosh Couture</strong><br />
                        18/355, Sadbhavna Road,<br />
                        Near Maitri Park, Indira Nagar,<br />
                        Lucknow, Uttar Pradesh - 226016
                      </address>
                      <p className="text-xs text-[#706155] leading-relaxed">
                        Centrally located near Maitri Park, 10 mins from Gomti Nagar and 5 mins from Munshi Pulia Metro Station.
                      </p>
                    </div>

                    <div className="space-y-4 md:border-l md:border-[#f0e4d2] md:pl-8">
                      <div>
                        <h4 className="font-serif text-base font-bold text-[#380e15] mb-1">Boutique Timings</h4>
                        <p className="text-xs text-[#4a3f36]">Monday to Sunday: 10:30 AM – 9:00 PM</p>
                      </div>

                      <div>
                        <h4 className="font-serif text-base font-bold text-[#380e15] mb-1">Direct Inquiries</h4>
                        <p className="text-xs text-[#4a3f36]">
                          Phone: <a href={`tel:${phone}`} className="underline font-semibold text-[#380e15]">{phone}</a>
                        </p>
                        <p className="text-xs text-[#4a3f36]">Email: contact@anurosh.com</p>
                      </div>

                      <div className="pt-2 flex gap-3">
                        <a
                          href={mapsUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-5 py-2.5 bg-[#380e15] hover:bg-[#521722] text-[#f7ede2] text-xs uppercase tracking-wider font-semibold transition-colors"
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
