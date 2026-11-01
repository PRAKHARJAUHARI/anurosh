'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Sparkles, MapPin } from 'lucide-react';

interface StorefrontPreloaderProps {
  onComplete?: () => void;
}

export default function StorefrontPreloader({ onComplete }: StorefrontPreloaderProps) {
  const [showEnterButton, setShowEnterButton] = useState<boolean>(false);
  const [isEntering, setIsEntering] = useState<boolean>(false);
  const [isDismissed, setIsDismissed] = useState<boolean>(false);

  // 4 to 4.5 seconds full zoom transition
  useEffect(() => {
    // Show "Enter Store" button at 3.6s as the camera reaches the boutique doors
    const buttonTimer = setTimeout(() => {
      setShowEnterButton(true);
    }, 3600);

    return () => clearTimeout(buttonTimer);
  }, []);

  const handleEnterStore = () => {
    if (isEntering) return;
    setIsEntering(true);

    // Final smooth camera push through doors & dissolve into website (800ms)
    setTimeout(() => {
      setIsDismissed(true);
      if (onComplete) {
        onComplete();
      }
    }, 850);
  };

  if (isDismissed) return null;

  return (
    <AnimatePresence>
      <motion.div
        key="anurosh-storefront-preloader"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, filter: 'blur(16px)', scale: 1.08 }}
        transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-0 z-[150] w-screen h-screen overflow-hidden bg-[#0a0607] select-none"
      >
        {/* Full-Screen Edge-to-Edge Animated Facade Image */}
        <div className="relative w-full h-full overflow-hidden flex items-center justify-center">
          
          {/* Ambient Lighting Halo Behind Image */}
          <div
            className="absolute inset-0 bg-cover bg-center blur-3xl opacity-40 scale-125 pointer-events-none"
            style={{ backgroundImage: "url('/anurosh-facade.png')" }}
          />

          {/* Main Full-Screen Crisp Image with Automatic Slow Zoom into the Doors (4.2 seconds) */}
          <motion.div
            initial={{ scale: 1 }}
            animate={{
              scale: isEntering ? 1.75 : 1.45,
              opacity: isEntering ? 0.3 : 1,
            }}
            transition={{
              scale: isEntering 
                ? { duration: 0.85, ease: [0.22, 1, 0.36, 1] } 
                : { duration: 4.2, ease: [0.25, 0.1, 0.25, 1] },
              opacity: isEntering ? { duration: 0.85 } : { duration: 0 },
            }}
            style={{
              transformOrigin: '50% 74%', // Locks zoom focal point straight into central double entrance doors
              transform: 'translateZ(0)',
              imageRendering: '-webkit-optimize-contrast',
            }}
            className="w-full h-full relative"
          >
            <img
              src="/anurosh-facade.png"
              alt="Anurosh Haute Couture Boutique Entrance - Lucknow"
              className="w-full h-full object-cover object-center sm:object-[center_60%] max-w-none"
              style={{
                filter: 'contrast(103%) brightness(101%)',
              }}
            />

            {/* Subtle Light Ray Shimmer across the 3D Gold Letters */}
            <motion.div
              initial={{ x: '-120%', opacity: 0 }}
              animate={{ x: '180%', opacity: [0, 0.8, 0] }}
              transition={{ delay: 0.8, duration: 2.5, ease: 'easeInOut' }}
              className="absolute inset-0 w-2/3 bg-gradient-to-r from-transparent via-white/25 to-transparent skew-x-[-22deg] pointer-events-none"
            />

            {/* Warm Interior Doorway Glow Pulse */}
            <div className="absolute inset-x-[34%] bottom-[8%] top-[55%] bg-[radial-gradient(ellipse_at_center,_rgba(255,228,175,0.5)_0%,_transparent_75%)] pointer-events-none animate-pulse" />
          </motion.div>

          {/* Cinematic Vignette Overlay to enhance high-fashion depth */}
          <div className="absolute inset-0 z-10 pointer-events-none bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(10,6,8,0.75)_100%)]" />
          <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-t from-[#0a0607]/90 via-transparent to-[#0a0607]/80" />

          {/* Top Floating Luxury Brand Watermark & Skip */}
          <div className="absolute top-0 left-0 right-0 p-5 sm:p-8 flex items-center justify-between z-20 pointer-events-auto">
            <div className="flex flex-col">
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-[0.35em] text-white uppercase drop-shadow-[0_2px_12px_rgba(0,0,0,0.85)]">
                Anurosh
              </span>
              <span className="text-[9px] sm:text-[10px] tracking-[0.35em] text-[#d4af37] uppercase font-light drop-shadow">
                Flagship Studio • Indira Nagar, Lucknow
              </span>
            </div>

            <button
              onClick={handleEnterStore}
              type="button"
              className="px-4 py-1.5 rounded-full border border-[#d4af37]/60 bg-black/40 backdrop-blur-md text-[#f5ebd7] hover:text-white hover:border-[#d4af37] hover:bg-[#d4af37]/20 transition-all text-xs uppercase tracking-widest font-semibold flex items-center gap-1.5 cursor-pointer shadow-lg active:scale-95"
            >
              <span>Skip</span>
              <span className="text-[#d4af37]">✕</span>
            </button>
          </div>

          {/* Central / Bottom "Enter Store" Button (Smoothly appears as camera pushes into doors) */}
          <div className="absolute inset-x-0 bottom-16 sm:bottom-20 flex flex-col items-center justify-center z-20 pointer-events-auto px-4">
            <AnimatePresence>
              {showEnterButton && (
                <motion.div
                  initial={{ opacity: 0, y: 25, scale: 0.92 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="flex flex-col items-center gap-3 text-center"
                >
                  <button
                    onClick={handleEnterStore}
                    type="button"
                    className="group relative px-8 sm:px-10 py-3.5 sm:py-4 rounded-full bg-gradient-to-r from-[#d4af37] via-[#f7e8b6] to-[#c5a059] text-[#1c080d] font-serif font-bold text-sm sm:text-base tracking-[0.22em] uppercase shadow-[0_10px_35px_rgba(212,175,55,0.45)] hover:shadow-[0_15px_45px_rgba(212,175,55,0.65)] hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-3 cursor-pointer"
                  >
                    <span>Enter Store</span>
                    <ArrowRight className="w-4 h-4 text-[#1c080d] group-hover:translate-x-1 transition-transform duration-300" />
                    {/* Breathing Gold Outline Glow */}
                    <span className="absolute -inset-1 rounded-full border border-[#d4af37]/50 animate-ping pointer-events-none opacity-40" />
                  </button>

                  <p className="text-[10px] sm:text-[11px] tracking-[0.3em] uppercase text-white/75 drop-shadow font-light">
                    Click to enter the flagship boutique
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Bottom Permanent Location Tag */}
          <div className="absolute bottom-4 sm:bottom-6 left-0 right-0 text-center pointer-events-none z-20">
            <p className="text-[9px] sm:text-[10px] tracking-[0.3em] uppercase text-[#d4af37]/80 drop-shadow">
              18/355, Sadbhavna Road • Near Maitri Park, Indira Nagar, Lucknow
            </p>
          </div>

        </div>
      </motion.div>
    </AnimatePresence>
  );
}
