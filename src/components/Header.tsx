'use client';

import React, { useState, useEffect } from 'react';
import { Phone, MapPin, Calendar, Menu, X, Sparkles, Clock } from 'lucide-react';
import { STORE_INFO } from '@/data/content';

export default function Header() {
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
    { name: 'Bridal Collections', href: '#collections' },
    { name: 'Awadhi Craftsmanship', href: '#craftsmanship' },
    { name: 'Bespoke Experience', href: '#bespoke' },
    { name: 'Store & Location', href: '#store-location' },
    { name: 'Real Brides', href: '#testimonials' },
    { name: 'FAQs', href: '#faqs' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      {/* Top Announcement Bar */}
      <div className="bg-[#380810] text-[#f4e8c1] text-xs sm:text-sm py-2 px-4 border-b border-[#c5a059]/30">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-2 text-center sm:text-left">
            <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-semibold tracking-wider uppercase bg-[#c5a059]/20 text-[#e6c875] border border-[#c5a059]/40">
              Lucknow Studio
            </span>
            <span className="font-light">
              Visit our Flagship Store: 18/355, Sadbhavna Road, Indira Nagar (Near Maitri Park)
            </span>
          </div>
          <div className="flex items-center gap-4 text-xs font-medium">
            <a
              href={`tel:${STORE_INFO.phone}`}
              className="flex items-center gap-1.5 hover:text-[#d4af37] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#c5a059]" />
              <span>{STORE_INFO.phone}</span>
            </a>
            <span className="hidden md:inline text-white/30">•</span>
            <div className="hidden md:flex items-center gap-1.5 text-white/80">
              <Clock className="w-3.5 h-3.5 text-[#c5a059]" />
              <span>Open 7 Days: 10:30 AM – 9:00 PM</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-[#181414]/95 backdrop-blur-md shadow-xl border-b border-[#c5a059]/20 py-3.5'
            : 'bg-[#181414] py-5 border-b border-[#c5a059]/20'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex flex-col group text-left">
            <span className="font-serif text-2xl sm:text-3xl tracking-[0.25em] font-bold text-white group-hover:text-[#e6c875] transition-colors uppercase">
              Anurosh
            </span>
            <span className="text-[10px] sm:text-xs tracking-[0.35em] text-[#c5a059] uppercase font-light">
              Bridal & Ethnic • Lucknow
            </span>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center space-x-7 text-sm font-medium tracking-wide">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-white/85 hover:text-[#e6c875] transition-colors duration-200 relative py-1 text-xs uppercase tracking-wider"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`https://wa.me/${STORE_INFO.whatsapp}?text=Hello%20Anurosh%20Lucknow,%20I%20would%20like%20to%20inquire%20about%20bridal%20outfits.`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs uppercase tracking-wider px-3.5 py-2 rounded-none border border-[#c5a059]/60 text-[#f4e8c1] hover:bg-[#c5a059]/10 transition-all font-medium"
            >
              WhatsApp Studio
            </a>
            <a
              href="#book-appointment"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-wider px-4 py-2 bg-gradient-to-r from-[#c5a059] to-[#dfbe73] hover:from-[#dfbe73] hover:to-[#c5a059] text-[#22170f] font-semibold shadow-md transition-all duration-300"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Appointment</span>
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="p-2 text-white hover:text-[#e6c875] focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#1f1a18] border-t border-[#c5a059]/30 px-6 py-6 space-y-4">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-white/90 text-sm uppercase tracking-wider hover:text-[#e6c875] py-1 border-b border-white/5"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="pt-4 flex flex-col gap-3">
              <a
                href="#book-appointment"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-3 bg-[#c5a059] text-[#22170f] font-semibold text-xs uppercase tracking-wider"
              >
                Book Bridal Consultation
              </a>
              <a
                href={STORE_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center py-2.5 border border-[#c5a059]/60 text-[#f4e8c1] text-xs uppercase tracking-wider"
              >
                Get Store Directions (Indira Nagar)
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
