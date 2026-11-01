'use client';

import React, { useEffect, useState, useRef, useCallback } from 'react';

const INTRO_STORAGE_KEY = 'anurosh_intro_seen';
const INTRO_DURATION_SECONDS = 2.0;

export default function FirstVisitIntro() {
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const [isFading, setIsFading] = useState<boolean>(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const hasFinishedRef = useRef<boolean>(false);

  const finishIntro = useCallback(() => {
    if (hasFinishedRef.current) return;
    hasFinishedRef.current = true;

    // Start smooth fade transition
    setIsFading(true);
    document.body.style.overflow = '';

    // Unmount completely after transition completes
    setTimeout(() => {
      setIsMounted(false);
    }, 700);
  }, []);

  useEffect(() => {
    try {
      const hasSeen = localStorage.getItem(INTRO_STORAGE_KEY);
      const urlParams = new URLSearchParams(window.location.search);
      const forceReplay = urlParams.get('replay') === 'true' || urlParams.get('intro') === '1';

      // Only show on first visit (unless developer force replay query param is present)
      if (!hasSeen || forceReplay) {
        setIsMounted(true);
        localStorage.setItem(INTRO_STORAGE_KEY, 'true');
        document.body.style.overflow = 'hidden';

        // Maximum fallback safety timer: if autoplay fails or video stalls, smoothly transition
        const fallbackTimer = setTimeout(() => {
          finishIntro();
        }, 3200);

        return () => {
          clearTimeout(fallbackTimer);
          document.body.style.overflow = '';
        };
      }
    } catch {
      // In case localStorage is disabled or restricted
      setIsMounted(false);
    }
  }, [finishIntro]);

  if (!isMounted) return null;

  return (
    <aside
      aria-label="Cinematic Entrance Intro"
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-[#120e10] overflow-hidden select-none transition-all duration-700 ease-out ${
        isFading ? 'opacity-0 scale-105 pointer-events-none' : 'opacity-100 scale-100'
      }`}
    >
      {/* Background ambient glow matching the gold Awadhi tones */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(197,160,89,0.15)_0%,_rgba(18,14,16,0.95)_75%)] pointer-events-none" />

      {/* Main cinematic video container */}
      <div className="relative w-full h-full flex items-center justify-center">
        <video
          ref={videoRef}
          src="/anurosh-intro.mp4"
          poster="/anurosh-intro-poster.jpg"
          autoPlay
          muted
          playsInline
          preload="auto"
          aria-hidden="true"
          onTimeUpdate={(e) => {
            if (e.currentTarget.currentTime >= INTRO_DURATION_SECONDS) {
              finishIntro();
            }
          }}
          onEnded={finishIntro}
          onError={finishIntro}
          className="w-full h-full object-cover sm:object-contain max-h-screen"
        />

        {/* Subtle royal framing vignettes */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/40 pointer-events-none" />
      </div>

      {/* Top Bar Branding & Skip Action */}
      <div className="absolute top-0 left-0 right-0 p-5 sm:p-8 flex items-center justify-between z-10">
        <div className="flex flex-col">
          <span className="font-serif text-lg sm:text-xl font-bold tracking-[0.3em] text-white uppercase drop-shadow">
            Anurosh
          </span>
          <span className="text-[9px] sm:text-[10px] tracking-[0.35em] text-[#d4af37] uppercase font-medium drop-shadow">
            Lucknow
          </span>
        </div>

        <button
          onClick={finishIntro}
          type="button"
          aria-label="Skip cinematic intro"
          className="px-4 py-1.5 rounded-full border border-[#d4af37]/60 bg-black/40 backdrop-blur-md text-[#f5ebd7] hover:text-white hover:border-[#d4af37] hover:bg-[#d4af37]/20 transition-all text-xs uppercase tracking-widest font-semibold flex items-center gap-1.5 cursor-pointer shadow-lg active:scale-95"
        >
          <span>Skip</span>
          <span className="text-[#d4af37]">✕</span>
        </button>
      </div>

      {/* Bottom Hint */}
      <div className="absolute bottom-6 left-0 right-0 text-center pointer-events-none">
        <span className="text-[10px] sm:text-[11px] tracking-[0.3em] uppercase text-white/60 font-light drop-shadow">
          Entering Flagship Studio • Indira Nagar
        </span>
      </div>
    </aside>
  );
}
