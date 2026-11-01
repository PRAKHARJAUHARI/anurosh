'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface StorefrontPreloaderProps {
  onComplete?: () => void;
}

export default function StorefrontPreloader({ onComplete }: StorefrontPreloaderProps) {
  const [isZooming, setIsZooming] = useState<boolean>(false);
  const [showEnterButton, setShowEnterButton] = useState<boolean>(false);
  const [isDissolving, setIsDissolving] = useState<boolean>(false);
  const [isDismissed, setIsDismissed] = useState<boolean>(false);

  useEffect(() => {
    // 1. First, display the FULL image cleanly for 1.1s so the entire building is appreciated
    const zoomStartTimer = setTimeout(() => {
      setIsZooming(true);
    }, 1100);

    // 2. Smoothly reveal the minimalist "Enter Store" button at 3.5s as camera approaches doors
    const buttonTimer = setTimeout(() => {
      setShowEnterButton(true);
    }, 3500);

    return () => {
      clearTimeout(zoomStartTimer);
      clearTimeout(buttonTimer);
    };
  }, []);

  const handleEnterStore = () => {
    if (isDissolving) return;
    setIsDissolving(true);

    // Silky, ethereal dissolve into the website (900ms)
    setTimeout(() => {
      setIsDismissed(true);
      if (onComplete) {
        onComplete();
      }
    }, 900);
  };

  if (isDismissed) return null;

  return (
    <AnimatePresence>
      <motion.div
        key="anurosh-minimal-preloader"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, filter: 'blur(10px)' }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-0 z-[150] w-screen h-screen overflow-hidden bg-[#0c0809] select-none flex items-center justify-center"
      >
        {/* Soft atmospheric ambient backlight (blends seamlessly with the image edges) */}
        <div
          className="absolute inset-0 bg-cover bg-center blur-3xl opacity-30 scale-125 pointer-events-none"
          style={{ backgroundImage: "url('/anurosh-facade.png')" }}
        />

        {/* Discreet Minimalist Top-Right Skip Option */}
        <div className="absolute top-6 right-6 sm:top-8 sm:right-8 z-30 pointer-events-auto">
          <button
            onClick={handleEnterStore}
            type="button"
            aria-label="Skip to store"
            className="text-[11px] uppercase tracking-[0.3em] font-light text-white/50 hover:text-white/90 transition-colors py-1 px-2 cursor-pointer"
          >
            Skip →
          </button>
        </div>

        {/* Main Stage: Starts with 100% FULL image visible, then slowly glides into the entrance doors */}
        <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
          <motion.div
            initial={{ scale: 1 }}
            animate={{
              scale: isDissolving ? 1.85 : isZooming ? 1.6 : 1,
              opacity: isDissolving ? 0.15 : 1,
            }}
            transition={{
              scale: isDissolving
                ? { duration: 0.9, ease: [0.22, 1, 0.36, 1] }
                : isZooming
                ? { duration: 3.2, ease: [0.25, 0.1, 0.25, 1] }
                : { duration: 0 },
              opacity: isDissolving ? { duration: 0.85 } : { duration: 0 },
            }}
            style={{
              transformOrigin: '50% 74%', // Exact focal point of the central entrance doors
              transform: 'translateZ(0)',
              imageRendering: '-webkit-optimize-contrast',
            }}
            className="w-full h-full flex items-center justify-center relative"
          >
            {/* The Full Architectural Facade Image (object-contain ensures 100% of building is seen first) */}
            <img
              src="/anurosh-facade.png"
              alt="Anurosh Boutique Entrance"
              className="w-full h-full object-contain sm:object-cover max-h-screen max-w-screen"
            />
          </motion.div>

          {/* Minimalist Vignette to naturally frame the cinema scene */}
          <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,transparent_55%,rgba(12,8,9,0.75)_100%)] z-10" />
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-[#0c0809]/80 via-transparent to-[#0c0809]/60 z-10" />

          {/* Minimalist, Light-Font "Enter Store" Button (Appears as camera settles near the doors) */}
          <div className="absolute inset-x-0 bottom-12 sm:bottom-16 flex flex-col items-center justify-center z-20 pointer-events-auto px-4">
            <AnimatePresence>
              {showEnterButton && (
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                >
                  <button
                    onClick={handleEnterStore}
                    type="button"
                    className="group px-8 py-3 rounded-full border border-white/35 bg-black/35 hover:bg-black/55 hover:border-white/70 text-white font-light text-xs sm:text-[13px] tracking-[0.35em] uppercase backdrop-blur-md transition-all duration-500 cursor-pointer flex items-center gap-3 shadow-[0_8px_30px_rgba(0,0,0,0.5)] active:scale-95"
                  >
                    <span>Enter Store</span>
                    <span className="text-white/60 group-hover:translate-x-1 transition-transform duration-300 font-light">
                      →
                    </span>
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
