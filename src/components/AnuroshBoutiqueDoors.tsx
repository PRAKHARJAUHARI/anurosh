'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, MapPin, ArrowRight, Compass, ShieldCheck } from 'lucide-react';

interface AnuroshBoutiqueDoorsProps {
  onEnterComplete?: () => void;
}

export default function AnuroshBoutiqueDoors({ onEnterComplete }: AnuroshBoutiqueDoorsProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isTransitioned, setIsTransitioned] = useState(false);
  const [isZooming, setIsZooming] = useState(false);

  const handleDoorClick = () => {
    if (isOpen) return;
    setIsOpen(true);

    // After doors swing open (1.2s), trigger zoom & fade into main site
    setTimeout(() => {
      setIsZooming(true);
    }, 1100);

    setTimeout(() => {
      setIsTransitioned(true);
      if (onEnterComplete) {
        onEnterComplete();
      }
    }, 1700);
  };

  return (
    <AnimatePresence>
      {!isTransitioned && (
        <motion.div
          key="storefront-preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.08 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#140e10] overflow-hidden select-none"
          style={{ height: '100vh', width: '100vw' }}
        >
          {/* Subtle Royal Atmospheric Background */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(197,160,89,0.18)_0%,_rgba(15,10,12,0.95)_75%)] pointer-events-none" />

          {/* Top Brand Bar */}
          <div className="absolute top-4 sm:top-6 left-0 right-0 px-6 flex items-center justify-between z-30 pointer-events-none">
            <div className="flex flex-col">
              <span className="font-serif text-lg sm:text-xl font-bold tracking-[0.3em] text-white uppercase drop-shadow">
                Anurosh
              </span>
              <span className="text-[9px] sm:text-[10px] tracking-[0.3em] text-[#d4af37] uppercase font-medium">
                Indira Nagar • Lucknow
              </span>
            </div>

            <button
              onClick={handleDoorClick}
              type="button"
              className="pointer-events-auto px-3.5 py-1.5 rounded-full border border-[#d4af37]/50 bg-black/40 backdrop-blur-md text-[#f5ebd7] hover:text-white hover:border-[#d4af37] hover:bg-[#d4af37]/20 transition-all text-[11px] uppercase tracking-widest font-semibold flex items-center gap-1.5 cursor-pointer shadow-lg active:scale-95"
            >
              <span>Quick Enter</span>
              <ArrowRight className="w-3 h-3 text-[#d4af37]" />
            </button>
          </div>

          {/* Main Scalable Building Container */}
          <motion.div
            animate={{
              scale: isZooming ? 1.5 : 1,
              opacity: isZooming ? 0.2 : 1,
            }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-[94%] max-w-4xl aspect-[4/3] max-h-[82vh] sm:max-h-[85vh] bg-[#faf7f2] shadow-[0_25px_70px_rgba(0,0,0,0.8)] overflow-hidden rounded-sm flex flex-col border-t-8 border-[#ded5c5]"
          >
            {/* UPPER FACADE: Arch, Pillars and Signage */}
            <div className="relative h-[55%] w-full flex flex-col items-center justify-end pb-3 sm:pb-4 z-20 bg-[#faf7f2] drop-shadow-md">
              
              {/* Top Arch Window */}
              <div className="absolute top-2 sm:top-4 w-1/3 aspect-square border-4 sm:border-8 border-[#ded5c5] rounded-t-full bg-[#1c1816] overflow-hidden flex items-end justify-center shadow-inner">
                {/* Arch Window Grids */}
                <div className="w-full h-full border-2 sm:border-4 border-[#9c7c54]/70 rounded-t-full relative">
                  <div className="absolute top-0 left-1/2 w-0.5 h-full bg-[#9c7c54]/70 -translate-x-1/2" />
                  <div className="absolute top-1/2 left-0 w-full h-0.5 bg-[#9c7c54]/70" />
                  {/* Subtle inner chandelier light glow */}
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(247,219,167,0.35)_0%,_transparent_70%)]" />
                </div>
              </div>

              {/* Neoclassical Pillars with Fluted Shadows */}
              <div className="absolute top-0 left-4 sm:left-8 w-8 sm:w-12 h-full bg-[#f3ede3] shadow-[inset_-4px_0_10px_rgba(0,0,0,0.06),4px_0_10px_rgba(0,0,0,0.04)] border-x border-[#ded5c5]" />
              <div className="absolute top-0 right-4 sm:right-8 w-8 sm:w-12 h-full bg-[#f3ede3] shadow-[inset_4px_0_10px_rgba(0,0,0,0.06),-4px_0_10px_rgba(0,0,0,0.04)] border-x border-[#ded5c5]" />

              {/* Signage Architrave */}
              <div className="relative z-10 bg-[#faf7f2] w-full text-center py-2 sm:py-3 border-y border-[#ded5c5] shadow-sm">
                <h1 className="text-3xl sm:text-5xl md:text-6xl font-serif font-bold tracking-[0.25em] text-[#a68a56] drop-shadow-sm uppercase">
                  Anurosh
                </h1>
                <p className="text-[9px] sm:text-[11px] tracking-[0.35em] text-[#78634e] uppercase font-medium mt-0.5">
                  Haute Couture & Bridal • Lucknow
                </p>
              </div>
            </div>

            {/* LOWER FACADE: Storefront, Display Windows and Opening Doors */}
            <div className="relative h-[45%] w-full flex z-10">
              
              {/* INTERIOR (Warm, luxury boutique interior revealed when doors swing open) */}
              <div className="absolute inset-0 bg-[#fbf6ee] z-0 flex flex-col items-center justify-center border-t-4 border-[#9c7c54] overflow-hidden">
                {/* Interior warm chandelier ambient light */}
                <motion.div
                  animate={{ opacity: isOpen ? 1 : 0.6 }}
                  transition={{ duration: 0.8 }}
                  className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(247,225,183,0.6)_0%,_rgba(251,246,238,0.95)_70%)]"
                />

                <div className="grid grid-cols-3 gap-3 sm:gap-6 w-full h-full p-4 relative z-10">
                  <div className="bg-[#ede1ce] rounded-t-full h-3/4 self-end shadow-inner border border-[#d8c7ad]/50 flex items-center justify-center">
                    <span className="text-[10px] sm:text-xs uppercase tracking-wider text-[#9c7c54] font-serif font-semibold">Bridal</span>
                  </div>
                  <div className="bg-[#ede1ce] rounded-t-full h-full shadow-inner border border-[#d8c7ad]/50 flex flex-col items-center justify-center text-[#9c7c54] font-serif p-2 text-center">
                    <Sparkles className="w-4 h-4 text-[#a68a56] mb-1 animate-pulse" />
                    <span className="text-sm sm:text-lg font-bold tracking-wider text-[#380e15]">Welcome</span>
                    <span className="text-[9px] sm:text-[10px] tracking-widest uppercase text-[#8e6d2b] mt-0.5">To Anurosh</span>
                  </div>
                  <div className="bg-[#ede1ce] rounded-t-full h-3/4 self-end shadow-inner border border-[#d8c7ad]/50 flex items-center justify-center">
                    <span className="text-[10px] sm:text-xs uppercase tracking-wider text-[#9c7c54] font-serif font-semibold">Ethnic</span>
                  </div>
                </div>
              </div>

              {/* Left Display Window */}
              <div className="relative w-[30%] h-full z-20 border-r-4 border-t-4 border-[#9c7c54] bg-white/20 backdrop-blur-[2px] shadow-[inset_0_0_20px_rgba(156,124,84,0.25)] flex items-end justify-center pb-3">
                {/* Mannequin Silhouette */}
                <div className="relative flex flex-col items-center">
                  <div className="w-3.5 h-3.5 rounded-full bg-[#a88d6b] shadow-sm" />
                  <div className="w-8 sm:w-11 h-20 sm:h-28 bg-gradient-to-b from-[#a88d6b] via-[#947855] to-[#785e3e] rounded-t-lg shadow-md flex items-center justify-center">
                    <div className="w-4/5 h-0.5 bg-[#d4af37]/60" />
                  </div>
                </div>
              </div>

              {/* CENTRAL ENTRANCE: 3D Interactive Opening Doors */}
              <div
                className="relative w-[40%] h-full z-20 cursor-pointer border-t-4 border-[#9c7c54]"
                style={{ perspective: '1100px', perspectiveOrigin: 'center' }}
                onClick={handleDoorClick}
              >
                {/* Left Glass Door (Swings inward to the left) */}
                <motion.div
                  className="absolute top-0 left-0 w-1/2 h-full bg-white/25 backdrop-blur-md border-r-2 border-y-4 border-l-4 border-[#9c7c54] flex justify-end items-center shadow-lg"
                  animate={{ rotateY: isOpen ? -95 : 0 }}
                  transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                  style={{
                    transformOrigin: 'left center',
                    transformStyle: 'preserve-3d',
                  }}
                >
                  {/* Luxury Bronze Door Handle */}
                  <div className="w-1.5 h-14 sm:h-20 bg-gradient-to-b from-[#b8976c] via-[#85653d] to-[#b8976c] mr-2 rounded-full shadow-[0_2px_8px_rgba(0,0,0,0.4)]" />
                </motion.div>

                {/* Right Glass Door (Swings inward to the right) */}
                <motion.div
                  className="absolute top-0 right-0 w-1/2 h-full bg-white/25 backdrop-blur-md border-l-2 border-y-4 border-r-4 border-[#9c7c54] flex justify-start items-center shadow-lg"
                  animate={{ rotateY: isOpen ? 95 : 0 }}
                  transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                  style={{
                    transformOrigin: 'right center',
                    transformStyle: 'preserve-3d',
                  }}
                >
                  {/* Luxury Bronze Door Handle */}
                  <div className="w-1.5 h-14 sm:h-20 bg-gradient-to-b from-[#b8976c] via-[#85653d] to-[#b8976c] ml-2 rounded-full shadow-[0_2px_8px_rgba(0,0,0,0.4)]" />
                </motion.div>

                {/* Entrance Neoclassical Steps (Fixed in front of doors) */}
                <div className="absolute -bottom-5 sm:-bottom-6 left-1/2 -translate-x-1/2 w-[120%] flex flex-col z-30 pointer-events-none">
                  <div className="h-2 w-full bg-[#ded6c7] border-b border-[#c4b9a5]" />
                  <div className="h-2 w-[105%] -ml-[2.5%] bg-[#ded6c7] border-b border-[#c4b9a5]" />
                  <div className="h-2 w-[110%] -ml-[5%] bg-[#ded6c7] shadow-xl" />
                </div>

                {/* Interactive Click Prompt Badge */}
                {!isOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="absolute inset-0 z-30 pointer-events-none flex flex-col items-center justify-center gap-1.5"
                  >
                    <span className="bg-[#380e15]/90 border border-[#d4af37]/70 text-[#f7ede1] text-[10px] sm:text-xs font-semibold px-4 py-1.5 rounded-full backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.5)] animate-pulse tracking-widest uppercase">
                      Click Doors to Enter
                    </span>
                  </motion.div>
                )}
              </div>

              {/* Right Display Window */}
              <div className="relative w-[30%] h-full z-20 border-l-4 border-t-4 border-[#9c7c54] bg-white/20 backdrop-blur-[2px] shadow-[inset_0_0_20px_rgba(156,124,84,0.25)] flex items-end justify-center pb-3">
                {/* Mannequin Silhouette */}
                <div className="relative flex flex-col items-center">
                  <div className="w-3.5 h-3.5 rounded-full bg-[#a88d6b] shadow-sm" />
                  <div className="w-8 sm:w-11 h-20 sm:h-28 bg-gradient-to-b from-[#a88d6b] via-[#947855] to-[#785e3e] rounded-t-lg shadow-md flex items-center justify-center">
                    <div className="w-4/5 h-0.5 bg-[#d4af37]/60" />
                  </div>
                </div>
              </div>

            </div>
          </motion.div>

          {/* Bottom Storefront Address Bar */}
          <div className="absolute bottom-4 sm:bottom-6 left-0 right-0 px-4 text-center z-30 pointer-events-none">
            <p className="text-[10px] sm:text-[11px] tracking-[0.25em] uppercase text-white/70 font-light drop-shadow">
              18/355, Sadbhavna Road • Near Maitri Park, Indira Nagar, Lucknow - 226016
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
