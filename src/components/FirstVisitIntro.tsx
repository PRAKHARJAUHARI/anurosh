'use client';

import React, { useEffect, useState, useRef, useCallback } from 'react';
import { Volume2, VolumeX, Sparkles, X } from 'lucide-react';

const INTRO_STORAGE_KEY = 'anurosh_intro_seen';
const INTRO_DURATION_SECONDS = 2.5;

export default function FirstVisitIntro() {
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const [isFading, setIsFading] = useState<boolean>(false);
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const [progress, setProgress] = useState<number>(0);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const hasFinishedRef = useRef<boolean>(false);

  const finishIntro = useCallback(() => {
    if (hasFinishedRef.current) return;
    hasFinishedRef.current = true;

    // Start smooth fade & scale dissolve
    setIsFading(true);
    document.body.style.overflow = '';

    // Unmount completely after transition completes
    setTimeout(() => {
      setIsMounted(false);
      setIsFading(false);
      setProgress(0);
    }, 800);
  }, []);

  const startIntro = useCallback((withSound = false) => {
    hasFinishedRef.current = false;
    setIsFading(false);
    setIsMounted(true);
    setIsMuted(!withSound);
    setProgress(0);
    document.body.style.overflow = 'hidden';

    // Play video after state update
    setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.currentTime = 0;
        videoRef.current.muted = !withSound;
        videoRef.current.play().catch(() => {
          // If browser blocks unmuted audio, fallback to muted
          if (videoRef.current) {
            videoRef.current.muted = true;
            setIsMuted(true);
            videoRef.current.play().catch(() => finishIntro());
          }
        });
      }
    }, 50);
  }, [finishIntro]);

  // First-visit check on initial page load
  useEffect(() => {
    try {
      const hasSeen = localStorage.getItem(INTRO_STORAGE_KEY);
      const urlParams = new URLSearchParams(window.location.search);
      const forceReplay = urlParams.get('replay') === 'true' || urlParams.get('intro') === '1';

      if (!hasSeen || forceReplay) {
        localStorage.setItem(INTRO_STORAGE_KEY, 'true');
        startIntro(false);
      }
    } catch {
      setIsMounted(false);
    }
  }, [startIntro]);

  // Listen for manual trigger (e.g. user clicks the Logo)
  useEffect(() => {
    const handleManualPlay = () => {
      // User-initiated click allows sound
      startIntro(true);
    };

    window.addEventListener('play-anurosh-intro', handleManualPlay);
    return () => window.removeEventListener('play-anurosh-intro', handleManualPlay);
  }, [startIntro]);

  // Fallback safety timer if video fails to play
  useEffect(() => {
    if (!isMounted) return;

    const safetyTimeout = setTimeout(() => {
      if (!hasFinishedRef.current) {
        finishIntro();
      }
    }, (INTRO_DURATION_SECONDS + 1.2) * 1000);

    return () => clearTimeout(safetyTimeout);
  }, [isMounted, finishIntro]);

  const toggleSound = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      const nextMuted = !isMuted;
      videoRef.current.muted = nextMuted;
      setIsMuted(nextMuted);
    }
  };

  if (!isMounted) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Anurosh Store Entrance Opening Sequence"
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-[#0d090a] overflow-hidden select-none transition-all duration-800 ease-out ${
        isFading ? 'opacity-0 scale-105 pointer-events-none' : 'opacity-100 scale-100'
      }`}
    >
      {/* 1. Ambient Background Layer: Atmospheric blurred halo extending edge-to-edge */}
      <video
        src="/anurosh-intro.mp4"
        muted
        playsInline
        autoPlay
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover blur-3xl opacity-45 scale-125 pointer-events-none"
      />

      {/* 2. Radial Luxury Vignette & Grain Filter */}
      <div className="absolute inset-0 z-10 pointer-events-none bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(10,7,8,0.85)_100%)]" />
      <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-t from-[#0e090a] via-transparent to-[#0e090a]/90" />

      {/* 3. Main Center Stage Video */}
      <div className="relative z-20 w-full h-full max-w-[1920px] max-h-screen flex items-center justify-center p-0 sm:p-6 md:p-10">
        <div className="relative w-full h-full flex items-center justify-center overflow-hidden sm:border sm:border-[#c5a059]/30 sm:shadow-[0_0_80px_rgba(0,0,0,0.8)] sm:bg-black">
          <video
            ref={videoRef}
            src="/anurosh-intro.mp4"
            poster="/anurosh-intro-poster.jpg"
            autoPlay
            muted={isMuted}
            playsInline
            preload="auto"
            onTimeUpdate={(e) => {
              const current = e.currentTarget.currentTime;
              const duration = INTRO_DURATION_SECONDS;
              setProgress(Math.min(100, (current / duration) * 100));

              if (current >= INTRO_DURATION_SECONDS) {
                finishIntro();
              }
            }}
            onEnded={finishIntro}
            onError={finishIntro}
            className="w-full h-full object-cover sm:object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.9)]"
          />

          {/* Golden Corner Accents for Haute Couture Finish */}
          <div className="hidden sm:block absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-[#d4af37]/70 pointer-events-none" />
          <div className="hidden sm:block absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-[#d4af37]/70 pointer-events-none" />
          <div className="hidden sm:block absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-[#d4af37]/70 pointer-events-none" />
          <div className="hidden sm:block absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-[#d4af37]/70 pointer-events-none" />
        </div>
      </div>

      {/* 4. Top Cinematic Header Bar */}
      <header className="absolute top-0 left-0 right-0 p-5 sm:p-8 flex items-center justify-between z-30 pointer-events-auto">
        <div className="flex flex-col">
          <div className="flex items-center gap-2">
            <span className="font-serif text-2xl sm:text-3xl font-bold tracking-[0.35em] text-white uppercase drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
              Anurosh
            </span>
            <span className="inline-flex items-center gap-1 text-[9px] uppercase tracking-widest text-[#e6c875] bg-[#380e15]/80 border border-[#c5a059]/50 px-2 py-0.5 rounded-sm">
              <Sparkles className="w-2.5 h-2.5 text-[#e6c875]" />
              <span>Flagship</span>
            </span>
          </div>
          <span className="text-[10px] sm:text-[11px] tracking-[0.35em] text-[#d4af37] uppercase font-light drop-shadow">
            Couture Studio • Indira Nagar, Lucknow
          </span>
        </div>

        {/* Action Controls: Sound Toggle & Skip */}
        <div className="flex items-center gap-2.5">
          {/* Sound Toggle */}
          <button
            onClick={toggleSound}
            type="button"
            aria-label={isMuted ? 'Unmute Audio' : 'Mute Audio'}
            className="px-3.5 py-2 rounded-full border border-[#c5a059]/40 bg-black/60 backdrop-blur-md text-[#f5ebd7] hover:border-[#d4af37] hover:bg-[#380e15]/60 transition-all text-xs flex items-center gap-1.5 cursor-pointer shadow-lg active:scale-95"
            title={isMuted ? 'Turn on sound' : 'Mute sound'}
          >
            {isMuted ? (
              <>
                <VolumeX className="w-3.5 h-3.5 text-[#d4af37]" />
                <span className="text-[10px] tracking-wider uppercase font-medium hidden sm:inline">Muted</span>
              </>
            ) : (
              <>
                <Volume2 className="w-3.5 h-3.5 text-[#d4af37] animate-pulse" />
                <span className="text-[10px] tracking-wider uppercase font-medium hidden sm:inline">Sound On</span>
              </>
            )}
          </button>

          {/* Skip / Enter Boutique Button */}
          <button
            onClick={finishIntro}
            type="button"
            aria-label="Enter Boutique / Skip intro"
            className="px-4 py-2 rounded-full border border-[#d4af37] bg-[#380e15]/85 hover:bg-[#521722] backdrop-blur-md text-[#fbf6ec] hover:text-white transition-all text-xs uppercase tracking-[0.18em] font-semibold flex items-center gap-2 cursor-pointer shadow-xl active:scale-95 group"
          >
            <span>Enter Boutique</span>
            <X className="w-3.5 h-3.5 text-[#d4af37] group-hover:rotate-90 transition-transform duration-300" />
          </button>
        </div>
      </header>

      {/* 5. Bottom Cinematic Footer & Progress Indicator */}
      <footer className="absolute bottom-0 left-0 right-0 z-30 pointer-events-none pb-6 px-4">
        <div className="max-w-2xl mx-auto text-center space-y-2">
          <p className="text-[10px] sm:text-[11px] tracking-[0.3em] uppercase text-white/75 font-light drop-shadow">
            18/355, Sadbhavna Road • Near Maitri Park, Indira Nagar, Lucknow
          </p>

          {/* Thin Hairline Gold Progress Bar */}
          <div className="w-full max-w-md mx-auto h-[2px] bg-white/10 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-[#8e6d2b] via-[#e6c875] to-[#f4e5b8] transition-all duration-100 ease-linear shadow-[0_0_8px_#d4af37]"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </footer>
    </div>
  );
}
