'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, MapPin, Phone } from 'lucide-react';

export default function HeaderNav() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Bridal', href: '/collections/bridal' },
    { name: 'Ethnic', href: '/collections/ethnic' },
    { name: 'Collaboration', href: '/collaboration' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <>
      {/* Top Subtle Luxury Strip */}
      <div className="bg-[#f7f3ed] text-[#8c7355] text-[10px] tracking-[0.3em] uppercase py-2 px-4 text-center border-b border-[#eee6db] select-none">
        <span>Flagship Atelier • Sadbhavna Road, Indira Nagar, Lucknow</span>
      </div>

      {/* Main Luxury Header — Light, Elegant, & Premium */}
      <header className="sticky top-0 z-40 bg-[#fdfbf8]/95 backdrop-blur-md border-b border-[#eee6db] py-4 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          
          {/* Left Navigation (Home, Bridal, Ethnic) */}
          <nav className="hidden lg:flex items-center space-x-8 text-[11px] uppercase tracking-[0.28em] font-light text-[#5c4f46]">
            {navLinks.slice(0, 3).map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`transition-colors py-1 hover:text-[#9b7c53] ${
                    isActive ? 'text-[#9b7c53] font-normal border-b border-[#9b7c53]' : ''
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
            className="lg:hidden p-2 text-[#241e1b] hover:text-[#9b7c53] transition-colors focus:outline-none"
            aria-label="Open Navigation Menu"
          >
            <Menu className="w-5 h-5" />
          </button>

          {/* Center Brand Identity */}
          <div className="text-center">
            <Link href="/" className="inline-block group focus:outline-none">
              {/* Royal Crest Monogram Icon */}
              <div className="flex justify-center mb-1">
                <svg
                  className="w-4 h-4 text-[#9b7c53] transition-transform duration-500 group-hover:scale-110"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.2"
                >
                  <path d="M12 2L15 8H9L12 2Z" fill="currentColor" fillOpacity="0.2" />
                  <path d="M12 22V12M12 12L7 16M12 12L17 16" />
                  <circle cx="12" cy="7" r="1.5" fill="currentColor" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              </div>

              <span className="font-serif text-2xl sm:text-3xl tracking-[0.32em] text-[#241e1b] uppercase font-light leading-none group-hover:text-[#9b7c53] transition-colors block">
                Anurosh
              </span>
              <span className="text-[9px] uppercase tracking-[0.45em] text-[#9b7c53] font-light block mt-1">
                Lucknow
              </span>
            </Link>
          </div>

          {/* Right Navigation (Collaboration, About, Contact) */}
          <nav className="hidden lg:flex items-center space-x-8 text-[11px] uppercase tracking-[0.28em] font-light text-[#5c4f46]">
            {navLinks.slice(3).map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`transition-colors py-1 hover:text-[#9b7c53] ${
                    isActive ? 'text-[#9b7c53] font-normal border-b border-[#9b7c53]' : ''
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* Mobile Right Spacer */}
          <div className="lg:hidden w-8" />
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

          <div className="border-t border-[#eee6db] pt-6 space-y-2 text-xs font-light text-[#7a6b61]">
            <p className="tracking-wide">
              <strong className="text-[#241e1b] font-normal block mb-1">Lucknow Flagship Studio:</strong>
              18/355, Sadbhavna Road, Near Maitri Park, Indira Nagar, Lucknow - 226016
            </p>
            <div className="flex items-center gap-4 pt-1 text-[11px] uppercase tracking-widest text-[#9b7c53]">
              <a href="tel:+919876543210" className="hover:underline flex items-center gap-1">
                <Phone className="w-3 h-3" />
                <span>+91 98765 43210</span>
              </a>
              <span>•</span>
              <Link href="/contact" onClick={() => setMobileMenuOpen(false)} className="hover:underline flex items-center gap-1">
                <MapPin className="w-3 h-3" />
                <span>Locate Studio</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}