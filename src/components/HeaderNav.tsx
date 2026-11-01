'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, MapPin, Phone, Calendar, Sparkles } from 'lucide-react';

export default function HeaderNav() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOpen3DDoors = () => {
    window.dispatchEvent(new CustomEvent('play-anurosh-doors'));
    setMobileMenuOpen(false);
  };

  const navLeft = [
    { name: 'Bridal Couture', href: '/collections/bridal' },
    { name: 'Heritage Ethnic', href: '/collections/ethnic' },
    { name: 'The Atelier', href: '/about' },
  ];

  const navRight = [
    { name: 'Collaboration', href: '/collaboration' },
    { name: 'Flagship Studio', href: '/#flagship' },
    { name: 'Appointments', href: '/#appointment' },
  ];

  return (
    <>
      {/* 1. TOP MARQUEE STRIP (Sabyasachi-style minimal announcement) */}
      <div className="bg-[#0c0908] text-[#c5a880] text-[10px] tracking-[0.3em] uppercase py-2 px-4 text-center border-b border-[#2b221a]/60 select-none">
        <span>Flagship Atelier • Sadbhavna Road, Indira Nagar, Lucknow | Bespoke Appointments Available</span>
      </div>

      {/* 2. MAIN LUXURY STICKY HEADER */}
      <header
        className={`sticky top-0 z-40 transition-all duration-500 ${
          isScrolled
            ? 'bg-[#0c0908]/95 backdrop-blur-md border-b border-[#c5a880]/20 py-3 text-[#fbf7f0] shadow-[0_10px_30px_rgba(0,0,0,0.5)]'
            : 'bg-[#0c0908] border-b border-[#231b15] py-4 sm:py-5 text-[#fbf7f0]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          
          {/* Desktop Left Nav */}
          <nav className="hidden lg:flex items-center space-x-8 text-[11px] uppercase tracking-[0.28em] font-light text-[#ded4c5]">
            {navLeft.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`transition-colors py-1 relative hover:text-[#c5a880] ${
                    isActive ? 'text-[#c5a880] font-normal' : ''
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* Mobile Hamburger Trigger */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            type="button"
            className="lg:hidden p-2 text-[#c5a880] hover:text-white transition-colors focus:outline-none"
            aria-label="Open Navigation Menu"
          >
            <Menu className="w-5 h-5" />
          </button>

          {/* CENTER: Iconic Sabyasachi-style Brandmark */}
          <div className="text-center">
            <Link href="/" className="inline-block group focus:outline-none">
              {/* Royal Crest Monogram Icon */}
              <div className="flex justify-center mb-1">
                <svg
                  className="w-5 h-5 text-[#c5a880] transition-transform duration-500 group-hover:scale-110"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.2"
                >
                  <path d="M12 2L15 8H9L12 2Z" fill="currentColor" fillOpacity="0.3" />
                  <path d="M12 22V12M12 12L7 16M12 12L17 16" />
                  <circle cx="12" cy="7" r="1.5" fill="currentColor" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              </div>

              {/* Brand Typography */}
              <h1 className="font-serif text-2xl sm:text-3xl tracking-[0.32em] text-[#fbf7f0] uppercase font-light leading-none group-hover:text-[#c5a880] transition-colors">
                Anurosh
              </h1>
              <span className="text-[9px] uppercase tracking-[0.45em] text-[#c5a880]/90 font-light block mt-1.5">
                Haute Couture • Lucknow
              </span>
            </Link>
          </div>

          {/* Desktop Right Nav */}
          <nav className="hidden lg:flex items-center space-x-7 text-[11px] uppercase tracking-[0.28em] font-light text-[#ded4c5]">
            {navRight.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`transition-colors py-1 hover:text-[#c5a880] ${
                    isActive ? 'text-[#c5a880] font-normal' : ''
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}

            {/* 3D Boutique Facade Entrance Pill */}
            <button
              onClick={handleOpen3DDoors}
              type="button"
              className="px-3.5 py-1.5 rounded-full border border-[#c5a880]/50 text-[#c5a880] hover:bg-[#c5a880] hover:text-[#0c0908] transition-all duration-300 text-[10px] tracking-[0.22em] flex items-center gap-1.5 cursor-pointer"
              title="Experience 3D Interactive Facade Entrance"
            >
              <Sparkles className="w-3 h-3" />
              <span>3D Facade</span>
            </button>
          </nav>

          {/* Mobile Right Quick Action (3D Entrance) */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={handleOpen3DDoors}
              type="button"
              className="p-1.5 text-[#c5a880] hover:text-white transition-colors"
              title="3D Facade Entrance"
            >
              <Sparkles className="w-4 h-4" />
            </button>
          </div>
        </div>
      </header>

      {/* 3. MOBILE FULL-SCREEN SLIDE-OUT DRAWER */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-[#0c0908]/98 backdrop-blur-xl flex flex-col justify-between p-6 sm:p-10 text-[#fbf7f0] animate-in fade-in duration-300">
          <div>
            {/* Top Close Bar */}
            <div className="flex items-center justify-between border-b border-[#2b221a] pb-6">
              <span className="font-serif text-xl tracking-[0.3em] text-[#c5a880] uppercase">
                Anurosh
              </span>
              <button
                onClick={() => setMobileMenuOpen(false)}
                type="button"
                className="p-2 text-[#c5a880] hover:text-white transition-colors"
                aria-label="Close Navigation Menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Mobile Nav Links */}
            <div className="py-8 space-y-6">
              {[...navLeft, ...navRight].map((item, idx) => (
                <div key={item.name} className="border-b border-[#1f1712]/60 pb-3">
                  <Link
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block font-serif text-xl sm:text-2xl font-light tracking-[0.2em] uppercase text-[#f3ece0] hover:text-[#c5a880] transition-colors"
                  >
                    <span className="text-[10px] font-mono text-[#c5a880]/60 mr-3">
                      0{idx + 1}
                    </span>
                    {item.name}
                  </Link>
                </div>
              ))}

              <div className="pt-2">
                <button
                  onClick={handleOpen3DDoors}
                  type="button"
                  className="w-full py-3 border border-[#c5a880]/60 text-[#c5a880] hover:bg-[#c5a880] hover:text-[#0c0908] transition-all text-xs uppercase tracking-[0.3em] flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Experience 3D Storefront Entrance</span>
                </button>
              </div>
            </div>
          </div>

          {/* Drawer Footer with Address */}
          <div className="border-t border-[#2b221a] pt-6 space-y-3 text-xs font-light text-[#9e8f82]">
            <p className="tracking-wide">
              <strong className="text-[#c5a880] font-normal block mb-1">Lucknow Flagship Studio:</strong>
              18/355, Sadbhavna Road, Near Maitri Park, Indira Nagar, Lucknow - 226016
            </p>
            <div className="flex items-center gap-4 pt-1">
              <a
                href="tel:+919876543210"
                className="text-[#c5a880] hover:underline tracking-widest text-[11px] uppercase flex items-center gap-1.5"
              >
                <Phone className="w-3 h-3" />
                <span>Call Concierge</span>
              </a>
              <span className="text-[#4a3f35]">•</span>
              <a
                href="https://maps.google.com/?q=18/355,+Sadbhavna+Road,+Near+Maitri+Park,+Indira+Nagar,+Lucknow"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#c5a880] hover:underline tracking-widest text-[11px] uppercase flex items-center gap-1.5"
              >
                <MapPin className="w-3 h-3" />
                <span>Directions</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}