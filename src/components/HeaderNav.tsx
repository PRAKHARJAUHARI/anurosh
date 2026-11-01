'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

export default function HeaderNav() {
  const pathname = usePathname();
  const router = useRouter();

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Bridal', href: '/collections/bridal' },
    { name: 'Ethnic', href: '/collections/ethnic' },
    { name: 'Collaboration', href: '/collaboration' },
    { name: 'About', href: '/about' },
  ];

  const handleLogoClick = (e: React.MouseEvent) => {
    window.dispatchEvent(new CustomEvent('play-anurosh-doors'));
    if (pathname !== '/') {
      router.push('/');
    }
  };

  return (
    <header className="border-b border-[#eee6db] bg-white/95 backdrop-blur-md sticky top-0 z-30">
      <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Logo with interactive entrance trigger */}
        <div className="flex items-center gap-3">
          <button
            onClick={handleLogoClick}
            type="button"
            className="text-center sm:text-left group cursor-pointer focus:outline-none"
            title="Click to view the Entrance Sequence"
          >
            <div className="flex items-baseline gap-2">
              <span className="font-serif text-2xl sm:text-3xl font-light tracking-[0.28em] text-[#241e1b] group-hover:text-[#9b7c53] transition-colors uppercase">
                Anurosh
              </span>
              <span className="hidden sm:inline-block text-[9px] uppercase tracking-[0.3em] text-[#9b7c53] font-light">
                • Store Entrance
              </span>
            </div>
            <span className="text-[10px] tracking-[0.3em] text-[#8a7b72] uppercase font-light block">
              Bridal & Ethnic • Lucknow
            </span>
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="flex items-center space-x-7 text-xs uppercase tracking-[0.25em] font-light text-[#5e5149]">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`py-1 relative transition-colors ${
                  isActive
                    ? 'text-[#241e1b] font-normal after:content-[""] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[1px] after:bg-[#241e1b]'
                    : 'hover:text-[#241e1b]'
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
