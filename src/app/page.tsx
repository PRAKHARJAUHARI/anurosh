'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Volume2,
  VolumeX,
  Play,
  Pause,
  MapPin,
  Phone,
  ArrowUpRight,
  Sparkles,
  Calendar,
  CheckCircle2,
  ChevronDown
} from 'lucide-react';
import StorefrontPreloader from '@/components/StorefrontPreloader';

export default function SabyasachiStyleHomePage() {
  const [show3DPreloader, setShow3DPreloader] = useState<boolean>(false);
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [bookingSubmitted, setBookingSubmitted] = useState<boolean>(false);

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const ambientVideoRef = useRef<HTMLVideoElement | null>(null);

  const storeAddress = '18/355, Sadbhavna Road, Near Maitri Park, Indira Nagar, Lucknow, Uttar Pradesh - 226016';
  const phone = '+91 98765 43210';
  const mapsUrl = `https://maps.google.com/?q=${encodeURIComponent(storeAddress)}`;

  // Listen for custom trigger to replay 3D entrance
  useEffect(() => {
    const handleReplay = () => {
      setShow3DPreloader(true);
    };
    window.addEventListener('play-anurosh-doors', handleReplay);
    return () => window.removeEventListener('play-anurosh-doors', handleReplay);
  }, []);

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

  return (
    <div className="min-h-screen bg-[#0c0908] text-[#fbf7f0] selection:bg-[#c5a880] selection:text-[#0c0908]">
      
      {/* 3D BOUTIQUE FACADE PRELOADER / MODAL (Triggerable anytime from header or buttons) */}
      <AnimatePresence>
        {show3DPreloader && (
          <StorefrontPreloader onComplete={() => setShow3DPreloader(false)} />
        )}
      </AnimatePresence>

      {/* ========================================================================= */}
      {/* SECTION 1: THE FULLSCREEN SABYASACHI RUNWAY HERO                          */}
      {/* ========================================================================= */}
      <section className="relative h-screen min-h-[720px] w-full overflow-hidden bg-[#0c0908] flex items-center justify-center">
        
        {/* 1. Ambient blurred video backdrop (fills desktop and 4k displays with warm runway lighting) */}
        <div className="absolute inset-0 z-0 overflow-hidden opacity-35 pointer-events-none scale-110">
          <video
            ref={ambientVideoRef}
            src="/anurosh-runway.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover blur-3xl"
          />
        </div>

        {/* 2. Main High-Definition Vertical Runway Video Player */}
        <div className="relative z-10 h-full w-full max-w-full flex items-center justify-center">
          <video
            ref={videoRef}
            src="/anurosh-runway.mp4"
            poster="/anurosh-runway-poster.jpg"
            autoPlay
            muted
            loop
            playsInline
            className="h-full w-auto max-w-full aspect-[9/16] object-cover shadow-[0_0_80px_rgba(0,0,0,0.85)]"
          />

          {/* Sabyasachi Vignette & Shadow Gradients */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0c0908] via-transparent to-[#0c0908]/70 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0c0908]/80 via-transparent to-[#0c0908]/80 pointer-events-none hidden md:block" />
        </div>

        {/* 3. Haute Couture Hero Content Overlay */}
        <div className="absolute inset-0 z-20 flex flex-col justify-between items-center px-6 py-12 md:py-16 pointer-events-none">
          
          {/* Top Campaign Badge */}
          <div className="text-center pt-8">
            <span className="text-[10px] md:text-[11px] uppercase tracking-[0.45em] text-[#c5a880] font-light bg-black/40 backdrop-blur-md px-5 py-1.5 rounded-full border border-[#c5a880]/30 shadow-lg">
              Haute Couture & Heritage Bridal 2026
            </span>
          </div>

          {/* Centered Campaign Title */}
          <div className="text-center space-y-4 max-w-3xl pointer-events-auto">
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.5em] text-[#d6c7b2] font-light block">
              The Runway Showcase
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-light tracking-[0.25em] text-[#fcfaf7] uppercase leading-tight drop-shadow-md">
              The Royal Awadh Collection
            </h1>
            <p className="text-xs sm:text-sm text-[#ded3c1] max-w-xl mx-auto font-light tracking-[0.15em] leading-relaxed drop-shadow-sm">
              Authentic Lakhnavi Chikankari, hand-beaten gold zardozi lehengas, and imperial groom sherwanis crafted in Lucknow.
            </p>

            {/* Sabyasachi Action Buttons */}
            <div className="pt-4 flex flex-wrap items-center justify-center gap-4 text-xs font-light tracking-[0.25em] uppercase">
              <Link
                href="/collections/bridal"
                className="px-8 py-3.5 bg-[#c5a880] text-[#0c0908] hover:bg-white hover:text-[#0c0908] transition-all duration-300 font-normal shadow-[0_4px_20px_rgba(197,168,128,0.3)]"
              >
                Discover Bridal
              </Link>
              <a
                href="#appointment"
                className="px-8 py-3.5 border border-white/50 text-[#fcfaf7] hover:bg-white hover:text-[#0c0908] backdrop-blur-md transition-all duration-300"
              >
                Book Atelier Fitting
              </a>
            </div>
          </div>

          {/* Bottom Controls & Scroll Indicator */}
          <div className="w-full max-w-6xl flex items-center justify-between pointer-events-auto text-[10px] tracking-[0.25em] uppercase font-light text-[#c5a880]">
            
            {/* Audio & Playback Controls */}
            <div className="flex items-center gap-3">
              <button
                onClick={toggleSound}
                type="button"
                className="flex items-center gap-1.5 p-2 rounded-full bg-black/40 border border-white/20 hover:border-[#c5a880] text-white/80 hover:text-white transition-colors cursor-pointer"
                title={isMuted ? 'Turn Sound On' : 'Mute Video'}
              >
                {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
                <span className="hidden sm:inline">{isMuted ? 'Sound Off' : 'Sound On'}</span>
              </button>

              <button
                onClick={togglePlay}
                type="button"
                className="p-2 rounded-full bg-black/40 border border-white/20 hover:border-[#c5a880] text-white/80 hover:text-white transition-colors cursor-pointer"
                title={isPlaying ? 'Pause' : 'Play'}
              >
                {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
              </button>
            </div>

            {/* Scroll Indicator */}
            <div className="flex items-center gap-2 text-white/60">
              <span className="hidden sm:inline">Scroll To Explore</span>
              <ChevronDown className="w-3.5 h-3.5 animate-bounce" />
            </div>

            {/* Interactive 3D Facade Trigger */}
            <button
              onClick={() => setShow3DPreloader(true)}
              type="button"
              className="flex items-center gap-1.5 text-[#c5a880] hover:text-white transition-colors cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">3D Store Facade</span>
            </button>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 2: THE SABYASACHI MANIFESTO / CRAFTSMANSHIP PHILOSOPHY           */}
      {/* ========================================================================= */}
      <section className="py-24 md:py-32 px-6 bg-[#fbf8f3] text-[#1f1a17] text-center border-y border-[#e2d7c5]">
        <div className="max-w-3xl mx-auto space-y-8">
          
          {/* Royal Crest Monogram Icon */}
          <div className="flex justify-center">
            <svg
              className="w-8 h-8 text-[#9c7c54]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.2"
            >
              <path d="M12 2L15 8H9L12 2Z" fill="currentColor" fillOpacity="0.25" />
              <path d="M12 22V12M12 12L7 16M12 12L17 16" />
              <circle cx="12" cy="7" r="1.5" fill="currentColor" />
              <circle cx="12" cy="12" r="3" />
            </svg>
          </div>

          <span className="text-[11px] uppercase tracking-[0.4em] text-[#9c7c54] font-light block">
            The Philosophy of Anurosh
          </span>

          <blockquote className="font-serif text-2xl sm:text-3xl md:text-4xl font-light tracking-[0.12em] text-[#1f1a17] leading-relaxed italic">
            “In an era of mass velocity, true luxury is patience. Every Anurosh bridal silhouette is painstakingly handcrafted over 1,200 hours by generational Awadhi karigars in Lucknow.”
          </blockquote>

          <div className="pt-2">
            <span className="text-xs uppercase tracking-[0.35em] text-[#5c4e43] font-light block">
              — Anurosh Atelier • Sadbhavna Road, Indira Nagar
            </span>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 3: THE EDITORIAL RUNWAY LOOKBOOK (Sabyasachi Magazine Grid)       */}
      {/* ========================================================================= */}
      <section className="py-24 md:py-32 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-3">
          <span className="text-[10px] uppercase tracking-[0.4em] text-[#c5a880] font-light block">
            Haute Couture Archives
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light tracking-[0.25em] text-[#fcfaf7] uppercase">
            The Heritage Runway Edit
          </h2>
          <div className="w-16 h-px bg-[#c5a880]/60 mx-auto mt-4" />
        </div>

        {/* Sabyasachi Editorial Magazine Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12">
          
          {/* Look I: The Royal Awadh Bridal Lehenga */}
          <article className="group flex flex-col justify-between">
            <div className="relative aspect-[3/4] overflow-hidden bg-[#161210] border border-[#2b221a]">
              <img
                src="/campaign-bridal.jpg"
                alt="The Royal Awadh Bridal Lehenga by Anurosh"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute top-4 left-4 bg-black/60 px-3 py-1 text-[10px] tracking-[0.25em] uppercase text-[#c5a880] backdrop-blur-sm">
                Look I
              </div>
            </div>
            <div className="pt-6 space-y-2">
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#c5a880] font-light block">
                Bridal Ensemble
              </span>
              <h3 className="font-serif text-xl sm:text-2xl font-light tracking-[0.18em] text-[#fcfaf7] uppercase group-hover:text-[#c5a880] transition-colors">
                The Heritage Bridal Lehenga
              </h3>
              <p className="text-xs text-[#a8998a] font-light leading-relaxed">
                Handcrafted pure silk crimson lehenga adorned with antique bullion zardozi, beaten gold dabka, and hand-embroidered veil.
              </p>
              <div className="pt-2">
                <Link
                  href="/collections/bridal"
                  className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-[0.25em] text-[#c5a880] hover:underline"
                >
                  <span>Explore Bridal</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </article>

          {/* Look II: The Imperial Groom Sherwani */}
          <article className="group flex flex-col justify-between">
            <div className="relative aspect-[3/4] overflow-hidden bg-[#161210] border border-[#2b221a]">
              <img
                src="/campaign-groom.jpg"
                alt="Imperial Groom Sherwani by Anurosh"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute top-4 left-4 bg-black/60 px-3 py-1 text-[10px] tracking-[0.25em] uppercase text-[#c5a880] backdrop-blur-sm">
                Look II
              </div>
            </div>
            <div className="pt-6 space-y-2">
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#c5a880] font-light block">
                Imperial Menswear
              </span>
              <h3 className="font-serif text-xl sm:text-2xl font-light tracking-[0.18em] text-[#fcfaf7] uppercase group-hover:text-[#c5a880] transition-colors">
                The Royal Groom Sherwani
              </h3>
              <p className="text-xs text-[#a8998a] font-light leading-relaxed">
                Ivory raw silk sherwani tailored with tonal metallic needlework, paired with a ceremonial churidar and hand-woven doshala.
              </p>
              <div className="pt-2">
                <Link
                  href="/collections/ethnic"
                  className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-[0.25em] text-[#c5a880] hover:underline"
                >
                  <span>Explore Menswear</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </article>

          {/* Look III: The Royal Chikankari Couture */}
          <article className="group flex flex-col justify-between">
            <div className="relative aspect-[3/4] overflow-hidden bg-[#161210] border border-[#2b221a]">
              <img
                src="/campaign-couture.jpg"
                alt="Authentic Lakhnavi Chikankari by Anurosh"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute top-4 left-4 bg-black/60 px-3 py-1 text-[10px] tracking-[0.25em] uppercase text-[#c5a880] backdrop-blur-sm">
                Look III
              </div>
            </div>
            <div className="pt-6 space-y-2">
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#c5a880] font-light block">
                Heritage Chikankari
              </span>
              <h3 className="font-serif text-xl sm:text-2xl font-light tracking-[0.18em] text-[#fcfaf7] uppercase group-hover:text-[#c5a880] transition-colors">
                The Lakhnavi Badla Edit
              </h3>
              <p className="text-xs text-[#a8998a] font-light leading-relaxed">
                Diaphanous pure georgette featuring master shadow-work jali stitches, embellished with antique mukaish badla wire.
              </p>
              <div className="pt-2">
                <Link
                  href="/collections/ethnic"
                  className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-[0.25em] text-[#c5a880] hover:underline"
                >
                  <span>Explore Ethnic</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </article>

        </div>

        {/* Full-Bleed Look IV: The Runway Finale Banner */}
        <div className="mt-16 border border-[#2b221a] bg-[#140f0c] overflow-hidden grid grid-cols-1 lg:grid-cols-2 items-center">
          <div className="relative aspect-[16/10] lg:aspect-auto lg:h-full overflow-hidden">
            <img
              src="/campaign-finale.jpg"
              alt="Anurosh Couture Runway Finale"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-8 sm:p-14 space-y-6">
            <div className="inline-block bg-[#c5a880]/15 text-[#c5a880] border border-[#c5a880]/30 px-3.5 py-1 text-[10px] uppercase tracking-[0.3em]">
              The Grand Finale
            </div>
            <h3 className="font-serif text-2xl sm:text-4xl font-light tracking-[0.2em] text-[#fcfaf7] uppercase leading-snug">
              Preserving Centuries of Awadhi Haute Couture
            </h3>
            <p className="text-xs sm:text-sm text-[#b8a99a] font-light leading-relaxed">
              Designed for generation-defining weddings in Lucknow and celebrations across London, New York, and Dubai. Every thread is an ode to royal Indian heritage.
            </p>
            <div className="pt-2 flex flex-wrap gap-4 text-xs uppercase tracking-[0.2em] font-light">
              <a
                href="#appointment"
                className="px-6 py-3 bg-[#c5a880] text-[#0c0908] hover:bg-white transition-colors"
              >
                Schedule Private Consultation
              </a>
              <Link
                href="/about"
                className="px-6 py-3 border border-white/30 text-white hover:bg-white hover:text-[#0c0908] transition-colors"
              >
                The House History
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 4: THE FOUR PILLAR CURATED PORTFOLIOS                             */}
      {/* ========================================================================= */}
      <section className="py-24 px-6 border-t border-[#231b15] bg-[#0f0c0a]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-3">
            <span className="text-[10px] uppercase tracking-[0.4em] text-[#c5a880] font-light block">
              Curated Portfolios
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-light tracking-[0.25em] text-[#fcfaf7] uppercase">
              The World of Anurosh
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* 01 Bridal */}
            <Link
              href="/collections/bridal"
              className="p-8 border border-[#261e18] bg-[#140f0c] hover:border-[#c5a880] transition-all duration-500 group flex flex-col justify-between"
            >
              <div>
                <span className="text-[11px] font-mono text-[#c5a880] tracking-widest block mb-4">
                  01
                </span>
                <h3 className="font-serif text-2xl font-light tracking-[0.2em] text-[#fcfaf7] uppercase group-hover:text-[#c5a880] transition-colors">
                  Bridal Couture
                </h3>
                <p className="text-xs text-[#9c8e81] font-light mt-3 leading-relaxed">
                  Bespoke bridal lehengas, hand-woven zardozi veils, and royal trousseau ensembles.
                </p>
              </div>
              <div className="pt-8 mt-8 border-t border-[#261e18] flex items-center justify-between text-[11px] tracking-[0.25em] uppercase text-[#c5a880]">
                <span>View Portfolio</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>
            </Link>

            {/* 02 Ethnic */}
            <Link
              href="/collections/ethnic"
              className="p-8 border border-[#261e18] bg-[#140f0c] hover:border-[#c5a880] transition-all duration-500 group flex flex-col justify-between"
            >
              <div>
                <span className="text-[11px] font-mono text-[#c5a880] tracking-widest block mb-4">
                  02
                </span>
                <h3 className="font-serif text-2xl font-light tracking-[0.2em] text-[#fcfaf7] uppercase group-hover:text-[#c5a880] transition-colors">
                  Heritage Ethnic
                </h3>
                <p className="text-xs text-[#9c8e81] font-light mt-3 leading-relaxed">
                  Pure georgette Lakhnavi Chikankari, groom sherwanis, and festive Awadhi attire.
                </p>
              </div>
              <div className="pt-8 mt-8 border-t border-[#261e18] flex items-center justify-between text-[11px] tracking-[0.25em] uppercase text-[#c5a880]">
                <span>View Portfolio</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>
            </Link>

            {/* 03 Collaboration */}
            <Link
              href="/collaboration"
              className="p-8 border border-[#261e18] bg-[#140f0c] hover:border-[#c5a880] transition-all duration-500 group flex flex-col justify-between"
            >
              <div>
                <span className="text-[11px] font-mono text-[#c5a880] tracking-widest block mb-4">
                  03
                </span>
                <h3 className="font-serif text-2xl font-light tracking-[0.2em] text-[#fcfaf7] uppercase group-hover:text-[#c5a880] transition-colors">
                  Collaboration
                </h3>
                <p className="text-xs text-[#9c8e81] font-light mt-3 leading-relaxed">
                  NRI virtual trousseau styling, high-fashion editorials, and bespoke design commissions.
                </p>
              </div>
              <div className="pt-8 mt-8 border-t border-[#261e18] flex items-center justify-between text-[11px] tracking-[0.25em] uppercase text-[#c5a880]">
                <span>View Portfolio</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>
            </Link>

            {/* 04 The Atelier */}
            <Link
              href="/about"
              className="p-8 border border-[#261e18] bg-[#140f0c] hover:border-[#c5a880] transition-all duration-500 group flex flex-col justify-between"
            >
              <div>
                <span className="text-[11px] font-mono text-[#c5a880] tracking-widest block mb-4">
                  04
                </span>
                <h3 className="font-serif text-2xl font-light tracking-[0.2em] text-[#fcfaf7] uppercase group-hover:text-[#c5a880] transition-colors">
                  The Atelier
                </h3>
                <p className="text-xs text-[#9c8e81] font-light mt-3 leading-relaxed">
                  Generations of Awadhi master artisans, handloom silk archives, and our flagship story.
                </p>
              </div>
              <div className="pt-8 mt-8 border-t border-[#261e18] flex items-center justify-between text-[11px] tracking-[0.25em] uppercase text-[#c5a880]">
                <span>View Portfolio</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>
            </Link>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 5: "THE ART OF RETAIL" — THE INDIRA NAGAR FLAGSHIP ATELIER       */}
      {/* ========================================================================= */}
      <section id="flagship" className="py-24 md:py-32 px-6 border-t border-[#231b15] bg-[#0c0908]">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center mb-16 space-y-3">
            <span className="text-[10px] uppercase tracking-[0.4em] text-[#c5a880] font-light block">
              The Flagship Experience
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light tracking-[0.25em] text-[#fcfaf7] uppercase">
              The Lucknow Flagship Atelier
            </h2>
            <p className="text-xs sm:text-sm text-[#a8998a] max-w-xl mx-auto font-light tracking-[0.15em]">
              An architectural neoclassical sanctuary designed for private bridal fittings and bespoke trousseau consultations.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left: 3D Facade Image Showcase */}
            <div className="lg:col-span-7 relative group rounded-sm overflow-hidden border border-[#2b221a] shadow-2xl">
              <img
                src="/anurosh-facade.jpg"
                alt="Anurosh Flagship Boutique Facade in Indira Nagar Lucknow"
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-102"
              />
              
              {/* Overlay Prompt for Interactive 3D Doors */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6 sm:p-10">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between w-full gap-4">
                  <div>
                    <span className="text-[10px] uppercase tracking-[0.3em] text-[#c5a880] font-light block">
                      Architectural Facade
                    </span>
                    <h4 className="font-serif text-xl sm:text-2xl text-white font-light tracking-[0.15em] uppercase">
                      Neoclassical Entrance
                    </h4>
                  </div>
                  <button
                    onClick={() => setShow3DPreloader(true)}
                    type="button"
                    className="px-6 py-2.5 rounded-full bg-[#c5a880] text-[#0c0908] hover:bg-white transition-all text-xs uppercase tracking-[0.25em] font-normal flex items-center gap-2 cursor-pointer shadow-lg"
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Open 3D Doors</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Right: Studio Location & Concierge Details */}
            <div className="lg:col-span-5 space-y-8 bg-[#140f0c] p-8 sm:p-12 border border-[#261e18]">
              
              <div>
                <span className="text-[10px] uppercase tracking-[0.35em] text-[#c5a880] font-light block mb-2">
                  Studio Address
                </span>
                <address className="not-italic text-sm text-[#ded3c1] font-light leading-relaxed">
                  <strong className="text-white text-base font-serif tracking-widest uppercase block mb-1">
                    Anurosh Boutique
                  </strong>
                  18/355, Sadbhavna Road,<br />
                  Near Maitri Park, Indira Nagar,<br />
                  Lucknow, Uttar Pradesh - 226016
                </address>
                <p className="text-[11px] text-[#8e7e72] font-light mt-2">
                  Conveniently situated near Maitri Park, directly accessible from Faizabad Road & Gomti Nagar.
                </p>
              </div>

              <div className="border-t border-[#261e18] pt-6 space-y-4 text-xs font-light">
                <div>
                  <span className="text-[10px] uppercase tracking-[0.3em] text-[#c5a880] block mb-1">
                    Atelier Hours
                  </span>
                  <p className="text-[#ded3c1]">Monday to Sunday: 10:30 AM – 9:00 PM</p>
                </div>

                <div>
                  <span className="text-[10px] uppercase tracking-[0.3em] text-[#c5a880] block mb-1">
                    Private Concierge
                  </span>
                  <p className="text-[#ded3c1]">
                    Phone: <a href={`tel:${phone}`} className="underline text-[#c5a880]">{phone}</a>
                  </p>
                  <p className="text-[#ded3c1]">Email: atelier@anurosh.com</p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3 text-xs uppercase tracking-[0.2em] font-light">
                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 border border-[#c5a880] text-[#c5a880] hover:bg-[#c5a880] hover:text-[#0c0908] transition-all text-center"
                >
                  Get Directions
                </a>
                <a
                  href={`tel:${phone}`}
                  className="px-6 py-3 bg-[#c5a880] text-[#0c0908] hover:bg-white transition-all text-center"
                >
                  Call Studio
                </a>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 6: SABYASACHI PRIVATE SALON / APPOINTMENT BOOKING                 */}
      {/* ========================================================================= */}
      <section id="appointment" className="py-24 md:py-32 px-6 border-t border-[#231b15] bg-[#090706]">
        <div className="max-w-3xl mx-auto">
          
          <div className="text-center mb-12 space-y-3">
            <span className="text-[10px] uppercase tracking-[0.4em] text-[#c5a880] font-light block">
              Bespoke Bridal Services
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-light tracking-[0.25em] text-[#fcfaf7] uppercase">
              Request a Private Fitting
            </h2>
            <p className="text-xs sm:text-sm text-[#a8998a] font-light tracking-[0.15em] leading-relaxed">
              Reserve a private salon consultation at our Indira Nagar flagship studio or schedule a personalized virtual video appointment for worldwide clients.
            </p>
          </div>

          <div className="bg-[#140f0c] border border-[#2b221a] p-8 sm:p-12">
            {bookingSubmitted ? (
              <div className="text-center py-12 space-y-4 animate-in fade-in">
                <CheckCircle2 className="w-12 h-12 text-[#c5a880] mx-auto" />
                <h3 className="font-serif text-2xl font-light tracking-[0.2em] text-[#fcfaf7] uppercase">
                  Consultation Requested
                </h3>
                <p className="text-xs text-[#a8998a] max-w-md mx-auto font-light leading-relaxed">
                  Our private bridal concierge will contact you within 24 hours to confirm your private salon appointment at our Sadbhavna Road flagship studio.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => setBookingSubmitted(false)}
                    type="button"
                    className="text-xs uppercase tracking-[0.25em] text-[#c5a880] underline hover:text-white"
                  >
                    Submit Another Request
                  </button>
                </div>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setBookingSubmitted(true);
                }}
                className="space-y-6 text-xs font-light"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[10px] uppercase tracking-[0.25em] text-[#c5a880] mb-2">
                      Full Name *
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. Radhika Verma"
                      className="w-full bg-[#0c0908] border border-[#332720] px-4 py-3 text-white placeholder-stone-600 focus:outline-none focus:border-[#c5a880] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] uppercase tracking-[0.25em] text-[#c5a880] mb-2">
                      Phone / WhatsApp *
                    </label>
                    <input
                      required
                      type="tel"
                      placeholder="+91 98765 43210"
                      className="w-full bg-[#0c0908] border border-[#332720] px-4 py-3 text-white placeholder-stone-600 focus:outline-none focus:border-[#c5a880] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[10px] uppercase tracking-[0.25em] text-[#c5a880] mb-2">
                      Email Address *
                    </label>
                    <input
                      required
                      type="email"
                      placeholder="name@example.com"
                      className="w-full bg-[#0c0908] border border-[#332720] px-4 py-3 text-white placeholder-stone-600 focus:outline-none focus:border-[#c5a880] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] uppercase tracking-[0.25em] text-[#c5a880] mb-2">
                      Appointment Type *
                    </label>
                    <select
                      className="w-full bg-[#0c0908] border border-[#332720] px-4 py-3 text-white focus:outline-none focus:border-[#c5a880] transition-colors cursor-pointer"
                    >
                      <option>In-Person Fitting (Indira Nagar, Lucknow)</option>
                      <option>Virtual NRI Video Consultation</option>
                      <option>Custom Bridal Trousseau Styling</option>
                      <option>Royal Groom Sherwani Fitting</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] uppercase tracking-[0.25em] text-[#c5a880] mb-2">
                    Wedding Date / Event Notes
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Tell us about your wedding date, silhouette preferences, or custom embroidery requirements..."
                    className="w-full bg-[#0c0908] border border-[#332720] px-4 py-3 text-white placeholder-stone-600 focus:outline-none focus:border-[#c5a880] transition-colors resize-none"
                  />
                </div>

                <div className="pt-2 text-center">
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-12 py-3.5 bg-[#c5a880] text-[#0c0908] hover:bg-white hover:text-[#0c0908] transition-all text-xs uppercase tracking-[0.3em] font-normal cursor-pointer shadow-lg"
                  >
                    Request Private Fitting
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SECTION 7: SABYASACHI SIGNATURE LUXURY FOOTER                             */}
      {/* ========================================================================= */}
      <footer className="border-t border-[#231b15] bg-[#070505] text-[#b8a99a] pt-20 pb-12 px-6">
        <div className="max-w-7xl mx-auto space-y-16">
          
          {/* Newsletter Signup (Sabyasachi "Join The Salon") */}
          <div className="text-center max-w-xl mx-auto space-y-4">
            <span className="text-[10px] uppercase tracking-[0.45em] text-[#c5a880] font-light block">
              Private Salon Newsletter
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-light tracking-[0.2em] text-[#fcfaf7] uppercase">
              Be The First To Know
            </h3>
            <p className="text-xs text-[#8e7e72] font-light leading-relaxed">
              Subscribe to receive private previews of seasonal couture collections and invitations to exclusive trunk shows.
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert('Thank you for subscribing to the Anurosh Private Salon.');
              }}
              className="pt-2 flex items-center justify-center max-w-md mx-auto"
            >
              <input
                type="email"
                required
                placeholder="Enter your email address"
                className="w-full bg-transparent border-b border-[#4a3a2f] py-2 text-xs text-white placeholder-stone-600 focus:outline-none focus:border-[#c5a880] tracking-wider"
              />
              <button
                type="submit"
                className="ml-4 text-xs uppercase tracking-[0.25em] text-[#c5a880] hover:text-white transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* 4 Directory Columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-xs font-light">
            
            <div className="space-y-4">
              <h4 className="font-serif text-base tracking-[0.2em] text-[#fcfaf7] uppercase">
                Collections
              </h4>
              <ul className="space-y-2 text-[#8e7e72]">
                <li><Link href="/collections/bridal" className="hover:text-[#c5a880] transition-colors">Heritage Bridal Lehengas</Link></li>
                <li><Link href="/collections/ethnic" className="hover:text-[#c5a880] transition-colors">Royal Awadhi Sherwanis</Link></li>
                <li><Link href="/collections/ethnic" className="hover:text-[#c5a880] transition-colors">Pure Lakhnavi Chikankari</Link></li>
                <li><Link href="/collections/bridal" className="hover:text-[#c5a880] transition-colors">Ceremonial Trousseau</Link></li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-serif text-base tracking-[0.2em] text-[#fcfaf7] uppercase">
                The House
              </h4>
              <ul className="space-y-2 text-[#8e7e72]">
                <li><Link href="/about" className="hover:text-[#c5a880] transition-colors">Our Awadhi Heritage</Link></li>
                <li><Link href="/about" className="hover:text-[#c5a880] transition-colors">Master Karigars & Zardozi</Link></li>
                <li><Link href="/collaboration" className="hover:text-[#c5a880] transition-colors">Collaborations</Link></li>
                <li>
                  <button onClick={() => setShow3DPreloader(true)} className="hover:text-[#c5a880] transition-colors text-left cursor-pointer">
                    3D Interactive Entrance
                  </button>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-serif text-base tracking-[0.2em] text-[#fcfaf7] uppercase">
                Client Services
              </h4>
              <ul className="space-y-2 text-[#8e7e72]">
                <li><a href="#appointment" className="hover:text-[#c5a880] transition-colors">Book Private Fitting</a></li>
                <li><a href="#appointment" className="hover:text-[#c5a880] transition-colors">NRI Virtual Consultation</a></li>
                <li><a href={`tel:${phone}`} className="hover:text-[#c5a880] transition-colors">Concierge: {phone}</a></li>
                <li><a href="mailto:atelier@anurosh.com" className="hover:text-[#c5a880] transition-colors">atelier@anurosh.com</a></li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-serif text-base tracking-[0.2em] text-[#fcfaf7] uppercase">
                Flagship Studio
              </h4>
              <address className="not-italic text-[#8e7e72] leading-relaxed">
                Anurosh Flagship Atelier<br />
                18/355, Sadbhavna Road,<br />
                Near Maitri Park, Indira Nagar,<br />
                Lucknow, UP - 226016<br />
                Hours: Mon – Sun: 10:30 AM – 9:00 PM
              </address>
              <div className="pt-1">
                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] uppercase tracking-[0.2em] text-[#c5a880] hover:underline"
                >
                  View on Google Maps →
                </a>
              </div>
            </div>

          </div>

          {/* Bottom Copyright & Credit */}
          <div className="border-t border-[#1a1410] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] tracking-[0.25em] uppercase text-[#6d5f54]">
            <p>© 2026 ANUROSH HAUTE COUTURE. ALL RIGHTS RESERVED.</p>
            <p>LUCKNOW • UTTAR PRADESH • INDIA</p>
          </div>

        </div>
      </footer>

    </div>
  );
}