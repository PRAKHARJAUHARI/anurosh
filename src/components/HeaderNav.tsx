'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

export default function HeaderNav() {
  const pathname = usePathname();
  const isHome = pathname === '/';
  const [isScrolled, setIsScrolled] = useState(false);
  const [isNavbarHovered, setIsNavbarHovered] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Bridal', href: '/collections/bridal' },
    { name: 'Ethnic', href: '/collections/ethnic' },
    { name: 'Collaboration', href: '/collaboration' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  // Header background style:
  // - On inner pages or when scrolled: clean light luxury background with dark text
  // - On homepage at top: transparent over the runway video
  // - When hovered at the top of homepage: enhanced translucent backdrop for high contrast
  const isLight = !isHome || isScrolled;

  return (
    <>
      <header
        onMouseEnter={() => setIsNavbarHovered(true)}
        onMouseLeave={() => setIsNavbarHovered(false)}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-400 group/navbar ${
          isLight
            ? 'bg-[#fdfbf8]/95 backdrop-blur-md border-b border-[#eee6db] py-3.5 text-[#241e1b] shadow-sm'
            : isNavbarHovered
            ? 'bg-black/60 backdrop-blur-md py-4 sm:py-5 text-white border-b border-white/15'
            : 'bg-gradient-to-b from-black/80 via-black/35 to-transparent py-4 sm:py-5 text-white'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
          
          {/* Top Row: Mobile Hamburger & Centered Brand (Logo on Left, Anurosh Title on Right) */}
          <div className="w-full flex items-center justify-between sm:justify-center relative">
            
            {/* Mobile Hamburger Trigger */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              type="button"
              className={`lg:hidden p-2 transition-colors focus:outline-none ${
                isLight ? 'text-[#241e1b] hover:text-[#9b7c53]' : 'text-white hover:text-white/80'
              }`}
              aria-label="Open Navigation Menu"
            >
              <Menu className="w-5 h-5" />
            </button>

            {/* BRAND LOCKUP: Logo on Left, Anurosh Title on Right */}
            <Link
              href="/"
              className="group flex items-center justify-center gap-3 sm:gap-4 focus:outline-none"
            >
              {/* Logo on Left */}
              <img
                src="/anurosh-logo.webp"
                alt="Anurosh Logo"
                className="h-11 sm:h-13 md:h-15 w-auto object-contain transition-transform duration-500 group-hover:scale-105 drop-shadow-md"
              />

              {/* Anurosh Name (Title) on Right */}
              <div className="flex flex-col items-start justify-center text-left">
                <span
                  className={`font-serif text-2xl sm:text-3xl tracking-[0.32em] uppercase font-light leading-none block transition-colors ${
                    isLight
                      ? 'text-[#241e1b] group-hover:text-[#9b7c53]'
                      : 'text-white group-hover:text-white/90 drop-shadow-sm'
                  }`}
                >
                  Anurosh
                </span>
                <span
                  className={`text-[8px] sm:text-[9px] uppercase tracking-[0.45em] font-light block mt-1 transition-colors ${
                    isLight ? 'text-[#9b7c53]' : 'text-white/75'
                  }`}
                >
                  Beyond Fashion
                </span>
              </div>
            </Link>

            {/* Empty spacer for mobile layout balance */}
            <div className="lg:hidden w-8" />
          </div>

          {/* Bottom Row: Centered Navigation Links */}
          {/* On cursor placement on navbar: all menu option headings become 100% opaque and bold font */}
          <nav className="hidden lg:flex items-center justify-center space-x-8 mt-2.5 text-[11px] uppercase tracking-[0.28em] transition-all duration-300">
            {navLinks.map((item, index) => {
              const isActive = pathname === item.href;
              return (
                <React.Fragment key={item.name}>
                  <Link
                    href={item.href}
                    className={`py-1 transition-all duration-200 relative ${
                      isNavbarHovered
                        ? // ON CURSOR PLACEMENT ON NAVBAR: Fully opaque and bold font
                          isLight
                          ? 'opacity-100 font-bold text-[#140f0c] hover:text-[#9b7c53]'
                          : 'opacity-100 font-bold text-white drop-shadow-md hover:text-[#f4dfb8]'
                        : // DEFAULT STATE (no cursor on navbar)
                          isLight
                          ? isActive
                            ? 'opacity-100 font-semibold text-[#9b7c53] border-b border-[#9b7c53]'
                            : 'opacity-75 font-normal text-[#4a3f38] hover:opacity-100'
                          : isActive
                          ? 'opacity-100 font-semibold text-white border-b border-white'
                          : 'opacity-80 font-normal text-white hover:opacity-100'
                    }`}
                  >
                    <span>{item.name}</span>
                    
                    {/* Active indicator bar */}
                    {isActive && (
                      <span
                        className={`absolute bottom-0 left-0 right-0 h-[1.5px] ${
                          isLight ? 'bg-[#9b7c53]' : 'bg-white'
                        }`}
                      />
                    )}
                  </Link>

                  {/* Dot separator between items */}
                  {index < navLinks.length - 1 && (
                    <span
                      className={`text-[8px] select-none transition-opacity duration-300 ${
                        isNavbarHovered
                          ? isLight
                            ? 'opacity-80 text-[#9b7c53]'
                            : 'opacity-80 text-white'
                          : isLight
                          ? 'opacity-40 text-[#c2b4a5]'
                          : 'opacity-40 text-white/50'
                      }`}
                    >
                      •
                    </span>
                  )}
                </React.Fragment>
              );
            })}
          </nav>

        </div>
      </header>

      {/* Mobile Slide-out Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-[#fdfbf8] flex flex-col justify-between p-6 sm:p-10 text-[#241e1b] animate-in fade-in duration-300">
          <div>
            <div className="flex items-center justify-between border-b border-[#eee6db] pb-4">
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-3"
              >
                <img
                  src="/anurosh-logo.webp"
                  alt="Anurosh"
                  className="h-10 w-auto object-contain"
                />
                <div className="flex flex-col text-left">
                  <span className="font-serif text-xl tracking-[0.3em] text-[#241e1b] uppercase">
                    Anurosh
                  </span>
                  <span className="text-[7px] uppercase tracking-[0.4em] text-[#9b7c53]">
                    Beyond Fashion
                  </span>
                </div>
              </Link>
              <button
                onClick={() => setMobileMenuOpen(false)}
                type="button"
                className="p-2 text-[#241e1b] hover:text-[#9b7c53] transition-colors"
                aria-label="Close Navigation Menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="py-8 space-y-6">
              {navLinks.map((item, idx) => (
                <div key={item.name} className="border-b border-[#f3ede4] pb-4">
                  <Link
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block font-serif text-2xl font-bold tracking-[0.2em] uppercase text-[#241e1b] hover:text-[#9b7c53] transition-colors"
                  >
                    <span className="text-[10px] font-mono text-[#9b7c53] mr-3 font-normal">
                      0{idx + 1}
                    </span>
                    {item.name}
                  </Link>
                </div>
              ))}
            </div>
          </div>

          <div className="border-t border-[#eee6db] pt-6 space-y-3 text-xs font-light text-[#7a6b61]">
            <a
              href="https://www.instagram.com/anurosh.in"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-full text-center py-3 border border-[#9b7c53] text-[#9b7c53] hover:bg-[#9b7c53] hover:text-white transition-all uppercase tracking-[0.25em] text-xs font-semibold"
            >
              Follow @anurosh.in on Instagram
            </a>
            <p className="tracking-wide text-center pt-2">
              Lucknow Flagship Atelier • 2/23, Vineet Khand, Gomti Nagar
            </p>
          </div>
        </div>
      )}
    </>
  );
}