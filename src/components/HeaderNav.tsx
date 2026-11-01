'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function HeaderNav() {
  const pathname = usePathname();

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Bridal', href: '/collections/bridal' },
    { name: 'Ethnic', href: '/collections/ethnic' },
    { name: 'Collaboration', href: '/collaboration' },
    { name: 'About', href: '/about' },
  ];

  const handleLogoClick = (e: React.MouseEvent) => {
    // Dispatch event to play the cinematic 3D opening sequence
    window.dispatchEvent(new CustomEvent('play-anurosh-intro'));
  };

  return (
    <header className="border-b border-[#e5d8c6] bg-white sticky top-0 z-30 shadow-[0_2px_15px_rgba(0,0,0,0.02)]">
      <div className="max-w-6xl mx-auto px-4 py-3.5 flex flex-col sm:flex-row items-center justify-between gap-3">
        {/* Logo with interactive entrance trigger */}
        <div className="flex items-center gap-3">
          <button
            onClick={handleLogoClick}
            type="button"
            className="text-center sm:text-left group cursor-pointer transition-transform duration-200 active:scale-95 focus:outline-none"
            title="Click to view the 3D Entrance Sequence"
          >
            <div className="flex items-baseline gap-2">
              <span className="font-serif text-2xl sm:text-3xl font-bold tracking-[0.25em] text-[#380e15] group-hover:text-[#8e2030] transition-colors uppercase">
                Anurosh
              </span>
              <span className="hidden sm:inline-flex items-center gap-1 text-[9px] uppercase tracking-widest text-[#a88238] border border-[#c5a059]/40 bg-[#fdfaf5] px-1.5 py-0.5 rounded-sm opacity-90 group-hover:bg-[#380e15] group-hover:text-white transition-all">
                ▶ Store Intro
              </span>
            </div>
            <span className="text-[10px] tracking-[0.28em] text-[#8e6d2b] uppercase font-medium block">
              Premium Bridal & Ethnic • Lucknow
            </span>
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="flex items-center space-x-6 text-xs uppercase tracking-widest font-semibold text-[#5a4d43]">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`py-1 relative transition-colors ${
                  isActive
                    ? 'text-[#380e15] font-bold after:content-[""] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[1.5px] after:bg-[#380e15]'
                    : 'hover:text-[#380e15]'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
