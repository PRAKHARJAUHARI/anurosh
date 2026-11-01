'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ArrowRight, MapPin } from 'lucide-react';

interface StorefrontPreloaderProps {
  onComplete?: () => void;
  autoEnterDelay?: number; // ms to auto enter after 100%
}

export default function StorefrontPreloader({
  onComplete,
  autoEnterDelay = 700,
}: StorefrontPreloaderProps) {
  const [progress, setProgress] = useState<number>(0);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [isEntering, setIsEntering] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(true);

  // Smooth loading counter simulation from 0 to 100%
  useEffect(() => {
    const startTime = Date.now();
    const duration = 1800; // 1.8 seconds smooth luxury load

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const currentProgress = Math.min(100, Math.round((elapsed / duration) * 100));
      setProgress(currentProgress);

      if (currentProgress >= 100) {
        clearInterval(interval);
        setIsLoaded(true);
      }
    }, 25);

    return () => clearInterval(interval);
  }, []);

  const handleEnter = useCallback(() => {
    if (isEntering) return;
    setIsEntering(true);

    // Zoom-in effect followed by fade-out
    setTimeout(() => {
      setIsVisible(false);
      if (onComplete) {
        onComplete();
      }
    }, 850);
  }, [isEntering, onComplete]);

  // Auto enter after 100% if user doesn't click
  useEffect(() => {
    if (isLoaded) {
      const timer = setTimeout(() => {
        handleEnter();
      }, autoEnterDelay);
      return () => clearTimeout(timer);
    }
  }, [isLoaded, autoEnterDelay, handleEnter]);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.aside
        key="storefront-preloader"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, scale: 1.06, filter: 'blur(12px)' }}
        transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
        aria-label="Anurosh Store Entrance Preloader"
        className="fixed inset-0 z-[120] flex items-center justify-center bg-[#0d090b] overflow-hidden select-none"
        style={{ height: '100vh', width: '100vw' }}
      >
        {/* 1. Ambient Background Layer: Softened warm glow from the facade */}
        <div 
          className="absolute inset-0 bg-cover bg-center blur-3xl opacity-35 scale-125 pointer-events-none"
          style={{ backgroundImage: "url('/anurosh-facade.jpg')" }}
        />

        {/* 2. Atmospheric Luxury Vignette */}
        <div className="absolute inset-0 z-10 pointer-events-none bg-[radial-gradient(ellipse_at_center,transparent_35%,rgba(8,5,7,0.9)_100%)]" />
        <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-t from-[#0d090b] via-transparent to-[#0d090b]/85" />

        {/* 3. Top Header Bar */}
        <div className="absolute top-4 sm:top-7 left-0 right-0 px-6 sm:px-10 flex items-center justify-between z-30 pointer-events-auto">
          <div className="flex flex-col">
            <span className="font-serif text-xl sm:text-2xl font-bold tracking-[0.35em] text-white uppercase drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]">
              Anurosh
            </span>
            <span className="text-[9px] sm:text-[10px] tracking-[0.35em] text-[#d4af37] uppercase font-light drop-shadow">
              Couture • Indira Nagar, Lucknow
            </span>
          </div>

          <button
            onClick={handleEnter}
            type="button"
            className="px-4 py-1.5 rounded-full border border-[#d4af37]/60 bg-black/50 backdrop-blur-md text-[#f5ebd7] hover:text-white hover:border-[#d4af37] hover:bg-[#d4af37]/20 transition-all text-xs uppercase tracking-widest font-semibold flex items-center gap-1.5 cursor-pointer shadow-lg active:scale-95"
          >
            <span>Skip</span>
            <span className="text-[#d4af37]">✕</span>
          </button>
        </div>

        {/* 4. Center Stage Facade Showcase */}
        <div className="relative z-20 w-full max-w-3xl px-4 flex flex-col items-center justify-center">
          
          {/* Facade Image Card with Luxury Framing & Shimmer */}
          <motion.div
            initial={{ scale: 0.94, opacity: 0 }}
            animate={{ 
              scale: isEntering ? 1.35 : 1,
              opacity: isEntering ? 0.3 : 1,
              y: isEntering ? -20 : 0
            }}
            transition={{ duration: isEntering ? 0.8 : 0.9, ease: [0.22, 1, 0.36, 1] }}
            onClick={handleEnter}
            className="relative w-full aspect-[819/689] max-h-[62vh] sm:max-h-[68vh] rounded-sm overflow-hidden shadow-[0_25px_70px_rgba(0,0,0,0.95)] border border-[#c5a059]/40 bg-black cursor-pointer group"
          >
            {/* The Actual Storefront Facade Image */}
            <img
              src="/anurosh-facade.jpg"
              alt="Anurosh Flagship Boutique Entrance - Lucknow"
              className="w-full h-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-700 ease-out"
            />

            {/* Shimmer Light Sweep across the Facade */}
            <motion.div
              initial={{ x: '-120%' }}
              animate={{ x: '160%' }}
              transition={{ repeat: Infinity, duration: 2.8, ease: 'easeInOut', repeatDelay: 1 }}
              className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-25deg] pointer-events-none"
            />

            {/* Interior Door Glow Pulse */}
            <div className="absolute inset-x-[35%] bottom-[12%] top-[55%] bg-[radial-gradient(ellipse_at_center,_rgba(255,225,170,0.45)_0%,_transparent_75%)] pointer-events-none animate-pulse" />

            {/* Haute Couture Golden Corner Accents */}
            <div className="absolute top-2.5 left-2.5 w-4 h-4 border-t-2 border-l-2 border-[#d4af37] pointer-events-none" />
            <div className="absolute top-2.5 right-2.5 w-4 h-4 border-t-2 border-r-2 border-[#d4af37] pointer-events-none" />
            <div className="absolute bottom-2.5 left-2.5 w-4 h-4 border-b-2 border-l-2 border-[#d4af37] pointer-events-none" />
            <div className="absolute bottom-2.5 right-2.5 w-4 h-4 border-b-2 border-r-2 border-[#d4af37] pointer-events-none" />

            {/* Enter Button Overlay when Ready */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="px-5 py-2 rounded-full bg-[#380e15]/90 border border-[#d4af37] text-[#f7ede1] text-xs uppercase tracking-[0.2em] font-semibold backdrop-blur-md shadow-xl flex items-center gap-2">
                <span>Enter Boutique</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#d4af37]" />
              </span>
            </div>
          </motion.div>

          {/* 5. Luxury Loading Progress & Typography */}
          <div className="w-full max-w-md mt-6 space-y-3 text-center">
            {/* Loading Status Text & Percentage */}
            <div className="flex items-center justify-between text-xs tracking-[0.25em] text-[#d4af37] uppercase font-light">
              <span className="flex items-center gap-1.5 text-[10px] text-white/80">
                <Sparkles className="w-3 h-3 text-[#d4af37]" />
                {progress < 100 ? 'Entering Architectural Boutique...' : 'Welcome to Anurosh'}
              </span>
              <span className="font-mono font-medium text-white">{progress}%</span>
            </div>

            {/* Hairline Gold Gradient Progress Bar */}
            <div className="w-full h-[2px] bg-white/10 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-[#8e6d2b] via-[#e6c875] to-[#f4e5b8] transition-all duration-75 ease-out shadow-[0_0_10px_#d4af37]"
                style={{ width: `${progress}%` }}
              />
            </div>

            {/* Address Badge */}
            <p className="text-[10px] sm:text-[11px] tracking-[0.25em] uppercase text-white/60 font-light pt-1">
              18/355, Sadbhavna Road • Near Maitri Park, Indira Nagar, Lucknow
            </p>
          </div>
        </div>

        {/* 6. Bottom Floating Status */}
        <div className="absolute bottom-4 sm:bottom-6 left-0 right-0 text-center pointer-events-none z-30">
          <span className="text-[9px] sm:text-[10px] tracking-[0.3em] uppercase text-[#c5a059]/75 font-medium">
            Handcrafted Bridal & Ethnic Couture • City of Nawabs
          </span>
        </div>
      </motion.aside>
    </AnimatePresence>
  );
}
