import React from 'react';
import { MapPin, Phone, Mail, Clock, ArrowUpRight } from 'lucide-react';
import { STORE_INFO } from '@/data/content';

export default function Footer() {
  const seoKeywords = [
    'Bridal Lehenga in Lucknow',
    'Indira Nagar Bridal Studio',
    'Sadbhavna Road Clothing Store',
    'Lakhnavi Chikankari Bridal Wear',
    'Pure Silk Zardozi Lehenga',
    'Groom Sherwani Lucknow',
    'Maitri Park Indira Nagar Boutique',
    'Handcrafted Wedding Trousseau Lucknow',
    'Banarasi Silk Sarees Lucknow',
    'Best Bridal Boutique Uttar Pradesh',
  ];

  return (
    <footer className="bg-[#120e10] text-[#cfc2b6] pt-16 pb-10 border-t border-[#c5a059]/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Brand & Address Column (Col 1-5) */}
          <div className="lg:col-span-5 space-y-4">
            <div>
              <span className="font-serif text-3xl font-bold tracking-[0.25em] text-white uppercase block">
                Anurosh
              </span>
              <span className="text-xs tracking-[0.35em] text-[#e6c875] uppercase font-light">
                Premium Bridal & Ethnic Clothing
              </span>
            </div>

            <p className="text-xs sm:text-sm text-[#b5a79c] leading-relaxed max-w-sm">
              Honoring the regal soul of Awadh with heirloom bridal lehengas, authentic Lakhnavi Chikankari, 
              and bespoke royal ethnic wear crafted for generation-defining weddings.
            </p>

            {/* Official Store Address Card */}
            <div className="p-4 bg-[#1b1517] border border-[#c5a059]/30 space-y-2 text-xs">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#e6c875] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-semibold mb-0.5">
                    Flagship Studio Address:
                  </strong>
                  <address className="not-italic text-[#dfd4c9] leading-relaxed">
                    18/355, Sadbhavna Road, <br />
                    Near Maitri Park, Indira Nagar, <br />
                    Lucknow, Uttar Pradesh - 226016
                  </address>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4 text-xs pt-1">
              <a
                href={STORE_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[#e6c875] hover:text-white transition-colors underline"
              >
                <span>Google Maps Directions</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Quick Navigation (Col 6-8) */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="font-serif text-base font-bold text-white uppercase tracking-wider">
              Couture Collections
            </h3>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#collections" className="hover:text-[#e6c875] transition-colors">
                  Heritage Bridal Lehengas (16 Kali)
                </a>
              </li>
              <li>
                <a href="#collections" className="hover:text-[#e6c875] transition-colors">
                  Pure Lakhnavi Chikankari & Mukaish
                </a>
              </li>
              <li>
                <a href="#collections" className="hover:text-[#e6c875] transition-colors">
                  Bespoke Groom Sherwanis & Safas
                </a>
              </li>
              <li>
                <a href="#collections" className="hover:text-[#e6c875] transition-colors">
                  Banarasi Katan & Meenakari Sarees
                </a>
              </li>
              <li>
                <a href="#collections" className="hover:text-[#e6c875] transition-colors">
                  Sangeet, Haldi & Cocktail Ensembles
                </a>
              </li>
              <li>
                <a href="#bespoke" className="hover:text-[#e6c875] transition-colors">
                  Custom Made-to-Measure Process
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Hours (Col 9-12) */}
          <div className="lg:col-span-4 space-y-3">
            <h3 className="font-serif text-base font-bold text-white uppercase tracking-wider">
              Studio Timings & Contact
            </h3>
            <div className="space-y-2.5 text-xs">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#e6c875] shrink-0" />
                <span>Open All 7 Days: 10:30 AM – 9:00 PM</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#e6c875] shrink-0" />
                <a href={`tel:${STORE_INFO.phone}`} className="text-white hover:text-[#e6c875]">
                  {STORE_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#e6c875] shrink-0" />
                <a href={`mailto:${STORE_INFO.email}`} className="hover:text-white">
                  {STORE_INFO.email}
                </a>
              </div>
            </div>

            <div className="pt-4">
              <p className="text-[11px] uppercase tracking-wider text-[#a89c91] mb-2 font-semibold">
                Private Appointments
              </p>
              <a
                href="#book-appointment"
                className="inline-block px-5 py-2.5 bg-[#c5a059] hover:bg-[#dfbe73] text-[#221610] text-xs font-semibold uppercase tracking-wider transition-colors"
              >
                Book Bridal Consultation
              </a>
            </div>
          </div>
        </div>

        {/* SEO Tag Cloud for Search Engine Crawlers */}
        <div className="py-8 border-b border-white/5">
          <p className="text-[11px] uppercase tracking-widest text-[#a89c91] font-semibold mb-3">
            Popular Searches in Lucknow:
          </p>
          <div className="flex flex-wrap gap-2">
            {seoKeywords.map((kw, i) => (
              <span
                key={i}
                className="text-[11px] text-[#91857b] bg-[#1a1416] px-2.5 py-1 border border-white/5"
              >
                {kw}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom Copyright & Disclaimer */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#80746b]">
          <p>
            © {new Date().getFullYear()} Anurosh Clothing Lucknow. All Rights Reserved. Handcrafted in Indira Nagar.
          </p>
          <div className="flex items-center gap-4 text-xs">
            <span>Store Address: 18/355, Sadbhavna Road, Indira Nagar, Lucknow - 226016</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
