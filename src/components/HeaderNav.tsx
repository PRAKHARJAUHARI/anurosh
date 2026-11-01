'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

export default function HeaderNav() {
  const pathname = usePathname();
  const isHome = pathname === '/';
  const [isScrolled, setIsScrolled] = useState(false);
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

  // On homepage before scrolling, transparent overlay over video with crisp white text
  // When scrolled or on inner pages, clean light background with dark text
  const isLight = !isHome || isScrolled;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isLight
            ? 'bg-[#fdfbf8]/95 backdrop-blur-md border-b border-[#eee6db] py-4 text-[#241e1b] shadow-sm'
            : 'bg-gradient-to-b from-black/75 via-black/35 to-transparent py-5 sm:py-6 text-white'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
          
          {/* Top Row: Hamburger on Mobile & Centered Logo */}
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

            {/* Sabyasachi-Style Centered Brand Name */}
            <Link
              href="/"
              className="text-center group focus:outline-none"
            >
              <span
                className={`font-serif text-2xl sm:text-3xl tracking-[0.35em] uppercase font-light leading-none block transition-colors ${
                  isLight
                    ? 'text-[#241e1b] group-hover:text-[#9b7c53]'
                    : 'text-white group-hover:text-white/90 drop-shadow-sm'
                }`}
              >
                Anurosh
              </span>
            </Link>

            {/* Empty spacer for mobile balance */}
            <div className="lg:hidden w-8" />
          </div>

          {/* Bottom Row: Centered Navigation Links with subtle dot separators */}
          <nav className="hidden lg:flex items-center justify-center space-x-7 mt-3 text-[11px] uppercase tracking-[0.28em] font-light">
            {navLinks.map((item, index) => {
              const isActive = pathname === item.href;
              return (
                <React.Fragment key={item.name}>
                  <Link
                    href={item.href}
                    className={`py-1 transition-colors relative hover:opacity-100 ${
                      isLight
                        ? isActive
                          ? 'text-[#9b7c53] font-normal border-b border-[#9b7c53]'
                          : 'text-[#4a3f38] hover:text-[#9b7c53]'
                        : isActive
                        ? 'text-white font-normal border-b border-white'
                        : 'text-white/85 hover:text-white'
                    }`}
                  >
                    {item.name}
                  </Link>

                  {/* Dot separator between items */}
                  {index < navLinks.length - 1 && (
                    <span
                      className={`text-[8px] select-none ${
                        isLight ? 'text-[#c2b4a5]' : 'text-white/40'
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
            <div className="flex items-center justify-between border-b border-[#eee6db] pb-6">
              <span className="font-serif text-2xl tracking-[0.3em] text-[#241e1b] uppercase">
                Anurosh
              </span>
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
                    className="block font-serif text-2xl font-light tracking-[0.2em] uppercase text-[#241e1b] hover:text-[#9b7c53] transition-colors"
                  >
                    <span className="text-[10px] font-mono text-[#9b7c53] mr-3">
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
              className="inline-block w-full text-center py-3 border border-[#9b7c53] text-[#9b7c53] hover:bg-[#9b7c53] hover:text-white transition-all uppercase tracking-[0.25em] text-xs"
            >
              Follow @anurosh.in on Instagram
            </a>
            <p className="tracking-wide text-center pt-2">
              Lucknow Flagship Atelier • Sadbhavna Road, Indira Nagar
            </p>
          </div>
        </div>
      )}
    </>
  );
}