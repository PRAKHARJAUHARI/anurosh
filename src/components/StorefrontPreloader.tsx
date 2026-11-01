'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface StorefrontPreloaderProps {
  onComplete?: () => void;
}

export default function StorefrontPreloader({ onComplete }: StorefrontPreloaderProps) {
  // Animation states
  const [isZooming, setIsZooming] = useState<boolean>(false);
  const [showEnterButton, setShowEnterButton] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isDissolving, setIsDissolving] = useState<boolean>(false);
  const [isDismissed, setIsDismissed] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);

    // 1. First display full architectural image for 1.1s so full building & golden signage are appreciated
    const zoomStartTimer = setTimeout(() => {
      setIsZooming(true);
    }, 1100);

    // 2. Smoothly reveal the light-font minimalist "Enter Store" button as camera settles at 3.3s
    const buttonTimer = setTimeout(() => {
      setShowEnterButton(true);
    }, 3300);

    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(zoomStartTimer);
      clearTimeout(buttonTimer);
    };
  }, []);

  // Trigger 3D door opening animation and transition to the store
  const handleOpenDoors = () => {
    if (isOpen || isDissolving) return;
    setIsOpen(true);

    // 1.2-second 3D door swing, then smooth dissolve into homepage
    setTimeout(() => {
      setIsDissolving(true);
      setTimeout(() => {
        setIsDismissed(true);
        if (onComplete) {
          onComplete();
        }
      }, 700);
    }, 1200);
  };

  const handleSkip = () => {
    if (isDissolving) return;
    setIsDissolving(true);
    setTimeout(() => {
      setIsDismissed(true);
      if (onComplete) {
        onComplete();
      }
    }, 400);
  };

  if (isDismissed) return null;

  return (
    <AnimatePresence>
      <motion.div
        key="anurosh-storefront-preloader"
        initial={{ opacity: 1 }}
        animate={{ opacity: isDissolving ? 0 : 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-0 z-[150] w-screen h-screen overflow-hidden select-none flex items-center justify-center bg-gradient-to-b from-[#b8d2ea] via-[#dfeaf3] to-[#ebe5dc]"
      >
        {/* Soft atmospheric ambient light matching the sunny facade environment */}
        <div className="absolute inset-0 bg-radial from-white/40 via-transparent to-[#000000]/10 pointer-events-none" />

        {/* Discreet Minimalist Top-Right Skip Option */}
        <div className="absolute top-6 right-6 sm:top-8 sm:right-8 z-50 pointer-events-auto">
          <button
            onClick={handleSkip}
            type="button"
            aria-label="Skip to store"
            className="text-[11px] uppercase tracking-[0.3em] font-light text-[#4a3f35]/60 hover:text-[#241e1b] transition-colors py-1.5 px-3 rounded-full bg-white/40 backdrop-blur-sm border border-white/60 cursor-pointer"
          >
            Skip →
          </button>
        </div>

        {/* Scaled Building Stage: Responsive, centered, and preserves architectural proportions */}
        <div className="relative w-full h-full flex items-center justify-center overflow-hidden p-3 sm:p-6">
          <motion.div
            initial={{ scale: 1 }}
            animate={{
              scale: isOpen
                ? (isMobile ? 3.3 : 2.85)
                : isZooming
                ? (isMobile ? 2.05 : 1.75)
                : 1,
            }}
            transition={{
              scale: isOpen
                ? { duration: 1.25, ease: [0.22, 1, 0.36, 1] }
                : isZooming
                ? { duration: 3.2, ease: [0.25, 0.1, 0.25, 1.0] }
                : { duration: 0 },
            }}
            style={{
              transformOrigin: '50% 74.2%', // Exact mathematical center of the central double doors
              transformStyle: 'preserve-3d',
            }}
            className="relative w-auto h-auto max-w-[96vw] sm:max-w-[92vw] max-h-[86vh] aspect-[1024/861] flex items-center justify-center shadow-[0_30px_70px_rgba(30,20,10,0.18)] rounded-sm overflow-hidden"
          >
            {/* 1. ARCHITECTURAL STOREFRONT FACADE IMAGE (Crisp, high-DPI scaling) */}
            <img
              src="/anurosh-facade.jpg"
              srcSet="/anurosh-facade.jpg 1x, /anurosh-facade-retina.jpg 2x"
              alt="Anurosh Boutique Facade"
              className="w-full h-full object-cover select-none pointer-events-none"
            />

            {/* 2. CENTRAL 3D ENTRANCE DOORWAY (Overlay aligned precisely on the entrance) */}
            <div
              onClick={handleOpenDoors}
              className="absolute cursor-pointer z-20 group"
              style={{
                left: '42.2%',
                top: '66.4%',
                width: '15.6%',
                height: '15.6%',
                perspective: '1200px',
              }}
              title="Click to Open Doors"
            >
              {/* INTERIOR BOUTIQUE GLOW (Revealed when doors swing open) */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: isOpen ? 1 : 0 }}
                transition={{ duration: 0.6 }}
                className="absolute inset-0 z-0 overflow-hidden pointer-events-none flex items-center justify-center"
              >
                {/* Warm golden showroom illumination */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#fdf7ed] via-[#faeed6] to-[#f4dfb8] shadow-inner" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_60%,rgba(255,255,255,0.95)_0%,rgba(240,205,145,0.6)_60%,transparent_100%)]" />

                {/* Warm Light Flood Beam projecting onto the steps */}
                <motion.div
                  initial={{ opacity: 0, scaleY: 0 }}
                  animate={{ opacity: isOpen ? 0.85 : 0, scaleY: isOpen ? 1 : 0 }}
                  transition={{ duration: 1.1, ease: 'easeOut' }}
                  className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[160%] h-14 bg-gradient-to-b from-[#faeed6]/90 to-transparent blur-md origin-top pointer-events-none"
                />
              </motion.div>

              {/* LEFT 3D GLASS DOOR (Swings inward to the left) */}
              <motion.div
                className="absolute top-0 left-0 w-1/2 h-full z-10 origin-left border-y border-l border-r-[0.5px] border-[#9c7c54] bg-[#eae2d5]/15 backdrop-blur-[0.5px] flex items-center justify-end shadow-sm"
                animate={{ rotateY: isOpen ? -105 : 0 }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  transformStyle: 'preserve-3d',
                  backfaceVisibility: 'hidden',
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.25) 0%, rgba(200,175,145,0.12) 100%)',
                }}
              >
                {/* Bronze Metallic Handle */}
                <div className="w-[2px] sm:w-[2.5px] h-[36%] bg-gradient-to-b from-[#8c6d3d] via-[#e5c158] to-[#8c6d3d] mr-1 rounded-full shadow-[0_1px_3px_rgba(0,0,0,0.4)]" />
              </motion.div>

              {/* RIGHT 3D GLASS DOOR (Swings inward to the right) */}
              <motion.div
                className="absolute top-0 right-0 w-1/2 h-full z-10 origin-right border-y border-r border-l-[0.5px] border-[#9c7c54] bg-[#eae2d5]/15 backdrop-blur-[0.5px] flex items-center justify-start shadow-sm"
                animate={{ rotateY: isOpen ? 105 : 0 }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  transformStyle: 'preserve-3d',
                  backfaceVisibility: 'hidden',
                  background: 'linear-gradient(225deg, rgba(255,255,255,0.25) 0%, rgba(200,175,145,0.12) 100%)',
                }}
              >
                {/* Bronze Metallic Handle */}
                <div className="w-[2px] sm:w-[2.5px] h-[36%] bg-gradient-to-b from-[#8c6d3d] via-[#e5c158] to-[#8c6d3d] ml-1 rounded-full shadow-[0_1px_3px_rgba(0,0,0,0.4)]" />
              </motion.div>

              {/* Subtle hover prompt on the entrance doorway */}
              {!isOpen && isZooming && (
                <div className="absolute inset-0 z-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <span className="text-[8px] uppercase tracking-[0.25em] text-[#3d3126] font-light bg-white/85 px-2 py-0.5 rounded-full shadow-sm backdrop-blur-sm">
                    Open
                  </span>
                </div>
              )}
            </div>
          </motion.div>

          {/* 3. MINIMALIST, LIGHT-FONT "ENTER STORE" BUTTON (Appears cleanly as camera settles) */}
          <div className="absolute inset-x-0 bottom-8 sm:bottom-12 flex flex-col items-center justify-center z-40 pointer-events-auto px-4">
            <AnimatePresence>
              {showEnterButton && !isOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6, filter: 'blur(4px)' }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                >
                  <button
                    onClick={handleOpenDoors}
                    type="button"
                    className="group px-9 py-3 rounded-full border border-[#9c7c54]/50 bg-black/30 hover:bg-black/50 hover:border-[#e5c158]/80 text-[#faf7f2] font-light text-xs sm:text-[13px] tracking-[0.35em] uppercase backdrop-blur-md transition-all duration-500 cursor-pointer flex items-center gap-3 shadow-[0_10px_35px_rgba(0,0,0,0.3)] active:scale-95"
                  >
                    <span className="font-extralight tracking-[0.35em]">Enter Store</span>
                    <span className="text-[#e5c158]/80 group-hover:translate-x-1.5 transition-transform duration-300 font-light">
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