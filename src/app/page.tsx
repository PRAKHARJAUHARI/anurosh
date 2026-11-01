'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Phone, ArrowUpRight, RotateCcw } from 'lucide-react';
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
      {/* 1. CINEMATIC FULL IMAGE ZOOM PRELOADER (Starts full image -> slowly zooms into doors -> elegant light button) */}
      {!hasEntered && (
        <StorefrontPreloader onComplete={() => setHasEntered(true)} />
      )}

      {/* 2. MAIN WEBSITE CONTENT (Revealed with elegant, minimalist, light-font theme) */}
      <AnimatePresence>
        {hasEntered && (
          <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="flex-grow flex flex-col bg-[#fdfbf8] text-[#241e1b]"
          >
            {/* Minimalist Hero Section */}
            <section className="py-20 md:py-28 px-6 text-center border-b border-[#eee6db]">
              <div className="max-w-3xl mx-auto space-y-6">
                <span className="text-[11px] uppercase tracking-[0.35em] text-[#9b7c53] font-light block">
                  Indira Nagar • Lucknow
                </span>

                <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-light tracking-[0.18em] text-[#2b221e] uppercase leading-tight">
                  Anurosh Couture
                </h1>

                <p className="text-xs sm:text-sm text-[#73655d] max-w-xl mx-auto font-light leading-relaxed tracking-wide">
                  Timeless Awadhi craftsmanship, bespoke bridal lehengas, and authentic Lakhnavi Chikankari couture curated for generation-defining weddings.
                </p>

                {/* Minimalist Address Strip */}
                <div className="pt-2">
                  <p className="text-[11px] text-[#8a7a70] tracking-[0.15em] font-light">
                    18/355, Sadbhavna Road, Near Maitri Park, Indira Nagar, Lucknow
                  </p>
                </div>

                {/* Quick Action Links */}
                <div className="pt-4 flex flex-wrap items-center justify-center gap-4 text-xs font-light tracking-[0.2em] uppercase">
                  <a
                    href={mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2.5 border border-[#2b221e]/80 hover:bg-[#2b221e] hover:text-white transition-all duration-300"
                  >
                    Locate Studio
                  </a>
                  <a
                    href={`tel:${phone}`}
                    className="px-6 py-2.5 border border-[#9b7c53]/70 text-[#9b7c53] hover:bg-[#9b7c53] hover:text-white transition-all duration-300"
                  >
                    Call Concierge
                  </a>
                  <button
                    onClick={() => setHasEntered(false)}
                    type="button"
                    className="px-4 py-2.5 text-[#9c8d83] hover:text-[#2b221e] transition-colors flex items-center gap-1.5 cursor-pointer"
                  >
                    <RotateCcw className="w-3 h-3" />
                    <span>Revisit Entrance</span>
                  </button>
                </div>
              </div>
            </section>

            {/* Minimalist Collections Navigation Grid */}
            <section className="py-16 md:py-24 px-6 border-b border-[#eee6db]">
              <div className="max-w-5xl mx-auto">
                <div className="text-center mb-14">
                  <span className="text-[10px] uppercase tracking-[0.35em] text-[#9b7c53] font-light block mb-2">
                    Curated Portfolios
                  </span>
                  <h2 className="font-serif text-2xl sm:text-3xl font-light tracking-[0.2em] text-[#2b221e] uppercase">
                    Collections & Atelier
                  </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  <Link
                    href="/collections/bridal"
                    className="p-8 bg-white border border-[#eee6db] hover:border-[#9b7c53] transition-all duration-500 group flex flex-col justify-between"
                  >
                    <div>
                      <span className="text-[10px] font-mono text-[#9b7c53] tracking-widest block mb-4">
                        01
                      </span>
                      <h3 className="font-serif text-lg font-light tracking-[0.15em] text-[#2b221e] uppercase group-hover:text-[#9b7c53] transition-colors">
                        Bridal
                      </h3>
                      <p className="text-xs text-[#7e6f67] font-light mt-2 leading-relaxed">
                        Handcrafted Zardozi, dabka, and micro-velvet bridal ensembles.
                      </p>
                    </div>
                    <div className="pt-6 mt-6 border-t border-[#f4ede4] flex items-center justify-between text-[10px] tracking-[0.2em] uppercase text-[#9b7c53]">
                      <span>View</span>
                      <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </Link>

                  <Link
                    href="/collections/ethnic"
                    className="p-8 bg-white border border-[#eee6db] hover:border-[#9b7c53] transition-all duration-500 group flex flex-col justify-between"
                  >
                    <div>
                      <span className="text-[10px] font-mono text-[#9b7c53] tracking-widest block mb-4">
                        02
                      </span>
                      <h3 className="font-serif text-lg font-light tracking-[0.15em] text-[#2b221e] uppercase group-hover:text-[#9b7c53] transition-colors">
                        Ethnic
                      </h3>
                      <p className="text-xs text-[#7e6f67] font-light mt-2 leading-relaxed">
                        Pure georgette Lakhnavi Chikankari with antique mukaish badla.
                      </p>
                    </div>
                    <div className="pt-6 mt-6 border-t border-[#f4ede4] flex items-center justify-between text-[10px] tracking-[0.2em] uppercase text-[#9b7c53]">
                      <span>View</span>
                      <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </Link>

                  <Link
                    href="/collaboration"
                    className="p-8 bg-white border border-[#eee6db] hover:border-[#9b7c53] transition-all duration-500 group flex flex-col justify-between"
                  >
                    <div>
                      <span className="text-[10px] font-mono text-[#9b7c53] tracking-widest block mb-4">
                        03
                      </span>
                      <h3 className="font-serif text-lg font-light tracking-[0.15em] text-[#2b221e] uppercase group-hover:text-[#9b7c53] transition-colors">
                        Collaboration
                      </h3>
                      <p className="text-xs text-[#7e6f67] font-light mt-2 leading-relaxed">
                        Bespoke bridal styling, NRI trousseau consultations, and couture partnerships.
                      </p>
                    </div>
                    <div className="pt-6 mt-6 border-t border-[#f4ede4] flex items-center justify-between text-[10px] tracking-[0.2em] uppercase text-[#9b7c53]">
                      <span>View</span>
                      <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </Link>

                  <Link
                    href="/about"
                    className="p-8 bg-white border border-[#eee6db] hover:border-[#9b7c53] transition-all duration-500 group flex flex-col justify-between"
                  >
                    <div>
                      <span className="text-[10px] font-mono text-[#9b7c53] tracking-widest block mb-4">
                        04
                      </span>
                      <h3 className="font-serif text-lg font-light tracking-[0.15em] text-[#2b221e] uppercase group-hover:text-[#9b7c53] transition-colors">
                        About
                      </h3>
                      <p className="text-xs text-[#7e6f67] font-light mt-2 leading-relaxed">
                        Generational Awadhi karigari traditions and our Indira Nagar flagship studio.
                      </p>
                    </div>
                    <div className="pt-6 mt-6 border-t border-[#f4ede4] flex items-center justify-between text-[10px] tracking-[0.2em] uppercase text-[#9b7c53]">
                      <span>View</span>
                      <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </Link>
                </div>
              </div>
            </section>

            {/* Flagship Studio Details Section */}
            <section className="py-16 md:py-20 px-6">
              <div className="max-w-4xl mx-auto">
                <div className="border border-[#eee6db] bg-white p-8 sm:p-12">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                    <div>
                      <span className="text-[10px] uppercase tracking-[0.3em] text-[#9b7c53] font-light block mb-2">
                        Studio Visit
                      </span>
                      <h3 className="font-serif text-xl font-light tracking-[0.15em] text-[#2b221e] uppercase mb-4">
                        Indira Nagar Boutique
                      </h3>
                      <address className="not-italic text-xs sm:text-sm text-[#5d5149] font-light leading-relaxed mb-4">
                        <strong className="font-normal text-[#2b221e] block mb-1">Anurosh</strong>
                        18/355, Sadbhavna Road,<br />
                        Near Maitri Park, Indira Nagar,<br />
                        Lucknow, Uttar Pradesh - 226016
                      </address>
                      <p className="text-[11px] text-[#8e7e75] font-light">
                        Located near Maitri Park, easily reached via Faizabad Road & Gomti Nagar.
                      </p>
                    </div>

                    <div className="space-y-5 md:border-l md:border-[#f4ede4] md:pl-8 font-light text-xs sm:text-sm">
                      <div>
                        <span className="text-[10px] uppercase tracking-[0.25em] text-[#9b7c53] block mb-1">
                          Timings
                        </span>
                        <p className="text-[#4e433c]">Monday to Sunday: 10:30 AM – 9:00 PM</p>
                      </div>

                      <div>
                        <span className="text-[10px] uppercase tracking-[0.25em] text-[#9b7c53] block mb-1">
                          Contact
                        </span>
                        <p className="text-[#4e433c]">
                          Phone: <a href={`tel:${phone}`} className="underline font-normal text-[#2b221e]">{phone}</a>
                        </p>
                        <p className="text-[#4e433c]">Email: contact@anurosh.com</p>
                      </div>

                      <div className="pt-2">
                        <a
                          href={mapsUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block px-6 py-2.5 border border-[#2b221e] text-[#2b221e] hover:bg-[#2b221e] hover:text-white transition-all text-xs uppercase tracking-[0.2em] font-light"
                        >
                          Google Maps Directions
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
